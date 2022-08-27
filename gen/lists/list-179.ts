// This code has been generated with a script

/**
 * Enum PriceCodeType
 * @readonly
 * @enum { string }
 * @description List 179: Price code type
 */
export enum PriceCodeType {

  /**
   * Proprietary
   * @description A publisher or retailer’s proprietary code list as specified in <PriceCodeTypeName> which identifies particular codes with particular price points, price tiers or bands
   * @default '01'
   */
  Proprietary = <any>'01',

  /**
   * Finnish Pocket Book price code
   * @description Price Code scheme for Finnish Pocket Books (Pokkareiden hintaryhmä). Price codes expressed as letters A–J in <PriceCode>
   * @default '02'
   */
  FinnishPocketBookPriceCode = <any>'02',

  /**
   * Finnish Miki Book price code
   * @description Price Code scheme for Finnish Miki Books (Miki-kirjojen hintaryhmä). Price codes expressed as an integer 1–n in <PriceCode>
   * @default '03'
   */
  FinnishMikiBookPriceCode = <any>'03',
}
