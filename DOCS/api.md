# Softio Tutorials

In this file I intend to examine all the methods available in the Softio library.

This file is educational and I intend to teach you how to work with this library.

## Installation

To use this package you need to install it first. You can use NPM to install this package. (This package is not yet released on Yarn)

To install this package with npm you can simply run the following command:

```sh
npm install --save softio
```

After completing the installation process you can very easily import it into your project like the following code:

```js
const Console = require( 'softio' );
```

### Installation for TypeScript

If you plan to use this package in your TypeScript project, you can easily and safely install and use it as described above.

When you install this package, the `.d.ts` file will be downloaded for you along with the final project file, and when you import it, TypeScript can easily read the declare file.

## Introduction

Generally, all methods in Softio are static methods in several classes.

Each class is divided into a group of methods that have a specific purpose in the group. The methods in each class are implemented for a specific purpose.

We have the following classes (categories):

- `Out`: The methods within this class are used to display information and print data to the terminal screen.
- `In`: The methods in this class are used to read information and take input from the user.
- `Utilities`: These methods perform various tasks, such as clearing the screen or centering text.
- `Attr`: This category of properties and methods is for setting and getting console properties, such as getting the width and height of the console screen, etc.
- `Events`: These are methods for handling console events. With these methods, you can set an event, for example the 'resize' event, to execute a function whenever the console screen changes.

Now, below we will discuss all the methods within these classes in more detail.

### Out methods

As mentioned in the introduction, this is a set of methods for working with output.

To access these methods, simply access the `Out` class in the following ways:

```js
const Console = require( 'softio' );
Console.Out; // Access the Out class.
```

Or

```js
const { Out } = require( 'softio' );
```

Then you can access the `Out` methods.

And below we will look at the methods available in this class.

---

#### `static write( ...message: any[] ): void`

This method is used to display a message to the user. Using this method, data can be displayed to the user.

**Parameters:**

- `message`: The message parameter is the data you want to print.

**note:** If you give your message in multiple separate arguments to this method, it will concatenate them with a blank space.

**Return:** This method has no return data.

**Example of usage:**

```js
const Console = require( 'softio' );

Console.Out.write( 'Hello world!' );
Console.Out.write( 'Welcome' );

/********** The console screen like: **********
* Hello world!Welcome                         *
***********************************************/
```

---

#### `static writeln( ...message: any[] ): void`

This method is used to display a message to the user. Using this method, data can be displayed to the user. After displaying the data, this method creates a new line and moves to the next line.

**Parameters:**

- `message`: The message parameter is the data you want to print.

**note:** If you give your message in multiple separate arguments to this method, it will concatenate them with a blank space.

**Return:** This method has no return data.

**Example of usage:**

```js
const Console = require( 'softio' );

Console.Out.writeln( 'Hello world!' );
Console.Out.writeln( 'Welcome' );

/********** The console screen like: **********
* Hello world!                                *
* Welcome                                     *
***********************************************/
```

---

#### `static printf( message: string, ...argv: any[] ): void`

This method is used to print data in C-style. This method is implemented with logic like the "printf" function in C language and has a similar functionality.

**Parameters:**

- `message`: The input data is set in this parameter. (The message must be of type string, otherwise it will throw an error message)
- `argv`: This parameter is for setting the arguments of the first parameter.

**note:** If you use a parameter in your message that you have not set, it will be set to `undefined` by default.

**note:** To use parameters in the message, you must use the `%v` flag.

**Return:** This method has no return data.

**Example of usage:**

```js
const Console = require( 'softio' );

Console.Out.printf( 'Hello %v\n', 'John' );
Console.Out.printf( '%v - %v - %v', 10, true, 'Hello' );

/********** The console screen like: **********
* Hello John                                  *
* 10 - true - Hello                           *
***********************************************/
```

---

#### `static error( message: string, ...argv: any[] ): void`

This function is for displaying error messages. The implementation logic of this function is exactly the same as the "printf" function, except that in the function you write the input message to STDERR (it prints it as an error).

**Parameters:**

- `message`: The input data is set in this parameter. (The message must be of type string, otherwise it will throw an error message)
- `argv`: This parameter is for setting the arguments of the first parameter.

**note:** If you use a parameter in your message that you have not set, it will be set to `undefined` by default.

**note:** To use parameters in the message, you must use the `%v` flag.

**Return:** This method has no return data.

**Example of usage:**

```js
const Console = require( 'softio' );

Console.Out.error( 'Hello %v\n', 'John' );
Console.Out.error( '%v - %v - %v', 10, true, 'Hello' );

/********** The console screen like: **********
* Hello John                                  *
* 10 - true - Hello                           *
***********************************************/
```

---

### In methods

As mentioned in the introduction, this is a set of methods for working with input.

To access these methods, simply access the `In` class in the following ways:

```js
const Console = require( 'softio' );
Console.In; // Access the In class.
```

Or

```js
const { In } = require( 'softio' );
```

Then you can access the `In` methods.

And below we will look at the methods available in this class.

---

#### `static input( message?: string ): Promise<string>`

This method is for getting data from input.

**Parameters:**

- `message`: This parameter is used to display a message to the user while entering data.

**Return:** The output of this function is a string of what the user entered.

**Example of usage:**

```js
const Console = require( 'softio' );

async function main() {
	const name = await Console.In.input( 'Enter your full name: ' );
}
main();

/********** The console screen like: **********
* Enter your full name:                       *
***********************************************/
```

---

#### `static confirm( message?: string ): Promise<boolean>`

Basically, the task of this time is to ask the user a question, and the user has to answer yes or no to it, and return the result to you in Boolean form.

**Parameters:**

- `message`: In this parameter, enter the question you want to ask the user.

**Return:** The output of this function is always a boolean. `true` means positive and `false` means negative.

**note:** If the user enters the following inputs in response to your question, it will be considered as `true`.

**note:** User input is not case sensitive.

Truthy answers:

- `yes`
- `y`
- `ok`

**Example of usage:**

```js
const Console = require( 'softio' );

async function main() {
	const result = await Console.In.confirm( 'Do you love pizza ?' );
}
main();

/********** The console screen like: **********
* Do you love pizza ? (y/n)                   *
***********************************************/
```

---

#### `readNumber( message?: string ): Promise<number>`

This function is used to get a number from the input.

**Parameters:**

- `message`: This parameter is used to display a message to the user while entering data.

**Return:** The output of this method is always a number.

**note:** If the user enters a non-numeric data item, such as a name or something else that cannot be converted to a number, the output of this function will be `NaN`.

**note:** This method uses the `Number()` function to convert the input data to a number. Therefore, it also supports other number bases such as binary, octal, hex, and decimal. They are written in the same way as in JavaScript.

**Example of usage:**

```js
const Console = require( 'softio' );

async function main() {
	const age = await Console.In.readNumber( 'How old are you ? ' );
}
main();

/********** The console screen like: **********
* How old are you ?                           *
***********************************************/
```

---

### Attr methods

This class provides methods and properties related to the console's features. With these methods and properties, you can make visual changes to the console's appearance and even get information about some of its features, such as the width and height of the screen.

To access these methods, simply access the `Attr` class in the following ways:

```js
const Console = require( 'softio' );
Console.Attr; // Access the Attr class.
```

Or

```js
const { Attr } = require( 'softio' );
```

Then you can access the `Attr` methods.

And below we will look at the methods available in this class.

---

#### `static get title(): string`

This getter is used to get the title of the console page.

**Return:** Returns the console page title as a string as output.

**Example of usage:**

```js
const Console = require( 'softio' );

// Print the terminal title
Console.Out.writeln( Console.Attr.title );
```

---

#### `static get title(): string`

This getter is used to get the title of the console page.

**Return:** Returns the console page title as a string as output.

**Example of usage:**

```js
const Console = require( 'softio' );

// Print the terminal title
Console.Out.writeln( Console.Attr.title );
```

---

#### `static set title( value: string )`

This method sets the title of the console page.

**Parameters:**

- `value`: This parameter receives the title you want to set.

**Example of usage:**

```js
const Console = require( 'softio' );

Console.Attr.title = 'Test Console App';
```

---

#### `static get width(): number`

This getter returns the width of the console screen. (By width is meant the number of characters that fit on one line of the console.)

**Return:** Returns the width of the console screen.

**Example of usage:**

```js
const Console = require( 'softio' );

Console.Out.writeln( Console.Attr.width );
```

---

#### `static get height(): number`

This getter returns the height of the console screen. (Height refers to the number of rows that fit on a page.)

**Return:** Returns the height of the console screen.

**Example of usage:**

```js
const Console = require( 'softio' );

Console.Out.writeln( Console.Attr.height );
```

---

### Events methods

This group of methods is for handling console events. Using these methods, you can set or remove an event.

To access these methods, simply access the `Events` class in the following ways:

```js
const Console = require( 'softio' );
Console.Events; // Access the Events class.
```

Or

```js
const { Events } = require( 'softio' );
```

Then you can access the `Events` methods.

And below we will look at the methods available in this class.

---

#### `static addEventListener( type: EventTypesT, listener: Function ): void`

This method is for setting an event.

**Parameters:**

- `type`: This parameter sets the event type. (We have discussed it in the Available Events section)
- `listener`: This parameter takes a function and calls it when an event occurs.

**Example of usage:**

```js
const Console = require( 'softio' );

function myFn() {
	Console.Out.write( 'Window was resized!' );
}

Console.Events.addEventListener( 'resize', myFn );
```

---

#### `static removeEventListener( type: EventTypesT ): void`

This method is used to delete an event that has already been set.

**Parameters:**

- `type`: This parameter receives the event you want to delete.

**Example of usage:**

```js
const Console = require( 'softio' );

function myFn() {
	Console.Out.write( 'Window was resized!' );

	// When console window resized, it's remove this event.
	Console.Events.removeEventListener( 'resize' );
}

Console.Events.addEventListener( 'resize', myFn );
```

---

#### All available events

In this section, we will discuss the events available in Softio.

There is nothing mentioned in the official NodeJs documentation about the "process.stdout._events" event. According to my own investigations, I found out that such an object exists in the "stdout" object. After a practical investigation on Amen, I found out that using this object, Mitwin set a function in specific keys of this object so that when a specific event occurs in the terminal, such as changing the screen size, that function is executed.

Now, by default, there are the following keys for events:

- `close`: This event is fired when the console is closed.
- `error`: A complete review of this event has not yet been completed.
- `prefinishs`: A complete review of this event has not yet been completed.
- `finish`: A complete review of this event has not yet been completed.
- `drain`: A complete review of this event has not yet been completed.
- `data`: A complete review of this event has not yet been completed.
- `end`: A complete review of this event has not yet been completed.
- `readable`: A complete review of this event has not yet been completed.
- `resize`: This event is used to resize the page.

### Utilities methods

Methods in this category are used by general users, such as clearing the console screen or centering a text.

To access these methods, simply access the `Utilities` class in the following ways:

```js
const Console = require( 'softio' );
Console.Utilities; // Access the Utilities class.
```

Or

```js
const { Utilities } = require( 'softio' );
```

Then you can access the `Utilities` methods.

And below we will look at the methods available in this class.

---

#### `static center( message: string ): string`

This method is for centering a string. Basically, this method adds space to the beginning of the text until it is centered.

**Parameters:**

- `message`: In this parameter, you provide the text you want to center align.

**Example of usage:**

```js
const Console = require( 'softio' );

Console.Out.writeln( Console.Utilities.center( 'Welcome' ) );

/********** The console screen like: **********
*                   Welcome                   *
***********************************************/
```

---

#### `static clear(): void`

This method is used to clear the console screen.

**Example of usage:**

```js
const Console = require( 'softio' );

Console.Out.writeln( 'Hello world!' );
Console.Out.writeln( 'Somethings.' );

Console.Utilities.clear();

/********** The console screen like: **********
*                                             *
***********************************************/
```

---
