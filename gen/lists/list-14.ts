// This code has been generated with a script

/**
 * Enum TextCaseFlag
 * @readonly
 * @enum { string }
 * @description List 14: Text case flag
 */
export enum TextCaseFlag {
  /**
   * Undefined
   * @description Default
   * @default '00'
   */
  Undefined = <any>'00',

  /**
   * Sentence case
   * @description Initial capitals on first word and subsequently on proper names only, eg ‘The conquest of Mexico’
   * @default '01'
   */
  SentenceCase = <any>'01',

  /**
   * Title case
   * @description Initial capitals on first word and subsequently on all significant words (nouns, pronouns, adjectives, verbs, adverbs, subordinate conjunctions) thereafter. Unless they appear as the first word, articles, prepositions and coordinating conjunctions remain lower case, eg ‘The Conquest of Mexico’
   * @default '02'
   */
  TitleCase = <any>'02',

  /**
   * All capitals
   * @description For example, ‘THE CONQUEST OF MEXICO’. Use only when Sentence or Title case are not possible (for example because of system limitations). Do NOT use simply because title is (correctly) in all caps (eg ‘BBQ USA’)
   * @default '03'
   */
  AllCapitals = <any>'03',
}