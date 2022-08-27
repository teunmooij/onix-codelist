// This code has been generated with a script

/**
 * Enum SupplierRole
 * @readonly
 * @enum { string }
 * @description List 93: Supplier role
 */
export enum SupplierRole {

  /**
   * Unspecified
   * @description Default
   * @default '00'
   */
  Unspecified = <any>'00',

  /**
   * Publisher to retailers
   * @description Publisher as supplier to retail trade outlets
   * @default '01'
   */
  PublisherToRetailers = <any>'01',

  /**
   * Publisher’s exclusive distributor to retailers
   * @description 
   * @default '02'
   */
  PublisherExclusiveDistributorToRetailers = <any>'02',

  /**
   * Publisher’s non-exclusive distributor to retailers
   * @description 
   * @default '03'
   */
  PublisherNonExclusiveDistributorToRetailers = <any>'03',

  /**
   * Wholesaler
   * @description Wholesaler supplying retail trade outlets
   * @default '04'
   */
  Wholesaler = <any>'04',

  /**
   * Sales agent
   * @description DEPRECATED – use <MarketRepresentation> (ONIX 2.1) or <MarketPublishingDetail> (ONIX 3.0) to specify a sales agent
   * @deprecated
   * @default '05'
   */
  SalesAgent = <any>'05',

  /**
   * Publisher’s distributor to retailers
   * @description In a specified supply territory. Use only where exclusive/non-exclusive status is not known. Prefer 02 or 03 as appropriate, where possible
   * @default '06'
   */
  PublisherDistributorToRetailers = <any>'06',

  /**
   * POD supplier
   * @description Where a POD product is supplied to retailers and/or consumers direct from a POD source
   * @default '07'
   */
  PodSupplier = <any>'07',

  /**
   * Retailer
   * @description 
   * @default '08'
   */
  Retailer = <any>'08',

  /**
   * Publisher to end-customers
   * @description Publisher as supplier direct to consumers and/or institutional customers
   * @default '09'
   */
  PublisherToEndCustomers = <any>'09',

  /**
   * Exclusive distributor to end-customers
   * @description Intermediary as exclusive distributor direct to consumers and/or institutional customers
   * @default '10'
   */
  ExclusiveDistributorToEndCustomers = <any>'10',

  /**
   * Non-exclusive distributor to end-customers
   * @description Intermediary as non-exclusive distributor direct to consumers and/or institutional customers
   * @default '11'
   */
  NonExclusiveDistributorToEndCustomers = <any>'11',

  /**
   * Distributor to end-customers
   * @description Use only where exclusive/non-exclusive status is not known. Prefer 10 or 11 as appropriate, where possible
   * @default '12'
   */
  DistributorToEndCustomers = <any>'12',

  /**
   * Exclusive distributor to retailers and end-customers
   * @description Intermediary as exclusive distributor to retailers and direct to consumers and/or institutional customers. For use in ONIX 3.0 only
   * @default '13'
   */
  ExclusiveDistributorToRetailersAndEndCustomers = <any>'13',

  /**
   * Non-exclusive distributor to retailers and end-customers
   * @description Intermediary as non-exclusive distributor to retailers and direct to consumers and/or institutional customers. For use in ONIX 3.0 only
   * @default '14'
   */
  NonExclusiveDistributorToRetailersAndEndCustomers = <any>'14',

  /**
   * Distributor to retailers and end-customers
   * @description Use only where exclusive/non-exclusive status is not known. Prefer codes 13 or 14 as appropriate whenever possible. For use in ONIX 3.0 only
   * @default '15'
   */
  DistributorToRetailersAndEndCustomers = <any>'15',
}
