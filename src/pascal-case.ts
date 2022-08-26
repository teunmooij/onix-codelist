import { camelCase } from 'camel-case';

export const PascalCase = (input: string) => {
  const normalized = input
    .replace(/æ/g, 'ae')
    .replace(/ß/g, 'ss')
    .replace(/[’']s(?=\s)/g, '')
    .normalize('NFD')
    .replace(/\(.*?\)(?!$)/g, '') // remove text between brackets, 2 layers, but not if entire line
    .replace(/(?!^)\(.*?\)/g, '')
    .replace(/[\u0300-\u036f]/g, ''); // remove diacritics
  const camel = camelCase(normalized);

  return camel[0].toUpperCase() + camel.substring(1);
};
