// This code has been generated with a script

/**
 * Enum PriceConditionType
 * @readonly
 * @enum { string }
 * @description List 167: Price condition type
 */
export enum PriceConditionType {

  /**
   * No conditions
   * @description Allows positive indication that there are no conditions (the default if <PriceCondition> is omitted)
   * @default '00'
   */
  NoConditions = <any>'00',

  /**
   * Includes updates
   * @description Purchase at this price includes specified updates
   * @default '01'
   */
  IncludesUpdates = <any>'01',

  /**
   * Must also purchase updates
   * @description Purchase at this price requires commitment to purchase specified updates, not included in price
   * @default '02'
   */
  MustAlsoPurchaseUpdates = <any>'02',

  /**
   * Updates available
   * @description Updates may be purchased separately, no minimum commitment required
   * @default '03'
   */
  UpdatesAvailable = <any>'03',

  /**
   * Linked subsequent purchase price
   * @description Use with <PriceConditionQuantity> and <ProductIdentifier>. Purchase at this price requires commitment to purchase the specified linked product, which is not included in the price
   * @default '04'
   */
  LinkedSubsequentPurchasePrice = <any>'04',

  /**
   * Linked prior purchase price
   * @description Use with <PriceConditionQuantity> and <ProductIdentifier>. Purchase at this price requires prior purchase of the specified linked product
   * @default '05'
   */
  LinkedPriorPurchasePrice = <any>'05',

  /**
   * Linked price
   * @description Use with <PriceConditionQuantity> and <ProductIdentifier>. Purchase at this price requires simultaneous purchase of the specified linked product, which is not included in the price
   * @default '06'
   */
  LinkedPrice = <any>'06',

  /**
   * Auto-renewing
   * @description The rental or subscription will automatically renew at the end of the period unless actively cancelled
   * @default '07'
   */
  AutoRenewing = <any>'07',

  /**
   * Combined price
   * @description Purchase at this price includes the price of the specified other product
   * @default '08'
   */
  CombinedPrice = <any>'08',

  /**
   * Rental duration
   * @description The duration of the rental to which the price applies. Deprecated, use <PriceConstraint> instead
   * @deprecated
   * @default '10'
   */
  RentalDuration = <any>'10',

  /**
   * Rental to purchase
   * @description Purchase at this price requires prior rental of the product. <PriceConditionQuantity> gives minimum prior rental period, and <ProductIdentifier> may be used if rental uses a different product identifier
   * @default '11'
   */
  RentalToPurchase = <any>'11',

  /**
   * Rental extension
   * @description Upgrade to longer rental duration. <PriceConditionQuantity> gives minimum prior rental duration, and <ProductIdentifier> may be used if rental uses a different product identifier. Separate price constraint with time limited license duration (code 07) specifies the new combined rental duration
   * @default '12'
   */
  RentalExtension = <any>'12',
}
