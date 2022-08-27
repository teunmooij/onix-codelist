// This code has been generated with a script

/**
 * Enum EPublicationTechnicalProtection
 * @readonly
 * @enum { string }
 * @description List 144: E-publication technical protection
 */
export enum EPublicationTechnicalProtection {

  /**
   * None
   * @description Has no technical protection
   * @default '00'
   */
  None = <any>'00',

  /**
   * DRM
   * @description Has DRM protection
   * @default '01'
   */
  Drm = <any>'01',

  /**
   * Digital watermarking
   * @description Has digital watermarking
   * @default '02'
   */
  DigitalWatermarking = <any>'02',

  /**
   * Adobe DRM
   * @description Has DRM protection applied by the Adobe CS4 Content Server Package or by the Adobe ADEPT hosted service
   * @default '03'
   */
  AdobeDrm = <any>'03',

  /**
   * Apple DRM
   * @description Has FairPlay DRM protection applied via Apple proprietary online store
   * @default '04'
   */
  AppleDrm = <any>'04',

  /**
   * OMA DRM
   * @description Has OMA v2 DRM protection applied, as used to protect some mobile phone content
   * @default '05'
   */
  OmaDrm = <any>'05',

  /**
   * Readium LCP DRM
   * @description Has Licensed Content Protection DRM applied by a Readium License Server
   * @default '06'
   */
  ReadiumLcpDrm = <any>'06',

  /**
   * Sony DRM
   * @description Has Sony DADC User Rights Management (URMS) DRM protection applied
   * @default '07'
   */
  SonyDrm = <any>'07',
}
