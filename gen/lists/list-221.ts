// This code has been generated with a script

/**
 * Enum MessageStatus
 * @readonly
 * @enum { string }
 * @description List 221: Message status
 */
export enum MessageStatus {
  /**
   * Message received
   * @description Message received but not yet parsed (Acknowledgement must contain neither <MessageStatusDetail> nor <RecordStatusSummary>, and should include <NoProduct/>). There is no particular implication that the acknowledgement message is valid – the status is based solely on receipt of a file and minimal parsing of the original ONIX message header to ascertain <MessageNumber> etc.. The Acknowledgement message MAY give a date when parsing is planned
   * @default '00'
   */
  MessageReceived = <any>'00',

  /**
   * Message rejected
   * @description Entire original ONIX message rejected (ie NONE of the data records have been ingested). The status of any recognisable records MAY be summarised in the remainder of the Acknowledgement Message
   * @default '01'
   */
  MessageRejected = <any>'01',

  /**
   * Message part-processed
   * @description Original ONIX message partially parsed (ie at least SOME of the data records have been ingested, in whole or in part). Records processed to date MUST be summarised in the remainder of the Acknowledgement Message
   * @default '02'
   */
  MessagePartProcessed = <any>'02',

  /**
   * Message processed
   * @description Original ONIX message parsed and processed in full, and at least SOME of the data records have been ingested, in whole or in part), Results MUST be summarised in the remainder of the Acknowledgement Message
   * @default '03'
   */
  MessageProcessed = <any>'03',
}
