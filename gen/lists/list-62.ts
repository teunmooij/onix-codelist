// This code has been generated with a script

/**
 * Enum TaxRateType
 * @readonly
 * @enum { string }
 * @description List 62: Tax rate type
 */
export enum TaxRateType {

  /**
   * Higher rate
   * @description Specifies that tax is applied at a higher rate than standard
   * @default 'H'
   */
  HigherRate = <any>'H',

  /**
   * Tax paid at source (Italy)
   * @description Under Italian tax rules, VAT on books may be paid at source by the publisher, and subsequent transactions through the supply chain are tax-exempt
   * @default 'P'
   */
  TaxPaidAtSource = <any>'P',

  /**
   * Lower rate
   * @description Specifies that tax is applied at a lower rate than standard. In the EU, use code R for ‘Reduced rates’, and for rates lower than 5%, use code T (‘Super-reduced’) or Z (Zero-rated)
   * @default 'R'
   */
  LowerRate = <any>'R',

  /**
   * Standard rate
   * @description 
   * @default 'S'
   */
  StandardRate = <any>'S',

  /**
   * Super-low rate
   * @description Specifies that tax is applied at a rate lower than the Lower rate(s). In the EU, use code T for ‘Super-reduced rates’, and for Reduced rates (5% or above) use code R (Lower rate). For use in ONIX 3.0 only
   * @default 'T'
   */
  SuperLowRate = <any>'T',

  /**
   * Zero-rated
   * @description 
   * @default 'Z'
   */
  ZeroRated = <any>'Z',
}
