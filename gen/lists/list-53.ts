// This code has been generated with a script

/**
 * Enum ReturnsConditionsCodeType
 * @readonly
 * @enum { string }
 * @description List 53: Returns conditions code type
 */
export enum ReturnsConditionsCodeType {

  /**
   * Proprietary
   * @description As specified in <ReturnsCodeTypeName> (ONIX 3.0 only)
   * @default '00'
   */
  Proprietary = <any>'00',

  /**
   * French book trade returns conditions code
   * @description Maintained by CLIL (Commission Interprofessionnel du Livre). Returns conditions values in <ReturnsCode> should be taken from the CLIL list
   * @default '01'
   */
  FrenchBookTradeReturnsConditionsCode = <any>'01',

  /**
   * BISAC Returnable Indicator code
   * @description Maintained by BISAC: Returns conditions values in <ReturnsCode> should be taken from List 66
   * @default '02'
   */
  BisacReturnableIndicatorCode = <any>'02',

  /**
   * UK book trade returns conditions code
   * @description NOT CURRENTLY USED – BIC has decided that it will not maintain a code list for this purpose, since returns conditions are usually at least partly based on the trading relationship
   * @default '03'
   */
  UkBookTradeReturnsConditionsCode = <any>'03',

  /**
   * ONIX Returns conditions code
   * @description Returns conditions values in <ReturnsCode> should be taken from List 204
   * @default '04'
   */
  OnixReturnsConditionsCode = <any>'04',
}
