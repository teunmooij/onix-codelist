// This code has been generated with a script

/**
 * Enum AvItemTypeCode
 * @readonly
 * @enum { string }
 * @description List 240: AV Item type code
 */
export enum AvItemTypeCode {
  /**
   * Audiovisual work
   * @description A complete audiovisual work which is published as a content item in a product which carries two or more such works, eg when two or three AV works are published in a single omnibus package
   * @default '01'
   */
  AudiovisualWork = <any>'01',

  /**
   * Front matter
   * @description Audiovisual components such as a scene index or introduction which appear before the main content of the product
   * @default '02'
   */
  FrontMatter = <any>'02',

  /**
   * Body matter
   * @description Audiovisual components such as scenes or ‘chapters’ which appear as part of the main body of the AV material in the product
   * @default '03'
   */
  BodyMatter = <any>'03',

  /**
   * End matter
   * @description Audiovisual components such as advertising which appear after the main content of the product
   * @default '04'
   */
  EndMatter = <any>'04',
}