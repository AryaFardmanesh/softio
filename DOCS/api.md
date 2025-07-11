# Softio Tutorials

This file provides a comprehensive overview of all the methods available in the Softio library, serving as both an educational and instructional guide to help you utilize the library effectively.

## Installation

### Using NPM
To use this package, you need to install it first. Softio is currently available on NPM and Yarn. Use the following command to install the package:

```sh
npm install softio
# Or
yarn add softio
```

After installation, you can import it into your project as shown:

```js
const Console = require('softio');
```

### Installation for TypeScript
If you plan to use this package in a TypeScript project, follow the same installation steps as above. When you install the package, the accompanying `.d.ts` file will be downloaded, enabling TypeScript to recognize the library’s types.

## Introduction

Softio organizes its functionality into static methods grouped within several classes, each dedicated to specific purposes:

- **Out**: Methods for displaying information and printing data to the terminal screen.
- **In**: Methods for reading input and collecting user data.
- **Utilities**: Methods for auxiliary tasks such as clearing the screen or centering text.
- **Attr**: Properties and methods for managing console properties like screen dimensions.
- **Events**: Methods for handling console events, such as reacting to screen resizing.

Each class and its methods are detailed in the sections below.

## Classes and Methods

### Out Methods

The **Out** class contains methods for printing and formatting output in the console.

#### Accessing Out Methods

```js
const Console = require('softio');
Console.Out; // Access the Out class
```

Alternatively:

```js
const { Out } = require('softio');
```

#### Methods

##### `static write(...message: any[]): void`
Displays messages without adding a newline.

- **Parameters**:
  - `message`: The data to print. Multiple arguments are concatenated with a space.
- **Returns**: None.
- **Example**:

```js
Console.Out.write('Hello world!');
Console.Out.write('Welcome');
```

##### `static writeln(...message: any[]): void`
Displays messages and moves to the next line afterward.

- **Parameters**:
  - `message`: The data to print. Multiple arguments are concatenated with a space.
- **Returns**: None.
- **Example**:

```js
Console.Out.writeln('Hello world!');
Console.Out.writeln('Welcome');
```

##### `static printf(message: string, ...argv: any[]): void`
Formats and prints a message, similar to C's `printf` function.

- **Parameters**:
  - `message`: Format string (e.g., `"Hello %v"`).
  - `argv`: Arguments for placeholders in the message.
- **Returns**: None.
- **Example**:

```js
Console.Out.printf('Hello %v\n', 'John');
```

##### `static error(message: string, ...argv: any[]): void`
Prints an error message to STDERR.

- **Parameters**:
  - `message`: Format string.
  - `argv`: Arguments for placeholders in the message.
- **Returns**: None.
- **Example**:

```js
Console.Out.error('Error: %v', 'Something went wrong');
```

##### `static shot<T extends Function>( func: T, style: ShotStyleT ): T`
The method creates a new function that has the properties mentioned in the second parameter. You can use it to create a custom function. You can give it the 'write' method and set the text color to blue in the properties section. This method then creates a new function that, when called, displays the input data in blue.

**Note**: This method preserves the function arguments you gave it when creating a new function.
**Note**: You can customize all output functions, even methods inside the `console` object or functions like `printf`, or directly the `process.stdout.write` method.

- **Parameters**:
  - `func`: The function you want to customize.
  - `style`: Styles you want to change and adjust.
- **Returns**: A new function similar to the one you gave it.
- **Example**:

```js
const print = Console.Out.shot(Console.Out.write, {
	color: 'blue',
	background: 'red',
	style: 'underline'
});

print('The text color is blue and the background is red and style is underline.');
```

---

### In Methods

The **In** class contains methods for handling user input.

#### Accessing In Methods

```js
const Console = require('softio');
Console.In; // Access the In class
```

Alternatively:

```js
const { In } = require('softio');
```

#### Methods

##### `static input(message?: string): string`
Prompts the user for input.

- **Parameters**:
  - `message`: Optional prompt message.
- **Returns**: The user input as a string.
- **Example**:

```js
const name = Console.In.input('Enter your name: ');
```

##### `static password( message?: string, char?: string ): string`
It receives data from the user, similar to the ".input" method, except that the data the user enters is not displayed in the console. (It works like Linux systems when they want to receive your password)

- **Parameters**:
  - `message`: Optional prompt message.
  - `char`: Show alternative characters.
- **Returns**: The user input as a string.
- **Example**:

```js
const pass = Console.In.password('Enter your password: ');
```

##### `static confirm(message?: string): boolean`
Prompts the user with a yes/no question and returns a boolean.

- **Parameters**:
  - `message`: The question to display.
- **Returns**: `true` for affirmative responses, `false` otherwise.
- **Example**:

```js
const result = Console.In.confirm('Do you love pizza?');
```

##### `static readNumber(message?: string): number`
Prompts the user for numeric input.

- **Parameters**:
  - `message`: Optional prompt message.
- **Returns**: The user input as a number (or `NaN` if invalid).
- **Example**:

```js
const age = Console.In.readNumber('How old are you? ');
```

---

### Attr Methods

The **Attr** class provides methods and properties for managing console attributes.

#### Accessing Attr Methods

```js
const Console = require('softio');
Console.Attr; // Access the Attr class
```

Alternatively:

```js
const { Attr } = require('softio');
```

#### Methods

##### `static get title(): string`
Gets the console title.

- **Returns**: The title as a string.
- **Example**:

```js
Console.Out.writeln(Console.Attr.title);
```

##### `static set title(value: string)`
Sets the console title.

- **Parameters**:
  - `value`: The new title.
- **Example**:

```js
Console.Attr.title = 'New Title';
```

##### `static get width(): number`
Gets the console's width in characters.

- **Returns**: The width as a number.
- **Example**:

```js
Console.Out.writeln(Console.Attr.width);
```

##### `static get height(): number`
Gets the console's height in rows.

- **Returns**: The height as a number.
- **Example**:

```js
Console.Out.writeln(Console.Attr.height);
```

##### `public static reset(): void`
Reset all modes (styles and colors)

- **Example**:

```js
Console.Attr.reset();
```

##### `public static color( color: ANSI_Color_T | number ): void`
It is used to change the color of the text. You can use the built-in colors or you can give it a number from 0 to 255.
To see the number of colors, visit this [link](https://user-images.githubusercontent.com/995050/47952855-ecb12480-df75-11e8-89d4-ac26c50e80b9.png).

- **Example**:

```js
Console.Attr.color('red');
// Or
Console.Attr.color('#999');
// Or
Console.Attr.color([10, 20, 180]);
// Or
Console.Attr.color(45);
```

##### `public static colorRGB( red: string | number, green: string | number, blue: string | number ): void`
This method changes the text color according to the RGB code.

**Note:** This method is deprecated in version `3.10.0`.

- **Example**:

```js
Console.Attr.colorRGB(155, 150, 98);
```

##### `public static colorHex( hex: string ): void`
This method changes the text color according to the hex code.

**Note:** This method is deprecated in version `3.10.0`.

- **Example**:

```js
Console.Attr.colorHex('#F8CE0A');
```

##### `public static background( color: ANSI_Background_T | number ): void`
It is used to change the background color. You can use the built-in colors or you can give it a number from 0 to 255.
To see the number of colors, visit this [link](https://user-images.githubusercontent.com/995050/47952855-ecb12480-df75-11e8-89d4-ac26c50e80b9.png).

- **Example**:

```js
Console.Attr.background('white');
// Or
Console.Attr.background('#fff');
// Or
Console.Attr.background([110, 70, 80]);
// Or
Console.Attr.background(117);
```

##### `public static backgroundRGB( red: string | number, green: string | number, blue: string | number ): void`
This method changes the background color according to the RGB code.

**Note:** This method is deprecated in version `3.10.0`.

- **Example**:

```js
Console.Attr.backgroundRGB(17, 170, 90);
```

##### `public static backgroundHex( hex: string ): void`
This method changes the background color according to the hex code.

**Note:** This method is deprecated in version `3.10.0`.

- **Example**:

```js
Console.Attr.backgroundHex('#FFFFFF');
```

##### `public static style( style: ANSI_Style_T ): void`
This method changes the text style.

- **Example**:

```js
Console.Attr.style('bold');
```

##### `public static move( x: number | string, y: number | string ): void`
This method changes the cursor position relative to x and y.

- **Example**:

```js
Console.Attr.move(50, 150);
```

##### `public static moveCol( x: number | string ): void`
This method changes the cursor position on the x-axis.

- **Example**:

```js
Console.Attr.moveCol(50);
```

##### `public static moveHome(): void`
This method changes the cursor position to 1, 1.

- **Example**:

```js
Console.Attr.moveHome();
```

##### `public static cursorWalk( arrow: ANSI_Cursor_Movement_T, value: number | string = 1 ): void`
This method moves the cursor in different directions.

- **Example**:

```js
// Move the cursor up 2 lines.
Console.Attr.cursorWalk('up', 2);
```

##### `public static cursorSave( mode: 'DEC' | 'SCO' = 'DEC' ): void`
This method stores the cursor position.

- **Example**:

```js
Console.Attr.cursorSave();
```

##### `public static cursorRestore( mode: 'DEC' | 'SCO' = 'DEC' ): void`
This method retrieves the saved location.

- **Example**:

```js
Console.Attr.cursorRestore();
```

##### `public static cursorStyle( style: ANSI_Cursor_Style_T ): void`
This method changes the cursor style.

- **Example**:

```js
Console.Attr.cursorStyle('invisible');
```

##### `public static erase( mode: ANSI_Erase_T ): void`
This method clears the console.

- **Example**:

```js
// From the cursor position to the end of the same line.
Console.Attr.erase('cursor-until-end-line');
```

---

### Events Methods

The **Events** class handles console events, such as resizing.

#### Accessing Events Methods

```js
const Console = require('softio');
Console.Events; // Access the Events class
```

Alternatively:

```js
const { Events } = require('softio');
```

#### Methods

##### `static addEventListener(type: EventTypesT, listener: Function): void`
Registers an event listener.

- **Parameters**:
  - `type`: The event type.
  - `listener`: The callback function to execute when the event occurs.
- **Example**:

```js
Console.Events.addEventListener('resize', () => {
  Console.Out.writeln('Console resized!');
});
```

##### `static removeEventListener(type: EventTypesT): void`
Removes an event listener.

- **Parameters**:
  - `type`: The event type to remove.
- **Example**:

```js
Console.Events.removeEventListener('resize');
```

---

### Utils Methods

The **Utils** class provides general-purpose methods for console management.

#### Accessing Utils Methods

```js
const Console = require('softio');
Console.Utils; // Access the Utils class
```

Alternatively:

```js
const { Utils } = require('softio');
```

#### Methods

##### `static center(message: string): string`
Centers a string by padding it with spaces.

- **Parameters**:
  - `message`: The text to center.
- **Example**:

```js
Console.Out.writeln(Console.Utils.center('Welcome'));
```

##### `static clear(): void`
Clears the console screen.

- **Example**:

```js
Console.Utils.clear();
```

##### `static reset(): string`
Returns an ANSI code that when printed will reset all graphics modes to default.

- **Example**:

```js
Console.write(Console.Utils.reset());
```

##### `static color( color: ANSI_Color_T | number | [number, number, number] | string ): string`
Returns an ANSI code that changes the text color when you print it.

- **Example**:

```js
const red = Console.Utils.color('blue');
const reset = Console.Utils.reset();
Console.write(`${red}Hello world!${reset}`);
```

##### `static background( color: ANSI_Background_T | number | [number, number, number] | string ): string`
Returns an ANSI code that changes the background when you print it.

- **Example**:

```js
const red = Console.Utils.background('#FC8E98');
const reset = Console.Utils.reset();
Console.write(`${red}Hello world!${reset}`);
```

##### `static fontStyle( style: ANSI_Style_T ): string`
Returns an ANSI code that will change the style of the text when you print it.

- **Example**:

```js
const red = Console.Utils.fontStyle('underline');
const reset = Console.Utils.reset();
Console.write(`${red}Hello world!${reset}`);
```

##### `static prettier( ..._data: unknown[] ): string`
This function is responsible for converting input data of any type into a displayable string. Using this method, you can directly convert the data into a form that can be displayed in the console.

- **Example**:

```js
const data1 = Console.Utils.prettier(['Hello', 10, true]);

process.stdout.write(data1);
process.stdout.write(data2);
process.stdout.write(data3);
```
