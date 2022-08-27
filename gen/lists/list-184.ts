// This code has been generated with a script

/**
 * Enum EuToySafetyDirectiveHazardWarningType
 * @readonly
 * @enum { string }
 * @description List 184: EU Toy Safety Directive hazard warning type
 */
export enum EuToySafetyDirectiveHazardWarningType {

  /**
   * No warning
   * @description Use to provide positive indication that no warnings are applicable
   * @default '00'
   */
  NoWarning = <any>'00',

  /**
   * Carries ‘CE’ logo
   * @description 
   * @default '01'
   */
  CarriesCeLogo = <any>'01',

  /**
   * Carries minimum age warning
   * @description Use to specify age (in years, or years and months). Provide specific wording in <ProductFormFeatureDescription>
   * @default '02'
   */
  CarriesMinimumAgeWarning = <any>'02',

  /**
   * Carries EU Toy Safety Directive ‘Unsuitable for children ages 0–3’ warning logo
   * @description Carries logo, and must be accompanied by the default warning ‘Not suitable for children under 36 months’ (or its approved equivalent in a language other than English, as appropriate), unless specific wording is provided in <ProductFormFeatureDescription>. If specific alternative wording is carried in <ProductFormFeatureDescription>, this must be used in place of the default text
   * @default '03'
   */
  CarriesEuToySafetyDirectiveUnsuitableForChildrenAges_0_3WarningLogo = <any>'03',

  /**
   * Carries EU Toy Safety Directive hazard warning
   * @description Exact text of warning must be included in <ProductFormFeatureDescription>
   * @default '04'
   */
  CarriesEuToySafetyDirectiveHazardWarning = <any>'04',

  /**
   * Carries other text associated with toy safety
   * @description Exact text (not in itself a warning) must be included in <ProductFormFeatureDescription>. May be used either without any warning, or as text additional to a warning. Note that if no warnings apply, code 00 can provide positive indication of this. Example uses: ‘Suitable for all ages’ or ‘Adult supervision required’
   * @default '05'
   */
  CarriesOtherTextAssociatedWithToySafety = <any>'05',

  /**
   * Material Safety Data Sheet available
   * @description Material Safety Data Sheet (a document required by the EU Toy Safety Directive) available online, typically as a PDF file or similar. <ProductFormFeatureDescription> must carry the URL of the document
   * @default '06'
   */
  MaterialSafetyDataSheetAvailable = <any>'06',

  /**
   * Declaration of Conformity available
   * @description Declaration of Conformity (the document that backs up the CE or CA mark) available online, typically as a PDF file or similar. <ProductFormFeatureDescription> must carry the URL of the document
   * @default '07'
   */
  DeclarationOfConformityAvailable = <any>'07',

  /**
   * Carries EN71 conformity statement
   * @description If specific alternative wording is carried in <ProductFormFeatureDescription>, this must be used in place of the default ‘Conforms to EN71’ text. For use in ONIX 3.0 only.
   * @default '08'
   */
  CarriesEn71ConformityStatement = <any>'08',

  /**
   * Carries ‘UKCA’ logo
   * @description UK Conformity Assessment mark. For use in ONIX 3.0 only
   * @default '09'
   */
  CarriesUkcaLogo = <any>'09',
}
