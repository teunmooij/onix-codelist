// This code has been generated with a script

/**
 * Enum WorkRelation
 * @readonly
 * @enum { string }
 * @description List 164: Work relation
 */
export enum WorkRelation {

  /**
   * Manifestation of
   * @description Product X is or includes a manifestation of work Y. (There is a direct parent-child relation between work Y and the product)
   * @default '01'
   */
  ManifestationOf = <any>'01',

  /**
   * Derived from
   * @description Product X is or includes a manifestation of a work derived (directly) from related work Y in one or more of the ways specified in ISTC rules. (There is a relationship between a grandparent work Y and a parent work Z, and between that parent work and the product.) This relation type is intended to enable products with a common ‘grandparent’ work to be linked without specifying the precise nature of their derivation, and without necessarily assigning an identifier to the product’s parent
   * @default '02'
   */
  DerivedFrom = <any>'02',

  /**
   * Related work is derived from this
   * @description Product X is a manifestation of a work from which related work Y is (directly) derived in one or more of the ways specified in ISTC rules. (There is a relationship between a parent work and a child work Y, and between the parent work and the product)
   * @default '03'
   */
  RelatedWorkIsDerivedFromThis = <any>'03',

  /**
   * Other work in same collection
   * @description Product X is a manifestation of a work in the same collection as related work Y
   * @default '04'
   */
  OtherWorkInSameCollection = <any>'04',

  /**
   * Other work by same contributor
   * @description Product X is a manifestation of a work by the same contributor(s) as related work Y
   * @default '05'
   */
  OtherWorkBySameContributor = <any>'05',
}
