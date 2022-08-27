// This code has been generated with a script

/**
 * Enum DangerousGoodsRegulations
 * @readonly
 * @enum { string }
 * @description List 243: Dangerous goods regulations
 */
export enum DangerousGoodsRegulations {

  /**
   * Inapplicable
   * @description The product is not classed as dangerous goods. The default if information is omitted
   * @default '00'
   */
  Inapplicable = <any>'00',

  /**
   * GHS
   * @description Indicates if the product is generally classed as a hazardous substance. <ProductFormFeatureDescription> must contain a Hazard Class [eg “Irritant (Category 2)”] using the Globally Harmonized System of Classification and Labelling of Chemicals (http://www.unece.org/fileadmin/DAM/trans/danger/publi/ghs/ghs_rev08/ST-SG-AC10-30-Rev8e.pdf – Annex 1 contains a list of hazard classes and categories). The text is usually available on the Safety Data Sheet, along with equivalent GHS Hazard Pictograms, and may also be on the product or packaging. Must be accompanied by a Safety Data Sheet URL (see code 06), and is usually accompanied by one or more of codes 02–05 listing the specific chemlcal hazard
   * @default '01'
   */
  Ghs = <any>'01',

  /**
   * Transport
   * @description Indicates the product is classed as a hazardous substance for transportation purposes. <ProductFormFeatureDescription> must contain a ‘UN number’ (or UNID, ‘UN’ plus four digits from the list of at http://www.unece.org/fileadmin/DAM/trans/danger/publi/unrec/English/index.pdf) specifying the specific chemical hazard, eg UN1203 is gasoline
   * @default '02'
   */
  Transport = <any>'02',

  /**
   * Storage
   * @description Indicates the product is classed as a hazardous substance for storage purposes. <ProductFormFeatureDescription> must contain a ‘UN number’ (or UNID, ‘UN’ plus four digits from the list of at http://www.unece.org/fileadmin/DAM/trans/danger/publi/unrec/English/index.pdf) specifying the specific chemical hazard, eg UN1203 is gasoline
   * @default '03'
   */
  Storage = <any>'03',

  /**
   * Waste
   * @description Indicates the product is classed as a hazardous substance for disposal purposes. <ProductFormFeatureDescription> must contain a ‘UN number’ (or UNID, ‘UN’ plus four digits from the list of at http://www.unece.org/fileadmin/DAM/trans/danger/publi/unrec/English/index.pdf) specifying the specific chemical hazard, eg UN1203 is gasoline
   * @default '04'
   */
  Waste = <any>'04',

  /**
   * Other
   * @description Indicates the product is classed as a hazardous substance for purposes not covered by other codes. <ProductFormFeatureDescription> must contain a ‘UN number’ (or UNID, ‘UN’ plus four digits from the list of at http://www.unece.org/fileadmin/DAM/trans/danger/publi/unrec/English/index.pdf) specifying the specific chemical hazard, eg UN1203 is gasoline. Must be accompanied by a Safety Data Sheet URL (see code 06)
   * @default '05'
   */
  Other = <any>'05',

  /**
   * Safety data sheet available
   * @description (Material) Safety Data Sheet available for the product. <ProductFormFeatureDescription> must contain the URL of documentation
   * @default '06'
   */
  SafetyDataSheetAvailable = <any>'06',
}
