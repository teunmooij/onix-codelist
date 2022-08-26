// This code has been generated with a script

/**
 * Enum ResourceFileDetailCode
 * @readonly
 * @enum { string }
 * @description List 252: Resource file detail code
 */
export enum ResourceFileDetailCode {
  /**
   * Mono
   * @description Includes ‘stereo’ where channels are identical
   * @default 'A410'
   */
  Mono = <any>'A410',

  /**
   * 22.05kHz
   * @description
   * @default 'A411'
   */
  '22_05kHz' = <any>'A411',

  /**
   * 44.1kHz
   * @description 44,100 samples per channel per second (CD-quality)
   * @default 'A412'
   */
  '44_1kHz' = <any>'A412',

  /**
   * 48kHz
   * @description
   * @default 'A413'
   */
  '48kHz' = <any>'A413',

  /**
   * 88.2kHz
   * @description
   * @default 'A414'
   */
  '88_2kHz' = <any>'A414',

  /**
   * 96kHz
   * @description
   * @default 'A415'
   */
  '96kHz' = <any>'A415',

  /**
   * 16-bits per sample
   * @description Bit depth, 16 bits per sample (CD-quality)
   * @default 'A416'
   */
  '16BitsPerSample' = <any>'A416',

  /**
   * 20-bits per sample
   * @description
   * @default 'A417'
   */
  '20BitsPerSample' = <any>'A417',

  /**
   * 24-bits per sample
   * @description
   * @default 'A418'
   */
  '24BitsPerSample' = <any>'A418',

  /**
   * 32-bits per sample (FP)
   * @description
   * @default 'A419'
   */
  '32BitsPerSample' = <any>'A419',

  /**
   * Stereo
   * @description Includes ‘joint stereo’
   * @default 'A420'
   */
  Stereo = <any>'A420',

  /**
   * Stereo 2.1
   * @description
   * @default 'A421'
   */
  Stereo_2_1 = <any>'A421',

  /**
   * ID3v1
   * @description Includes v1.1
   * @default 'A422'
   */
  Id3v1 = <any>'A422',

  /**
   * ID3v2
   * @description
   * @default 'A423'
   */
  Id3v2 = <any>'A423',

  /**
   * Surround 4.1
   * @description Five-channel audio (including low-frequency channel)
   * @default 'A441'
   */
  Surround_4_1 = <any>'A441',

  /**
   * Surround 5.1
   * @description Six-channel audio (including low-frequency channel)
   * @default 'A451'
   */
  Surround_5_1 = <any>'A451',

  /**
   * With crop marks
   * @description
   * @default 'B001'
   */
  WithCropMarks = <any>'B001',

  /**
   * Without crop marks
   * @description If page size of the resource file is not equal to final trimmed page size of the product (in <Measure>, then text or image area should be centred on final pages. Note that content may not bleed to the trimmed page edge
   * @default 'B002'
   */
  WithoutCropMarks = <any>'B002',

  /**
   * Monochrome
   * @description
   * @default 'B003'
   */
  Monochrome = <any>'B003',

  /**
   * Preseparated – 2 channels
   * @description Two pages in the resource file represent a single page in the product
   * @default 'B004'
   */
  Preseparated_2Channels = <any>'B004',

  /**
   * Preseparated – 3 channels
   * @description
   * @default 'B005'
   */
  Preseparated_3Channels = <any>'B005',

  /**
   * Preseparated – 4 channels
   * @description For example, preseparated CMYK
   * @default 'B006'
   */
  Preseparated_4Channels = <any>'B006',

  /**
   * Composite (CMYK)
   * @description
   * @default 'B010'
   */
  Composite = <any>'B010',

  /**
   * Composite (RGB)
   * @description
   * @default 'B011'
   */
  Composite_1 = <any>'B011',
}
