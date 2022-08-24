"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const domutils_1 = require("domutils");
const dom_serializer_1 = __importDefault(require("dom-serializer"));
const promises_1 = __importDefault(require("fs/promises"));
const htmlparser2_1 = require("htmlparser2");
const camel_case_1 = require("camel-case");
const xml_js_1 = require("xml-js");
const handlebars_1 = __importDefault(require("handlebars"));
const VALUE = 0;
const DESCRIPTION = 1;
const NOTES = 2;
const awaitingDefinition = ['88', '251'];
const getRowCellText = (row) => (cellNumber) => {
    const cell = row.td[cellNumber];
    if (cell.span) {
        const texts = [cell.text[0], cell.span.text, cell.text[1]];
        return texts.join(' ');
    }
    return cell.text;
};
const isFaultyRows = (rows) => {
    var _a, _b;
    if (Array.isArray(rows))
        return false;
    return ((_b = (_a = rows === null || rows === void 0 ? void 0 : rows.td) === null || _a === void 0 ? void 0 : _a._attributes) === null || _b === void 0 ? void 0 : _b.colspan) === '3';
};
const PascalCase = (input) => {
    const camel = (0, camel_case_1.camelCase)(input);
    return camel[0].toUpperCase() + camel.substring(1);
};
const readList = (filename) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const html = yield promises_1.default.readFile(filename, { encoding: 'utf-8' });
        const document = (0, htmlparser2_1.parseDocument)(html);
        const titleElement = (0, domutils_1.findOne)(elem => elem.tagName === 'h2', document.children);
        const tableElement = (0, domutils_1.findOne)(elem => elem.tagName === 'table', document.children);
        if (!titleElement)
            throw new Error(`title not found for file ${filename}`);
        if (!tableElement)
            throw new Error(`table not found for file ${filename}`);
        const titleText = (0, domutils_1.innerText)(titleElement);
        const shortTitle = (0, camel_case_1.camelCase)(titleText.split(':')[1].trim());
        const listNumber = titleText.split(':')[0].split(' ')[1].trim();
        const fileName = `list-${listNumber}`;
        const enumInfo = {
            fullTitle: titleText.trim(),
            shortTitle,
            fileName,
            listNumber,
        };
        const tableText = (0, dom_serializer_1.default)(tableElement);
        const tableDoc = (0, xml_js_1.xml2js)(tableText, { compact: true, trim: true, textKey: 'text' });
        if (awaitingDefinition.includes(listNumber) && isFaultyRows(tableDoc.table.tbody.tr)) {
            return enumInfo;
        }
        const rows = Array.isArray(tableDoc.table.tbody.tr) ? tableDoc.table.tbody.tr : [tableDoc.table.tbody.tr];
        const enumMembers = rows.map(row => {
            const getText = getRowCellText(row);
            const description = getText(DESCRIPTION);
            return {
                key: PascalCase(description),
                value: getText(VALUE),
                description,
                notes: getText(NOTES),
            };
        });
        return Object.assign(Object.assign({}, enumInfo), { enumMembers });
    }
    catch (error) {
        console.warn(`Failed in list ${filename} `, error);
        throw error;
    }
});
const createFolders = () => __awaiter(void 0, void 0, void 0, function* () {
    yield promises_1.default.mkdir('src/lists', { recursive: true });
});
const generateLists = () => __awaiter(void 0, void 0, void 0, function* () {
    yield createFolders();
    const enumTemplateText = yield promises_1.default.readFile('scripts/enum.template', { encoding: 'utf-8' });
    const enumTemplate = handlebars_1.default.compile(enumTemplateText);
    const generateList = (filename) => __awaiter(void 0, void 0, void 0, function* () {
        const list = yield readList(filename);
        yield promises_1.default.writeFile(`src/lists/${list.fileName}.ts`, enumTemplate(list));
        return {
            enumName: list.shortTitle,
            listNumber: list.listNumber,
            filename: list.fileName,
        };
    });
    const files = yield promises_1.default.readdir('html-lists');
    const declarations = yield Promise.all(files.map(file => generateList(`html-lists/${file}`)));
    const indexTemplateText = yield promises_1.default.readFile('scripts/index.template', { encoding: 'utf-8' });
    const indexTemplate = handlebars_1.default.compile(indexTemplateText);
    yield promises_1.default.writeFile('src/index.ts', indexTemplate({ declarations: declarations.slice().sort((a, b) => Number(a.listNumber) - Number(b.listNumber)) }));
});
generateLists();
//# sourceMappingURL=generate-lists.js.map