// This code has been generated with a script

/**
 * Enum PriceConditionQuantityType
 * @readonly
 * @enum { string }
 * @description List 168: Price condition quantity type
 */
export enum PriceConditionQuantityType {

  /**
   * Time period
   * @description The price condition quantity represents a time period
   * @default '01'
   */
  TimePeriod = <any>'01',

  /**
   * Number of updates
   * @description The price condition quantity is a number of updates
   * @default '02'
   */
  NumberOfUpdates = <any>'02',

  /**
   * Number of linked products
   * @description Use with Price condition type 06 and a Quantity of units. Price is valid when purchased with a specific number of products from a list of product identifiers provided in the associated <ProductIdentifier> composites. Use for example when describing a price for this product which is valid if it is purchased along with any two from a list of other products
   * @default '03'
   */
  NumberOfLinkedProducts = <any>'03',

  /**
   * Number of copies of this product
   * @description Use with Price condition type 06 and a Quantity of units. Meeting the Price condition qualifies for purchase of the specified number of copies of this product at this price. Use for example when describing a price that applies to the specified number of units of this product which is valid if they are purchased along with a number of copies of another product
   * @default '04'
   */
  NumberOfCopiesOfThisProduct = <any>'04',
}
