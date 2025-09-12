# 📘 Introduction to Softio

Welcome to the **Softio** tutorial series!  
This document serves as a starting point for understanding what Softio is, what it's used for, and how to install and begin using it effectively.

---

## 🔍 What is Softio?

**Softio** is a lightweight and flexible **Node.js library** designed to simplify the process of building interactive **console applications**.

With Softio, developers can easily:

- Display styled text in various **colors** and **formats**
- Control **cursor position**
- Handle **console events** like screen resizing
- Collect **user input**
- Manage **console properties**
- Utilize built-in **helper functions** (e.g., centering text, clearing the screen)

Softio makes it easy to build **simple, efficient, and dynamic terminal applications** without the need for complex setup or third-party UI frameworks.

### 🌱 Use Cases

Softio is ideal for:
- Command-line tools
- Console-based interfaces
- Text-based games
- Development utilities

While it's already perfect for lightweight CLI applications, our **long-term vision** is to evolve Softio into a robust platform for building **professional terminal applications** and even **console games**.

### 💡 Want to contribute or suggest a feature?

Visit the [Softio GitHub repository](https://github.com/AryaFardmanesh/softio) and check the **Projects** tab to see planned features.  
If you have ideas or suggestions, we’d love to hear from you! You can use the **Issues** section on GitHub to submit proposals, report bugs, or request features.

---

## 📦 Installation

Softio is available via **npm** and **Yarn**.

### Install via npm:
```sh
npm install softio
````

### Or via Yarn:

```sh
yarn add softio
```

---

## 📥 Importing the Library

You can use Softio with either **ES Modules** or **CommonJS**:

```js
// ES Modules
import Console from 'softio';

// CommonJS
const Console = require('softio');
```

---

### 🔷 TypeScript Support

Softio includes its own `.d.ts` type definitions.
This means you can use the library seamlessly in TypeScript projects without any additional setup.

Just install it using `npm` or `yarn`, and TypeScript will automatically detect the types.

---

## 🧭 Start Learning

Softio’s features are grouped into static methods across specialized modules. Here's a breakdown of each section and what it covers:

| Module                    | Description                                                                       |
| ------------------------- | --------------------------------------------------------------------------------- |
| [**Out**](./Output.md)    | Print messages to the console with styles, formats, and control sequences.        |
| [**In**](./Input.md)      | Read user input from the terminal, synchronously or asynchronously.               |
| [**Utils**](./Utils.md)   | Utility functions like clearing the screen, centering text, or delaying output.   |
| [**Attr**](./Attr.md)     | Access and manage terminal properties such as width, height, and text attributes. |
| [**Events**](./Events.md) | Register and handle console events (e.g., screen resize).                         |

> 🔗 Click on each section to explore more and dive into specific functionality.

---

Enjoy building with Softio!
