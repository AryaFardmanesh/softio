# 🚀 Get Started with Softio

Welcome to the **Softio** documentation. This guide serves as the entry point for understanding and using the project. It introduces you to the structure of the repository, how to build the project, and where to find the relevant documentation for each part.

---

## 🛠️ How to Build the Project

Softio uses **Gulp** and its plugins to build and process source code. To build the project locally, follow these steps:

### 1. Install Prerequisites

Ensure the following tools are installed on your system:

- [Node.js](https://nodejs.org/)
- `npm` (comes with Node.js)
- `gulp-cli` (installed globally)

To install `gulp-cli` globally, run:

```sh
npm install --global gulp-cli
```

---

### 2. Clone the Repository

Use the following commands to clone and navigate to the project:

```sh
git clone https://github.com/AryaFardmanesh/softio.git
cd softio
```

---

### 3. Install Dependencies

Install all required packages:

```sh
npm install
```

---

### 4. Build the Project

You can now run the test and build scripts:

```sh
npm run test   # Run unit tests (Optional)
npm run build  # Build the project
```

Alternatively, if you'd like to use Gulp directly:

```sh
gulp
```

> 📄 The build logic is defined in the `gulpfile.js` located in the root of the repository.

---

## 📁 Project Structure Overview

The directory layout of the Softio project is structured as follows:

```txt
softio/
├── .github/             # GitHub Actions and workflows
│   └── workflows/
│       └── npm-publish.yml
├── dist/                # Compiled output
│   ├── main.d.ts
│   └── main.js
├── docs/                # Documentation files
│   ├── api/             # Main learning content
│   │   ├── Attr.md
│   │   ├── Events.md
│   │   ├── Input.md
│   │   ├── Introduction.md
│   │   ├── Output.md
│   │   └── Utils.md
│   ├── Contribution.md  # Guide to contributing
│   ├── Git-Branch.md    # Git branching model
│   └── Labels.md        # Issue & PR labeling guide
├── logo/                # Project logos and assets
├── src/                 # Source code
├── test/                # Unit tests
├── AUTHORS.txt
├── CHANGELOG.md
└── config.js            # Project build configuration
```

---

## ⚙️ Configuration Files

The project uses the following key configuration files:

* `config.js` — Main build configuration (used by Gulp)
* `babel.config.js` — Babel setup for running tests via `jest-typescript`
* `tsconfig.json` — TypeScript compiler configuration applied to `src/`

These files ensure consistent building, testing, and compiling of the codebase.

---

## 📘 Learning Softio

To begin learning how **Softio** works, head over to:

```plaintext
docs/api/Introduction.md
```

This file provides a detailed introduction to the project, including how to install, configure, and use Softio. It serves as the starting point for the in-depth API documentation that follows in the same directory.

[Learn Now!](./api/Introduction.md)

---

## 🙌 Contributing

For those who want to contribute to Softio, make sure to read:

* [`docs/Labels.md`](./Labels.md)
* [`docs/Git-Branch.md`](./Git-Branch.md)
* [`docs/Contribution.md`](./Contribution.md)

These files outline contribution guidelines, branching strategy, and issue labeling practices.
