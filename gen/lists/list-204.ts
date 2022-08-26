// This code has been generated with a script

/**
 * Enum OnixReturnsConditions
 * @readonly
 * @enum { string }
 * @description List 204: ONIX Returns conditions
 */
export enum OnixReturnsConditions {
  /**
   * Unspecified
   * @description Unspecified, contact supplier for details
   * @default '00'
   */
  Unspecified = <any>'00',

  /**
   * Consignment
   * @description The retailer pays for goods only after they are sold by the retailer to an end consumer, and may return excess unsold inventory to the supplier at any time. The goods remain the property of the supplier until they are paid for, even while they are physically located at the retailer
   * @default '01'
   */
  Consignment = <any>'01',

  /**
   * Firm sale
   * @description The retailer is invoiced for the goods immediately (or upon dispatch) and pays within the specified credit period, as in the sale or return model, but any excess unsold inventory cannot be returned to the supplier
   * @default '02'
   */
  FirmSale = <any>'02',

  /**
   * Sale or return
   * @description Contact supplier for applicable returns authorization process. The retailer is invoiced for the goods immediately (or upon dispatch) and pays within the specified credit period, but can return excess unsold inventory to the supplier for full credit at a later date. Some kind of returns authorisation process is normally required. Returns must be in saleable conditon, except when return of stripped covers or proof of destruction may be allowed instead. For more detail, use codes 05, 06 or 07
   * @default '03'
   */
  SaleOrReturn = <any>'03',

  /**
   * Direct fulfillment
   * @description The retailer pays for goods only after they are sold by the retailer to an end consumer, but all inventory remains physically located at the supplier (thus there can be no retailer returns of unsold inventory). When ordered by the retailer, the goods are delivered direct to the end consumer
   * @default '04'
   */
  DirectFulfillment = <any>'04',

  /**
   * Sale or return of saleable copies
   * @description Contact supplier for applicable returns authorization process. As for code 03, but only returns of saleable copies will be accepted. For use in ONIX 3.0 only
   * @default '05'
   */
  SaleOrReturnOfSaleableCopies = <any>'05',

  /**
   * Sale or return of stripped covers
   * @description Contact supplier for applicable cover returns authorization process. As for code 03, but only returns of stripped covers will be accepted. For use in ONIX 3.0 only
   * @default '06'
   */
  SaleOrReturnOfStrippedCovers = <any>'06',

  /**
   * Sale or certified destruction
   * @description Contact supplier for applicable destruction certification process. As for code 03, but only certified destruction will be accepted. For use in ONIX 3.0 only
   * @default '07'
   */
  SaleOrCertifiedDestruction = <any>'07',
}
