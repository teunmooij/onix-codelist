// This code has been generated with a script

/**
 * Enum BarcodeIndicator
 * @readonly
 * @enum { string }
 * @description List 141: Barcode indicator
 */
export enum BarcodeIndicator {

  /**
   * Not barcoded
   * @description 
   * @default '00'
   */
  NotBarcoded = <any>'00',

  /**
   * Barcoded, scheme unspecified
   * @description 
   * @default '01'
   */
  BarcodedSchemeUnspecified = <any>'01',

  /**
   * GTIN-13
   * @description Barcode uses 13-digit EAN symbology (without 5-digit extension)
   * @default '02'
   */
  Gtin_13 = <any>'02',

  /**
   * GTIN-13+5 (US dollar price encoded)
   * @description EAN symbology, first digit of 5-digit extension is 1–5
   * @default '03'
   */
  Gtin_13_5 = <any>'03',

  /**
   * GTIN-13+5 (CAN dollar price encoded)
   * @description EAN symbology, first digit of 5-digit extension is 6
   * @default '04'
   */
  Gtin_13_5_1 = <any>'04',

  /**
   * GTIN-13+5 (no price encoded)
   * @description EAN symbology, 5-digit extension is 90000, or extension does not indicate a price
   * @default '05'
   */
  Gtin_13_5_2 = <any>'05',

  /**
   * GTIN-13+5 (UK Pound Sterling price encoded)
   * @description EAN symbology, first digit of 5-digit extension is 0
   * @default '10'
   */
  Gtin_13_5_3 = <any>'10',

  /**
   * UPC-12 (item-specific)
   * @description AKA item/price
   * @default '06'
   */
  Upc_12 = <any>'06',

  /**
   * UPC-12 (price-point)
   * @description AKA price/item
   * @default '08'
   */
  Upc_12_1 = <any>'08',

  /**
   * UPC-12+5 (item-specific)
   * @description AKA item/price
   * @default '07'
   */
  Upc_12_5 = <any>'07',

  /**
   * UPC-12+5 (price-point)
   * @description AKA price/item
   * @default '09'
   */
  Upc_12_5_1 = <any>'09',
}
