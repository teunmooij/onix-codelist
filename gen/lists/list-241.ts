// This code has been generated with a script

/**
 * Enum AvItemIdentifierType
 * @readonly
 * @enum { string }
 * @description List 241: AV Item Identifier type
 */
export enum AvItemIdentifierType {
  /**
   * Proprietary
   * @description For example, a publisher’s own identifier. Note that <IDTypeName> is required with proprietary identifiers
   * @default '01'
   */
  Proprietary = <any>'01',

  /**
   * GTIN-13
   * @description Formerly known as the EAN-13 (unhyphenated)
   * @default '03'
   */
  Gtin_13 = <any>'03',

  /**
   * DOI
   * @description Digital Object Identifier (variable length and character set beginning ‘10.’, and without https://doi.org/ or the older http://dx.doi.org/)
   * @default '06'
   */
  Doi = <any>'06',

  /**
   * IMDB
   * @description Motion picture work identifier from the International Movie Database
   * @default '12'
   */
  Imdb = <any>'12',

  /**
   * ISRC
   * @description International Standard Recording Code, 5 alphanumeric characters plus 7 digits
   * @default '18'
   */
  Isrc = <any>'18',

  /**
   * ISAN
   * @description International Standard Audiovisual Number (17 or 26 characters – 16 or 24 hexadecimal digits, plus one or two alphanumeric check characters, and without spaces or hyphens)
   * @default '19'
   */
  Isan = <any>'19',

  /**
   * EIDR DOI
   * @description Entertainment Identifier Registry DOI
   * @default '31'
   */
  EidrDoi = <any>'31',
}