// This code has been generated with a script

/**
 * Enum EditionType
 * @readonly
 * @enum { string }
 * @description List 21: Edition type
 */
export enum EditionType {
  /**
   * Abridged edition
   * @description Content has been shortened: use for abridged, shortened, concise, condensed
   * @default 'ABR'
   */
  AbridgedEdition = <any>'ABR',

  /**
   * Acting edition
   * @description Version of a play or script intended for use of those directly involved in a production, usually including full stage directions in addition to the text of the script
   * @default 'ACT'
   */
  ActingEdition = <any>'ACT',

  /**
   * Adapted edition
   * @description Content has been adapted to serve a different purpose or audience, or from one medium to another: use for dramatization, novelization etc. Use <EditionStatement> to describe the exact nature of the adaptation
   * @default 'ADP'
   */
  AdaptedEdition = <any>'ADP',

  /**
   * Alternate
   * @description Do not use. This code is now DEPRECATED, but is retained in the list for reasons of backwards compatibility
   * @deprecated
   * @default 'ALT'
   */
  Alternate = <any>'ALT',

  /**
   * Annotated edition
   * @description Content is augmented by the addition of notes
   * @default 'ANN'
   */
  AnnotatedEdition = <any>'ANN',

  /**
   * Bilingual edition
   * @description Both languages should be specified in the <Language> group. Use MLL for an edition in more than two languages
   * @default 'BLL'
   */
  BilingualEdition = <any>'BLL',

  /**
   * Bilingual ‘facing page’ edition
   * @description Use only where the two languages are presented in parallel on facing pages, or in parallel columns of text on a single page (otherwise use BLL). Both languages should be specified in the <Language> group
   * @default 'BLP'
   */
  BilingualFacingPageEdition = <any>'BLP',

  /**
   * Braille edition
   * @description Braille edition
   * @default 'BRL'
   */
  BrailleEdition = <any>'BRL',

  /**
   * Combined volume
   * @description An edition in which two or more works also published separately are combined in a single volume; AKA ‘omnibus’ edition (fr: ‘intégrale’)
   * @default 'CMB'
   */
  CombinedVolume = <any>'CMB',

  /**
   * Critical edition
   * @description Content includes critical commentary on the text
   * @default 'CRI'
   */
  CriticalEdition = <any>'CRI',

  /**
   * Coursepack
   * @description Content was compiled for a specified educational course
   * @default 'CSP'
   */
  Coursepack = <any>'CSP',

  /**
   * Digital original
   * @description A digital product that, at the time of publication, has or had no print counterpart and that is or was not expected to have a print counterpart for a reasonable time (recommended at least 30 days following publication)
   * @default 'DGO'
   */
  DigitalOriginal = <any>'DGO',

  /**
   * Enhanced edition
   * @description Use for e-publications that have been enhanced with additional text, speech, other audio, video, interactive or other content
   * @default 'ENH'
   */
  EnhancedEdition = <any>'ENH',

  /**
   * Enlarged edition
   * @description Content has been enlarged or expanded from that of a previous edition
   * @default 'ENL'
   */
  EnlargedEdition = <any>'ENL',

  /**
   * Easy-to-read edition
   * @description Book which uses highly simplified wording, clear page layout and typography to ensure the content can be understood by those with intellectual disabilities. See https://www.inclusion-europe.eu/easy-to-read for guidelines. See also SMP for editions with simplified language. For use in ONIX 3.0 only
   * @default 'ETR'
   */
  EasyToReadEdition = <any>'ETR',

  /**
   * Expurgated edition
   * @description ‘Offensive’ content has been removed
   * @default 'EXP'
   */
  ExpurgatedEdition = <any>'EXP',

  /**
   * Facsimile edition
   * @description Exact reproduction of the content and format of a previous edition
   * @default 'FAC'
   */
  FacsimileEdition = <any>'FAC',

  /**
   * Festschrift
   * @description A collection of writings published in honor of a person, an institution or a society
   * @default 'FST'
   */
  Festschrift = <any>'FST',

  /**
   * High readability edition
   * @description Edition optimised for high readability, typically featuring colored or tinted page backgrounds to reduce contrast, extra letter, word and line spacing to reduce crowding and isolate individual words, simplified page layouts and an open, sans serif font (or occasionally, an unusual font design) intended to aid readability. Sometimes labelled ‘dyslexia-friendly’. See also code SMP if the text itself is simplified, and codes LTE or ULP if the type size is significantly larger than normal. For use in ONIX 3.0 only
   * @default 'HRE'
   */
  HighReadabilityEdition = <any>'HRE',

  /**
   * Illustrated edition
   * @description Content includes extensive illustrations which are not part of other editions
   * @default 'ILL'
   */
  IllustratedEdition = <any>'ILL',

  /**
   * International edition
   * @description A product aimed specifically at markets other than the country of original publication, usually titled as an ‘International edition’ and with specification and/or content changes
   * @default 'INT'
   */
  InternationalEdition = <any>'INT',

  /**
   * Large type / large print edition
   * @description Large print edition, print sizes 14 to 19pt – see also ULP
   * @default 'LTE'
   */
  LargeTypeLargePrintEdition = <any>'LTE',

  /**
   * Microprint edition
   * @description A printed edition in a type size too small to be read without a magnifying glass
   * @default 'MCP'
   */
  MicroprintEdition = <any>'MCP',

  /**
   * Media tie-in
   * @description An edition published to coincide with the release of a film, TV program, or electronic game based on the same work. Use <EditionStatement> to describe the exact nature of the tie-in
   * @default 'MDT'
   */
  MediaTieIn = <any>'MDT',

  /**
   * Multilingual edition
   * @description All languages should be specified in the ‘Language’ group. Use BLL for a bilingual edition
   * @default 'MLL'
   */
  MultilingualEdition = <any>'MLL',

  /**
   * New edition
   * @description Where no other information is given, or no other coded type or edition numbering is applicable
   * @default 'NED'
   */
  NewEdition = <any>'NED',

  /**
   * Edition with numbered copies
   * @description A limited edition in which each copy is individually numbered, and the actual number of copies is strictly limited. Note that the supplier may limit the number of orders fulfilled per retail outlet. Use <EditionStatement> to give details of the number of copies printed
   * @default 'NUM'
   */
  EditionWithNumberedCopies = <any>'NUM',

  /**
   * Paperback original
   * @description A product published in any form of soft cover, that at the time of publication, has or had no counterpart in any other format, and that is or was not expected to have such a counterpart for a reasonable time (recommended at least 30 days following publication). For use in ONIX 3.0 only
   * @default 'PBO'
   */
  PaperbackOriginal = <any>'PBO',

  /**
   * Prebound edition
   * @description In the US, a book that was previously bound, normally as a paperback, and has been rebound with a library-quality hardcover binding by a supplier other than the original publisher. See also the <Publisher> and <RelatedProduct> composites for other aspects of the treatment of prebound editions in ONIX
   * @default 'PRB'
   */
  PreboundEdition = <any>'PRB',

  /**
   * Revised edition
   * @description Content has been revised from that of a previous edition (often used when there has been no corresponding increment in the edition number, or no edition numbering is available)
   * @default 'REV'
   */
  RevisedEdition = <any>'REV',

  /**
   * School edition
   * @description An edition intended specifically for use in schools
   * @default 'SCH'
   */
  SchoolEdition = <any>'SCH',

  /**
   * Signed edition
   * @description Individually autographed by the author(s)
   * @default 'SIG'
   */
  SignedEdition = <any>'SIG',

  /**
   * Simplified language edition
   * @description A often for languge learners. See ETR for highly simplified editions for readers with intellectual disabilities n
   * @default 'SMP'
   */
  SimplifiedLanguageEdition = <any>'SMP',

  /**
   * Special edition
   * @description Use for anniversary, collectors’, de luxe, gift, limited (but prefer codes NUM or UNN as appropriate), autographed (but prefer code SIG as appropriate) edition. Use <EditionStatement> to describe the exact nature of the special edition
   * @default 'SPE'
   */
  SpecialEdition = <any>'SPE',

  /**
   * Student edition
   * @description Where a text is available in both student and teacher’s editions
   * @default 'STU'
   */
  StudentEdition = <any>'STU',

  /**
   * Teacher’s edition
   * @description Where a text is available in both student and teacher’s editions; use also for instructor’s or leader’s editions, and for editions intended exclusively for educators where no specific student edition is available
   * @default 'TCH'
   */
  TeacherEdition = <any>'TCH',

  /**
   * Unabridged edition
   * @description Where a title has also been published in an abridged edition; also for audiobooks, regardless of whether an abridged audio version also exists
   * @default 'UBR'
   */
  UnabridgedEdition = <any>'UBR',

  /**
   * Ultra large print edition
   * @description For print sizes 20pt and above, and with typefaces designed for the visually impaired – see also LTE
   * @default 'ULP'
   */
  UltraLargePrintEdition = <any>'ULP',

  /**
   * Edition with unnumbered copies
   * @description A limited edition in which each copy is not individually numbered – but where the actual number of copies is strictly limited. Note that the supplier may limit the number of orders fulfilled per retail outlet. Use <EditionStatement> to give details of the number of copies printed
   * @default 'UNN'
   */
  EditionWithUnnumberedCopies = <any>'UNN',

  /**
   * Unexpurgated edition
   * @description Content previously considered ‘offensive’ has been restored
   * @default 'UXP'
   */
  UnexpurgatedEdition = <any>'UXP',

  /**
   * Variorum edition
   * @description Content includes notes by various commentators, and/or includes and compares several variant texts of the same work
   * @default 'VAR'
   */
  VariorumEdition = <any>'VAR',

  /**
   * Vorlesebücher
   * @description Readaloud edition – specifially intended and designed for reading aloud (to children). For use in ONIX 3.0 only
   * @default 'VOR'
   */
  Vorlesebucher = <any>'VOR',
}
