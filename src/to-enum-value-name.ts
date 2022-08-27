import { Override } from './overrides';
import { PascalCase } from './pascal-case';

const startsWithNumberPattern = /^\d/;

export const initToEnumValueName =
  ({ values: valueOverrides = [], literal }: Override = {}) =>
  (input: string) => {
    const override = valueOverrides.find(o => o.from === input);
    if (override) return override.to || override.from;
    if (literal) return input;

    const pascal = PascalCase(input);
    if (startsWithNumberPattern.test(input)) return `'${pascal}'`;
    return pascal;
  };
