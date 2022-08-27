// This code has been generated with a script

/**
 * Enum DiscountCodeType
 * @readonly
 * @enum { string }
 * @description List 100: Discount code type
 */
export enum DiscountCodeType {

  /**
   * BIC discount group code
   * @description UK publisher’s or distributor’s discount group code in a format specified by BIC to ensure uniqueness (a five-letter prefix allocated by BIC, plus one to three alphanumeric characters – normally digits – chosen by the supplier)
   * @default '01'
   */
  BicDiscountGroupCode = <any>'01',

  /**
   * Proprietary discount code
   * @description A publisher’s or supplier’s own code which identifies a trade discount category, as specified in <DiscountCodeTypeName>. The actual discount for each code is set by trading partner agreement (applies to goods supplied on standard trade discounting terms)
   * @default '02'
   */
  ProprietaryDiscountCode = <any>'02',

  /**
   * Boeksoort
   * @description Terms code used in the Netherlands book trade
   * @default '03'
   */
  Boeksoort = <any>'03',

  /**
   * German terms code
   * @description Terms code used in German ONIX applications
   * @default '04'
   */
  GermanTermsCode = <any>'04',

  /**
   * Proprietary commission code
   * @description A publisher’s or supplier’s own code which identifies a commission rate category, as specified in <DiscountCodeTypeName>. The actual commission rate for each code is set by trading partner agreement (applies to goods supplied on agency terms)
   * @default '05'
   */
  ProprietaryCommissionCode = <any>'05',

  /**
   * BIC commission group code
   * @description UK publisher’s or distributor’s commission group code in format specified by BIC to ensure uniqueness. Format is identical to BIC discount group code, but indicates a commission rather than a discount (applies to goods supplied on agency terms)
   * @default '06'
   */
  BicCommissionGroupCode = <any>'06',

  /**
   * ISNI-based discount group code
   * @description ISNI-based discount group scheme devised initially by the German IG ProduktMetadaten, in a format comprised of the supplier’s 16-digit ISNI, followed by a hyphen and one to three alphanumeric characters – normally digits – chosen by the supplier. These characters are the index to a discount percentage in a table shared in advance by the supplier with individual customers. In this way, a supplier may maintain individual product-specific discount arrangements with each customer. For use in ONIX 3.0 only
   * @default '07'
   */
  IsniBasedDiscountGroupCode = <any>'07',
}
