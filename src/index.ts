import fs from 'fs/promises';
import { generateIndex } from './generate-index';
import { initGenerateList } from './generate-list';

const createFolders = async () => {
  await fs.mkdir('gen/lists', { recursive: true });
};

const generateLists = async () => {
  await createFolders();
  const generateList = await initGenerateList();

  const filenames = await fs.readdir('html-lists');
  const declarations = await Promise.all(filenames.map(name => generateList(`html-lists/${name}`)));
  await generateIndex(declarations);
};

await generateLists();
