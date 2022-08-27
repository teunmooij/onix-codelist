// This code has been generated with a script

/**
 * Enum Proximity
 * @readonly
 * @enum { string }
 * @description List 215: Proximity
 */
export enum Proximity {
  /**
   * Less than
   * @description
   * @default '01'
   */
  LessThan = <any>'01',

  /**
   * Not more than
   * @description
   * @default '02'
   */
  NotMoreThan = <any>'02',

  /**
   * Exactly
   * @description The supplier’s true figure, or at least a best estimate expected to be within 10% of the true figure (ie a quoted figure of 100 could in fact be anything between 91 and 111)
   * @default '03'
   */
  Exactly = <any>'03',

  /**
   * Approximately
   * @description Generally interpreted as within 25% of the true figure (ie a quoted figure of 100 could in fact be anything between 80 and 133). The supplier may introduce a deliberate approximation to reduce the commercial sensitivity of the figure
   * @default '04'
   */
  Approximately = <any>'04',

  /**
   * About
   * @description Generally interpreted as within a factor of two of the true figure (ie a quoted figure of 100 could in fact be anything between 50 and 200). The supplier may introduce a deliberate approximation to reduce the commercial sensitivity of the figure
   * @default '05'
   */
  About = <any>'05',

  /**
   * Not less than
   * @description
   * @default '06'
   */
  NotLessThan = <any>'06',

  /**
   * More than
   * @description
   * @default '07'
   */
  MoreThan = <any>'07',
}