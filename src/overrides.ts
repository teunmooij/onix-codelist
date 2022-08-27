export type ValueOverride = { from: string; to?: string };

export type Override = {
  aliases?: string[];
  values?: ValueOverride[];
  literal?: true;
};

export const overrides: Partial<Record<string, Override>> = {
  12: {
    values: [{ from: 'International edition (US)', to: 'InternationalEditionUS' }],
  },
  17: {
    values: [
      { from: 'By (author)', to: 'ByAuthor' },
      { from: 'By (composer)', to: 'ByComposer' },
      { from: 'By (artist)', to: 'ByArtist' },
      { from: 'By (photographer)', to: 'ByPhotographer' },
      { from: 'Performed by (orchestra, band, ensemble)', to: 'PerformedByMusicalGroup' },
    ],
  },
  24: {
    values: [
      { from: 'Hours HHH', to: 'HoursHHH' },
      { from: 'Hours and minutes HHHMM', to: 'HoursAndMinutesHHHMM' },
      { from: 'Hours minutes seconds HHHMMSS', to: 'HoursMinutesSecondsHHHMMSS' },
    ],
  },
  27: {
    values: [{ from: 'Keywords (not for display)', to: 'KeywordsNotForDisplay' }],
  },
  29: {
    values: [
      { from: 'AVI (revised)', to: 'AviRevised' },
      { from: 'Common European Framework of Reference for Language Learning (CEFR)', to: 'CEFR' },
    ],
  },
  30: {
    values: [{ from: 'Finnish Upper secondary school course (2021+)', to: 'FinnishUpperSecondarySchoolCourse_2021' }],
  },
  46: {
    values: [
      {
        from: 'Not for sale in the specified countries or territories (reason unspecified)',
        to: 'NotForSaleInTheSpecifiedCountries',
      },
      {
        from: 'Not for sale in the specified countries (but publisher holds exclusive rights in those countries or territories)',
        to: 'NotForSaleInTheSpecifiedCountriesExclusiveRights',
      },
      {
        from: 'Not for sale in the specified countries (publisher holds non-exclusive rights in those countries or territories)',
        to: 'NotForSaleInTheSpecifiedCountriesNonExclusiveRights',
      },
      {
        from: 'Not for sale in the specified countries (because publisher does not hold rights in those countries or territories)',
        to: 'NotForSaleInTheSpecifiedCountriesNoRights',
      },
    ],
  },
  48: {
    values: [
      { from: 'Diameter (sphere)', to: 'DiameterSphere' },
      { from: 'Diameter (tube or cylinder)', to: 'DiameterCylinder' },
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
  150: {
    values: [{ from: 'Digital (on physical carrier)', to: 'DigitalPhysicalCarrier' }],
  },
  170: {
    values: [
      { from: 'Rising discount (cumulative)', to: 'RisingDiscountCumulative' },
      { from: 'Progressive discount (cumulative)', to: 'ProgressiveDiscountCumulative' },
    ],
  },
  175: {
    values: [
      { from: 'Trade paperback (US)', to: 'TradePaperbackUS' },
      { from: 'Paperback (DE)', to: 'PaperbackDE' },
    ],
  },
  203: {
    aliases: ['AdultAudienceRating'],
    values: [
      { from: 'Content warning (sex)', to: 'ContentWarningSex' },
      { from: 'Content warning (violence)', to: 'ContentWarningViolence' },
      { from: 'Content warning (drug-taking)', to: 'ContentWarningDrugTaking' },
      { from: 'Content warning (language)', to: 'ContentWarningLanguage' },
      { from: 'Content warning (intolerance)', to: 'ContentWarningIntolerance' },
      { from: 'Content warning (abuse)', to: 'ContentWarningAbuse' },
      { from: 'Content warning (self-harm)', to: 'ContentWarningSelfHarm' },
    ],
  },
  204: { aliases: ['ReturnsConditions'] },
  229: { aliases: ['Gender'] },
  252: {
    values: [
      { from: 'Composite (CMYK)', to: 'CompositeCMYK' },
      { from: 'Composite (RGB)', to: 'CompositeRGB' },
    ],
  },
};
