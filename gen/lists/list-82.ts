// This code has been generated with a script

/**
 * Enum BibleContents
 * @readonly
 * @enum { string }
 * @description List 82: Bible contents
 */
export enum BibleContents {

  /**
   * Apocrypha (Catholic canon)
   * @description The seven portions of the Apocrypha added to the Catholic canon at the Council of Trent in 1546: Tobit; Judith; Wisdom of Solomon; Sirach (Ecclesiasticus); Baruch, including the Letter of Jeremiah; I and II Maccabees; Extra portions of Esther and Daniel (Additions to Esther; the Prayer of Azariah; Song of the Three Jews; Susannah; Bel and the Dragon). These are not generally included in the Protestant canon
   * @default 'AP'
   */
  Apocrypha = <any>'AP',

  /**
   * Apocrypha (canon unspecified)
   * @description A collection of Apocryphal texts, canon not specified
   * @default 'AQ'
   */
  Apocrypha_1 = <any>'AQ',

  /**
   * Additional Apocryphal texts: Greek Orthodox canon
   * @description I Esdras; Prayer of Manasseh; Psalm 151; III Maccabees
   * @default 'AX'
   */
  AdditionalApocryphalTextsGreekOrthodoxCanon = <any>'AX',

  /**
   * Additional Apocryphal texts: Slavonic Orthodox canon
   * @description I and II Esdras; Prayer of Manasseh; Psalm 151; III and IV Maccabees
   * @default 'AY'
   */
  AdditionalApocryphalTextsSlavonicOrthodoxCanon = <any>'AY',

  /**
   * Additional Apocryphal texts
   * @description Additional Apocryphal texts included in some Bible versions: I and II Esdras; Prayer of Manasseh
   * @default 'AZ'
   */
  AdditionalApocryphalTexts = <any>'AZ',

  /**
   * General canon with Apocrypha (Catholic canon)
   * @description The 66 books included in the Protestant, Catholic and Orthodox canons, together with the seven portions of the Apocrypha included in the Catholic canon. (Equivalent to OT plus NT plus AP)
   * @default 'GA'
   */
  GeneralCanonWithApocrypha = <any>'GA',

  /**
   * General canon with Apocryphal texts (canon unspecified)
   * @description The 66 books included in the Protestant, Catholic and Orthodox canons, together with Apocryphal texts, canon not specified. (Equivalent to OT plus NT plus AQ)
   * @default 'GC'
   */
  GeneralCanonWithApocryphalTexts = <any>'GC',

  /**
   * General canon
   * @description The 66 books included in the Protestant, Catholic and Orthodox canons, 39 from the Old Testament and 27 from the New Testament. The sequence of books may differ in different canons. (Equivalent to OT plus NT)
   * @default 'GE'
   */
  GeneralCanon = <any>'GE',

  /**
   * Gospels
   * @description The books of Matthew, Mark, Luke and John
   * @default 'GS'
   */
  Gospels = <any>'GS',

  /**
   * Old Testament
   * @description Those 39 books which were included in the Jewish canon by the rabbinical academy established at Jamma in 90 CE. Also known as the Jewish or Hebrew scriptures
   * @default 'OT'
   */
  OldTestament = <any>'OT',

  /**
   * New Testament
   * @description The 27 books included in the Christian canon through the Easter Letter of Athanasius, Bishop of Alexandria and also by a general council of the Christian church held near the end of the 4th century CE
   * @default 'NT'
   */
  NewTestament = <any>'NT',

  /**
   * New Testament with Psalms and Proverbs
   * @description Includes the 27 books of the New Testament plus Psalms and Proverbs from the Old Testament. Equivalent to NT plus PP)
   * @default 'NP'
   */
  NewTestamentWithPsalmsAndProverbs = <any>'NP',

  /**
   * Paul’s Epistles
   * @description The books containing the letters of Paul to the various early Christian churches
   * @default 'PE'
   */
  PaulEpistles = <any>'PE',

  /**
   * Psalms and Proverbs
   * @description The book of Psalms and the book of Proverbs combined
   * @default 'PP'
   */
  PsalmsAndProverbs = <any>'PP',

  /**
   * Psalms
   * @description The book of Psalms
   * @default 'PS'
   */
  Psalms = <any>'PS',

  /**
   * Pentateuch
   * @description The first five books of the Bible: Genesis, Exodus, Numbers, Leviticus, Deuteronomy. Also applied to the Torah
   * @default 'PT'
   */
  Pentateuch = <any>'PT',

  /**
   * Other portions
   * @description Selected books of either the OT or NT not otherwise noted
   * @default 'ZZ'
   */
  OtherPortions = <any>'ZZ',
}
