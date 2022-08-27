import { findOne, innerText } from 'domutils';
import fs from 'fs/promises';
import { parseDocument } from 'htmlparser2';

import { overrides } from './overrides';
import { PascalCase } from './pascal-case';
import { EnumMemberDefinition } from './data-model';
import { fixDuplicateKeys } from './fix-duplicate-keys';
import { initToEnumValueName } from './to-enum-value-name';
import { getRowCellText, getTableRows } from './read-table';

const VALUE = 0;
const DESCRIPTION = 1;
const NOTES = 2;

export const readList = async (filename: string) => {
  try {
    const html = await fs.readFile(filename, { encoding: 'utf-8' });
    const document = parseDocument(html);

    const titleElement = findOne(elem => elem.tagName === 'h2', document.children);
    if (!titleElement) throw new Error(`title not found for file ${filename}`);

    const titleText = innerText(titleElement);
    const listNumber = titleText.split(':')[0].split(' ')[1].trim();

    const listOverrides = overrides[listNumber] || {};
    const enumName = PascalCase(titleText.split(':')[1].trim());
    const fileName = `list-${listNumber}`;

    const enumInfo = {
      fullTitle: titleText.trim(),
      enumName,
      aliases: [...(listOverrides.aliases || []), `list${listNumber}`],
      fileName,
      listNumber,
    };

    const rows = getTableRows(document, fileName, listNumber);
    if (!rows) return enumInfo;

    const toEnumValueName = initToEnumValueName(listOverrides);

    const enumMembers = rows.map<EnumMemberDefinition>(row => {
      const getText = getRowCellText(row);
      const description = getText(DESCRIPTION);
      const notes = getText(NOTES);
      return {
        key: toEnumValueName(description),
        value: getText(VALUE),
        description,
        notes: getText(NOTES),
        deprecated: notes?.toLowerCase().includes('deprecated'),
      };
    });

    return {
      ...enumInfo,
      enumMembers: fixDuplicateKeys(enumMembers),
    };
  } catch (error) {
    console.warn(`Failed in list ${filename} `, error);
    throw error;
  }
};
