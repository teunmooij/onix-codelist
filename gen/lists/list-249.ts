// This code has been generated with a script

/**
 * Enum SpecificationFeatureType
 * @readonly
 * @enum { string }
 * @description List 249: Specification feature type
 */
export enum SpecificationFeatureType {
  /**
   * Filename
   * @description Specification Feature Value carries the filename of the final product
   * @default '04'
   */
  Filename = <any>'04',

  /**
   * Audio loudness
   * @description Specification Feature Value is the target loudness in LKFS (LUFS) used for audio normalisation – see ITU-R BS.1770
   * @default '21'
   */
  AudioLoudness = <any>'21',

  /**
   * Paper type
   * @description Specification Feature Description is the paper or card type, eg Coated, uncoated
   * @default '41'
   */
  PaperType = <any>'41',

  /**
   * Paper weight
   * @description Specification Feature Value is the paper or card weight in GSM
   * @default '42'
   */
  PaperWeight = <any>'42',

  /**
   * Paper color
   * @description Specification Feature Value is the paper or card color code selected from List 257
   * @default '43'
   */
  PaperColor = <any>'43',

  /**
   * Ink color(s)
   * @description Specification Feature Description lists the ink color(s) required. Do not use if mono or conventional CMYK
   * @default '44'
   */
  InkColor = <any>'44',

  /**
   * Special finish
   * @description Specification Feature Value lists a special finish required, from List 258
   * @default '45'
   */
  SpecialFinish = <any>'45',
}