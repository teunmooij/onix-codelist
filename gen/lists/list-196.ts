// This code has been generated with a script

/**
 * Enum EPublicationAccessibilityDetails
 * @readonly
 * @enum { string }
 * @description List 196: E-publication Accessibility Details
 */
export enum EPublicationAccessibilityDetails {
  /**
   * Accessibility summary
   * @description <ProductFormFeatureDescription> contains a short explanatory summary of the accessibility of the product, consistent with the more specific conformance and feature details provided. The summary should note both the accessibility features provided and any potential deficiencies. More detailed information may be provided in an external file using codes 94–96. For use in ONIX 3.0 only
   * @default '00'
   */
  AccessibilitySummary = <any>'00',

  /**
   * LIA Compliance Scheme
   * @description
   * @default '01'
   */
  LiaComplianceScheme = <any>'01',

  /**
   * EPUB Accessibility Specification 1.0 A
   * @description Conforms with the requirements of EPUB Accessibility Spec 1.0 and WCAG level A. <ProductFormFeatureDescription> may carry a URL linking to a compliance report or certification provided by an independent third party certifier. In the absence of a URL, conformance with the requirements of the Accessibility Specification is self-certified by the publisher
   * @default '02'
   */
  EpubAccessibilitySpecification_1_0A = <any>'02',

  /**
   * EPUB Accessibility Specification 1.0 AA
   * @description Conforms with the requirements of EPUB Accessibility Spec 1.0 and WCAG level AA. <ProductFormFeatureDescription> may carry a URL linking to a compliance report or certification provided by an independent third party certifier. In the absence of a URL, conformance with the requirements of the Accessibility Specification is self-certified by the publisher
   * @default '03'
   */
  EpubAccessibilitySpecification_1_0Aa = <any>'03',

  /**
   * PDF/UA
   * @description Conforms with the requirements of ISO 32000-1:2008 plus ISO 14289-1:2014 – Portable Document Format for Universal Accessibility. For use in ONIX 3.0 only
   * @default '05'
   */
  PdfUa = <any>'05',

  /**
   * Inaccessible
   * @description Known to lack significant features required for broad accessibility. For use in ONIX 3.0 only
   * @default '09'
   */
  Inaccessible = <any>'09',

  /**
   * No reading system accessibility options disabled (except)
   * @description No accessibility features offered by the reading system, device or reading software (including but not limited to choice of text size or typeface, choice of text or background color, text-to-speech) are disabled, overridden or otherwise unusable with the product EXCEPT – in ONIX 3 messages only – those specifically noted as subject to restriction or prohibition in <EpubUsageConstraint>. Note that provision of any significant part of the textual content as images (ie as pictures of text, rather than as text, and without any textual equivalent) inevitably prevents use of these accessibility options
   * @default '10'
   */
  NoReadingSystemAccessibilityOptionsDisabled = <any>'10',

  /**
   * Table of contents navigation
   * @description Table of contents allows direct (eg hyperlinked) access to all levels of text organization above individual paragraphs (eg to all sections and subsections) and to all tables, figures, illustrations etc. Non-textual items such as illustrations, tables, audio or video content may be directly accessible from the Table of contents, or from a similar List of illustrations, List of tables, etc
   * @default '11'
   */
  TableOfContentsNavigation = <any>'11',

  /**
   * Index navigation
   * @description Index provides direct (eg hyperlinked) access to uses of the index terms in the document body
   * @default '12'
   */
  IndexNavigation = <any>'12',

  /**
   * Reading order
   * @description All or substantially all textual matter is arranged in a single logical reading order (including text that is visually presented as separate from the main text flow, eg in boxouts, captions, tables, footnotes, endnotes, citations, etc). Non-textual content is also linked from within this logical reading order. (Purely decorative non-text content can be ignored)
   * @default '13'
   */
  ReadingOrder = <any>'13',

  /**
   * Short alternative descriptions
   * @description All or substantially all non-text content has short alternative (textual) descriptions, usually provided via alt attributes. Note this applies to normal images (eg photographs, charts and diagrams) and also to any embedded audio, video etc. Audio and video content should include alternative descriptions suitable for hearing-impaired as well as for visually-impaired readers. (Purely decorative non-text content can be ignored, but the accessibility of resources delivered via a network connection rather than as part of the e-publication package must be included)
   * @default '14'
   */
  ShortAlternativeDescriptions = <any>'14',

  /**
   * Full alternative descriptions
   * @description All or substantially all non-text content has full alternative (textual) descriptions. Note this applies to normal images (eg photographs, charts and diagrams) and also to any embedded audio, video etc. Audio and video content should include full alternative descriptions (eg audio-described video) and transcript, subtitles or captions (whether closed or open) suitable for hearing-impaired as well as for visually-impaired readers. (Purely decorative non-text content can be ignored, but the accessibility of resources delivered via a network connection rather than as part of the e-publication package must be included)
   * @default '15'
   */
  FullAlternativeDescriptions = <any>'15',

  /**
   * Visualised data also available as non-graphical data
   * @description Where data visualisations are provided (eg graphs and charts), the underlying data is also available in non-graphical (usually tabular, textual) form
   * @default '16'
   */
  VisualisedDataAlsoAvailableAsNonGraphicalData = <any>'16',

  /**
   * Accessible math content
   * @description Mathematical content such as equations is usable with assistive technology, eg through use of MathML. Semantic MathML is preferred but Presentational MathML is acceptable
   * @default '17'
   */
  AccessibleMathContent = <any>'17',

  /**
   * Accessible chem content
   * @description Chemistry content such as chemical formulae is usable with assistive technology, eg through use of ChemML
   * @default '18'
   */
  AccessibleChemContent = <any>'18',

  /**
   * Print-equivalent page numbering
   * @description For a reflowable e-publication, contains references to the page numbering of an equivalent printed product. Use <RelatedProduct> with relation code 13 to specify an identifier for the source of the page numbers
   * @default '19'
   */
  PrintEquivalentPageNumbering = <any>'19',

  /**
   * Synchronised pre-recorded audio
   * @description Text-synchronised pre-recorded audio narration (natural or synthesised voice) is included for substantially all textual matter, including all alternative descriptions
   * @default '20'
   */
  SynchronisedPreRecordedAudio = <any>'20',

  /**
   * Text-to-speech hinting provided
   * @description Text-to-speech has been optimised through provision of PLS lexicons, SSML or CSS Speech synthesis hints
   * @default '21'
   */
  TextToSpeechHintingProvided = <any>'21',

  /**
   * Language tagging provided
   * @description The language of the text has been specified (eg via the HTML or XML lang attribute) to optimise text-to-speech (and other alternative renderings), both at whole document level and, where appropriate, for individual words, phrases or passages in a different language
   * @default '22'
   */
  LanguageTaggingProvided = <any>'22',

  /**
   * Dyslexia readability
   * @description Specialised font, character and/or line spacing, justification and paragraph spacing, coloring and other options provided specifically to improve readability for dyslexic readers. Details, including the name of the font if relevant, should be listed in <ProductFormFeatureDescription>
   * @default '24'
   */
  DyslexiaReadability = <any>'24',

  /**
   * Use of color
   * @description For readers with color vision deficiency, use of color (eg in diagrams) is not the sole means of graphical distinction
   * @default '25'
   */
  UseOfColor = <any>'25',

  /**
   * Use of contrast
   * @description Body text is presented with a contrast ratio of at least 4.5:1 (or 3:1 for large/heading text)
   * @default '26'
   */
  UseOfContrast = <any>'26',

  /**
   * Use of audio
   * @description Audio content is presented with no or low background noise (eg ambient sounds), at least 20dB below the level of foreground speech
   * @default '27'
   */
  UseOfAudio = <any>'27',

  /**
   * Full alternative audio descriptions
   * @description All or substantially all non-text content has full alternative descriptions as pre-recorded audio. Note this applies to normal images (eg photographs, charts and diagrams) and also to any embedded video etc. Video content should include full alternative descriptions (eg audio-described video) and transcript, subtitles or captions (whether closed or open) suitable for hearing-impaired as well as for visually-impaired readers. (Purely decorative non-text content can be ignored, but the accessibility of resources delivered via a network connection rather than as part of the e-publication package must be included)
   * @default '28'
   */
  FullAlternativeAudioDescriptions = <any>'28',

  /**
   * Next / Previous navigation
   * @description All levels of heading and other structural elements of the content are correctly marked up and (if applicable) numbered, to enable fast next heading / previous heading, next chapter / previous chapter navigation without returning to the table of contents
   * @default '29'
   */
  NextPreviousNavigation = <any>'29',

  /**
   * Compliance certification by
   * @description <ProductFormFeatureDescription> carries the URL of a web page belonging to the organisation responsible for compliance testing and certification of the product – typically a ‘home page’ or a page describing the certification scheme itself. For use in ONIX 3.0 only
   * @default '93'
   */
  ComplianceCertificationBy = <any>'93',

  /**
   * Compliance web page for detailed accessibility information
   * @description <ProductFormFeatureDescription> carries the URL of a web page giving further detailed description of the accessibility features, compatibility, testing, certification etc relevant to this product. The web page should be maintained by an independent compliance scheme or testing organization
   * @default '94'
   */
  ComplianceWebPageForDetailedAccessibilityInformation = <any>'94',

  /**
   * Trusted intermediary’s web page for detailed accessibility information
   * @description <ProductFormFeatureDescription> carries the URL of a web page giving further detailed description of the accessibility features, compatibility, testing etc relevant to this product. The web page should be provided by a trusted intermediary or third party nominated by the publisher
   * @default '95'
   */
  TrustedIntermediaryWebPageForDetailedAccessibilityInformation = <any>'95',

  /**
   * Publisher’s web page for detailed accessibility information
   * @description <ProductFormFeatureDescription> carries the URL of a web page giving further detailed description of the accessibility features, compatibility, testing etc relevant to this product. The web page should be provided by the publisher
   * @default '96'
   */
  PublisherWebPageForDetailedAccessibilityInformation = <any>'96',

  /**
   * Compatibility tested
   * @description <ProductFormFeatureDescription> carries the URL of a web page giving a short description of compatibility testing carried out for this product, including detailed compatibility with various assistive technology such as third-party screen-reading software. See also code 00 for a summary of the accessibility features of the product itself
   * @default '97'
   */
  CompatibilityTested = <any>'97',

  /**
   * Trusted Intermediary contact
   * @description <ProductFormFeatureDescription> carries the e-mail address for a contact at a ‘trusted intermediary’, to whom detailed questions about accessibility for this product may be directed
   * @default '98'
   */
  TrustedIntermediaryContact = <any>'98',

  /**
   * Publisher contact for further accessibility information
   * @description <ProductFormFeatureDescription> carries the e-mail address for a contact at the publisher to whom detailed questions about accessibility of this product may be directed
   * @default '99'
   */
  PublisherContactForFurtherAccessibilityInformation = <any>'99',
}