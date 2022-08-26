// This code has been generated with a script

/**
 * Enum MeasureType
 * @readonly
 * @enum { string }
 * @description List 48: Measure type
 */
export enum MeasureType {
  /**
   * Height
   * @description For a book, the overall height when standing on a shelf. For a folded map, the height when folded. For packaged products, the height of the retail packaging, and for trade-only products, the height of the trade packaging. In general, the height of a product in the form in which it is presented or packaged for retail sale
   * @default '01'
   */
  Height = <any>'01',

  /**
   * Width
   * @description For a book, the overall horizontal dimension of the cover when standing upright. For a folded map, the width when folded. For packaged products, the width of the retail packaging, and for trade-only products, the width of the trade packaging. In general, the width of a product in the form in which it is presented or packaged for retail sale
   * @default '02'
   */
  Width = <any>'02',

  /**
   * Thickness
   * @description For a book, the overall thickness of the spine. For a folded map, the thickness when folded. For packaged products, the depth of the retail packaging, and for trade-only products, the depth of the trade packaging. In general, the thickness or depth of a product in the form in which it is presented or packaged for retail sale
   * @default '03'
   */
  Thickness = <any>'03',

  /**
   * Page trim height
   * @description Not recommended for general use
   * @default '04'
   */
  PageTrimHeight = <any>'04',

  /**
   * Page trim width
   * @description Not recommended for general use
   * @default '05'
   */
  PageTrimWidth = <any>'05',

  /**
   * Unit volume
   * @description The volume of the product, including any retail packaging. Note the <MeasureUnit> is interpreted as a volumetric unit – for example code cm = cubic centimetres (ie millilitres), and code oz = (US) fluid ounces. For use in ONIX 3.0 only
   * @default '06'
   */
  UnitVolume = <any>'06',

  /**
   * Unit capacity
   * @description Volume of the internal (fluid) contents of a product (eg of paint in a can). Note the <MeasureUnit> is interpreted as a volumetric unit – for example code cm = cubic centimetres (ie millilitres), and code oz = (US) fluid ounces. For use in ONIX 3.0 only
   * @default '07'
   */
  UnitCapacity = <any>'07',

  /**
   * Unit weight
   * @description The weight of the product, including any retail packaging
   * @default '08'
   */
  UnitWeight = <any>'08',

  /**
   * Diameter (sphere)
   * @description Of a globe, for example
   * @default '09'
   */
  Diameter = <any>'09',

  /**
   * Diameter (tube or cylinder)
   * @description The diameter of the cross-section of a tube or cylinder, usually carrying a rolled sheet product. Use 01 ‘Height’ for the height or length of the tube
   * @default '12'
   */
  Diameter_1 = <any>'12',

  /**
   * Unfolded/unrolled sheet height
   * @description The height of a folded or rolled sheet map, poster etc when unfolded
   * @default '10'
   */
  UnfoldedUnrolledSheetHeight = <any>'10',

  /**
   * Unfolded/unrolled sheet width
   * @description The width of a folded or rolled sheet map, poster etc when unfolded
   * @default '11'
   */
  UnfoldedUnrolledSheetWidth = <any>'11',

  /**
   * Rolled sheet package side measure
   * @description The length of a side of the cross-section of a long triangular or square package, usually carrying a rolled sheet product. Use 01 ‘Height’ for the height or length of the package
   * @default '13'
   */
  RolledSheetPackageSideMeasure = <any>'13',

  /**
   * Unpackaged height
   * @description As height, but of the product without packaging (use only for products supplied in retail packaging, must also supply overall size when packaged using code 01). For use in ONIX 3.0 only
   * @default '14'
   */
  UnpackagedHeight = <any>'14',

  /**
   * Unpackaged width
   * @description As width, but of the product without packaging (use only for products supplied in retail packaging, must also supply overall size when packaged using code 02). For use in ONIX 3.0 only
   * @default '15'
   */
  UnpackagedWidth = <any>'15',

  /**
   * Unpackaged thickness
   * @description As thickness, but of the product without packaging (use only for products supplied in retail packaging, must also supply overall size when packaged using code 03). For use in ONIX 3.0 only
   * @default '16'
   */
  UnpackagedThickness = <any>'16',

  /**
   * Total battery weight
   * @description Weight of batteries built-in, pre-installed or supplied with the product. Details of the batteries should be provided using <ProductFormFeature>. A per-battery unit weight may be calculated from the number of batteries if required. For use in ONIX 3.0 only
   * @default '17'
   */
  TotalBatteryWeight = <any>'17',

  /**
   * Total weight of Lithium
   * @description Mass or equivalent mass of elemental Lithium within the batteries built-in, pre-installed or supplied with the product (eg a Lithium Iron phosphate battery with 160g of cathode material would have a total of around 7g of Lithium). Details of the batteries must be provided using ProductFormFeature. A per-battery unit mass of Lithium may be calculated from the number of batteries if required. For use in ONIX 3.0 only
   * @default '18'
   */
  TotalWeightOfLithium = <any>'18',

  /**
   * Assembled length
   * @description For use where product or part of product requires assembly, for example the size of a completed kit, puzzle or assembled display piece. The assembled dimensions may be larger than the product size as supplied. Use only when the unassembled dimensions as supplied (including any retail or trade packaging) are also provided using codes 01, 02 and 03. For use in ONIX 3.0 only
   * @default '19'
   */
  AssembledLength = <any>'19',

  /**
   * Assembled width
   * @description
   * @default '20'
   */
  AssembledWidth = <any>'20',

  /**
   * Assembled height
   * @description
   * @default '21'
   */
  AssembledHeight = <any>'21',

  /**
   * Carton length
   * @description Includes packaging. See <PackQuantity> for number of copies of the product per pack, and used only when dimensions of individual copies (codes 01, 02, 03) AND <PackQuantity> are supplied. Note that neither orders nor deliveries have to be aligned with multiples of the pack quantity, but such orders and deliveries may be more convenient to handle. For use in ONIX 3.0 only
   * @default '23'
   */
  CartonLength = <any>'23',

  /**
   * Carton width
   * @description
   * @default '24'
   */
  CartonWidth = <any>'24',

  /**
   * Carton height
   * @description
   * @default '25'
   */
  CartonHeight = <any>'25',

  /**
   * Carton weight
   * @description Includes the weight of product(s) within the carton. See <PackQuantity> for number of copies per pack, and used only when the weight of individual copies (code 08) AND <PackQuantity> are supplied. For use in ONIX 3.0 only
   * @default '26'
   */
  CartonWeight = <any>'26',

  /**
   * Pallet length
   * @description Includes pallet and packaging. See <PalletQuantity> for number of copies of the product per pallet, and used only when dimensions of individual copies (codes 01, 02, 03) AND <PalletQuantity> are supplied. Note that neither orders nor deliveries have to be aligned with multiples of the pallet quantity, but such orders and deliveries may be more convenient to handle. For use in ONIX 3.0 only
   * @default '27'
   */
  PalletLength = <any>'27',

  /**
   * Pallet width
   * @description
   * @default '28'
   */
  PalletWidth = <any>'28',

  /**
   * Pallet height
   * @description
   * @default '29'
   */
  PalletHeight = <any>'29',

  /**
   * Pallet weight
   * @description Includes the weight of product(s) and cartons stacked on the pallet. See <PalletQuantity> for the number of copies per pallet, and used only when the weight of individual copies (code 08) AND <PalletQuantity> are supplied. For use in ONIX 3.0 only
   * @default '30'
   */
  PalletWeight = <any>'30',
}
