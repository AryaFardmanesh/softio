# Softio Documentation
In this file we are going to explain the methods available in Softio and how to use them.

## Outputs Methods

### `write( ...message: unknown[] ): void`

This method is for displaying (printing) information to the console.

Bugs:
1. This method does not have the ability to print objects in the current version.

---

### `writeln( ...message: unknown[] ): void`

This method is used to display information. The only difference between this method and the `write` method is that this method adds a newline at the end of your input message.

Bugs:
1. This method does not have the ability to print objects in the current version.

---

### `printf( message: string, ...argv: unknown[] ): void`

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

### `error( message: string, ...argv: unknown[] ): void`

This function is implemented exactly with the logic of the `printf` function, except that it prints the message as an error.
More precisely, it writes the sent message to the operating system's `stderr`.

Example:
```js
const name = 'Jhon';
const role = 'admin';

// Output: Error: By user Jhon with admin role.
softio.error( 'Error: By user %v with %v role.', name, role );
```
