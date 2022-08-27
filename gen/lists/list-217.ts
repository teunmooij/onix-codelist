// This code has been generated with a script

/**
 * Enum PriceIdentifierType
 * @readonly
 * @enum { string }
 * @description List 217: Price identifier type
 */
export enum PriceIdentifierType {

  /**
   * Proprietary
   * @description Note that <IDTypeName> is required for proprietary identifiers
   * @default '01'
   */
  Proprietary = <any>'01',

  /**
   * Proprietary price point identifier
   * @description Proprietary identifier uniquely identifies price amount and currency. Two unrelated products with the same price amount carry the same identifier, though their price types may be different
   * @default '02'
   */
  ProprietaryPricePointIdentifier = <any>'02',

  /**
   * Proprietary price type identifier
   * @description Proprietary identifier uniquely identifies price type, qualifier and any constraints and conditions. Two unrelated products with the same price type carry the same identifier, though their price points may be different
   * @default '03'
   */
  ProprietaryPriceTypeIdentifier = <any>'03',

  /**
   * Proprietary price point and type identifier
   * @description Proprietary identifier identifies a unique combination of price point and type, though two unrelated products may carry the same identifier if all details of their prices are identical
   * @default '04'
   */
  ProprietaryPricePointAndTypeIdentifier = <any>'04',

  /**
   * Proprietary unique price identifier
   * @description Proprietary identifier is unique to a single price point, price type and product. No two products can carry the same identifier, even if all details of their prices are identical
   * @default '05'
   */
  ProprietaryUniquePriceIdentifier = <any>'05',

  /**
   * Proprietary product price point identifier
   * @description Proprietary identifier uniquely identifies a specific combination of product, price amount and currency, independent of the price type
   * @default '06'
   */
  ProprietaryProductPricePointIdentifier = <any>'06',

  /**
   * Proprietary product price type identifier
   * @description Proprietary identifier uniquely identifies a specific combination of product, price type, qualifier and any constraints and conditions, independent of the price amount and currency. A product with the same product price type identififer may carry differing price amounts, currencies at different points in time
   * @default '07'
   */
  ProprietaryProductPriceTypeIdentifier = <any>'07',
}
