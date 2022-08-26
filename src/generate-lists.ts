import fs from 'fs/promises';
import handlebars from 'handlebars';
import { readList } from './read-list';

const createFolders = async () => {
  await fs.mkdir('gen/lists', { recursive: true });
};

const generateLists = async () => {
  await createFolders();
  const enumTemplateText = await fs.readFile('src/templates/enum.template', { encoding: 'utf-8' });
  const enumTemplate = handlebars.compile(enumTemplateText, { noEscape: true });

  const generateList = async (filename: string) => {
    const list = await readList(filename);

    await fs.writeFile(`gen/lists/${list.fileName}.ts`, enumTemplate(list));

    return {
      enumName: list.enumName,
      aliases: list.aliases,
      listNumber: list.listNumber,
      filename: list.fileName,
    };
  };

  const files = await fs.readdir('html-lists');
  const declarations = await Promise.all(files.map(file => generateList(`html-lists/${file}`)));

  const indexTemplateText = await fs.readFile('src/templates/index.template', { encoding: 'utf-8' });
  const indexTemplate = handlebars.compile(indexTemplateText);
  await fs.writeFile(
    'gen/index.ts',
    indexTemplate({ declarations: declarations.slice().sort((a, b) => Number(a.listNumber) - Number(b.listNumber)) }),
  );
};

generateLists();
