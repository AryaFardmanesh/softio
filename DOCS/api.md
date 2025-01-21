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

**note**: If you give your message in multiple separate arguments to this method, it will concatenate them with a blank space.

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

**note**: If you give your message in multiple separate arguments to this method, it will concatenate them with a blank space.

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

**note**: If you use a parameter in your message that you have not set, it will be set to `undefined` by default.

**note**: To use parameters in the message, you must use the `%v` flag.

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

**note**: If you use a parameter in your message that you have not set, it will be set to `undefined` by default.

**note**: To use parameters in the message, you must use the `%v` flag.

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

### Utilities methods

### Attr methods

### Events methods
