import * as R from 'ramda';
import { EnumMemberDefinition } from './data-model';

export const fixDuplicateKeys = (enumMembers: EnumMemberDefinition[]) => {
  const membersByKey = R.groupBy(mem => mem.key, enumMembers);
  if (Object.keys(membersByKey).length === enumMembers.length) return enumMembers;

  return Object.entries(membersByKey).reduce((total, [key, members]) => {
    if (members.length === 1) return [...total, ...members];

    const grouped = R.groupBy(mem => (mem.deprecated ? 'D' : 'N'), members);
    const basic = (grouped.N || [grouped.D[0]]).map((mem, index) => ({
      ...mem,
      key: index === 0 ? key : `${key}_${index}`,
    }));
    const remaining = grouped.N ? grouped.D || [] : grouped.D.slice(1);
    const deprecated = remaining.map((mem, index) => ({
      ...mem,
      key: index === 0 ? `${key}_deprecated` : `${key}_deprecated_${index}`,
    }));

    return [...total, ...basic, ...deprecated];
  }, [] as EnumMemberDefinition[]);
};
