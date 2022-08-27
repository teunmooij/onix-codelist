// This code has been generated with a script

/**
 * Enum LanguageRole
 * @readonly
 * @enum { string }
 * @description List 22: Language role
 */
export enum LanguageRole {
  /**
   * Language of text
   * @description
   * @default '01'
   */
  LanguageOfText = <any>'01',

  /**
   * Original language of a translated text
   * @description Where the text in the original language is NOT part of the current product
   * @default '02'
   */
  OriginalLanguageOfATranslatedText = <any>'02',

  /**
   * Language of abstracts
   * @description Where different from language of text: used mainly for serials
   * @default '03'
   */
  LanguageOfAbstracts = <any>'03',

  /**
   * Original language in a multilingual edition
   * @description Where the text in the original language is part of a bilingual or multilingual product
   * @default '06'
   */
  OriginalLanguageInAMultilingualEdition = <any>'06',

  /**
   * Translated language in a multilingual edition
   * @description Where the text in a translated language is part of a bilingual or multilingual product
   * @default '07'
   */
  TranslatedLanguageInAMultilingualEdition = <any>'07',

  /**
   * Language of audio track
   * @description For example, on an audiobook or video product. Use for the only available audio track, or where there are multiple tracks (eg on a DVD), for an alternate language audio track that is NOT the original. (In the latter case, use code 11 for the original language audio if it is included in the product, or code 10 to identify an original language that is not present in the product)
   * @default '08'
   */
  LanguageOfAudioTrack = <any>'08',

  /**
   * Language of subtitles
   * @description For example, on a DVD
   * @default '09'
   */
  LanguageOfSubtitles = <any>'09',

  /**
   * Language of original audio track
   * @description Where the audio in the original language is NOT part of the current product
   * @default '10'
   */
  LanguageOfOriginalAudioTrack = <any>'10',

  /**
   * Original language audio track in a multilingual product
   * @description Where the audio in the original language is part of a multilingual product with multiple audio tracks
   * @default '11'
   */
  OriginalLanguageAudioTrackInAMultilingualProduct = <any>'11',

  /**
   * Language of notes
   * @description Use for the language of footnotes, endnotes, annotations or commentary, instructions or guidance for use etc, where it is different from the language of the main text
   * @default '12'
   */
  LanguageOfNotes = <any>'12',

  /**
   * Language of introduction / end matter
   * @description Use for the language of any introductory text, prologue, etc, or epilogue, end matter, etc, where it is different from the language of the main text. For use on ONIX 3.0 only
   * @default '13'
   */
  LanguageOfIntroductionEndMatter = <any>'13',

  /**
   * Target language of teaching / learning
   * @description Eg for the book ‘Ingles para latinos’, English. For phrasebooks and language teaching and learning material. Wherever possible, the language should also be listed as the subject of the book. For use on ONIX 3.0 only
   * @default '14'
   */
  TargetLanguageOfTeachingLearning = <any>'14',

  /**
   * Additional vocabulary / text in this language
   * @description Use of significant words, phrases, quotations or short passages from a language other than the main language of the text, as an integral part of the text. This does not include ‘loanwords’, academic Latin, etc. For use on ONIX 3.0 only
   * @default '15'
   */
  AdditionalVocabularyTextInThisLanguage = <any>'15',
}
