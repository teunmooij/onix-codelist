// This code has been generated with a script

/**
 * Enum ProductForm
 * @readonly
 * @enum { string }
 * @description List 150: Product form
 */
export enum ProductForm {
  /**
   * Undefined
   * @description
   * @default '00'
   */
  Undefined = <any>'00',

  /**
   * Audio
   * @description Audio recording – detail unspecified
   * @default 'AA'
   */
  Audio = <any>'AA',

  /**
   * Audio cassette
   * @description Audio cassette (analogue)
   * @default 'AB'
   */
  AudioCassette = <any>'AB',

  /**
   * CD-Audio
   * @description Audio compact disc: use for ‘Red book’ discs (conventional audio CD) and SACD, and use coding in <ProductFormDetail> to specify the format, if required
   * @default 'AC'
   */
  CdAudio = <any>'AC',

  /**
   * DAT
   * @description Digital audio tape cassette
   * @default 'AD'
   */
  Dat = <any>'AD',

  /**
   * Audio disc
   * @description Audio disc (excluding CD-Audio): use for ‘Yellow book’ (CD-Rom-style) discs, including for example mp3 CDs, and use coding in <ProductFormDetail> to specify the format of the data on the disc
   * @default 'AE'
   */
  AudioDisc = <any>'AE',

  /**
   * Audio tape
   * @description Audio tape (analogue open reel tape)
   * @default 'AF'
   */
  AudioTape = <any>'AF',

  /**
   * MiniDisc
   * @description Sony MiniDisc format
   * @default 'AG'
   */
  MiniDisc = <any>'AG',

  /**
   * CD-Extra
   * @description Audio compact disc with part CD-ROM content, also termed CD-Plus or Enhanced-CD: use for ‘Blue book’ and ‘Yellow/Red book’ two-session discs
   * @default 'AH'
   */
  CdExtra = <any>'AH',

  /**
   * DVD Audio
   * @description
   * @default 'AI'
   */
  DvdAudio = <any>'AI',

  /**
   * Downloadable audio file
   * @description Digital audio recording downloadable to the purchaser’s own device(s)
   * @default 'AJ'
   */
  DownloadableAudioFile = <any>'AJ',

  /**
   * Pre-recorded digital audio player
   * @description For example, Playaway audiobook and player: use coding in <ProductFormDetail> to specify the recording format, if required
   * @default 'AK'
   */
  PreRecordedDigitalAudioPlayer = <any>'AK',

  /**
   * Pre-recorded SD card
   * @description For example, Audiofy audiobook chip
   * @default 'AL'
   */
  PreRecordedSdCard = <any>'AL',

  /**
   * LP
   * @description Vinyl disc (analogue).
   * @default 'AM'
   */
  Lp = <any>'AM',

  /**
   * Downloadable and online audio file
   * @description Digital audio recording available both by download to the purchaser’s own device(s) and by online (eg streamed) access
   * @default 'AN'
   */
  DownloadableAndOnlineAudioFile = <any>'AN',

  /**
   * Online audio file
   * @description Digital audio recording available online (eg streamed), not downloadable to the purchaser’s own device(s)
   * @default 'AO'
   */
  OnlineAudioFile = <any>'AO',

  /**
   * Other audio format
   * @description Other audio format not specified by AB to AM. Further detail is expected in <ProductFormDescription>, as <ProductFormDetail> and <ProductFormFeature> are unlikely to be sufficient
   * @default 'AZ'
   */
  OtherAudioFormat = <any>'AZ',

  /**
   * Book
   * @description Book – detail unspecified
   * @default 'BA'
   */
  Book = <any>'BA',

  /**
   * Hardback
   * @description Hardback or cased book
   * @default 'BB'
   */
  Hardback = <any>'BB',

  /**
   * Paperback / softback
   * @description Paperback or other softback book
   * @default 'BC'
   */
  PaperbackSoftback = <any>'BC',

  /**
   * Loose-leaf
   * @description Loose-leaf book
   * @default 'BD'
   */
  LooseLeaf = <any>'BD',

  /**
   * Spiral bound
   * @description Spiral, comb or coil bound book
   * @default 'BE'
   */
  SpiralBound = <any>'BE',

  /**
   * Pamphlet
   * @description Pamphlet, stapled; use for German ‘geheftet’. Includes low-extent wire-stitched books bound without a distinct spine (eg many comic books)
   * @default 'BF'
   */
  Pamphlet = <any>'BF',

  /**
   * Leather / fine binding
   * @description Use <ProductFormDetail> to provide additional description
   * @default 'BG'
   */
  LeatherFineBinding = <any>'BG',

  /**
   * Board book
   * @description Child’s book with all pages printed on board
   * @default 'BH'
   */
  BoardBook = <any>'BH',

  /**
   * Rag book
   * @description Child’s book with all pages printed on textile
   * @default 'BI'
   */
  RagBook = <any>'BI',

  /**
   * Bath book
   * @description Child’s book printed on waterproof material
   * @default 'BJ'
   */
  BathBook = <any>'BJ',

  /**
   * Novelty book
   * @description A book whose novelty consists wholly or partly in a format which cannot be described by any other available code – a ‘conventional’ format code is always to be preferred; one or more Product Form Detail codes, eg from the B2nn group, should be used whenever possible to provide additional description
   * @default 'BK'
   */
  NoveltyBook = <any>'BK',

  /**
   * Slide bound
   * @description Slide bound book
   * @default 'BL'
   */
  SlideBound = <any>'BL',

  /**
   * Big book
   * @description Extra-large format for teaching etc; this format and terminology may be specifically UK; required as a top-level differentiator
   * @default 'BM'
   */
  BigBook = <any>'BM',

  /**
   * Part-work (fascículo)
   * @description A part-work issued with its own ISBN and intended to be collected and bound into a complete book.
   * @default 'BN'
   */
  PartWork = <any>'BN',

  /**
   * Fold-out book or chart
   * @description Concertina-folded booklet or chart, designed to fold to pocket or regular page size, and usually bound within distinct board or card covers: use for German ‘Leporello’
   * @default 'BO'
   */
  FoldOutBookOrChart = <any>'BO',

  /**
   * Foam book
   * @description A children’s book whose cover and pages are made of foam
   * @default 'BP'
   */
  FoamBook = <any>'BP',

  /**
   * Other book format
   * @description Other book format or binding not specified by BB to BP. Further detail is expected in <ProductFormDescription>, as <ProductFormDetail> and <ProductFormFeature> are unlikely to be sufficient
   * @default 'BZ'
   */
  OtherBookFormat = <any>'BZ',

  /**
   * Sheet map
   * @description Sheet map – detail unspecified
   * @default 'CA'
   */
  SheetMap = <any>'CA',

  /**
   * Sheet map, folded
   * @description
   * @default 'CB'
   */
  SheetMapFolded = <any>'CB',

  /**
   * Sheet map, flat
   * @description
   * @default 'CC'
   */
  SheetMapFlat = <any>'CC',

  /**
   * Sheet map, rolled
   * @description See <ProductPackaging> and Codelist 80 for ‘rolled in tube’
   * @default 'CD'
   */
  SheetMapRolled = <any>'CD',

  /**
   * Globe
   * @description Globe or planisphere
   * @default 'CE'
   */
  Globe = <any>'CE',

  /**
   * Other cartographic
   * @description Other cartographic format not specified by CB to CE. Further detail is expected in <ProductFormDescription>, as <ProductFormDetail> and <ProductFormFeature> are unlikely to be sufficient
   * @default 'CZ'
   */
  OtherCartographic = <any>'CZ',

  /**
   * Digital (on physical carrier)
   * @description Digital content delivered on a physical carrier (detail unspecified)
   * @default 'DA'
   */
  Digital = <any>'DA',

  /**
   * Digital (delivered electronically)
   * @description Digital content delivered electronically (delivery method unspecified)
   * @default 'EA'
   */
  Digital_1 = <any>'EA',

  /**
   * CD-ROM
   * @description
   * @default 'DB'
   */
  CdRom = <any>'DB',

  /**
   * CD-I
   * @description CD interactive: use for ‘Green book’ discs
   * @default 'DC'
   */
  CdI = <any>'DC',

  /**
   * Game cartridge
   * @description
   * @default 'DE'
   */
  GameCartridge = <any>'DE',

  /**
   * Diskette
   * @description AKA ‘floppy disc’
   * @default 'DF'
   */
  Diskette = <any>'DF',

  /**
   * DVD-ROM
   * @description
   * @default 'DI'
   */
  DvdRom = <any>'DI',

  /**
   * Secure Digital (SD) Memory Card
   * @description
   * @default 'DJ'
   */
  SecureDigitalMemoryCard = <any>'DJ',

  /**
   * Compact Flash Memory Card
   * @description
   * @default 'DK'
   */
  CompactFlashMemoryCard = <any>'DK',

  /**
   * Memory Stick Memory Card
   * @description
   * @default 'DL'
   */
  MemoryStickMemoryCard = <any>'DL',

  /**
   * USB Flash Drive
   * @description
   * @default 'DM'
   */
  UsbFlashDrive = <any>'DM',

  /**
   * Double-sided CD/DVD
   * @description Double-sided disc, one side Audio CD/CD-ROM, other side DVD
   * @default 'DN'
   */
  DoubleSidedCdDvd = <any>'DN',

  /**
   * BR-ROM
   * @description (Blu Ray ROM)
   * @default 'DO'
   */
  BrRom = <any>'DO',

  /**
   * Other digital carrier
   * @description Other carrier of digital content not specified by DB to DO. Further detail is expected in <ProductFormDescription>, as <ProductFormDetail> and <ProductFormFeature> are unlikely to be sufficient
   * @default 'DZ'
   */
  OtherDigitalCarrier = <any>'DZ',

  /**
   * Digital download and online
   * @description Digital content available both by download and by online access
   * @default 'EB'
   */
  DigitalDownloadAndOnline = <any>'EB',

  /**
   * Digital online
   * @description Digital content accessed online only
   * @default 'EC'
   */
  DigitalOnline = <any>'EC',

  /**
   * Digital download
   * @description Digital content delivered by download only
   * @default 'ED'
   */
  DigitalDownload = <any>'ED',

  /**
   * Film or transparency
   * @description Film or transparency – detail unspecified
   * @default 'FA'
   */
  FilmOrTransparency = <any>'FA',

  /**
   * Slides
   * @description Photographic transparencies mounted for projection
   * @default 'FC'
   */
  Slides = <any>'FC',

  /**
   * OHP transparencies
   * @description Transparencies for overhead projector
   * @default 'FD'
   */
  OhpTransparencies = <any>'FD',

  /**
   * Filmstrip
   * @description Photographic transparencies, unmounted but cut into short multi-frame strips
   * @default 'FE'
   */
  Filmstrip = <any>'FE',

  /**
   * Film
   * @description Continuous movie film as opposed to filmstrip
   * @default 'FF'
   */
  Film = <any>'FF',

  /**
   * Other film or transparency format
   * @description Other film or transparency format not specified by FB to FF. Further detail is expected in <ProductFormDescription>, as <ProductFormDetail> and <ProductFormFeature> are unlikely to be sufficient
   * @default 'FZ'
   */
  OtherFilmOrTransparencyFormat = <any>'FZ',

  /**
   * Digital product license
   * @description Digital product license (delivery method not encoded)
   * @default 'LA'
   */
  DigitalProductLicense = <any>'LA',

  /**
   * Digital product license key
   * @description Digital product license delivered through the retail supply chain as a physical ‘key’, typically a card or booklet containing a code enabling the purchaser to download the associated product
   * @default 'LB'
   */
  DigitalProductLicenseKey = <any>'LB',

  /**
   * Digital product license code
   * @description Digital product license delivered by email or other electronic distribution, typically providing a code enabling the purchaser to activate, upgrade or extend the license supplied with the associated product
   * @default 'LC'
   */
  DigitalProductLicenseCode = <any>'LC',

  /**
   * Microform
   * @description Microform – detail unspecified
   * @default 'MA'
   */
  Microform = <any>'MA',

  /**
   * Microfiche
   * @description
   * @default 'MB'
   */
  Microfiche = <any>'MB',

  /**
   * Microfilm
   * @description Roll microfilm
   * @default 'MC'
   */
  Microfilm = <any>'MC',

  /**
   * Other microform
   * @description Other microform not specified by MB or MC. Further detail is expected in <ProductFormDescription>, as <ProductFormDetail> and <ProductFormFeature> are unlikely to be sufficient
   * @default 'MZ'
   */
  OtherMicroform = <any>'MZ',

  /**
   * Miscellaneous print
   * @description Miscellaneous printed material – detail unspecified
   * @default 'PA'
   */
  MiscellaneousPrint = <any>'PA',

  /**
   * Address book
   * @description May use <ProductFormDetail> codes P201 to P204 to specify binding
   * @default 'PB'
   */
  AddressBook = <any>'PB',

  /**
   * Calendar
   * @description
   * @default 'PC'
   */
  Calendar = <any>'PC',

  /**
   * Cards
   * @description Cards, flash cards (eg for teaching reading), revision cards, divination, playing or trading cards
   * @default 'PD'
   */
  Cards = <any>'PD',

  /**
   * Copymasters
   * @description Copymasters, photocopiable sheets
   * @default 'PE'
   */
  Copymasters = <any>'PE',

  /**
   * Diary or journal
   * @description May use <ProductFormDetail> codes P201 to P204 to specify binding
   * @default 'PF'
   */
  DiaryOrJournal = <any>'PF',

  /**
   * Frieze
   * @description Narrow strip-shaped printed sheet used mostly for education or children’s products (eg depicting alphabet, number line, procession of illustrated characters etc). Usually intended for horizontal display
   * @default 'PG'
   */
  Frieze = <any>'PG',

  /**
   * Kit
   * @description Parts for post-purchase assembly, including card, wood or plastic parts or model components, interlocking construction blocks, beads and other crafting materials etc
   * @default 'PH'
   */
  Kit = <any>'PH',

  /**
   * Sheet music
   * @description May use <ProductFormDetail> codes P201 to P204 to specify binding
   * @default 'PI'
   */
  SheetMusic = <any>'PI',

  /**
   * Postcard book or pack
   * @description Including greeting cards and packs. For bound books (usually with perforated sheets to remove cards), may use <ProductFormDetail> codes P201 to P204 to specify binding
   * @default 'PJ'
   */
  PostcardBookOrPack = <any>'PJ',

  /**
   * Poster
   * @description Poster for retail sale – see also XF
   * @default 'PK'
   */
  Poster = <any>'PK',

  /**
   * Record book
   * @description Record book (eg ‘birthday book’, ‘baby book’): binding unspecified; may use <ProductFormDetail> codes P201 to P204 to specify binding
   * @default 'PL'
   */
  RecordBook = <any>'PL',

  /**
   * Wallet or folder
   * @description Wallet, folder or box (containing loose sheets etc, or empty): it is preferable to code the contents and treat ‘wallet’ (or folder / box) as packaging in <ProductPackaging> with Codelist 80, but if this is not possible (eg where the product is empty and intended for storing other loose items) the product as a whole may be coded as a ‘wallet’. For binders intended for loose leaf or partwork publications intended to be updateable, see codes BD, BN
   * @default 'PM'
   */
  WalletOrFolder = <any>'PM',

  /**
   * Pictures or photographs
   * @description
   * @default 'PN'
   */
  PicturesOrPhotographs = <any>'PN',

  /**
   * Wallchart
   * @description
   * @default 'PO'
   */
  Wallchart = <any>'PO',

  /**
   * Stickers
   * @description
   * @default 'PP'
   */
  Stickers = <any>'PP',

  /**
   * Plate (lámina)
   * @description A book-sized (as opposed to poster-sized) sheet, usually in color or high quality print
   * @default 'PQ'
   */
  Plate = <any>'PQ',

  /**
   * Notebook / blank book
   * @description A book with all pages blank for the buyer’s own use; may use <ProductFormDetail> codes P201 to P204 to specify binding
   * @default 'PR'
   */
  NotebookBlankBook = <any>'PR',

  /**
   * Organizer
   * @description May use <ProductFormDetail> codes P201 to P204 to specify binding
   * @default 'PS'
   */
  Organizer = <any>'PS',

  /**
   * Bookmark
   * @description
   * @default 'PT'
   */
  Bookmark = <any>'PT',

  /**
   * Leaflet
   * @description Folded but unbound
   * @default 'PU'
   */
  Leaflet = <any>'PU',

  /**
   * Book plates
   * @description Ex libris’ book labels and packs
   * @default 'PV'
   */
  BookPlates = <any>'PV',

  /**
   * Other printed item
   * @description Other printed item not specified by PB to PQ. Further detail is expected in <ProductFormDescription>, as <ProductFormDetail> and <ProductFormFeature> are unlikely to be sufficient
   * @default 'PZ'
   */
  OtherPrintedItem = <any>'PZ',

  /**
   * Multiple-component retail product
   * @description Presentation unspecified: format of product components must be given in <ProductPart>
   * @default 'SA'
   */
  MultipleComponentRetailProduct = <any>'SA',

  /**
   * Multiple-component retail product, boxed
   * @description Format of product components must be given in <ProductPart>
   * @default 'SB'
   */
  MultipleComponentRetailProductBoxed = <any>'SB',

  /**
   * Multiple-component retail product, slip-cased
   * @description Format of product components must be given in <ProductPart>
   * @default 'SC'
   */
  MultipleComponentRetailProductSlipCased = <any>'SC',

  /**
   * Multiple-component retail product, shrink-wrapped
   * @description Format of product components must be given in <ProductPart>. Use code XL for a shrink-wrapped pack for trade supply, where the retail items it contains are intended for sale individually
   * @default 'SD'
   */
  MultipleComponentRetailProductShrinkWrapped = <any>'SD',

  /**
   * Multiple-component retail product, loose
   * @description Format of product components must be given in <ProductPart>
   * @default 'SE'
   */
  MultipleComponentRetailProductLoose = <any>'SE',

  /**
   * Multiple-component retail product, part(s) enclosed
   * @description Multiple component product where subsidiary product part(s) is/are supplied as enclosures to the primary part, eg a book with a CD packaged in a sleeve glued within the back cover. Format of product components must be given in <ProductPart>
   * @default 'SF'
   */
  MultipleComponentRetailProductPartEnclosed = <any>'SF',

  /**
   * Video
   * @description Video – detail unspecified
   * @default 'VA'
   */
  Video = <any>'VA',

  /**
   * Videodisc
   * @description eg Laserdisc
   * @default 'VF'
   */
  Videodisc = <any>'VF',

  /**
   * DVD video
   * @description DVD video: specify TV standard in <ProductFormDetail>
   * @default 'VI'
   */
  DvdVideo = <any>'VI',

  /**
   * VHS video
   * @description VHS videotape: specify TV standard in <ProductFormDetail>
   * @default 'VJ'
   */
  VhsVideo = <any>'VJ',

  /**
   * Betamax video
   * @description Betamax videotape: specify TV standard in <ProductFormDetail>
   * @default 'VK'
   */
  BetamaxVideo = <any>'VK',

  /**
   * VCD
   * @description VideoCD
   * @default 'VL'
   */
  Vcd = <any>'VL',

  /**
   * SVCD
   * @description Super VideoCD
   * @default 'VM'
   */
  Svcd = <any>'VM',

  /**
   * HD DVD
   * @description High definition DVD disc, Toshiba HD DVD format
   * @default 'VN'
   */
  HdDvd = <any>'VN',

  /**
   * Blu-ray
   * @description High definition DVD disc, Sony Blu-ray format
   * @default 'VO'
   */
  BluRay = <any>'VO',

  /**
   * UMD Video
   * @description Sony Universal Media disc
   * @default 'VP'
   */
  UmdVideo = <any>'VP',

  /**
   * CBHD
   * @description China Blue High-Definition, derivative of HD-DVD
   * @default 'VQ'
   */
  Cbhd = <any>'VQ',

  /**
   * Other video format
   * @description Other video format not specified by VB to VQ. Further detail is expected in <ProductFormDescription>, as <ProductFormDetail> and <ProductFormFeature> are unlikely to be sufficient
   * @default 'VZ'
   */
  OtherVideoFormat = <any>'VZ',

  /**
   * Trade-only material
   * @description Trade-only material (unspecified)
   * @default 'XA'
   */
  TradeOnlyMaterial = <any>'XA',

  /**
   * Dumpbin – empty
   * @description
   * @default 'XB'
   */
  DumpbinEmpty = <any>'XB',

  /**
   * Dumpbin – filled
   * @description Dumpbin with contents. ISBN (where applicable) and format of contained items must be given in <ProductPart>
   * @default 'XC'
   */
  DumpbinFilled = <any>'XC',

  /**
   * Counterpack – empty
   * @description
   * @default 'XD'
   */
  CounterpackEmpty = <any>'XD',

  /**
   * Counterpack – filled
   * @description Counterpack with contents. ISBN (where applicable) and format of contained items must be given in <ProductPart>
   * @default 'XE'
   */
  CounterpackFilled = <any>'XE',

  /**
   * Poster, promotional
   * @description Promotional poster for display, not for sale – see also PK
   * @default 'XF'
   */
  PosterPromotional = <any>'XF',

  /**
   * Shelf strip
   * @description
   * @default 'XG'
   */
  ShelfStrip = <any>'XG',

  /**
   * Window piece
   * @description Promotional piece for shop window display
   * @default 'XH'
   */
  WindowPiece = <any>'XH',

  /**
   * Streamer
   * @description
   * @default 'XI'
   */
  Streamer = <any>'XI',

  /**
   * Spinner – empty
   * @description
   * @default 'XJ'
   */
  SpinnerEmpty = <any>'XJ',

  /**
   * Large book display
   * @description Large scale facsimile of book for promotional display
   * @default 'XK'
   */
  LargeBookDisplay = <any>'XK',

  /**
   * Shrink-wrapped pack
   * @description A quantity pack with its own product code, usually for trade supply only: the retail items it contains are intended for sale individually. ISBN (where applicable) and format of contained items must be given in <ProductPart>. For products or product bundles supplied individually shrink-wrapped for retail sale, use code SD
   * @default 'XL'
   */
  ShrinkWrappedPack = <any>'XL',

  /**
   * Boxed pack
   * @description A quantity pack with its own product code, usually for trade supply only: the retail items it contains are intended for sale individually. ISBN (where applicable) and format of contained items must be given in <ProductPart>. For products or product bundles boxed individually for retail sale, use code SB
   * @default 'XM'
   */
  BoxedPack = <any>'XM',

  /**
   * Pack (outer packaging unspecified)
   * @description A quantity pack with its own product code, usually for trade supply only: the retail items it contains are intended for sale individually. ISBN (where applicable) and format of contained items must be given in <ProductPart>. Use only when the pack is neither shrinp-wrapped nor boxed
   * @default 'XN'
   */
  Pack = <any>'XN',

  /**
   * Spinner – filled
   * @description Spinner with contents. ISBN(s) (where applicable) and detail of contained items must be given in <ProductPart>
   * @default 'XO'
   */
  SpinnerFilled = <any>'XO',

  /**
   * Other point of sale – including retail product
   * @description Other point of sale material not specified by XB to XO, supplied with included product(s) for retail sale. The retail product(s) must be described in <ProductPart>. Further detail of the POS material is expected in <ProductFormDescription>, as <ProductFormDetail> and <ProductFormFeature> are unlikely to be sufficient
   * @default 'XY'
   */
  OtherPointOfSaleIncludingRetailProduct = <any>'XY',

  /**
   * Other point of sale
   * @description Other point of sale material not specified by XB to XY, promotional or decorative. Further detail is expected in <ProductFormDescription>, as <ProductFormDetail> and <ProductFormFeature> are unlikely to be sufficient
   * @default 'XZ'
   */
  OtherPointOfSale = <any>'XZ',

  /**
   * General merchandise
   * @description General merchandise – unspecified
   * @default 'ZA'
   */
  GeneralMerchandise = <any>'ZA',

  /**
   * Doll or figure
   * @description Including action figures, figurines
   * @default 'ZB'
   */
  DollOrFigure = <any>'ZB',

  /**
   * Soft toy
   * @description Soft or plush toy
   * @default 'ZC'
   */
  SoftToy = <any>'ZC',

  /**
   * Toy
   * @description Including educational toys (where no other code is relevant)
   * @default 'ZD'
   */
  Toy = <any>'ZD',

  /**
   * Game
   * @description Board game, or other game (except computer game: see DE and other D* codes)
   * @default 'ZE'
   */
  Game = <any>'ZE',

  /**
   * T-shirt
   * @description
   * @default 'ZF'
   */
  TShirt = <any>'ZF',

  /**
   * E-book reader
   * @description Dedicated e-book reading device, typically with mono screen
   * @default 'ZG'
   */
  EBookReader = <any>'ZG',

  /**
   * Tablet computer
   * @description General purpose tablet computer, typically with color screen
   * @default 'ZH'
   */
  TabletComputer = <any>'ZH',

  /**
   * Audiobook player
   * @description Dedicated audiobook player device, typically including book-related features like bookmarking
   * @default 'ZI'
   */
  AudiobookPlayer = <any>'ZI',

  /**
   * Jigsaw
   * @description Jigsaw or similar ‘shapes’ puzzle
   * @default 'ZJ'
   */
  Jigsaw = <any>'ZJ',

  /**
   * Mug
   * @description For example, branded, promotional or tie-in drinking mug, cup etc
   * @default 'ZK'
   */
  Mug = <any>'ZK',

  /**
   * Tote bag
   * @description For example, branded, promotional or tie-in bag
   * @default 'ZL'
   */
  ToteBag = <any>'ZL',

  /**
   * Tableware
   * @description For example, branded, promotional or tie-in plates, bowls etc (note for mugs and cups, use code ZK)
   * @default 'ZM'
   */
  Tableware = <any>'ZM',

  /**
   * Umbrella
   * @description For example, branded, promotional or tie-in umbrella
   * @default 'ZN'
   */
  Umbrella = <any>'ZN',

  /**
   * Paints, crayons, pencils
   * @description Coloring set, including pens, chalks, etc
   * @default 'ZO'
   */
  PaintsCrayonsPencils = <any>'ZO',

  /**
   * Other toy/game accessories
   * @description Other toy, game and puzzle items not specified by ZB to ZN, generally accessories to other products etc. Further detail is expected in <ProductFormDescription>, as <ProductFormDetail> and <ProductFormFeature> are unlikely to be sufficient
   * @default 'ZX'
   */
  OtherToyGameAccessories = <any>'ZX',

  /**
   * Other apparel
   * @description Other apparel items not specified by ZB to ZN, including branded, promotional or tie-in scarves, caps, aprons, dress-up costumes etc. Further detail is expected in <ProductFormDescription>, as <ProductFormDetail> and <ProductFormFeature> are unlikely to be sufficient
   * @default 'ZY'
   */
  OtherApparel = <any>'ZY',

  /**
   * Other merchandise
   * @description Other merchandise not specified by ZB to ZY. Further detail is expected in <ProductFormDescription>, as <ProductFormDetail> and <ProductFormFeature> are unlikely to be sufficient
   * @default 'ZZ'
   */
  OtherMerchandise = <any>'ZZ',
}