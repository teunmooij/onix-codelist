// This code has been generated with a script

/**
 * Enum PriceDateRole
 * @readonly
 * @enum { string }
 * @description List 173: Price date role
 */
export enum PriceDateRole {
  /**
   * From date
   * @description Date on which a price becomes effective
   * @default '14'
   */
  FromDate = <any>'14',

  /**
   * Until date
   * @description Date on which a price ceases to be effective
   * @default '15'
   */
  UntilDate = <any>'15',

  /**
   * From… until date
   * @description Combines From date and Until date to define a period (both dates are inclusive). Use with for example dateformat 06
   * @default '24'
   */
  FromUntilDate = <any>'24',
}
