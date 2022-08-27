// This code has been generated with a script

/**
 * Enum ProductFormDetail
 * @readonly
 * @enum { string }
 * @description List 175: Product form detail
 */
export enum ProductFormDetail {
  /**
   * CD standard audio format
   * @description CD ‘red book’ format
   * @default 'A101'
   */
  CdStandardAudioFormat = <any>'A101',

  /**
   * SACD super audio format
   * @description
   * @default 'A102'
   */
  SacdSuperAudioFormat = <any>'A102',

  /**
   * MP3 format
   * @description MPEG-1/2 Audio Layer III file
   * @default 'A103'
   */
  Mp3Format = <any>'A103',

  /**
   * WAV format
   * @description
   * @default 'A104'
   */
  WavFormat = <any>'A104',

  /**
   * Real Audio format
   * @description
   * @default 'A105'
   */
  RealAudioFormat = <any>'A105',

  /**
   * WMA
   * @description Windows Media Audio format
   * @default 'A106'
   */
  Wma = <any>'A106',

  /**
   * AAC
   * @description Advanced Audio Coding format
   * @default 'A107'
   */
  Aac = <any>'A107',

  /**
   * Ogg/Vorbis
   * @description Vorbis audio format in the Ogg container
   * @default 'A108'
   */
  OggVorbis = <any>'A108',

  /**
   * Audible
   * @description Audio format proprietary to Audible.com
   * @default 'A109'
   */
  Audible = <any>'A109',

  /**
   * FLAC
   * @description Free lossless audio codec
   * @default 'A110'
   */
  Flac = <any>'A110',

  /**
   * AIFF
   * @description Audio Interchangeable File Format
   * @default 'A111'
   */
  Aiff = <any>'A111',

  /**
   * ALAC
   * @description Apple Lossless Audio Codec
   * @default 'A112'
   */
  Alac = <any>'A112',

  /**
   * W3C Audiobook format
   * @description Audiobook package format
   * @default 'A113'
   */
  W3CAudiobookFormat = <any>'A113',

  /**
   * DAISY 2: full audio with title only (no navigation)
   * @description Deprecated, as does not meet DAISY 2 standard. Use conventional audiobook codes instead
   * @deprecated
   * @default 'A201'
   */
  Daisy_2FullAudioWithTitleOnly = <any>'A201',

  /**
   * DAISY 2: full audio with navigation (no text)
   * @description
   * @default 'A202'
   */
  Daisy_2FullAudioWithNavigation = <any>'A202',

  /**
   * DAISY 2: full audio with navigation and partial text
   * @description
   * @default 'A203'
   */
  Daisy_2FullAudioWithNavigationAndPartialText = <any>'A203',

  /**
   * DAISY 2: full audio with navigation and full text
   * @description
   * @default 'A204'
   */
  Daisy_2FullAudioWithNavigationAndFullText = <any>'A204',

  /**
   * DAISY 2: full text with navigation and partial audio
   * @description Reading systems may provide full audio via text-to-speech
   * @default 'A205'
   */
  Daisy_2FullTextWithNavigationAndPartialAudio = <any>'A205',

  /**
   * DAISY 2: full text with navigation and no audio
   * @description Reading systems may provide full audio via text-to-speech
   * @default 'A206'
   */
  Daisy_2FullTextWithNavigationAndNoAudio = <any>'A206',

  /**
   * DAISY 3: full audio with title only (no navigation)
   * @description Deprecated, as does not meet DAISY 3 standard. Use conventional audiobook codes instead
   * @deprecated
   * @default 'A207'
   */
  Daisy_3FullAudioWithTitleOnly = <any>'A207',

  /**
   * DAISY 3: full audio with navigation (no text)
   * @description
   * @default 'A208'
   */
  Daisy_3FullAudioWithNavigation = <any>'A208',

  /**
   * DAISY 3: full audio with navigation and partial text
   * @description
   * @default 'A209'
   */
  Daisy_3FullAudioWithNavigationAndPartialText = <any>'A209',

  /**
   * DAISY 3: full audio with navigation and full text
   * @description
   * @default 'A210'
   */
  Daisy_3FullAudioWithNavigationAndFullText = <any>'A210',

  /**
   * DAISY 3: full text with navigation and partial audio
   * @description Reading systems may provide full audio via text-to-speech
   * @default 'A211'
   */
  Daisy_3FullTextWithNavigationAndPartialAudio = <any>'A211',

  /**
   * DAISY 3: full text with navigation and no audio
   * @description Reading systems may provide full audio via text-to-speech
   * @default 'A212'
   */
  Daisy_3FullTextWithNavigationAndNoAudio = <any>'A212',

  /**
   * Standalone audio
   * @description
   * @default 'A301'
   */
  StandaloneAudio = <any>'A301',

  /**
   * Readalong audio
   * @description Audio intended exclusively for use alongside a printed copy of the book. Most often a children’s product. Normally contains instructions such as ‘turn the page now’ and other references to the printed item, and is usually sold packaged together with a printed copy
   * @default 'A302'
   */
  ReadalongAudio = <any>'A302',

  /**
   * Playalong audio
   * @description Audio intended for musical accompaniment, eg ‘Music minus one’, etc, often used for music learning. Includes singalong backing audio for musical learning or for Karaoke-style entertainment
   * @default 'A303'
   */
  PlayalongAudio = <any>'A303',

  /**
   * Speakalong audio
   * @description Audio intended for language learning, which includes speech plus gaps intended to be filled by the listener
   * @default 'A304'
   */
  SpeakalongAudio = <any>'A304',

  /**
   * Synchronised audio
   * @description Audio synchronised to text within an e-publication, for example an EPUB3 with audio overlay. Synchronisation at least at paragraph level, and covering the full content
   * @default 'A305'
   */
  SynchronisedAudio = <any>'A305',

  /**
   * Sound effects
   * @description Incidental sounds added to the audiobook narration (eg background environmental sounds)
   * @default 'A310'
   */
  SoundEffects = <any>'A310',

  /**
   * Background music
   * @description Incidental music added to the audiobook narration (eg to heighten atmosphere). Do not use where the music is a primary part of the audio
   * @default 'A311'
   */
  BackgroundMusic = <any>'A311',

  /**
   * 64kbits/s
   * @description Constant or average bit rate (eg of an mp3 or AAC audio file) 64kbits/second or more. Note the bit rate is the total across all channels, not a per channel rate
   * @default 'A400'
   */
  '64kbitsS' = <any>'A400',

  /**
   * 128kbits/s
   * @description Constant or average bit rate 128bbits/second or more
   * @default 'A401'
   */
  '128kbitsS' = <any>'A401',

  /**
   * 192kbits/s
   * @description
   * @default 'A402'
   */
  '192kbitsS' = <any>'A402',

  /**
   * 256kbits/s
   * @description
   * @default 'A403'
   */
  '256kbitsS' = <any>'A403',

  /**
   * 320kbits/s
   * @description
   * @default 'A404'
   */
  '320kbitsS' = <any>'A404',

  /**
   * Mono
   * @description Includes ‘stereo’ where channels are identical
   * @default 'A410'
   */
  Mono = <any>'A410',

  /**
   * Stereo
   * @description Includes ‘joint stereo’
   * @default 'A420'
   */
  Stereo = <any>'A420',

  /**
   * Stereo 2.1
   * @description Stereo plus low-frequency channel
   * @default 'A421'
   */
  Stereo_2_1 = <any>'A421',

  /**
   * Surround 4.1
   * @description Five-channel audio (including low-frequency channel)
   * @default 'A441'
   */
  Surround_4_1 = <any>'A441',

  /**
   * Surround 5.1
   * @description Six-channel audio (including low-frequency channel)
   * @default 'A451'
   */
  Surround_5_1 = <any>'A451',

  /**
   * Mass market (rack) paperback
   * @description In North America, a category of paperback characterized partly by page size (typically from 6¾ up to 7⅛ x 4¼ inches) and partly by target market and terms of trade. Use with Product Form code BC
   * @default 'B101'
   */
  MassMarketPaperback = <any>'B101',

  /**
   * Trade paperback (US)
   * @description In North America, a category of paperback characterized partly by page size (larger than rack-sized) and partly by target market and terms of trade. AKA ‘quality paperback’, and including textbooks. Most paperback books sold in North America except ‘mass-market’ (B101) and ‘tall rack’ (B107) are correctly described with this code. Use with Product Form code BC
   * @default 'B102'
   */
  TradePaperback = <any>'B102',

  /**
   * Trade paperback (UK)
   * @description In UK and IE, a category of paperback characterized largely by size (usually in traditional hardback dimensions), and often used for paperback originals or retailer/travel/export-exclusives; use with Product Form code BC
   * @default 'B106'
   */
  TradePaperback_1 = <any>'B106',

  /**
   * Digest format paperback
   * @description In North America, a category of paperback characterized by page size (typically 7 x 5 inches) and generally used for children’s books; use with Product Form code BC. Note: was wrongly shown as B102 (duplicate entry) in Issue 3
   * @default 'B103'
   */
  DigestFormatPaperback = <any>'B103',

  /**
   * A-format paperback
   * @description In UK and IE, a category of paperback characterized by page size (normally 178 x 111 mm approx); use with Product Form code BC
   * @default 'B104'
   */
  AFormatPaperback = <any>'B104',

  /**
   * B-format paperback
   * @description In UK and IE, a category of paperback characterized by page size (normally 198 x 129 mm approx); use with Product Form code BC
   * @default 'B105'
   */
  BFormatPaperback = <any>'B105',

  /**
   * Tall rack paperback (US)
   * @description In North America, a category of paperback characterised partly by page size (typically 7½ x 4¼ inches) and partly by target market and terms of trade; use with Product Form code BC
   * @default 'B107'
   */
  TallRackPaperback = <any>'B107',

  /**
   * A5 size Tankobon
   * @description Japanese A-series size, 210 x 148mm. A tankobon is a complete collected story originally published in serialised form (eg in a magazine)
   * @default 'B108'
   */
  A5SizeTankobon = <any>'B108',

  /**
   * JIS B5 size Tankobon
   * @description Japanese B-series size, 257 x 182mm
   * @default 'B109'
   */
  JisB5SizeTankobon = <any>'B109',

  /**
   * JIS B6 size Tankobon
   * @description Japanese B-series size, 182 x 128mm
   * @default 'B110'
   */
  JisB6SizeTankobon = <any>'B110',

  /**
   * A6 size Bunko
   * @description Japanese A-series size, 148 x 105mm
   * @default 'B111'
   */
  A6SizeBunko = <any>'B111',

  /**
   * B40-dori Shinsho
   * @description Japanese format, 182x103mm or 173x105mm
   * @default 'B112'
   */
  B40DoriShinsho = <any>'B112',

  /**
   * Pocket (Sweden, Norway, France)
   * @description A Swedish, Norwegian, French paperback format, of no particular fixed size. Use with Product Form Code BC
   * @default 'B113'
   */
  Pocket = <any>'B113',

  /**
   * Storpocket (Sweden)
   * @description A Swedish paperback format, use with Product Form Code BC. In Finnish, Jättipokkari
   * @default 'B114'
   */
  Storpocket = <any>'B114',

  /**
   * Kartonnage (Sweden)
   * @description A Swedish hardback format, use with Product Form Code BB
   * @default 'B115'
   */
  Kartonnage = <any>'B115',

  /**
   * Flexband (Sweden)
   * @description A Swedish softback format, use with Product Form Code BC
   * @default 'B116'
   */
  Flexband = <any>'B116',

  /**
   * Mook / Bookazine
   * @description A softback book in the format of a magazine, usually sold like a book. Use with Product Form code BC
   * @default 'B117'
   */
  MookBookazine = <any>'B117',

  /**
   * Dwarsligger
   * @description Also called ‘Flipback’. A softback book in a specially compact proprietary format with pages printed in landscape on very thin paper and bound along the long (top) edge (ie parallel with the lines of text). Use with Product Form code BC – see www.dwarsligger.com
   * @default 'B118'
   */
  Dwarsligger = <any>'B118',

  /**
   * 46 size
   * @description Japanese format, 188 x 127mm
   * @default 'B119'
   */
  '46Size' = <any>'B119',

  /**
   * 46-Henkei size
   * @description Japanese format, 188 x 127mm
   * @default 'B120'
   */
  '46HenkeiSize' = <any>'B120',

  /**
   * A4
   * @description 297 x 210mm
   * @default 'B121'
   */
  A4 = <any>'B121',

  /**
   * A4-Henkei size
   * @description Japanese format, 297 x 210mm
   * @default 'B122'
   */
  A4HenkeiSize = <any>'B122',

  /**
   * A5-Henkei size
   * @description Japanese format, 210 x 146mm
   * @default 'B123'
   */
  A5HenkeiSize = <any>'B123',

  /**
   * B5-Henkei size
   * @description Japanese format, 257 x 182mm
   * @default 'B124'
   */
  B5HenkeiSize = <any>'B124',

  /**
   * B6-Henkei size
   * @description Japanese format, 182 x 128mm
   * @default 'B125'
   */
  B6HenkeiSize = <any>'B125',

  /**
   * AB size
   * @description 257 x 210mm
   * @default 'B126'
   */
  AbSize = <any>'B126',

  /**
   * JIS B7 size
   * @description Japanese B-series size, 128 x 91mm
   * @default 'B127'
   */
  JisB7Size = <any>'B127',

  /**
   * Kiku size
   * @description Japanese format, 218 x 152mm or 227 x 152mm
   * @default 'B128'
   */
  KikuSize = <any>'B128',

  /**
   * Kiku-Henkei size
   * @description Japanese format
   * @default 'B129'
   */
  KikuHenkeiSize = <any>'B129',

  /**
   * JIS B4 size
   * @description Japanese B-series size, 364 x 257 mm
   * @default 'B130'
   */
  JisB4Size = <any>'B130',

  /**
   * Paperback (DE)
   * @description German large paperback format, greater than about 205mm high, with flaps. Use with Product form code BC
   * @default 'B131'
   */
  Paperback = <any>'B131',

  /**
   * Libro de bolsillo
   * @description Spanish pocket paperback. Use with Product form code BC
   * @default 'B132'
   */
  LibroDeBolsillo = <any>'B132',

  /**
   * Pocket-sized
   * @description German ,Taschenbuch‘, Italian «Tascabile / Supertascabile» pocket-sized format, usually less than about 205mm high. Use with Product form code BB or BC
   * @default 'B133'
   */
  PocketSized = <any>'B133',

  /**
   * A5
   * @description 210 x 148mm
   * @default 'B134'
   */
  A5 = <any>'B134',

  /**
   * Mass market max paperback
   * @description In North America, a category of paperback characterized partly by page size (typically 7⅛ x 4¾ inches) and partly by target market and terms of trade. Use with Product Form code BC
   * @default 'B135'
   */
  MassMarketMaxPaperback = <any>'B135',

  /**
   * Coloring / join-the-dot book
   * @description
   * @default 'B201'
   */
  ColoringJoinTheDotBook = <any>'B201',

  /**
   * Lift-the-flap book
   * @description
   * @default 'B202'
   */
  LiftTheFlapBook = <any>'B202',

  /**
   * Miniature book
   * @description Note: was wrongly shown as B203 (duplicate entry) in Issue 3
   * @default 'B204'
   */
  MiniatureBook = <any>'B204',

  /**
   * Moving picture / flicker book
   * @description
   * @default 'B205'
   */
  MovingPictureFlickerBook = <any>'B205',

  /**
   * Pop-up book
   * @description
   * @default 'B206'
   */
  PopUpBook = <any>'B206',

  /**
   * Scented / ‘smelly’ book
   * @description
   * @default 'B207'
   */
  ScentedSmellyBook = <any>'B207',

  /**
   * Sound story / ‘noisy’ book
   * @description
   * @default 'B208'
   */
  SoundStoryNoisyBook = <any>'B208',

  /**
   * Sticker book
   * @description
   * @default 'B209'
   */
  StickerBook = <any>'B209',

  /**
   * Touch-and-feel book
   * @description A book whose pages have a variety of textured inserts designed to stimulate tactile exploration: see also B214 and B215
   * @default 'B210'
   */
  TouchAndFeelBook = <any>'B210',

  /**
   * Die-cut book
   * @description A book which is cut into a distinctive non-rectilinear shape and/or in which holes or shapes have been cut internally. (‘Die-cut’ is used here as a convenient shorthand, and does not imply strict limitation to a particular production process)
   * @default 'B212'
   */
  DieCutBook = <any>'B212',

  /**
   * Book-as-toy
   * @description A book which is also a toy, or which incorporates a toy as an integral part. (Do not, however, use B213 for a multiple-item product which includes a book and a toy as separate items)
   * @default 'B213'
   */
  BookAsToy = <any>'B213',

  /**
   * Soft-to-touch book
   * @description A book whose cover has a soft textured finish, typically over board
   * @default 'B214'
   */
  SoftToTouchBook = <any>'B214',

  /**
   * Fuzzy-felt book
   * @description A book with detachable felt pieces and textured pages on which they can be arranged
   * @default 'B215'
   */
  FuzzyFeltBook = <any>'B215',

  /**
   * Press-out puzzle pieces
   * @description A book containing pages with die-cut or press-out pieces that can be used as a jigsaw, puzzle pieces, etc
   * @default 'B216'
   */
  PressOutPuzzlePieces = <any>'B216',

  /**
   * Picture book
   * @description Children’s picture book: use with applicable Product Form code
   * @default 'B221'
   */
  PictureBook = <any>'B221',

  /**
   * ‘Carousel’ book
   * @description (aka ‘Star’ book). Tax treatment of products may differ from that of products with similar codes such as Book as toy or Pop-up book)
   * @default 'B222'
   */
  CarouselBook = <any>'B222',

  /**
   * Pull-the-tab book
   * @description A book with movable card ‘tabs’ within the pages. Pull a tab to reveal or animate part of a picture (distinct from a ‘lift-the-flap’ book, where flaps simply reveal hidden pictures, and not a ‘pop-up’ book with 3D paper engineering)
   * @default 'B223'
   */
  PullTheTabBook = <any>'B223',

  /**
   * Loose leaf or partwork – sheets / parts and binder / wallet
   * @description Use with Product Form code BD, BN or PM
   * @default 'B301'
   */
  LooseLeafOrPartworkSheetsPartsAndBinderWallet = <any>'B301',

  /**
   * Loose leaf or partwork – binder / wallet only
   * @description Use with Product Form code BD, BN or PM
   * @default 'B302'
   */
  LooseLeafOrPartworkBinderWalletOnly = <any>'B302',

  /**
   * Loose leaf or partwork – sheets / parts only
   * @description Use with Product Form code BD, BN or PM
   * @default 'B303'
   */
  LooseLeafOrPartworkSheetsPartsOnly = <any>'B303',

  /**
   * Sewn
   * @description AKA stitched; for ‘saddle-sewn’, see code B310
   * @default 'B304'
   */
  Sewn = <any>'B304',

  /**
   * Unsewn / adhesive bound
   * @description Including ‘perfect bound’, ‘glued’
   * @default 'B305'
   */
  UnsewnAdhesiveBound = <any>'B305',

  /**
   * Library binding
   * @description Strengthened cloth-over-boards binding intended for libraries: use with Product form code BB
   * @default 'B306'
   */
  LibraryBinding = <any>'B306',

  /**
   * Reinforced binding
   * @description Strengthened binding, not specifically intended for libraries: use with Product form code BB or BC
   * @default 'B307'
   */
  ReinforcedBinding = <any>'B307',

  /**
   * Half bound
   * @description Highest qualiy material used on spine and corners only. Must be accompanied by a code specifiying a material, eg ‘half-bound real leather’
   * @default 'B308'
   */
  HalfBound = <any>'B308',

  /**
   * Quarter bound
   * @description Highest qualiy material used on spine only. Must be accompanied by a code specifiying a material, eg ‘quarter bound real leather’
   * @default 'B309'
   */
  QuarterBound = <any>'B309',

  /**
   * Saddle-sewn
   * @description AKA ‘saddle-stitched’ or ‘wire-stitched’
   * @default 'B310'
   */
  SaddleSewn = <any>'B310',

  /**
   * Comb bound
   * @description Round or oval plastic forms in a clamp-like configuration: use with Product Form code BE
   * @default 'B311'
   */
  CombBound = <any>'B311',

  /**
   * Wire-O
   * @description Twin loop metal wire spine: use with Product Form code BE
   * @default 'B312'
   */
  WireO = <any>'B312',

  /**
   * Concealed wire
   * @description Cased over Coiled or Wire-O binding: use with Product Form code BE and Product Form Detail code B312 or B314
   * @default 'B313'
   */
  ConcealedWire = <any>'B313',

  /**
   * Coiled wire bound
   * @description Spiral wire bound. Use with product form code BE. The default if a spiral binding type is not stated. Cf. Comb and Wire-O binding
   * @default 'B314'
   */
  CoiledWireBound = <any>'B314',

  /**
   * Trade binding
   * @description Hardcover binding intended for general consumers rather than libraries, use with Product form code BB. The default if a hardcover binding detail is not stated. cf. Library binding
   * @default 'B315'
   */
  TradeBinding = <any>'B315',

  /**
   * Swiss binding
   * @description Cover is attached to the book block along only one edge of the spine, allowing the cover to lay flat
   * @default 'B316'
   */
  SwissBinding = <any>'B316',

  /**
   * Notched binding
   * @description Refinement of perfect binding, with notches cut in the spine of the book block prior to glueing, to improve adhesion and durability
   * @default 'B317'
   */
  NotchedBinding = <any>'B317',

  /**
   * Lay-flat binding
   * @description Hardcover or softcover where interior spreads lay flat across the spine
   * @default 'B318'
   */
  LayFlatBinding = <any>'B318',

  /**
   * Self-covered
   * @description Covers do not use a distinctive stock, but are the same as the body pages
   * @default 'B400'
   */
  SelfCovered = <any>'B400',

  /**
   * Cloth over boards
   * @description Cotton, linen or other woven fabric over boards. Use with <ProductForm> BB
   * @default 'B401'
   */
  ClothOverBoards = <any>'B401',

  /**
   * Paper over boards
   * @description Cellulose-based or similar non-woven material, which may be printed and may be embossed with an artificial cloth or leather-like texture, over boards. Use with <ProductForm> BB
   * @default 'B402'
   */
  PaperOverBoards = <any>'B402',

  /**
   * Leather, real
   * @description Covered with leather created by tanning animal hide. May be ‘full-grain’ using the entire thickness of the hide, ‘top grain’ using the outer layer of the hide, or ‘split’ using the inner layers of the hide. Split leather may be embossed with an artificial grain or texture. Use with <ProductForm> BG, and if appropriate with codes B308 or B309 (otherwise ‘full-bound’ is implied)
   * @default 'B403'
   */
  LeatherReal = <any>'B403',

  /**
   * Leather, imitation
   * @description Covered with synthetic leather-like material – polymer or non-animal fibre over a textile backing, usually coated and embossed with an artificial grain or texture. Leatherette, pleather etc. Use with <ProductForm> BB (or BG if particularly high-quality), and if appropriate with codes B308 or B309 (otherwise ‘full-bound’ is implied)
   * @default 'B404'
   */
  LeatherImitation = <any>'B404',

  /**
   * Leather, bonded
   * @description Covered with leather reconstituted from a pulp made from shredded animal hide, layered on a fibre or textile backing, coated and usually embossed with an artificial grain or texture. Use with <ProductForm> BG, and if appropriate with codes B308 or B309 (otherwise ‘full-bound’ is implied)
   * @default 'B405'
   */
  LeatherBonded = <any>'B405',

  /**
   * Vellum
   * @description Pages made with prepared but untanned animal skin (usually calf, occasionally goat or sheep). Includes parchment, a thicker and less refined form of animal skin, but not ‘paper vellum’ or vegetable parchment made from synthetic or plant fibres
   * @default 'B406'
   */
  Vellum = <any>'B406',

  /**
   * Cloth
   * @description Cloth, not necessarily over boards – cf B401
   * @default 'B409'
   */
  Cloth = <any>'B409',

  /**
   * Imitation cloth
   * @description Spanish ‘simil-tela’
   * @default 'B410'
   */
  ImitationCloth = <any>'B410',

  /**
   * Velvet
   * @description
   * @default 'B411'
   */
  Velvet = <any>'B411',

  /**
   * Flexible plastic/vinyl cover
   * @description AKA ‘flexibound’: use with Product Form code BC
   * @default 'B412'
   */
  FlexiblePlasticVinylCover = <any>'B412',

  /**
   * Plastic-covered
   * @description Separate outer plastic cover, often transparent and allowing the cover to show through. Typically has pockets into which the cover tucks. See also B412, where the cover itself is plastic or vinyl
   * @default 'B413'
   */
  PlasticCovered = <any>'B413',

  /**
   * Vinyl-covered
   * @description Separate outer vinyl cover. See also B412, where the cover itself is plastic or vinyl
   * @default 'B414'
   */
  VinylCovered = <any>'B414',

  /**
   * Laminated cover
   * @description Book, laminating material unspecified, often termed PLC or PPC (printed laminated case, printed paper case) when used with Product form BB. Use L101 for ‘whole product laminated’, eg a laminated sheet map or wallchart
   * @default 'B415'
   */
  LaminatedCover = <any>'B415',

  /**
   * Card cover
   * @description With card cover (like a typical paperback). As distinct from a self-cover or more elaborate binding
   * @default 'B416'
   */
  CardCover = <any>'B416',

  /**
   * Duplex-printed cover
   * @description Printed both inside and outside the front and/or back cover
   * @default 'B417'
   */
  DuplexPrintedCover = <any>'B417',

  /**
   * Delicate cover / jacket finish
   * @description Cover or jacket finish may merit special handling or packaging during distribution and fulfilment, for example because of gloss varnish which may hold fingerprints or matt laminate liable to scuffing
   * @default 'B420'
   */
  DelicateCoverJacketFinish = <any>'B420',

  /**
   * With dust jacket
   * @description Type unspecified
   * @default 'B501'
   */
  WithDustJacket = <any>'B501',

  /**
   * With printed dust jacket
   * @description Used to distinguish from B503
   * @default 'B502'
   */
  WithPrintedDustJacket = <any>'B502',

  /**
   * With translucent dust cover
   * @description With translucent paper or plastic protective cover
   * @default 'B503'
   */
  WithTranslucentDustCover = <any>'B503',

  /**
   * With flaps
   * @description For paperback with flaps
   * @default 'B504'
   */
  WithFlaps = <any>'B504',

  /**
   * With thumb index
   * @description
   * @default 'B505'
   */
  WithThumbIndex = <any>'B505',

  /**
   * With ribbon marker(s)
   * @description If the number of markers is significant, it can be stated as free text in <ProductFormDescription>
   * @default 'B506'
   */
  WithRibbonMarker = <any>'B506',

  /**
   * With zip fastener
   * @description
   * @default 'B507'
   */
  WithZipFastener = <any>'B507',

  /**
   * With button snap fastener
   * @description
   * @default 'B508'
   */
  WithButtonSnapFastener = <any>'B508',

  /**
   * With leather edge lining
   * @description AKA yapp edge?
   * @default 'B509'
   */
  WithLeatherEdgeLining = <any>'B509',

  /**
   * Rough front
   * @description With edge trimming such that the front edge is ragged, not neatly and squarely trimmed: AKA deckle edge, feather edge, uncut edge, rough cut
   * @default 'B510'
   */
  RoughFront = <any>'B510',

  /**
   * Foldout
   * @description With one or more gatefold or foldout sections bound in
   * @default 'B511'
   */
  Foldout = <any>'B511',

  /**
   * Wide margin
   * @description Pages include extra-wide margin specifically intended for hand-written annotations
   * @default 'B512'
   */
  WideMargin = <any>'B512',

  /**
   * With fastening strap
   * @description Book with attached loop for fixing to baby stroller, cot, chair etc
   * @default 'B513'
   */
  WithFasteningStrap = <any>'B513',

  /**
   * With perforated pages
   * @description With one or more pages perforated and intended to be torn out for use
   * @default 'B514'
   */
  WithPerforatedPages = <any>'B514',

  /**
   * Acid-free paper
   * @description Printed on acid-free or alkaline buffered paper conforming with ISO 9706
   * @default 'B515'
   */
  AcidFreePaper = <any>'B515',

  /**
   * Archival paper
   * @description Printed on acid-free or alkaline buffered paper with a high cotton content, conforming with ISO 11108
   * @default 'B516'
   */
  ArchivalPaper = <any>'B516',

  /**
   * With elasticated strap
   * @description Strap acts as closure or as page marker
   * @default 'B517'
   */
  WithElasticatedStrap = <any>'B517',

  /**
   * With serialized authenticity token
   * @description For example, holographic sticker such as the banderol used in the Turkish book trade
   * @default 'B518'
   */
  WithSerializedAuthenticityToken = <any>'B518',

  /**
   * With dust jacket poster
   * @description Jacket in the form of a pamphlet or poster, specifically intended to be removed and read or used separately from the book
   * @default 'B519'
   */
  WithDustJacketPoster = <any>'B519',

  /**
   * Rounded corners
   * @description Usually die-cut rounding to foredge corners of cover (and/or to foredge page corners). See B212 for elaborate die-cutting
   * @default 'B520'
   */
  RoundedCorners = <any>'B520',

  /**
   * Turn-around book
   * @description A book in which half the content is printed upside-down, to be read the other way round. Also known as a ‘flip-book’ or ‘tête-bêche’ (Fr) binding, it has two front covers and a single spine. Usually an omnibus of two works
   * @default 'B601'
   */
  TurnAroundBook = <any>'B601',

  /**
   * Unflipped manga format
   * @description Manga with pages and panels in the sequence of the original Japanese, but with Western text
   * @default 'B602'
   */
  UnflippedMangaFormat = <any>'B602',

  /**
   * Back-to-back book
   * @description A book in which half the content is printed so as to be read from the other cover. All content is printed the same way up. Also known as ‘dos-à-dos’ (Fr) binding, it has two front covers and two spines. Usually an omnibus of two works
   * @default 'B603'
   */
  BackToBackBook = <any>'B603',

  /**
   * Syllabification
   * @description Text shows syllable breaks
   * @default 'B610'
   */
  Syllabification = <any>'B610',

  /**
   * UK Uncontracted Braille
   * @description Single letters only. Was formerly identified as UK Braille Grade 1
   * @default 'B701'
   */
  UkUncontractedBraille = <any>'B701',

  /**
   * UK Contracted Braille
   * @description With some letter combinations. Was formerly identified as UK Braille Grade 2
   * @default 'B702'
   */
  UkContractedBraille = <any>'B702',

  /**
   * US Braille
   * @description For US Braille, prefer codes B704 and B705 as appropriate
   * @default 'B703'
   */
  UsBraille = <any>'B703',

  /**
   * US Uncontracted Braille
   * @description
   * @default 'B704'
   */
  UsUncontractedBraille = <any>'B704',

  /**
   * US Contracted Braille
   * @description
   * @default 'B705'
   */
  UsContractedBraille = <any>'B705',

  /**
   * Unified English Braille
   * @description For UEB, prefer codes B708 and B709 as appropriate
   * @default 'B706'
   */
  UnifiedEnglishBraille = <any>'B706',

  /**
   * Moon
   * @description Moon embossed alphabet, used by some print-impaired readers who have difficulties with Braille
   * @default 'B707'
   */
  Moon = <any>'B707',

  /**
   * Unified English Uncontracted Braille
   * @description
   * @default 'B708'
   */
  UnifiedEnglishUncontractedBraille = <any>'B708',

  /**
   * Unified English Contracted Braille
   * @description
   * @default 'B709'
   */
  UnifiedEnglishContractedBraille = <any>'B709',

  /**
   * Real Video format
   * @description Proprietary RealNetworks format. Includes Real Video packaged within a .rm RealMedia container
   * @default 'D101'
   */
  RealVideoFormat = <any>'D101',

  /**
   * Quicktime format
   * @description
   * @default 'D102'
   */
  QuicktimeFormat = <any>'D102',

  /**
   * AVI format
   * @description
   * @default 'D103'
   */
  AviFormat = <any>'D103',

  /**
   * Windows Media Video format
   * @description
   * @default 'D104'
   */
  WindowsMediaVideoFormat = <any>'D104',

  /**
   * MPEG-4
   * @description
   * @default 'D105'
   */
  Mpeg_4 = <any>'D105',

  /**
   * MS-DOS
   * @description Use with an applicable Product Form code D*; note that more detail of operating system requirements can be given in a Product Form Feature composite
   * @default 'D201'
   */
  MsDos = <any>'D201',

  /**
   * Windows
   * @description Use with an applicable Product Form code D*; see note on D201
   * @default 'D202'
   */
  Windows = <any>'D202',

  /**
   * Macintosh
   * @description Use with an applicable Product Form code D*; see note on D201
   * @default 'D203'
   */
  Macintosh = <any>'D203',

  /**
   * UNIX / LINUX
   * @description Use with an applicable Product Form code D*; see note on D201
   * @default 'D204'
   */
  UnixLinux = <any>'D204',

  /**
   * Other operating system(s)
   * @description Use with an applicable Product Form code D*; see note on D201
   * @default 'D205'
   */
  OtherOperatingSystem = <any>'D205',

  /**
   * Palm OS
   * @description Use with an applicable Product Form code D*; see note on D201
   * @default 'D206'
   */
  PalmOs = <any>'D206',

  /**
   * Windows Mobile
   * @description Use with an applicable Product Form code D*; see note on D201
   * @default 'D207'
   */
  WindowsMobile = <any>'D207',

  /**
   * Microsoft XBox
   * @description Use with Product Form code DB or DI as applicable
   * @default 'D301'
   */
  MicrosoftXBox = <any>'D301',

  /**
   * Nintendo Gameboy Color
   * @description Use with Product Form code DE or DB as applicable
   * @default 'D302'
   */
  NintendoGameboyColor = <any>'D302',

  /**
   * Nintendo Gameboy Advanced
   * @description Use with Product Form code DE or DB as applicable
   * @default 'D303'
   */
  NintendoGameboyAdvanced = <any>'D303',

  /**
   * Nintendo Gameboy
   * @description Use with Product Form code DE or DB as applicable
   * @default 'D304'
   */
  NintendoGameboy = <any>'D304',

  /**
   * Nintendo Gamecube
   * @description Use with Product Form code DE or DB as applicable
   * @default 'D305'
   */
  NintendoGamecube = <any>'D305',

  /**
   * Nintendo 64
   * @description Use with Product Form code DE or DB as applicable
   * @default 'D306'
   */
  Nintendo_64 = <any>'D306',

  /**
   * Sega Dreamcast
   * @description Use with Product Form code DE or DB as applicable
   * @default 'D307'
   */
  SegaDreamcast = <any>'D307',

  /**
   * Sega Genesis/Megadrive
   * @description Use with Product Form code DE or DB as applicable
   * @default 'D308'
   */
  SegaGenesisMegadrive = <any>'D308',

  /**
   * Sega Saturn
   * @description Use with Product Form code DE or DB as applicable
   * @default 'D309'
   */
  SegaSaturn = <any>'D309',

  /**
   * Sony PlayStation 1
   * @description Use with Product Form code DB as applicable
   * @default 'D310'
   */
  SonyPlayStation_1 = <any>'D310',

  /**
   * Sony PlayStation 2
   * @description Use with Product Form code DB or DI as applicable
   * @default 'D311'
   */
  SonyPlayStation_2 = <any>'D311',

  /**
   * Nintendo Dual Screen
   * @description Use with Product Form code DE as applicable
   * @default 'D312'
   */
  NintendoDualScreen = <any>'D312',

  /**
   * Sony PlayStation 3
   * @description Use with Product Form code DB, DI, DO or E* as applicable
   * @default 'D313'
   */
  SonyPlayStation_3 = <any>'D313',

  /**
   * Sony PlayStation 3
   * @description Use with Product Form code DB, DI, DO or E* as applicable. DEPRECATED
   * @deprecated
   * @default 'D317'
   */
  SonyPlayStation_3_deprecated = <any>'D317',

  /**
   * Microsoft Xbox 360
   * @description Use with Product Form code DB, DI or VN as applicable
   * @default 'D314'
   */
  MicrosoftXbox_360 = <any>'D314',

  /**
   * Nintendo Wii
   * @description Use with Product Form code DA or E* as applicable
   * @default 'D315'
   */
  NintendoWii = <any>'D315',

  /**
   * Sony PlayStation Portable (PSP)
   * @description Use with Product Form code DL or VL as applicable
   * @default 'D316'
   */
  SonyPlayStationPortable = <any>'D316',

  /**
   * Sony PlayStation 4
   * @description Use with Product Form code DB, DI, DO or E* as applicable
   * @default 'D318'
   */
  SonyPlayStation_4 = <any>'D318',

  /**
   * Sony PlayStation Vita
   * @description Use with Product Form code DA or E* as applicable
   * @default 'D319'
   */
  SonyPlayStationVita = <any>'D319',

  /**
   * Microsoft Xbox One
   * @description Use with Product Form code DB, DI, DO or E* as applicable
   * @default 'D320'
   */
  MicrosoftXboxOne = <any>'D320',

  /**
   * Nintendo Switch
   * @description Use with Product Form code DE or DB as applicable
   * @default 'D321'
   */
  NintendoSwitch = <any>'D321',

  /**
   * Nintendo Wii U
   * @description Use with Product Form code DE or DB as applicable
   * @default 'D322'
   */
  NintendoWiiU = <any>'D322',

  /**
   * Sony PlayStation 5
   * @description Use with Product Form code DB, DI, DO or E* as applicable
   * @default 'D323'
   */
  SonyPlayStation_5 = <any>'D323',

  /**
   * Microsoft Xbox Series X / S
   * @description Use with Product Form code DB, DI, DO or E* as applicable
   * @default 'D324'
   */
  MicrosoftXboxSeriesXS = <any>'D324',

  /**
   * Other
   * @description No code allocated for this e-publication format yet
   * @default 'E100'
   */
  Other = <any>'E100',

  /**
   * EPUB
   * @description The Open Publication Structure / OPS Container Format standard of the International Digital Publishing Forum (IDPF) [File extension .epub]
   * @default 'E101'
   */
  Epub = <any>'E101',

  /**
   * OEB
   * @description The Open EBook format of the IDPF, a predecessor of the full EPUB format, still (2008) supported as part of the latter [File extension .opf]. Includes EPUB format up to and including version 2 – but prefer code E101 for EPUB 2, and always use code E101 for EPUB 3
   * @default 'E102'
   */
  Oeb = <any>'E102',

  /**
   * DOC
   * @description Microsoft Word binary document format [File extension .doc]
   * @default 'E103'
   */
  Doc = <any>'E103',

  /**
   * DOCX
   * @description Office Open XML / Microsoft Word XML document format (ISO/IEC 29500:2008) [File extension .docx]
   * @default 'E104'
   */
  Docx = <any>'E104',

  /**
   * HTML
   * @description HyperText Mark-up Language [File extension .html, .htm]
   * @default 'E105'
   */
  Html = <any>'E105',

  /**
   * ODF
   * @description Open Document Format [File extension .odt]
   * @default 'E106'
   */
  Odf = <any>'E106',

  /**
   * PDF
   * @description Portable Document Format (ISO 32000-1:2008) [File extension .pdf]
   * @default 'E107'
   */
  Pdf = <any>'E107',

  /**
   * PDF/A
   * @description PDF archiving format defined by ISO 19005-1:2005 [File extension .pdf]
   * @default 'E108'
   */
  PdfA = <any>'E108',

  /**
   * RTF
   * @description Rich Text Format [File extension .rtf]
   * @default 'E109'
   */
  Rtf = <any>'E109',

  /**
   * SGML
   * @description Standard Generalized Mark-up Language
   * @default 'E110'
   */
  Sgml = <any>'E110',

  /**
   * TCR
   * @description A compressed text format mainly used on Psion handheld devices [File extension .tcr]
   * @default 'E111'
   */
  Tcr = <any>'E111',

  /**
   * TXT
   * @description Text file format [File extension .txt]. Typically ASCII or Unicode UTF-8/16
   * @default 'E112'
   */
  Txt = <any>'E112',

  /**
   * XHTML
   * @description Extensible Hypertext Markup Language [File extension .xhtml, .xht, .xml, .html, .htm]
   * @default 'E113'
   */
  Xhtml = <any>'E113',

  /**
   * zTXT
   * @description A compressed text format mainly used on Palm handheld devices [File extension .pdb – see also E121, E125, E130]
   * @default 'E114'
   */
  ZTxt = <any>'E114',

  /**
   * XPS
   * @description XML Paper Specification format [File extension .xps]
   * @default 'E115'
   */
  Xps = <any>'E115',

  /**
   * Amazon Kindle
   * @description A format proprietary to Amazon for use with its Kindle reading devices or software readers [File extensions .azw, .mobi, .prc etc]. Prefer code E148 for Print Replica files
   * @default 'E116'
   */
  AmazonKindle = <any>'E116',

  /**
   * BBeB
   * @description A Sony proprietary format for use with the Sony Reader and LIBRIé reading devices [File extension .lrf]
   * @default 'E117'
   */
  BBeB = <any>'E117',

  /**
   * DXReader
   * @description A proprietary format for use with DXReader software
   * @default 'E118'
   */
  DxReader = <any>'E118',

  /**
   * EBL
   * @description A format proprietary to the Ebook Library service
   * @default 'E119'
   */
  Ebl = <any>'E119',

  /**
   * Ebrary
   * @description A format proprietary to the Ebrary service
   * @default 'E120'
   */
  Ebrary = <any>'E120',

  /**
   * eReader
   * @description A proprietary format for use with eReader (AKA ‘Palm Reader’) software on various hardware platforms [File extension .pdb – see also E114, E125, E130]
   * @default 'E121'
   */
  EReader = <any>'E121',

  /**
   * Exebook
   * @description A proprietary format with its own reading system for Windows platforms [File extension .exe]
   * @default 'E122'
   */
  Exebook = <any>'E122',

  /**
   * Franklin eBookman
   * @description A proprietary format for use with the Franklin eBookman reader
   * @default 'E123'
   */
  FranklinEBookman = <any>'E123',

  /**
   * Gemstar Rocketbook
   * @description A proprietary format for use with the Gemstar Rocketbook reader [File extension .rb]
   * @default 'E124'
   */
  GemstarRocketbook = <any>'E124',

  /**
   * iSilo
   * @description A proprietary format for use with iSilo software on various hardware platforms [File extension .pdb – see also E114, E121, E130]
   * @default 'E125'
   */
  ISilo = <any>'E125',

  /**
   * Microsoft Reader
   * @description A proprietary format for use with Microsoft Reader software on Windows and Pocket PC platforms [File extension .lit]
   * @default 'E126'
   */
  MicrosoftReader = <any>'E126',

  /**
   * Mobipocket
   * @description A proprietary format for use with Mobipocket software on various hardware platforms [File extensions .mobi, .prc]. Includes Amazon Kindle formats up to and including version 7 – but prefer code E116 for version 7, and always use E116 for KF8
   * @default 'E127'
   */
  Mobipocket = <any>'E127',

  /**
   * MyiLibrary
   * @description A format proprietary to the MyiLibrary service
   * @default 'E128'
   */
  MyiLibrary = <any>'E128',

  /**
   * NetLibrary
   * @description A format proprietary to the NetLibrary service
   * @default 'E129'
   */
  NetLibrary = <any>'E129',

  /**
   * Plucker
   * @description A proprietary format for use with Plucker reader software on Palm and other handheld devices [File extension .pdb – see also E114, E121, E125]
   * @default 'E130'
   */
  Plucker = <any>'E130',

  /**
   * VitalBook
   * @description A format proprietary to the VitalSource service
   * @default 'E131'
   */
  VitalBook = <any>'E131',

  /**
   * Vook
   * @description A proprietary digital product combining text and video content and available to be used online or as a downloadable application for a mobile device – see www.vook.com
   * @default 'E132'
   */
  Vook = <any>'E132',

  /**
   * Google Edition
   * @description An epublication made available by Google in association with a publisher; readable online on a browser-enabled device and offline on designated ebook readers
   * @default 'E133'
   */
  GoogleEdition = <any>'E133',

  /**
   * Book ‘app’ for iOS
   * @description Epublication packaged as application for iOS (eg Apple iPhone, iPad etc), containing both executable code and content. Use <ProductContentType> to describe content, and <ProductFormFeatureType> to list detailed technical requirements
   * @default 'E134'
   */
  BookAppForIOs = <any>'E134',

  /**
   * Book ‘app’ for Android
   * @description Epublication packaged as application for Android (eg Android phone or tablet), containing both executable code and content. Use <ProductContentType> to describe content, and <ProductFormFeatureType> to list detailed technical requirements
   * @default 'E135'
   */
  BookAppForAndroid = <any>'E135',

  /**
   * Book ‘app’ for other operating system
   * @description Epublication packaged as application, containing both executable code and content. Use where other ‘app’ codes are not applicable. Technical requirements such as target operating system and/or device should be provided eg in <ProductFormFeatureType>. Content type (text or text plus various ‘enhancements’) may be described with <ProductContentType>
   * @default 'E136'
   */
  BookAppForOtherOperatingSystem = <any>'E136',

  /**
   * CEB
   * @description Founder Apabi’s proprietary basic e-book format
   * @default 'E139'
   */
  Ceb = <any>'E139',

  /**
   * CEBX
   * @description Founder Apabi’s proprietary XML e-book format
   * @default 'E140'
   */
  Cebx = <any>'E140',

  /**
   * iBook
   * @description Apple’s iBook format (a proprietary extension of EPUB), can only be read on Apple iOS devices
   * @default 'E141'
   */
  IBook = <any>'E141',

  /**
   * ePIB
   * @description Proprietary format based on EPUB used by Barnes and Noble for fixed-format e-books, readable on NOOK devices and Nook reader software
   * @default 'E142'
   */
  EPib = <any>'E142',

  /**
   * SCORM
   * @description Sharable Content Object Reference Model, standard content and packaging format for e-learning objects
   * @default 'E143'
   */
  Scorm = <any>'E143',

  /**
   * EBP
   * @description E-book Plus (proprietary Norwegian e-book format)
   * @default 'E144'
   */
  Ebp = <any>'E144',

  /**
   * Page Perfect
   * @description Proprietary format based on PDF used by Barnes and Noble for fixed-format e-books, readable on some NOOK devices and Nook reader software
   * @default 'E145'
   */
  PagePerfect = <any>'E145',

  /**
   * BRF
   * @description (Braille-ready file) Electronic Braille file
   * @default 'E146'
   */
  Brf = <any>'E146',

  /**
   * Erudit
   * @description Proprietary XML format for articles, see for example https://www.cairn.info/services-aux-editeurs.php
   * @default 'E147'
   */
  Erudit = <any>'E147',

  /**
   * Amazon Kindle Print Replica
   * @description A format proprietary to Amazon for use with its Kindle reading devices or software readers. Essentially a PDF embedded within a KF8 format file
   * @default 'E148'
   */
  AmazonKindlePrintReplica = <any>'E148',

  /**
   * Comic Book Archive
   * @description Format for comic books, consisting primarily of sequentially-named PNG or JPEG images in a zip container
   * @default 'E149'
   */
  ComicBookArchive = <any>'E149',

  /**
   * Reflowable
   * @description Use this and/or code E201 when a particular e-publication type (specified using codes E100 and upwards) has both fixed format and reflowable variants, to indicate which option is included in this product
   * @default 'E200'
   */
  Reflowable = <any>'E200',

  /**
   * Fixed format
   * @description Use this and/or code E200 when a particular e-publication type (specified using codes E100 and upwards) has both fixed format and reflowable variants, to indicate which option is included in this product
   * @default 'E201'
   */
  FixedFormat = <any>'E201',

  /**
   * Readable offline
   * @description All e-publication resources are included within the e-publication package
   * @default 'E202'
   */
  ReadableOffline = <any>'E202',

  /**
   * Requires network connection
   * @description E-publication requires a network connection to access some resources (eg an enhanced e-book where video clips are not stored within the e-publication package itself, but are delivered via an internet connection)
   * @default 'E203'
   */
  RequiresNetworkConnection = <any>'E203',

  /**
   * Content removed
   * @description Resources (eg images) present in other editions have been removed from this product, eg due to rights issues
   * @default 'E204'
   */
  ContentRemoved = <any>'E204',

  /**
   * Landscape
   * @description Use for fixed-format e-books optimised for landscape display. Also include an indication of the optimal screen aspect ratio
   * @default 'E210'
   */
  Landscape = <any>'E210',

  /**
   * Portrait
   * @description Use for fixed-format e-books optimised for portrait display. Also include an indication of the optimal screen aspect ratio
   * @default 'E211'
   */
  Portrait = <any>'E211',

  /**
   * Square
   * @description Use for fixed-format e-books optimised for a square display.
   * @default 'E212'
   */
  Square = <any>'E212',

  /**
   * 5:4
   * @description (1.25:1) Use for fixed-format e-books optimised for displays with a 5:4 aspect ratio (eg 1280x1024 pixels etc, assuming square pixels). Note that aspect ratio codes are NOT specific to actual screen dimensions or pixel counts, but to the ratios between two dimensions or two pixel counts
   * @default 'E221'
   */
  '5_4' = <any>'E221',

  /**
   * 4:3
   * @description (1.33:1) Use for fixed-format e-books optimised for displays with a 4:3 aspect ratio (eg 800x600, 1024x768, 2048x1536 pixels etc)
   * @default 'E222'
   */
  '4_3' = <any>'E222',

  /**
   * 3:2
   * @description (1.5:1) Use for fixed-format e-books optimised for displays with a 3:2 aspect ratio (eg 960x640, 3072x2048 pixels etc)
   * @default 'E223'
   */
  '3_2' = <any>'E223',

  /**
   * 16:10
   * @description (1.6:1) Use for fixed-format e-books optimised for displays with a 16:10 aspect ratio (eg 1440x900, 2560x1600 pixels etc)
   * @default 'E224'
   */
  '16_10' = <any>'E224',

  /**
   * 16:9
   * @description (1.77:1) Use for fixed-format e-books optimised for displays with a 16:9 aspect ratio (eg 1024x576, 1920x1080, 2048x1152 pixels etc)
   * @default 'E225'
   */
  '16_9' = <any>'E225',

  /**
   * 18:9
   * @description (2:1) Use for fixed-format e-books optimised for displays with an 18:9 aspect ratio (eg 2160x1080, 2880x1440 pixels etc)
   * @default 'E226'
   */
  '18_9' = <any>'E226',

  /**
   * 21:9
   * @description (2.37:1) Use for fixed-format e-books optimised for displays with an 21:9 (or 64:27) aspect ratio (eg 3840x1644 pixels etc)
   * @default 'E227'
   */
  '21_9' = <any>'E227',

  /**
   * Laminated
   * @description Whole product laminated (eg laminated map, fold-out chart, wallchart, etc): use B415 for book with laminated cover
   * @default 'L101'
   */
  Laminated = <any>'L101',

  /**
   * Desk calendar or diary
   * @description Large format. Use with Product Form code PC or PF
   * @default 'P101'
   */
  DeskCalendarOrDiary = <any>'P101',

  /**
   * Mini calendar or pocket diary
   * @description Small format. Use with Product Form code PC or PF
   * @default 'P102'
   */
  MiniCalendarOrPocketDiary = <any>'P102',

  /**
   * Engagement calendar or Appointment diary
   * @description Usually with time-of-day subdivisions (rather than just days). Use with Product Form code PC or PF
   * @default 'P103'
   */
  EngagementCalendarOrAppointmentDiary = <any>'P103',

  /**
   * Day by day calendar
   * @description Eg tear-off calendars. Use with Product Form code PC
   * @default 'P104'
   */
  DayByDayCalendar = <any>'P104',

  /**
   * Poster calendar
   * @description Large single-sheet calendar intended for hanging. Use with Product Form code PC or PK
   * @default 'P105'
   */
  PosterCalendar = <any>'P105',

  /**
   * Wall calendar
   * @description Large calendar intended for hanging, usually one page per month. Use with Product Form code PC
   * @default 'P106'
   */
  WallCalendar = <any>'P106',

  /**
   * Perpetual calendar or diary
   * @description Usually undated. Use with Product Form code PC or PF
   * @default 'P107'
   */
  PerpetualCalendarOrDiary = <any>'P107',

  /**
   * Advent calendar
   * @description Use with Product Form code PC
   * @default 'P108'
   */
  AdventCalendar = <any>'P108',

  /**
   * Bookmark calendar
   * @description Use with Product Form code PC or PT
   * @default 'P109'
   */
  BookmarkCalendar = <any>'P109',

  /**
   * Student or Academic calendar or diary
   * @description Mid-year diary, start and end aligned with the academic year. Use with Product Form code PC or PF
   * @default 'P110'
   */
  StudentOrAcademicCalendarOrDiary = <any>'P110',

  /**
   * Project calendar
   * @description Use with Product Form code PC
   * @default 'P111'
   */
  ProjectCalendar = <any>'P111',

  /**
   * Almanac calendar
   * @description Use with Product Form code PC
   * @default 'P112'
   */
  AlmanacCalendar = <any>'P112',

  /**
   * Other calendar, diary or organiser
   * @description A calendar, diary or organiser that is not one of the types specified elsewhere: use with Product Form code PC, PF or PS
   * @default 'P113'
   */
  OtherCalendarDiaryOrOrganiser = <any>'P113',

  /**
   * Other calendar or organiser product
   * @description A product that is associated with or ancillary to a calendar or organiser, eg a deskstand for a calendar, or an insert for an organiser: use with Product Form code PC or PS
   * @default 'P114'
   */
  OtherCalendarOrOrganiserProduct = <any>'P114',

  /**
   * Family planner
   * @description Wall or poster calendar with entries for each family member. Use with Product Form code PC or PK
   * @default 'P115'
   */
  FamilyPlanner = <any>'P115',

  /**
   * Postcard calendar
   * @description Calendar sheets detachable (usually perforated) and intended for mailing as postcards. Use with Product Form code PC
   * @default 'P116'
   */
  PostcardCalendar = <any>'P116',

  /**
   * Picture story cards
   * @description Kamishibai / Cantastoria cards
   * @default 'P120'
   */
  PictureStoryCards = <any>'P120',

  /**
   * Flash cards
   * @description For use to specify letter, word, image (etc) recognition cards for teaching reading or other classroom use. Use with Product form code PD
   * @default 'P121'
   */
  FlashCards = <any>'P121',

  /**
   * Reference cards
   * @description Quick reference cards, revision cards, recipe cards etc. Use with Product form code PD
   * @default 'P122'
   */
  ReferenceCards = <any>'P122',

  /**
   * Recreation cards
   * @description For use to specify cards and card decks for gaming, collecting and trading etc. Use also for divination cards. Use with Product form codes PD
   * @default 'P123'
   */
  RecreationCards = <any>'P123',

  /**
   * Postcards
   * @description And postcard packs / books. Use with Product form code PJ
   * @default 'P124'
   */
  Postcards = <any>'P124',

  /**
   * Greeting cards
   * @description And greeting card packs. Use with Product form code PJ
   * @default 'P125'
   */
  GreetingCards = <any>'P125',

  /**
   * Gift cards
   * @description Physical cards which carry an intrinsic value, or which are intended to have value added to them, that may be redeemed later. For example book token cards, gift cards. Note value additions and redemption may be in a physical store or online
   * @default 'P126'
   */
  GiftCards = <any>'P126',

  /**
   * Certificate cards
   * @description Use with Product form code PD
   * @default 'P127'
   */
  CertificateCards = <any>'P127',

  /**
   * Hardback (stationery)
   * @description Stationery item in hardback book format
   * @default 'P201'
   */
  Hardback = <any>'P201',

  /**
   * Paperback / softback (stationery)
   * @description Stationery item in paperback/softback book format
   * @default 'P202'
   */
  PaperbackSoftback = <any>'P202',

  /**
   * Spiral bound (stationery)
   * @description Stationery item in spiral-bound book format
   * @default 'P203'
   */
  SpiralBound = <any>'P203',

  /**
   * Leather / fine binding (stationery)
   * @description Stationery item in leather-bound book format, or other fine binding
   * @default 'P204'
   */
  LeatherFineBinding = <any>'P204',

  /**
   * With hanging strips
   * @description For wall map, poster, wallchart etc
   * @default 'P301'
   */
  WithHangingStrips = <any>'P301',

  /**
   * Single-sided
   * @description Content is printed single-sided (for wallcharts and hanging maps, calendars, etc)
   * @default 'P305'
   */
  SingleSided = <any>'P305',

  /**
   * Double-sided
   * @description Content is printed double-sided (for wallcharts and hanging maps, calendars, etc, where double-sided may not always be expected)
   * @default 'P306'
   */
  DoubleSided = <any>'P306',

  /**
   * PAL
   * @description SD TV standard for video or DVD
   * @default 'V201'
   */
  Pal = <any>'V201',

  /**
   * NTSC
   * @description SD TV standard for video or DVD
   * @default 'V202'
   */
  Ntsc = <any>'V202',

  /**
   * SECAM
   * @description SD TV standard for video or DVD
   * @default 'V203'
   */
  Secam = <any>'V203',

  /**
   * HD
   * @description Up to 2K resolution (1920 or 2048 pixels wide) eg for Blu-Ray
   * @default 'V205'
   */
  Hd = <any>'V205',

  /**
   * UHD
   * @description Up to 4K resolution (3840 or 4096 pixels wide) eg for Ultra HD Blu-Ray
   * @default 'V206'
   */
  Uhd = <any>'V206',

  /**
   * 3D video
   * @description Eg for Blu-ray 3D
   * @default 'V207'
   */
  '3DVideo' = <any>'V207',

  /**
   * Home use
   * @description Licensed for use in domestic contexts only
   * @default 'V220'
   */
  HomeUse = <any>'V220',

  /**
   * Classroom use
   * @description Licensed for use in education
   * @default 'V221'
   */
  ClassroomUse = <any>'V221',

  /**
   * Wooden
   * @description Primary material composition (eg of kit or puzzle pieces, of gameplay tokens or tiles) is wood or has wooden pieces/parts
   * @default 'Z101'
   */
  Wooden = <any>'Z101',

  /**
   * Plastic
   * @description Plastic or plastic pieces/parts
   * @default 'Z102'
   */
  Plastic = <any>'Z102',

  /**
   * Board
   * @description Card or board pieces/parts
   * @default 'Z103'
   */
  Board = <any>'Z103',

  /**
   * 3D puzzle
   * @description Puzzle assembles into a 3D object
   * @default 'Z111'
   */
  '3DPuzzle' = <any>'Z111',

  /**
   * Noisy kit / puzzle / toy
   * @description Toy makes a noise. See B208 for noisy books
   * @default 'Z112'
   */
  NoisyKitPuzzleToy = <any>'Z112',

  /**
   * Puppet
   * @description Including finger / hand puppets, marionettes
   * @default 'Z113'
   */
  Puppet = <any>'Z113',

  /**
   * Extra large pieces
   * @description Designed and sized for the very young, or those with visual impairments, limited motor skills, dementia etc
   * @default 'Z121'
   */
  ExtraLargePieces = <any>'Z121',
}