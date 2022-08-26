// This code has been generated with a script

/**
 * Enum AudienceType
 * @readonly
 * @enum { string }
 * @description List 28: Audience type
 */
export enum AudienceType {
  /**
   * General / adult
   * @description For a non-specialist adult audience. Consider also adding an ONIX Adult audience rating
   * @default '01'
   */
  GeneralAdult = <any>'01',

  /**
   * Children
   * @description For a young audience typically up to about the age of 12, not specifically for any educational purpose. An audience range should also be included
   * @default '02'
   */
  Children = <any>'02',

  /**
   * Teenage
   * @description For a teenage or ‘young adult’ audience typically from about the age of 12 to the late teens, not specifically for any educational purpose. An audience range should also be included
   * @default '03'
   */
  Teenage = <any>'03',

  /**
   * Primary and secondary education
   * @description Kindergarten, pre-school, primary / elementary or secondary / high school education. Note ‘secondary’ includes both level 2 and level 3 secondary education as defined in UNESCO’s ISCED 2011 (see http://uis.unesco.org/en/topic/international-standard-classification-education-isced). An audience range should also be included
   * @default '04'
   */
  PrimaryAndSecondaryEducation = <any>'04',

  /**
   * Pre-primary education
   * @description Equivalent to UNESCO’s ISCED Level 0 – see http://uis.unesco.org/en/topic/international-standard-classification-education-isced (note codes 11–14 are specific subsets of the Primary and secondary education audience, code 04). For use in ONIX 3.0 only
   * @default '11'
   */
  PrePrimaryEducation = <any>'11',

  /**
   * Primary education
   * @description Equivalent to ISCED Level 1. For use in ONIX 3.0 only
   * @default '12'
   */
  PrimaryEducation = <any>'12',

  /**
   * Lower secondary education
   * @description Equivalent to ISCED Level 2 (general and vocational). For use in ONIX 3.0 only
   * @default '13'
   */
  LowerSecondaryEducation = <any>'13',

  /**
   * Upper secondary education
   * @description Equivalent to ISCED Level 3 (general and vocational). For use in ONIX 3.0 only
   * @default '14'
   */
  UpperSecondaryEducation = <any>'14',

  /**
   * Tertiary education
   * @description For tertiary education typically in universities and colleges of higher education, equivalent to ISCED Levels 5–7
   * @default '05'
   */
  TertiaryEducation = <any>'05',

  /**
   * Professional and scholarly
   * @description For an expert adult audience, including professional development and academic research
   * @default '06'
   */
  ProfessionalAndScholarly = <any>'06',

  /**
   * Adult education
   * @description For any adult audience in a formal or semi-formal learning setting, eg vocational training and apprenticeships (collectively, equivalent to ISCED Level 4), or practical or recreational learning for adults
   * @default '08'
   */
  AdultEducation = <any>'08',

  /**
   * EFL / TEFL / TESOL
   * @description Intended for use in teaching and learning English as a second, non-native or additional language. Indication of the language level (eg CEFR) should be included where possible. An audience range should also be included if the product is (also) suitable for use in primary and secondary education
   * @default '07'
   */
  EflTeflTesol = <any>'07',

  /**
   * Second / additional language teaching
   * @description Intended for use in teaching  second, non-native or additional languages
   * @default '09'
   */
  SecondAdditionalLanguageTeaching = <any>'09',
}
