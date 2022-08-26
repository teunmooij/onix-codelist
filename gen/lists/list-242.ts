// This code has been generated with a script

/**
 * Enum BatteryTypeAndSafety
 * @readonly
 * @enum { string }
 * @description List 242: Battery type and safety
 */
export enum BatteryTypeAndSafety {
  /**
   * Batteries not required
   * @description The default if battery type and safety information is omitted
   * @default '00'
   */
  BatteriesNotRequired = <any>'00',

  /**
   * Batteries built in
   * @description Batteries built in or pre-installed in product, non-user replaceable. May use <ProductFormFeatureDesciption> to provide further details
   * @default '01'
   */
  BatteriesBuiltIn = <any>'01',

  /**
   * Batteries pre-installed
   * @description Batteries pre-installed, user replaceable. Use <ProductFormFeatureDescription> to provide further details, eg ‘2 x 1.2V LR6/AA rechargeable’, with these details formatted as [integer] x [number]V [type or descriptive text] and usually taken from the outer packaging
   * @default '02'
   */
  BatteriesPreInstalled = <any>'02',

  /**
   * Batteries supplied
   * @description Batteries included with the product, but not pre-installed. Use <ProductFormFeatureDescription> to provide further details, eg ‘2 x 1.2V LR6/AA rechargeable’, with these details formatted as [integer] x [number]V [type or descriptive text] and usually taken from the outer packaging
   * @default '03'
   */
  BatteriesSupplied = <any>'03',

  /**
   * Batteries required
   * @description Batteries required for use, but not supplied with the product. May use <ProductFormFeatureDescription> to provide further details, eg ‘2 x 1.2V LR6/AA rechargeable’, with these details formatted as [integer] x [number]V [type or descriptive text] and usually taken from the outer packaging
   * @default '04'
   */
  BatteriesRequired = <any>'04',

  /**
   * Batteries supplied spare
   * @description Spare batteries included with product, in addition to those specified using codes 02 or 03. May use <ProductFormFeatureDescription> to provide further details
   * @default '05'
   */
  BatteriesSuppliedSpare = <any>'05',

  /**
   * Safety data sheet available
   * @description (Material) Safety Data Sheet available for the product (including its batteries). <ProductFormFeatureDescription> must be used to supply URL of documentation
   * @default '06'
   */
  SafetyDataSheetAvailable = <any>'06',

  /**
   * Technical data sheet available
   * @description Battery manufacturer’s technical data sheet available. <ProductFormFeatureDescription> must be used to supply URL of documentation
   * @default '07'
   */
  TechnicalDataSheetAvailable = <any>'07',

  /**
   * Rechargeable
   * @description Independent of whether charger is supplied as part of the product. Note that this is largely dependent on battery chemistry, but should be specified separately to avoid ambiguity
   * @default '08'
   */
  Rechargeable = <any>'08',

  /**
   * Non-rechargeable
   * @description
   * @default '09'
   */
  NonRechargeable = <any>'09',

  /**
   * Battery warning text
   * @description <ProductFormFeatureDescription> contains battery safety-related warning text, generally taken from the outer packaging (eg ‘Warning – internal battery: product must not be pierced’)
   * @default '10'
   */
  BatteryWarningText = <any>'10',

  /**
   * Battery chemistry
   * @description <ProductFormFeatureDescription> must provide details of the battery chemistry (eg ‘Sodium-Sulfur’). Use ONLY where no suitable code exists for the specific chemistry used
   * @default '20'
   */
  BatteryChemistry = <any>'20',

  /**
   * Lithium-ion
   * @description For all specific battery chemistries, <ProductFormFeatureDescription> may optionally describe the battery construction – for example the nunber of individual cells per battery and any other physical details, eg ‘4 x pouch cells’
   * @default '21'
   */
  LithiumIon = <any>'21',

  /**
   * Lithium-polymer
   * @description
   * @default '22'
   */
  LithiumPolymer = <any>'22',

  /**
   * Lithium-metal
   * @description
   * @default '23'
   */
  LithiumMetal = <any>'23',

  /**
   * Nickel-metal hydride
   * @description
   * @default '24'
   */
  NickelMetalHydride = <any>'24',

  /**
   * Nickel-Cadmium
   * @description
   * @default '25'
   */
  NickelCadmium = <any>'25',

  /**
   * Zinc-Manganese dioxide
   * @description ‘Alkaline battery’
   * @default '26'
   */
  ZincManganeseDioxide = <any>'26',

  /**
   * Zinc-Carbon
   * @description Common ‘dry cell’ battery
   * @default '27'
   */
  ZincCarbon = <any>'27',

  /**
   * Zinc-air
   * @description
   * @default '28'
   */
  ZincAir = <any>'28',

  /**
   * Silver oxide
   * @description
   * @default '29'
   */
  SilverOxide = <any>'29',

  /**
   * Battery description
   * @description <ProductFormFeatureDescription> may contain a full description of the batteries supplied (chemistry, cell structure, battery size and weight, number, capacity etc). Use ONLY if the product (or a product part) contains multiple different TYPES of battery that cannot be described with existing codes (eg a mix of battery chemistries or batteries of different sizes, within a single product part)
   * @default '99'
   */
  BatteryDescription = <any>'99',
}
