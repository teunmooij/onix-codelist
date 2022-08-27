// This code has been generated with a script

/**
 * Enum UnpricedItemType
 * @readonly
 * @enum { string }
 * @description List 57: Unpriced item type
 */
export enum UnpricedItemType {

  /**
   * Free of charge
   * @description 
   * @default '01'
   */
  FreeOfCharge = <any>'01',

  /**
   * Price to be announced
   * @description 
   * @default '02'
   */
  PriceToBeAnnounced = <any>'02',

  /**
   * Not sold separately
   * @description Not sold separately at retail
   * @default '03'
   */
  NotSoldSeparately = <any>'03',

  /**
   * Contact supplier
   * @description May be used for books that do not carry a recommended retail price; when goods can only be ordered ‘in person’ from a sales representative; when an ONIX file is ‘broadcast’ rather than sent one-to-one to a single trading partner; or for digital products offered on subscription or with pricing which is too complex to specify in ONIX
   * @default '04'
   */
  ContactSupplier = <any>'04',

  /**
   * Not sold as set
   * @description When a collection that is not sold as a set nevertheless has its own ONIX record
   * @default '05'
   */
  NotSoldAsSet = <any>'05',

  /**
   * Revenue share
   * @description Unpriced, but available via a pre-determined revenue share agreement
   * @default '06'
   */
  RevenueShare = <any>'06',

  /**
   * Calculated from contents
   * @description Price calculated as sum of individual prices of components listed as Product parts. For use in ONIX 3.0 only
   * @default '07'
   */
  CalculatedFromContents = <any>'07',

  /**
   * Supplier does not supply
   * @description The supplier does not operate, or does not offer this product, in this part of the market as indicated by <territory>?. Use when other prices apply in different parts of the market (eg when the market is global, but the particular supplier does not operate outside its domestic territory). Use code 04 when the supplier does supply but has not set a price for part of the market. For use in ONIX 3.0 only
   * @default '08'
   */
  SupplierDoesNotSupply = <any>'08',
}
