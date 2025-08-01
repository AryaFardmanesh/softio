# 🤝 Contribution Guide for Softio

Thank you for your interest in contributing to **Softio**!

Your time and effort help make this project more robust, reliable, and useful for everyone. Whether you're fixing bugs, suggesting improvements, or writing documentation, your help is appreciated. This guide outlines how to get involved and how to contribute effectively.

---

## 📌 Before You Begin

Depending on what you're contributing, please consider the following:

- ✅ If you're **suggesting an idea or a feature**, simply open an issue on our [GitHub Issues page](https://github.com/AryaFardmanesh/softio/issues). No need to read this entire file.
- ✍️ If you're **helping with documentation**, follow the tips in this file, but you can skip most sections.
- 🛠️ If you're planning to **submit code (features, fixes, etc.)**, please **read this file thoroughly** to understand our development standards and workflow.

**Helpful prerequisite docs:**

- 📄 [`docs/Labels.md`](./Labels.md) – Learn how we categorize issues and PRs.
- 🌿 [`docs/Git-Branch.md`](./Git-Branch.md) – Understand our branch naming conventions and Git flow.

---

## 📚 Table of Contents

1. [Getting Started](#getting-started)
2. [Code of Conduct](#code-of-conduct)
3. [How to Contribute](#how-to-contribute)
   - [Reporting Issues](#reporting-issues)
   - [Suggesting Features](#suggesting-features)
   - [Submitting Pull Requests](#submitting-pull-requests)
4. [Code Guidelines](#code-guidelines)
   - [Coding Style](#coding-style)
   - [Editor Configuration](#editor-configuration)
5. [Testing and Documentation](#testing-and-documentation)

---

## Getting Started

Follow these steps to set up the project locally:

1. **Fork the repository**:  
   https://github.com/AryaFardmanesh/softio

2. **Clone your fork**:

   ```sh
   git clone https://github.com/<your-username>/softio.git
   cd softio
   ```

3. **Install dependencies**:

   ```sh
   npm install
   ```

4. **Create a feature branch**:

   ```sh
   git checkout -b current
   git branch my-new-feature-name # Like fix-issue-100 or add-feature-name
   ```

---

## Code of Conduct

We follow the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/).

Please interact respectfully and constructively in all discussions, reviews, and contributions.

---

## How to Contribute

### Reporting Issues

If you find a bug, please open an issue and include:

* A short, clear title
* A detailed description
* Steps to reproduce (if possible)
* Expected vs. actual behavior
* Relevant logs or screenshots

👉 [Submit an issue](https://github.com/AryaFardmanesh/softio/issues)

---

### Suggesting Features

Want to see a new feature in Softio? We’d love to hear from you!

Include the following in your feature request:

* The feature description
* Why it's useful or necessary
* How it aligns with Softio’s mission

---

### Submitting Pull Requests

When you're ready to contribute code:

1. Make sure your code follows our [style guide](#coding-style)

2. Write or update tests for any new logic

3. Update documentation (if needed)

4. Commit with a clear message:

   ```sh
   git commit -m "[Add/Remove/Change/Build/Refactor/Etc.]: [feature description]"
   ```

5. Push your branch:

   ```sh
   git push origin my-feature
   ```

6. Open a **pull request** against the `current` branch of the original repo:

👉 [Create a Pull Request](https://github.com/AryaFardmanesh/softio/pulls)

---

## Code Guidelines

### Coding Style

Please follow these conventions:

* **Function Declarations**:

  ```ts
  function example( x: number, y: number ): void {
    console.log( x + y );
  }
  ```

* **Spacing**:

  * Space after commas and inside parentheses
  * Blank lines between logical code blocks

* **Conditionals**:

  ```ts
  if ( condition ) {
    // Code
  }else {
    // Code
  }
  ```

* **Semicolons**: Always use semicolons

* **Quotes**: Use single quotes `'like this'`

* **Indentation**: Use **tabs**, not spaces

---

### Editor Configuration

Recommended VS Code settings (add to `.vscode/settings.json`):

```json
{
  "files.eol": "\n",
  "editor.insertSpaces": false,
  "editor.tabSize": 8
}
```

* Line endings: `LF` (Unix)
* File encoding: `UTF-8`

---

## ✅ Testing and Documentation

### 🧪 Testing

If you add new features or fix bugs:

* Add test files in the `test` folder
* Run all tests before submitting:

  ```sh
  npm test
  # or for specific tests
  npm test out
  ```

### Documentation

* Update any affected sections in `docs/` if your changes alter the public API or behavior.
* Be clear and consistent in language and formatting.

---

## Thank You!

We appreciate your effort and care in making Softio better. If you have any questions or ideas, feel free to [open an issue](https://github.com/AryaFardmanesh/softio/issues) or join the discussion on GitHub.

Let’s build an exceptional console programming toolkit together! 🚀

```
