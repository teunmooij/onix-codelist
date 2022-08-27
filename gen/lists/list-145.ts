// This code has been generated with a script

/**
 * Enum UsageType
 * @readonly
 * @enum { string }
 * @description List 145: Usage type
 */
export enum UsageType {

  /**
   * No constraints
   * @description Allows positive indication that there are no particular constraints (that can be specifed in <EpubUsageConstraint>). By convention, use 01 in <EpubUsageStatus>
   * @default '00'
   */
  NoConstraints = <any>'00',

  /**
   * Preview
   * @description Preview before purchase. Allows a retail customer, account holder or patron to view or listen to a proportion of the book before purchase. Also applies to borrowers making use of ‘acquisition on demand’ models in libraries, and to ‘subscription’ models where the purchase is made on behalf of the reader
   * @default '01'
   */
  Preview = <any>'01',

  /**
   * Print
   * @description Print paper copy of extract
   * @default '02'
   */
  Print = <any>'02',

  /**
   * Copy / paste
   * @description Make digital copy of extract
   * @default '03'
   */
  CopyPaste = <any>'03',

  /**
   * Share
   * @description Share product across multiple concurrent devices. Allows a retail customer, account holder or patron to read the book across multiple devices linked to the same account. Also applies to readers in library borrowing and ‘subscription’ models
   * @default '04'
   */
  Share = <any>'04',

  /**
   * Text to speech
   * @description ‘Read aloud’ with text to speech functionality
   * @default '05'
   */
  TextToSpeech = <any>'05',

  /**
   * Lend
   * @description Lendable by the purchaser to other device owner or account holder or patron, eg ‘Lend-to-a-friend’, library lending (where the library product has a separate <ProductIdentifier> from the consumer product). The ‘primary’ copy becomes unusable while the secondary copy is ‘on loan’ unless a number of concurrent borrowers is also specified
   * @default '06'
   */
  Lend = <any>'06',

  /**
   * Time-limited license
   * @description E-publication license is time limited. Use with 02 from List 146 and either a time period in days, weeks or months, or a Valid until date in <EpubUsageLimit>. The purchased copy becomes unusable when the license expires
   * @default '07'
   */
  TimeLimitedLicense = <any>'07',

  /**
   * Loan renewal
   * @description Maximum number of consecutive loans or loan extensions (eg from a library) to a single device owner or account holder. Note that a limit of 1 indicates that a loan cannot be renewed or extended
   * @default '08'
   */
  LoanRenewal = <any>'08',

  /**
   * Multi-user license
   * @description E-publication license is multi-user. Maximum number of concurrent users licensed to use the product should be given in <EpubUsageLimit>
   * @default '09'
   */
  MultiUserLicense = <any>'09',

  /**
   * Preview on premises
   * @description Preview locally before purchase. Allows a retail customer, account holder or patron to view a proportion of the book (or the whole book, if no proportion is specified) before purchase, but ONLY while located physically in the retailer’s store (eg while logged on to the store or library wifi). Also applies to patrons making use of ‘acquisition on demand’ models in libraries
   * @default '10'
   */
  PreviewOnPremises = <any>'10',
}
