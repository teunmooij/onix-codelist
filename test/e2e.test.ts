import fs from 'fs/promises';
import { generateLists } from '../src/geneate-lists';

jest.setTimeout(20000);

jest.mock('fs/promises', () => {
  const realFs = jest.requireActual('fs/promises');
  return {
    ...realFs,
    mkdir: jest.fn(),
    writeFile: jest.fn(),
  };
});

describe('e2e test', () => {
  it('generates the files', async () => {
    await generateLists();

    expect(fs.mkdir).toHaveBeenCalledTimes(1);
    expect(fs.mkdir).toHaveBeenCalledWith('gen/lists', { recursive: true });

    expect(fs.writeFile).toHaveBeenCalledTimes(162);
  });
});
