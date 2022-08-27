// This code has been generated with a script

/**
 * Enum ExtentType
 * @readonly
 * @enum { string }
 * @description List 23: Extent type
 */
export enum ExtentType {
  /**
   * Main content page count
   * @description The highest-numbered page in a single numbered sequence of main content, usually the highest Arabic-numbered page in a book; or, for books without page numbers or (rarely) with multiple numbered sequences of main content, the total number of pages that carry the main content of the book. Note that this may include numbered but otherwise blank pages (eg pages inserted to ensure chapters start on a recto page) and may exclude unnumbered (but contentful) pages such as those in inserts/plate sections. It should exclude pages of back matter (eg any index) even when their numbering sequence continues from the main content. Either this or the Content Page count is the preferred page count for most books for the general reader. For books with substantial front and/or back matter, include also Front matter (03) and Back matter (04) page counts, or Total numbered pages (05). For books with inserts (plate sections), also include Total unnumbered insert page count whenever possible
   * @default '00'
   */
  MainContentPageCount = <any>'00',

  /**
   * Total text length
   * @description Number of words or characters of natural language text
   * @default '02'
   */
  TotalTextLength = <any>'02',

  /**
   * Front matter page count
   * @description The total number of numbered (usually Roman-numbered) pages that precede the main content of a book. This usually consists of various title and imprint pages, table of contents, an introduction, preface, foreword, etc
   * @default '03'
   */
  FrontMatterPageCount = <any>'03',

  /**
   * Back matter page count
   * @description The total number of numbered (often Roman-numbered) pages that follow the main content of a book. This usually consists of an afterword, appendices, endnotes, index, etc. It excludes extracts or ‘teaser’ material from other works, and blank (or advertising) pages that are present only for convenience of printing and binding
   * @default '04'
   */
  BackMatterPageCount = <any>'04',

  /**
   * Total numbered pages
   * @description The sum of all Roman- and Arabic-numbered pages. Note that this may include numbered but otherwise blank pages (eg pages inserted to ensure chapters start on a recto page) and may exclude unnumbered (but contentful) pages such as those in inserts/plate sections. It is the sum of the main content (00), front matter (03) and back matter (04) page counts
   * @default '05'
   */
  TotalNumberedPages = <any>'05',

  /**
   * Production page count
   * @description The total number of pages in a book, including unnumbered pages, front matter, back matter, etc. This includes any extracts or ‘teaser’ material from other works, and blank pages at the back that carry no content and are present only for convenience of printing and binding
   * @default '06'
   */
  ProductionPageCount = <any>'06',

  /**
   * Absolute page count
   * @description The total number of pages of the book counting the cover as page 1. This page count type should be used only for digital publications delivered with fixed pagination
   * @default '07'
   */
  AbsolutePageCount = <any>'07',

  /**
   * Number of pages in print counterpart
   * @description The total number of pages (equivalent to the Content page count, code 11) in the print counterpart of a digital product delivered without fixed pagination, or of an audio product
   * @default '08'
   */
  NumberOfPagesInPrintCounterpart = <any>'08',

  /**
   * Duration
   * @description Total duration in time, expressed in the specified extent unit. This is the ‘running time’ equivalent of code 11
   * @default '09'
   */
  Duration = <any>'09',

  /**
   * Notional number of pages in digital product
   * @description An estimate of the number of ‘pages’ in a digital product delivered without fixed pagination, and with no print counterpart, given as an indication of the size of the work. Equivalent to code 08, but exclusively for digital or audio products
   * @default '10'
   */
  NotionalNumberOfPagesInDigitalProduct = <any>'10',

  /**
   * Content page count
   * @description The sum of all Roman- and Arabic-numbered and contentful unnumbered pages. Sum of page counts with codes 00, 03, 04 and 12, and also the sum of 05 and 12
   * @default '11'
   */
  ContentPageCount = <any>'11',

  /**
   * Total unnumbered insert page count
   * @description The total number of unnumbered pages with content inserted within the main content of a book – for example inserts/plate sections that are not numbered
   * @default '12'
   */
  TotalUnnumberedInsertPageCount = <any>'12',

  /**
   * Duration of introductory matter
   * @description Duration in time, expressed in the specified extent units, of introductory matter. This is the ‘running time’ equivalent of code 03, and comprises any significant amount of running time represented by a musical intro, announcements, titles, introduction or other material prefacing the main content
   * @default '13'
   */
  DurationOfIntroductoryMatter = <any>'13',

  /**
   * Duration of main content
   * @description Duration in time, expressed in the specified extent units, of the main content. This is the ‘running time’ equivalent of code 00, and excludes time represented by announcements, titles, introduction or other prefatory material or ‘back matter’
   * @default '14'
   */
  DurationOfMainContent = <any>'14',

  /**
   * Duration of back matter
   * @description Duration in time, expressed in the specified extent units, of any content that follows the main content of a book. This may consist of an afterword, appendices, endnotes, end music etc. It excludes extracts or ‘teaser’ material from other works. This is the ‘running time’ equivalent of code 04
   * @default '15'
   */
  DurationOfBackMatter = <any>'15',

  /**
   * Production duration
   * @description Duration in time, expressed in the specified extent units, of the complete content of a book. This is the ‘running time’ equivalent of code 06, and includes time represented by musical themes, announcements, titles, introductory and other prefatory material, plus ‘back matter’ such as any afterword, appendices, plus any extracts or ‘teaser’ material from other works
   * @default '16'
   */
  ProductionDuration = <any>'16',

  /**
   * Number of cards
   * @description In a pack of educational flash cards, playing cards, postcards, greeting cards etc. For use in ONIX 3.0 only
   * @default '17'
   */
  NumberOfCards = <any>'17',

  /**
   * Filesize
   * @description Approximate size of a digital file or package (in the form it is downloaded), expressed in the specified extent unit
   * @default '22'
   */
  Filesize = <any>'22',

  /**
   * Storage filesize
   * @description Approximate size of storage space required for a digital file or package in the form in which it is usually stored for use on a device, where this is different from the download filesize (see code 22), and expressed in the specified extent unit. For use in ONIX 3.0 only
   * @default '23'
   */
  StorageFilesize = <any>'23',
}
