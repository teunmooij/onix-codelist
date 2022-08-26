// This code has been generated with a script

/**
 * Enum TextItemIdentifierType
 * @readonly
 * @enum { string }
 * @description List 43: Text item identifier type
 */
export enum TextItemIdentifierType {
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
   * @description
   * @default '06'
   */
  Doi = <any>'06',

  /**
   * PII
   * @description Publisher item identifier
   * @default '09'
   */
  Pii = <any>'09',

  /**
   * SICI
   * @description For serial items only
   * @default '10'
   */
  Sici = <any>'10',

  /**
   * ISTC
   * @description
   * @default '11'
   */
  Istc = <any>'11',

  /**
   * ISBN-13
   * @description (Unhyphenated)
   * @default '15'
   */
  Isbn_13 = <any>'15',

  /**
   * ISCC
   * @description International Standard Content Code, a ‘similarity hash’ identifier derived algorithmically from the content itself (see https://iscc.codes). <IDValue> is the 27-character case-sensitive string (including one hyphen) comprising the Meta-ID and Content-ID components of a full ISCC generated from a digital manifestation of the work. Use only with ONIX 3.0
   * @default '39'
   */
  Iscc = <any>'39',
}
