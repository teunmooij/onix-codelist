// This code has been generated with a script

/**
 * Enum NameIdentifierType
 * @readonly
 * @enum { string }
 * @description List 44: Name identifier type
 */
export enum NameIdentifierType {
  /**
   * Proprietary
   * @description Note that <IDTypeName> is required with proprietary identifiers
   * @default '01'
   */
  Proprietary = <any>'01',

  /**
   * Proprietary
   * @description DEPRECATED – use 01
   * @deprecated
   * @default '02'
   */
  Proprietary_deprecated = <any>'02',

  /**
   * DNB publisher identifier
   * @description Deutsche Nationalbibliothek publisher identifier
   * @default '03'
   */
  DnbPublisherIdentifier = <any>'03',

  /**
   * Börsenverein Verkehrsnummer
   * @description
   * @default '04'
   */
  BorsenvereinVerkehrsnummer = <any>'04',

  /**
   * German ISBN Agency publisher identifier
   * @description
   * @default '05'
   */
  GermanIsbnAgencyPublisherIdentifier = <any>'05',

  /**
   * GLN
   * @description GS1 global location number (formerly EAN location number)
   * @default '06'
   */
  Gln = <any>'06',

  /**
   * SAN
   * @description Book trade Standard Address Number – US, UK etc
   * @default '07'
   */
  San = <any>'07',

  /**
   * MARC organization code
   * @description MARC code list for organizations – see http://www.loc.gov/marc/organizations/orgshome.html
   * @default '08'
   */
  MarcOrganizationCode = <any>'08',

  /**
   * Centraal Boekhuis Relatie ID
   * @description Trading party identifier used in the Netherlands
   * @default '10'
   */
  CentraalBoekhuisRelatieId = <any>'10',

  /**
   * Fondscode Boekenbank
   * @description Flemish publisher code
   * @default '13'
   */
  FondscodeBoekenbank = <any>'13',

  /**
   * Y-tunnus
   * @description Business Identity Code (Finland). See http://www.ytj.fi/ (in Finnish)
   * @default '15'
   */
  YTunnus = <any>'15',

  /**
   * ISNI
   * @description International Standard Name Identifier. A sixteen digit number. Usually presented with spaces or hyphens dividing the number into four groups of four digits, but in ONIX the spaces or hyphens should be omitted. See https://isni.org/
   * @default '16'
   */
  Isni = <any>'16',

  /**
   * PND
   * @description Personennamendatei – person name authority file used by Deutsche Nationalbibliothek and in other German-speaking countries. See http://www.dnb.de/standardisierung/normdateien/pnd.htm (German) or http://www.dnb.de/eng/standardisierung/normdateien/pnd.htm (English). DEPRECATED in favor of the GND
   * @deprecated
   * @default '17'
   */
  Pnd = <any>'17',

  /**
   * NACO
   * @description A control number assigned to a Library of Congress Control Number (LCCN) Name Authority / NACO record
   * @default '18'
   */
  Naco = <any>'18',

  /**
   * Japanese Publisher identifier
   * @description Publisher identifier administered by Japanese ISBN Agency
   * @default '19'
   */
  JapanesePublisherIdentifier = <any>'19',

  /**
   * GKD
   * @description Gemeinsame Körperschaftsdatei – Corporate Body Authority File in the German-speaking countries. See http://www.dnb.de/standardisierung/normdateien/gkd.htm (German) or http://www.dnb.de/eng/standardisierung/normdateien/gkd.htm (English). DEPRECATED in favor of the GND
   * @deprecated
   * @default '20'
   */
  Gkd = <any>'20',

  /**
   * ORCID
   * @description Open Researcher and Contributor ID. A sixteen digit number. Usually presented with hyphens dividing the number into four groups of four digits, but in ONIX the hyphens should be omitted. See http://www.orcid.org/
   * @default '21'
   */
  Orcid = <any>'21',

  /**
   * GAPP Publisher Identifier
   * @description Publisher identifier maintained by the Chinese ISBN Agency (GAPP)
   * @default '22'
   */
  GappPublisherIdentifier = <any>'22',

  /**
   * VAT Identity Number
   * @description Identifier for a business organization for VAT purposes, eg within the EU’s VIES system. See http://ec.europa.eu/taxation_customs/vies/faqvies.do for EU VAT ID formats, which vary from country to country. Generally these consist of a two-letter country code followed by the 8–12 digits of the national VAT ID. Some countries include one or two letters within their VAT ID. See http://en.wikipedia.org/wiki/VAT_identification_number for non-EU countries that maintain similar identifiers. Spaces, dashes etc should be omitted
   * @default '23'
   */
  VatIdentityNumber = <any>'23',

  /**
   * JP Distribution Identifier
   * @description 4-digit business organization identifier controlled by the Japanese Publication Wholesalers Association
   * @default '24'
   */
  JpDistributionIdentifier = <any>'24',

  /**
   * GND
   * @description Gemeinsame Normdatei – Joint Authority File in the German-speaking countries. See http://www.dnb.de/EN/gnd (English). Combines the PND, SWD and GKD into a single authority file, and should be used in preference
   * @default '25'
   */
  Gnd = <any>'25',

  /**
   * DUNS
   * @description Dunn and Bradstreet Universal Numbering System, see http://www.dnb.co.uk/dandb-duns-number
   * @default '26'
   */
  Duns = <any>'26',

  /**
   * Ringgold ID
   * @description Ringgold organizational identifier, see http://www.ringgold.com/identify.html
   * @default '27'
   */
  RinggoldId = <any>'27',

  /**
   * Identifiant Editeur Electre
   * @description French Electre publisher identifier
   * @default '28'
   */
  IdentifiantEditeurElectre = <any>'28',

  /**
   * EIDR Party DOI
   * @description DOI used in EIDR party registry, for example ‘10.5237/C9F6-F41F’ (Sam Raimi). See http://eidr.org
   * @default '29'
   */
  EidrPartyDoi = <any>'29',

  /**
   * Identifiant Marque Electre
   * @description French Electre imprint Identifier
   * @default '30'
   */
  IdentifiantMarqueElectre = <any>'30',

  /**
   * VIAF ID
   * @description Virtual Internet Authority File. <IDValue> should be a number. The URI form of the identifier can be created by prefixing the number with ‘https://viaf.org/viaf/’. See https://viaf.org
   * @default '31'
   */
  ViafId = <any>'31',

  /**
   * FundRef DOI
   * @description DOI used in CrossRef’s Open Funder Registry list of academic research funding bodies, for example ‘10.13039/100004440’ (Wellcome Trust). See http://www.crossref.org/fundingdata/registry.html
   * @default '32'
   */
  FundRefDoi = <any>'32',

  /**
   * BNE CN
   * @description Control number assigned to a Name Authority record by the Biblioteca Nacional de España
   * @default '33'
   */
  BneCn = <any>'33',

  /**
   * BNF Control Number
   * @description Numéro de la notice de personne BNF
   * @default '34'
   */
  BnfControlNumber = <any>'34',

  /**
   * ARK
   * @description Archival Resource Key, as a URL (including the address of the ARK resolver provided by eg a national library)
   * @default '35'
   */
  Ark = <any>'35',

  /**
   * Nasjonalt autoritetsregister
   * @description Nasjonalt autoritetsregister for navn – Norwegian national authority file for personal and corporate names. For use in ONIX 3.0 only
   * @default '36'
   */
  NasjonaltAutoritetsregister = <any>'36',

  /**
   * GRID
   * @description Global Research Identifier Database ID (see https://www.grid.ac). For use in ONIX 3.0 only
   * @default '37'
   */
  Grid = <any>'37',

  /**
   * IDRef
   * @description Party ID from Identifiers and Standards for Higher Education and Research (fr: Identifiants et Référentiels pour l’enseignement supérieur et la recherche). For use on ONIX 3.0 only. See https://www.idref.fr
   * @default '38'
   */
  IdRef = <any>'38',

  /**
   * IPI
   * @description Party ID from CISAC’s proprietary Interested Party Information scheme, used primarily in rights and royalies administration. For use in ONIX 3.0 only
   * @default '39'
   */
  Ipi = <any>'39',

  /**
   * ROR
   * @description Research organisation registry identifier (see https://ror.org), leading 0 followed by 8 alphanumeric characters (including 2-digit checksum). For use on ONIX 3.0 only
   * @default '40'
   */
  Ror = <any>'40',
}
