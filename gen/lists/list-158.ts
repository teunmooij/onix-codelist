// This code has been generated with a script

/**
 * Enum ResourceContentType
 * @readonly
 * @enum { string }
 * @description List 158: Resource content type
 */
export enum ResourceContentType {
  /**
   * Front cover
   * @description 2D
   * @default '01'
   */
  FrontCover = <any>'01',

  /**
   * Back cover
   * @description 2D
   * @default '02'
   */
  BackCover = <any>'02',

  /**
   * Cover / pack
   * @description Not limited to front or back, including 3D perspective
   * @default '03'
   */
  CoverPack = <any>'03',

  /**
   * Contributor picture
   * @description Photograph or portrait of contributor(s)
   * @default '04'
   */
  ContributorPicture = <any>'04',

  /**
   * Series image / artwork
   * @description
   * @default '05'
   */
  SeriesImageArtwork = <any>'05',

  /**
   * Series logo
   * @description
   * @default '06'
   */
  SeriesLogo = <any>'06',

  /**
   * Product image / artwork
   * @description For example, an isolated image from the front cover (without text), image of a completed jigsaw
   * @default '07'
   */
  ProductImageArtwork = <any>'07',

  /**
   * Product logo
   * @description
   * @default '08'
   */
  ProductLogo = <any>'08',

  /**
   * Publisher logo
   * @description
   * @default '09'
   */
  PublisherLogo = <any>'09',

  /**
   * Imprint logo
   * @description
   * @default '10'
   */
  ImprintLogo = <any>'10',

  /**
   * Contributor interview
   * @description
   * @default '11'
   */
  ContributorInterview = <any>'11',

  /**
   * Contributor presentation
   * @description Contributor presentation and/or commentary
   * @default '12'
   */
  ContributorPresentation = <any>'12',

  /**
   * Contributor reading
   * @description
   * @default '13'
   */
  ContributorReading = <any>'13',

  /**
   * Contributor event schedule
   * @description Link to a schedule in iCalendar format
   * @default '14'
   */
  ContributorEventSchedule = <any>'14',

  /**
   * Sample content
   * @description For example: a short excerpt, sample text or a complete sample chapter, page images, screenshots etc
   * @default '15'
   */
  SampleContent = <any>'15',

  /**
   * Widget
   * @description A ‘look inside’ feature presented as a small embeddable application
   * @default '16'
   */
  Widget = <any>'16',

  /**
   * Review
   * @description Review text held in a separate downloadable file, not in the ONIX record. Equivalent of code 06 in List 153. Use the <TextContent> composite for review quotes carried in the ONIX record. Use the <CitedContent> composite for a third-party review which is referenced from the ONIX record. Use <SupportingResource> for review text offered as a separate file resource for reproduction as part of promotional material for the product
   * @default '17'
   */
  Review = <any>'17',

  /**
   * Commentary / discussion
   * @description For example a publisher’s podcast episode, social media message, newsletter issue, other commentary
   * @default '18'
   */
  CommentaryDiscussion = <any>'18',

  /**
   * Reading group guide
   * @description
   * @default '19'
   */
  ReadingGroupGuide = <any>'19',

  /**
   * Teacher’s guide
   * @description Incuding associated teacher / instructor resources
   * @default '20'
   */
  TeacherGuide = <any>'20',

  /**
   * Feature article
   * @description Feature article provided by publisher
   * @default '21'
   */
  FeatureArticle = <any>'21',

  /**
   * Character ‘interview’
   * @description Fictional character ‘interview’
   * @default '22'
   */
  CharacterInterview = <any>'22',

  /**
   * Wallpaper / screensaver
   * @description
   * @default '23'
   */
  WallpaperScreensaver = <any>'23',

  /**
   * Press release
   * @description
   * @default '24'
   */
  PressRelease = <any>'24',

  /**
   * Table of contents
   * @description A table of contents held in a separate downloadable file, not in the ONIX record. Equivalent of code 04 in List 153. Use the <TextContent> composite for a table of contents carried in the ONIX record. Use <Supporting Resource> for text offered as a separate file resource
   * @default '25'
   */
  TableOfContents = <any>'25',

  /**
   * Trailer
   * @description A promotional video (or audio), similar to a movie trailer (sometimes referred to as a ‘book trailer’)
   * @default '26'
   */
  Trailer = <any>'26',

  /**
   * Cover thumbnail
   * @description Intended ONLY for transitional use, where ONIX 2.1 records referencing existing thumbnail assets of unknown pixel size are being re-expressed in ONIX 3.0. Use code 01 for all new cover assets, and where the pixel size of older assets is known
   * @default '27'
   */
  CoverThumbnail = <any>'27',

  /**
   * Full content
   * @description The full content of the product (or the product itself), supplied for example to support full-text search or indexing
   * @default '28'
   */
  FullContent = <any>'28',

  /**
   * Full cover
   * @description Includes cover, back cover, spine and – where appropriate – any flaps
   * @default '29'
   */
  FullCover = <any>'29',

  /**
   * Master brand logo
   * @description
   * @default '30'
   */
  MasterBrandLogo = <any>'30',

  /**
   * Description
   * @description Descriptive text in a separate downloadable file, not in the ONIX record. Equivalent of code 03 in List 153. Use the <TextContent> composite for descriptions carried in the ONIX record. Use <Supporting Resource> for text offered as a separate file resource for reproduction as part of promotional material for the product
   * @default '31'
   */
  Description = <any>'31',

  /**
   * Index
   * @description Index text held in a separate downloadable file, not in the ONIX record. Equivalent of code 15 in List 153. Use the <TextContent> composite for index text carried in the ONIX record. Use <Supporting Resource> for an index offered as a separate file resource
   * @default '32'
   */
  Index = <any>'32',

  /**
   * Student’s guide
   * @description Including associated student / learner resources
   * @default '33'
   */
  StudentGuide = <any>'33',

  /**
   * Publisher’s catalog
   * @description For example a PDF or other digital representation of a publisher’s ‘new titles’ or range catalog
   * @default '34'
   */
  PublisherCatalog = <any>'34',

  /**
   * Online advertisement panel
   * @description For example a banner ad for the product. Pixel dimensions should typically be included in <ResourceVersionFeature>
   * @default '35'
   */
  OnlineAdvertisementPanel = <any>'35',

  /**
   * Online advertisement page
   * @description German ‘Búhnenbild’
   * @default '36'
   */
  OnlineAdvertisementPage = <any>'36',

  /**
   * Promotional event material
   * @description For example, posters, logos, banners, advertising templates for use in connection with a promotional event
   * @default '37'
   */
  PromotionalEventMaterial = <any>'37',

  /**
   * Digital review copy
   * @description Availability of a digital review, evaluation or sample copy, or a digital proof copy, which may be limited to authorised users or account holders, but should otherwise be fully readable and functional
   * @default '38'
   */
  DigitalReviewCopy = <any>'38',

  /**
   * Instructional material
   * @description For example, video showing how to use the product
   * @default '39'
   */
  InstructionalMaterial = <any>'39',

  /**
   * Errata
   * @description
   * @default '40'
   */
  Errata = <any>'40',

  /**
   * Introduction
   * @description Introduction, preface or other preliminary material in a separate resource file
   * @default '41'
   */
  Introduction = <any>'41',

  /**
   * Collection description
   * @description Descriptive material in a separate resource file, not in the ONIX record. Equivalent of code 17 in List 153. Use the <TextContent> composite for collection descriptions carried in the ONIX record. Use <Supporting Resource> for material (which need not be solely only) offered as a separate file resource for reproduction as part of promotional material for the product and collection
   * @default '42'
   */
  CollectionDescription = <any>'42',

  /**
   * Bibliography
   * @description Complete list of books by the author(s), supplied as a separate resource file
   * @default '43'
   */
  Bibliography = <any>'43',

  /**
   * Abstract
   * @description Formal summary of content (normally used with academic and scholarly content only)
   * @default '44'
   */
  Abstract = <any>'44',

  /**
   * Cover holding image
   * @description Image that may be used for promotional purposes in place of a front cover, ONLY where the front cover itself cannot be provided or used for any reason. Typically, holding images may comprise logos, artwork or an unfinished front cover image. Senders should ensure removal of the holding image from the record as soon as a cover image is available. Recipients must ensure replacement of the holding image with the cover image when it is supplied
   * @default '45'
   */
  CoverHoldingImage = <any>'45',

  /**
   * Rules or instructions
   * @description Eg for a game, kit
   * @default '46'
   */
  RulesOrInstructions = <any>'46',

  /**
   * Transcript
   * @description Full transcript of audio or video content of the product
   * @default '47'
   */
  Transcript = <any>'47',

  /**
   * Full cast and credit list
   * @description For use with dramatised audiobooks, filmed entertainment etc, for a cast list sent as a separate resource file, not in the ONIX record. Equivalent of code 28 in List 153
   * @default '48'
   */
  FullCastAndCreditList = <any>'48',

  /**
   * License
   * @description Link to a license covering permitted usage of the product content. Deprecated in favor of <EpubLicense>. This was a temporary workaround in ONIX 3.0, and use of <EpubLicense> is strongly preferred
   * @deprecated
   * @default '99'
   */
  License = <any>'99',
}
