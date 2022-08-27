// This code has been generated with a script

/**
 * Enum WorkIdentifierType
 * @readonly
 * @enum { string }
 * @description List 16: Work identifier type
 */
export enum WorkIdentifierType {

  /**
   * Proprietary
   * @description Note that <IDTypeName> is required with proprietary identifiers
   * @default '01'
   */
  Proprietary = <any>'01',

  /**
   * ISBN-10
   * @description 10-character ISBN of manifestation of work, when this is the only work identifier available – now DEPRECATED in ONIX for Books, except where providing historical information for compatibility with legacy systems. It should only be used in relation to products published before 2007 – when ISBN-13 superseded it – and should never be used as the ONLY identifier (it should always be accompanied by the correct GTIN-13 / ISBN-13 of the manifestation of the work)
   * @deprecated
   * @default '02'
   */
  Isbn_10 = <any>'02',

  /**
   * DOI
   * @description Digital Object Identifier (variable length and character set)
   * @default '06'
   */
  Doi = <any>'06',

  /**
   * ISTC
   * @description International Standard Text Code (16 characters: numerals and letters A-F, unhyphenated)
   * @default '11'
   */
  Istc = <any>'11',

  /**
   * ISBN-13
   * @description 13-character ISBN of a manifestation of work, when this is the only work identifier available (13 digits, without spaces or hyphens)
   * @default '15'
   */
  Isbn_13 = <any>'15',

  /**
   * ISRC
   * @description International Standard Recording Code
   * @default '18'
   */
  Isrc = <any>'18',

  /**
   * GLIMIR
   * @description Global Library Manifestation Identifier, OCLC’s ‘manifestation cluster’ ID
   * @default '32'
   */
  Glimir = <any>'32',

  /**
   * OWI
   * @description OCLC Work Identifier
   * @default '33'
   */
  Owi = <any>'33',

  /**
   * ISCC
   * @description International Standard Content Code, a ‘similarity hash’ identifier derived algorithmically from the content itself (see https://iscc.codes). <IDValue> is the 27-character case-sensitive string (including one hyphen) comprising the Meta-ID and Content-ID components of a full ISCC generated from a digital manifestation of the work. Use only with ONIX 3.0
   * @default '39'
   */
  Iscc = <any>'39',
}
