export type ValueOverride = { from: string; to?: string };

export type Override = {
  aliases?: string[];
  values?: ValueOverride[];
  literal?: true;
};

export const overrides: Partial<Record<string, Override>> = {
  12: {
    values: [{ from: 'International edition (US)', to: 'InternationalEdition_US' }],
  },
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
  121: {
    aliases: ['TextScript'],
    values: [
      { from: 'Arabic (Nastaliq variant)', to: 'NastaliqArabic' },
      { from: 'Cyrillic (Old Church Slavonic variant)', to: 'OldCyrillic' },
      { from: 'Han (Simplified variant)', to: 'SimplifiedHan' },
      { from: 'Han (Traditional variant)', to: 'TraditionalHan' },
      { from: 'Latin (Gaelic variant)', to: 'GaelicLatin' },
      { from: 'Latin (Fraktur variant)', to: 'FrakturLatin' },
      { from: 'Reserved for private use (start)', to: 'ReservedForPrivateUse_Start' },
      { from: 'Reserved for private use (end)', to: 'ReservedForPrivateUse_End' },
      { from: 'Syriac (Estrangelo variant)', to: 'EstrangeloSyriac' },
      { from: 'Syriac (Western variant)', to: 'WesternSyriac' },
      { from: 'Syriac (Eastern variant)', to: 'EasternSyriac' },
      { from: 'Symbols (Emoji variant)', to: 'EmojiSymbols' },
    ],
  },
  139: {
    values: [
      { from: 'BJ’s Wholesale Club', to: 'BJsWholesaleClub' },
      { from: 'TSO (The Stationery Office)', to: 'TSO' },
    ],
  },
  141: {
    values: [
      { from: 'GTIN-13+5 (US dollar price encoded)', to: 'Gtin_13_5_US' },
      { from: 'GTIN-13+5 (CAN dollar price encoded)', to: 'Gtin_13_5_CAN' },
      { from: 'GTIN-13+5 (UK Pound Sterling price encoded)', to: 'Gtin_13_5_UK' },
      { from: 'UPC-12 (price-point)', to: 'Upc_12_Price' },
      { from: 'UPC-12+5 (price-point)', to: 'Upc_12_5_Price' },
    ],
  },
  143: {
    values: [
      {
        from: ' WARNING: CHOKING HAZARD – Children under 8 yrs. can choke or suffocate on uninflated or broken balloons. Adult supervision required | Keep uninflated balloons from children. Discard broken balloons at once.',
        to: 'WarningChokingHazardUninflatedBalloonsChildrenUnder_8Yrs',
      },
      {
        from: 'WARNING – California Proposition 65 carcinogenic, teratogenic or other reproductively harmful chemical hazard',
        to: 'WarningCaliforniaProposition_65ChemicalHazard',
      },
    ],
  },
  147: {
    values: [
      { from: 'Days (fixed start)', to: 'DaysFixed' },
      { from: 'Weeks (fixed start)', to: 'WeeksFixed' },
      { from: 'Months (fixed start)', to: 'MonthsFixed' },
    ],
  },
  203: { aliases: ['AdultAudienceRating'] },
  204: { aliases: ['ReturnsConditions'] },
  229: { aliases: ['Gender'] },
};
