import { findOne } from 'domutils';
import renderDom from 'dom-serializer';
import { Document } from 'domhandler';
import { xml2js } from 'xml-js';

const awaitingDefinition = ['88', '251'];

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

export const getRowCellText = (row: Row<'td'>) => (cellNumber: number) => {
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

export const getTableRows = (document: Document, filename: string, listNumber: string) => {
  const tableElement = findOne(elem => elem.tagName === 'table', document.children);
  if (!tableElement) throw new Error(`table not found for file ${filename}`);
  const tableText = renderDom(tableElement);
  const tableDoc = xml2js(tableText, { compact: true, trim: true, textKey: 'text' }) as { table: Table };

  if (awaitingDefinition.includes(listNumber) && isFaultyRows(tableDoc.table.tbody.tr)) {
    return undefined;
  }

  return Array.isArray(tableDoc.table.tbody.tr) ? tableDoc.table.tbody.tr : [tableDoc.table.tbody.tr];
};
