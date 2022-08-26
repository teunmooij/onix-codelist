export type ValueOverride = { from: string; to?: string };

export type Override = {
  aliases?: string[];
  values?: ValueOverride[];
  literal?: true;
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
  49: { aliases: ['Region'] },
  55: {
    literal: true,
    values: [
      { from: 'YYYYMMDD (H)', to: 'YYYYMMDD_H' },
      { from: 'YYYYMM (H)', to: 'YYYYMM_H' },
      { from: 'YYYY (H)', to: 'YYYY_H' },
      { from: 'Text string', to: 'TextString' },
      { from: 'Text string (H)', to: 'TextString_H' },
    ],
  },
  66: { aliases: ['BISACReturnableIndicator'] },
  74: { aliases: ['Language'] },
  91: { aliases: ['Country'] },
  96: { aliases: ['Currency'] },
  121: { aliases: ['TextScript'] },
  203: { aliases: ['AdultAudienceRating'] },
  204: { aliases: ['ReturnsConditions'] },
  229: { aliases: ['Gender'] },
};
