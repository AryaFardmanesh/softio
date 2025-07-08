/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 885:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const stdout_1 = __webpack_require__(389);
const base_1 = __webpack_require__(273);
const color_1 = __webpack_require__(285);
const style_1 = __webpack_require__(491);
const cursor_1 = __webpack_require__(890);
const erase_1 = __webpack_require__(676);
class Attr {
    static get title() {
        return process.title;
    }
    static set title(value) {
        if (typeof value !== 'string') {
            throw new TypeError(`The 'title' property only takes a string as a title.`);
        }
        process.title = value;
    }
    static get width() {
        return stdout_1.stdout.columns;
    }
    static get height() {
        return stdout_1.stdout.rows;
    }
    static reset() {
        stdout_1.stdout.write((0, base_1.makeANSI)(['0']));
    }
    static color(color) {
        if (Array.isArray(color)) {
            stdout_1.stdout.write((0, base_1.makeANSI)(['38', '2', color[0], color[1], color[2]]));
            return;
        }
        if (typeof color == 'string' && (0, color_1.isValidHex)(color)) {
            const rgb = (0, color_1.convertHexToRGB)(color);
            stdout_1.stdout.write((0, base_1.makeANSI)(['38', '2', rgb[0], rgb[1], rgb[2]]));
            return;
        }
        stdout_1.stdout.write((0, color_1.convertTextColorToANSI)(color));
    }
    static colorRGB(red, green, blue) {
        stdout_1.stdout.write((0, base_1.makeANSI)(['38', '2', red, green, blue]));
    }
    static colorHex(hex) {
        if (!(0, color_1.isValidHex)(hex)) {
            throw new TypeError(`Attr.colorHex: '${hex}' is not valid Hex value.`);
        }
        const rgb = (0, color_1.convertHexToRGB)(hex);
        stdout_1.stdout.write((0, base_1.makeANSI)(['38', '2', rgb[0], rgb[1], rgb[2]]));
    }
    static background(color) {
        if (Array.isArray(color)) {
            stdout_1.stdout.write((0, base_1.makeANSI)(['48', '2', color[0], color[1], color[2]]));
            return;
        }
        if (typeof color == 'string' && (0, color_1.isValidHex)(color)) {
            const rgb = (0, color_1.convertHexToRGB)(color);
            stdout_1.stdout.write((0, base_1.makeANSI)(['48', '2', rgb[0], rgb[1], rgb[2]]));
            return;
        }
        stdout_1.stdout.write((0, color_1.convertTextBackgroundToANSI)(color));
    }
    static backgroundRGB(red, green, blue) {
        stdout_1.stdout.write((0, base_1.makeANSI)(['48', '2', red, green, blue]));
    }
    static backgroundHex(hex) {
        if (!(0, color_1.isValidHex)(hex)) {
            throw new TypeError(`Attr.backgroundHex: '${hex}' is not valid Hex value.`);
        }
        const rgb = (0, color_1.convertHexToRGB)(hex);
        stdout_1.stdout.write((0, base_1.makeANSI)(['48', '2', rgb[0], rgb[1], rgb[2]]));
    }
    static style(style) {
        stdout_1.stdout.write((0, style_1.convertTextStyleToANSI)(style));
    }
    static move(x, y) {
        stdout_1.stdout.write((0, base_1.makeANSI)([x, y], 'f'));
    }
    static moveCol(x) {
        stdout_1.stdout.write((0, base_1.makeANSI)([x, 'G'], ''));
    }
    static moveHome() {
        stdout_1.stdout.write((0, base_1.makeANSI)([], 'H'));
    }
    static cursorWalk(arrow, value = 1) {
        stdout_1.stdout.write((0, cursor_1.convertTextCursorMoveToANSI)(arrow, value));
    }
    static cursorSave(mode = 'SCO') {
        const code = (mode === 'SCO') ? 's' : '7';
        stdout_1.stdout.write((0, base_1.makeANSI)([code], ''));
    }
    static cursorRestore(mode = 'SCO') {
        const code = (mode === 'SCO') ? 'u' : '8';
        stdout_1.stdout.write((0, base_1.makeANSI)([code], ''));
    }
    static cursorStyle(style) {
        stdout_1.stdout.write((0, cursor_1.convertTextCursorStyleToANSI)(style));
    }
    static erase(mode) {
        stdout_1.stdout.write((0, erase_1.convertTextEraseToANSI)(mode));
    }
}
exports["default"] = Attr;


/***/ }),

/***/ 949:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const typecheck_1 = __importDefault(__webpack_require__(828));
const events = {
    resize: null,
};
class Events {
    static addEventListener(type, listener) {
        (0, typecheck_1.default)('addEventListener', 'string', type);
        (0, typecheck_1.default)('addEventListener', 'function', listener);
        events[type] = listener;
        process.stdout.on(type, events[type]);
    }
    static removeEventListener(type) {
        process.stdout.removeListener(type, events[type]);
        events[type] = null;
    }
}
exports["default"] = Events;


/***/ }),

/***/ 38:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const readline_sync_1 = __importDefault(__webpack_require__(715));
const typecheck_1 = __importDefault(__webpack_require__(828));
class In {
    static input(message = '') {
        (0, typecheck_1.default)('In.input', 'string', message);
        return readline_sync_1.default.question(message);
    }
    static password(message = '', char = '') {
        (0, typecheck_1.default)('In.password', 'string', message);
        (0, typecheck_1.default)('In.password', 'string', char);
        return readline_sync_1.default.question(message, { hideEchoBack: true, mask: char });
    }
    static confirm(message = '') {
        (0, typecheck_1.default)('confirm', 'string', message);
        message += ' (y/n) ';
        const result = this.input(message).trim().toUpperCase();
        switch (result) {
            case 'Y':
            case 'YES':
            case 'OK':
                return true;
            default:
                return false;
        }
    }
    static readNumber(message = '') {
        const result = this.input(message);
        return Number(result);
    }
}
exports["default"] = In;


/***/ }),

/***/ 201:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Utils = exports.Events = exports.Attr = exports.In = exports.Out = exports.version = void 0;
const version_1 = __webpack_require__(472);
Object.defineProperty(exports, "version", ({ enumerable: true, get: function () { return version_1.version; } }));
const output_1 = __importDefault(__webpack_require__(69));
exports.Out = output_1.default;
const input_1 = __importDefault(__webpack_require__(38));
exports.In = input_1.default;
const attributes_1 = __importDefault(__webpack_require__(885));
exports.Attr = attributes_1.default;
const events_1 = __importDefault(__webpack_require__(949));
exports.Events = events_1.default;
const utilities_1 = __importDefault(__webpack_require__(394));
exports.Utils = utilities_1.default;


/***/ }),

/***/ 69:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const formatmsg_1 = __importDefault(__webpack_require__(900));
const silentecho_1 = __importDefault(__webpack_require__(710));
const typecheck_1 = __importDefault(__webpack_require__(828));
const stdout_1 = __webpack_require__(389);
const stderr_1 = __webpack_require__(402);
const base_1 = __webpack_require__(273);
const colorconvertor_1 = __importDefault(__webpack_require__(433));
const color_1 = __webpack_require__(285);
const style_1 = __webpack_require__(491);
class Out {
    static write(...message) {
        const messageStr = (0, silentecho_1.default)(...message);
        stdout_1.stdout.write(messageStr);
    }
    static writeln(...message) {
        const messageStr = ((0, silentecho_1.default)(...message) + '\n');
        stdout_1.stdout.write(messageStr);
    }
    static printf(message, ...argv) {
        (0, typecheck_1.default)('printf', 'string', message);
        message = (0, formatmsg_1.default)(message, argv);
        stdout_1.stdout.write(message);
    }
    static error(message, ...argv) {
        (0, typecheck_1.default)('error', 'string', message);
        message = (0, formatmsg_1.default)(message, argv);
        stderr_1.stderr.write(message);
    }
    static shot(func, style) {
        return ((...data) => {
            const color = (style.color) ? (0, colorconvertor_1.default)('shot', 'color', color_1.convertTextColorToANSI, style.color) : '';
            const bg = (style.background) ? (0, colorconvertor_1.default)('shot', 'bg', color_1.convertTextBackgroundToANSI, style.background) : '';
            const fstyle = (style.style) ? (0, style_1.convertTextStyleToANSI)(style.style) : '';
            stdout_1.stdout.write(color + bg + fstyle);
            const result = func(...data);
            stderr_1.stderr.write((0, base_1.makeANSI)(['0']));
            return result;
        });
    }
}
exports["default"] = Out;


/***/ }),

/***/ 394:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const typecheck_1 = __importDefault(__webpack_require__(828));
const stdout_1 = __webpack_require__(389);
const base_1 = __webpack_require__(273);
const colorconvertor_1 = __importDefault(__webpack_require__(433));
const color_1 = __webpack_require__(285);
const style_1 = __webpack_require__(491);
class Utils {
    static center(message) {
        (0, typecheck_1.default)('center', 'string', message);
        const endSpace = (stdout_1.stdout.columns / 2) - (message.length / 2);
        let centerMessage = '';
        for (let i = 1; i <= endSpace; i++) {
            centerMessage += ' ';
        }
        centerMessage += message;
        return centerMessage;
    }
    static clear() {
        stdout_1.stdout.write('\x1b[2J');
    }
    static reset() {
        return (0, base_1.makeANSI)(['0']);
    }
    static color(color) {
        (0, typecheck_1.default)('color', ['string', 'number', 'object'], color);
        return (0, colorconvertor_1.default)('color', 'color', color_1.convertTextColorToANSI, color);
    }
    static background(color) {
        (0, typecheck_1.default)('color', ['string', 'number', 'object'], color);
        return (0, colorconvertor_1.default)('background', 'bg', color_1.convertTextBackgroundToANSI, color);
    }
    static fontStyle(style) {
        (0, typecheck_1.default)('fontStyle', 'string', style);
        return (0, style_1.convertTextStyleToANSI)(style);
    }
}
exports["default"] = Utils;


/***/ }),

/***/ 433:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = colorConvertor;
const base_1 = __webpack_require__(273);
const color_1 = __webpack_require__(285);
function colorConvertor(name, mode, convertor, color) {
    const ansiRgb = (mode === 'color') ? '38' : '48';
    let colorAnsi = '';
    if (typeof color === 'string') {
        if ((0, color_1.isValidHex)(color)) {
            const rgb = (0, color_1.convertHexToRGB)(color);
            colorAnsi = (0, base_1.makeANSI)([ansiRgb, '2', rgb[0], rgb[1], rgb[2]]);
        }
        else {
            colorAnsi = convertor(color);
        }
    }
    else if (typeof color === 'number') {
        if (color < 0 || color > 255) {
            throw new TypeError(`Invalid value for method '${name}'. Number must be between 0 and 255.`);
        }
        colorAnsi = convertor(color);
    }
    else if (Array.isArray(color) && color.length >= 3) {
        for (let i = 0; i < 3; i++) {
            const num = Number(color[i]);
            if (num < 0 || num > 255) {
                throw new TypeError(`Invalid value for '${name}' method. RGB values must be between 0 and 255.`);
            }
        }
        colorAnsi = (0, base_1.makeANSI)([ansiRgb, '2', color[0], color[1], color[2]]);
    }
    else {
        throw new TypeError(`Invalid value for the 'colorConvertor' method. Expected values for color are string, number, and triplet of numbers (for RGB).`);
    }
    return colorAnsi;
}


/***/ }),

/***/ 900:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = formatMessage;
const silentecho_1 = __importDefault(__webpack_require__(710));
function formatMessage(message, argv) {
    let formatMessage = '';
    let argvCursor = 0;
    for (let i = 0; i < message.length; i++) {
        const ch = message[i];
        if (ch === '%' && message[i + 1] === 'v') {
            i++;
            formatMessage += (0, silentecho_1.default)(argv[argvCursor++]);
            continue;
        }
        formatMessage += ch;
    }
    return formatMessage;
}


/***/ }),

/***/ 710:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = silentEcho;
function silentEcho(...data) {
    const orgin = process.stdout.write;
    let result = '';
    process.stdout.write = (data) => {
        result = data;
    };
    console.log(...data);
    process.stdout.write = orgin;
    return result.slice(0, -1);
}


/***/ }),

/***/ 828:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = typeCheck;
function typeCheck(name, expected, data) {
    if (Array.isArray(expected)) {
        for (const expectedType of expected) {
            if (typeof data === expectedType) {
                return;
            }
        }
    }
    else if (typeof data === expected) {
        return;
    }
    throw new TypeError(`The '${name}' method given only ${expected} message.`);
}


/***/ }),

/***/ 273:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.base = void 0;
exports.makeANSI = makeANSI;
exports.base = '\x1B';
function makeANSI(code, end = 'm', start = '') {
    return exports.base + `[${start}${code.join(';')}${end}`;
}


/***/ }),

/***/ 285:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertTextColorToANSI = convertTextColorToANSI;
exports.convertTextBackgroundToANSI = convertTextBackgroundToANSI;
exports.isValidHex = isValidHex;
exports.convertHexToRGB = convertHexToRGB;
const base_1 = __webpack_require__(273);
function convertTextColorToANSI(color) {
    if (typeof color === 'number') {
        return (0, base_1.makeANSI)(['38', '5', color]);
    }
    switch (color) {
        case 'black':
            return (0, base_1.makeANSI)(['30']);
        case 'red':
            return (0, base_1.makeANSI)(['31']);
        case 'green':
            return (0, base_1.makeANSI)(['32']);
        case 'yellow':
            return (0, base_1.makeANSI)(['33']);
        case 'blue':
            return (0, base_1.makeANSI)(['34']);
        case 'magenta':
            return (0, base_1.makeANSI)(['35']);
        case 'cyan':
            return (0, base_1.makeANSI)(['36']);
        case 'white':
            return (0, base_1.makeANSI)(['37']);
        case 'bright-black':
            return (0, base_1.makeANSI)(['90']);
        case 'bright-red':
            return (0, base_1.makeANSI)(['91']);
        case 'bright-green':
            return (0, base_1.makeANSI)(['92']);
        case 'bright-yellow':
            return (0, base_1.makeANSI)(['93']);
        case 'bright-blue':
            return (0, base_1.makeANSI)(['94']);
        case 'bright-magenta':
            return (0, base_1.makeANSI)(['95']);
        case 'bright-cyan':
            return (0, base_1.makeANSI)(['96']);
        case 'bright-white':
            return (0, base_1.makeANSI)(['97']);
        default:
            return (0, base_1.makeANSI)(['39']);
    }
}
function convertTextBackgroundToANSI(color) {
    if (typeof color === 'number') {
        return (0, base_1.makeANSI)([48, 5, color]);
    }
    switch (color) {
        case 'black':
            return (0, base_1.makeANSI)(['40']);
        case 'red':
            return (0, base_1.makeANSI)(['41']);
        case 'green':
            return (0, base_1.makeANSI)(['42']);
        case 'yellow':
            return (0, base_1.makeANSI)(['44']);
        case 'blue':
            return (0, base_1.makeANSI)(['44']);
        case 'magenta':
            return (0, base_1.makeANSI)(['45']);
        case 'cyan':
            return (0, base_1.makeANSI)(['46']);
        case 'white':
            return (0, base_1.makeANSI)(['47']);
        case 'bright-black':
            return (0, base_1.makeANSI)(['100']);
        case 'bright-red':
            return (0, base_1.makeANSI)(['101']);
        case 'bright-green':
            return (0, base_1.makeANSI)(['102']);
        case 'bright-yellow':
            return (0, base_1.makeANSI)(['103']);
        case 'bright-blue':
            return (0, base_1.makeANSI)(['104']);
        case 'bright-magenta':
            return (0, base_1.makeANSI)(['105']);
        case 'bright-cyan':
            return (0, base_1.makeANSI)(['106']);
        case 'bright-white':
            return (0, base_1.makeANSI)(['107']);
        default:
            return (0, base_1.makeANSI)(['49']);
    }
}
function isValidHex(hex) {
    if (hex.startsWith('#')) {
        hex = hex.slice(1);
    }
    if (hex.length !== 6 && hex.length !== 3) {
        return false;
    }
    hex = hex.toUpperCase();
    for (let i = 0; i < hex.length; i++) {
        const ascii = hex.charCodeAt(i);
        if (ascii >= 48 && ascii <= 57) {
            continue;
        }
        else if (ascii >= 65 && ascii <= 70) {
            continue;
        }
        return false;
    }
    return true;
}
function convertHexToRGB(hex) {
    if (hex.startsWith('#')) {
        hex = hex.slice(1);
    }
    let rgb = [255, 255, 255];
    if (hex.length === 3) {
        for (let i = 0; i < 3; i++) {
            const section = '0x' + (hex[i] + hex[i]);
            rgb[i] = Number(section);
        }
    }
    else if (hex.length === 6) {
        let index = 0;
        for (let i = 0; i < 6; i += 2) {
            const section = '0x' + (hex[i] + hex[i + 1]);
            rgb[index++] = Number(section);
        }
    }
    return rgb;
}


/***/ }),

/***/ 890:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertTextCursorMoveToANSI = convertTextCursorMoveToANSI;
exports.convertTextCursorStyleToANSI = convertTextCursorStyleToANSI;
const base_1 = __webpack_require__(273);
function convertTextCursorMoveToANSI(style, value) {
    switch (style) {
        case 'up':
            return (0, base_1.makeANSI)([value, 'A'], '');
        case 'down':
            return (0, base_1.makeANSI)([value, 'B'], '');
        case 'right':
            return (0, base_1.makeANSI)([value, 'C'], '');
        case 'left':
            return (0, base_1.makeANSI)([value, 'D'], '');
        case 'next':
            return (0, base_1.makeANSI)([value, 'E'], '');
        case 'previous':
            return (0, base_1.makeANSI)([value, 'F'], '');
        case 'go-up':
            return (0, base_1.makeANSI)(['M'], '');
        default:
            return (0, base_1.makeANSI)(['H'], '');
    }
}
function convertTextCursorStyleToANSI(style) {
    switch (style) {
        case 'invisible':
            return (0, base_1.makeANSI)(['25'], 'l', '?');
        case 'visible':
            return (0, base_1.makeANSI)(['25'], 'h', '?');
        default:
            return (0, base_1.makeANSI)(['25'], 'h', '?');
    }
}


/***/ }),

/***/ 676:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertTextEraseToANSI = convertTextEraseToANSI;
const base_1 = __webpack_require__(273);
function convertTextEraseToANSI(style) {
    switch (style) {
        case 'in-display':
            return (0, base_1.makeANSI)(['J'], '');
        case 'cursor-until-end':
            return (0, base_1.makeANSI)(['0J'], '');
        case 'cursor-to-beginning':
            return (0, base_1.makeANSI)(['1J'], '');
        case 'entire':
            return (0, base_1.makeANSI)(['2J'], '');
        case 'saved-lines':
            return (0, base_1.makeANSI)(['3J'], '');
        case 'in-line':
            return (0, base_1.makeANSI)(['K'], '');
        case 'cursor-until-end-line':
            return (0, base_1.makeANSI)(['0K'], '');
        case 'start-line-until-cursor':
            return (0, base_1.makeANSI)(['1K'], '');
        case 'entire-line':
            return (0, base_1.makeANSI)(['2K'], '');
        default:
            return (0, base_1.makeANSI)(['2J'], '');
    }
}


/***/ }),

/***/ 491:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertTextStyleToANSI = convertTextStyleToANSI;
const base_1 = __webpack_require__(273);
function convertTextStyleToANSI(style) {
    switch (style) {
        case 'bold':
            return (0, base_1.makeANSI)(['1']);
        case 'dim':
            return (0, base_1.makeANSI)(['2']);
        case 'italic':
            return (0, base_1.makeANSI)(['3']);
        case 'underline':
            return (0, base_1.makeANSI)(['4']);
        case 'blinking':
            return (0, base_1.makeANSI)(['5']);
        case 'reverse':
            return (0, base_1.makeANSI)(['7']);
        case 'hidden':
            return (0, base_1.makeANSI)(['8']);
        case 'strikethrough':
            return (0, base_1.makeANSI)(['9']);
        default:
            return (0, base_1.makeANSI)(['0']);
    }
}


/***/ }),

/***/ 402:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stderr = void 0;
exports.stderr = process.stderr;


/***/ }),

/***/ 389:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stdout = void 0;
exports.stdout = process.stdout;


/***/ }),

/***/ 472:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.version = void 0;
exports.version = '3.10.1';


/***/ }),

/***/ 715:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*
 * readlineSync
 * https://github.com/anseki/readline-sync
 *
 * Copyright (c) 2019 anseki
 * Licensed under the MIT license.
 */



var
  IS_WIN = process.platform === 'win32',

  ALGORITHM_CIPHER = 'aes-256-cbc',
  ALGORITHM_HASH = 'sha256',
  DEFAULT_ERR_MSG = 'The current environment doesn\'t support interactive reading from TTY.',

  fs = __webpack_require__(896),
  TTY = process.binding('tty_wrap').TTY,
  childProc = __webpack_require__(317),
  pathUtil = __webpack_require__(928),

  defaultOptions = {
    /* eslint-disable key-spacing */
    prompt:             '> ',
    hideEchoBack:       false,
    mask:               '*',
    limit:              [],
    limitMessage:       'Input another, please.$<( [)limit(])>',
    defaultInput:       '',
    trueValue:          [],
    falseValue:         [],
    caseSensitive:      false,
    keepWhitespace:     false,
    encoding:           'utf8',
    bufferSize:         1024,
    print:              void 0,
    history:            true,
    cd:                 false,
    phContent:          void 0,
    preCheck:           void 0
    /* eslint-enable key-spacing */
  },

  fdR = 'none',
  isRawMode = false,
  salt = 0,
  lastInput = '',
  inputHistory = [],
  _DBG_useExt = false,
  _DBG_checkOptions = false,
  _DBG_checkMethod = false,
  fdW, ttyR, extHostPath, extHostArgs, tempdir, rawInput;

function getHostArgs(options) {
  // Send any text to crazy Windows shell safely.
  function encodeArg(arg) {
    return arg.replace(/[^\w\u0080-\uFFFF]/g, function(chr) {
      return '#' + chr.charCodeAt(0) + ';';
    });
  }

  return extHostArgs.concat((function(conf) {
    var args = [];
    Object.keys(conf).forEach(function(optionName) {
      if (conf[optionName] === 'boolean') {
        if (options[optionName]) { args.push('--' + optionName); }
      } else if (conf[optionName] === 'string') {
        if (options[optionName]) {
          args.push('--' + optionName, encodeArg(options[optionName]));
        }
      }
    });
    return args;
  })({
    /* eslint-disable key-spacing */
    display:        'string',
    displayOnly:    'boolean',
    keyIn:          'boolean',
    hideEchoBack:   'boolean',
    mask:           'string',
    limit:          'string',
    caseSensitive:  'boolean'
    /* eslint-enable key-spacing */
  }));
}

// piping via files (for Node.js v0.10-)
function _execFileSync(options, execOptions) {

  function getTempfile(name) {
    var suffix = '',
      filepath, fd;
    tempdir = tempdir || (__webpack_require__(857).tmpdir)();

    while (true) {
      filepath = pathUtil.join(tempdir, name + suffix);
      try {
        fd = fs.openSync(filepath, 'wx');
      } catch (e) {
        if (e.code === 'EEXIST') {
          suffix++;
          continue;
        } else {
          throw e;
        }
      }
      fs.closeSync(fd);
      break;
    }
    return filepath;
  }

  var res = {},
    pathStdout = getTempfile('readline-sync.stdout'),
    pathStderr = getTempfile('readline-sync.stderr'),
    pathExit = getTempfile('readline-sync.exit'),
    pathDone = getTempfile('readline-sync.done'),
    crypto = __webpack_require__(982),
    hostArgs, shellPath, shellArgs, exitCode, extMessage, shasum, decipher, password;

  shasum = crypto.createHash(ALGORITHM_HASH);
  shasum.update('' + process.pid + (salt++) + Math.random());
  password = shasum.digest('hex');
  decipher = crypto.createDecipher(ALGORITHM_CIPHER, password);

  hostArgs = getHostArgs(options);
  if (IS_WIN) {
    shellPath = process.env.ComSpec || 'cmd.exe';
    process.env.Q = '"'; // The quote (") that isn't escaped.
    // `()` for ignore space by echo
    shellArgs = ['/V:ON', '/S', '/C',
      '(%Q%' + shellPath + '%Q% /V:ON /S /C %Q%' + /* ESLint bug? */ // eslint-disable-line no-path-concat
        '%Q%' + extHostPath + '%Q%' +
          hostArgs.map(function(arg) { return ' %Q%' + arg + '%Q%'; }).join('') +
        ' & (echo !ERRORLEVEL!)>%Q%' + pathExit + '%Q%%Q%) 2>%Q%' + pathStderr + '%Q%' +
      ' |%Q%' + process.execPath + '%Q% %Q%' + __dirname + '\\encrypt.js%Q%' +
        ' %Q%' + ALGORITHM_CIPHER + '%Q% %Q%' + password + '%Q%' +
        ' >%Q%' + pathStdout + '%Q%' +
      ' & (echo 1)>%Q%' + pathDone + '%Q%'];
  } else {
    shellPath = '/bin/sh';
    shellArgs = ['-c',
      // Use `()`, not `{}` for `-c` (text param)
      '("' + extHostPath + '"' + /* ESLint bug? */ // eslint-disable-line no-path-concat
          hostArgs.map(function(arg) { return " '" + arg.replace(/'/g, "'\\''") + "'"; }).join('') +
        '; echo $?>"' + pathExit + '") 2>"' + pathStderr + '"' +
      ' |"' + process.execPath + '" "' + __dirname + '/encrypt.js"' +
        ' "' + ALGORITHM_CIPHER + '" "' + password + '"' +
        ' >"' + pathStdout + '"' +
      '; echo 1 >"' + pathDone + '"'];
  }
  if (_DBG_checkMethod) { _DBG_checkMethod('_execFileSync', hostArgs); }
  try {
    childProc.spawn(shellPath, shellArgs, execOptions);
  } catch (e) {
    res.error = new Error(e.message);
    res.error.method = '_execFileSync - spawn';
    res.error.program = shellPath;
    res.error.args = shellArgs;
  }

  while (fs.readFileSync(pathDone, {encoding: options.encoding}).trim() !== '1') {} // eslint-disable-line no-empty
  if ((exitCode =
      fs.readFileSync(pathExit, {encoding: options.encoding}).trim()) === '0') {
    res.input =
      decipher.update(fs.readFileSync(pathStdout, {encoding: 'binary'}),
        'hex', options.encoding) +
      decipher.final(options.encoding);
  } else {
    extMessage = fs.readFileSync(pathStderr, {encoding: options.encoding}).trim();
    res.error = new Error(DEFAULT_ERR_MSG + (extMessage ? '\n' + extMessage : ''));
    res.error.method = '_execFileSync';
    res.error.program = shellPath;
    res.error.args = shellArgs;
    res.error.extMessage = extMessage;
    res.error.exitCode = +exitCode;
  }

  fs.unlinkSync(pathStdout);
  fs.unlinkSync(pathStderr);
  fs.unlinkSync(pathExit);
  fs.unlinkSync(pathDone);

  return res;
}

function readlineExt(options) {
  var res = {},
    execOptions = {env: process.env, encoding: options.encoding},
    hostArgs, extMessage;

  if (!extHostPath) {
    if (IS_WIN) {
      if (process.env.PSModulePath) { // Windows PowerShell
        extHostPath = 'powershell.exe';
        extHostArgs = ['-ExecutionPolicy', 'Bypass',
          '-File', __dirname + '\\read.ps1']; // eslint-disable-line no-path-concat
      } else { // Windows Script Host
        extHostPath = 'cscript.exe';
        extHostArgs = ['//nologo', __dirname + '\\read.cs.js']; // eslint-disable-line no-path-concat
      }
    } else {
      extHostPath = '/bin/sh';
      extHostArgs = [__dirname + '/read.sh']; // eslint-disable-line no-path-concat
    }
  }
  if (IS_WIN && !process.env.PSModulePath) { // Windows Script Host
    // ScriptPW (Win XP and Server2003) needs TTY stream as STDIN.
    // In this case, If STDIN isn't TTY, an error is thrown.
    execOptions.stdio = [process.stdin];
  }

  if (childProc.execFileSync) {
    hostArgs = getHostArgs(options);
    if (_DBG_checkMethod) { _DBG_checkMethod('execFileSync', hostArgs); }
    try {
      res.input = childProc.execFileSync(extHostPath, hostArgs, execOptions);
    } catch (e) { // non-zero exit code
      extMessage = e.stderr ? (e.stderr + '').trim() : '';
      res.error = new Error(DEFAULT_ERR_MSG + (extMessage ? '\n' + extMessage : ''));
      res.error.method = 'execFileSync';
      res.error.program = extHostPath;
      res.error.args = hostArgs;
      res.error.extMessage = extMessage;
      res.error.exitCode = e.status;
      res.error.code = e.code;
      res.error.signal = e.signal;
    }
  } else {
    res = _execFileSync(options, execOptions);
  }
  if (!res.error) {
    res.input = res.input.replace(/^\s*'|'\s*$/g, '');
    options.display = '';
  }

  return res;
}

/*
  display:            string
  displayOnly:        boolean
  keyIn:              boolean
  hideEchoBack:       boolean
  mask:               string
  limit:              string (pattern)
  caseSensitive:      boolean
  keepWhitespace:     boolean
  encoding, bufferSize, print
*/
function _readlineSync(options) {
  var input = '',
    displaySave = options.display,
    silent = !options.display && options.keyIn && options.hideEchoBack && !options.mask;

  function tryExt() {
    var res = readlineExt(options);
    if (res.error) { throw res.error; }
    return res.input;
  }

  if (_DBG_checkOptions) { _DBG_checkOptions(options); }

  (function() { // open TTY
    var fsB, constants, verNum;

    function getFsB() {
      if (!fsB) {
        fsB = process.binding('fs'); // For raw device path
        constants = process.binding('constants');
        // for v6.3.0+
        constants = constants && constants.fs && typeof constants.fs.O_RDWR === 'number'
          ? constants.fs : constants;
      }
      return fsB;
    }

    if (typeof fdR !== 'string') { return; }
    fdR = null;

    if (IS_WIN) {
      // iojs-v2.3.2+ input stream can't read first line. (#18)
      // ** Don't get process.stdin before check! **
      // Fixed v5.1.0
      // Fixed v4.2.4
      // It regressed again in v5.6.0, it is fixed in v6.2.0.
      verNum = (function(ver) { // getVerNum
        var nums = ver.replace(/^\D+/, '').split('.');
        var verNum = 0;
        if ((nums[0] = +nums[0])) { verNum += nums[0] * 10000; }
        if ((nums[1] = +nums[1])) { verNum += nums[1] * 100; }
        if ((nums[2] = +nums[2])) { verNum += nums[2]; }
        return verNum;
      })(process.version);
      if (!(verNum >= 20302 && verNum < 40204 || verNum >= 50000 && verNum < 50100 || verNum >= 50600 && verNum < 60200) &&
          process.stdin.isTTY) {
        process.stdin.pause();
        fdR = process.stdin.fd;
        ttyR = process.stdin._handle;
      } else {
        try {
          // The stream by fs.openSync('\\\\.\\CON', 'r') can't switch to raw mode.
          // 'CONIN$' might fail on XP, 2000, 7 (x86).
          fdR = getFsB().open('CONIN$', constants.O_RDWR, parseInt('0666', 8));
          ttyR = new TTY(fdR, true);
        } catch (e) { /* ignore */ }
      }

      if (process.stdout.isTTY) {
        fdW = process.stdout.fd;
      } else {
        try {
          fdW = fs.openSync('\\\\.\\CON', 'w');
        } catch (e) { /* ignore */ }
        if (typeof fdW !== 'number') { // Retry
          try {
            fdW = getFsB().open('CONOUT$', constants.O_RDWR, parseInt('0666', 8));
          } catch (e) { /* ignore */ }
        }
      }

    } else {
      if (process.stdin.isTTY) {
        process.stdin.pause();
        try {
          fdR = fs.openSync('/dev/tty', 'r'); // device file, not process.stdin
          ttyR = process.stdin._handle;
        } catch (e) { /* ignore */ }
      } else {
        // Node.js v0.12 read() fails.
        try {
          fdR = fs.openSync('/dev/tty', 'r');
          ttyR = new TTY(fdR, false);
        } catch (e) { /* ignore */ }
      }

      if (process.stdout.isTTY) {
        fdW = process.stdout.fd;
      } else {
        try {
          fdW = fs.openSync('/dev/tty', 'w');
        } catch (e) { /* ignore */ }
      }
    }
  })();

  (function() { // try read
    var isCooked = !options.hideEchoBack && !options.keyIn,
      atEol, limit, buffer, reqSize, readSize, chunk, line;
    rawInput = '';

    // Node.js v0.10- returns an error if same mode is set.
    function setRawMode(mode) {
      if (mode === isRawMode) { return true; }
      if (ttyR.setRawMode(mode) !== 0) { return false; }
      isRawMode = mode;
      return true;
    }

    if (_DBG_useExt || !ttyR ||
        typeof fdW !== 'number' && (options.display || !isCooked)) {
      input = tryExt();
      return;
    }

    if (options.display) {
      fs.writeSync(fdW, options.display);
      options.display = '';
    }
    if (options.displayOnly) { return; }

    if (!setRawMode(!isCooked)) {
      input = tryExt();
      return;
    }

    reqSize = options.keyIn ? 1 : options.bufferSize;
    // Check `allocUnsafe` to make sure of the new API.
    buffer = Buffer.allocUnsafe && Buffer.alloc ? Buffer.alloc(reqSize) : new Buffer(reqSize);

    if (options.keyIn && options.limit) {
      limit = new RegExp('[^' + options.limit + ']',
        'g' + (options.caseSensitive ? '' : 'i'));
    }

    while (true) {
      readSize = 0;
      try {
        readSize = fs.readSync(fdR, buffer, 0, reqSize);
      } catch (e) {
        if (e.code !== 'EOF') {
          setRawMode(false);
          input += tryExt();
          return;
        }
      }
      if (readSize > 0) {
        chunk = buffer.toString(options.encoding, 0, readSize);
        rawInput += chunk;
      } else {
        chunk = '\n';
        rawInput += String.fromCharCode(0);
      }

      if (chunk && typeof (line = (chunk.match(/^(.*?)[\r\n]/) || [])[1]) === 'string') {
        chunk = line;
        atEol = true;
      }

      // other ctrl-chars
      // eslint-disable-next-line no-control-regex
      if (chunk) { chunk = chunk.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, ''); }
      if (chunk && limit) { chunk = chunk.replace(limit, ''); }

      if (chunk) {
        if (!isCooked) {
          if (!options.hideEchoBack) {
            fs.writeSync(fdW, chunk);
          } else if (options.mask) {
            fs.writeSync(fdW, (new Array(chunk.length + 1)).join(options.mask));
          }
        }
        input += chunk;
      }

      if (!options.keyIn && atEol ||
        options.keyIn && input.length >= reqSize) { break; }
    }

    if (!isCooked && !silent) { fs.writeSync(fdW, '\n'); }
    setRawMode(false);
  })();

  if (options.print && !silent) {
    options.print(
      displaySave + (
        options.displayOnly ? '' : (
          options.hideEchoBack ? (new Array(input.length + 1)).join(options.mask) : input
        ) + '\n' // must at least write '\n'
      ),
      options.encoding);
  }

  return options.displayOnly ? '' :
    (lastInput = options.keepWhitespace || options.keyIn ? input : input.trim());
}

function flattenArray(array, validator) {
  var flatArray = [];
  function _flattenArray(array) {
    if (array == null) { return; }
    if (Array.isArray(array)) {
      array.forEach(_flattenArray);
    } else if (!validator || validator(array)) {
      flatArray.push(array);
    }
  }
  _flattenArray(array);
  return flatArray;
}

function escapePattern(pattern) {
  return pattern.replace(/[\x00-\x7f]/g, // eslint-disable-line no-control-regex
    function(s) { return '\\x' + ('00' + s.charCodeAt().toString(16)).substr(-2); });
}

// margeOptions(options1, options2 ... )
// margeOptions(true, options1, options2 ... )
//    arg1=true : Start from defaultOptions and pick elements of that.
function margeOptions() {
  var optionsList = Array.prototype.slice.call(arguments),
    optionNames, fromDefault;

  if (optionsList.length && typeof optionsList[0] === 'boolean') {
    fromDefault = optionsList.shift();
    if (fromDefault) {
      optionNames = Object.keys(defaultOptions);
      optionsList.unshift(defaultOptions);
    }
  }

  return optionsList.reduce(function(options, optionsPart) {
    if (optionsPart == null) { return options; }

    // ======== DEPRECATED ========
    if (optionsPart.hasOwnProperty('noEchoBack') &&
        !optionsPart.hasOwnProperty('hideEchoBack')) {
      optionsPart.hideEchoBack = optionsPart.noEchoBack;
      delete optionsPart.noEchoBack;
    }
    if (optionsPart.hasOwnProperty('noTrim') &&
        !optionsPart.hasOwnProperty('keepWhitespace')) {
      optionsPart.keepWhitespace = optionsPart.noTrim;
      delete optionsPart.noTrim;
    }
    // ======== /DEPRECATED ========

    if (!fromDefault) { optionNames = Object.keys(optionsPart); }
    optionNames.forEach(function(optionName) {
      var value;
      if (!optionsPart.hasOwnProperty(optionName)) { return; }
      value = optionsPart[optionName];
      /* eslint-disable no-multi-spaces */
      switch (optionName) {
        //                    _readlineSync <- *    * -> defaultOptions
        // ================ string
        case 'mask':                        // *    *
        case 'limitMessage':                //      *
        case 'defaultInput':                //      *
        case 'encoding':                    // *    *
          value = value != null ? value + '' : '';
          if (value && optionName !== 'limitMessage') { value = value.replace(/[\r\n]/g, ''); }
          options[optionName] = value;
          break;
        // ================ number(int)
        case 'bufferSize':                  // *    *
          if (!isNaN(value = parseInt(value, 10)) && typeof value === 'number') {
            options[optionName] = value; // limited updating (number is needed)
          }
          break;
        // ================ boolean
        case 'displayOnly':                 // *
        case 'keyIn':                       // *
        case 'hideEchoBack':                // *    *
        case 'caseSensitive':               // *    *
        case 'keepWhitespace':              // *    *
        case 'history':                     //      *
        case 'cd':                          //      *
          options[optionName] = !!value;
          break;
        // ================ array
        case 'limit':                       // *    *     to string for readlineExt
        case 'trueValue':                   //      *
        case 'falseValue':                  //      *
          options[optionName] = flattenArray(value, function(value) {
            var type = typeof value;
            return type === 'string' || type === 'number' ||
              type === 'function' || value instanceof RegExp;
          }).map(function(value) {
            return typeof value === 'string' ? value.replace(/[\r\n]/g, '') : value;
          });
          break;
        // ================ function
        case 'print':                       // *    *
        case 'phContent':                   //      *
        case 'preCheck':                    //      *
          options[optionName] = typeof value === 'function' ? value : void 0;
          break;
        // ================ other
        case 'prompt':                      //      *
        case 'display':                     // *
          options[optionName] = value != null ? value : '';
          break;
        // no default
      }
      /* eslint-enable no-multi-spaces */
    });
    return options;
  }, {});
}

function isMatched(res, comps, caseSensitive) {
  return comps.some(function(comp) {
    var type = typeof comp;
    return type === 'string'
      ? (caseSensitive ? res === comp : res.toLowerCase() === comp.toLowerCase()) :
      type === 'number' ? parseFloat(res) === comp :
      type === 'function' ? comp(res) :
      comp instanceof RegExp ? comp.test(res) : false;
  });
}

function replaceHomePath(path, expand) {
  var homePath = pathUtil.normalize(
    IS_WIN ? (process.env.HOMEDRIVE || '') + (process.env.HOMEPATH || '') :
    process.env.HOME || '').replace(/[/\\]+$/, '');
  path = pathUtil.normalize(path);
  return expand ? path.replace(/^~(?=\/|\\|$)/, homePath) :
    path.replace(new RegExp('^' + escapePattern(homePath) +
      '(?=\\/|\\\\|$)', IS_WIN ? 'i' : ''), '~');
}

function replacePlaceholder(text, generator) {
  var PTN_INNER = '(?:\\(([\\s\\S]*?)\\))?(\\w+|.-.)(?:\\(([\\s\\S]*?)\\))?',
    rePlaceholder = new RegExp('(\\$)?(\\$<' + PTN_INNER + '>)', 'g'),
    rePlaceholderCompat = new RegExp('(\\$)?(\\$\\{' + PTN_INNER + '\\})', 'g');

  function getPlaceholderText(s, escape, placeholder, pre, param, post) {
    var text;
    return escape || typeof (text = generator(param)) !== 'string' ? placeholder :
      text ? (pre || '') + text + (post || '') : '';
  }

  return text.replace(rePlaceholder, getPlaceholderText)
    .replace(rePlaceholderCompat, getPlaceholderText);
}

function array2charlist(array, caseSensitive, collectSymbols) {
  var group = [],
    groupClass = -1,
    charCode = 0,
    symbols = '',
    values, suppressed;
  function addGroup(groups, group) {
    if (group.length > 3) { // ellipsis
      groups.push(group[0] + '...' + group[group.length - 1]);
      suppressed = true;
    } else if (group.length) {
      groups = groups.concat(group);
    }
    return groups;
  }

  values = array.reduce(function(chars, value) {
    return chars.concat((value + '').split(''));
  }, []).reduce(function(groups, curChar) {
    var curGroupClass, curCharCode;
    if (!caseSensitive) { curChar = curChar.toLowerCase(); }
    curGroupClass = /^\d$/.test(curChar) ? 1 :
      /^[A-Z]$/.test(curChar) ? 2 : /^[a-z]$/.test(curChar) ? 3 : 0;
    if (collectSymbols && curGroupClass === 0) {
      symbols += curChar;
    } else {
      curCharCode = curChar.charCodeAt(0);
      if (curGroupClass && curGroupClass === groupClass &&
          curCharCode === charCode + 1) {
        group.push(curChar);
      } else {
        groups = addGroup(groups, group);
        group = [curChar];
        groupClass = curGroupClass;
      }
      charCode = curCharCode;
    }
    return groups;
  }, []);
  values = addGroup(values, group); // last group
  if (symbols) { values.push(symbols); suppressed = true; }
  return {values: values, suppressed: suppressed};
}

function joinChunks(chunks, suppressed) {
  return chunks.join(chunks.length > 2 ? ', ' : suppressed ? ' / ' : '/');
}

function getPhContent(param, options) {
  var resCharlist = {},
    text, values, arg;
  if (options.phContent) {
    text = options.phContent(param, options);
  }
  if (typeof text !== 'string') {
    switch (param) {
      case 'hideEchoBack':
      case 'mask':
      case 'defaultInput':
      case 'caseSensitive':
      case 'keepWhitespace':
      case 'encoding':
      case 'bufferSize':
      case 'history':
      case 'cd':
        text = !options.hasOwnProperty(param) ? '' :
          typeof options[param] === 'boolean' ? (options[param] ? 'on' : 'off') :
          options[param] + '';
        break;
      // case 'prompt':
      // case 'query':
      // case 'display':
      //   text = options.hasOwnProperty('displaySrc') ? options.displaySrc + '' : '';
      //   break;
      case 'limit':
      case 'trueValue':
      case 'falseValue':
        values = options[options.hasOwnProperty(param + 'Src') ? param + 'Src' : param];
        if (options.keyIn) { // suppress
          resCharlist = array2charlist(values, options.caseSensitive);
          values = resCharlist.values;
        } else {
          values = values.filter(function(value) {
            var type = typeof value;
            return type === 'string' || type === 'number';
          });
        }
        text = joinChunks(values, resCharlist.suppressed);
        break;
      case 'limitCount':
      case 'limitCountNotZero':
        text = options[options.hasOwnProperty('limitSrc') ? 'limitSrc' : 'limit'].length;
        text = text || param !== 'limitCountNotZero' ? text + '' : '';
        break;
      case 'lastInput':
        text = lastInput;
        break;
      case 'cwd':
      case 'CWD':
      case 'cwdHome':
        text = process.cwd();
        if (param === 'CWD') {
          text = pathUtil.basename(text);
        } else if (param === 'cwdHome') {
          text = replaceHomePath(text);
        }
        break;
      case 'date':
      case 'time':
      case 'localeDate':
      case 'localeTime':
        text = (new Date())['to' +
          param.replace(/^./, function(str) { return str.toUpperCase(); }) +
          'String']();
        break;
      default: // with arg
        if (typeof (arg = (param.match(/^history_m(\d+)$/) || [])[1]) === 'string') {
          text = inputHistory[inputHistory.length - arg] || '';
        }
    }
  }
  return text;
}

function getPhCharlist(param) {
  var matches = /^(.)-(.)$/.exec(param),
    text = '',
    from, to, code, step;
  if (!matches) { return null; }
  from = matches[1].charCodeAt(0);
  to = matches[2].charCodeAt(0);
  step = from < to ? 1 : -1;
  for (code = from; code !== to + step; code += step) { text += String.fromCharCode(code); }
  return text;
}

// cmd "arg" " a r g " "" 'a"r"g' "a""rg" "arg
function parseCl(cl) {
  var reToken = new RegExp(/(\s*)(?:("|')(.*?)(?:\2|$)|(\S+))/g),
    taken = '',
    args = [],
    matches, part;
  cl = cl.trim();
  while ((matches = reToken.exec(cl))) {
    part = matches[3] || matches[4] || '';
    if (matches[1]) {
      args.push(taken);
      taken = '';
    }
    taken += part;
  }
  if (taken) { args.push(taken); }
  return args;
}

function toBool(res, options) {
  return (
    (options.trueValue.length &&
      isMatched(res, options.trueValue, options.caseSensitive)) ? true :
    (options.falseValue.length &&
      isMatched(res, options.falseValue, options.caseSensitive)) ? false : res);
}

function getValidLine(options) {
  var res, forceNext, limitMessage,
    matches, histInput, args, resCheck;

  function _getPhContent(param) { return getPhContent(param, options); }
  function addDisplay(text) { options.display += (/[^\r\n]$/.test(options.display) ? '\n' : '') + text; }

  options.limitSrc = options.limit;
  options.displaySrc = options.display;
  options.limit = ''; // for readlineExt
  options.display = replacePlaceholder(options.display + '', _getPhContent);

  while (true) {
    res = _readlineSync(options);
    forceNext = false;
    limitMessage = '';

    if (options.defaultInput && !res) { res = options.defaultInput; }

    if (options.history) {
      if ((matches = /^\s*!(?:!|-1)(:p)?\s*$/.exec(res))) { // `!!` `!-1` +`:p`
        histInput = inputHistory[0] || '';
        if (matches[1]) { // only display
          forceNext = true;
        } else { // replace input
          res = histInput;
        }
        // Show it even if it is empty (NL only).
        addDisplay(histInput + '\n');
        if (!forceNext) { // Loop may break
          options.displayOnly = true;
          _readlineSync(options);
          options.displayOnly = false;
        }
      } else if (res && res !== inputHistory[inputHistory.length - 1]) {
        inputHistory = [res];
      }
    }

    if (!forceNext && options.cd && res) {
      args = parseCl(res);
      switch (args[0].toLowerCase()) {
        case 'cd':
          if (args[1]) {
            try {
              process.chdir(replaceHomePath(args[1], true));
            } catch (e) {
              addDisplay(e + '');
            }
          }
          forceNext = true;
          break;
        case 'pwd':
          addDisplay(process.cwd());
          forceNext = true;
          break;
        // no default
      }
    }

    if (!forceNext && options.preCheck) {
      resCheck = options.preCheck(res, options);
      res = resCheck.res;
      if (resCheck.forceNext) { forceNext = true; } // Don't switch to false.
    }

    if (!forceNext) {
      if (!options.limitSrc.length ||
        isMatched(res, options.limitSrc, options.caseSensitive)) { break; }
      if (options.limitMessage) {
        limitMessage = replacePlaceholder(options.limitMessage, _getPhContent);
      }
    }

    addDisplay((limitMessage ? limitMessage + '\n' : '') +
      replacePlaceholder(options.displaySrc + '', _getPhContent));
  }
  return toBool(res, options);
}

// for dev
exports._DBG_set_useExt = function(val) { _DBG_useExt = val; };
exports._DBG_set_checkOptions = function(val) { _DBG_checkOptions = val; };
exports._DBG_set_checkMethod = function(val) { _DBG_checkMethod = val; };
exports._DBG_clearHistory = function() { lastInput = ''; inputHistory = []; };

// ------------------------------------

exports.setDefaultOptions = function(options) {
  defaultOptions = margeOptions(true, options);
  return margeOptions(true); // copy
};

exports.question = function(query, options) {
  /* eslint-disable key-spacing */
  return getValidLine(margeOptions(margeOptions(true, options), {
    display:            query
  }));
  /* eslint-enable key-spacing */
};

exports.prompt = function(options) {
  var readOptions = margeOptions(true, options);
  readOptions.display = readOptions.prompt;
  return getValidLine(readOptions);
};

exports.keyIn = function(query, options) {
  /* eslint-disable key-spacing */
  var readOptions = margeOptions(margeOptions(true, options), {
    display:            query,
    keyIn:              true,
    keepWhitespace:     true
  });
  /* eslint-enable key-spacing */

  // char list
  readOptions.limitSrc = readOptions.limit.filter(function(value) {
    var type = typeof value;
    return type === 'string' || type === 'number';
  }).map(function(text) {
    return replacePlaceholder(text + '', getPhCharlist);
  });
  // pattern
  readOptions.limit = escapePattern(readOptions.limitSrc.join(''));

  ['trueValue', 'falseValue'].forEach(function(optionName) {
    readOptions[optionName] = readOptions[optionName].reduce(function(comps, comp) {
      var type = typeof comp;
      if (type === 'string' || type === 'number') {
        comps = comps.concat((comp + '').split(''));
      } else { comps.push(comp); }
      return comps;
    }, []);
  });

  readOptions.display = replacePlaceholder(readOptions.display + '',
    function(param) { return getPhContent(param, readOptions); });

  return toBool(_readlineSync(readOptions), readOptions);
};

// ------------------------------------

exports.questionEMail = function(query, options) {
  if (query == null) { query = 'Input e-mail address: '; }
  /* eslint-disable key-spacing */
  return exports.question(query, margeOptions({
    // -------- default
    hideEchoBack:       false,
    // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address
    limit:              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    limitMessage:       'Input valid e-mail address, please.',
    trueValue:          null,
    falseValue:         null
  }, options, {
    // -------- forced
    keepWhitespace:     false,
    cd:                 false
  }));
  /* eslint-enable key-spacing */
};

exports.questionNewPassword = function(query, options) {
  /* eslint-disable key-spacing */
  var resCharlist, min, max,
    readOptions = margeOptions({
      // -------- default
      hideEchoBack:       true,
      mask:               '*',
      limitMessage:       'It can include: $<charlist>\n' +
                            'And the length must be: $<length>',
      trueValue:          null,
      falseValue:         null,
      caseSensitive:      true
    }, options, {
      // -------- forced
      history:            false,
      cd:                 false,
      // limit (by charlist etc.),
      phContent: function(param) {
        return param === 'charlist' ? resCharlist.text :
          param === 'length' ? min + '...' + max : null;
      }
    }),
    // added:     charlist, min, max, confirmMessage, unmatchMessage
    charlist, confirmMessage, unmatchMessage,
    limit, limitMessage, res1, res2;
  /* eslint-enable key-spacing */
  options = options || {};

  charlist = replacePlaceholder(
    options.charlist ? options.charlist + '' : '$<!-~>', getPhCharlist);
  if (isNaN(min = parseInt(options.min, 10)) || typeof min !== 'number') { min = 12; }
  if (isNaN(max = parseInt(options.max, 10)) || typeof max !== 'number') { max = 24; }
  limit = new RegExp('^[' + escapePattern(charlist) +
    ']{' + min + ',' + max + '}$');
  resCharlist = array2charlist([charlist], readOptions.caseSensitive, true);
  resCharlist.text = joinChunks(resCharlist.values, resCharlist.suppressed);

  confirmMessage = options.confirmMessage != null ? options.confirmMessage :
    'Reinput a same one to confirm it: ';
  unmatchMessage = options.unmatchMessage != null ? options.unmatchMessage :
    'It differs from first one.' +
      ' Hit only the Enter key if you want to retry from first one.';

  if (query == null) { query = 'Input new password: '; }

  limitMessage = readOptions.limitMessage;
  while (!res2) {
    readOptions.limit = limit;
    readOptions.limitMessage = limitMessage;
    res1 = exports.question(query, readOptions);

    readOptions.limit = [res1, ''];
    readOptions.limitMessage = unmatchMessage;
    res2 = exports.question(confirmMessage, readOptions);
  }

  return res1;
};

function _questionNum(query, options, parser) {
  var validValue;
  function getValidValue(value) {
    validValue = parser(value);
    return !isNaN(validValue) && typeof validValue === 'number';
  }
  /* eslint-disable key-spacing */
  exports.question(query, margeOptions({
    // -------- default
    limitMessage:       'Input valid number, please.'
  }, options, {
    // -------- forced
    limit:              getValidValue,
    cd:                 false
    // trueValue, falseValue, caseSensitive, keepWhitespace don't work.
  }));
  /* eslint-enable key-spacing */
  return validValue;
}
exports.questionInt = function(query, options) {
  return _questionNum(query, options, function(value) { return parseInt(value, 10); });
};
exports.questionFloat = function(query, options) {
  return _questionNum(query, options, parseFloat);
};

exports.questionPath = function(query, options) {
  /* eslint-disable key-spacing */
  var error = '',
    validPath, // before readOptions
    readOptions = margeOptions({
      // -------- default
      hideEchoBack:       false,
      limitMessage:       '$<error(\n)>Input valid path, please.' +
                            '$<( Min:)min>$<( Max:)max>',
      history:            true,
      cd:                 true
    }, options, {
      // -------- forced
      keepWhitespace:     false,
      limit: function(value) {
        var exists, stat, res;
        value = replaceHomePath(value, true);
        error = ''; // for validate
        // mkdir -p
        function mkdirParents(dirPath) {
          dirPath.split(/\/|\\/).reduce(function(parents, dir) {
            var path = pathUtil.resolve((parents += dir + pathUtil.sep));
            if (!fs.existsSync(path)) {
              fs.mkdirSync(path);
            } else if (!fs.statSync(path).isDirectory()) {
              throw new Error('Non directory already exists: ' + path);
            }
            return parents;
          }, '');
        }

        try {
          exists = fs.existsSync(value);
          validPath = exists ? fs.realpathSync(value) : pathUtil.resolve(value);
          // options.exists default: true, not-bool: no-check
          if (!options.hasOwnProperty('exists') && !exists ||
              typeof options.exists === 'boolean' && options.exists !== exists) {
            error = (exists ? 'Already exists' : 'No such file or directory') +
              ': ' + validPath;
            return false;
          }
          if (!exists && options.create) {
            if (options.isDirectory) {
              mkdirParents(validPath);
            } else {
              mkdirParents(pathUtil.dirname(validPath));
              fs.closeSync(fs.openSync(validPath, 'w')); // touch
            }
            validPath = fs.realpathSync(validPath);
          }
          if (exists && (options.min || options.max ||
              options.isFile || options.isDirectory)) {
            stat = fs.statSync(validPath);
            // type check first (directory has zero size)
            if (options.isFile && !stat.isFile()) {
              error = 'Not file: ' + validPath;
              return false;
            } else if (options.isDirectory && !stat.isDirectory()) {
              error = 'Not directory: ' + validPath;
              return false;
            } else if (options.min && stat.size < +options.min ||
                options.max && stat.size > +options.max) {
              error = 'Size ' + stat.size + ' is out of range: ' + validPath;
              return false;
            }
          }
          if (typeof options.validate === 'function' &&
              (res = options.validate(validPath)) !== true) {
            if (typeof res === 'string') { error = res; }
            return false;
          }
        } catch (e) {
          error = e + '';
          return false;
        }
        return true;
      },
      // trueValue, falseValue, caseSensitive don't work.
      phContent: function(param) {
        return param === 'error' ? error :
          param !== 'min' && param !== 'max' ? null :
          options.hasOwnProperty(param) ? options[param] + '' : '';
      }
    });
    // added:     exists, create, min, max, isFile, isDirectory, validate
  /* eslint-enable key-spacing */
  options = options || {};

  if (query == null) { query = 'Input path (you can "cd" and "pwd"): '; }

  exports.question(query, readOptions);
  return validPath;
};

// props: preCheck, args, hRes, limit
function getClHandler(commandHandler, options) {
  var clHandler = {},
    hIndex = {};
  if (typeof commandHandler === 'object') {
    Object.keys(commandHandler).forEach(function(cmd) {
      if (typeof commandHandler[cmd] === 'function') {
        hIndex[options.caseSensitive ? cmd : cmd.toLowerCase()] = commandHandler[cmd];
      }
    });
    clHandler.preCheck = function(res) {
      var cmdKey;
      clHandler.args = parseCl(res);
      cmdKey = clHandler.args[0] || '';
      if (!options.caseSensitive) { cmdKey = cmdKey.toLowerCase(); }
      clHandler.hRes =
        cmdKey !== '_' && hIndex.hasOwnProperty(cmdKey)
          ? hIndex[cmdKey].apply(res, clHandler.args.slice(1)) :
          hIndex.hasOwnProperty('_') ? hIndex._.apply(res, clHandler.args) : null;
      return {res: res, forceNext: false};
    };
    if (!hIndex.hasOwnProperty('_')) {
      clHandler.limit = function() { // It's called after preCheck.
        var cmdKey = clHandler.args[0] || '';
        if (!options.caseSensitive) { cmdKey = cmdKey.toLowerCase(); }
        return hIndex.hasOwnProperty(cmdKey);
      };
    }
  } else {
    clHandler.preCheck = function(res) {
      clHandler.args = parseCl(res);
      clHandler.hRes = typeof commandHandler === 'function'
        ? commandHandler.apply(res, clHandler.args) : true; // true for break loop
      return {res: res, forceNext: false};
    };
  }
  return clHandler;
}

exports.promptCL = function(commandHandler, options) {
  /* eslint-disable key-spacing */
  var readOptions = margeOptions({
      // -------- default
      hideEchoBack:       false,
      limitMessage:       'Requested command is not available.',
      caseSensitive:      false,
      history:            true
    }, options),
    //   -------- forced
    //   trueValue, falseValue, keepWhitespace don't work.
    //   preCheck, limit (by clHandler)
    clHandler = getClHandler(commandHandler, readOptions);
  /* eslint-enable key-spacing */
  readOptions.limit = clHandler.limit;
  readOptions.preCheck = clHandler.preCheck;
  exports.prompt(readOptions);
  return clHandler.args;
};

exports.promptLoop = function(inputHandler, options) {
  /* eslint-disable key-spacing */
  var readOptions = margeOptions({
    // -------- default
    hideEchoBack:       false,
    trueValue:          null,
    falseValue:         null,
    caseSensitive:      false,
    history:            true
  }, options);
  /* eslint-enable key-spacing */
  while (true) { if (inputHandler(exports.prompt(readOptions))) { break; } }
  // return; // nothing is returned
};

exports.promptCLLoop = function(commandHandler, options) {
  /* eslint-disable key-spacing */
  var readOptions = margeOptions({
      // -------- default
      hideEchoBack:       false,
      limitMessage:       'Requested command is not available.',
      caseSensitive:      false,
      history:            true
    }, options),
    //   -------- forced
    //   trueValue, falseValue, keepWhitespace don't work.
    //   preCheck, limit (by clHandler)
    clHandler = getClHandler(commandHandler, readOptions);
  /* eslint-enable key-spacing */
  readOptions.limit = clHandler.limit;
  readOptions.preCheck = clHandler.preCheck;
  while (true) {
    exports.prompt(readOptions);
    if (clHandler.hRes) { break; }
  }
  // return; // nothing is returned
};

exports.promptSimShell = function(options) {
  /* eslint-disable key-spacing */
  return exports.prompt(margeOptions({
    // -------- default
    hideEchoBack:       false,
    history:            true
  }, options, {
    // -------- forced
    prompt:             (function() {
      return IS_WIN ? '$<cwd>>' :
        // 'user@host:cwd$ '
        (process.env.USER || '') +
        (process.env.HOSTNAME ? '@' + process.env.HOSTNAME.replace(/\..*$/, '') : '') +
        ':$<cwdHome>$ ';
    })()
  }));
  /* eslint-enable key-spacing */
};

function _keyInYN(query, options, limit) {
  var res;
  if (query == null) { query = 'Are you sure? '; }
  if ((!options || options.guide !== false) && (query += '')) {
    query = query.replace(/\s*:?\s*$/, '') + ' [y/n]: ';
  }
  /* eslint-disable key-spacing */
  res = exports.keyIn(query, margeOptions(options, {
    // -------- forced
    hideEchoBack:       false,
    limit:              limit,
    trueValue:          'y',
    falseValue:         'n',
    caseSensitive:      false
    // mask doesn't work.
  }));
  // added:     guide
  /* eslint-enable key-spacing */
  return typeof res === 'boolean' ? res : '';
}
exports.keyInYN = function(query, options) { return _keyInYN(query, options); };
exports.keyInYNStrict = function(query, options) { return _keyInYN(query, options, 'yn'); };

exports.keyInPause = function(query, options) {
  if (query == null) { query = 'Continue...'; }
  if ((!options || options.guide !== false) && (query += '')) {
    query = query.replace(/\s+$/, '') + ' (Hit any key)';
  }
  /* eslint-disable key-spacing */
  exports.keyIn(query, margeOptions({
    // -------- default
    limit:              null
  }, options, {
    // -------- forced
    hideEchoBack:       true,
    mask:               ''
  }));
  // added:     guide
  /* eslint-enable key-spacing */
  // return; // nothing is returned
};

exports.keyInSelect = function(items, query, options) {
  /* eslint-disable key-spacing */
  var readOptions = margeOptions({
      // -------- default
      hideEchoBack:       false
    }, options, {
      // -------- forced
      trueValue:          null,
      falseValue:         null,
      caseSensitive:      false,
      // limit (by items),
      phContent: function(param) {
        return param === 'itemsCount' ? items.length + '' :
          param === 'firstItem' ? (items[0] + '').trim() :
          param === 'lastItem' ? (items[items.length - 1] + '').trim() : null;
      }
    }),
    // added:     guide, cancel
    keylist = '',
    key2i = {},
    charCode = 49 /* '1' */,
    display = '\n';
  /* eslint-enable key-spacing */
  if (!Array.isArray(items) || !items.length || items.length > 35) {
    throw '`items` must be Array (max length: 35).';
  }

  items.forEach(function(item, i) {
    var key = String.fromCharCode(charCode);
    keylist += key;
    key2i[key] = i;
    display += '[' + key + '] ' + (item + '').trim() + '\n';
    charCode = charCode === 57 /* '9' */ ? 97 /* 'a' */ : charCode + 1;
  });
  if (!options || options.cancel !== false) {
    keylist += '0';
    key2i['0'] = -1;
    display += '[0] ' +
      (options && options.cancel != null && typeof options.cancel !== 'boolean'
        ? (options.cancel + '').trim() : 'CANCEL') + '\n';
  }
  readOptions.limit = keylist;
  display += '\n';

  if (query == null) { query = 'Choose one from list: '; }
  if ((query += '')) {
    if (!options || options.guide !== false) {
      query = query.replace(/\s*:?\s*$/, '') + ' [$<limit>]: ';
    }
    display += query;
  }

  return key2i[exports.keyIn(display, readOptions).toLowerCase()];
};

exports.getRawInput = function() { return rawInput; };

// ======== DEPRECATED ========
function _setOption(optionName, args) {
  var options;
  if (args.length) { options = {}; options[optionName] = args[0]; }
  return exports.setDefaultOptions(options)[optionName];
}
exports.setPrint = function() { return _setOption('print', arguments); };
exports.setPrompt = function() { return _setOption('prompt', arguments); };
exports.setEncoding = function() { return _setOption('encoding', arguments); };
exports.setMask = function() { return _setOption('mask', arguments); };
exports.setBufferSize = function() { return _setOption('bufferSize', arguments); };


/***/ }),

/***/ 317:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 982:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 896:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 857:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 928:
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(201);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;