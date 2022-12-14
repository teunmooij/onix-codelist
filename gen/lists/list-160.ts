// Code generated by onix-codelist script; DO NOT EDIT.
/* eslint-disable prettier/prettier */

/**
 * Enum ResourceFeatureType
 * @readonly
 * @enum { string }
 * @description List 160: Resource feature type
 */
export enum ResourceFeatureType {

  /**
   * Required credit
   * @description Credit that must be displayed when a resource is used (eg ‘Photo Jerry Bauer’ or ‘© Magnum Photo’). Credit text should be carried in <FeatureNote>
   * @default '01'
   */
  RequiredCredit = <any>'01',

  /**
   * Caption
   * @description Explanatory caption that may accompany a resource (eg use to identify an author in a photograph). Caption text should be carried in <FeatureNote>
   * @default '02'
   */
  Caption = <any>'02',

  /**
   * Copyright holder
   * @description Copyright holder of resource (indicative only, as the resource can be used without consultation). Copyright text should be carried in <FeatureNote>
   * @default '03'
   */
  CopyrightHolder = <any>'03',

  /**
   * Length in minutes
   * @description Approximate length in minutes of an audio or video resource. <FeatureValue> should contain the length of time as an integer number of minutes
   * @default '04'
   */
  LengthInMinutes = <any>'04',

  /**
   * ISNI of resource contributor
   * @description Use to link resource to a contributor unambiguously, for example with Resource Content types 04, 11–14 from List 158, particularly where the product has more than a single contributor. <FeatureValue> contains the 16-digit ISNI, which must match an ISNI given in an instance of <Contributor>
   * @default '05'
   */
  IsniOfResourceContributor = <any>'05',

  /**
   * Proprietary ID of resource contributor
   * @description Use to link resource to a contributor unambiguously, for example with Resource Content types 04, 11–14 from List 158, particularly where the product has more than a single contributor. <FeatureValue> contains the proprietary ID, which must match a proprietary ID given in an instance of <Contributor>
   * @default '06'
   */
  ProprietaryIdOfResourceContributor = <any>'06',

  /**
   * Resource alternative text
   * @description <FeatureNote> is Alternative text for the resource, which might be presented to visually-impaired readers
   * @default '07'
   */
  ResourceAlternativeText = <any>'07',

  /**
   * Background color of image resource
   * @description <FeatureValue> is a 24-bit RGB or 32-bit RBGA color in hexadecimal, eg fff2de for an opaque warm cream. Used when the resource – for example a 3D image of the product – includes a background, or if used with an alpha channel, when the image is irregularly shaped or contains a semi-transparent shadow thrown against a background
   * @default '08'
   */
  BackgroundColorOfImageResource = <any>'08',

  /**
   * Attribute of product image resource
   * @description <FeatureValue> is an ONIX code from List 256 that describes an attribute of a product image resource (eg perspective, content)
   * @default '09'
   */
  AttributeOfProductImageResource = <any>'09',

  /**
   * Background color of page
   * @description <FeatureValue> is a 24-bit RGB color in hexadecimal, eg ffc300 for a rich yellow-orange, used when the resource supplier requests a specific background color be displayed behind the resource on a web page
   * @default '10'
   */
  BackgroundColorOfPage = <any>'10',
}
