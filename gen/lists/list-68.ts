// This code has been generated with a script

/**
 * Enum MarketPublishingStatus
 * @readonly
 * @enum { string }
 * @description List 68: Market publishing status
 */
export enum MarketPublishingStatus {

  /**
   * Unspecified
   * @description Status is not specified (as distinct from unknown): the default if the <MarketPublishingStatus> element is not sent
   * @default '00'
   */
  Unspecified = <any>'00',

  /**
   * Cancelled
   * @description The product was announced for publication in this market, and subsequently abandoned. A market publication date must not be sent
   * @default '01'
   */
  Cancelled = <any>'01',

  /**
   * Forthcoming
   * @description Not yet published in this market, should be accompanied by expected local publication date
   * @default '02'
   */
  Forthcoming = <any>'02',

  /**
   * Postponed indefinitely
   * @description The product was announced for publication in this market, and subsequently postponed with no expected local publication date. A market publication date must not be sent
   * @default '03'
   */
  PostponedIndefinitely = <any>'03',

  /**
   * Active
   * @description The product was published in this market, and is still active in the sense that the publisher will accept orders for it, though it may or may not be immediately available, for which see <SupplyDetail>
   * @default '04'
   */
  Active = <any>'04',

  /**
   * No longer our product
   * @description Responsibility for the product in this market has been transferred elsewhere (with details of acquiring publisher representative in this market if possible in PR.25 (ONIX 2.1) OR P.25 (ONIX 3.0))
   * @default '05'
   */
  NoLongerOurProduct = <any>'05',

  /**
   * Out of stock indefinitely
   * @description The product was active in this market, but is now inactive in the sense that (a) the publisher representative (local publisher or sales agent) cannot fulfill orders for it, though stock may still be available elsewhere in the supply chain, and (b) there are no current plans to bring it back into stock in this market. Code 06 does not specifically imply that returns are or are not still accepted
   * @default '06'
   */
  OutOfStockIndefinitely = <any>'06',

  /**
   * Out of print
   * @description The product was active in this market, but is now permanently inactive in this market in the sense that (a) the publisher representative (local publisher or sales agent) will not accept orders for it, though stock may still be available elsewhere in the supply chain, and (b) the product will not be made available again in this market under the same ISBN. Code 07 normally implies that the publisher will not accept returns beyond a specified date
   * @default '07'
   */
  OutOfPrint = <any>'07',

  /**
   * Inactive
   * @description The product was active in this market, but is now permanently or indefinitely inactive in the sense that the publisher representative (local publisher or sales agent) will not accept orders for it, though stock may still be available elsewhere in the supply chain. Code 08 covers both of codes 06 and 07, and may be used where the distinction between those values is either unnecessary or meaningless
   * @default '08'
   */
  Inactive = <any>'08',

  /**
   * Unknown
   * @description The sender of the ONIX record does not know the current publishing status in this market
   * @default '09'
   */
  Unknown = <any>'09',

  /**
   * Remaindered
   * @description The product is no longer available in this market from the publisher representative (local publisher or sales agent), under the current ISBN, at the current price. It may be available to be traded through another channel, usually at a reduced price
   * @default '10'
   */
  Remaindered = <any>'10',

  /**
   * Withdrawn from sale
   * @description Withdrawn from sale in this market, typically for legal reasons or to avoid giving offence
   * @default '11'
   */
  WithdrawnFromSale = <any>'11',

  /**
   * Not available in this market
   * @description Either no rights are held for the product in this market, or for other reasons the publisher has decided not to make it available in this market
   * @default '12'
   */
  NotAvailableInThisMarket = <any>'12',

  /**
   * Active, but not sold separately
   * @description The product is published and active in this market but, as a publishing decision,  not sold separately – only in an assembly or as part of a pack,
   * @default '13'
   */
  ActiveButNotSoldSeparately = <any>'13',

  /**
   * Active, with market restrictions
   * @description The product is published in this market and active, but is not available to all customer types, typically because the market is split between exclusive sales agents for different market segments. In ONIX 2.1, should be accompanied by a free-text statement in <MarketRestrictionDetail> describing the nature of the restriction. In ONIX 3.0, the <SalesRestriction> composite in Group P.24 should be used
   * @default '14'
   */
  ActiveWithMarketRestrictions = <any>'14',

  /**
   * Recalled
   * @description Recalled in this market for reasons of consumer safety
   * @default '15'
   */
  Recalled = <any>'15',

  /**
   * Temporarily withdrawn from sale
   * @description Temporarily withdrawn from sale in this market, typically for quality or technical reasons. In ONIX 3.0, must be accompanied by expected availability date coded ‘22’ within the <MarketDate> composite, except in exceptional circumstances where no date is known
   * @default '16'
   */
  TemporarilyWithdrawnFromSale = <any>'16',

  /**
   * Permanently withdrawn from sale
   * @description Withdrawn permanently from sale in this market. Effectively synonymous with ‘Out of print’ (code 07), but specific to downloadable and online digital products (where no ‘stock’ would remain in the supply chain). For use in ONIX 3.0 only
   * @default '17'
   */
  PermanentlyWithdrawnFromSale = <any>'17',

  /**
   * Active, but not sold as set
   * @description The various constituent parts of a product are published and active in this market but, as a publishing decision, they are not sold together as a single product – eg with Product composition code 11 – and are only available as a number of individual items. For use on ONIX 3.0 only
   * @default '18'
   */
  ActiveButNotSoldAsSet = <any>'18',
}
