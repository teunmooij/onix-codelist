// This code has been generated with a script

/**
 * Enum PriceType
 * @readonly
 * @enum { string }
 * @description List 58: Price type
 */
export enum PriceType {
  /**
   * RRP excluding tax
   * @description Recommended Retail Price, excluding any sales tax or value-added tax. Price recommended by the publisher or supplier for retail sales to the consumer. Also termed the Suggested Retail Price (SRP) or Maximum Suggested Retail Price (MSRP) in some countries. The retailer may choose to use this recommended price, or may choose to sell to the consumer at a lower (or occasionally, a higher) price which is termed the Actual Selling Price (ASP) in sales reports. The net price charged to the retailer depends on the RRP minus a trade discount (which may be customer-specific). Relevant tax detail must be calculated by the data recipient
   * @default '01'
   */
  RrpExcludingTax = <any>'01',

  /**
   * RRP including tax
   * @description Recommended Retail Price, including sales or value-added tax where applicable. The net price charged to the retailer depends on the trade discount. Sales or value-added tax detail is usually supplied in the <Tax> composite
   * @default '02'
   */
  RrpIncludingTax = <any>'02',

  /**
   * FRP excluding tax
   * @description Fixed Retail Price, excluding any sales or value-added tax, used in countries where retail price maintenance applies (by law or via trade agreement) to certain products. Price fixed by the publisher or supplier for retail sales to the consumer. The retailer must use this price, or may vary the price only within certain legally-prescribed limits. The net price charged to the retailer depends on the FRP minus a customer-specific trade discount. Relevant tax detail must be calculated by the data recipient
   * @default '03'
   */
  FrpExcludingTax = <any>'03',

  /**
   * FRP including tax
   * @description Fixed Retail Price, including any sales or value-added tax where applicable, used in countries where retail price maintenance applies (by law or via trade agreement) to certain products. The net price charged to the retailer depends on the trade discount. Sales or value-added tax detail is usually supplied in the <Tax> composite
   * @default '04'
   */
  FrpIncludingTax = <any>'04',

  /**
   * Supplier’s Net price excluding tax
   * @description Net or wholesale price, excluding any sales or value-added tax. Unit price charged by supplier for business-to-business transactions, without any direct relationship to the price for retail sales to the consumer, but sometimes subject to a further customer-specific trade discount based on volume. Relevant tax detail must be calculated by the data recipient
   * @default '05'
   */
  SupplierNetPriceExcludingTax = <any>'05',

  /**
   * Supplier’s Net price excluding tax: rental goods
   * @description Unit price charged by supplier to reseller / rental outlet, excluding any sales tax or value-added tax: goods for rental (used for video and DVD)
   * @default '06'
   */
  SupplierNetPriceExcludingTaxRentalGoods = <any>'06',

  /**
   * Supplier’s Net price including tax
   * @description Net or wholesale price, including any sales or value-added tax where applicable. Unit price charged by supplier for business-to-business transactions, without any direct relationship to the price for retail sales to the consumer, but sometimes subject to a further customer-specific trade discount based on volume. Sales or value-added tax detail is usually supplied in the <Tax> composite
   * @default '07'
   */
  SupplierNetPriceIncludingTax = <any>'07',

  /**
   * Supplier’s alternative Net price excluding tax
   * @description Net or wholesale price charged by supplier to a specified class of reseller, excluding any sales tax or value-added tax. Relevant tax detail must be calculated by the data recipient. (This value is for use only in countries, eg Finland, where trade practice requires two different Net prices to be listed for different classes of resellers, and where national guidelines specify how the code should be used)
   * @default '08'
   */
  SupplierAlternativeNetPriceExcludingTax = <any>'08',

  /**
   * Supplier’s alternative net price including tax
   * @description Net or wholesale price charged by supplier to a specified class of reseller, including any sales tax or value-added tax. Sales or value-added tax detail is usually supplied in the <Tax> composite. (This value is for use only in countries, eg Finland, where trade practice requires two different Net prices to be listed for different classes of resellers, and where national guidelines specify how the code should be used)
   * @default '09'
   */
  SupplierAlternativeNetPriceIncludingTax = <any>'09',

  /**
   * Special sale RRP excluding tax
   * @description Special sale RRP excluding any sales tax or value-added tax. Note ‘special sales’ are sales where terms and conditions are different from normal trade sales, when for example products that are normally sold on a sale-or-return basis are sold on firm-sale terms, where a particular product is tailored for a specific retail outlet (often termed a ‘premium’ product), or where other specific conditions or qualiifications apply. Further details of the modified terms and conditions should be given in <PriceTypeDescription>
   * @default '11'
   */
  SpecialSaleRrpExcludingTax = <any>'11',

  /**
   * Special sale RRP including tax
   * @description Special sale RRP including sales or value-added tax if applicable
   * @default '12'
   */
  SpecialSaleRrpIncludingTax = <any>'12',

  /**
   * Special sale fixed retail price excluding tax
   * @description In countries where retail price maintenance applies by law to certain products: not used in USA
   * @default '13'
   */
  SpecialSaleFixedRetailPriceExcludingTax = <any>'13',

  /**
   * Special sale fixed retail price including tax
   * @description In countries where retail price maintenance applies by law to certain products: not used in USA
   * @default '14'
   */
  SpecialSaleFixedRetailPriceIncludingTax = <any>'14',

  /**
   * Supplier’s net price for special sale excluding tax
   * @description Unit price charged by supplier to reseller for special sale excluding any sales tax or value-added tax
   * @default '15'
   */
  SupplierNetPriceForSpecialSaleExcludingTax = <any>'15',

  /**
   * Supplier’s net price for special sale including tax
   * @description Unit price charged by supplier to reseller for special sale including any sales tax or value-added tax
   * @default '17'
   */
  SupplierNetPriceForSpecialSaleIncludingTax = <any>'17',

  /**
   * Pre-publication RRP excluding tax
   * @description Pre-publication RRP excluding any sales tax or value-added tax. Use where RRP for pre-orders is different from post-publication RRP
   * @default '21'
   */
  PrePublicationRrpExcludingTax = <any>'21',

  /**
   * Pre-publication RRP including tax
   * @description Pre-publication RRP including sales or value-added tax if applicable. Use where RRP for pre-orders is different from post-publication RRP
   * @default '22'
   */
  PrePublicationRrpIncludingTax = <any>'22',

  /**
   * Pre-publication fixed retail price excluding tax
   * @description In countries where retail price maintenance applies by law to certain products: not used in USA
   * @default '23'
   */
  PrePublicationFixedRetailPriceExcludingTax = <any>'23',

  /**
   * Pre-publication fixed retail price including tax
   * @description In countries where retail price maintenance applies by law to certain products: not used in USA
   * @default '24'
   */
  PrePublicationFixedRetailPriceIncludingTax = <any>'24',

  /**
   * Supplier’s pre-publication net price excluding tax
   * @description Unit price charged by supplier to reseller pre-publication excluding any sales tax or value-added tax
   * @default '25'
   */
  SupplierPrePublicationNetPriceExcludingTax = <any>'25',

  /**
   * Supplier’s pre-publication net price including tax
   * @description Unit price charged by supplier to reseller pre-publication including any sales tax or value-added tax
   * @default '27'
   */
  SupplierPrePublicationNetPriceIncludingTax = <any>'27',

  /**
   * Freight-pass-through RRP excluding tax
   * @description In the US, books are sometimes supplied on ‘freight-pass-through’ terms, where a price that is different from the RRP is used as the basis for calculating the supplier’s charge to a reseller. To make it clear when such terms are being invoked, code 31 is used instead of code 01 to indicate the RRP. Code 32 is used for the ‘billing price’
   * @default '31'
   */
  FreightPassThroughRrpExcludingTax = <any>'31',

  /**
   * Freight-pass-through billing price excluding tax
   * @description When freight-pass-through terms apply, the price on which the supplier’s charge to a reseller is calculated, ie the price to which trade discount terms are applied. See also code 31
   * @default '32'
   */
  FreightPassThroughBillingPriceExcludingTax = <any>'32',

  /**
   * Importer’s Fixed retail price excluding tax
   * @description In countries where retail price maintenance applies by law to certain products, but the price is set by the importer or local sales agent, not the foreign publisher. In France, ‘prix catalogue éditeur étranger’
   * @default '33'
   */
  ImporterFixedRetailPriceExcludingTax = <any>'33',

  /**
   * Importer’s Fixed retail price including tax
   * @description In countries where retail price maintenance applies by law to certain products, but the price is set by the importer or local sales agent, not the foreign publisher. In France, ‘prix catalogue éditeur étranger’
   * @default '34'
   */
  ImporterFixedRetailPriceIncludingTax = <any>'34',

  /**
   * Nominal gratis copy value for customs purposes, excluding tax
   * @description Nominal value of gratis copies (eg review, sample or evaluation copies) for international customs declarations only, when a ‘free of charge’ price cannot be used. Only for use in ONIX 3.0
   * @default '35'
   */
  NominalGratisCopyValueForCustomsPurposesExcludingTax = <any>'35',

  /**
   * Publishers retail price excluding tax
   * @description For a product supplied on agency terms, the retail price set by the publisher, excluding any sales tax or value-added tax
   * @default '41'
   */
  PublishersRetailPriceExcludingTax = <any>'41',

  /**
   * Publishers retail price including tax
   * @description For a product supplied on agency terms, the retail price set by the publisher, including sales or value-added tax if applicable
   * @default '42'
   */
  PublishersRetailPriceIncludingTax = <any>'42',
}
