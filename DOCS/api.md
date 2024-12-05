# Softio Documentation
In this file we are going to explain the methods available in Softio and how to use them.

## Outputs Methods

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
