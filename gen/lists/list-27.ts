// This code has been generated with a script

/**
 * Enum SubjectSchemeIdentifier
 * @readonly
 * @enum { string }
 * @description List 27: Subject scheme identifier
 */
export enum SubjectSchemeIdentifier {

  /**
   * Dewey
   * @description Dewey Decimal Classification
   * @default '01'
   */
  Dewey = <any>'01',

  /**
   * Abridged Dewey
   * @description 
   * @default '02'
   */
  AbridgedDewey = <any>'02',

  /**
   * LC classification
   * @description US Library of Congress classification
   * @default '03'
   */
  LcClassification = <any>'03',

  /**
   * LC subject heading
   * @description US Library of Congress subject heading
   * @default '04'
   */
  LcSubjectHeading = <any>'04',

  /**
   * NLM classification
   * @description US National Library of Medicine medical classification
   * @default '05'
   */
  NlmClassification = <any>'05',

  /**
   * MeSH heading
   * @description US National Library of Medicine Medical subject heading
   * @default '06'
   */
  MeShHeading = <any>'06',

  /**
   * NAL subject heading
   * @description US National Agricultural Library subject heading
   * @default '07'
   */
  NalSubjectHeading = <any>'07',

  /**
   * AAT
   * @description Getty Art and Architecture Thesaurus heading
   * @default '08'
   */
  Aat = <any>'08',

  /**
   * UDC
   * @description Universal Decimal Classification
   * @default '09'
   */
  Udc = <any>'09',

  /**
   * BISAC Subject Heading
   * @description BISAC Subject Headings are used in the North American market to categorize books based on topical content. They serve as a guideline for shelving books in physical stores and browsing books in online stores. See https://bisg.org/page/BISACSubjectCodes
   * @default '10'
   */
  BisacSubjectHeading = <any>'10',

  /**
   * BISAC Regional theme
   * @description A geographical qualifier used with a BISAC subject category
   * @default '11'
   */
  BisacRegionalTheme = <any>'11',

  /**
   * BIC subject category
   * @description For all BIC subject codes and qualifiers, see https://www.bic.org.uk/7/BIC-Standard-Subject-Categories/
   * @default '12'
   */
  BicSubjectCategory = <any>'12',

  /**
   * BIC geographical qualifier
   * @description 
   * @default '13'
   */
  BicGeographicalQualifier = <any>'13',

  /**
   * BIC language qualifier (language as subject)
   * @description 
   * @default '14'
   */
  BicLanguageQualifier = <any>'14',

  /**
   * BIC time period qualifier
   * @description 
   * @default '15'
   */
  BicTimePeriodQualifier = <any>'15',

  /**
   * BIC educational purpose qualifier
   * @description 
   * @default '16'
   */
  BicEducationalPurposeQualifier = <any>'16',

  /**
   * BIC reading level and special interest qualifier
   * @description 
   * @default '17'
   */
  BicReadingLevelAndSpecialInterestQualifier = <any>'17',

  /**
   * DDC-Sachgruppen der Deutschen Nationalbibliografie
   * @description Used for German National Bibliography since 2004 (100 subjects). Is different from value 30. See http://www.dnb.de/service/pdf/ddc_wv_aktuell.pdf (in German) or http://www.dnb.de/eng/service/pdf/ddc_wv_aktuell_eng.pdf (English)
   * @default '18'
   */
  DdcSachgruppenDerDeutschenNationalbibliografie = <any>'18',

  /**
   * LC fiction genre heading
   * @description 
   * @default '19'
   */
  LcFictionGenreHeading = <any>'19',

  /**
   * Keywords
   * @description For indexing and search purposes, not normally intended for display. Where multiple keywords or keyword phrases are sent, this should be in a single instance of the <SubjectHeadingText> element, and it is recommended that they should be separated by semi-colons (this is consistent with Library of Congress preferred practice)
   * @default '20'
   */
  Keywords = <any>'20',

  /**
   * Keywords (not for display)
   * @description For indexing and search purposes, MUST not be displayed. Where multiple keywords or keyword phrases are sent, this should be in a single instance of the <SubjectHeadingText> element, and it is recommended that they should be separated by semi-colons. Use of code B2 should be very rare: use B2 in preference to code 20 only where it is important to show the keyword list is specifically NOT for display to purchasers (eg some keywords for a medical textbook may appear offensive if displayed out of context)
   * @default 'B2'
   */
  Keywords_1 = <any>'B2',

  /**
   * BIC children’s book marketing category
   * @description See PA/BIC CBMC guidelines at http://www.bic.org.uk/8/Children%27s-Books-Marketing-Classifications/
   * @default '21'
   */
  BicChildrenBookMarketingCategory = <any>'21',

  /**
   * BISAC Merchandising Theme
   * @description BISAC Merchandising Themes are used in addition to BISAC Subject Headings to denote an audience to which a work may be of particular appeal, a time of year or event for which a work may be especially appropriate, or to further describe fictional works that have been subject-coded by genre
   * @default '22'
   */
  BisacMerchandisingTheme = <any>'22',

  /**
   * Publisher’s own category code
   * @description 
   * @default '23'
   */
  PublisherOwnCategoryCode = <any>'23',

  /**
   * Proprietary subject scheme
   * @description As specified in <SubjectSchemeName>
   * @default '24'
   */
  ProprietarySubjectScheme = <any>'24',

  /**
   * Tabla de materias ISBN
   * @description Latin America
   * @default '25'
   */
  TablaDeMateriasIsbn = <any>'25',

  /**
   * Warengruppen-Systematik des deutschen Buchhandels
   * @description See https://vlb.de/assets/images/wgsneuversion2_0.pdf (in German)
   * @default '26'
   */
  WarengruppenSystematikDesDeutschenBuchhandels = <any>'26',

  /**
   * SWD
   * @description Schlagwortnormdatei – Subject Headings Authority File in the German-speaking countries. See http://www.dnb.de/standardisierung/normdateien/swd.htm (in German) and http://www.dnb.de/eng/standardisierung/normdateien/swd.htm (English). DEPRECATED in favor of the GND
   * @deprecated
   * @default '27'
   */
  Swd = <any>'27',

  /**
   * Thèmes Electre
   * @description Subject classification used by Electre (France)
   * @default '28'
   */
  ThemesElectre = <any>'28',

  /**
   * CLIL Classification thématique
   * @description France. A four-digit number, see https://clil.centprod.com/listeActive.html (in French)
   * @default '29'
   */
  ClilClassificationThematique = <any>'29',

  /**
   * DNB-Sachgruppen
   * @description Deutsche Bibliothek subject groups. Used for German National Bibliography until 2003 (65 subjects). Is different from value 18. See http://www.dnb.de/service/pdf/ddc_wv_alt_neu.pdf (in German)
   * @default '30'
   */
  DnbSachgruppen = <any>'30',

  /**
   * NUGI
   * @description Nederlandse Uniforme Genre-Indeling (former Dutch book trade classification)
   * @default '31'
   */
  Nugi = <any>'31',

  /**
   * NUR
   * @description Nederlandstalige Uniforme Rubrieksindeling (Dutch book trade classification, from 2002, see http://www.boek.nl/nur (in Dutch)
   * @default '32'
   */
  Nur = <any>'32',

  /**
   * ECPA Christian Book Category
   * @description ECPA Christian Product Category Book Codes, consisting of up to three x 3-letter blocks, for Super Category, Primary Category and Sub-Category. See http://www.ecpa.org/ECPA/cbacategories.xls
   * @default '33'
   */
  EcpaChristianBookCategory = <any>'33',

  /**
   * SISO
   * @description Schema Indeling Systematische Catalogus Openbare Bibliotheken (Dutch library classification)
   * @default '34'
   */
  Siso = <any>'34',

  /**
   * Korean Decimal Classification (KDC)
   * @description A modified Dewey Decimal Classification used in the Republic of Korea
   * @default '35'
   */
  KoreanDecimalClassification = <any>'35',

  /**
   * DDC Deutsch 22
   * @description German Translation of Dewey Decimal Classification 22. Also known as DDC 22 ger. See http://www.ddc-deutsch.de/produkte/uebersichten/
   * @default '36'
   */
  DdcDeutsch_22 = <any>'36',

  /**
   * Bokgrupper
   * @description Norwegian book trade product categories (Bokgrupper) administered by the Norwegian Publishers Association (http://www.forleggerforeningen.no/)
   * @default '37'
   */
  Bokgrupper = <any>'37',

  /**
   * Varegrupper
   * @description Norwegian bookselling subject categories (Bokhandelens varegrupper) administered by the Norwegian Booksellers Association (http://bokhandlerforeningen.no/)
   * @default '38'
   */
  Varegrupper = <any>'38',

  /**
   * Læreplaner-KL06
   * @description Norwegian school curriculum version. Deprecated
   * @deprecated
   * @default '39'
   */
  LaereplanerKl06 = <any>'39',

  /**
   * Nippon Decimal Classification
   * @description Japanese subject classification scheme
   * @default '40'
   */
  NipponDecimalClassification = <any>'40',

  /**
   * BSQ
   * @description BookSelling Qualifier: Russian book trade classification
   * @default '41'
   */
  Bsq = <any>'41',

  /**
   * ANELE Materias
   * @description Spain: subject coding scheme of the Asociación Nacional de Editores de Libros y Material de Enseñanza
   * @default '42'
   */
  AneleMaterias = <any>'42',

  /**
   * Utdanningsprogram
   * @description Codes for Norwegian ‘utdanningsprogram’ used in secondary education. See: http://www.udir.no/. (Formerly labelled ‘Skolefag’)
   * @default '43'
   */
  Utdanningsprogram = <any>'43',

  /**
   * Programområde
   * @description Codes for Norwegian ‘programområde’ used in secondary education. See http://www.udir.no/. (Formerly labelled ‘Videregående’ or ‘Programfag’)
   * @default '44'
   */
  Programomrade = <any>'44',

  /**
   * Undervisningsmateriell
   * @description Norwegian list of categories for books and other material used in education
   * @default '45'
   */
  Undervisningsmateriell = <any>'45',

  /**
   * Norsk DDK
   * @description Norwegian version of Dewey Decimal Classification
   * @default '46'
   */
  NorskDdk = <any>'46',

  /**
   * Varugrupper
   * @description Swedish bookselling subject categories
   * @default '47'
   */
  Varugrupper = <any>'47',

  /**
   * SAB
   * @description Swedish classification scheme
   * @default '48'
   */
  Sab = <any>'48',

  /**
   * Läromedelstyp
   * @description Swedish bookselling educational subject type
   * @default '49'
   */
  Laromedelstyp = <any>'49',

  /**
   * Förhandsbeskrivning
   * @description Swedish publishers preliminary subject classification
   * @default '50'
   */
  Forhandsbeskrivning = <any>'50',

  /**
   * Spanish ISBN UDC subset
   * @description Controlled subset of UDC codes used by the Spanish ISBN Agency
   * @default '51'
   */
  SpanishIsbnUdcSubset = <any>'51',

  /**
   * ECI subject categories
   * @description Subject categories defined by El Corte Inglés and used widely in the Spanish book trade
   * @default '52'
   */
  EciSubjectCategories = <any>'52',

  /**
   * Soggetto CCE
   * @description Classificazione commerciale editoriale (Italian book trade subject category based on BIC). CCE documentation available at https://www.ie-online.it/CCE2_2.0.pdf
   * @default '53'
   */
  SoggettoCce = <any>'53',

  /**
   * Qualificatore geografico CCE
   * @description CCE Geographical qualifier
   * @default '54'
   */
  QualificatoreGeograficoCce = <any>'54',

  /**
   * Qualificatore di lingua CCE
   * @description CCE Language qualifier
   * @default '55'
   */
  QualificatoreDiLinguaCce = <any>'55',

  /**
   * Qualificatore di periodo storico CCE
   * @description CCE Time Period qualifier
   * @default '56'
   */
  QualificatoreDiPeriodoStoricoCce = <any>'56',

  /**
   * Qualificatore di livello scolastico CCE
   * @description CCE Educational Purpose qualifier
   * @default '57'
   */
  QualificatoreDiLivelloScolasticoCce = <any>'57',

  /**
   * Qualificatore di età di lettura CCE
   * @description CCE Reading Level Qualifier
   * @default '58'
   */
  QualificatoreDiEtaDiLetturaCce = <any>'58',

  /**
   * VdS Bildungsmedien Fächer
   * @description Subject code list of the German association of educational media publishers. See http://www.bildungsmedien.de/service/onixlisten/unterrichtsfach_onix_codelist27_value59_0408.pdf
   * @default '59'
   */
  VdSBildungsmedienFacher = <any>'59',

  /**
   * Fagkoder
   * @description Norwegian primary and secondary school subject categories (fagkoder), see http://www.udir.no/
   * @default '60'
   */
  Fagkoder = <any>'60',

  /**
   * JEL classification
   * @description Journal of Economic Literature classification scheme
   * @default '61'
   */
  JelClassification = <any>'61',

  /**
   * CSH
   * @description National Library of Canada subject heading (English)
   * @default '62'
   */
  Csh = <any>'62',

  /**
   * RVM
   * @description Répertoire de vedettes-matière Bibliothèque de l’Université Laval) (French)
   * @default '63'
   */
  Rvm = <any>'63',

  /**
   * YSA
   * @description Finnish General Thesaurus (Finnish: Yleinen suomalainen asiasanasto). See https://finto.fi/ysa/fi/ (in Finnish). Deprecated. No longer updated, and replaced by YSO (see code 71)
   * @deprecated
   * @default '64'
   */
  Ysa = <any>'64',

  /**
   * Allärs
   * @description Swedish translation of the Finnish General Thesaurus (Swedish: Allmän tesaurus på svenska). See https://finto.fi/allars/sv/ (in Swedish). Deprecated. No longer updated, and replaced by YSO (see code 71)
   * @deprecated
   * @default '65'
   */
  Allars = <any>'65',

  /**
   * YKL
   * @description Finnish Public Libraries Classification System (Finnish: Yleisten kirjastojen luokitusjärjestelmä). See  (in Finnish),
   * @default '66'
   */
  Ykl = <any>'66',

  /**
   * MUSA
   * @description Finnish Music Thesaurus (Finnish: Musiikin asiasanasto). See  (in Finnish). Deprecated
   * @deprecated
   * @default '67'
   */
  Musa = <any>'67',

  /**
   * CILLA
   * @description Swedish translation of the Finnish Music Thesaurus (Swedish: Specialtesaurus för musik). See  (in Swedish)
   * @default '68'
   */
  Cilla = <any>'68',

  /**
   * Kaunokki
   * @description Finnish thesaurus for fiction (Finnish: Fiktiivisen aineiston asiasanasto). See  (in Finnish). Deprecated
   * @deprecated
   * @default '69'
   */
  Kaunokki = <any>'69',

  /**
   * Bella
   * @description Swedish translation of the Finnish thesaurus for fiction (Swedish: Specialtesaurus för fiktivt material). See  (in Swedish).
   * @default '70'
   */
  Bella = <any>'70',

  /**
   * YSO
   * @description y (Finnish: Yleinen suomalainen ontologia). See  (in Finnish),
   * @default '71'
   */
  Yso = <any>'71',

  /**
   * PTO
   * @description Finnish  Ontology (Finnish: Paikkatieto ontologia). See
   * @default '72'
   */
  Pto = <any>'72',

  /**
   * Suomalainen kirja-alan luokitus
   * @description Finnish book trade categorisation
   * @default '73'
   */
  SuomalainenKirjaAlanLuokitus = <any>'73',

  /**
   * Sears
   * @description Sears List of Subject Headings
   * @default '74'
   */
  Sears = <any>'74',

  /**
   * BIC E4L
   * @description BIC E4Libraries Category Headings, see http://www.bic.org.uk/51/E4libraries-Subject-Category-Headings/
   * @default '75'
   */
  BicE4L = <any>'75',

  /**
   * CSR
   * @description Code Sujet Rayon: subject categories used by bookstores in France
   * @default '76'
   */
  Csr = <any>'76',

  /**
   * Suomalainen oppiaineluokitus
   * @description F See https://www.onixkeskus.fi/media/f/56 i
   * @default '77'
   */
  SuomalainenOppiaineluokitus = <any>'77',

  /**
   * Japanese book trade C-Code
   * @description See https://isbn.jpo.or.jp/doc/08.pdf#page=44 (in Japanese)
   * @default '78'
   */
  JapaneseBookTradeCCode = <any>'78',

  /**
   * Japanese book trade Genre Code
   * @description 
   * @default '79'
   */
  JapaneseBookTradeGenreCode = <any>'79',

  /**
   * Fiktiivisen aineiston lisäluokitus
   * @description Finnish fiction genre classification. See  (in Finnish)
   * @default '80'
   */
  FiktiivisenAineistonLisaluokitus = <any>'80',

  /**
   * Arabic Subject heading scheme
   * @description 
   * @default '81'
   */
  ArabicSubjectHeadingScheme = <any>'81',

  /**
   * Arabized BIC subject category
   * @description Arabized version of BIC subject category scheme developed by ElKotob.com
   * @default '82'
   */
  ArabizedBicSubjectCategory = <any>'82',

  /**
   * Arabized LC subject headings
   * @description Arabized version of Library of Congress scheme
   * @default '83'
   */
  ArabizedLcSubjectHeadings = <any>'83',

  /**
   * Bibliotheca Alexandrina Subject Headings
   * @description Classification scheme used by Library of Alexandria
   * @default '84'
   */
  BibliothecaAlexandrinaSubjectHeadings = <any>'84',

  /**
   * Postal code
   * @description Location defined by postal code. Format is two-letter country code (from List 91), space, postal code. Note some postal codes themselves contain spaces, eg ‘GB N7 9DP’ or ‘US 10125’
   * @default '85'
   */
  PostalCode = <any>'85',

  /**
   * GeoNames ID
   * @description ID number for geographical place, as defined at http://www.geonames.org (eg 2825297 is Stuttgart, Germany, see http://www.geonames.org/2825297)
   * @default '86'
   */
  GeoNamesId = <any>'86',

  /**
   * NewBooks Subject Classification
   * @description Used for classification of academic and specialist publication in German-speaking countries. See http://www.newbooks-services.com/de/top/unternehmensportrait/klassifikation-und-mapping.html (German) and http://www.newbooks-services.com/en/top/about-newbooks/classification-mapping.html (English)
   * @default '87'
   */
  NewBooksSubjectClassification = <any>'87',

  /**
   * Chinese Library Classification
   * @description Subject classification maintained by the Editorial Board of Chinese Library Classification. See http://cct.nlc.gov.cn for access to details of the scheme
   * @default '88'
   */
  ChineseLibraryClassification = <any>'88',

  /**
   * NTCPDSAC Classification
   * @description Subject classification for Books, Audiovisual products and E-publications formulated by China National Technical Committee 505
   * @default '89'
   */
  NtcpdsacClassification = <any>'89',

  /**
   * Season and Event Indicator
   * @description German code scheme indicating association with seasons, holidays, events (eg Autumn, Back to School, Easter)
   * @default '90'
   */
  SeasonAndEventIndicator = <any>'90',

  /**
   * GND
   * @description Gemeinsame Normdatei – Joint Authority File in the German-speaking countries. See http://www.dnb.de/EN/gnd (English). Combines the PND, SWD and GKD into a single authority file, and should be used in preference to the older codes
   * @default '91'
   */
  Gnd = <any>'91',

  /**
   * BIC UKSLC
   * @description UK Standard Library Categories, the successor to BIC’s E4L classification scheme. See https://www.bic.org.uk/51/UK-Standard-Library-Categories/
   * @default '92'
   */
  BicUkslc = <any>'92',

  /**
   * Thema subject category
   * @description International multilingual subject category scheme – see https://ns.editeur.org/thema
   * @default '93'
   */
  ThemaSubjectCategory = <any>'93',

  /**
   * Thema place qualifier
   * @description 
   * @default '94'
   */
  ThemaPlaceQualifier = <any>'94',

  /**
   * Thema language qualifier
   * @description 
   * @default '95'
   */
  ThemaLanguageQualifier = <any>'95',

  /**
   * Thema time period qualifier
   * @description 
   * @default '96'
   */
  ThemaTimePeriodQualifier = <any>'96',

  /**
   * Thema educational purpose qualifier
   * @description 
   * @default '97'
   */
  ThemaEducationalPurposeQualifier = <any>'97',

  /**
   * Thema interest age / special interest qualifier
   * @description 
   * @default '98'
   */
  ThemaInterestAgeSpecialInterestQualifier = <any>'98',

  /**
   * Thema style qualifier
   * @description 
   * @default '99'
   */
  ThemaStyleQualifier = <any>'99',

  /**
   * Ämnesord
   * @description Swedish subject categories maintained by Bokrondellen
   * @default 'A2'
   */
  Amnesord = <any>'A2',

  /**
   * Statystyka Książek Papierowych, Mówionych I Elektronicznych
   * @description Polish Statistical Book and E-book Classification
   * @default 'A3'
   */
  StatystykaKsiazekPapierowychMowionychIElektronicznych = <any>'A3',

  /**
   * CCSS
   * @description Common Core State Standards curriculum alignment, for links to US educational standards. <SubjectCode> uses the full dot notation. See http://www.corestandards.org/developers-and-publishers
   * @default 'A4'
   */
  Ccss = <any>'A4',

  /**
   * Rameau
   * @description French library subject headings
   * @default 'A5'
   */
  Rameau = <any>'A5',

  /**
   * Nomenclature discipline scolaire
   * @description French educational subject classification, URI http://data.education.fr/voc/scolomfr/scolomfr-voc-015GTPX
   * @default 'A6'
   */
  NomenclatureDisciplineScolaire = <any>'A6',

  /**
   * ISIC
   * @description International Standard Industry Classification, a classification of economic activities. Use for books that are about a particular industry or economic activity. <SubjectCode> should be a single letter denoting an ISIC section OR a 2-, 3- or 4-digit number denoting an ISIC division, group or class. See http://unstats.un.org/unsd/cr/registry/isic-4.asp
   * @default 'A7'
   */
  Isic = <any>'A7',

  /**
   * LC Children’s Subject Headings
   * @description Library of Congress Children’s Subject Headings: LCSHAC supplementary headings for Children’s books
   * @default 'A8'
   */
  LcChildrenSubjectHeadings = <any>'A8',

  /**
   * Ny Läromedel
   * @description Swedish bookselling educational subject
   * @default 'A9'
   */
  NyLaromedel = <any>'A9',

  /**
   * EuroVoc
   * @description EuroVoc multilingual thesaurus. <SubjectCode> should be a EuroVoc concept dc:identifier (for example, 2777, ‘refrigerated products’). See http://eurovoc.europa.eu
   * @default 'B0'
   */
  EuroVoc = <any>'B0',

  /**
   * BISG Educational Taxonomy
   * @description Controlled vocabulary for educational objectives. See https://bisg.org/page/EducationalTaxonomy
   * @default 'B1'
   */
  BisgEducationalTaxonomy = <any>'B1',

  /**
   * Nomenclature Diplôme
   * @description French higher and vocational educational subject classification, URI http://data.education.fr/voc/scolomfr/scolomfr-voc-029
   * @default 'B3'
   */
  NomenclatureDiplome = <any>'B3',

  /**
   * Key character names
   * @description For fiction and non-fiction, one or more key names, provided – like keywords – for indexing and search purposes. Where multiple character names are sent, this should be in a single instance of <SubjectHeadingText>, and multiple names should be separated by semi-colons. Note <NameAsSubject> should be used for people who are the central subject of the book. Code B4 may be used for names of lesser importance
   * @default 'B4'
   */
  KeyCharacterNames = <any>'B4',

  /**
   * Key place names
   * @description For fiction and non-fiction, one or more key names, provded – like keywords – for indexing and search purposes. Where multiple place names are sent, this should in a single instance of <SubjectHeadingText>, and multiple names should be separated by semi-colons. For use in ONIX 3.0 only
   * @default 'B5'
   */
  KeyPlaceNames = <any>'B5',

  /**
   * FAST
   * @description Faceted Application of Subject Terminology, OCLC subject scheme based on but different from LCSH (see code 04). For use in ONIX 3.0 only
   * @default 'B6'
   */
  Fast = <any>'B6',

  /**
   * NGSS
   * @description Next Generation Science Standards for K-12 education in the USA (https://www.nextgenscience.org). <SubjectCode> is a code such as 4-PS3-2. For use in ONIX 3.0 only
   * @default 'B7'
   */
  Ngss = <any>'B7',

  /**
   * MVB-Lesemotive
   * @description MVB classification of ‘reading rationales’, which classify unconscious motives that lead to a book purchase. Categories are assigned and maintained by MVB. For use in ONIX 3.0 only. See https://vlb.de/lesemotive
   * @default 'B8'
   */
  MvbLesemotive = <any>'B8',

  /**
   * LOPS21 Subject module
   * @description Finnish Suomalainen oppiaineluokitus. For use in ONIX 3.0 only
   * @default 'B9'
   */
  Lops21SubjectModule = <any>'B9',

  /**
   * Læreplaner-LK20
   * @description Codes for Norwegian curriculum for primary and secondary education. For use in ONIX 3.0 only. See Læreplaner-LK20 at https://www.udir.no/om-udir/data/kl06-grep/
   * @default 'C0'
   */
  LaereplanerLk20 = <any>'C0',

  /**
   * Kompetansemål-LK20
   * @description Codes for competency aims in the Norwegian curriculum for primary and secondary education. For use in ONIX 3.0 only. See Kompetansemål-LK20 at https://www.udir.no/om-udir/data/kl06-grep/
   * @default 'C1'
   */
  KompetansemalLk20 = <any>'C1',

  /**
   * Kompetansemålsett-LK20
   * @description Codes for sets of competency aims in the Norwegian curriculum for primary and secondary education. For use in ONIX 3.0 only. See Kompetansemålsett-LK20 at https://www.udir.no/om-udir/data/kl06-grep/
   * @default 'C2'
   */
  KompetansemalsettLk20 = <any>'C2',

  /**
   * Tverrfaglige temaer-LK20
   * @description Codes for interdisciplinary topics in the Norwegian curriculum for primary and secondary education. For use in ONIX 3.0 only. See Tverrfaglige temaer-LK20 at https://www.udir.no/om-udir/data/kl06-grep/
   * @default 'C3'
   */
  TverrfagligeTemaerLk20 = <any>'C3',

  /**
   * CLIL – Type d’article scolaire
   * @description For use in ONIX 3.0 only
   * @default 'C4'
   */
  ClilTypeDArticleScolaire = <any>'C4',

  /**
   * GAR – Type pédagogique
   * @description Gestionnaire d’Accès aux resources – see https://gar.education.fr/ For use in ONIX 3.0 only
   * @default 'C5'
   */
  GarTypePedagogique = <any>'C5',

  /**
   * ISCED-F
   * @description UNESCO ISCED Fields of education and training (2013), eg <SubjectCode> 0222 is ‘History and archaeology’. For use in ONIX 3.0 only. See http://uis.unesco.org/sites/default/files/documents/international-standard-classification-of-education-fields-of-education-and-training-2013-detailed-field-descriptions-2015-en.pdf
   * @default 'C6'
   */
  IscedF = <any>'C6',

  /**
   * Klassifikationen von Spielen, Puzzles und Spielwaren
   * @description German category scheme for games, puzzles and toys. For use in ONIX 3.0 only. See https://www.ludologie.de/fileadmin/user_upload/PDFs/211126_Kategorisierung_von_Spielen_Puzzles_und_Spielwaren.pdf
   * @default 'C7'
   */
  KlassifikationenVonSpielenPuzzlesUndSpielwaren = <any>'C7',

  /**
   * NBVok
   * @description National Library of Norway genre and form thesaurus. For use in ONIX 3.0 only. See https://www.nb.no/nbvok/ntsf
   * @default 'C8'
   */
  NbVok = <any>'C8',

  /**
   * JPRO Genre
   * @description Subject / genre code used in Japan
   * @default 'C9'
   */
  JproGenre = <any>'C9',

  /**
   * KAUNO
   * @description Finnish Ontology for fiction (Finnish: Fiktiivisen aineiston ontologia). See https://finto.fi/kauno/fi/ (in Finnish), https://finto.fi/kauno/sv/ (in Swedish), https://finto.fi/kauno/en/ (in English)
   * @default 'D0'
   */
  Kauno = <any>'D0',

  /**
   * SLM
   * @description Finnish genre and form vocabulary (Finnish: Suomalainen lajityyppi ja muotosanasto). See https://finto.fi/slm/fi/ (in Finnish), https://finto.fi/slm/sv/ (in Swedish), https://finto.fi/slm/en/ (in English)
   * @default 'D1'
   */
  Slm = <any>'D1',

  /**
   * YSO-places
   * @description General Finnish Ontology for Places (Finnish: Yleinen suomalainen ontologia – paikat). See https://finto.fi/yso-paikat/fi/ (in Finnish), https://finto.fi/yso-paikat/sv/ (in Swedish), https://finto.fi/yso-paikat/en/ (in English)
   * @default 'D2'
   */
  YsoPlaces = <any>'D2',
}
