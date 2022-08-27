import fs from 'fs/promises';
import handlebars from 'handlebars';

import { ListMetadata } from './data-model';

export const generateIndex = async (declarations: ListMetadata[]) => {
  const indexTemplateText = await fs.readFile('src/templates/index.template', { encoding: 'utf-8' });
  const indexTemplate = handlebars.compile(indexTemplateText);
  await fs.writeFile(
    'gen/index.ts',
    indexTemplate({ declarations: declarations.slice().sort((a, b) => Number(a.listNumber) - Number(b.listNumber)) }),
  );
};
