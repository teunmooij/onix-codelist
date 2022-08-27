// This code has been generated with a script

/**
 * Enum ProductComposition
 * @readonly
 * @enum { string }
 * @description List 2: Product composition
 */
export enum ProductComposition {

  /**
   * Single-component retail product
   * @description 
   * @default '00'
   */
  SingleComponentRetailProduct = <any>'00',

  /**
   * Single-component, not available separately
   * @description Used only when an ONIX record is required for a component-as-an-item, even though it is not currently available as such
   * @default '01'
   */
  SingleComponentNotAvailableSeparately = <any>'01',

  /**
   * Multiple-component retail product
   * @description Multiple-component product retailed as a whole
   * @default '10'
   */
  MultipleComponentRetailProduct = <any>'10',

  /**
   * Multiple-item collection, retailed as separate parts
   * @description Used only when an ONIX record is required for a collection-as-a-whole, even though it is not currently retailed as such
   * @default '11'
   */
  MultipleItemCollectionRetailedAsSeparateParts = <any>'11',

  /**
   * Trade-only product
   * @description Product available to the book trade, but not for retail sale, and not carrying retail items, eg empty dumpbin, empty counterpack, promotional material
   * @default '20'
   */
  TradeOnlyProduct = <any>'20',

  /**
   * Multiple-item trade-only pack
   * @description Product available to the book trade, but not for general retail sale as a whole. It carries multiple components for retailing as separate items, eg shrink-wrapped trade pack, filled dumpbin, filled counterpack
   * @default '30'
   */
  MultipleItemTradeOnlyPack = <any>'30',

  /**
   * Multiple-item pack
   * @description Carrying multiple components, primarily for retailing as separate items. The pack may be split and retailed as separate items OR retailed as a single item. Use instead of Multiple-item trade-only pack (code 30) if the data provider specifically wishes to make explicit that the pack may optionally be retailed as a whole
   * @default '31'
   */
  MultipleItemPack = <any>'31',
}
