import { generateLists } from '../src/geneate-lists';

jest.mock('fs/promises', () => {
  const realFs = jest.requireActual('fs/promises');
  return {
    ...realFs,
    writeFile: jest.fn(),
  };
});

describe('e2e test', () => {
  it('generates the fiels', async () => {
    await generateLists();
  });
});
