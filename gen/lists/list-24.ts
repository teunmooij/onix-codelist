// This code has been generated with a script

/**
 * Enum ExtentUnit
 * @readonly
 * @enum { string }
 * @description List 24: Extent unit
 */
export enum ExtentUnit {
  /**
   * Physical pieces
   * @description For example a count of the individual number of cards in a pack. For use in ONIX 3.0 only
   * @default '00'
   */
  PhysicalPieces = <any>'00',

  /**
   * Characters
   * @description Approximate number of characters (including spaces) of natural language text. For use in ONIX 3.0 only
   * @default '01'
   */
  Characters = <any>'01',

  /**
   * Words
   * @description Approximate number of words of natural language text
   * @default '02'
   */
  Words = <any>'02',

  /**
   * Pages
   * @description
   * @default '03'
   */
  Pages = <any>'03',

  /**
   * Hours (integer and decimals)
   * @description
   * @default '04'
   */
  Hours = <any>'04',

  /**
   * Minutes (integer and decimals)
   * @description
   * @default '05'
   */
  Minutes = <any>'05',

  /**
   * Seconds (integer only)
   * @description
   * @default '06'
   */
  Seconds = <any>'06',

  /**
   * Tracks
   * @description Of an audiobook on CD (or a similarly divided selection of audio files). Conventionally, each track is 3–6 minutes of running time, and track counts are misleading and inappropriate if the average track duration is significantly more or less than this. Note that track breaks are not necessarily aligned with structural breaks in the text (eg chapter breaks)
   * @default '11'
   */
  Tracks = <any>'11',

  /**
   * Discs
   * @description Of an audiobook on multiple Red Book audio CDs. Conventionally, each disc is 60–70 minutes of running time, and disc counts are misleading and inappropriate if the average disc duration is significantly more or less than this (for example if the discs are Yellow Book CDs containing mp3 files). Note that disc breaks are not necessarily aligned with structural breaks in the text (eg chapter breaks). For use in ONIX 3.0 only
   * @default '12'
   */
  Discs = <any>'12',

  /**
   * Hours HHH
   * @description Fill with leading zeroes if any elements are missing
   * @default '14'
   */
  HoursHhh = <any>'14',

  /**
   * Hours and minutes HHHMM
   * @description Fill with leading zeroes if any elements are missing
   * @default '15'
   */
  HoursAndMinutesHhhmm = <any>'15',

  /**
   * Hours minutes seconds HHHMMSS
   * @description Fill with leading zeroes if any elements are missing. If centisecond precision is required, use HHHMMSScc (in ONIX 3.0 only)
   * @default '16'
   */
  HoursMinutesSecondsHhhmmss = <any>'16',

  /**
   * Bytes
   * @description
   * @default '17'
   */
  Bytes = <any>'17',

  /**
   * Kbytes
   * @description
   * @default '18'
   */
  Kbytes = <any>'18',

  /**
   * Mbytes
   * @description
   * @default '19'
   */
  Mbytes = <any>'19',
}