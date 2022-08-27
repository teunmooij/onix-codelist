// Code generated by onix-codelist script; DO NOT EDIT.
/* eslint-disable prettier/prettier */

/**
 * Enum TextFormat
 * @readonly
 * @enum { string }
 * @description List 34: Text format
 */
export enum TextFormat {

  /**
   * HTML
   * @description Other than XHTML
   * @default '02'
   */
  Html = <any>'02',

  /**
   * XML
   * @description Other than XHTML
   * @default '03'
   */
  Xml = <any>'03',

  /**
   * XHTML
   * @description 
   * @default '05'
   */
  Xhtml = <any>'05',

  /**
   * Default text format
   * @description Default: plain text containing no markup tags of any kind, except for the character entities &amp; and &lt; that XML insists must be used to represent ampersand and less-than characters in textual data, and in the encoding declared at the head of the message or in the XML default (UTF-8 or UTF-16) if there is no explicit declaration
   * @default '06'
   */
  DefaultTextFormat = <any>'06',

  /**
   * Basic ASCII text
   * @description Plain text containing no markup tags of any kind, except for the character entities &amp; and &lt; that XML insists must be used to represent ampersand and less-than characters in textual data, and with the character set limited to the ASCII range, i.e. valid characters whose Unicode character numbers lie between 32 (space) and 126 (tilde)
   * @default '07'
   */
  BasicAsciiText = <any>'07',
}
