// This code has been generated with a script

/**
 * Enum InsertPointType
 * @readonly
 * @enum { string }
 * @description List 255: Insert point type
 */
export enum InsertPointType {
  /**
   * Adjacent to logical page
   * @description Insert appears after an even numbered or before an odd numbered logical page. <InsertPointValue> is an integer page number
   * @default 'ALP'
   */
  AdjacentToLogicalPage = <any>'ALP',

  /**
   * Adjacent to physical page
   * @description Insert appears after an even numbered or before an odd numbered printed page number. <InsertPointValue> is an integer page number
   * @default 'APP'
   */
  AdjacentToPhysicalPage = <any>'APP',

  /**
   * At timecode
   * @description Insert appears in the body at a specific timecode (hours, minutes, seconds, counted from the beginning of the product before any inserts are added). <InsertPointValue> is in the format HHHMMSS. Fill with leading zeroes if any elements are missing. If centisecond precision is required, use HHHMMSScc
   * @default 'ATC'
   */
  AtTimecode = <any>'ATC',

  /**
   * Adjacent to HTML label
   * @description Insert appears before the block-level HTML element – &lt;InsertPointValue> is the value of the id or name attribute of the block-level element (which must be unique within the body of the product)
   * @default 'AHL'
   */
  AdjacentToHtmlLabel = <any>'AHL',
}
