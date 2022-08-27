// This code has been generated with a script

/**
 * Enum UsageStatus
 * @readonly
 * @enum { string }
 * @description List 146: Usage status
 */
export enum UsageStatus {

  /**
   * Permitted unlimited
   * @description 
   * @default '01'
   */
  PermittedUnlimited = <any>'01',

  /**
   * Permitted subject to limit
   * @description Limit should be specified in <EpubUsageLimit> or <PriceConstraintLimit>
   * @default '02'
   */
  PermittedSubjectToLimit = <any>'02',

  /**
   * Prohibited
   * @description 
   * @default '03'
   */
  Prohibited = <any>'03',
}
