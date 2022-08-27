// This code has been generated with a script

/**
 * Enum ContentDateRole
 * @readonly
 * @enum { string }
 * @description List 155: Content date role
 */
export enum ContentDateRole {
  /**
   * Publication date
   * @description Nominal date of publication (of the content item or supporting resource)
   * @default '01'
   */
  PublicationDate = <any>'01',

  /**
   * Broadcast date
   * @description Date when a TV or radio program was / will be broadcast
   * @default '04'
   */
  BroadcastDate = <any>'04',

  /**
   * From date
   * @description Date from which a content item or supporting resource may be referenced or used. The content is embargoed until this date
   * @default '14'
   */
  FromDate = <any>'14',

  /**
   * Until date
   * @description Date until which a content item or supporting resource may be referenced or used
   * @default '15'
   */
  UntilDate = <any>'15',

  /**
   * Last updated
   * @description Date when a resource was last changed or updated
   * @default '17'
   */
  LastUpdated = <any>'17',

  /**
   * From… until date
   * @description Combines From date and Until date to define a period (both dates are inclusive). Use with for example dateformat 06
   * @default '24'
   */
  FromUntilDate = <any>'24',

  /**
   * Available from
   * @description Date from which a supporting resource is available for download. Note that this date also implies that it can be immediately displayed to the intended audience, unless a From date (code 14) is also supplied and is later than the Available from date
   * @default '27'
   */
  AvailableFrom = <any>'27',

  /**
   * Available until
   * @description Date until which a supporting resource is available for download. Note that this date does not imply it must be removed from display to the intended audience on this date – for this, use Until date (code 15)
   * @default '28'
   */
  AvailableUntil = <any>'28',

  /**
   * Associated start date
   * @description Start date referenced by the supporting resource, for example, the ‘earliest exam date’ for an official recommendation
   * @default '31'
   */
  AssociatedStartDate = <any>'31',

  /**
   * Associated end date
   * @description End date referenced by the supporting resource, for example, the ‘latest exam date’ for an official recommendation
   * @default '32'
   */
  AssociatedEndDate = <any>'32',
}
