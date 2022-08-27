// This code has been generated with a script

/**
 * Enum RecordStatus
 * @readonly
 * @enum { string }
 * @description List 226: Record status
 */
export enum RecordStatus {

  /**
   * No record errors
   * @description Entire record parsed and ingested without errors, record may have a Product record in the Acknowledgement which itself may have a <RecordStatusNote> or <RecordStatusDetail> to convey information, editorial queries or warnings
   * @default '00'
   */
  NoRecordErrors = <any>'00',

  /**
   * No record errors – errors in collateral
   * @description Entire record parsed and ingested without errors, record MUST have a Product record in the Acknowledgement with a <RecordStatusNote> or at least one <RecordStatusDetail> to convey errors in associated media files (and possibly supplementary editorial queries)
   * @default '01'
   */
  NoRecordErrorsErrorsInCollateral = <any>'01',

  /**
   * Record with errors
   * @description Record parsed and ingested with errors, record MUST have a Product record in the Acknowledgement with a <RecordStatusNote> or at least one <RecordStatusDetail> to convey errors (and possibly supplementary information, editorial queries or warnings). At least SOME of the data in the original Product record has been ingested. There may also be errors in associated media files
   * @default '02'
   */
  RecordWithErrors = <any>'02',

  /**
   * Record rejected
   * @description Entire record rejected, record MUST have a Product record in the Acknowedgemet, with a <RecordStatusNote> or at least one <RecordStatusDetail> to convey errors (and possibly supplementary information, editorial queries or warnings). NONE of the data in the original Product record has been ingested
   * @default '03'
   */
  RecordRejected = <any>'03',

  /**
   * Reported previously
   * @description Record status reported in an earlier Acknowledgement message, based on partial processing of ONIX message. The record MUST NOT have a Product record in this Acknowledgement. Code not valid in <RecordStatusDetail>
   * @default '09'
   */
  ReportedPreviously = <any>'09',
}
