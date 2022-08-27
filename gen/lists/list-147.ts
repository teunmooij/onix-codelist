// This code has been generated with a script

/**
 * Enum UnitOfUsage
 * @readonly
 * @enum { string }
 * @description List 147: Unit of usage
 */
export enum UnitOfUsage {
  /**
   * Copies
   * @description Maximum number of copies that may be made of a permitted extract
   * @default '01'
   */
  Copies = <any>'01',

  /**
   * Characters
   * @description Maximum number of characters in a permitted extract for a specified usage
   * @default '02'
   */
  Characters = <any>'02',

  /**
   * Words
   * @description Maximum number of words in a permitted extract for a specified usage
   * @default '03'
   */
  Words = <any>'03',

  /**
   * Pages
   * @description Maximum number of pages in a permitted extract for a specified usage
   * @default '04'
   */
  Pages = <any>'04',

  /**
   * Percentage
   * @description Maximum percentage of total content in a permitted extract for a specified usage
   * @default '05'
   */
  Percentage = <any>'05',

  /**
   * Devices
   * @description Maximum number of devices in ‘share group’
   * @default '06'
   */
  Devices = <any>'06',

  /**
   * Concurrent users
   * @description Maximum number of concurrent users. NB where the number of concurrent users is specifically not limited, set the number of concurrent users to zero
   * @default '07'
   */
  ConcurrentUsers = <any>'07',

  /**
   * Users
   * @description Maximum number of licensed individual users, independent of concurrency of use
   * @default '15'
   */
  Users = <any>'15',

  /**
   * Concurrent classes
   * @description Maximum number of licensed concurrent classes of user. A ‘class’ is a group of learners attending a specific course or lesson and generally taught as a group
   * @default '19'
   */
  ConcurrentClasses = <any>'19',

  /**
   * Classes
   * @description Maximum number of licensed classes of learners, independent of concurrency of use and the number of users per class
   * @default '20'
   */
  Classes = <any>'20',

  /**
   * Institutions
   * @description Maximum number of licensed institutions, independend of concurrency of use and the number of classes or individuals per institution
   * @default '31'
   */
  Institutions = <any>'31',

  /**
   * Percentage per time period
   * @description Maximum percentage of total content which may be used in a specified usage per time period; the time period being specified as another <EpubUsageLimit> Quantity
   * @default '08'
   */
  PercentagePerTimePeriod = <any>'08',

  /**
   * Days
   * @description Maximum time period in days (beginning from product purchase or activation)
   * @default '09'
   */
  Days = <any>'09',

  /**
   * Days (fixed start)
   * @description Maximum time period in days (beginning from the product publication date). In effect, this defines a fixed end date for the license independent of the purchase or activation date
   * @default '27'
   */
  Days_1 = <any>'27',

  /**
   * Weeks
   * @description Maximum time period in weeks
   * @default '13'
   */
  Weeks = <any>'13',

  /**
   * Weeks (fixed start)
   * @description Maximum time period in weeks
   * @default '28'
   */
  Weeks_1 = <any>'28',

  /**
   * Months
   * @description Maximum time period in months
   * @default '14'
   */
  Months = <any>'14',

  /**
   * Months (fixed start)
   * @description Maximum time period in months
   * @default '29'
   */
  Months_1 = <any>'29',

  /**
   * Hours minutes and seconds
   * @description Maximum amount of time in hours, minutes and seconds allowed in a permitted extract for a specified usage, in the format HHHMMSS (7 digits, with leading zeros if necessary)
   * @default '16'
   */
  HoursMinutesAndSeconds = <any>'16',

  /**
   * Times
   * @description Maximum number of times a specified usage event may occur (in the lifetime of the product)
   * @default '10'
   */
  Times = <any>'10',

  /**
   * Times per day
   * @description Maximum frequency a specified usage event may occur (per day)
   * @default '22'
   */
  TimesPerDay = <any>'22',

  /**
   * Times per month
   * @description Maximum frequency a specified usage event may occur (per month)
   * @default '23'
   */
  TimesPerMonth = <any>'23',

  /**
   * Times per year
   * @description Maximum frequency a specified usage event may occur (per year)
   * @default '24'
   */
  TimesPerYear = <any>'24',

  /**
   * Dots per inch
   * @description Maximum resolution of printed or copy/pasted extracts
   * @default '21'
   */
  DotsPerInch = <any>'21',

  /**
   * Dots per cm
   * @description Maximum resolution of printed or copy/pasted extracts
   * @default '26'
   */
  DotsPerCm = <any>'26',

  /**
   * Allowed usage start page
   * @description Page number where allowed usage begins. <Quantity> should contain an absolute page number, counting the cover as page 1. (This type of page numbering should not be used where the e-publication has no fixed pagination). Use with (max number of) Pages, Percentage of content, or End page to specify pages allowed in Preview
   * @default '11'
   */
  AllowedUsageStartPage = <any>'11',

  /**
   * Allowed usage end page
   * @description Page number at which allowed usage ends. <Quantity> should contain an absolute page number, counting the cover as page 1. (This type of page numbering should not be used where the e-publication has no fixed pagination). Use with Start page to specify pages allowed in a preview
   * @default '12'
   */
  AllowedUsageEndPage = <any>'12',

  /**
   * Allowed usage start time
   * @description Time at which allowed usage begins. <Quantity> should contain an absolute time, counting from the beginning of an audio or video product, in the format HHHMMSS or HHHMMSScc. Use with Time, Percentage of content, or End time to specify time-based extract allowed in Preview
   * @default '17'
   */
  AllowedUsageStartTime = <any>'17',

  /**
   * Allowed usage end time
   * @description Time at which allowed usage ends. <Quantity> should contain an absolute time, counting from the beginning of an audio or video product, in the format HHHMMSS or HHHMMSScc. Use with Start time to specify time-based extract allowed in Preview
   * @default '18'
   */
  AllowedUsageEndTime = <any>'18',

  /**
   * Valid from
   * @description The date from which the usage constraint applies. <Quantity> is in the format YYYYMMDD
   * @default '98'
   */
  ValidFrom = <any>'98',

  /**
   * Valid to
   * @description The date until which the usage constraint applies. <Quantity> is in the format YYYYMMDD
   * @default '99'
   */
  ValidTo = <any>'99',
}