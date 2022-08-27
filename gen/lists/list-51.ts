// This code has been generated with a script

/**
 * Enum ProductRelation
 * @readonly
 * @enum { string }
 * @description List 51: Product relation
 */
export enum ProductRelation {
  /**
   * Unspecified
   * @description <Product> is related to <RelatedProduct> in a way that cannot be specified by another code value
   * @default '00'
   */
  Unspecified = <any>'00',

  /**
   * Includes
   * @description <Product> includes <RelatedProduct> (inverse of code 02)
   * @default '01'
   */
  Includes = <any>'01',

  /**
   * Is part of
   * @description <Product> is part of <RelatedProduct>: use for ‘also available as part of’ (inverse of code 01)
   * @default '02'
   */
  IsPartOf = <any>'02',

  /**
   * Replaces
   * @description <Product> replaces, or is new edition of, <RelatedProduct> (inverse of code 05)
   * @default '03'
   */
  Replaces = <any>'03',

  /**
   * Has companion product
   * @description <Product> and <RelatedProduct> are companion products, intended to be used, or are usable, together (is own inverse). For use in ONIX 3.0 only
   * @default '04'
   */
  HasCompanionProduct = <any>'04',

  /**
   * Replaced by
   * @description <Product> is replaced by, or has new edition, <RelatedProduct> (inverse of code 03)
   * @default '05'
   */
  ReplacedBy = <any>'05',

  /**
   * Alternative format
   * @description <Product> is available in an alternative format as <RelatedProduct> – indicates an alternative format of the same content which is or may be available (is own inverse)
   * @default '06'
   */
  AlternativeFormat = <any>'06',

  /**
   * Has ancillary product
   * @description <Product> has an ancillary or supplementary product <RelatedProduct> (inverse of code 08)
   * @default '07'
   */
  HasAncillaryProduct = <any>'07',

  /**
   * Is ancillary to
   * @description <Product> is ancillary or supplementary to <RelatedProduct> (inverse of code 07)
   * @default '08'
   */
  IsAncillaryTo = <any>'08',

  /**
   * Is remaindered as
   * @description <Product> is remaindered as <RelatedProduct>, when a remainder merchant assigns its own identifier to the product (inverse of code 10)
   * @default '09'
   */
  IsRemainderedAs = <any>'09',

  /**
   * Is remainder of
   * @description <Product> was originally sold as <RelatedProduct>, indicating the publisher’s original identifier for a title which is offered as a remainder under a different identifier (inverse of code 09)
   * @default '10'
   */
  IsRemainderOf = <any>'10',

  /**
   * Is other-language version of
   * @description <Product> is an other-language version of <RelatedProduct> (is own inverse)
   * @default '11'
   */
  IsOtherLanguageVersionOf = <any>'11',

  /**
   * Publisher’s suggested alternative
   * @description <Product> has a publisher’s suggested alternative <RelatedProduct>, which does not, however, carry the same content (cf 05 and 06)
   * @default '12'
   */
  PublisherSuggestedAlternative = <any>'12',

  /**
   * Epublication based on (print product)
   * @description <Product> is an epublication based on printed product <RelatedProduct>. The related product is the source of any print-equivalent page numbering present in the epublication
   * @default '13'
   */
  EpublicationBasedOn = <any>'13',

  /**
   * POD replacement for
   * @description <Product> is a POD replacement for <RelatedProduct>. <RelatedProduct> is an out-of-print product replaced by a print-on-demand version under a new ISBN (inverse of code 17)
   * @default '16'
   */
  PodReplacementFor = <any>'16',

  /**
   * Replaced by POD
   * @description <Product> is replaced by POD <RelatedProduct>. <RelatedProduct> is a print-on-demand replacement, under a new ISBN, for an out-of-print <Product> (inverse of code 16)
   * @default '17'
   */
  ReplacedByPod = <any>'17',

  /**
   * Is special edition of
   * @description <Product> is a special edition of <RelatedProduct>. Used for a special edition (German: Sonderausgabe) with different cover, binding, premium content etc – more than ‘alternative format’ – which may be available in limited quantity and for a limited time (inverse of code 19)
   * @default '18'
   */
  IsSpecialEditionOf = <any>'18',

  /**
   * Has special edition
   * @description <Product> has a special edition <RelatedProduct> (inverse of code 18)
   * @default '19'
   */
  HasSpecialEdition = <any>'19',

  /**
   * Is prebound edition of
   * @description <Product> is a prebound edition of <RelatedProduct> (In the US, a ‘prebound’ edition is ‘a book that was previously bound and has been rebound with a library quality hardcover binding. In almost all commercial cases, the book in question began as a paperback. This might also be termed ‘re-bound’) (inverse of code 21)
   * @default '20'
   */
  IsPreboundEditionOf = <any>'20',

  /**
   * Is original of prebound edition
   * @description <Product> is the regular edition of which <RelatedProduct> is a prebound edition (inverse of code 20)
   * @default '21'
   */
  IsOriginalOfPreboundEdition = <any>'21',

  /**
   * Product by same author
   * @description <Product> and <RelatedProduct> have a common author
   * @default '22'
   */
  ProductBySameAuthor = <any>'22',

  /**
   * Similar product
   * @description <RelatedProduct> is another product that is suggested as similar to <Product> (‘if you liked <Product>, you may also like <RelatedProduct>’, or vice versa)
   * @default '23'
   */
  SimilarProduct = <any>'23',

  /**
   * Is facsimile of
   * @description <Product> is a facsimile edition of <RelatedProduct> (inverse of code 25)
   * @default '24'
   */
  IsFacsimileOf = <any>'24',

  /**
   * Is original of facsimile
   * @description <Product> is the original edition from which a facsimile edition <RelatedProduct> is taken (inverse of code 24)
   * @default '25'
   */
  IsOriginalOfFacsimile = <any>'25',

  /**
   * Is license for
   * @description <Product> is a license for a digital <RelatedProduct>, traded or supplied separately
   * @default '26'
   */
  IsLicenseFor = <any>'26',

  /**
   * Electronic version available as
   * @description <RelatedProduct> is an electronic version of print <Product> (inverse of code 13)
   * @default '27'
   */
  ElectronicVersionAvailableAs = <any>'27',

  /**
   * Enhanced version available as
   * @description <RelatedProduct> is an ‘enhanced’ version of <Product>, with additional content. Typically used to link an enhanced e-book to its original ‘unenhanced’ equivalent, but not specifically limited to linking e-books – for example, may be used to link illustrated and non-illustrated print books. <Product> and <RelatedProduct> should share the same <ProductForm> (inverse of code 29)
   * @default '28'
   */
  EnhancedVersionAvailableAs = <any>'28',

  /**
   * Basic version available as
   * @description <RelatedProduct> is a basic version of <Product>. <Product> and <RelatedProduct> should share the same <ProductForm> (inverse of code 28)
   * @default '29'
   */
  BasicVersionAvailableAs = <any>'29',

  /**
   * Product in same collection
   * @description <RelatedProduct> and <Product> are part of the same collection (eg two products in same series or set) (is own inverse)
   * @default '30'
   */
  ProductInSameCollection = <any>'30',

  /**
   * Has alternative in a different market sector
   * @description <RelatedProduct> is an alternative product in another sector (of the same geographical market). Indicates an alternative that carries the same content, but available to a different set of customers, as one or both products are retailer-, channel- or market sector-specific (is own inverse)
   * @default '31'
   */
  HasAlternativeInADifferentMarketSector = <any>'31',

  /**
   * Has equivalent intended for a different market
   * @description <RelatedProduct> is an equivalent product, often intended for another (geographical) market. Indicates an alternative that carries essentially the same content, though slightly adapted for local circumstances (as opposed to a translation – use code 11) (is own inverse)
   * @default '32'
   */
  HasEquivalentIntendedForADifferentMarket = <any>'32',

  /**
   * Has alternative intended for different market
   * @description <RelatedProduct> is an alternative product, often intended for another (geographical) market. Indicates the content of the alternative is identical in all respects (is own inverse)
   * @default '33'
   */
  HasAlternativeIntendedForDifferentMarket = <any>'33',

  /**
   * Cites
   * @description <Product> cites <RelatedProduct> (inverse of code 35)
   * @default '34'
   */
  Cites = <any>'34',

  /**
   * Is cited by
   * @description <Product> is the object of a citation in <RelatedProduct> (inverse of code 34)
   * @default '35'
   */
  IsCitedBy = <any>'35',

  /**
   * Is signed version of
   * @description <Product> is a signed copy of <RelatedProduct>. Use where signed copies are given a distinct product identifier and can be ordered separately, but are otherwise identical (inverse of code 38)
   * @default '37'
   */
  IsSignedVersionOf = <any>'37',

  /**
   * Has signed version
   * @description <Product> is an unsigned copy of <RelatedProduct>. Use where signed copies are given a distinct product identifier and can be ordered separately, but are otherwise identical (inverse of code 37)
   * @default '38'
   */
  HasSignedVersion = <any>'38',

  /**
   * Has related student material
   * @description <Product> is intended for teacher use, and the related product is for student use
   * @default '39'
   */
  HasRelatedStudentMaterial = <any>'39',

  /**
   * Has related teacher material
   * @description <Product> is intended for student use, and the related product is for teacher use
   * @default '40'
   */
  HasRelatedTeacherMaterial = <any>'40',

  /**
   * Some content shared with
   * @description <Product> includes some content shared with <RelatedProduct>. Note the shared content does not form the whole of either product. Compare with the ‘includes’ / ‘is part of’ relationship pair (codes 01 and 02), where the shared content forms the whole of one of the products, and with the ‘alternative format’ relationship (code 06), where the shared content forms the whole of both products (code 41 is own inverse)
   * @default '41'
   */
  SomeContentSharedWith = <any>'41',

  /**
   * Is later edition of first edition
   * @description <Product> is a later edition of <RelatedProduct>, where the related product is the first edition
   * @default '42'
   */
  IsLaterEditionOfFirstEdition = <any>'42',

  /**
   * Adapted from
   * @description <Product> is an adapted (dramatized, abridged, novelized etc) version of <RelatedProduct> (inverse of code 44). For use in ONIX 3.0 only
   * @default '43'
   */
  AdaptedFrom = <any>'43',

  /**
   * Adapted as
   * @description <Product> is the original from which <RelatedProduct> is adapted (dramatized etc) (inverse of code 43), For use in ONIX 3.0 only
   * @default '44'
   */
  AdaptedAs = <any>'44',

  /**
   * Linked product offer
   * @description Purchases of <Product> may qualify for one or more copies of <RelatedProduct> either free of charge or at a reduced price, or vice versa (is own inverse). This may be dependent on retailer participation, upon price and upon the quantity of the <Product> or the <RelatedProduct> purchased. For use in ONIX 3.0 only
   * @default '45'
   */
  LinkedProductOffer = <any>'45',
}