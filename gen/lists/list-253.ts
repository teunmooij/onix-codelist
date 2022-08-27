// This code has been generated with a script

/**
 * Enum ResourceFileFeatureType
 * @readonly
 * @enum { string }
 * @description List 253: Resource file feature type
 */
export enum ResourceFileFeatureType {
  /**
   * File format
   * @description Resource File Feature Value carries a code from List 178
   * @default '01'
   */
  FileFormat = <any>'01',

  /**
   * Filename
   * @description Resource File Feature Value carries the filename of the supporting resource, necessary only when it is different from the last part of the path provided in <ResourceFileLink>
   * @default '04'
   */
  Filename = <any>'04',

  /**
   * Approximate download file size in megabytes
   * @description Resource File Feature Value carries a decimal number only, suggested no more than 2 or 3 significant digits (eg 1.7, not 1.7462 or 1.75MB)
   * @default '05'
   */
  ApproximateDownloadFileSizeInMegabytes = <any>'05',

  /**
   * MD5 hash value
   * @description MD5 hash value of the resource file. <ResourceFileFeatureValue> should contain the 128-bit digest value (as 32 hexadecimal digits). Can be used as a cryptographic check on the integrity of a resource after it has been retrieved
   * @default '06'
   */
  Md5HashValue = <any>'06',

  /**
   * Exact download file size in bytes
   * @description Resource File Feature Value carries a integer number only (eg 1831023)
   * @default '07'
   */
  ExactDownloadFileSizeInBytes = <any>'07',

  /**
   * SHA-256 hash value
   * @description SHA-256 hash value of the resource file. <ResourceFileFeatureValue> should contain the 256-bit digest value (as 64 hexadecimal digits). Can be used as a cryptographic check on the integrity of a resource after it has been retrieved
   * @default '08'
   */
  Sha_256HashValue = <any>'08',

  /**
   * Audio loudness
   * @description Resource File Feature Value is the loudness in LKFS (LUFS) used for audio normalisation – see ITU-R BS.1770
   * @default '31'
   */
  AudioLoudness = <any>'31',
}
