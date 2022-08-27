// This code has been generated with a script

/**
 * Enum AudienceCodeType
 * @readonly
 * @enum { string }
 * @description List 29: Audience code type
 */
export enum AudienceCodeType {
  /**
   * ONIX audience codes
   * @description Using a code from List 28
   * @default '01'
   */
  OnixAudienceCodes = <any>'01',

  /**
   * Proprietary
   * @description As specified in <AudienceCodeTypeName>
   * @default '02'
   */
  Proprietary = <any>'02',

  /**
   * MPAA rating
   * @description Motion Picture Association of America rating applied to movies
   * @default '03'
   */
  MpaaRating = <any>'03',

  /**
   * BBFC rating
   * @description British Board of Film Classification rating applied to movies
   * @default '04'
   */
  BbfcRating = <any>'04',

  /**
   * FSK rating
   * @description German FSK (Freiwillige Selbstkontrolle der Filmwirtschaft) rating applied to movies
   * @default '05'
   */
  FskRating = <any>'05',

  /**
   * BTLF audience code
   * @description French Canadian audience code list, used by BTLF for Memento
   * @default '06'
   */
  BtlfAudienceCode = <any>'06',

  /**
   * Electre audience code
   * @description Audience code used by Electre (France)
   * @default '07'
   */
  ElectreAudienceCode = <any>'07',

  /**
   * ANELE Tipo
   * @description Spain: educational audience and material type code of the Asociación Nacional de Editores de Libros y Material de Enseñanza
   * @default '08'
   */
  AneleTipo = <any>'08',

  /**
   * AVI
   * @description Code list used to specify reading levels for children’s books, used in Flanders, and formerly in the Netherlands – see also code 18
   * @default '09'
   */
  Avi = <any>'09',

  /**
   * AVI (revised)
   * @description Code list used to specify reading levels for children’s books, used in the Netherlands – see also code 09
   * @default '18'
   */
  Avi_1 = <any>'18',

  /**
   * USK rating
   * @description German USK (Unterhaltungssoftware Selbstkontrolle) rating applied to video or computer games
   * @default '10'
   */
  UskRating = <any>'10',

  /**
   * AWS
   * @description Audience code used in Flanders
   * @default '11'
   */
  Aws = <any>'11',

  /**
   * Schulform
   * @description Type of school: codelist maintained by VdS Bildungsmedien eV, the German association of educational media publishers. See http://www.bildungsmedien.de/service/onixlisten/schulform_onix_codelist29_value12_0408.pdf
   * @default '12'
   */
  Schulform = <any>'12',

  /**
   * Bundesland
   * @description School region: codelist maintained by VdS Bildungsmedien eV, the German association of educational media publishers, indicating where products are licensed to be used in schools. See http://www.bildungsmedien.de/service/onixlisten/bundesland_onix_codelist29_value13_0408.pdf
   * @default '13'
   */
  Bundesland = <any>'13',

  /**
   * Ausbildungsberuf
   * @description Occupation: codelist for vocational training materials, maintained by VdS Bildungsmedien eV, the German association of educational media publishers. See http://www.bildungsmedien.de/service/onixlisten/ausbildungsberufe_onix_codelist29_value14_0408.pdf
   * @default '14'
   */
  Ausbildungsberuf = <any>'14',

  /**
   * Suomalainen kouluasteluokitus
   * @description Finnish school or college level
   * @default '15'
   */
  SuomalainenKouluasteluokitus = <any>'15',

  /**
   * CBG age guidance
   * @description UK Publishers Association, Children’s Book Group, coded indication of intended reader age, carried on book covers
   * @default '16'
   */
  CbgAgeGuidance = <any>'16',

  /**
   * Nielsen Book audience code
   * @description Audience code used in Nielsen Book Services
   * @default '17'
   */
  NielsenBookAudienceCode = <any>'17',

  /**
   * Lexile measure
   * @description Lexile measure (the Lexile measure in <AudienceCodeValue> may optionally be prefixed by the Lexile code). Examples might be ‘880L’, ‘AD0L’ or ‘HL600L’. Deprecated – use <Complexity> instead
   * @deprecated
   * @default '19'
   */
  LexileMeasure = <any>'19',

  /**
   * Fry Readability score
   * @description Fry readability metric based on number of sentences and syllables per 100 words. Expressed as a number from 1 to 15 in <AudienceCodeValue>. Deprecated – use <Complexity> instead
   * @deprecated
   * @default '20'
   */
  FryReadabilityScore = <any>'20',

  /**
   * Japanese Children’s audience code
   * @description Children’s audience code (対象読者), two-digit encoding of intended target readership from 0–2 years up to High School level
   * @default '21'
   */
  JapaneseChildrenAudienceCode = <any>'21',

  /**
   * ONIX Adult audience rating
   * @description Publisher’s rating indicating suitability for a particular adult audience, using a code from List 203. Should only be used when the ONIX Audience code indicates a general adult audience (code 01 from List 28)
   * @default '22'
   */
  OnixAdultAudienceRating = <any>'22',

  /**
   * Common European Framework of Reference for Language Learning (CEFR)
   * @description Codes A1 to C2 indicating standardised level of language learning or teaching material, from beginner to advanced, defined by the Council of Europe (see http://www.coe.int/lang-CEFR)
   * @default '23'
   */
  CommonEuropeanFrameworkOfReferenceForLanguageLearning = <any>'23',

  /**
   * Korean Publication Ethics Commission rating
   * @description Rating used in Korea to control selling of books and e-books to minors. Current values are 0 (suitable for all) and 19 (only for sale to ages 19+). See http://www.kpec.or.kr/english/
   * @default '24'
   */
  KoreanPublicationEthicsCommissionRating = <any>'24',

  /**
   * IoE Book Band
   * @description UK Institute of Education Book Bands for Guided Reading scheme (see http://www.ioe.ac.uk/research/4664.html). <AudienceCodeValue> is a color, eg ‘Pink A’ or ‘Copper’. Deprecated – use <Complexity> instead
   * @deprecated
   * @default '25'
   */
  IoEBookBand = <any>'25',

  /**
   * FSK Lehr-/Infoprogramm
   * @description Used for German videos/DVDs with educational or informative content; value for <AudienceCodeValue> must be either ‘Infoprogramm gemäß § 14 JuSchG’ or ‘Lehrprogramm gemäß § 14 JuSchG’
   * @default '26'
   */
  FskLehrInfoprogramm = <any>'26',

  /**
   * Intended audience language
   * @description Where this is different from the language of the text of the book recorded in <Language>. <AudienceCodeValue> should be a value from List 74
   * @default '27'
   */
  IntendedAudienceLanguage = <any>'27',

  /**
   * PEGI rating
   * @description Pan European Game Information rating used primarily for video games
   * @default '28'
   */
  PegiRating = <any>'28',

  /**
   * Gymnasieprogram
   * @description Code indicating the intended curriculum (eg Naturvetenskapsprogrammet, Estetica programmet) in Swedish higher secondary education
   * @default '29'
   */
  Gymnasieprogram = <any>'29',

  /**
   * ISCED 2011
   * @description International Standard Classification of Education levels (2011), eg <AudienceCodeValue> 253 is ‘Lower secondary vocational education, level completion without direct access to upper secondary education’. For use in ONIX 3.0 only. See http://uis.unesco.org/en/topic/international-standard-classification-education-isced
   * @default '30'
   */
  Isced_2011 = <any>'30',
}
