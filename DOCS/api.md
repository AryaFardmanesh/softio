# Softio Documentation
In this file we are going to explain the methods available in Softio and how to use them.

## Outputs Methods (Stdout, Stderr)

### `write( ...message?: unknown[] ): void`

This method is for displaying (printing) information to the console.

Bugs:
1. This method does not have the ability to print objects in the current version.

---

### `writeln( ...message?: unknown[] ): void`

This method is used to display information. The only difference between this method and the `write` method is that this method adds a newline at the end of your input message.

Bugs:
1. This method does not have the ability to print objects in the current version.

---

### `printf( message?: string, ...argv?: unknown[] ): void`

This method is implemented with the logic of the `printf` function in the C language. In this way, in the first input you give the message to the function as a string, you can declare variables in the text that you give as a message to the function, then in the next inputs this function sends these variables to the function and this function itself replaces them in your message and displays the result.

Note: You can specify the position of each argument using `%v`.

Example:
```js
const name = 'Jhon';
const role = 'admin';

// Output: Hello Jhon. Your role is admin.
softio.printf( 'Hello %v. Your role is %v.', name, role );
```

---

### `error( message?: string, ...argv?: unknown[] ): void`

This function is implemented exactly with the logic of the `printf` function, except that it prints the message as an error.
More precisely, it writes the sent message to the operating system's `stderr`.

Example:
```js
const name = 'Jhon';
const role = 'admin';

// Output: Error: By user Jhon with admin role.
softio.error( 'Error: By user %v with %v role.', name, role );
```

---

## Input Methods (Stdin)

### `input( message?: string ): Promise<string>`

Using this method you can read text from the input. This method reads the input text until the user presses the Enter button and returns the text after pressing Enter.

Example:
```js
const name = softio.input( 'Enter your name: ' );
```

---

### `confirm( message?: string ): Promise<boolean>`

This text asks the user for permission to do something and returns the result to you as a boolean.

If the user's input is the following words, the result of the function is `true`, otherwise it is always `false`.

***Note: The input to this function is not case-sensitive.***

#### True input values:
- `Y`
- `YES`
- `OK`

Example:
```js
// Input message: Do you want to exit program ? (y/n) 
const result = softio.confirm( 'Do you want to exit program ?' );
```

---

### `readNumber( message?: string ): Promise<number>`

This method reads a number from the input and returns it.

This function can read signed and unsigned numbers, as well as decimal and integer numbers from the input.

***Exception: If the input cannot be converted to a number, the result of this function is `NaN`.***

Example:
```js
// Input message: Enter your age: 
const age = softio.readNumber( 'Enter your age: ' );
```

---

## Helper Methods

### `center( message: string ): string`

The method center align the input text. By adding enough space to the beginning of the input text to center it on the page.

Example:
```js
softio.write(
	softio.center( 'Welcome.' )
);

/*
Terminal window:
|----------------------------------------|
|                Welcome.                |
|----------------------------------------|
*/
```

***Exception***:
- This method uses mathematical calculations to center your text relative to the length and width of the terminal screen. So if you print centered text on a line that already contains text, that text will no longer be centered.

For example:
```js
softio.write( 'Hello world!' );
softio.write(
	softio.center( 'Welcome.' )
);

/*
Terminal window:
|----------------------------------------|
|Hello world!                Welcome.    |
|----------------------------------------|
*/
```

But it's work when use this:

```js
// Create new line after your message.
softio.writeln( 'Hello world!' );
softio.write(
	softio.center( 'Welcome.' )
);

/*
Terminal window:
|----------------------------------------|
|Hello world!                            |
|                Welcome.                |
|----------------------------------------|
*/
```

---

### `clear(): void`

This method clears the user's terminal screen.

For example:
```js
softio.write( 'Hello world!' );
softio.clear();

/*
Terminal window:
|----------------------------------------|
|                                        |
|----------------------------------------|
*/
```

---

## Attributes Methods

### `assessor title( string ): string`

This is an assessor that allows you to read the page title and set it.

For example:
```js
// Get and print terminal title.
softio.writeln( softio.title );

// Set terminal title as 'some title'.
softio.title = 'some title';
```

---

### `get width(): number`

This property returns the current screen width of the user's terminal.

For example:
```js
softio.writeln(
	softio.width
);
```
---

### `get height(): number`

This property returns the current screen height of the user's terminal.

For example:
```js
softio.writeln(
	softio.height
);
```

---

## Events Methods

### `declare enum eventTypes`

```ts
declare enum eventTypes {
	close 		= 'close'	,
	error 		= 'error'	,
	prefinish 	= 'prefinish'	,
	finish 		= 'finish'	,
	drain 		= 'drain'	,
	data 		= 'data'	,
	end 		= 'end'		,
	readable 	= 'readable'	,
	resize 		= 'resize'	,
}
```

### `addEventListener( type: eventTypes, listener: Function ): void`

This method registers the input function as an event in the terminal and calls that function when that event occurs.

**Note:** The event names are taken from the NodeJS documentation itself and their functionality is all related to NodeJS itself, in essence this method is just an interface and does not do anything special.
Of course, it should be said that the NodeJS documentation does not refer to its website, because the definition of events is not mentioned in the NodeJS documentation itself. Rather, we have obtained them ourselves by studying the source code and trial and error.

**Note:** Some events are defined by NodeJS itself, so Softio does not remove those default events, but puts them in the new event you register so that the default function is called after your function to avoid possible problems.

For example:
```js
// Get and print terminal title.
softio.addEventListener( 'resize', () => {
	softio.writeln( 'Window resized!' );
} );
```

---

### `removeEventListener( type: eventTypes,  ): void`

This method deletes an event that has already been set.

**Note:** This method does not delete default functions.

For example:
```js
// Get and print terminal title.
softio.addEventListener( 'resize', () => {
	softio.writeln( 'Window resized!' );
} );

// The above event (resize) is canceled.
softio.removeEventListener( 'resize' );
```
