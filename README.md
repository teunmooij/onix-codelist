# onix-codelist
Typescript implementation of the ONIX 3.0 Code lists as specified by [EDItEUR](https://www.editeur.org)

These code list are up to date with issue 58 of the ONIX 3.0 standard. 

## Installation

```shell
$ npm install onix-codelist
```

## Usage

`onix-codelist` provides 2 way mapping for all Onix 3.0 code lists.

Code lists can be use by name:

```typescript
import { productComposition } from 'onix-codelist';

const code = productComposition.MultipleComponentRetailProduct; // code = '10'
const type = productComposition[code]; // type = 'MultipleComponentRetailProduct'
```

Code lists can also be use by number:

```typescript
import { list2 } from 'onix-codelist';

const code = list2.MultipleComponentRetailProduct; // code = '10'
const type = list2[code]; // type = 'MultipleComponentRetailProduct'
```



