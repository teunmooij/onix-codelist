import { findOne, innerText } from 'domutils';
import render from 'dom-serializer';
import fs from 'fs/promises';
import { parseDocument } from 'htmlparser2';
import { camelCase } from 'camel-case';
import { xml2js } from 'xml-js';
import handlebars from 'handlebars';
import * as R from 'ramda';

const VALUE = 0;
const DESCRIPTION = 1;
const NOTES = 2;
const awaitingDefinition = ['88', '251'];
const startsWithNumberPattern = /^\d/;

type Row<elem extends string> = {
  [K in elem]: {
    text: string;
  }[];
};

type Table = {
  thead: {
    tr: Row<'th'>;
  };
  tbody: {
    tr: Row<'td'>[] | Row<'td'>;
  };
};

type EnumMemberDefinition = {
  key: string;
  value: string;
  description: string;
  notes: string;
  deprecated?: boolean;
};

const getRowCellText = (row: Row<'td'>) => (cellNumber: number) => {
  const cell = row.td[cellNumber] as any;
  if (cell.span) {
    const texts = [cell.text[0], cell.span.text, cell.text[1]];
    return texts.join(' ');
  }

  return cell.text;
};

const isFaultyRows = (rows: any) => {
  if (Array.isArray(rows)) return false;
  return rows?.td?._attributes?.colspan === '3';
};

const PascalCase = (input: string) => {
  const camel = camelCase(input);
  return camel[0].toUpperCase() + camel.substring(1);
};

const toEnumName = (input: string) => {
  const pascal = PascalCase(input);
  if (startsWithNumberPattern.test(input)) return `'${pascal}'`;
  return pascal;
};

const fixDuplicates = (enumMembers: EnumMemberDefinition[]) => {
  const membersByKey = R.groupBy(mem => mem.key, enumMembers);
  if (Object.keys(membersByKey).length === enumMembers.length) return enumMembers;

  return Object.entries(membersByKey).reduce((total, [key, members]) => {
    if (members.length === 1) return [...total, ...members];

    const grouped = R.groupBy(mem => (mem.deprecated ? 'D' : 'N'), members);
    const basic = (grouped.N || [grouped.D[0]]).map((mem, index) => ({
      ...mem,
      key: index === 0 ? key : `${key}_${index}`,
    }));
    const remaining = grouped.N ? grouped.D || [] : grouped.D.slice(1);
    const deprecated = remaining.map((mem, index) => ({
      ...mem,
      key: index === 0 ? `${key}_deprecated` : `${key}_deprecated_${index}`,
    }));

    return [...total, ...basic, ...deprecated];
  }, [] as EnumMemberDefinition[]);
};

const readList = async (filename: string) => {
  try {
    const html = await fs.readFile(filename, { encoding: 'utf-8' });
    const document = parseDocument(html);

    const titleElement = findOne(elem => elem.tagName === 'h2', document.children);
    const tableElement = findOne(elem => elem.tagName === 'table', document.children);
    if (!titleElement) throw new Error(`title not found for file ${filename}`);
    if (!tableElement) throw new Error(`table not found for file ${filename}`);

    const titleText = innerText(titleElement);
    const shortTitle = camelCase(titleText.split(':')[1].trim());
    const listNumber = titleText.split(':')[0].split(' ')[1].trim();
    const fileName = `list-${listNumber}`;

    const enumInfo = {
      fullTitle: titleText.trim(),
      shortTitle,
      fileName,
      listNumber,
    };

    const tableText = render(tableElement);
    const tableDoc = xml2js(tableText, { compact: true, trim: true, textKey: 'text' }) as { table: Table };

    if (awaitingDefinition.includes(listNumber) && isFaultyRows(tableDoc.table.tbody.tr)) {
      return enumInfo;
    }

    const rows = Array.isArray(tableDoc.table.tbody.tr) ? tableDoc.table.tbody.tr : [tableDoc.table.tbody.tr];
    const enumMembers = rows.map<EnumMemberDefinition>(row => {
      const getText = getRowCellText(row);
      const description = getText(DESCRIPTION);
      const notes = getText(NOTES);
      return {
        key: toEnumName(description),
        value: getText(VALUE),
        description,
        notes: getText(NOTES),
        deprecated: notes?.toLowerCase().includes('deprecated'),
      };
    });

    return {
      ...enumInfo,
      enumMembers: fixDuplicates(enumMembers),
    };
  } catch (error) {
    console.warn(`Failed in list ${filename} `, error);
    throw error;
  }
};

const createFolders = async () => {
  await fs.mkdir('src/lists', { recursive: true });
};

const generateLists = async () => {
  await createFolders();
  const enumTemplateText = await fs.readFile('scripts/enum.template', { encoding: 'utf-8' });
  const enumTemplate = handlebars.compile(enumTemplateText, { noEscape: true });

  const generateList = async (filename: string) => {
    const list = await readList(filename);

    await fs.writeFile(`src/lists/${list.fileName}.ts`, enumTemplate(list));

    return {
      enumName: list.shortTitle,
      listNumber: list.listNumber,
      filename: list.fileName,
    };
  };

  const files = await fs.readdir('html-lists');
  const declarations = await Promise.all(files.map(file => generateList(`html-lists/${file}`)));

  const indexTemplateText = await fs.readFile('scripts/index.template', { encoding: 'utf-8' });
  const indexTemplate = handlebars.compile(indexTemplateText);
  await fs.writeFile(
    'src/index.ts',
    indexTemplate({ declarations: declarations.slice().sort((a, b) => Number(a.listNumber) - Number(b.listNumber)) }),
  );
};

generateLists();
