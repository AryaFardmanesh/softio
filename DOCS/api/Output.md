# 🖨️ Out Class – Output Methods

The `Out` class in **Softio** provides utility methods for printing and formatting output to the console. These methods allow you to display messages with custom formatting, print errors, and even wrap functions with styled output.

---

## 📥 Accessing the `Out` Class

You can access the `Out` class in two ways:

```js
// Full import
const Console = require('softio');
Console.Out;

// Or using destructuring
const { Out } = require('softio');
```

---

## 🧪 Available Methods

### 🔹 `static write(...message: any[]): void`

Prints messages to the console **without a newline**.

* **Parameters**:

  * `...message`: One or more values to print. They are concatenated with a space.
* **Returns**: `void`
* **Example**:

```js
Console.Out.write('Hello world!');
Console.Out.write('Welcome');
Console.Out.write([10, true, 'Hello']);

/*
Output:
Hello world!Welcome[10, true, "Hello"]
*/
```

---

### 🔹 `static writeln(...message: unknown[]): void`

Prints messages to the console **followed by a newline**.

* **Parameters**:

  * `...message`: One or more values to print.
* **Returns**: `void`
* **Example**:

```js
Console.Out.writeln('Hello world!');
Console.Out.writeln('Welcome');
Console.Out.writeln([10, true, 'Hello']);

/*
Output:
Hello world!
Welcome
[10, true, "Hello"]
*/
```

---

### 🔹 `static printf(message: string, ...argv: any[]): void`

Prints a formatted message, similar to C’s `printf`.

* **Parameters**:

  * `message`: A format string with `%v` placeholders.
  * `...argv`: Values to replace placeholders.

* **Returns**: `void`

* **Notes**:

  * No newline is added automatically.
  * Use `%v` for value substitution.
  * Supports all data types.
  * If `%v` placeholders exceed the number of values, `undefined` will appear.
  * Extra values beyond the number of placeholders are ignored.

* **Example**:

```js
Console.Out.printf('Hello %v\n', 'John');

/*
Output:
Hello John
*/
```

---

### 🔹 `static error(message: string, ...argv: any[]): void`

Prints a formatted message to **stderr**, typically used for errors.

* **Parameters**:

  * `message`: A format string with `%v` placeholders.
  * `...argv`: Values to replace placeholders.

* **Returns**: `void`

* **Notes**: Same formatting behavior as `printf`.

* **Example**:

```js
Console.Out.error('Error: %v\n', 'Something went wrong');

/*
Output to stderr:
Error: Something went wrong
*/
```

---

### 🔹 `static shot<T extends Function>(func: T, style: ShotStyleT): T`

Wraps a given function and **enhances its output with styling** (e.g., color, background, underline). Useful for dynamically creating styled versions of `write`, `printf`, or any other output function.

* **Parameters**:

  * `func`: A function to wrap (e.g., `Console.Out.write`).
  * `style`: An object defining output styles such as `color`, `background`, and `style` (e.g., underline).

* **Returns**: A new function with the same behavior, but styled output.

* **Notes**:

  * Preserves arguments passed to the original function.
  * Works with native output functions like `process.stdout.write`.

* **Example**:

```js
const print = Console.Out.shot(Console.Out.write, {
  color: 'blue',
  background: 'red',
  style: 'underline'
});

print('Styled text: blue, red background, underlined');
```

---

## 📝 Summary

| Method    | Description                           |
| --------- | ------------------------------------- |
| `write`   | Print to stdout without newline       |
| `writeln` | Print to stdout with newline          |
| `printf`  | Formatted output (C-style)            |
| `error`   | Formatted output to stderr            |
| `shot`    | Create a styled version of a function |

For advanced formatting or theming output, consider combining `shot()` with existing `Out` methods.

---

Continue to the next section: [📥 Input Methods →](./Input.md)
