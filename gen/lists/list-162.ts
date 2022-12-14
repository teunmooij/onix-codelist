// Code generated by onix-codelist script; DO NOT EDIT.
/* eslint-disable prettier/prettier */

/**
 * Enum ResourceVersionFeatureType
 * @readonly
 * @enum { string }
 * @description List 162: Resource version feature type
 */
export enum ResourceVersionFeatureType {

  /**
   * File format
   * @description Resource Version Feature Value carries a code from List 178
   * @default '01'
   */
  FileFormat = <any>'01',

  /**
   * Image height in pixels
   * @description Resource Version Feature Value carries an integer
   * @default '02'
   */
  ImageHeightInPixels = <any>'02',

  /**
   * Image width in pixels
   * @description Resource Version Feature Value carries an integer
   * @default '03'
   */
  ImageWidthInPixels = <any>'03',

  /**
   * Filename
   * @description Resource Version Feature Value carries the filename of the supporting resource, necessary only when it is different from the last part of the path provided in <ResourceLink>
   * @default '04'
   */
  Filename = <any>'04',

  /**
   * Approximate download file size in megabytes
   * @description Resource Version Feature Value carries a decimal number only, suggested no more than 2 or 3 significant digits (eg 1.7, not 1.7462 or 1.75MB)
   * @default '05'
   */
  ApproximateDownloadFileSizeInMegabytes = <any>'05',

  /**
   * MD5 hash value
   * @description MD5 hash value of the resource file. <ResourceVersionFeatureValue> should contain the 128-bit digest value (as 32 hexadecimal digits). Can be used as a cryptographic check on the integrity of a resource after it has been retrieved
   * @default '06'
   */
  Md5HashValue = <any>'06',

  /**
   * Exact download file size in bytes
   * @description Resource Version Feature Value carries a integer number only (eg 1831023)
   * @default '07'
   */
  ExactDownloadFileSizeInBytes = <any>'07',

  /**
   * SHA-256 hash value
   * @description SHA-256 hash value of the resource file. <ResourceVersionFeatureValue> should contain the 256-bit digest value (as 64 hexadecimal digits). Can be used as a cryptographic check on the integrity of a resource after it has been retrieved
   * @default '08'
   */
  Sha_256HashValue = <any>'08',

  /**
   * ISCC
   * @description International Standard Content Code, a ???similarity hash??? derived algorithmically from the resource content itself (see https://iscc.codes). <IDValue> is the 55-character case-sensitive string (including three hyphens) forming the ISCC of the resource file
   * @default '09'
   */
  Iscc = <any>'09',
}
