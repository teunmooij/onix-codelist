// This code has been generated with a script

/**
 * Enum AudienceRangeQualifier
 * @readonly
 * @enum { string }
 * @description List 30: Audience range qualifier
 */
export enum AudienceRangeQualifier {

  /**
   * US school grade range
   * @description Values for <AudienceRangeValue> are specified in List 77
   * @default '11'
   */
  UsSchoolGradeRange = <any>'11',

  /**
   * UK school grade
   * @description Values are defined by BIC for England and Wales, Scotland and N Ireland
   * @default '12'
   */
  UkSchoolGrade = <any>'12',

  /**
   * Reading speed, words per minute
   * @description Values in <AudienceRangeValue> must be integers
   * @default '15'
   */
  ReadingSpeedWordsPerMinute = <any>'15',

  /**
   * Interest age, months
   * @description For use up to 36 months only, or up to 42 months in Audience range value (2) only: values in <AudienceRangeValue> must be integers
   * @default '16'
   */
  InterestAgeMonths = <any>'16',

  /**
   * Interest age, years
   * @description Values in <AudienceRangeValue> must be integers
   * @default '17'
   */
  InterestAgeYears = <any>'17',

  /**
   * Reading age, years
   * @description Values in <AudienceRangeValue> must be integers
   * @default '18'
   */
  ReadingAgeYears = <any>'18',

  /**
   * Spanish school grade
   * @description Spain: combined grade and region code, maintained by the Ministerio de Educación
   * @default '19'
   */
  SpanishSchoolGrade = <any>'19',

  /**
   * Skoletrinn
   * @description Norwegian educational level for primary and secondary education
   * @default '20'
   */
  Skoletrinn = <any>'20',

  /**
   * Nivå
   * @description Swedish educational qualifier (code)
   * @default '21'
   */
  Niva = <any>'21',

  /**
   * Italian school grade
   * @description 
   * @default '22'
   */
  ItalianSchoolGrade = <any>'22',

  /**
   * Schulform
   * @description DEPRECATED – assigned in error: see List 29
   * @deprecated
   * @default '23'
   */
  Schulform = <any>'23',

  /**
   * Bundesland
   * @description DEPRECATED – assigned in error: see List 29
   * @deprecated
   * @default '24'
   */
  Bundesland = <any>'24',

  /**
   * Ausbildungsberuf
   * @description DEPRECATED – assigned in error: see List 29
   * @deprecated
   * @default '25'
   */
  Ausbildungsberuf = <any>'25',

  /**
   * Canadian school grade range
   * @description Values for <AudienceRangeValue> are specified in List 77
   * @default '26'
   */
  CanadianSchoolGradeRange = <any>'26',

  /**
   * Finnish school grade range
   * @description 
   * @default '27'
   */
  FinnishSchoolGradeRange = <any>'27',

  /**
   * Finnish Upper secondary school course
   * @description Lukion kurssi
   * @default '28'
   */
  FinnishUpperSecondarySchoolCourse = <any>'28',

  /**
   * Finnish Upper secondary school course (2021+)
   * @description For use in ONIX 3.0 only
   * @default '33'
   */
  FinnishUpperSecondarySchoolCourse_1 = <any>'33',

  /**
   * Chinese School Grade range
   * @description Values are P, K, 1–17 (including college-level audiences), see List 227
   * @default '29'
   */
  ChineseSchoolGradeRange = <any>'29',

  /**
   * French school cycles / classes
   * @description Detailed French educational level classification. Values are defined by ScoLOMFR, see http://data.education.fr/voc/scolomfr/scolomfr-voc-022 – Cycles de l’enseignement scolaire. See also code 34
   * @default '30'
   */
  FrenchSchoolCyclesClasses = <any>'30',

  /**
   * Brazil Education level
   * @description Nível de Educação do Brasil, see List 238. For use in ONIX 3.0 only
   * @default '31'
   */
  BrazilEducationLevel = <any>'31',

  /**
   * French educational levels
   * @description Basic French educational level classification. Values are defined by ScoLOMFR. For use in ONIX 3.0 only. See http://data.education.fr/voc/scolomfr/scolomfr-voc-012
   * @default '32'
   */
  FrenchEducationalLevels = <any>'32',

  /**
   * Detailed French educational levels
   * @description Detailed French educational level classification. Values are defined by ScoLOMFR. For use in ONIX 3.0 only. See http://data.education.fr/voc/scolomfr/scolomfr-voc-022 – Niveau éducatif détaillé. See also code 30
   * @default '34'
   */
  DetailedFrenchEducationalLevels = <any>'34',
}
