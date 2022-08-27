// This code has been generated with a script

/**
 * Enum NotificationOrUpdateType
 * @readonly
 * @enum { string }
 * @description List 1: Notification or update type
 */
export enum NotificationOrUpdateType {
  /**
   * Early notification
   * @description Use for a complete record issued earlier than approximately six months before publication
   * @default '01'
   */
  EarlyNotification = <any>'01',

  /**
   * Advance notification (confirmed)
   * @description Use for a complete record issued to confirm advance information approximately six months before publication; or for a complete record issued after that date and before information has been confirmed from the book-in-hand
   * @default '02'
   */
  AdvanceNotification = <any>'02',

  /**
   * Notification confirmed on publication
   * @description Use for a complete record issued to confirm advance information at or just before actual publication date, usually from the book-in-hand, or for a complete record issued at any later date
   * @default '03'
   */
  NotificationConfirmedOnPublication = <any>'03',

  /**
   * Update (partial)
   * @description In ONIX 3.0 only, use when sending a ‘block update’ record. A block update implies using the supplied block(s) to update the existing record for the product, replacing only the blocks included in the block update, and leaving other blocks unchanged – for example, replacing old information from Blocks 4 and 6 with the newly-received data while retailing information from Blocks 1–3 and 5 untouched. In previous ONIX releases, and for ONIX 3.0 using other notification types, updating is by replacing the complete record with the newly-received data
   * @default '04'
   */
  Update = <any>'04',

  /**
   * Delete
   * @description Use when sending an instruction to delete a record which was previously issued. Note that a Delete instruction should NOT be used when a product is cancelled, put out of print, or otherwise withdrawn from sale: this should be handled as a change of Publishing status, leaving the receiver to decide whether to retain or delete the record. A Delete instruction is used ONLY when there is a particular reason to withdraw a record completely, eg because it was issued in error
   * @default '05'
   */
  Delete = <any>'05',

  /**
   * Notice of sale
   * @description Notice of sale of a product, from one publisher to another: sent by the publisher disposing of the product
   * @default '08'
   */
  NoticeOfSale = <any>'08',

  /**
   * Notice of acquisition
   * @description Notice of acquisition of a product, by one publisher from another: sent by the acquiring publisher
   * @default '09'
   */
  NoticeOfAcquisition = <any>'09',

  /**
   * Test update (Partial)
   * @description ONIX 3.0 only. Record may be processed for test purposes, but data should be discarded when testing is complete. Sender must ensure the <RecordReference> matches a previously-sent Test record
   * @default '88'
   */
  TestUpdate = <any>'88',

  /**
   * Test record
   * @description Record may be processed for test purposes, but data should be discarded when testing is complete. Sender must ensure the <RecordReference> does not match any previously-sent live product record
   * @default '89'
   */
  TestRecord = <any>'89',
}
