// This code has been generated with a script

/**
 * Enum SupplyDateRole
 * @readonly
 * @enum { string }
 * @description List 166: Supply date role
 */
export enum SupplyDateRole {

  /**
   * Sales embargo date
   * @description If there is an embargo on retail sales (of copies from the supplier) before a certain date and this is later than any general or market-wide embargo date, the date from which the embargo is lifted and retail sales and fulfillment of pre-orders are permitted. Use code 02 here ONLY in the exceptional case when the embargo is supplier-specific. More general market-wide or global sales embargos should be specified in <MarketDate> or <PublishingDate> codes. In the absence of any supplier-specific, market-wide or general embargo date, retail sales and pre-order fulfillment may begin as soon as stock is available to the retailer
   * @default '02'
   */
  SalesEmbargoDate = <any>'02',

  /**
   * Expected availability date
   * @description The date on which physical stock is expected to be available to be shipped from the supplier to retailers, or a digital product is expected to be released by the publisher or digital asset distributor to retailers or their retail platform providers
   * @default '08'
   */
  ExpectedAvailabilityDate = <any>'08',

  /**
   * Last date for returns
   * @description Last date when returns will be accepted, generally for a product which is being remaindered or put out of print
   * @default '18'
   */
  LastDateForReturns = <any>'18',

  /**
   * Reservation order deadline
   * @description Latest date on which an order may be placed for guaranteed delivery prior to the publication date. May or may not be linked to a special reservation or pre-publication price
   * @default '25'
   */
  ReservationOrderDeadline = <any>'25',

  /**
   * Last redownload date
   * @description Latest date on which existing owners or licensees may download or re-download a copy of the product. Existing users may continue to use their local copy of the product
   * @default '29'
   */
  LastRedownloadDate = <any>'29',

  /**
   * Last TPM date
   * @description Date on which any required technical protection measures (DRM) support will be withdrawn. DRM-protected products may not be usable after this date
   * @default '30'
   */
  LastTpmDate = <any>'30',

  /**
   * Expected warehouse date
   * @description The date on which physical stock is expected to be delivered to the supplier from the manufacturer or from a primary distributor. For the distributor or wholesaler (the supplier) this is the ‘goods in’ date, as contrasted with the Expected availability date, code 08, which is the ‘goods out’ date
   * @default '34'
   */
  ExpectedWarehouseDate = <any>'34',

  /**
   * New supplier start date
   * @description First date on which the supplier specified in <NewSupplier> will accept orders. Note the first date would typically be the day after the old supplier end date, but they may overlap if there is an agreement to forward any orders between old and new supplier for fulfillment
   * @default '50'
   */
  NewSupplierStartDate = <any>'50',

  /**
   * Supplier end date
   * @description Last date on which the supplier specified in <Supplier> will accept orders. New supplier should be specified where available. Note last date would typically be the day before the new supplier start date, but they may overlap if there is an agreement to forward any orders between old and new supplier for fulfillment
   * @default '51'
   */
  SupplierEndDate = <any>'51',
}
