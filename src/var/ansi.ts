export const textColors = {
	'black': '\x1B[30m',
	'red': '\x1B[31m',
	'green': '\x1B[32m',
	'yellow': '\x1B[33m',
	'blue': '\x1B[34m',
	'magenta': '\x1B[35m',
	'cyan': '\x1B[36m',
	'white': '\x1B[37m',
	'default': '\x1B[39m',
	'bright-black': '\x1B[90m',
	'bright-red': '\x1B[91m',
	'bright-green': '\x1B[92m',
	'bright-yellow': '\x1B[93m',
	'bright-blue': '\x1B[94m',
	'bright-magenta': '\x1B[95m',
	'bright-cyan': '\x1B[96m',
	'bright-white': '\x1B[97m'
};

export const backgroundColors = {
	'black': '\x1B[40m',
	'red': '\x1B[41m',
	'green': '\x1B[42m',
	'yellow': '\x1B[43m',
	'blue': '\x1B[44m',
	'magenta': '\x1B[45m',
	'cyan': '\x1B[46m',
	'white': '\x1B[47m',
	'default': '\x1B[49m',
	'bright-black': '\x1B[100m',
	'bright-red': '\x1B[101m',
	'bright-green': '\x1B[102m',
	'bright-yellow': '\x1B[103m',
	'bright-blue': '\x1B[104m',
	'bright-magenta': '\x1B[105m',
	'bright-cyan': '\x1B[106m',
	'bright-white': '\x1B[107m'
};

export const fonts = {
	'bold': '\x1B[1m',
	'dim': '\x1B[2m',
	'italic': '\x1B[3m',
	'underline': '\x1B[4m',
	'blinking': '\x1B[5m',
	'reverse': '\x1B[7m',
	'hidden': '\x1B[8m',
	'strikethrough': '\x1B[9m'
};

export const resetFonts = {
	'bold': '\x1B[22m',
	'dim': '\x1B[22m',
	'italic': '\x1B[23m',
	'underline': '\x1B[24m',
	'blinking': '\x1B[25m',
	'reverse': '\x1B[27m',
	'hidden': '\x1B[28m',
	'strikethrough': '\x1B[29m'
};

export const cursorDirection = {
	'up': '\x1B[#A',
	'down': '\x1B[#B',
	'right': '\x1B[#C',
	'left': '\x1B[#D',
	'next': '\x1B[#E',
	'previous': '\x1B[#F',
	'line-up': '\x1B[M',
	'home': '\x1B[H'
};

export const cursorVisibility = {
	'invisible': '\x1B[?25l',
	'visible': '\x1B[?25h'
};

export const eraseMode = {
	'in-display': '\x1B[J',
	'cursor-until-end': '\x1B[0J',
	'cursor-to-beginning': '\x1B[1J',
	'entire': '\x1B[2J',
	'saved-lines': '\x1B[3J',
	'in-line': '\x1B[K',
	'cursor-until-end-line': '\x1B[0K',
	'start-line-until-cursor': '\x1B[1K',
	'entire-line': '\x1B[2K'
};

export const hexPattern = new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$');

export function convertHexToRGB(hex: string): readonly [number, number, number] {
	let cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;

	if (cleanHex.length === 3) {
		const r = parseInt(cleanHex[0]! + cleanHex[0]!, 16);
		const g = parseInt(cleanHex[1]! + cleanHex[1]!, 16);
		const b = parseInt(cleanHex[2]! + cleanHex[2]!, 16);

		if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) {
			throw new TypeError(`The code '${hex}' is not a valid hex color.`);
		}

		return [r, g, b] as const;
	}

	if (cleanHex.length === 6) {
		const num = parseInt(cleanHex, 16);

		if (Number.isNaN(num)) {
			throw new TypeError(`The code '${hex}' is not a valid hex color.`);
		}

		const r = (num >> 16) & 255;
		const g = (num >> 8) & 255;
		const b = num & 255;

		return [r, g, b] as const;
	}

	throw new TypeError(`The code '${hex}' is not a valid hex color.`);
}
