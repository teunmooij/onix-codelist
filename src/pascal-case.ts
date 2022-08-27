import { camelCase } from 'camel-case';

const litteralReplacements = [
  { from: 'æ', to: 'ae' },
  { from: 'ß', to: 'ss' },
];

const replacementRegexp = new RegExp(`(${litteralReplacements.map(r => r.from).join('|')})`, 'g');

export const PascalCase = (input: string) => {
  const normalized = input
    .replace(replacementRegexp, val => litteralReplacements.find(r => r.from === val)?.to || '')
    .replace(/[’']s(?=\s)/g, '')
    .normalize('NFD')
    .replace(/\(.*?\)(?!$)/g, '') // remove text between brackets, 2 layers, but not if entire line
    .replace(/(?!^)\(.*?\)/g, '')
    .replace(/[\u0300-\u036f]/g, ''); // remove diacritics
  const camel = camelCase(normalized);

  return camel[0].toUpperCase() + camel.substring(1);
};
