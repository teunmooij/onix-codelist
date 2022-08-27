// This code has been generated with a script

/**
 * Enum PriceTypeQualifier
 * @readonly
 * @enum { string }
 * @description List 59: Price type qualifier
 */
export enum PriceTypeQualifier {
  /**
   * Unqualified price
   * @description Price applies to all customers that do not fall within any other group with a specified group-specific qualified price
   * @default '00'
   */
  UnqualifiedPrice = <any>'00',

  /**
   * Member/subscriber price
   * @description Price applies to a designated group membership
   * @default '01'
   */
  MemberSubscriberPrice = <any>'01',

  /**
   * Export price
   * @description Price applies to sales outside the territory in which the supplier is located
   * @default '02'
   */
  ExportPrice = <any>'02',

  /**
   * Reduced price applicable when the item is purchased as part of a set (or series, or collection)
   * @description Use in cases where there is no combined price, but a lower price is offered for each part if the whole set / series / collection is purchased (either at one time, as part of a continuing commitment, or in a single purchase)
   * @default '03'
   */
  ReducedPriceApplicableWhenTheItemIsPurchasedAsPartOfASet = <any>'03',

  /**
   * Voucher price
   * @description In the Netherlands (or any other market where similar arrangements exist): a reduced fixed price available for a limited time on presentation of a voucher or coupon published in a specified medium, eg a newspaper. Should be accompanied by Price Type code 13 and additional detail in <PriceTypeDescription>, and by validity dates in <PriceEffectiveFrom> and <PriceEffectiveUntil> (ONIX 2.1) or in the <PriceDate> composite (ONIX 3.0)
   * @default '04'
   */
  VoucherPrice = <any>'04',

  /**
   * Consumer price
   * @description Price for individual consumer sale only
   * @default '05'
   */
  ConsumerPrice = <any>'05',

  /**
   * Corporate / Library / Education price
   * @description Price for sale to libraries or other corporate or institutional customers
   * @default '06'
   */
  CorporateLibraryEducationPrice = <any>'06',

  /**
   * Reservation order price
   * @description Price valid for a specified period prior to publication. Orders placed prior to the end of the period are guaranteed to be delivered to the retailer before the nominal publication date. The price may or may not be different from the ‘normal’ price, which carries no such delivery guarantee. Must be accompanied by a <PriceEffectiveUntil> date (or equivalent <PriceDate> composite in ONIX 3), and should also be accompanied by a ‘normal’ price
   * @default '07'
   */
  ReservationOrderPrice = <any>'07',

  /**
   * Promotional offer price
   * @description Temporary ‘Special offer’ price. Must be accompanied by <PriceEffectiveFrom> and <PriceEffectiveUntil> dates (or equivalent <PriceDate> composites in ONIX 3), and may also be accompanied by a ‘normal’ price
   * @default '08'
   */
  PromotionalOfferPrice = <any>'08',

  /**
   * Linked price
   * @description Price requires purchase with, or proof of ownership of another product. Further details of purchase or ownership requirements must be given in <PriceTypeDescription>
   * @default '09'
   */
  LinkedPrice = <any>'09',

  /**
   * Library price
   * @description Price for sale only to libraries (including public, school and academic libraries)
   * @default '10'
   */
  LibraryPrice = <any>'10',

  /**
   * Education price
   * @description Price for sale only to educational institutions (including school and academic libraries), educational buying consortia, government and local government bodies purchasing for use in education
   * @default '11'
   */
  EducationPrice = <any>'11',

  /**
   * Corporate price
   * @description Price for sale to corporate customers only
   * @default '12'
   */
  CorporatePrice = <any>'12',

  /**
   * Subscription service price
   * @description Price for sale to organisations or services offering consumers subscription access to a library of books
   * @default '13'
   */
  SubscriptionServicePrice = <any>'13',

  /**
   * School library price
   * @description Price for primary and secondary education
   * @default '14'
   */
  SchoolLibraryPrice = <any>'14',

  /**
   * Academic library price
   * @description Price for higher education and scholarly institutions
   * @default '15'
   */
  AcademicLibraryPrice = <any>'15',

  /**
   * Public library price
   * @description
   * @default '16'
   */
  PublicLibraryPrice = <any>'16',

  /**
   * Introductory price
   * @description Initial ‘Introductory offer’ price. Must be accompanied by an Effective until date in a <PriceDate> composite in ONIX 3, and may also be accompanied by a ‘normal’ price valid after the introductory offer expires (Fr. Prix de lancement). Only valid in ONIX 3.0
   * @default '17'
   */
  IntroductoryPrice = <any>'17',

  /**
   * Consortial price
   * @description Price for library consortia. Only valid in ONIX 3.0
   * @default '18'
   */
  ConsortialPrice = <any>'18',
}