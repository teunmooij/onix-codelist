// This code has been generated with a script

/**
 * Enum PriceConstraintType
 * @readonly
 * @enum { string }
 * @description List 230: Price constraint type
 */
export enum PriceConstraintType {
  /**
   * No price-specific constraints
   * @description Allows positive indication that there are no additional constraints (other than those specified in <EpubUsageConstraint>). By convention, use 01 in <PriceConstraintStatus>
   * @default '00'
   */
  NoPriceSpecificConstraints = <any>'00',

  /**
   * Preview
   * @description Preview before purchase. Allows a retail customer, account holder or patron to view or listen to a proportion of the book before purchase. Also applies to borrowers making use of ‘acquisition on demand’ models in libraries, and to ‘subscription’ models where the purchase is made on behalf of the reader. Generally used to specify different preview percentages across different customer types
   * @default '01'
   */
  Preview = <any>'01',

  /**
   * Lend
   * @description Lendable by the purchaser to other device owner, account holder or patron, eg library lending (use where the library product is not identified with a separate <ProductIdentifier> from the consumer product). The ‘primary’ copy becomes unusable while the secondary copy is on loan, unless a number of concurrent borrowers is also specified
   * @default '06'
   */
  Lend = <any>'06',

  /**
   * Time-limited license
   * @description E-publication license is time-limited. Use with code 02 from List 146 and a time period in days, weeks or months in <PriceConstraintLimit>. The purchased copy becomes unusable when the license expires
   * @default '07'
   */
  TimeLimitedLicense = <any>'07',

  /**
   * Loan renewal
   * @description Maximum number of consecutive loans or loan extensions (eg from a library) to a single device owner, account holder or patron. Note that a limit of 1 indicates that a loan cannot be renewed or extended
   * @default '08'
   */
  LoanRenewal = <any>'08',

  /**
   * Multi-user license
   * @description E-publication license is multi-user. Maximum number of concurrent users licensed to use the product should be given in <PriceConstraintLimit>
   * @default '09'
   */
  MultiUserLicense = <any>'09',

  /**
   * Preview on premises
   * @description Preview locally before purchase. Allows a retail customer, account holder or patron to view a proportion of the book (or the whole book, if no proportion is specified) before purchase, but ONLY while located physically in the retailer’s store (eg while logged on to the store wifi). Also applies to borrowers making use of ‘acquisition on demand’ models in libraries
   * @default '10'
   */
  PreviewOnPremises = <any>'10',
}
