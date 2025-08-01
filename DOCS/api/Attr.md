# 🎛️ Attr Methods

The `Attr` class in **Softio** provides comprehensive control over terminal attributes, such as dimensions, text styles, colors, cursor movement, and more.

---

## 📦 Accessing Attr

You can access the `Attr` class using either of the following:

```js
const Console = require('softio');
Console.Attr;
```

Or:

```js
const { Attr } = require('softio');
```

---

## 📐 Console Dimensions & Title

### 🔹 `static get title(): string`

Returns the current console window title.

```js
Console.Out.writeln(Console.Attr.title);
```

---

### 🔹 `static set title(value: string): void`

Sets a new title for the console window.

```js
Console.Attr.title = 'My Console App';
```

---

### 🔹 `static get width(): number`

Returns the current width of the console in characters.

```js
Console.Out.writeln('Width:', Console.Attr.width);
```

---

### 🔹 `static get height(): number`

Returns the current height of the console in rows.

```js
Console.Out.writeln('Height:', Console.Attr.height);
```

---

## 🎨 Colors & Styles

### 🔹 `static color(color: ColorParam_T): void`

Sets the **text color**. Supports named colors, HEX, RGB, or ANSI 256-color codes.

```js
Console.Attr.color('red');
Console.Attr.color('#fff');
Console.Attr.color([120, 100, 50]);
Console.Attr.color(32);
```

---

### 🔹 `static background(color: BgColorParam_T): void`

Sets the **background color** with the same flexible input formats as `color()`.

```js
Console.Attr.background('#000');
Console.Attr.background('blue');
Console.Attr.background([0, 255, 255]);
```

---

### 🔹 `static style(style: ANSI_Style_T): void`

Applies a **text style** using ANSI codes.

* **Supported styles**:
  `bold`, `dim`, `italic`, `underline`, `blinking`, `reverse`, `hidden`, `strikethrough`, `default`

```js
Console.Attr.style('underline');
```

---

### 🔹 `static reset(): void`

Resets all formatting styles and colors to default.

```js
Console.Attr.reset();
```

---

### ⚠️ Deprecated Methods (Use `color()` and `background()` Instead)

#### 🔸 `colorRGB(red, green, blue): void`

```js
Console.Attr.colorRGB(255, 0, 100);
```

#### 🔸 `colorHex(hex: string): void`

```js
Console.Attr.colorHex('#ffbb00');
```

#### 🔸 `backgroundRGB(red, green, blue): void`

```js
Console.Attr.backgroundRGB(0, 255, 200);
```

#### 🔸 `backgroundHex(hex: string): void`

```js
Console.Attr.backgroundHex('abc');
```

> 🛑 **Note:** These methods are deprecated as of version `3.10.0`. Use `color()` or `background()` instead.

---

## 🧭 Cursor Control

### 🔹 `static move(x: number, y: number): void`

Moves the cursor to a new absolute position.

```js
Console.Attr.move(10, 5);
```

---

### 🔹 `static moveCol(x: number): void`

Moves the cursor to a specific column (X-axis).

```js
Console.Attr.moveCol(20);
```

---

### 🔹 `static moveHome(): void`

Moves the cursor to the top-left corner (1,1).

```js
Console.Attr.moveHome();
```

---

### 🔹 `static cursorWalk(direction: ANSI_Cursor_Movement_T, value = 1): void`

Moves the cursor in a specific direction.

* **Directions**:
  `up`, `down`, `left`, `right`, `next`, `previous`, `go-up`, `home`

```js
Console.Attr.cursorWalk('up', 2);
```

---

### 🔹 `static cursorSave(mode = 'DEC'): void`

Saves the current cursor position.

```js
Console.Attr.cursorSave();
```

---

### 🔹 `static cursorRestore(mode = 'DEC'): void`

Restores the cursor to the last saved position.

```js
Console.Attr.cursorRestore();
```

---

### 🔹 `static cursorStyle(style: 'visible' | 'invisible'): void`

Sets the visibility of the cursor.

```js
Console.Attr.cursorStyle('invisible');
```

---

## 🧹 Screen Management

### 🔹 `static erase(mode = 'entire'): void`

Clears the screen or parts of it.

* **Modes**:

  * `in-display`
  * `cursor-until-end`
  * `cursor-to-beginning`
  * `entire` *(default)*
  * `saved-lines`
  * `in-line`
  * `cursor-until-end-line`
  * `start-line-until-cursor`
  * `entire-line`

```js
Console.Attr.erase('cursor-until-end-line');
```

---

## ✅ Summary

The `Attr` class provides low-level access to terminal control using ANSI escape sequences. It enables you to:

* Manage terminal dimensions and title
* Apply styling, coloring, and background formatting
* Control and track cursor positioning
* Perform precise screen erasing

---

Continue to the next section: [📡 Events Methods →](./Events.md)
