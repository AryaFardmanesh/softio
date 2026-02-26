# 📡 Events API

The `Events` class in **Softio** provides methods for handling runtime console events such as window resizing. This enables dynamic behavior in response to changes in the console environment.

---

## 📦 Accessing Events

You can access the `Events` class in two ways:

```js
const Console = require('softio');
Console.Events;
```

Or directly via destructuring:

```js
const { Events } = require('softio');
```

---

## 🧠 Available Methods

### 🔹 `static addEventListener(type: EventTypesT, listener: Function): void`

Registers a callback function that will be invoked when a specific console event occurs.

* **Parameters**:

  * `type` — *(EventTypesT)*: The name of the event to listen for.
  * `listener` — *(Function)*: A function to execute when the event is triggered.

* **Supported Event Types**:

  * `'resize'` — Fired when the terminal window size changes.

* **Example**:

```js
Console.Events.addEventListener('resize', () => {
  Console.Out.writeln('Console resized!');
});
```

---

### 🔹 `static removeEventListener(type: EventTypesT): void`

Unregisters a previously added event listener.

* **Parameters**:

  * `type` — *(EventTypesT)*: The type of event for which the listener should be removed.

* **Example**:

```js
Console.Events.removeEventListener('resize');
```

---

## ✅ Summary

The `Events` class provides minimal yet essential support for managing runtime console behaviors. As of now, the only supported event is:

* **`resize`** — Enables responsive CLI interfaces that react to terminal size changes.

This is especially useful when designing dynamic layouts or rendering adaptive UIs in the terminal.

---

- Back to the previous section: [🎛️ Attr Methods ←](./Attr.md)
- Continue to the next section: [🍁 Styler Methods →](./Styler.md)
