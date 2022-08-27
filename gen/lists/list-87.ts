// This code has been generated with a script

/**
 * Enum BibleReferenceLocation
 * @readonly
 * @enum { string }
 * @description List 87: Bible reference location
 */
export enum BibleReferenceLocation {
  /**
   * Center column
   * @description References are printed in a narrow column in the center of the page between two columns of text
   * @default 'CCL'
   */
  CenterColumn = <any>'CCL',

  /**
   * Page end
   * @description References are printed at the foot of the page
   * @default 'PGE'
   */
  PageEnd = <any>'PGE',

  /**
   * Side column
   * @description References are printed in a column to the side of the scripture
   * @default 'SID'
   */
  SideColumn = <any>'SID',

  /**
   * Verse end
   * @description References are printed at the end of the applicable verse
   * @default 'VER'
   */
  VerseEnd = <any>'VER',

  /**
   * Unknown
   * @description The person creating the ONIX record does not know where the references are located
   * @default 'UNK'
   */
  Unknown = <any>'UNK',

  /**
   * Other
   * @description Other locations not otherwise identified
   * @default 'ZZZ'
   */
  Other = <any>'ZZZ',
}