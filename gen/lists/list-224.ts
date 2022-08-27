// This code has been generated with a script

/**
 * Enum StatusDetailTypeSeverity
 * @readonly
 * @enum { string }
 * @description List 224: Status detail type severity
 */
export enum StatusDetailTypeSeverity {
  /**
   * Unclassifiable
   * @description Use ONLY if the message severity cannot be determined (eg with a legacy system unable to provide detailed error codes)
   * @default 'U'
   */
  Unclassifiable = <any>'U',

  /**
   * Info
   * @description For information only, provided to encourage the ONIX data supplier to improve the quality of their data (eg provision of a non-mandatory data element that is currently missing, better conformity with best practice, etc)
   * @default 'I'
   */
  Info = <any>'I',

  /**
   * Query
   * @description Request for clarification or further detail of the meaning of the data provided
   * @default 'Q'
   */
  Query = <any>'Q',

  /**
   * Warning
   * @description The ONIX data has been accepted as provided, but there may be issues in the way it is supplied
   * @default 'W'
   */
  Warning = <any>'W',

  /**
   * Error
   * @description Some data in an ONIX data element or message structure caused an error due to not meeting the requirements of the standard. The data in question has been rejected, but processing of the remaining elements in the record (or the remain records in the message, if used within <MessageStatusDetail>) has continued
   * @default 'E'
   */
  Error = <any>'E',

  /**
   * Fatal error
   * @description Some data in an ONIX data element or message structure caused an unrecoverable error due to not meeting the requirements of the standard. The entire ONIX record has been rejected (or the entire message, if used within <MessageStatusDetail>)
   * @default 'F'
   */
  FatalError = <any>'F',
}
