// Code generated by onix-codelist script; DO NOT EDIT.
/* eslint-disable prettier/prettier */

/**
 * Enum ComplexitySchemeIdentifier
 * @readonly
 * @enum { string }
 * @description List 32: Complexity scheme identifier
 */
export enum ComplexitySchemeIdentifier {

  /**
   * Lexile code
   * @description For example AD or HL. DEPRECATED in ONIX 3 – use code 06 instead
   * @deprecated
   * @default '01'
   */
  LexileCode = <any>'01',

  /**
   * Lexile number
   * @description For example 880L. DEPRECATED in ONIX 3 – use code 06 instead
   * @deprecated
   * @default '02'
   */
  LexileNumber = <any>'02',

  /**
   * Fry Readability score
   * @description Fry readability metric based on number of sentences and syllables per 100 words. Expressed as an integer from 1 to 15 in <ComplexityCode>
   * @default '03'
   */
  FryReadabilityScore = <any>'03',

  /**
   * IoE Book Band
   * @description UK Institute of Education Book Bands for Guided Reading scheme (see https://www.ucl.ac.uk/reading-recovery-europe/ilc/publications/which-book-why). <ComplexityCode> is a color, eg ‘Pink A’ or ‘Copper’
   * @default '04'
   */
  IoEBookBand = <any>'04',

  /**
   * Fountas & Pinnell Text Level Gradient
   * @description <ComplexityCode> is a code from ‘A’ to Z+’. See http://www.fountasandpinnellleveledbooks.com/aboutLeveledTexts.aspx
   * @default '05'
   */
  FountasPinnellTextLevelGradient = <any>'05',

  /**
   * Lexile measure
   * @description The Lexile measure in <ComplexityCode> combines the Lexile number (for example 620L or 880L) and optionally the Lexile code (for example AD or HL). Examples might be ‘880L’, ‘AD0L’ or ‘HL600L’. See https://lexile.com/about-lexile/lexile-overview/
   * @default '06'
   */
  LexileMeasure = <any>'06',

  /**
   * ATOS for Books
   * @description Advantage-TASA Open Standard book readability score, used for example within the Renaissance Learning Accelerated Reader scheme. <ComplexityCode> is the ‘Book Level’, a real number between 0 and 17. See http://www.renaissance.com/products/accelerated-reader/atos-analyzer
   * @default '07'
   */
  AtosForBooks = <any>'07',

  /**
   * Flesch-Kincaid Grade Level
   * @description Flesch-Kincaid Grade Level Formula, a standard readability measure based on the weighted number of syllables per word and words per sentence. <ComplexityCode> is a real number typically between about -1 and 20
   * @default '08'
   */
  FleschKincaidGradeLevel = <any>'08',

  /**
   * Guided Reading Level
   * @description Use this code for books levelled by the publisher or a third party using the Fountas and Pinnell Guided Reading methodology
   * @default '09'
   */
  GuidedReadingLevel = <any>'09',

  /**
   * Reading Recovery Level
   * @description Used for books aimed at K-2 literacy intervention. <ComplexityCode> is an integer between 1 and 20
   * @default '10'
   */
  ReadingRecoveryLevel = <any>'10',

  /**
   * LIX
   * @description Swedish ‘läsbarhetsindex’ readability index used in Scandinavia. For use in ONIX 3.0 only
   * @default '11'
   */
  Lix = <any>'11',

  /**
   * Lexile Audio measure
   * @description Lexile Audio measure from MetaMetrics’ Framework for Listening. The code in <ComplexityCode> indicates the difficulty of comprehension of audio material (for example 600L or 1030L). For use in ONIX 3.0 only. See https://lexile.global/the-lexile-framework-for-listening/
   * @default '12'
   */
  LexileAudioMeasure = <any>'12',
}
