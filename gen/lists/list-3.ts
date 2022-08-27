// This code has been generated with a script

/**
 * Enum RecordSourceType
 * @readonly
 * @enum { string }
 * @description List 3: Record source type
 */
export enum RecordSourceType {
  /**
   * Unspecified
   * @description
   * @default '00'
   */
  Unspecified = <any>'00',

  /**
   * Publisher
   * @description
   * @default '01'
   */
  Publisher = <any>'01',

  /**
   * Publisher’s distributor
   * @description Use to designate a distributor providing primary warehousing and fulfillment for a publisher or for a publisher’s sales agent, as distinct from a wholesaler
   * @default '02'
   */
  PublisherDistributor = <any>'02',

  /**
   * Wholesaler
   * @description
   * @default '03'
   */
  Wholesaler = <any>'03',

  /**
   * Bibliographic agency
   * @description Bibliographic data aggregator
   * @default '04'
   */
  BibliographicAgency = <any>'04',

  /**
   * Library bookseller
   * @description Library supplier. Bookseller selling to libraries (including academic libraries)
   * @default '05'
   */
  LibraryBookseller = <any>'05',

  /**
   * Publisher’s sales agent
   * @description Use for a publisher’s sales agent responsible for marketing the publisher’s products within a territory, as opposed to a publisher’s distributor who fulfills orders but does not market
   * @default '06'
   */
  PublisherSalesAgent = <any>'06',

  /**
   * Publisher’s conversion service provider
   * @description Downstream provider of e-publication format conversion services (who might also be a distributor or retailer of the converted e-publication), supplying metadata on behalf of the publisher. The assigned ISBN is taken from the publisher’s ISBN prefix
   * @default '07'
   */
  PublisherConversionServiceProvider = <any>'07',

  /**
   * Conversion service provider
   * @description Downstream provider of e-publication format conversion services (who might also be a distributor or retailer of the converted e-publication), supplying metadata on behalf of the publisher. The assigned ISBN is taken from the service provider’s prefix (whether or not the service provider dedicates that prefix to a particular publisher)
   * @default '08'
   */
  ConversionServiceProvider = <any>'08',

  /**
   * ISBN Registration Agency
   * @description
   * @default '09'
   */
  IsbnRegistrationAgency = <any>'09',

  /**
   * ISTC Registration Agency
   * @description
   * @default '10'
   */
  IstcRegistrationAgency = <any>'10',

  /**
   * Retail bookseller
   * @description Bookseller selling primarily to consumers
   * @default '11'
   */
  RetailBookseller = <any>'11',

  /**
   * Education bookseller
   * @description Bookseller selling primarily to educational institutions
   * @default '12'
   */
  EducationBookseller = <any>'12',

  /**
   * Library
   * @description Library service providing enhanced metadata to publishers or other parties
   * @default '13'
   */
  Library = <any>'13',
}
