// This code has been generated with a script

/**
 * Enum TitleElementLevel
 * @readonly
 * @enum { string }
 * @description List 149: Title element level
 */
export enum TitleElementLevel {
  /**
   * Product
   * @description The title element refers to an individual product
   * @default '01'
   */
  Product = <any>'01',

  /**
   * Collection level
   * @description The title element refers to the top level of a bibliographic collection
   * @default '02'
   */
  CollectionLevel = <any>'02',

  /**
   * Subcollection
   * @description The title element refers to an intermediate level of a bibliographic collection that comprises two or more ‘sub-collections’
   * @default '03'
   */
  Subcollection = <any>'03',

  /**
   * Content item
   * @description The title element refers to a content item within a product, eg a work included in a combined or ‘omnibus’ edition, or a chapter in a book. Generally used only for titles within <ContentItem> (Block 3)
   * @default '04'
   */
  ContentItem = <any>'04',

  /**
   * Master brand
   * @description The title element names a master brand where the use of the brand spans multiple collections and product forms, and possibly multiple imprints and publishers. Used only for branded media properties carrying, for example, a children’s character brand
   * @default '05'
   */
  MasterBrand = <any>'05',

  /**
   * Sub-subcollection
   * @description The title element refers to an intermediate level of a bibliographic collection that is a subdivision of a sub-collection (a third level of collective identity)
   * @default '06'
   */
  SubSubcollection = <any>'06',
}
