// This code has been generated with a script

/**
 * Enum TextItemType
 * @readonly
 * @enum { string }
 * @description List 42: Text item type
 */
export enum TextItemType {
  /**
   * Textual work
   * @description A complete work which is published as a content item in a product which carries two or more such works, eg when two or three novels are published in a single omnibus volume
   * @default '01'
   */
  TextualWork = <any>'01',

  /**
   * Front matter
   * @description Text components such as Preface, Introduction etc which appear as preliminaries to the main body of text content in a product
   * @default '02'
   */
  FrontMatter = <any>'02',

  /**
   * Body matter
   * @description Text components such as Part, Chapter, Section etc which appear as part of the main body of text content in a product
   * @default '03'
   */
  BodyMatter = <any>'03',

  /**
   * Back matter
   * @description Text components such as Index which appear after the main body of text in a product
   * @default '04'
   */
  BackMatter = <any>'04',
}
