# Softio Tutorials

This file provides a comprehensive overview of all the methods available in the Softio library, serving as both an educational and instructional guide to help you utilize the library effectively.

## Installation

### Using NPM
To use this package, you need to install it first. Softio is currently available on NPM but not yet released on Yarn. Use the following command to install the package:

```sh
npm install --save softio
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

### Utilities Methods

The **Utilities** class provides general-purpose methods for console management.

#### Accessing Utilities Methods

```js
const Console = require('softio');
Console.Utilities; // Access the Utilities class
```

Alternatively:

```js
const { Utilities } = require('softio');
```

#### Methods

##### `static center(message: string): string`
Centers a string by padding it with spaces.

- **Parameters**:
  - `message`: The text to center.
- **Example**:

```js
Console.Out.writeln(Console.Utilities.center('Welcome'));
```

##### `static clear(): void`
Clears the console screen.

- **Example**:

```js
Console.Utilities.clear();
```
