# Softio.js APIs Documentation
In this file we are going to list all the APIs available in Softio and explain them all.
These lists are divided into four parts, the first part is the APIs for working with output. The second part is for working with inputs and the third part is for terminal properties and styles and finally we will discuss the Event APIs.

## Table of contents
- Output APIs
- Input APIs
- Attribute APIs
- Events APIs

# Output APIs
Using these methods, you can print a message to the output and display it to the user.

These methods include:
- `write( message: any ) -> void`: This method prints the input message to the output.

**Note:** This method does not add any newline like `\n` to the end of your message and displays all messages one after the other. Take a look at the example below.

```js
// Output: Hello world!
softio.write( 'Hello ' );
softio.write( 'world!' );
```

- `writeln( message: any ) -> void`: This method prints the input message to the console, automatically appending a newline `\n`` at the end.

**Note:** If no arguments are given to this function (i.e. the message value is undefined), it will only append a newline `\n`.

***Problem***: If you accidentally pass an undefined value to this function, it will just display it as a `\n`, which means that when debugging your project, you will have to use other methods to print out the value that might be undefined.

Consider the following example:
```js
const obj = {
	value: 'test'
};

// This line below now displays a '\n' in the output instead of the word 'undefined'.
softio.writeln( obj.other /* 'other' is undefined */ );
```
