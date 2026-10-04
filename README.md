# Vanilla JS Dynamic To-Do Web Application

A lightweight, modern, interactive front-end To-Do list application built using pure **Vanilla JavaScript**, structural **HTML5**, and modern **CSS3**. This project focuses on demonstrating clean DOM manipulation patterns, interactive element state-handling, and clean separation of concerns.

## 🚀 Features

- **Instant Task Addition:** Seamlessly append new tasks dynamically without refreshing the page.
- **Toggle Complete State:** Interactive strike-through behavior by toggling custom CSS status variables on task selection.
- **Node Removal:** Clean layout extraction via direct event processing.
- **Enhanced Keyboard UX:** Support for the `Enter` key inside input fields for continuous workflow entry.
- **Completely Responsive:** Clean layouts designed to render gracefully on desktop, tablet, and mobile displays.

## 📁 Project Architecture

```text
├── index.html   # Structural bones and layout wrappers
├── styles.css   # Document layout, sizing variables, and animations
└── app.js       # Functional core, DOM listeners, and action bindings
```

## 🛠️ Step-by-Step Local Deployment

Follow these instructions to run the application locally on your computer:

### 1. Prerequisites
Ensure you have the following tools installed on your development machine:
* [Visual Studio Code (VS Code)](https://visualstudio.com)
* VS Code Extension: **Live Server** (by Ritwick Dey)

### 2. File Assembly
1. Create a brand new folder on your computer named `vanilla-todo-app`.
2. Open this folder inside VS Code.
3. Replicate the file structure by creating three individual files named exactly: `index.html`, `styles.css`, and `app.js`.
4. Copy the respective code segments into each specific file and save them.

### 3. Launching the App
1. Open your `index.html` file inside VS Code.
2. Look at the bottom-right status bar of VS Code and click on the **"Go Live"** button.
3. Alternatively, right-click anywhere inside the `index.html` file editor canvas and select **"Open with Live Server"**.
4. Your default browser will instantly spin up a local tab hosting your web application at `http://127.0.0`.

---

## 💡 Key Technical Takeaways & Concepts Learned

* **Document Object Model (DOM) Target Selection:** Utilizing modern entry lookups like `document.getElementById` to target physical interactive markup tracks efficiently.
* **Dynamic Node Generation:** Implementing programmatic node fabrication mechanics via `document.createElement()`, configuring their dynamic class trackers, and appending elements directly using `.appendChild()`.
* **Explicit Event Listeners:** Attaching targeted function bindings using `.addEventListener()` to break free from unoptimized inline attributes.
* **Preventative Input Sanitization:** Using String trimming logic `.trim()` to prevent users from flooding layouts with meaningless white-spaced blank operations.
