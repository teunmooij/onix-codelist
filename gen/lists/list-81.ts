// This code has been generated with a script

/**
 * Enum ProductContentType
 * @readonly
 * @enum { string }
 * @description List 81: Product content type
 */
export enum ProductContentType {

  /**
   * Text (eye-readable)
   * @description Readable text of the main work: this value is required, together with applicable <ProductForm> and <ProductFormDetail> values, to designate an e-book or other digital or physical product whose primary content is eye-readable text
   * @default '10'
   */
  Text = <any>'10',

  /**
   * Extensive links between internal content
   * @description E-publication contains a significant number of actionable cross-references, hyperlinked notes and annotations, or with other actionable links between largely textual elements (eg quiz/test questions, ‘choose your own ending’ etc)
   * @default '15'
   */
  ExtensiveLinksBetweenInternalContent = <any>'15',

  /**
   * Extensive links to external content
   * @description E-publication contains a significant number of actionable (clickable) web links
   * @default '14'
   */
  ExtensiveLinksToExternalContent = <any>'14',

  /**
   * Additional eye-readable text not part of main work
   * @description Publication contains additional textual content such as interview, feature article, essay, bibliography, quiz/test, other background material or text that is not included in a primary or ‘unenhanced’ version
   * @default '16'
   */
  AdditionalEyeReadableTextNotPartOfMainWork = <any>'16',

  /**
   * Additional eye-readable links to external content
   * @description Publication contains a significant number of web links (printed URLs, QR codes etc). For use in ONIX 3.0 only
   * @default '41'
   */
  AdditionalEyeReadableLinksToExternalContent = <any>'41',

  /**
   * Promotional text for other book product
   * @description eg Teaser chapter
   * @default '17'
   */
  PromotionalTextForOtherBookProduct = <any>'17',

  /**
   * Musical notation
   * @description 
   * @default '11'
   */
  MusicalNotation = <any>'11',

  /**
   * Still images / graphics
   * @description Use only when no more detailed specification is provided
   * @default '07'
   */
  StillImagesGraphics = <any>'07',

  /**
   * Photographs
   * @description Whether in a plate section / insert, or not
   * @default '18'
   */
  Photographs = <any>'18',

  /**
   * Figures, diagrams, charts, graphs
   * @description Including other ‘mechanical’ (ie non-photographic) illustrations
   * @default '19'
   */
  FiguresDiagramsChartsGraphs = <any>'19',

  /**
   * Additional images / graphics not part of main work
   * @description Publication is enhanced with additional images or graphical content such as supplementary photographs that are not included in a primary or ‘unenhanced’ version
   * @default '20'
   */
  AdditionalImagesGraphicsNotPartOfMainWork = <any>'20',

  /**
   * Maps and/or other cartographic content
   * @description 
   * @default '12'
   */
  MapsAndOrOtherCartographicContent = <any>'12',

  /**
   * Assessment material
   * @description eg Questions or student exercises, problems, quizzes or tests (as an integral part of the work). For use in ONIX 3.0 only
   * @default '42'
   */
  AssessmentMaterial = <any>'42',

  /**
   * Audiobook
   * @description Audio recording of a reading of a book or other text
   * @default '01'
   */
  Audiobook = <any>'01',

  /**
   * Performance – spoken word
   * @description Audio recording of a drama or other spoken word performance
   * @default '02'
   */
  PerformanceSpokenWord = <any>'02',

  /**
   * Other speech content
   * @description eg an interview, speech, lecture or commentary / discussion, not a ‘reading’ or ‘performance’)
   * @default '13'
   */
  OtherSpeechContent = <any>'13',

  /**
   * Music recording
   * @description Audio recording of a music performance, including musical drama and opera
   * @default '03'
   */
  MusicRecording = <any>'03',

  /**
   * Other audio
   * @description Audio recording of other sound, eg birdsong
   * @default '04'
   */
  OtherAudio = <any>'04',

  /**
   * Partial performance – spoken word
   * @description Audio recording of a reading, performance or dramatization of part of the work
   * @default '21'
   */
  PartialPerformanceSpokenWord = <any>'21',

  /**
   * Additional audio content not part of main work
   * @description Product is enhanced with audio recording of full or partial reading, performance, dramatization, interview, background documentary or other audio content not included in the primary or ‘unenhanced’ version
   * @default '22'
   */
  AdditionalAudioContentNotPartOfMainWork = <any>'22',

  /**
   * Promotional audio for other book product
   * @description eg Reading of teaser chapter
   * @default '23'
   */
  PromotionalAudioForOtherBookProduct = <any>'23',

  /**
   * Video
   * @description Includes Film, video, animation etc. Use only when no more detailed specification is provided. Formerly ‘Moving images’
   * @default '06'
   */
  Video = <any>'06',

  /**
   * Video recording of a reading
   * @description 
   * @default '26'
   */
  VideoRecordingOfAReading = <any>'26',

  /**
   * Performance – visual
   * @description Video recording of a drama or other performance, including musical performance
   * @default '27'
   */
  PerformanceVisual = <any>'27',

  /**
   * Animated / interactive illustrations
   * @description eg animated diagrams, charts, graphs or other illustrations
   * @default '24'
   */
  AnimatedInteractiveIllustrations = <any>'24',

  /**
   * Narrative animation
   * @description eg cartoon, animatic or CGI animation
   * @default '25'
   */
  NarrativeAnimation = <any>'25',

  /**
   * Other video
   * @description Other video content eg interview, not a reading or performance
   * @default '28'
   */
  OtherVideo = <any>'28',

  /**
   * Partial performance – video
   * @description Video recording of a reading, performance or dramatization of part of the work
   * @default '29'
   */
  PartialPerformanceVideo = <any>'29',

  /**
   * Additional video content not part of main work
   * @description E-publication is enhanced with video recording of full or partial reading, performance, dramatization, interview, background documentary or other content not included in the primary or ‘unenhanced’ version
   * @default '30'
   */
  AdditionalVideoContentNotPartOfMainWork = <any>'30',

  /**
   * Promotional video for other book product
   * @description eg Book trailer
   * @default '31'
   */
  PromotionalVideoForOtherBookProduct = <any>'31',

  /**
   * Game / Puzzle
   * @description No multi-user functionality. Formerly just ‘Game’
   * @default '05'
   */
  GamePuzzle = <any>'05',

  /**
   * Contest
   * @description Includes some degree of multi-user functionality
   * @default '32'
   */
  Contest = <any>'32',

  /**
   * Software
   * @description Largely ‘content free’
   * @default '08'
   */
  Software = <any>'08',

  /**
   * Data
   * @description Data files
   * @default '09'
   */
  Data = <any>'09',

  /**
   * Data set plus software
   * @description 
   * @default '33'
   */
  DataSetPlusSoftware = <any>'33',

  /**
   * Blank pages or spaces
   * @description Entire pages or blank spaces, forms, boxes etc, intended to be filled in by the reader
   * @default '34'
   */
  BlankPagesOrSpaces = <any>'34',

  /**
   * Advertising content
   * @description Use only where type of advertising content is not stated
   * @default '35'
   */
  AdvertisingContent = <any>'35',

  /**
   * Advertising – first party
   * @description ‘Back ads’ – promotional pages for other books (that do not include sample content, cf codes 17, 23)
   * @default '37'
   */
  AdvertisingFirstParty = <any>'37',

  /**
   * Advertising – coupons
   * @description Eg to obtain discounts on other products
   * @default '36'
   */
  AdvertisingCoupons = <any>'36',

  /**
   * Advertising – third party display
   * @description 
   * @default '38'
   */
  AdvertisingThirdPartyDisplay = <any>'38',

  /**
   * Advertising – third party textual
   * @description 
   * @default '39'
   */
  AdvertisingThirdPartyTextual = <any>'39',

  /**
   * Scripting
   * @description E-publication contains microprograms written (eg) in Javascript and executed within the reading system. For use in ONIX 3.0 only
   * @default '40'
   */
  Scripting = <any>'40',

  /**
   * Scripted pop-ups
   * @description E-publication contains pop-ups or other functionality offering (eg) term definitions, cross-links or glossary entries [Note this should not include (eg) dictionary funcionality that is part of the reading system.] For use in ONIX 3.0 only
   * @default '43'
   */
  ScriptedPopUps = <any>'43',
}
