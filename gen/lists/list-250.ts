// This code has been generated with a script

/**
 * Enum ResourceIdentifierType
 * @readonly
 * @enum { string }
 * @description List 250: Resource identifier type
 */
export enum ResourceIdentifierType {
  /**
   * Proprietary
   * @description For example, a publisher’s internal digital asset ID. Note that <IDTypeName> is required with proprietary identifiers
   * @default '01'
   */
  Proprietary = <any>'01',

  /**
   * ISCC
   * @description International Standard Content Code, a ‘similarity hash’ derived algorithmically from the resource content itself (see https://iscc.codes). <IDValue> is the 55-character case-sensitive string (including three hyphens) forming the ISCC of the resource file
   * @default '09'
   */
  Iscc = <any>'09',
}
