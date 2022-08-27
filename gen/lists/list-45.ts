// This code has been generated with a script

/**
 * Enum PublishingRole
 * @readonly
 * @enum { string }
 * @description List 45: Publishing role
 */
export enum PublishingRole {

  /**
   * Publisher
   * @description 
   * @default '01'
   */
  Publisher = <any>'01',

  /**
   * Co-publisher
   * @description Use where two or more publishers co-publish the exact same product, either under a single ISBN (in which case both publishers are co-publishers), or under different ISBNs (in which case the publisher of THIS ISBN is the publisher and the publishers of OTHER ISBNs are co-publishers. Note this is different from publication of ‘co-editions’
   * @default '02'
   */
  CoPublisher = <any>'02',

  /**
   * Sponsor
   * @description 
   * @default '03'
   */
  Sponsor = <any>'03',

  /**
   * Publisher of original-language version
   * @description Of a translated work
   * @default '04'
   */
  PublisherOfOriginalLanguageVersion = <any>'04',

  /**
   * Host/distributor of electronic content
   * @description 
   * @default '05'
   */
  HostDistributorOfElectronicContent = <any>'05',

  /**
   * Published for/on behalf of
   * @description 
   * @default '06'
   */
  PublishedForOnBehalfOf = <any>'06',

  /**
   * Published in association with
   * @description Use also for ‘Published in cooperation with’
   * @default '07'
   */
  PublishedInAssociationWith = <any>'07',

  /**
   * New or acquiring publisher
   * @description When ownership of a product or title is transferred from one publisher to another
   * @default '09'
   */
  NewOrAcquiringPublisher = <any>'09',

  /**
   * Publishing group
   * @description The group to which a publisher (publishing role 01) belongs: use only if a publisher has been identified with role code 01
   * @default '10'
   */
  PublishingGroup = <any>'10',

  /**
   * Publisher of facsimile original
   * @description The publisher of the edition of which a product is a facsimile
   * @default '11'
   */
  PublisherOfFacsimileOriginal = <any>'11',

  /**
   * Repackager of prebound edition
   * @description The repackager of a prebound edition that has been assigned its own identifier. (In the US, a ‘prebound edition’ is a book that was previously bound, normally as a paperback, and has been rebound with a library-quality hardcover binding by a supplier other than the original publisher.) Required when the <EditionType> is coded PRB. The original publisher should be named as the ‘publisher’
   * @default '12'
   */
  RepackagerOfPreboundEdition = <any>'12',

  /**
   * Former publisher
   * @description When ownership of a product or title is transferred from one publisher to another (complement of code 09)
   * @default '13'
   */
  FormerPublisher = <any>'13',

  /**
   * Publication funder
   * @description Body funding publication fees, if different from the body funding the underlying research. Intended primarily for use with open access publications
   * @default '14'
   */
  PublicationFunder = <any>'14',

  /**
   * Research funder
   * @description Body funding the research on which publication is based, if different from the body funding the publication. Intended primarily for use with open access publications
   * @default '15'
   */
  ResearchFunder = <any>'15',

  /**
   * Funding body
   * @description Body funding research and publication. Intended primarily for use with open access publications
   * @default '16'
   */
  FundingBody = <any>'16',

  /**
   * Printer
   * @description Organisation responsible for printing a printed product. Supplied primarily to meet legal deposit requirements, and may apply only to the first impression. The organisation may also be responsible for binding, when a separate binder is not specified
   * @default '17'
   */
  Printer = <any>'17',

  /**
   * Binder
   * @description Organisation responsible for binding a printed product (where distinct from the printer). Supplied primarily to meet legal deposit requirements, and may apply only to the first impression
   * @default '18'
   */
  Binder = <any>'18',

  /**
   * Manufacturer
   * @description Organisation primarily responsible for physical manufacture of a product, when neither Printer nor Binder is directly appropriate (for example, with disc or tape products, or digital products on a physical carrier)
   * @default '19'
   */
  Manufacturer = <any>'19',
}
