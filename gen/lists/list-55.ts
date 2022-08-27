// This code has been generated with a script

/**
 * Enum DateFormat
 * @readonly
 * @enum { string }
 * @description List 55: Date format
 */
export enum DateFormat {

  /**
   * YYYYMMDD
   * @description Common Era year, month and day (default for most dates)
   * @default '00'
   */
  YYYYMMDD = <any>'00',

  /**
   * YYYYMM
   * @description Year and month
   * @default '01'
   */
  YYYYMM = <any>'01',

  /**
   * YYYYWW
   * @description Year and week number
   * @default '02'
   */
  YYYYWW = <any>'02',

  /**
   * YYYYQ
   * @description Year and quarter (Q = 1, 2, 3, 4, with 1 = Jan to Mar)
   * @default '03'
   */
  YYYYQ = <any>'03',

  /**
   * YYYYS
   * @description Year and season (S = 1, 2, 3, 4, with 1 = ‘Spring’)
   * @default '04'
   */
  YYYYS = <any>'04',

  /**
   * YYYY
   * @description Year (default for some dates)
   * @default '05'
   */
  YYYY = <any>'05',

  /**
   * YYYYMMDDYYYYMMDD
   * @description Spread of exact dates
   * @default '06'
   */
  YYYYMMDDYYYYMMDD = <any>'06',

  /**
   * YYYYMMYYYYMM
   * @description Spread of months
   * @default '07'
   */
  YYYYMMYYYYMM = <any>'07',

  /**
   * YYYYWWYYYYWW
   * @description Spread of week numbers
   * @default '08'
   */
  YYYYWWYYYYWW = <any>'08',

  /**
   * YYYYQYYYYQ
   * @description Spread of quarters
   * @default '09'
   */
  YYYYQYYYYQ = <any>'09',

  /**
   * YYYYSYYYYS
   * @description Spread of seasons
   * @default '10'
   */
  YYYYSYYYYS = <any>'10',

  /**
   * YYYYYYYY
   * @description Spread of years
   * @default '11'
   */
  YYYYYYYY = <any>'11',

  /**
   * Text string
   * @description For complex, approximate or uncertain dates, or dates BCE
   * @default '12'
   */
  TextString = <any>'12',

  /**
   * YYYYMMDDThhmm
   * @description Exact time. Use ONLY when exact times with hour/minute precision are relevant. By default, time is local. Alternatively, the time may be suffixed with an optional ‘Z’ for UTC times, or with ‘+’ or ‘-’ and an hhmm timezone offset from UTC. Times without a timezone are ‘rolling’ local times, times qualified with a timezone (using Z, + or -) specify a particular instant in time
   * @default '13'
   */
  YYYYMMDDThhmm = <any>'13',

  /**
   * YYYYMMDDThhmmss
   * @description Exact time. Use ONLY when exact times with second precision are relevant. By default, time is local. Alternatively, the time may be suffixed with an optional ‘Z’ for UTC times, or with ‘+’ or ‘-’ and an hhmm timezone offset from UTC. Times without a timezone are ‘rolling’ local times, times qualified with a timezone (using Z, + or -) specify a particular instant in time
   * @default '14'
   */
  YYYYMMDDThhmmss = <any>'14',

  /**
   * YYYYMMDD (H)
   * @description Year month day (Hijri calendar)
   * @default '20'
   */
  YYYYMMDD_H = <any>'20',

  /**
   * YYYYMM (H)
   * @description Year and month (Hijri calendar)
   * @default '21'
   */
  YYYYMM_H = <any>'21',

  /**
   * YYYY (H)
   * @description Year (Hijri calendar)
   * @default '25'
   */
  YYYY_H = <any>'25',

  /**
   * Text string (H)
   * @description For complex, approximate or uncertain dates (Hijri calendar), text would usually be in Arabic script
   * @default '32'
   */
  TextString_H = <any>'32',
}
