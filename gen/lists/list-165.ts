// This code has been generated with a script

/**
 * Enum SupplierOwnCodeType
 * @readonly
 * @enum { string }
 * @description List 165: Supplier own code type
 */
export enum SupplierOwnCodeType {

  /**
   * Supplier’s sales classification
   * @description A rating applied by a supplier (typically a wholesaler) to indicate its assessment of the expected or actual sales performance of a product
   * @default '01'
   */
  SupplierSalesClassification = <any>'01',

  /**
   * Supplier’s bonus eligibility
   * @description A supplier’s coding of the eligibility of a product for a bonus scheme on overall sales
   * @default '02'
   */
  SupplierBonusEligibility = <any>'02',

  /**
   * Publisher’s sales classification
   * @description A rating applied by the publisher to indicate a sales category (eg backlist/frontlist, core stock etc). Use only when the publisher is not the ‘supplier’
   * @default '03'
   */
  PublisherSalesClassification = <any>'03',

  /**
   * Supplier’s pricing restriction classification
   * @description A classification applied by a supplier to a product sold on Agency terms, to indicate that retail price restrictions are applicable
   * @default '04'
   */
  SupplierPricingRestrictionClassification = <any>'04',

  /**
   * Supplier’s sales expectation
   * @description Code is the ISBN of another book that had sales (both in terms of copy numbers and customer profile) comparable to that the distributor or supplier estimates for the product. <SupplierCodeValue> must be an ISBN-13 or GTIN-13
   * @default '05'
   */
  SupplierSalesExpectation = <any>'05',

  /**
   * Publisher’s sales expectation
   * @description Code is the ISBN of another book that had sales (both in terms of copy numbers and customer profile) comparable to that the publisher estimates for the product. <SupplierCodeValue> must be an ISBN-13 or GTIN-13
   * @default '06'
   */
  PublisherSalesExpectation = <any>'06',

  /**
   * Supplier’s order routing eligibility
   * @description Code indicates whether an order can be placed with the supplier indirectly via an intermediary system. The code name type indicates the specific intermediate order aggregation/routing platform and the code indicates the eligibility
   * @default '07'
   */
  SupplierOrderRoutingEligibility = <any>'07',
}
