// This code has been generated with a script

/**
 * Enum ProductAvailability
 * @readonly
 * @enum { string }
 * @description List 65: Product availability
 */
export enum ProductAvailability {

  /**
   * Cancelled
   * @description Product was announced, and subsequently abandoned by the publisher. No expected availability date should be included in <SupplyDate>
   * @default '01'
   */
  Cancelled = <any>'01',

  /**
   * Not yet available, postponed indefinitely
   * @description Not yet available from the supplier, and the publisher indicates that it has been postponed indefinitely. Should be used in preference to code 10 where the publisher has indicated that a previously-announced publication date is no longer correct, and no new date has yet been announced. No expected avalabilty date should be included in <SupplyDate>. For use in ONIX 3.0 only
   * @default '09'
   */
  NotYetAvailablePostponedIndefinitely = <any>'09',

  /**
   * Not yet available
   * @description Not yet available (requires expected date, either as <ExpectedShipDate> (ONIX 2.1) or as <SupplyDate> with <SupplyDateRole> coded ‘08’ (ONIX 3.0), except in exceptional circumstances where no date is known)
   * @default '10'
   */
  NotYetAvailable = <any>'10',

  /**
   * Awaiting stock
   * @description Not yet available, but will be a stock item when available (requires expected date, either as <ExpectedShipDate> (ONIX 2.1) or as <SupplyDate> with <SupplyDateRole> coded ‘08’ (ONIX 3.0), except in exceptional circumstances where no date is known). Used particularly for imports which have been published in the country of origin but have not yet arrived in the importing country
   * @default '11'
   */
  AwaitingStock = <any>'11',

  /**
   * Not yet available, will be POD
   * @description Not yet available, to be published as print-on-demand only (requires expected date, either as <ExpectedShipDate> (ONIX 2.1) or as <SupplyDate> with <SupplyDateRole> coded ‘08’ (ONIX 3.0), except in exceptional circumstances where no date is known). May apply either to a POD successor to an existing conventional edition, when the successor will be published under a different ISBN (normally because different trade terms apply); or to a title that is being published as a POD original
   * @default '12'
   */
  NotYetAvailableWillBePod = <any>'12',

  /**
   * Available
   * @description Available from us (form of availability unspecified)
   * @default '20'
   */
  Available = <any>'20',

  /**
   * In stock
   * @description Available from us as a stock item
   * @default '21'
   */
  InStock = <any>'21',

  /**
   * To order
   * @description Available from the supplier as a non-stock item, by special order. Where possible, an <OrderTime> should be included
   * @default '22'
   */
  ToOrder = <any>'22',

  /**
   * POD
   * @description Available from the supplier by print-on-demand. If the fulfillment delay is likely to be more than 24 hours, an <OrderTime> should be included
   * @default '23'
   */
  Pod = <any>'23',

  /**
   * Temporarily unavailable
   * @description Temporarily unavailable: temporarily unavailable from us (reason unspecified) (requires expected date, either as <ExpectedShipDate> (ONIX 2.1) or as <SupplyDate> with <SupplyDateRole> coded ‘08’ (ONIX 3.0), except in exceptional circumstances where no date is known)
   * @default '30'
   */
  TemporarilyUnavailable = <any>'30',

  /**
   * Out of stock
   * @description Stock item, temporarily out of stock (requires expected date, either as <ExpectedShipDate> (ONIX 2.1) or as <SupplyDate> with <SupplyDateRole> coded ‘08’ (ONIX 3.0), except in exceptional circumstances where no date is known)
   * @default '31'
   */
  OutOfStock = <any>'31',

  /**
   * Reprinting
   * @description Temporarily unavailable, reprinting (requires expected date, either as <ExpectedShipDate> (ONIX 2.1) or as <SupplyDate> with <SupplyDateRole> coded ‘08’ (ONIX 3.0), except in exceptional circumstances where no date is known)
   * @default '32'
   */
  Reprinting = <any>'32',

  /**
   * Awaiting reissue
   * @description Temporarily unavailable, awaiting reissue (requires expected date, either as <ExpectedShipDate> (ONIX 2.1) or as <SupplyDate> with <SupplyDateRole> coded ‘08’ (ONIX 3.0), except in exceptional circumstances where no date is known)
   * @default '33'
   */
  AwaitingReissue = <any>'33',

  /**
   * Temporarily withdrawn from sale
   * @description May be for quality or technical reasons. Requires expected availability date, either as <ExpectedShipDate> (ONIX 2.1) or as <SupplyDate> with <SupplyDateRole> coded ‘08’ (ONIX 3.0), except in exceptional circumstances where no date is known
   * @default '34'
   */
  TemporarilyWithdrawnFromSale = <any>'34',

  /**
   * Not available (reason unspecified)
   * @description Not available from us (for any reason)
   * @default '40'
   */
  NotAvailable = <any>'40',

  /**
   * Not available, replaced by new product
   * @description This product is unavailable, but a successor product or edition is or will be available from us (identify successor in <RelatedProduct>)
   * @default '41'
   */
  NotAvailableReplacedByNewProduct = <any>'41',

  /**
   * Not available, other format available
   * @description This product is unavailable, but the same content is or will be available from us in an alternative format (identify other format product in <RelatedProduct>)
   * @default '42'
   */
  NotAvailableOtherFormatAvailable = <any>'42',

  /**
   * No longer supplied by us
   * @description Identify new supplier in <NewSupplier> if possible
   * @default '43'
   */
  NoLongerSuppliedByUs = <any>'43',

  /**
   * Apply direct
   * @description Not available to trade, apply direct to publisher
   * @default '44'
   */
  ApplyDirect = <any>'44',

  /**
   * Not sold separately
   * @description I Must be bought as part of a set or trade pack (identify set or pack in <RelatedProduct> using code 02). n
   * @default '45'
   */
  NotSoldSeparately = <any>'45',

  /**
   * Withdrawn from sale
   * @description May be for legal reasons or to avoid giving offence
   * @default '46'
   */
  WithdrawnFromSale = <any>'46',

  /**
   * Remaindered
   * @description Remaindered
   * @default '47'
   */
  Remaindered = <any>'47',

  /**
   * Not available, replaced by POD
   * @description Out of print, but a print-on-demand edition is or will be available under a different ISBN. Use only when the POD successor has a different ISBN, normally because different trade terms apply
   * @default '48'
   */
  NotAvailableReplacedByPod = <any>'48',

  /**
   * Recalled
   * @description Recalled for reasons of consumer safety
   * @default '49'
   */
  Recalled = <any>'49',

  /**
   * Not sold as set
   * @description w Must be bought as individual items (identify contents of set or oack in <RelatedProduct< using code 01. Used h
   * @default '50'
   */
  NotSoldAsSet = <any>'50',

  /**
   * Not available, publisher indicates OP
   * @description This product is unavailable from the supplier, no successor product or alternative format is available or planned. Use this code only when the publisher has indicated the product is out of print
   * @default '51'
   */
  NotAvailablePublisherIndicatesOp = <any>'51',

  /**
   * Not available, publisher no longer sells product in this market
   * @description This product is unavailable from the supplier in this market, no successor product or alternative format is available or planned. Use this code when a publisher has indicated the product is permanently unavailable (in this market) while remaining available elsewhere
   * @default '52'
   */
  NotAvailablePublisherNoLongerSellsProductInThisMarket = <any>'52',

  /**
   * No recent update received
   * @description Sender has not received any recent update for this product from the publisher/supplier (for use when the sender is a data aggregator): the definition of ‘recent’ must be specified by the aggregator, or by agreement between parties to an exchange
   * @default '97'
   */
  NoRecentUpdateReceived = <any>'97',

  /**
   * No longer receiving updates
   * @description Sender is no longer receiving any updates from the publisher/supplier of this product (for use when the sender is a data aggregator)
   * @default '98'
   */
  NoLongerReceivingUpdates = <any>'98',

  /**
   * Contact supplier
   * @description Availability not known to sender
   * @default '99'
   */
  ContactSupplier = <any>'99',
}
