// This code has been generated with a script

/**
 * Enum CollectionSequenceType
 * @readonly
 * @enum { string }
 * @description List 197: Collection sequence type
 */
export enum CollectionSequenceType {
  /**
   * Proprietary
   * @description A short explanatory label for the sequence should be provided in <CollectionSequenceTypeName>
   * @default '01'
   */
  Proprietary = <any>'01',

  /**
   * Title order
   * @description Order as specified by the title, eg by volume or part number sequence, provided for confirmation
   * @default '02'
   */
  TitleOrder = <any>'02',

  /**
   * Publication order
   * @description Order of publication of products within the collection
   * @default '03'
   */
  PublicationOrder = <any>'03',

  /**
   * Temporal/narrative order
   * @description Order defined by a continuing narrative or temporal sequence within products in the collection. Applicable to either fiction or to non-fiction (eg within a collection of history textbooks)
   * @default '04'
   */
  TemporalNarrativeOrder = <any>'04',

  /**
   * Original publication order
   * @description Original publication order, for a republished collection or collected works originally published outside a collection
   * @default '05'
   */
  OriginalPublicationOrder = <any>'05',

  /**
   * Suggested reading order
   * @description Where it is different from the title order, publication order, narrative order etc
   * @default '06'
   */
  SuggestedReadingOrder = <any>'06',

  /**
   * Suggested display order
   * @description Where it is different from the title order, publication order, narrative order, reading order etc
   * @default '07'
   */
  SuggestedDisplayOrder = <any>'07',
}