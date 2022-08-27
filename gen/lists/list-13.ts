// This code has been generated with a script

/**
 * Enum SeriesIdentifierType
 * @readonly
 * @enum { string }
 * @description List 13: Series identifier type
 */
export enum SeriesIdentifierType {
  /**
   * Proprietary
   * @description For example, publisher’s own series ID. Note that <IDTypeName> is required with proprietary identifiers
   * @default '01'
   */
  Proprietary = <any>'01',

  /**
   * ISSN
   * @description International Standard Serial Number, unhyphenated, 8 digits
   * @default '02'
   */
  Issn = <any>'02',

  /**
   * German National Bibliography series ID
   * @description Maintained by the Deutsche Nationalbibliothek
   * @default '03'
   */
  GermanNationalBibliographySeriesId = <any>'03',

  /**
   * German Books in Print series ID
   * @description Maintained by VLB
   * @default '04'
   */
  GermanBooksInPrintSeriesId = <any>'04',

  /**
   * Electre series ID
   * @description Maintained by Electre Information, France
   * @default '05'
   */
  ElectreSeriesId = <any>'05',

  /**
   * DOI
   * @description Digital Object Identifier (variable length and character set)
   * @default '06'
   */
  Doi = <any>'06',

  /**
   * ISBN-13
   * @description Use only where the collection (series or set) is available as a single product
   * @default '15'
   */
  Isbn_13 = <any>'15',

  /**
   * URN
   * @description Uniform Resource Name
   * @default '22'
   */
  Urn = <any>'22',

  /**
   * BNF Control number
   * @description French National Bibliography series ID. Identifiant des publications en série maintenu par la Bibliothèque Nationale de France
   * @default '29'
   */
  BnfControlNumber = <any>'29',

  /**
   * ARK
   * @description Archival Resource Key, as a URL (including the address of the ARK resolver provided by eg a national library)
   * @default '35'
   */
  Ark = <any>'35',

  /**
   * ISSN-L
   * @description International Standard Serial Number ‘linking ISSN’, used when distinct from the serial ISSN. Unhyphenated, 8 digits. For use in ONIX 3.0 only
   * @default '38'
   */
  IssnL = <any>'38',
}