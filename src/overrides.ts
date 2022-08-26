export type ValueOverride = { from: string; to: string };

type Override = {
  aliases?: string[];
  values?: ValueOverride[];
};

export const overrides: Partial<Record<string, Override>> = {
  17: {
    values: [
      { from: 'By (author)', to: 'ByAuthor' },
      { from: 'By (composer)', to: 'ByComposer' },
      { from: 'By (artist)', to: 'ByArtist' },
      { from: 'By (photographer)', to: 'ByPhotographer' },
    ],
  },
  74: { aliases: ['Language'] },
};
