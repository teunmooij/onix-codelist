// This code has been generated with a script

/**
 * Enum PublishingDateRole
 * @readonly
 * @enum { string }
 * @description List 163: Publishing date role
 */
export enum PublishingDateRole {
  /**
   * Publication date
   * @description Nominal date of publication. This date is primarily used for planning, promotion and other business process purposes, and is not necessarily the first date for retail sales or fulfillment of pre-orders. In the absence of a sales embargo date, retail sales and pre-order fulfillment may begin as soon as stock is available to the retailer
   * @default '01'
   */
  PublicationDate = <any>'01',

  /**
   * Sales embargo date
   * @description If there is an embargo on retail sales (in the market) before a certain date, the date from which the embargo is lifted and retail sales and fulfillment of pre-orders are permitted. In the absence of an embargo date, retail sales and pre-order fulfillment may begin as soon as stock is available to the retailer
   * @default '02'
   */
  SalesEmbargoDate = <any>'02',

  /**
   * Public announcement date
   * @description Date when a new product may be announced to the general public. Prior to the announcement date, the product data is intended for internal use by the recipient and supply chain partners only. After the announcement date, or in the absence of an announcement date, the planned product may be announced to the public as soon as metadata is available
   * @default '09'
   */
  PublicAnnouncementDate = <any>'09',

  /**
   * Trade announcement date
   * @description Date when a new product may be announced to the book trade only. Prior to the announcement date, the product information is intended for internal use by the recipient only. After the announcement date, or in the absence of a trade announcement date, the planned product may be announced to supply chain partners (but not necessarily made public – see the Public announcement date) as soon as metadata is available
   * @default '10'
   */
  TradeAnnouncementDate = <any>'10',

  /**
   * Date of first publication
   * @description Date when the work incorporated in a product was first published. For works in translation, see also Date of first publication in original language (code 20)
   * @default '11'
   */
  DateOfFirstPublication = <any>'11',

  /**
   * Last reprint date
   * @description Date when a product was last reprinted
   * @default '12'
   */
  LastReprintDate = <any>'12',

  /**
   * Out-of-print / permanently withdrawn date
   * @description Date when a product was (or will be) declared out-of-print , permanently withdrawn from sale or deleted
   * @default '13'
   */
  OutOfPrintPermanentlyWithdrawnDate = <any>'13',

  /**
   * Last reissue date
   * @description Date when a product was last reissued
   * @default '16'
   */
  LastReissueDate = <any>'16',

  /**
   * Publication date of print counterpart
   * @description Date of publication of a printed book which is the direct print counterpart to a digital product. The counterpart product may be included in <RelatedProduct> using code 13
   * @default '19'
   */
  PublicationDateOfPrintCounterpart = <any>'19',

  /**
   * Date of first publication in original language
   * @description Date when the original language version of work incorporated in a product was first published (note, use only on works in translation – see code 11 for first publication date in the translated language)
   * @default '20'
   */
  DateOfFirstPublicationInOriginalLanguage = <any>'20',

  /**
   * Forthcoming reissue date
   * @description Date when a product will be reissued
   * @default '21'
   */
  ForthcomingReissueDate = <any>'21',

  /**
   * Expected availability date after temporary withdrawal
   * @description Date when a product that has been temporary withdrawn from sale or recalled for any reason is expected to become available again, eg after correction of quality or technical issues
   * @default '22'
   */
  ExpectedAvailabilityDateAfterTemporaryWithdrawal = <any>'22',

  /**
   * Review embargo date
   * @description Date from which reviews of a product may be published eg in newspapers and magazines or online. Provided to the book trade for information only: newspapers and magazines are not expected to be recipients of ONIX metadata
   * @default '23'
   */
  ReviewEmbargoDate = <any>'23',

  /**
   * Publisher’s reservation order deadline
   * @description Latest date on which an order may be placed with the publisher for guaranteed delivery prior to the publication date. May or may not be linked to a special reservation or pre-publication price
   * @default '25'
   */
  PublisherReservationOrderDeadline = <any>'25',

  /**
   * Forthcoming reprint date
   * @description Date when a product will be reprinted
   * @default '26'
   */
  ForthcomingReprintDate = <any>'26',

  /**
   * Preorder embargo date
   * @description Earliest date a retail ‘preorder’ can be placed (in the market), where this is distinct from the public announcement date. In the absence of a preorder embargo, advance orders can be placed as soon as metadata is available to the consumer (this would be the public announcement date, or in the absence of a public announcement date, the earliest date metadata is available to the retailer)
   * @default '27'
   */
  PreorderEmbargoDate = <any>'27',

  /**
   * Transfer date
   * @description Date of acquisition of product by new publisher (use with publishing roles 09 and 13)
   * @default '28'
   */
  TransferDate = <any>'28',

  /**
   * Date of production
   * @description For an audiovisual work (eg on DVD)
   * @default '29'
   */
  DateOfProduction = <any>'29',

  /**
   * Streaming embargo date
   * @description For digital products that are available to end customers both as a download and streamed, the earliest date the product can be made available on a stream, where the streamed version becomes available later than the download. For the download, see code 02 if it is embargoed or code 01 if there is no embargo
   * @default '30'
   */
  StreamingEmbargoDate = <any>'30',

  /**
   * Subscription embargo date
   * @description For digital products that are available to end customers both as purchases and as part of a subscription package, the earliest date the product can be made available by subscription, where the product may not be included in a subscription package until shome while after publication. For ordinary sales, see code 02 if there is a sales embargo or code 01 if there is no embargo
   * @default '31'
   */
  SubscriptionEmbargoDate = <any>'31',

  /**
   * CIP date
   * @description Date by which CIP copy is required for inclusion in the product
   * @default '35'
   */
  CipDate = <any>'35',
}
