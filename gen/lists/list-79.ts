// This code has been generated with a script

/**
 * Enum ProductFormFeatureType
 * @readonly
 * @enum { string }
 * @description List 79: Product form feature type
 */
export enum ProductFormFeatureType {

  /**
   * Color of cover
   * @description For Product Form Feature values see code list 98
   * @default '01'
   */
  ColorOfCover = <any>'01',

  /**
   * Color of page edge
   * @description For Product Form Feature values see code list 98
   * @default '02'
   */
  ColorOfPageEdge = <any>'02',

  /**
   * Text font
   * @description The principal font used for body text, when this is a significant aspect of product description, eg for some Bibles, and for large print product. The accompanying <ProductFormFeatureDescription> is text specifying the typeface name. The font size may be specified with the font name, but is preferred separately (in points) in <ProductFormFeatureValue>
   * @default '03'
   */
  TextFont = <any>'03',

  /**
   * Special cover material
   * @description For Product Form Feature values see code list 99
   * @default '04'
   */
  SpecialCoverMaterial = <any>'04',

  /**
   * DVD region
   * @description For Product Form Feature values see code list 76
   * @default '05'
   */
  DvdRegion = <any>'05',

  /**
   * Operating system requirements
   * @description A computer or handheld device operating system required to use a digital product, with version detail if applicable. The accompanying Product Form Feature Value is a code from List 176. Version detail, when applicable, is carried in Product Form Feature Description
   * @default '06'
   */
  OperatingSystemRequirements = <any>'06',

  /**
   * Other system requirements
   * @description Other system requirements for a digital product, described by free text in Product Form Feature Description
   * @default '07'
   */
  OtherSystemRequirements = <any>'07',

  /**
   * ‘Point and listen’ device compatibility
   * @description Indicates compatibility with proprietary ‘point and listen’ devices such as Ting Pen (http://www.ting.eu), the iSmart Touch and Read Pen. These devices scan invisible codes specially printed on the page to identify the book and position of the word, and the word is then read aloud by the device. The name of the compatible device (or range of devices) should be given in <ProductFormFeatureDescription>
   * @default '08'
   */
  PointAndListenDeviceCompatibility = <any>'08',

  /**
   * E-publication accessibility detail
   * @description For <ProductFormFeatureValue> codes, see Codelist 196
   * @default '09'
   */
  EPublicationAccessibilityDetail = <any>'09',

  /**
   * E-publication format version
   * @description For versioned e-book file formats (or in some cases, devices). <ProductFormFeatureValue> should contain the version number as a period-separated list of numbers (eg ‘7’, ‘1.5’ or ‘3.10.7’). Use only with ONIX 3.0 – in ONIX 2.1, use <EpubTypeVersion> instead. For the most common file formats, code 15 and List 220 is strongly preferred
   * @default '10'
   */
  EPublicationFormatVersion = <any>'10',

  /**
   * US CPSIA or other international hazard warning
   * @description Hazard warning required by US Consumer Product Safety Improvement Act (CPSIA) of 2008 or other US or international legislation. Required, when applicable, for products sold in the US. The Product Form Feature Value is a code from List 143. Further explanation may be given in Product Form Feature Description
   * @default '12'
   */
  UsCpsiaOrOtherInternationalHazardWarning = <any>'12',

  /**
   * EU Toy Safety Hazard warning
   * @description Product carries hazard warning required by EU Toy Safety Directive. The Product Form Feature Value is a code from List 184, and (for some codes) the exact wording of the warning may be given in Product Form Feature Description
   * @default '13'
   */
  EuToySafetyHazardWarning = <any>'13',

  /**
   * IATA Dangerous Goods warning
   * @description Product Form Feature Description must give further details of the warning
   * @default '14'
   */
  IataDangerousGoodsWarning = <any>'14',

  /**
   * E-publication format version code
   * @description For common versioned e-book formats (or in some cases, devices) – for example EPUB 2.0.1 or EPUB 3.0. <ProductFormFeatureValue> is a code from list 220. Use in ONIX 3.0 only
   * @default '15'
   */
  EPublicationFormatVersionCode = <any>'15',

  /**
   * E-publication format validator version
   * @description For common versioned e-book formats, the name and version of the validator used to check conformance. <ProductFormFeatureDescription> is the common name of the validator used (eg EpubCheck, Flightdeck), and <ProductFormFeatureValue> is the version number of the validator (eg 4.0.0a). Use with code 15 (or possibly code 10), or with <EpubTypeVersion>, to specify the version the e-publication conforms with
   * @default '16'
   */
  EPublicationFormatValidatorVersion = <any>'16',

  /**
   * ‘Point and watch’ device/app compatibility
   * @description Indicates compatibility with proprietary ‘point and watch‘ devices or apps. These scan invisible codes specially printed on the page, or the whole page image, to identify the book and page position. Scanning can trigger display of (for example) an augmented reality view of the page. The name of the compatible app or device (or range of apps/devices) should be given in <ProductFormFeatureDescription>. For use in ONIX 3.0 only
   * @default '17'
   */
  PointAndWatchDeviceAppCompatibility = <any>'17',

  /**
   * E-publication authentication and access control
   * @description Requirement for user authentication prior to use, with detail of authentication method (user enrolment, and login passwords, location- or device-based recognition, authentication via third-party identity service etc) given in <ProductFormFeatureDescription>. For use in ONIX 3.0 only
   * @default '18'
   */
  EPublicationAuthenticationAndAccessControl = <any>'18',

  /**
   * B and safety a
   * @description Use to describe battery requirements,  hazards and
   * @default '19'
   */
  BAndSafetyA = <any>'19',

  /**
   * Battery capacity
   * @description Total capacity (of batteries in the product) in Watt hours. <ProductFormFeatureValue> is an integer or decimal number (eg ‘45’, not ‘45Wh’). For use in ONIX 3.0 only
   * @default '20'
   */
  BatteryCapacity = <any>'20',

  /**
   * Dangerous goods
   * @description Use to describe regulation of the product for various purposes. <ProductFormFeatureValue> is a code from List 243. For use in ONIX 3.0 only
   * @default '21'
   */
  DangerousGoods = <any>'21',

  /**
   * Game pieces
   * @description Number of pieces, eg for jigsaws, puzzles, kits, board games. <ProductFormFeatureValue> is an integer. For use in ONIX 3.0 only
   * @default '22'
   */
  GamePieces = <any>'22',

  /**
   * Game players
   * @description Number of players, for board games, card games, videogames etc. <ProductFormFeatureValue> must be a required (exact) number as an integer OR a range (eg ‘2–6’), optionally accompanied by the number of players as text (eg ‘suitable for 2–6 players’) in <ProductFormFeatureDescription>. For use in ONIX 3.0 only
   * @default '23'
   */
  GamePlayers = <any>'23',

  /**
   * Game play time
   * @description Typical time to complete a game, for board games, card games, videogames etc, stated as an integer (in minutes) OR range (eg ‘60–90’) in <ProductFormFeatureValue>, optionally accompanied by the playing time as text (eg ‘typically 60–90 minutes’) in <ProductFormFeatureDescription>. For use in ONIX 3.0 only
   * @default '24'
   */
  GamePlayTime = <any>'24',

  /**
   * Personal data requirements
   * @description Personal data required for registration or use of the product. This can be coded in <ProductFormFeatureValue> (for example using a URI from SCOLOM list 044 – see http://data.education.fr/voc/scolomfr/scolomfr-voc-044) – and/or described in <ProductFormFeatureDescription>. For use in ONIX 3.0 only
   * @default '25'
   */
  PersonalDataRequirements = <any>'25',

  /**
   * Not FSC or PEFC certified
   * @description Product does not carry FSC or PEFC logo. The Product Form Feature Value element is not used. The Product Form Feature Description element may carry free text indicating the grade or type of paper. The product record may also still carry a claimed Pre- and Post-Consumer Waste (PCW) percentage value (type code 37) in a separate repeat of the Product Form Feature composite
   * @default '30'
   */
  NotFscOrPefcCertified = <any>'30',

  /**
   * FSC certified – pure
   * @description Product carries FSC logo (Pure, 100%). <ProductFormFeatureValue> is the Certification number (ie either a Chain Of Custody (COC) number or a Trademark License number) printed on the book. Format: Chain of Custody number is two to five letters-COC-six digits (the digits should include leading zeros if necessary), eg ‘AB-COC-001234’ or ‘ABCDE-COC-123456’; Trademark License number is C followed by six digits, eg ‘C005678’ (this would normally be prefixed by ‘FSC®’ when displayed). The Product Form Feature Description element may carry free text indicating the grade or type of paper. By definition, a product certified Pure does not contain Pre- or Post-Consumer-Waste (PCW), so type code 31 can only occur on its own. Certification numbers may be checked at https://info.fsc.org/
   * @default '31'
   */
  FscCertifiedPure = <any>'31',

  /**
   * FSC certified – mixed sources
   * @description Product carries FSC logo (Mixed sources, Mix). <ProductFormFeatureValue> is the Certification number (ie either a Chain Of Custody (COC) number or a Trademark License number) printed on the book. Format: Chain of Custody number is two to five letters-COC-six digits (the digits should include leading zeros if necessary), eg ‘AB-COC-001234’ or ‘ABCDE-COC-123456’; Trademark License number is C followed by six digits, eg ‘C005678’ (this would normally be prefixed by ‘FSC®’ when displayed). The Product Form Feature Description element may carry free text indicating the grade or type of paper. May be accompanied by a Pre- and Post-Consumer-Waste (PCW) percentage value, to be reported in another instance of <ProductFormFeature> with type code 36. Certification numbers may be checked at https://info.fsc.org/
   * @default '32'
   */
  FscCertifiedMixedSources = <any>'32',

  /**
   * FSC certified – recycled
   * @description Product carries FSC logo (Recycled). <ProductFormFeatureValue> is the Certification number (ie either a Chain Of Custody (COC) number or a Trademark License number) printed on the book. Format: Chain of Custody number is two to five letters-COC-six digits (the digits should include leading zeroes if necessary), eg ‘AB-COC-001234’ or ‘ABCDE-COC-123456’; Trademark License number is C followed by six digits, eg ‘C005678’ (this would normally be prefixed by ‘FSC®’ when displayed). The Product Form Feature Description element may carry free text indicating the grade or type of paper. Should be accompanied by a Pre- and Post-Consumer-Waste (PCW) percentage value, to be reported in another instance of <ProductFormFeature> with type code 36. Certification numbers may be checked at https://info.fsc.org/
   * @default '33'
   */
  FscCertifiedRecycled = <any>'33',

  /**
   * PEFC certified
   * @description Product carries PEFC logo (certified) or equivalent from PEFC-endorsed national scheme . <ProductFormFeatureValue> is the Chain Of Custody (COC) number printed on the book. The Product Form Feature Description element may carry free text indicating the grade or type of paper. May be accompanied by a Post-Consumer Waste (PCW) percentage value, to be reported in another instance of <ProductFormFeature> with type code 36
   * @default '34'
   */
  PefcCertified = <any>'34',

  /**
   * PEFC recycled
   * @description Product carries PEFC logo (recycled) or equivalent from PEFC-endorsed national scheme . <ProductFormFeatureValue> is the Chain Of Custody (COC) number printed on the book. The Product Form Feature Description element may carry free text indicating the grade or type of paper. Should be accompanied by a Post-Consumer-Waste (PCW) percentage value, to be reported in another instance of <ProductFormFeature> with type code 36
   * @default '35'
   */
  PefcRecycled = <any>'35',

  /**
   * FSC or PEFC certified Pre- and Post-Consumer Waste (PCW) percentage
   * @description The percentage of recycled Pre- and Post-Consumer-Waste (PCW) used in a product where the composition is certified by FSC  or PEFC
   * @default '36'
   */
  FscOrPefcCertifiedPreAndPostConsumerWastePercentage = <any>'36',

  /**
   * Claimed Pre- and Post-Consumer Waste (PCW) percentage
   * @description The percentage of recycled Pre- and Post-Consumer Waste (PCW) claimed to be used in a product where the composition is not certified by FSC or PEFC. <Product FormFeatureValue> is an integer. <ProductFormFeatureDescription> may carry free text supporting the claim. Must be accompanied by type code 30
   * @default '37'
   */
  ClaimedPreAndPostConsumerWastePercentage = <any>'37',

  /**
   * ‘Green’ inks
   * @description Vegetable-based or other environmentally-conscious inks and varnishes. <ProductFormFeatureDescription> may carry free text with a more detailed statement. For use in ONIX 3.0 only
   * @default '38'
   */
  GreenInks = <any>'38',

  /**
   * ‘Green’ adhesives
   * @description Product binding uses environmentally-concious adhesives and other binding materials. <ProductFormFeatureDescription> may carry free text with a more detailed statement. For use in ONIX 3.0 only
   * @default '39'
   */
  GreenAdhesives = <any>'39',

  /**
   * Paper produced by ‘green’ technology
   * @description Product made from paper produced using environmentally-conscious technology. <ProductFormFeatureDescription> may carry free text with a more detailed statement
   * @default '40'
   */
  PaperProducedByGreenTechnology = <any>'40',
}
