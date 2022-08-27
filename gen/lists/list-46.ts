// This code has been generated with a script

/**
 * Enum SalesRightsType
 * @readonly
 * @enum { string }
 * @description List 46: Sales rights type
 */
export enum SalesRightsType {

  /**
   * Sales rights unknown or unstated for any reason
   * @description May only be used with the ONIX 3 <ROWSalesRightsType> element
   * @default '00'
   */
  SalesRightsUnknownOrUnstatedForAnyReason = <any>'00',

  /**
   * For sale with exclusive rights in the specified countries or territories
   * @description 
   * @default '01'
   */
  ForSaleWithExclusiveRightsInTheSpecifiedCountriesOrTerritories = <any>'01',

  /**
   * For sale with exclusive rights in the specified countries or territories (sales restriction applies)
   * @description Only for use with ONIX 3. Deprecated
   * @deprecated
   * @default '07'
   */
  ForSaleWithExclusiveRightsInTheSpecifiedCountriesOrTerritories_deprecated = <any>'07',

  /**
   * For sale with non-exclusive rights in the specified countries or territories
   * @description 
   * @default '02'
   */
  ForSaleWithNonExclusiveRightsInTheSpecifiedCountriesOrTerritories = <any>'02',

  /**
   * For sale with non-exclusive rights in the specified countries or territories (sales restriction applies)
   * @description Only for use with ONIX 3. Deprecated
   * @deprecated
   * @default '08'
   */
  ForSaleWithNonExclusiveRightsInTheSpecifiedCountriesOrTerritories_deprecated = <any>'08',

  /**
   * Not for sale in the specified countries or territories (reason unspecified)
   * @description 
   * @default '03'
   */
  NotForSaleInTheSpecifiedCountriesOrTerritories = <any>'03',

  /**
   * Not for sale in the specified countries (but publisher holds exclusive rights in those countries or territories)
   * @description 
   * @default '04'
   */
  NotForSaleInTheSpecifiedCountries = <any>'04',

  /**
   * Not for sale in the specified countries (publisher holds non-exclusive rights in those countries or territories)
   * @description 
   * @default '05'
   */
  NotForSaleInTheSpecifiedCountries_1 = <any>'05',

  /**
   * Not for sale in the specified countries (because publisher does not hold rights in those countries or territories)
   * @description 
   * @default '06'
   */
  NotForSaleInTheSpecifiedCountries_2 = <any>'06',
}
