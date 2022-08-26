// This code has been generated with a script

/**
 * Enum ProductIdentifierType
 * @readonly
 * @enum { string }
 * @description List 5: Product identifier type
 */
export enum ProductIdentifierType {
  /**
   * Proprietary
   * @description For example, a publisher’s or wholesaler’s product number or SKU. Note that <IDTypeName> is required with proprietary identifiers
   * @default '01'
   */
  Proprietary = <any>'01',

  /**
   * ISBN-10
   * @description International Standard Book Number, pre-2007 (10 digits, or 9 digits plus X, without spaces or hyphens) – now DEPRECATED in ONIX for Books, except where providing historical information for compatibility with legacy systems. It should only be used in relation to products published before 2007 – when ISBN-13 superseded it – and should never be used as the ONLY identifier (it should always be accompanied by the correct GTIN-13 / ISBN-13)
   * @deprecated
   * @default '02'
   */
  Isbn_10 = <any>'02',

  /**
   * GTIN-13
   * @description GS1 Global Trade Item Number, formerly known as EAN article number (13 digits, without spaces or hyphens)
   * @default '03'
   */
  Gtin_13 = <any>'03',

  /**
   * UPC
   * @description UPC product number (12 digits, without spaces or hyphens)
   * @default '04'
   */
  Upc = <any>'04',

  /**
   * ISMN-10
   * @description International Standard Music Number, pre-2008 (M plus nine digits, without spaces or hyphens) – now DEPRECATED in ONIX for Books, except where providing historical information for compatibility with legacy systems. It should only be used in relation to products published before 2008 – when ISMN-13 superseded it – and should never be used as the ONLY identifier (it should always be accompanied by the correct GTIN-12 / ISMN-13)
   * @deprecated
   * @default '05'
   */
  Ismn_10 = <any>'05',

  /**
   * DOI
   * @description Digital Object Identifier (variable length and character set beginning ‘10.’, and without https://doi.org/ or the older http://dx.doi.org/)
   * @default '06'
   */
  Doi = <any>'06',

  /**
   * LCCN
   * @description Library of Congress Control Number in normalized form (up to 12 characters, alphanumeric)
   * @default '13'
   */
  Lccn = <any>'13',

  /**
   * GTIN-14
   * @description GS1 Global Trade Item Number (14 digits, without spaces or hyphens)
   * @default '14'
   */
  Gtin_14 = <any>'14',

  /**
   * ISBN-13
   * @description International Standard Book Number, from 2007 (13 digits starting 978 or 9791–9799, without spaces or hyphens)
   * @default '15'
   */
  Isbn_13 = <any>'15',

  /**
   * Legal deposit number
   * @description The number assigned to a publication as part of a national legal deposit process
   * @default '17'
   */
  LegalDepositNumber = <any>'17',

  /**
   * URN
   * @description Uniform Resource Name: note that in trade applications an ISBN must be sent as a GTIN-13 and, where required, as an ISBN-13 – it should not be sent as a URN
   * @default '22'
   */
  Urn = <any>'22',

  /**
   * OCLC number
   * @description A unique number assigned to a bibliographic item by OCLC
   * @default '23'
   */
  OclcNumber = <any>'23',

  /**
   * Co-publisher’s ISBN-13
   * @description An ISBN-13 assigned by a co-publisher. The ‘main’ ISBN sent with <ProductIDType> codes 03 and/or 15 should always be the ISBN that is used for ordering from the supplier identified in <SupplyDetail>. However, ISBN rules allow a co-published title to carry more than one ISBN. The co-publisher should be identified in an instance of the <Publisher> composite, with the applicable <PublishingRole> code
   * @default '24'
   */
  CoPublisherIsbn_13 = <any>'24',

  /**
   * ISMN-13
   * @description International Standard Music Number, from 2008 (13-digit number starting 9790, without spaces or hyphens)
   * @default '25'
   */
  Ismn_13 = <any>'25',

  /**
   * ISBN-A
   * @description Actionable ISBN, in fact a special DOI incorporating the ISBN-13 within the DOI syntax. Begins ‘10.978.’ or ‘10.979.’ and includes a / character between the registrant element (publisher prefix) and publication element of the ISBN, eg 10.978.000/1234567. Note the ISBN-A should always be accompanied by the ISBN itself, using <ProductIDType> codes 03 and/or 15
   * @default '26'
   */
  IsbnA = <any>'26',

  /**
   * JP e-code
   * @description E-publication identifier controlled by JPOIID’s Committee for Research and Management of Electronic Publishing Codes
   * @default '27'
   */
  JpECode = <any>'27',

  /**
   * OLCC number
   * @description Unique number assigned by the Chinese Online Library Cataloging Center (see http://olcc.nlc.gov.cn)
   * @default '28'
   */
  OlccNumber = <any>'28',

  /**
   * JP Magazine ID
   * @description Japanese magazine identifier, similar in scope to ISSN but identifying a specific issue of a serial publication. Five digits to identify the periodical, plus a hyphen and two digits to identify the issue
   * @default '29'
   */
  JpMagazineId = <any>'29',

  /**
   * UPC12+5
   * @description Used only with comic books and other products which use the UPC extension to identify individual issues or products. Do not use where the UPC12 itself identifies the specific product, irrespective of any 5-digit extension – use code 04 instead
   * @default '30'
   */
  Upc12_5 = <any>'30',

  /**
   * BNF Control number
   * @description Numéro de la notice bibliographique BNF
   * @default '31'
   */
  BnfControlNumber = <any>'31',

  /**
   * ARK
   * @description Archival Resource Key, as a URL (including the address of the ARK resolver provided by eg a national library)
   * @default '35'
   */
  Ark = <any>'35',
}
