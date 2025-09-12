# 🏷️ GitHub Labels Guide

This document explains the labeling system used in the **Softio** project. Labels help us organize issues and pull requests (PRs), track progress, assign priorities, and improve team collaboration.

We categorize labels by **type**, **status**, **priority**, **community/help**, and **miscellaneous purposes**. Please read this guide before creating or labeling issues or PRs.

---

## 📂 Categories Overview

### 🔶 Type Labels (`type:*`)
These labels describe the **nature** of the issue or pull request.

| Label Name          | Description                                         |
|---------------------|-----------------------------------------------------|
| `type: bug`         | A defect in the system or something that’s broken. |
| `type: feature`     | A brand-new feature or functionality to be added.  |
| `type: enhancement` | Improvements to existing features or design.       |
| `type: refactor`    | Code improvements that don’t change behavior.      |
| `type: documentation` | Anything related to writing or fixing docs.     |
| `type: test`        | Issues or PRs about testing or improving coverage. |
| `type: build`       | Build pipeline, CI/CD, or config changes.          |
| `type: release`     | Work related to preparing or managing releases.    |
| `type: security`    | Security vulnerabilities or enhancements.          |

🔸 **Color**: `#fef2c0`

---

### 🟦 Status Labels (`status:*`)
These describe the **current state or condition** of an issue or pull request.

| Label Name               | Description                                                   |
|--------------------------|---------------------------------------------------------------|
| `status: in progress`    | Work has begun on this issue or PR.                          |
| `status: blocked`        | This is blocked by another task or dependency.               |
| `status: needs review`   | Needs peer or maintainer review (e.g., code or content).     |
| `status: cannot implement` | This will not be implemented due to a technical or strategic reason. |
| `status: discussion`     | This is open for debate, feedback, or brainstorming.         |

🔹 **Color**: `#c5def5`

---

### 🟩 Priority Labels (`priority:*`)
Use these to show **how important or urgent** a task is.

| Label Name         | Description                                    |
|--------------------|------------------------------------------------|
| `priority: high`   | Critical — needs to be addressed quickly.      |
| `priority: medium` | Important but not blocking other tasks.        |
| `priority: low`    | Not time-sensitive or can be addressed later.  |
| `priority: urgent` | Must be handled immediately (e.g., hotfix).    |

🟢 **Color**: `#d4f8db`

---

### 🟪 Help & Community Labels
These labels are useful for onboarding contributors or when further input is required.

| Label Name            | Description                                                    |
|------------------------|----------------------------------------------------------------|
| `help wanted`          | Maintainers need community help with this.                    |
| `good first issue`     | Suitable for first-time contributors (includes guidance).      |
| `needs clarification`  | Needs more detail before it can be worked on or reviewed.     |

🟣 **Color**: `#e6ccff`

---

### 🔴 Miscellaneous Labels
Labels for ideas, feedback, questions, or issue closures.

| Label Name       | Description                                             |
|------------------|---------------------------------------------------------|
| `idea`           | Suggestion or potential improvement for discussion.     |
| `question`       | Open-ended inquiry or clarification about the project.  |
| `wontfix`        | This issue will not be addressed for now or ever.       |

🔴 **Color**: `#ffcccc`

---

## 🏷️ Label Usage Rules

- Apply **only one `type:` label** per issue/PR.
- Combine `type:`, `status:`, and `priority:` labels when needed.
- Only use `good first issue` if you provide enough detail for beginners.
- If you're unsure which label to use, ask a maintainer or use `status: discussion`.

---

## 🗂️ Version Management: Use Milestones Instead

We no longer use labels like `v-1`, `v-2`, etc.  
Instead, we use **GitHub Milestones** to track issues and pull requests by release version.

Examples:
- `v1.0.0`
- `v1.1.0`
- `v2.0.0`

Milestones help us plan and group tasks per version in a clean and organized way.

---

## ✅ Summary Table

| Category       | Prefix        | Example Label           | Color     |
|----------------|---------------|--------------------------|-----------|
| Type           | `type:`       | `type: bug`              | `#fef2c0` |
| Status         | `status:`     | `status: in progress`    | `#c5def5` |
| Priority       | `priority:`   | `priority: high`         | `#d4f8db` |
| Help/Community | *(none)*      | `help wanted`            | `#e6ccff` |
| Miscellaneous  | *(none)*      | `idea`, `question`       | `#ffcccc` |

---

## 📬 Questions or Suggestions?

If you have feedback or want to suggest new labels, open an issue with the `idea` or `question` label and explain your suggestion clearly.
