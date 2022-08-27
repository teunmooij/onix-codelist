// This code has been generated with a script

/**
 * Enum SalesOutletIdentifierType
 * @readonly
 * @enum { string }
 * @description List 102: Sales outlet identifier type
 */
export enum SalesOutletIdentifierType {
  /**
   * Proprietary
   * @description Proprietary list of retail and other end-user sales outlet IDs. Note that <IDTypeName> is required with proprietary identifiers
   * @default '01'
   */
  Proprietary = <any>'01',

  /**
   * ONIX retail sales outlet ID code
   * @description Use with ONIX retail and other end-user sales outlet IDs from List 139
   * @default '03'
   */
  OnixRetailSalesOutletIdCode = <any>'03',

  /**
   * Retail sales outlet GLN
   * @description 13-digit GS1 global location number (formerly EAN location number). For use in ONIX 3.0 only
   * @default '04'
   */
  RetailSalesOutletGln = <any>'04',

  /**
   * Retail sales outlet SAN
   * @description 7-digit Book trade Standard Address Number (US, UK etc). For use in ONIX 3.0 only
   * @default '05'
   */
  RetailSalesOutletSan = <any>'05',
}