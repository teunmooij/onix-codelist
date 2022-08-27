// This code has been generated with a script

/**
 * Enum AgentRole
 * @readonly
 * @enum { string }
 * @description List 69: Agent role
 */
export enum AgentRole {

  /**
   * Exclusive sales agent
   * @description Publisher’s exclusive sales agent in a specified territory
   * @default '05'
   */
  ExclusiveSalesAgent = <any>'05',

  /**
   * Non-exclusive sales agent
   * @description Publisher’s non-exclusive sales agent in a specified territory
   * @default '06'
   */
  NonExclusiveSalesAgent = <any>'06',

  /**
   * Local publisher
   * @description Publisher for a specified territory
   * @default '07'
   */
  LocalPublisher = <any>'07',

  /**
   * Sales agent
   * @description Publisher’s sales agent in a specific territory. Use only where exclusive / non-exclusive status is not known. Prefer 05 or 06 as appropriate, where possible
   * @default '08'
   */
  SalesAgent = <any>'08',
}
