// This code has been generated with a script

/**
 * Enum ProductClassificationType
 * @readonly
 * @enum { string }
 * @description List 9: Product classification type
 */
export enum ProductClassificationType {

  /**
   * WCO Harmonized System
   * @description World Customs Organization Harmonized Commodity Coding and Description System. Use 6 (or occasionally 8 or 10) digits, without punctuation
   * @default '01'
   */
  WcoHarmonizedSystem = <any>'01',

  /**
   * UNSPSC
   * @description UN Standard Product and Service Classification, including national versions adopted without any additions or changes to the codes or their meaning . Use 8 (or occasionally 10) digits, without punctuation
   * @default '02'
   */
  Unspsc = <any>'02',

  /**
   * HMRC
   * @description UK Revenue and Customs classifications, based on the Harmonized System (8 or 10 digits, without punctuation, for export and import respectively)
   * @default '03'
   */
  Hmrc = <any>'03',

  /**
   * Warenverzeichnis für die Außenhandelsstatistik
   * @description German export trade classification, based on the Harmonised System
   * @default '04'
   */
  WarenverzeichnisFurDieAussenhandelsstatistik = <any>'04',

  /**
   * TARIC
   * @description EU TARIC codes, an extended version of the Harmonized System. Use 10 digits, without punctuation
   * @default '05'
   */
  Taric = <any>'05',

  /**
   * Fondsgroep
   * @description Centraal Boekhuis free classification field for publishers
   * @default '06'
   */
  Fondsgroep = <any>'06',

  /**
   * Sender’s product category
   * @description A product category (not a subject classification) assigned by the sender
   * @default '07'
   */
  SenderProductCategory = <any>'07',

  /**
   * GAPP Product Class
   * @description Product classification maintained by the Chinese General Administration of Press and Publication (http://www.gapp.gov.cn)
   * @default '08'
   */
  GappProductClass = <any>'08',

  /**
   * CPA
   * @description Statistical Classification of Products by Activity in the European Economic Community, see http://ec.europa.eu/eurostat/ramon/nomenclatures/index.cfm?TargetUrl=LST_NOM_DTL&StrNom=CPA_2008. Use 6 digits, without punctuation. For example, printed children’s books are ‘58.11.13’, but the periods are normally ommited in ONIX
   * @default '09'
   */
  Cpa = <any>'09',

  /**
   * NCM
   * @description Mercosur/Mercosul Common Nomenclature, based on the Harmonised System. Use 8 digits, without punctuation
   * @default '10'
   */
  Ncm = <any>'10',

  /**
   * CPV
   * @description Common Procurement Vocabulary, uses to describe requirements for tender for public tendering and procurement within the EU. Code is a nine digit number (including the check digit). See http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=URISERV:l22008
   * @default '11'
   */
  Cpv = <any>'11',

  /**
   * PKWiU
   * @description Polish Classification of Products and Services (2015). Use a single letter followed by 2 to 7 digits, without punctuation. For use in ONIX 3.0 only
   * @default '12'
   */
  PkWiU = <any>'12',

  /**
   * HTSUS
   * @description US HTS (or HTSA) commodity codes for import of goods into USA (10 digits, without punctuation). For use in ONIX 3.0 only. See https://hts.usitc.gov/current
   * @default '13'
   */
  Htsus = <any>'13',

  /**
   * US Schedule B
   * @description US Schedule B commodity codes for export from USA (10 digits, without punctuation). For use in ONIX 3.0 only. See http://uscensus.prod.3ceonline.com
   * @default '14'
   */
  UsScheduleB = <any>'14',

  /**
   * Clave SAT
   * @description Mexican SAT classification, based on UN SPSC with later modifications (8 digits, without punctuation). See https://www.sat.gob.mx/consultas/53693/catalogo-de-productos-y-servicios
   * @default '15'
   */
  ClaveSat = <any>'15',

  /**
   * Electre genre
   * @description Typologie de marché géré par Electre (Market segment code maintained by Electre)
   * @default '50'
   */
  ElectreGenre = <any>'50',
}
