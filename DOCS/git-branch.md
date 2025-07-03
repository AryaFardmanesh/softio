# Git Branch Strategy

This document outlines the **Git branch strategy** used in the project. A well-structured branching model is essential for maintaining clarity, managing features, and ensuring the overall coherence of the development process.

## Branch Structure

Our Git branching strategy is designed to reflect the stability and development stage of the codebase at any given time. Each branch has a specific role in the development lifecycle.

### Branch Hierarchy

```txt
main
├── beta
│   ├── current
│   │   ├── ...others
```

### Branch Descriptions

* **`main`**:
  This is the **main branch** containing the **stable version** of the project. It represents the production-ready state and is always ready for release.

* **`beta`**:
  This branch contains a **relatively stable** version of the project. While most features are functional, some **new or experimental features** might still need refinement. It serves as a **pre-release** version.

* **`current`**:
  This is the **active development branch**. All **new features**, **bug fixes**, and **updates** are made here. It acts as a staging area before integration into the `beta` branch.

* **`others`**:
  These are **feature-specific or experimental branches**. Development work begins here. Once tested and reviewed, changes are merged into `current`.

## Merge Strategy

Merging between branches must follow a **stage-by-stage approach** to ensure stability and quality at each level:

```txt
others → current → beta → main
```

* **Direct merges** from `others` or `current` to `main` are **not allowed**.
* Each branch must pass through the proper validation stage before progressing to the next.

> ⚠️ **Note:** Always ensure proper testing and code review before merging from one branch to the next.
