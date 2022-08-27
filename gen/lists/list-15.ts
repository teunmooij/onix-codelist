// This code has been generated with a script

/**
 * Enum TitleType
 * @readonly
 * @enum { string }
 * @description List 15: Title type
 */
export enum TitleType {
  /**
   * Undefined
   * @description
   * @default '00'
   */
  Undefined = <any>'00',

  /**
   * Distinctive title (book); Cover title (serial); Title on item (serial content item or reviewed resource)
   * @description The full text of the distinctive title of the item, without abbreviation or abridgement. For books, where the title alone is not distinctive, elements may be taken from a set or series title and part number etc to create a distinctive title. Where the item is an omnibus edition containing two or more works by the same author, and there is no separate combined title, a distinctive title may be constructed by concatenating the individual titles, with suitable punctuation, as in ‘Pride and prejudice / Sense and sensibility / Northanger Abbey’
   * @default '01'
   */
  DistinctiveTitleCoverTitleTitleOnItem = <any>'01',

  /**
   * ISSN key title of serial
   * @description Serials only
   * @default '02'
   */
  IssnKeyTitleOfSerial = <any>'02',

  /**
   * Title in original language
   * @description Where the subject of the ONIX record is a translated item
   * @default '03'
   */
  TitleInOriginalLanguage = <any>'03',

  /**
   * Title acronym or initialism
   * @description For serials: an acronym or initialism of Title Type 01, eg ‘JAMA’, ‘JACM’
   * @default '04'
   */
  TitleAcronymOrInitialism = <any>'04',

  /**
   * Abbreviated title
   * @description An abbreviated form of Title Type 01
   * @default '05'
   */
  AbbreviatedTitle = <any>'05',

  /**
   * Title in other language
   * @description A sometimes termed a ‘parallel title’
   * @default '06'
   */
  TitleInOtherLanguage = <any>'06',

  /**
   * Thematic title of journal issue
   * @description Serials only: when a journal issue is explicitly devoted to a specified topic
   * @default '07'
   */
  ThematicTitleOfJournalIssue = <any>'07',

  /**
   * Former title
   * @description Books or serials: when an item was previously published under another title
   * @default '08'
   */
  FormerTitle = <any>'08',

  /**
   * Distributor’s title
   * @description For books: the title carried in a book distributor’s title file: frequently incomplete, and may include elements not properly part of the title
   * @default '10'
   */
  DistributorTitle = <any>'10',

  /**
   * Alternative title on cover
   * @description An alternative title that appears on the cover of a book
   * @default '11'
   */
  AlternativeTitleOnCover = <any>'11',

  /**
   * Alternative title on back
   * @description An alternative title that appears on the back of a book
   * @default '12'
   */
  AlternativeTitleOnBack = <any>'12',

  /**
   * Expanded title
   * @description An expanded form of the title, eg the title of a school text book with grade and type and other details added to make the title meaningful, where otherwise it would comprise only the curriculum subject. This title type is required for submissions to the Spanish ISBN Agency
   * @default '13'
   */
  ExpandedTitle = <any>'13',

  /**
   * Alternative title
   * @description An alternative title that the book is widely known by, whether it appears on the book or not
   * @default '14'
   */
  AlternativeTitle = <any>'14',
}