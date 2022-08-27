// This code has been generated with a script

/**
 * Enum MessageStatusDateRole
 * @readonly
 * @enum { string }
 * @description List 222: Message status date role
 */
export enum MessageStatusDateRole {

  /**
   * Ingest date
   * @description Expected or actual date of processing and ingestion of data to recipient’s system
   * @default '01'
   */
  IngestDate = <any>'01',

  /**
   * Export date
   * @description Expected or actual date for data to be available from the recipient’s system to downstream supply chain partners (or where the recipient is a retailer, to consumers)
   * @default '02'
   */
  ExportDate = <any>'02',
}
