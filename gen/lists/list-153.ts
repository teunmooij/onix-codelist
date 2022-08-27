// This code has been generated with a script

/**
 * Enum TextType
 * @readonly
 * @enum { string }
 * @description List 153: Text type
 */
export enum TextType {

  /**
   * Sender-defined text
   * @description To be used only in circumstances where the parties to an exchange have agreed to include text which (a) is not for general distribution, and (b) cannot be coded elsewhere. If more than one type of text is sent, it must be identified by tagging within the text itself
   * @default '01'
   */
  SenderDefinedText = <any>'01',

  /**
   * Short description/annotation
   * @description Limited to a maximum of 350 characters
   * @default '02'
   */
  ShortDescriptionAnnotation = <any>'02',

  /**
   * Description
   * @description Length unrestricted
   * @default '03'
   */
  Description = <any>'03',

  /**
   * Table of contents
   * @description Used for a table of contents sent as a single text field, which may or may not carry structure expressed using XHTML
   * @default '04'
   */
  TableOfContents = <any>'04',

  /**
   * Primary cover copy
   * @description Primary descriptive blurb usually taken from the back cover or jacket, or occasionally from the cover/jacket flaps. See also code 27
   * @default '05'
   */
  PrimaryCoverCopy = <any>'05',

  /**
   * Review quote
   * @description A quote taken from a review of the product or of the work in question where there is no need to take account of different editions
   * @default '06'
   */
  ReviewQuote = <any>'06',

  /**
   * Review quote: previous edition
   * @description A quote taken from a review of a previous edition of the work
   * @default '07'
   */
  ReviewQuotePreviousEdition = <any>'07',

  /**
   * Review quote: previous work
   * @description A quote taken from a review of a previous work by the same author(s) or in the same series
   * @default '08'
   */
  ReviewQuotePreviousWork = <any>'08',

  /**
   * Endorsement
   * @description A quote usually provided by a celebrity or another author to promote a new book, not from a review
   * @default '09'
   */
  Endorsement = <any>'09',

  /**
   * Promotional headline
   * @description A promotional phrase which is intended to headline a description of the product
   * @default '10'
   */
  PromotionalHeadline = <any>'10',

  /**
   * Feature
   * @description Text describing a feature of a product to which the publisher wishes to draw attention for promotional purposes. Each separate feature should be described by a separate repeat, so that formatting can be applied at the discretion of the receiver of the ONIX record, or multiple features can be described using appropriate XHTML markup
   * @default '11'
   */
  Feature = <any>'11',

  /**
   * Biographical note
   * @description A note referring to all contributors to a product – NOT linked to a single contributor
   * @default '12'
   */
  BiographicalNote = <any>'12',

  /**
   * Publisher’s notice
   * @description A statement included by a publisher in fulfillment of contractual obligations, such as a disclaimer, sponsor statement, or legal notice of any sort. Note that the inclusion of such a notice cannot and does not imply that a user of the ONIX record is obliged to reproduce it
   * @default '13'
   */
  PublisherNotice = <any>'13',

  /**
   * Excerpt
   * @description A short excerpt from the main text of the work
   * @default '14'
   */
  Excerpt = <any>'14',

  /**
   * Index
   * @description Used for an index sent as a single text field, which may be structured using XHTML
   * @default '15'
   */
  Index = <any>'15',

  /**
   * Short description/annotation for collection
   * @description (of which the product is a part.) Limited to a maximum of 350 characters
   * @default '16'
   */
  ShortDescriptionAnnotationForCollection = <any>'16',

  /**
   * Description for collection
   * @description (of which the product is a part.) Length unrestricted
   * @default '17'
   */
  DescriptionForCollection = <any>'17',

  /**
   * New feature
   * @description As code 11 but used for a new feature of this edition or version
   * @default '18'
   */
  NewFeature = <any>'18',

  /**
   * Version history
   * @description 
   * @default '19'
   */
  VersionHistory = <any>'19',

  /**
   * Open access statement
   * @description Short summary statement of open access status and any related conditions (eg ‘Open access – no commercial use’), primarily for marketing purposes. Should always be accompanied by a link to the complete license (see <EpubLicense> or code 99 in List 158)
   * @default '20'
   */
  OpenAccessStatement = <any>'20',

  /**
   * Digital exclusivity statement
   * @description Short summary statement that the product is available only in digital formats (eg ‘Digital exclusive’). If a non-digital version is planned, <ContentDate> should be used to specify the date when exclusivity will end (use content date role code 15). If a non-digital version is available, the statement should not be included
   * @default '21'
   */
  DigitalExclusivityStatement = <any>'21',

  /**
   * Official recommendation
   * @description For example a recommendation or approval provided by a ministry of education or other official body. Use <Text> to provide details and ideally use <TextSourceCorporate> to name the approver
   * @default '22'
   */
  OfficialRecommendation = <any>'22',

  /**
   * JBPA description
   * @description Short description in format specified by Japanese Book Publishers Association
   * @default '23'
   */
  JbpaDescription = <any>'23',

  /**
   * schema.org snippet
   * @description JSON-LD snippet suitable for use within an HTML <script type="application/ld+json"> tag, containing structured metadata suitable for use with schema.org
   * @default '24'
   */
  SchemaOrgSnippet = <any>'24',

  /**
   * Errata
   * @description 
   * @default '25'
   */
  Errata = <any>'25',

  /**
   * Introduction
   * @description Introduction, preface or the text of other preliminary material, sent as a single text field, which may be structured using XHTML
   * @default '26'
   */
  Introduction = <any>'26',

  /**
   * Secondary cover copy
   * @description Secondary descriptive blurb taken from the cover/jacket flaps, or occasionally from the back cover or jacket, used only when there are two separate texts and the primary text is included using code 05
   * @default '27'
   */
  SecondaryCoverCopy = <any>'27',

  /**
   * Full cast and credit list
   * @description For use with dramatized audiobooks, filmed entertainment etc, for a cast list sent as a single text field, which may or may not carry structure expressed using XHTML
   * @default '28'
   */
  FullCastAndCreditList = <any>'28',

  /**
   * Bibliography
   * @description Complete list of books by the author(s), supplied as a single text field, which may be structured using (X)HTML
   * @default '29'
   */
  Bibliography = <any>'29',

  /**
   * Abstract
   * @description Formal summary of content (normally used with academic and scholarly content only)
   * @default '30'
   */
  Abstract = <any>'30',

  /**
   * Rules or instructions
   * @description Eg for a game, kit
   * @default '31'
   */
  RulesOrInstructions = <any>'31',

  /**
   * List of contents
   * @description Eg for a game, kit. Note: use code 04 for a Table of Contents of a book
   * @default '32'
   */
  ListOfContents = <any>'32',
}
