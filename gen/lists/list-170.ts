// This code has been generated with a script

/**
 * Enum DiscountType
 * @readonly
 * @enum { string }
 * @description List 170: Discount type
 */
export enum DiscountType {

  /**
   * Rising discount
   * @description Discount applied to all units in a qualifying order. The default if no <DiscountType> is specified
   * @default '01'
   */
  RisingDiscount = <any>'01',

  /**
   * Rising discount (cumulative)
   * @description Additional discount may be applied retrospectively, based on number of units ordered over a specific period
   * @default '02'
   */
  RisingDiscount_1 = <any>'02',

  /**
   * Progressive discount
   * @description Discount applied to marginal units in a qualifying order
   * @default '03'
   */
  ProgressiveDiscount = <any>'03',

  /**
   * Progressive discount (cumulative)
   * @description Previous orders within a specific time period are counted when calculating a progressive discount
   * @default '04'
   */
  ProgressiveDiscount_1 = <any>'04',
}
