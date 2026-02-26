# 🍁 Out Class – Output Methods

The `Styler` class in **Softio** provides useful methods for formatting output to the console. These methods allow you to display messages with custom formatting, display your message in color, and with your own custom properties.

---

## 📥 Accessing the `Styler` Class

You can access the `Styler` class in two ways:

```js
// Full import
const Console = require('softio');
Console.Styler;

// Or using destructuring
const { Styler } = require('softio');
```

---

## 🧪 Available Methods

### 🔹 `colors`

Text coloring.

* **Colors**:

  * `.color(name: ColorParam_T)`: Changes the text to the desired color.
  * `.black`
  * `.red`
  * `.green`
  * `.yellow`
  * `.blue`
  * `.magenta`
  * `.cyan`
  * `.white`
  * `.brightBlack`
  * `.brightRed`
  * `.brightGreen`
  * `.brightYellow`
  * `.brightBlue`
  * `.brightMagenta`
  * `.brightCyan`
  * `.brightWhite`

* **Example**:

```js
const style = Console.Styler;

style.color('blue')('Hello world!');
style.color('#FFF')('Hello world!');
style.blue('Hello world!');
```

---

### 🔹 `backgrounds`

Text background color.

* **Colors**:

  * `.background(name: BgColorParam_T)`: Changes the background color of the text to the desired color.
  * `.bgBlack`
  * `.bgRed`
  * `.bgGreen`
  * `.bgYellow`
  * `.bgBlue`
  * `.bgMagenta`
  * `.bgCyan`
  * `.bgWhite`
  * `.bgBrightBlack`
  * `.bgBrightRed`
  * `.bgBrightGreen`
  * `.bgBrightYellow`
  * `.bgBrightBlue`
  * `.bgBrightMagenta`
  * `.bgBrightCyan`
  * `.bgBrightWhite`

* **Returns**: `void`
* **Example**:

```js
const style = Console.Styler;

style.background('red')('Hello world!');
style.background('#F00')('Hello world!');
style.bgRed('Hello world!');
```

---

### 🔹 `Fonts`

Changes the font of the text.

* **Parameters**:

  * `.bold`
  * `.dim`
  * `.italic`
  * `.underline`
  * `.blinking`
  * `.reverse`
  * `.hidden`
  * `.strikethrough`

* **Example**:

```js
const style = Console.Styler;

style.bold('Hello world!');
style.bold.italic('Hello world!');
style.strikethrough.reverse.underline('Hello world!');
```

---

### 🔹 `.center`

Centering text in the console.

* **Example**:

```js
const style = Console.Styler;

const txt = style.center('Hello world!');
Console.Out.writeln(txt);
```

---

## 📝 Summary

| Method    | Description                           |
| --------- | ------------------------------------- |
| `color`   | Text coloring                         |
| `bg`      | Text background color                 |
| `font`    | Text font                             |
| `center`  | Centering text                        |

---

- Back to the previous section: [📡 Event Methods ←](./Events.md)
