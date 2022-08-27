import fs from 'fs/promises';
import { generateLists } from '../src/geneate-lists';

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
    const writeFileArgs = (fs.writeFile as jest.Mock).mock.calls;

    for (const args of writeFileArgs) {
      const expected = await fs.readFile(args[0], { encoding: 'utf-8' });
      expect(args[1]).toEqual(expected);
    }
  });
});
