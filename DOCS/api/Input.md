# 📥 In Class – Input Methods

The `In` class in **Softio** provides methods for handling **user input** in the console. These include reading text, passwords, confirmations, and numbers.

---

## 🔧 Accessing the `In` Class

You can access `In` methods through the main `Console` object or by direct destructuring:

```js
// Access via Console
const Console = require('softio');
Console.In;

// Or using destructuring
const { In } = require('softio');
```

---

## 🧪 Available Methods

### 🔹 `static input(message?: string): string`

Prompts the user to enter a value via the console.

* **Parameters**:

  * `message` *(optional)*: A prompt to display before user input.
* **Returns**: A `string` representing the user input.
* **Example**:

```js
const name = Console.In.input('Enter your name: ');
Console.Out.writeln(`Hello, ${name}!`);
```

---

### 🔹 `static password(message?: string, char?: string): string`

Prompts the user for a **password or hidden input**, masking the characters they type.

* **Parameters**:

  * `message` *(optional)*: A prompt to display.
  * `char` *(optional)*: A character (e.g., `*`) to show instead of the actual input.
* **Returns**: A `string` containing the hidden user input.
* **Example**:

```js
const pass = Console.In.password('Enter your password: ', '*');
Console.Out.writeln('Password received!');
```

> 🛡️ This is commonly used for secure inputs, like passwords, without displaying them in the terminal.

---

### 🔹 `static confirm(message?: string): boolean`

Displays a **yes/no confirmation prompt** and returns a `boolean`.

* **Parameters**:

  * `message` *(optional)*: The confirmation question to display.
* **Returns**:

  * `true` if the user enters `yes`, `y`, or any variation (case-insensitive).
  * `false` otherwise.
* **Example**:

```js
const confirmed = Console.In.confirm('Do you want to continue?');
if (confirmed) {
  Console.Out.writeln('Continuing...');
} else {
  Console.Out.writeln('Aborted.');
}
```

> ✅ Accepts `yes`, `y`, `Y`, `YES` as true. Everything else returns `false`.

---

### 🔹 `static readNumber(message?: string): number`

Prompts the user to enter a **numeric value**.

* **Parameters**:

  * `message` *(optional)*: A prompt to display before input.
* **Returns**: A `number`. If the input is invalid, returns `NaN`.
* **Example**:

```js
const age = Console.In.readNumber('How old are you? ');
if (!isNaN(age)) {
  Console.Out.writeln(`You're ${age} years old!`);
} else {
  Console.Out.writeln('That doesn’t seem to be a valid number.');
}
```

---

## 📝 Summary

| Method       | Description                          | Return Type |
| ------------ | ------------------------------------ | ----------- |
| `input`      | Reads plain user input               | `string`    |
| `password`   | Reads hidden input (e.g., passwords) | `string`    |
| `confirm`    | Asks for a yes/no response           | `boolean`   |
| `readNumber` | Reads and parses a numeric value     | `number`    |

These input utilities make it easy to build interactive CLI apps with clear prompts and validated input handling.

---

Continue to the next section: [🛠️ Utility Methods →](./Utils.md)
