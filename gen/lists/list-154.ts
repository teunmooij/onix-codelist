// This code has been generated with a script

/**
 * Enum ContentAudience
 * @readonly
 * @enum { string }
 * @description List 154: Content audience
 */
export enum ContentAudience {

  /**
   * Unrestricted
   * @description Any audience
   * @default '00'
   */
  Unrestricted = <any>'00',

  /**
   * Restricted
   * @description Distribution by agreement between the parties to the ONIX exchange (this value is provided to cover applications where ONIX content includes material which is not for general distribution)
   * @default '01'
   */
  Restricted = <any>'01',

  /**
   * Booktrade
   * @description Distributors, bookstores, publisher’s own staff etc
   * @default '02'
   */
  Booktrade = <any>'02',

  /**
   * End-customers
   * @description 
   * @default '03'
   */
  EndCustomers = <any>'03',

  /**
   * Librarians
   * @description 
   * @default '04'
   */
  Librarians = <any>'04',

  /**
   * Teachers
   * @description 
   * @default '05'
   */
  Teachers = <any>'05',

  /**
   * Students
   * @description 
   * @default '06'
   */
  Students = <any>'06',

  /**
   * Press
   * @description Press or other media
   * @default '07'
   */
  Press = <any>'07',

  /**
   * Shopping comparison service
   * @description Where a specially formatted description is required for this audience
   * @default '08'
   */
  ShoppingComparisonService = <any>'08',

  /**
   * Search engine index
   * @description Text not intended for display, but may be used (in addition to any less restricted text) for indexing and search
   * @default '09'
   */
  SearchEngineIndex = <any>'09',

  /**
   * Bloggers
   * @description (Including vloggers, influencers etc) Where this is distinct from end customers or the Press
   * @default '10'
   */
  Bloggers = <any>'10',
}
