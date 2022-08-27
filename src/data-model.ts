export interface ListMetadata {
  enumName: string;
  aliases: string[];
  listNumber: string;
  filename: string;
}

export interface EnumMemberDefinition {
  key: string;
  value: string;
  description: string;
  notes: string;
  deprecated?: boolean;
}
