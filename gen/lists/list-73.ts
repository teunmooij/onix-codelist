// This code has been generated with a script

/**
 * Enum WebsiteRole
 * @readonly
 * @enum { string }
 * @description List 73: Website role
 */
export enum WebsiteRole {

  /**
   * Unspecified, see website description
   * @description 
   * @default '00'
   */
  UnspecifiedSeeWebsiteDescription = <any>'00',

  /**
   * Publisher’s corporate website
   * @description See also codes 17 and 18
   * @default '01'
   */
  PublisherCorporateWebsite = <any>'01',

  /**
   * Publisher’s website for a specified work
   * @description A publisher’s informative and/or promotional webpage relating to a specified work (book, journal, online resource or other publication type)
   * @default '02'
   */
  PublisherWebsiteForASpecifiedWork = <any>'02',

  /**
   * Online hosting service home page
   * @description A webpage giving access to an online content hosting service as a whole
   * @default '03'
   */
  OnlineHostingServiceHomePage = <any>'03',

  /**
   * Journal home page
   * @description A webpage giving general information about a serial, in print or electronic format or both
   * @default '04'
   */
  JournalHomePage = <any>'04',

  /**
   * Online resource ‘available content’ page
   * @description A webpage giving direct access to the content that is available online for a specified resource version. Generally used for content available online under subscription terms
   * @default '05'
   */
  OnlineResourceAvailableContentPage = <any>'05',

  /**
   * Contributor’s own website
   * @description A webpage maintained by an author or other contributor about her/his publications and personal background
   * @default '06'
   */
  ContributorOwnWebsite = <any>'06',

  /**
   * Publisher’s website relating to specified contributor
   * @description A publisher’s webpage devoted to a specific author or other contributor
   * @default '07'
   */
  PublisherWebsiteRelatingToSpecifiedContributor = <any>'07',

  /**
   * Other publisher’s website relating to specified contributor
   * @description A webpage devoted to a specific author or other contributor, and maintained by a publisher other than the publisher of the item described in the ONIX record
   * @default '08'
   */
  OtherPublisherWebsiteRelatingToSpecifiedContributor = <any>'08',

  /**
   * Third-party website relating to specified contributor
   * @description A webpage devoted to a specific author or other contributor, and maintained by a third party (eg a fan site)
   * @default '09'
   */
  ThirdPartyWebsiteRelatingToSpecifiedContributor = <any>'09',

  /**
   * Contributor’s own website for specified work
   * @description A webpage maintained by an author or other contributor and specific to an individual work
   * @default '10'
   */
  ContributorOwnWebsiteForSpecifiedWork = <any>'10',

  /**
   * Other publisher’s website relating to specified work
   * @description A webpage devoted to an individual work, and maintained by a publisher other than the publisher of the item described in the ONIX record
   * @default '11'
   */
  OtherPublisherWebsiteRelatingToSpecifiedWork = <any>'11',

  /**
   * Third-party website relating to specified work
   * @description A webpage devoted to an individual work, and maintained by a third party (eg a fan site)
   * @default '12'
   */
  ThirdPartyWebsiteRelatingToSpecifiedWork = <any>'12',

  /**
   * Contributor’s own website for group or series of works
   * @description A webpage maintained by an author or other contributor and specific to a group or series of works
   * @default '13'
   */
  ContributorOwnWebsiteForGroupOrSeriesOfWorks = <any>'13',

  /**
   * Publisher’s website relating to group or series of works
   * @description A publisher’s webpage devoted to a group or series of works
   * @default '14'
   */
  PublisherWebsiteRelatingToGroupOrSeriesOfWorks = <any>'14',

  /**
   * Other publisher’s website relating to group or series of works
   * @description A webpage devoted to a group or series of works, and maintained by a publisher other than the publisher of the item described in the ONIX record
   * @default '15'
   */
  OtherPublisherWebsiteRelatingToGroupOrSeriesOfWorks = <any>'15',

  /**
   * Third-party website relating to group or series of works (eg a fan site)
   * @description A webpage devoted to a group or series of works, and maintained by a third party (eg a fan site)
   * @default '16'
   */
  ThirdPartyWebsiteRelatingToGroupOrSeriesOfWorks = <any>'16',

  /**
   * Publisher’s B2B website
   * @description Use instead of code 01 to specify a publisher’s website for trade users
   * @default '17'
   */
  PublisherB2BWebsite = <any>'17',

  /**
   * Publisher’s B2C website
   * @description Use instead of code 01 to specify a publisher’s website for end customers (consumers)
   * @default '18'
   */
  PublisherB2CWebsite = <any>'18',

  /**
   * Author blog
   * @description For example, a Blogger or Tumblr URL, a Wordpress website or other blog URL
   * @default '23'
   */
  AuthorBlog = <any>'23',

  /**
   * Web page for author presentation / commentary
   * @description 
   * @default '24'
   */
  WebPageForAuthorPresentationCommentary = <any>'24',

  /**
   * Web page for author interview
   * @description 
   * @default '25'
   */
  WebPageForAuthorInterview = <any>'25',

  /**
   * Web page for author reading
   * @description 
   * @default '26'
   */
  WebPageForAuthorReading = <any>'26',

  /**
   * Web page for cover material
   * @description 
   * @default '27'
   */
  WebPageForCoverMaterial = <any>'27',

  /**
   * Web page for sample content
   * @description 
   * @default '28'
   */
  WebPageForSampleContent = <any>'28',

  /**
   * Web page for full content
   * @description Use this value in the <Website> composite (typically within <Publisher> or <SupplyDetail>) when sending a link to a webpage at which a digital product is available for download and/or online access
   * @default '29'
   */
  WebPageForFullContent = <any>'29',

  /**
   * Web page for other commentary / discussion
   * @description For example a subscribable podcast hosting site, social media message, newsletter issue, other commentary
   * @default '30'
   */
  WebPageForOtherCommentaryDiscussion = <any>'30',

  /**
   * Transfer-URL
   * @description URL needed by the German National Library for direct access, harvesting and storage of an electronic resource
   * @default '31'
   */
  TransferUrl = <any>'31',

  /**
   * DOI Website Link
   * @description Link needed by German Books in Print (VLB) for DOI registration and ONIX DOI conversion
   * @default '32'
   */
  DoiWebsiteLink = <any>'32',

  /**
   * Supplier’s corporate website
   * @description A corporate website operated by a distributor or other supplier (not the publisher)
   * @default '33'
   */
  SupplierCorporateWebsite = <any>'33',

  /**
   * Supplier’s B2B website
   * @description A website operated by a distributor or other supplier (not the publisher) and aimed at trade customers
   * @default '34'
   */
  SupplierB2BWebsite = <any>'34',

  /**
   * Supplier’s B2C website
   * @description A website operated by a distributor or other supplier (not the publisher) and aimed at consumers
   * @default '35'
   */
  SupplierB2CWebsite = <any>'35',

  /**
   * Supplier’s website for a specified work
   * @description A distributor or supplier’s webpage describing a specified work
   * @default '36'
   */
  SupplierWebsiteForASpecifiedWork = <any>'36',

  /**
   * Supplier’s B2B website for a specified work
   * @description A distributor or supplier’s webpage describing a specified work, and aimed at trade customers
   * @default '37'
   */
  SupplierB2BWebsiteForASpecifiedWork = <any>'37',

  /**
   * Supplier’s B2C website for a specified work
   * @description A distributor or supplier’s webpage describing a specified work, and aimed at consumers
   * @default '38'
   */
  SupplierB2CWebsiteForASpecifiedWork = <any>'38',

  /**
   * Supplier’s website for a group or series of works
   * @description A distributor or supplier’s webpage describing a group or series of works
   * @default '39'
   */
  SupplierWebsiteForAGroupOrSeriesOfWorks = <any>'39',

  /**
   * URL of full metadata description
   * @description For example an ONIX or MARC record for the product, available online
   * @default '40'
   */
  UrlOfFullMetadataDescription = <any>'40',

  /**
   * Social networking URL for specific work or product
   * @description For example, a Facebook, Google+, Instagram, Youtube, Pinterest, Tiktok, Twitter or similar URL for the product or work
   * @default '41'
   */
  SocialNetworkingUrlForSpecificWorkOrProduct = <any>'41',

  /**
   * Author’s social networking URL
   * @description For example, a Facebook, Google+, Instagram, Youtube, Pinterest, Tiktok, Twitter or similar page
   * @default '42'
   */
  AuthorSocialNetworkingUrl = <any>'42',

  /**
   * Publisher’s social networking URL
   * @description For example, a Facebook, Google+, Instagram, Youtube, Pinterest, Tiktok, Twitter or similar page
   * @default '43'
   */
  PublisherSocialNetworkingUrl = <any>'43',

  /**
   * Social networking URL for specific article, chapter or content item
   * @description For example, a Facebook, Google+, Instagram, Youtube, Pinterest, Tiktok, Twitter or similar page. Use only in the context of a specific content item (eg within <ContentItem>)
   * @default '44'
   */
  SocialNetworkingUrlForSpecificArticleChapterOrContentItem = <any>'44',

  /**
   * Publisher’s or third party website for permissions requests
   * @description For example, a service offering click-through licensing of extracts
   * @default '45'
   */
  PublisherOrThirdPartyWebsiteForPermissionsRequests = <any>'45',

  /**
   * Publisher’s or third party website for privacy statement
   * @description For example, a page providing details related to GDPR. For use in ONIX 3.0 only
   * @default '46'
   */
  PublisherOrThirdPartyWebsiteForPrivacyStatement = <any>'46',

  /**
   * Publisher’s website for digital preservation
   * @description The URL of the publisher’s preservation service, or a more specific URL for access to its preserved copy. For use in ONIX 3.0 only
   * @default '47'
   */
  PublisherWebsiteForDigitalPreservation = <any>'47',

  /**
   * Third-party website for digital preservation
   * @description The URL of the preservation service (eg https://clockss.org), or a more specific URL for access to its preserved copy. For use in ONIX 3.0 only
   * @default '48'
   */
  ThirdPartyWebsiteForDigitalPreservation = <any>'48',

  /**
   * Product website for environmental responsibility statement
   * @description The URL of a web page describing the environmental and sustainability policy, or carbon neutrality status, that applies to the specific product. For use in ONIX 3.0 only
   * @default '49'
   */
  ProductWebsiteForEnvironmentalResponsibilityStatement = <any>'49',

  /**
   * Organisation’s website for environmental responsibility statement
   * @description The URL of a web page describing the environmental and sustainability policies, carbon neutrality status, etc of the organisation (publisher, supplier etc). For use in ONIX 3.0 only
   * @default '50'
   */
  OrganisationWebsiteForEnvironmentalResponsibilityStatement = <any>'50',
}
