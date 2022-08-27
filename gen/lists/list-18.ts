// This code has been generated with a script

/**
 * Enum PersonOrganizationNameType
 * @readonly
 * @enum { string }
 * @description List 18: Person / organization name type
 */
export enum PersonOrganizationNameType {
  /**
   * Unspecified
   * @description Usually the name as it is presented on the book
   * @default '00'
   */
  Unspecified = <any>'00',

  /**
   * Pseudonym
   * @description May be used to give a well-known pseudonym, where the primary name is a ‘real’ name
   * @default '01'
   */
  Pseudonym = <any>'01',

  /**
   * Authority-controlled name
   * @description
   * @default '02'
   */
  AuthorityControlledName = <any>'02',

  /**
   * Earlier name
   * @description Use only within <AlternativeName>
   * @default '03'
   */
  EarlierName = <any>'03',

  /**
   * ‘Real’ name
   * @description May be used to identify a well-known real name, where the primary name is a pseudonym
   * @default '04'
   */
  RealName = <any>'04',

  /**
   * Transliterated / translated form of primary name
   * @description Use only within <AlternativeName>, when the primary name type is unspecified, for names in a different script or language
   * @default '05'
   */
  TransliteratedTranslatedFormOfPrimaryName = <any>'05',

  /**
   * Later name
   * @description Use only within <AlternativeName>
   * @default '06'
   */
  LaterName = <any>'06',

  /**
   * Fictional character name
   * @description Use only within <NameAsSubject>, to indicate the subject is fictional. For use in ONIX 3.0 only
   * @default '07'
   */
  FictionalCharacterName = <any>'07',
}