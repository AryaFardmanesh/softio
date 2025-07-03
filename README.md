# Welcome to Softio! 🚀

<p align="center">
	<img src="https://github.com/AryaFardmanesh/softio/blob/main/logo/logo-300x300.png" alt="The Softio logo." />
	<br />
	<a href="https://www.designevo.com/" title="Free Online Logo Maker"><b>&copy; Logo Copyright By DesignEvo 🙏</b></a>
</p>

## Introduction

In the realm of programming, JavaScript has been a cornerstone since its inception by Brendan Eich in 1995. Fast forward to mid-2009, Ryan Dahl revolutionized its usage by introducing Node.js, enabling JavaScript to run outside of the browser.

While JavaScript shines in the browser, it lacks cohesive tools for Input/Output (I/O) operations that are commonplace in many leading programming languages. Node.js, although powerful, presents I/O functionalities in a fragmented manner that can clutter your code.

**Enter Softio!** 🌟

Our mission with Softio is to streamline console programming in Node.js by centralizing the various I/O modules into a single, elegant package. With Softio, you can enhance your console applications effortlessly—but that’s just the beginning!

## Key Features

- **Simplified I/O Handling:** Import a single module to manage various console operations, such as reading user input, writing to the console, and handling numbers with ease.
- **Advanced Console Control:** Change text and background colors, center output, and even set event listeners for actions like console resizing!
- **All-in-One Package:** Reduce the clutter of multiple imports and enhance code readability.

## Getting Started

Ready to dive in? Follow these simple steps to get started with Softio:

1. **Install Softio via npm:**

```sh
npm install softio
```

2. **Import and Use Softio in Your Application:**

Here’s a quick sample to get you started:

```js
const Console = require( 'softio' );

const name = Console.In.input( 'Enter your name: ' );
const age = Console.In.readNumber( 'Enter your age: ' );

if ( age < 18 ) {
	Console.Out.write( 'Sorry, your age is under 18 :(' );
	process.exit();
}

Console.Out.writeln( Console.Utils.center( `Welcome ${name}.` ) );
```

Run this simple program to see Softio in action!

## Documentation

For a comprehensive guide to all features and functionalities, please refer to our [official documentation](https://github.com/AryaFardmanesh/softio/blob/main/DOCS/api.md).

## License

Softio is licensed under the [MIT License](https://github.com/AryaFardmanesh/softio/blob/main/LICENSE), allowing you to modify and use it freely.

## Contributing

We welcome contributions from the community! If you’d like to help us improve Softio, please check out our [contributing guide](https://github.com/AryaFardmanesh/softio/blob/main/DOCS/contribution.md).

---

Thank you for checking out Softio! Let’s build amazing console applications together! 🎉
