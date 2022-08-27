import fs from 'fs/promises';
import handlebars from 'handlebars';
import { ListMetadata } from './data-model';
import { readList } from './read-list';

export const initGenerateList = async () => {
  const enumTemplateText = await fs.readFile('src/templates/enum.template', { encoding: 'utf-8' });
  const enumTemplate = handlebars.compile(enumTemplateText, { noEscape: true });

  return async (filename: string): Promise<ListMetadata> => {
    const list = await readList(filename);

    await fs.writeFile(`gen/lists/${list.fileName}.ts`, enumTemplate(list));

    return {
      enumName: list.enumName,
      aliases: list.aliases,
      listNumber: list.listNumber,
      filename: list.fileName,
    };
  };
};
