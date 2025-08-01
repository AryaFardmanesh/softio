# Softio: Elegant Console I/O for Node.js 🚀

<p align="center">
  <img src="https://github.com/AryaFardmanesh/softio/blob/main/logo/logo-300x300.png" alt="Softio Logo" width="200"/>
  <br />
  <a href="https://www.designevo.com/" title="Free Online Logo Maker"><sub>&copy; Logo by DesignEvo</sub></a>
</p>

---

**Softio** is a powerful, modular, and developer-friendly library that enhances **console-based programming in Node.js**.

With Softio, you can build clean and expressive CLI applications using a unified API for input/output, console control, formatting, event handling, and more—all in a **single elegant package**.

---

## 🚀 Why Softio?

Despite JavaScript's flexibility and Node.js's extensive capabilities, building expressive and interactive console programs is still cumbersome. You often end up juggling between `readline`, `process.stdout` and other utilities—resulting in fragmented code.

**Softio simplifies this** by combining all essential features into one cohesive toolkit:

- ✅ Clean and consistent I/O interface  
- 🎨 Built-in styling, color control, and cursor management  
- 📏 Easy formatting and centering utilities  
- 🧠 Event listeners for console changes like `resize`  
- 🧩 Fully modular design (use what you need)

---

## ✨ Features at a Glance

| Category      | Description |
|--------------|-------------|
| 🖋️ **Input**    | Read strings, numbers, confirmations, and more interactively. |
| 📤 **Output**   | Write with styling, line breaks, spacing, and formatted blocks. |
| 🎨 **Attr**     | Set foreground/background colors, styles, and cursor movement. |
| 🧱 **Utils**    | Center text, pad content, and format outputs cleanly. |
| 🧭 **Events**   | Listen for runtime events like terminal resize. |

Everything is accessible under a unified interface like `Console.In`, `Console.Out`, `Console.Attr`, etc.

---

## ⚙️ Installation

Install Softio using [npm](https://www.npmjs.com/package/softio):

```bash
npm install softio
```

Install Softio using [yarn](https://yarnpkg.com/package?q=ssoftio&name=softio):

```bash
yarn add softio
```

---

## 🚀 Quick Example

Here’s a simple interactive program using Softio:

```js
const Console = require('softio');

const name = Console.In.input('Enter your name: ');
const age = Console.In.readNumber('Enter your age: ');

if (age < 18) {
  Console.Out.write('Sorry, you must be at least 18.');
  process.exit();
}

Console.Out.writeln(Console.Utils.center(`🎉 Welcome, ${name}! 🎉`));
```

🔹 **Run this in your terminal** and see Softio in action!

---

## 📚 Documentation

🧾 Explore the full documentation:

* 👉 [Getting Started Guide](https://github.com/AryaFardmanesh/softio/blob/main/docs/Get-Started.md)
* 📘 [API Reference](https://github.com/AryaFardmanesh/softio/blob/main/docs/api/Introduction.md)

Every module is documented with examples, parameter types, and usage patterns.

---

## 🤝 Contributing

We welcome contributions! Whether you're fixing bugs, suggesting enhancements, or writing docs, we appreciate your help.

Start here 👉 [Contributing Guide](https://github.com/AryaFardmanesh/softio/blob/main/docs/Contribution.md)

---

## ⚖️ License

Softio is licensed under the [MIT License](https://github.com/AryaFardmanesh/softio/blob/main/LICENSE). Use it freely in personal or commercial projects.

---

## 🙌 Final Words

Softio aims to **make console programming expressive, simple, and elegant**.

We hope it saves you time, reduces clutter, and helps you build better CLI tools.

> ⭐️ Star the repo to support the project and stay up-to-date with the latest features.

Happy coding! 🧠💻
