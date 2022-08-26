// This code has been generated with a script

/**
 * Enum SalesRestrictionType
 * @readonly
 * @enum { string }
 * @description List 71: Sales restriction type
 */
export enum SalesRestrictionType {
  /**
   * Unspecified – see text
   * @description Restriction must be described in <SalesRestrictionDetail> (ONIX 2.1) or <SalesRestrictionNote> (ONIX 3.0)
   * @default '00'
   */
  UnspecifiedSeeText = <any>'00',

  /**
   * Retailer exclusive / own brand
   * @description Sales rights (or market distribution rights) apply to sales through designated retailer(s), which must be identified or named in an instance of the <SalesOutlet> composite. Use only when it is not possible to assign the more explicit codes 04 or 05
   * @default '01'
   */
  RetailerExclusiveOwnBrand = <any>'01',

  /**
   * Through office supplies outlets only
   * @description Sales rights (or market distribution rights) apply to sales though office supplies channels. Specific outlet(s) may be identified or named in an instance of the <SalesOutlet> composite
   * @default '02'
   */
  ThroughOfficeSuppliesOutletsOnly = <any>'02',

  /**
   * Internal publisher use only: do not list
   * @description For an ISBN that is assigned for a publisher’s internal purposes
   * @default '03'
   */
  InternalPublisherUseOnlyDoNotList = <any>'03',

  /**
   * Retailer exclusive
   * @description Sales rights (or market distribution rights) apply to sales (under the publisher’s brand / imprint) through the designated retailer(s), which must be identified or named in an instance of the <SalesOutlet> composite
   * @default '04'
   */
  RetailerExclusive = <any>'04',

  /**
   * Retailer own brand
   * @description Sales rights (or market distribution rights) apply to sales (under the retailer’s own brand / imprint) through the designated retailer(s), which must be identified or named in an instance of the <SalesOutlet> composite
   * @default '05'
   */
  RetailerOwnBrand = <any>'05',

  /**
   * To libraries only
   * @description Sales rights (or market distribution rights) apply to supplies to libraries
   * @default '06'
   */
  ToLibrariesOnly = <any>'06',

  /**
   * To schools only
   * @description Sales rights (or market distribution rights) apply to supplies to schools
   * @default '07'
   */
  ToSchoolsOnly = <any>'07',

  /**
   * Indiziert
   * @description Indexed for the German market – in Deutschland indiziert
   * @default '08'
   */
  Indiziert = <any>'08',

  /**
   * Except to libraries
   * @description Sales rights (or market distribution rights) apply to supplies other than to libraries
   * @default '09'
   */
  ExceptToLibraries = <any>'09',

  /**
   * Through news outlets only
   * @description Sales rights (or market distribution rights) apply to sales though news outlet channels (newsstands / newsagents)
   * @default '10'
   */
  ThroughNewsOutletsOnly = <any>'10',

  /**
   * Retailer exception
   * @description Sales rights (or market distribution rights) apply to sales other than through designated retailer(s), which must be identified or named in the <SalesOutlet> composite
   * @default '11'
   */
  RetailerException = <any>'11',

  /**
   * Except to subscription services
   * @description Sales rights (or market distribution rights) apply to supplies other than to organisations or services offering consumers subscription access to a catalog of books
   * @default '12'
   */
  ExceptToSubscriptionServices = <any>'12',

  /**
   * To subscription services only
   * @description Sales rights (or market distribution rights) apply to supplies to organisations or services offering consumers subscription access to a catalog of books
   * @default '13'
   */
  ToSubscriptionServicesOnly = <any>'13',

  /**
   * Except through online retail
   * @description Sales rights (or market distribution rights) apply to sales other than through online retail channels
   * @default '14'
   */
  ExceptThroughOnlineRetail = <any>'14',

  /**
   * Through online retail only
   * @description Sales rights (or market distribution rights) apply to sales through online retail channels
   * @default '15'
   */
  ThroughOnlineRetailOnly = <any>'15',

  /**
   * Except to schools
   * @description Sales rights (or market distribution rights) apply to supplies other than to schools. For use in ONIX 3.0 only
   * @default '16'
   */
  ExceptToSchools = <any>'16',

  /**
   * Through Inventoryless POD
   * @description POD copies may be manufactured at any time, either to fulfill a customer order immediately or to replace a minimal stockholding (ie near-inventoryless). Only valid in ONIX 3.0
   * @default '17'
   */
  ThroughInventorylessPod = <any>'17',

  /**
   * Through Stock Protection POD
   * @description POD copies may be manfactured only to fulfill a customer order immediately while out of stock and awaiting delivery of further stock from the supplier. Only valid in ONIX 3.0
   * @default '18'
   */
  ThroughStockProtectionPod = <any>'18',

  /**
   * Except through POD
   * @description Not eligible for POD. Only valid in ONIX 3.0
   * @default '19'
   */
  ExceptThroughPod = <any>'19',

  /**
   * No restrictions on sales
   * @description Positive indication that no sales restrictions apply, for example to indicate the product may be sold both online and in bricks-and mortar retail, or to subscription services and non-subscription customers. For use in ONIX 3.0 only
   * @default '99'
   */
  NoRestrictionsOnSales = <any>'99',
}
