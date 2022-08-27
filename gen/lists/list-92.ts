// This code has been generated with a script

/**
 * Enum SupplierIdentifierType
 * @readonly
 * @enum { string }
 * @description List 92: Supplier identifier type
 */
export enum SupplierIdentifierType {
  /**
   * Proprietary
   * @description Note that <IDTypeName> is required with proprietary identifiers
   * @default '01'
   */
  Proprietary = <any>'01',

  /**
   * Proprietary
   * @description DEPRECATED – use 01
   * @deprecated
   * @default '02'
   */
  Proprietary_deprecated = <any>'02',

  /**
   * Börsenverein Verkehrsnummer
   * @description
   * @default '04'
   */
  BorsenvereinVerkehrsnummer = <any>'04',

  /**
   * German ISBN Agency publisher identifier
   * @description
   * @default '05'
   */
  GermanIsbnAgencyPublisherIdentifier = <any>'05',

  /**
   * GLN
   * @description GS1 global location number (formerly EAN location number)
   * @default '06'
   */
  Gln = <any>'06',

  /**
   * SAN
   * @description Book trade Standard Address Number – US, UK etc
   * @default '07'
   */
  San = <any>'07',

  /**
   * Distributeurscode Boekenbank
   * @description Flemish supplier code
   * @default '12'
   */
  DistributeurscodeBoekenbank = <any>'12',

  /**
   * Fondscode Boekenbank
   * @description Flemish publisher code
   * @default '13'
   */
  FondscodeBoekenbank = <any>'13',

  /**
   * ISNI
   * @description International Standard Name Identifier (used here to identify an organisation). For use in ONIX 3.0 only. See https://isni.org/
   * @default '16'
   */
  Isni = <any>'16',

  /**
   * VAT Identity Number
   * @description Identifier for a business organization for VAT purposes, eg within the EU’s VIES system. See http://ec.europa.eu/taxation_customs/vies/faqvies.do for EU VAT ID formats, which vary from country to country. Generally these consist of a two-letter country code followed by the 8–12 digits of the national VAT ID. Some countries include one or two letters within their VAT ID. See http://en.wikipedia.org/wiki/VAT_identification_number for non-EU countries that maintain similar identifiers. Spaces, dashes etc should be omitted
   * @default '23'
   */
  VatIdentityNumber = <any>'23',
}