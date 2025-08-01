# 🛠️ Utils Methods

The `Utils` class in **Softio** offers general-purpose utility functions to help with console formatting, color styling, screen control, and text manipulation.

---

## 📦 Accessing Utils Methods

You can access the `Utils` class in two ways:

```js
const Console = require('softio');
Console.Utils; // Access the Utils class
```

Or using object destructuring:

```js
const { Utils } = require('softio');
```

---

## 🔧 Available Methods

### 🔹 `static center(message: string): string`

Centers a given string by adding appropriate spaces based on the console's width.

* **Parameters**:

  * `message` — The string to be centered.
* **Returns**: The centered string.

**Example**:

```js
Console.Out.writeln(Console.Utils.center('Welcome to Softio!'));
```

---

### 🔹 `static clear(): void`

Clears the entire console screen.

**Example**:

```js
Console.Utils.clear();
```

---

### 🔹 `static reset(): string`

Returns an ANSI escape code that resets all text formatting (color, style, etc.) to default.

**Example**:

```js
Console.write(Console.Utils.reset());
```

---

### 🔹 `static color(color: ColorParam_T): string`

Generates an ANSI code to change the **text color**.

* **Supports**:

  * Named colors (e.g., `'red'`)
  * HEX formats (`'#fff'`, `'000'`, `'ffffff'`)
  * RGB arrays (`[255, 100, 0]`)
  * ANSI 256 color codes (`0`–`255`)

**Example**:

```js
const red = Console.Utils.color('red');
const reset = Console.Utils.reset();
Console.write(`${red}This text is red${reset}`);
```

---

### 🔹 `static background(color: BgColorParam_T): string`

Generates an ANSI code to change the **background color**.

* **Supports**: Same formats as `color`.

**Example**:

```js
const bg = Console.Utils.background('#0000ff');
Console.write(`${bg}Text with blue background${Console.Utils.reset()}`);
```

---

### 🔹 `static fontStyle(style: ANSI_Style_T): string`

Returns an ANSI code to apply a **text style**.

* **Supported Styles**:

  * `bold`
  * `dim`
  * `italic`
  * `underline`
  * `blinking`
  * `reverse`
  * `hidden`
  * `strikethrough`
  * `default` (resets text style)

**Example**:

```js
const underline = Console.Utils.fontStyle('underline');
Console.write(`${underline}Underlined text${Console.Utils.reset()}`);
```

---

### 🔹 `static prettier(..._data: any[]): string`

Formats any kind of data (arrays, objects, primitives) into a readable, printable string — similar to JSON/stringify with enhancements for console output.

* **Parameters**: Accepts any number of values of any type.
* **Returns**: A formatted string representation.

**Example**:

```js
const user = { id: 1, name: 'admin' };
process.stdout.write(Console.Utils.prettier(user));
```

> Note: All output methods prepare data for output by default and you no longer need to use this method with output methods.

---

## 🧪 Extra Examples

```js
Console.write(Console.Utils.color([0, 255, 0]) + 'Green RGB Text' + Console.Utils.reset());
Console.write(Console.Utils.background(42) + 'ANSI Background' + Console.Utils.reset());
Console.Out.writeln(Console.Utils.center('Centered Title'));
```

---

## ✅ Summary

The `Utils` class helps simplify many common terminal formatting tasks such as:

* Coloring text/backgrounds with rich input formats
* Styling text using ANSI styles
* Centering and clearing the console
* Safely formatting and displaying any data

---

Continue to the next section: [🎛️ Attr Methods →](./Attr.md)
