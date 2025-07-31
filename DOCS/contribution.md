# Contribution Guidelines for Softio

Thank you for considering contributing to Softio! Your contributions are invaluable to the growth and success of this library. To ensure consistency, maintain quality, and make the collaboration process as smooth as possible, we have outlined some guidelines below. Please read them carefully before contributing.

---

## Table of Contents

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

1. Fork the repository from [GitHub](https://github.com/AryaFardmanesh/softio).
2. Clone your fork to your local machine:

   ```sh
   git clone https://github.com/<your-username>/softio.git
   ```
3. Install dependencies:

   ```sh
   npm install
   ```
4. Create a new branch for your changes:

   ```sh
   git checkout -b your-feature-branch
   ```

---

## Code of Conduct

We adhere to the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). Please ensure all interactions are respectful and constructive.

---

## How to Contribute

### Reporting Issues

If you encounter a bug or have a question, please open an issue on the [GitHub Issues page](https://github.com/AryaFardmanesh/softio/issues). Be sure to include:

- A clear and concise description of the issue.
- Steps to reproduce the problem (if applicable).
- Any relevant error messages or logs.

### Suggesting Features

We welcome feature suggestions! To suggest a new feature, please open an issue and include:

- A detailed description of the feature.
- The problem it solves.
- How it aligns with the goals of Softio.

### Submitting Pull Requests

1. Ensure your code follows the [Coding Style](#coding-style).
2. Write tests for new functionality.
3. Add or update documentation if necessary.
4. Commit your changes:

   ```sh
   git commit -m "Add feature: [short description]"
   ```

5. Push your branch to GitHub:

   ```sh
   git push origin your-feature-branch
   ```

6. Open a pull request against the `main` branch on the [original repository](https://github.com/AryaFardmanesh/softio).

---

## Code Guidelines

### Coding Style

To maintain a consistent style across the project, adhere to the following conventions:

- **Function Definitions:**

  ```ts
  function name( x: number, y: number ): void {
    console.log( x + y );
  }
  ```

- **Spacing:**
  - Place a single space after commas and before/after parentheses as shown in the example.
  - Use a single blank line to separate logical blocks of code.

- **Conditionals:**

  ```ts
  if ( condition ) {
    // Code block
  }else {
    // Code block
  }
  ```

- **Semicolons:** End all statements with semicolons.
- **Quotations:** Use single quotes (`'`) for strings.
- **Indentation:** Use tabs for indentation.

### Editor Configuration

Ensure your editor is set up correctly:

- Line endings: `LF` (Unix-style)
- Indentation: `Tab`
- File encoding: `UTF-8`

For Visual Studio Code, you can add the following settings to your workspace settings:

```json
{
  "files.eol": "\n",
  "editor.insertSpaces": false,
  "editor.tabSize": 8
}
```

---

## Testing and Documentation

- **Testing:**
  - Add tests for new features or bug fixes in the `test` folder.
  - Run tests before submitting your pull request:

    ```sh
    npm test
    # OR
    npm test out # For output methods
    ```

- **Documentation:**
  - Update relevant sections of the documentation if your changes affect public APIs or functionality.

---

Thank you for contributing to Softio! Together, we can build an amazing library. If you have any questions, feel free to reach out via the [GitHub Issues page](https://github.com/AryaFardmanesh/softio/issues).
