# Welcome to Softio project. 🔥
<p align="center">
	<img src="https://github.com/AryaFardmanesh/softio/blob/main/logo/logo-300x300.png" alt="The softio logo." />
	<br />
	<a href="https://www.designevo.com/" title="Free Online Logo Maker"><b>&copy; Logo Copyright By DesignEvo 🙏</b></a>
</p>

In late 1995, Brendan Eich released the first version of JavaScript. It is known as one of the main languages ​​of browsers (client side). Later, a person named Ryan Dahl managed to create NodeJs in mid-2009, which allowed users to use JavaScript outside the browser.

JavaScript, like any other programming language, has its strengths and weaknesses.

As mentioned at the beginning, the purpose of creating JavaScript was to improve the performance of web pages, which means that this language itself does not have very advanced tools for working outside the browser.

In most of the world's leading languages, you have tools for working with IO (input and output) in your program, which allows you to easily create console programs. Of course, there are very powerful tools for this inside NodeJs modules, but the problem is that they are all divided into different sections and not all of them are inside the object, which makes your code isn't clean.
The goal of the Softio project is to collect all the modules that NodeJs provides for working with the console in one place and give them to other users.

Our intention is to use all the potential of NodeJs so that you can easily create any console application in NodeJs. Without the need to import a module for every task in your application.
Softio allows you to import just one module and do a lot of different things in your application, such as reading text from the input and even getting a number from the input, writing (printing) data to the console, etc.

These also include a number of more advanced features. Such as changing the colors of text and backgrounds or even displaying information in the middle of a line or even defining events for the console such as the resize event so that when the user resizes the console window you can execute a function.

To read the complete and detailed documentation of Softio, [just refer to this link.](https://github.com/AryaFardmanesh/softio/blob/main/DOCS/api.md)

# Get Started

To get started, just run the following command in your app's terminal to install the Softio package in your app.

```sh
npm install softio
```

After installing Softio, you can import it into your application and use it.
Below is a sample code of how to use this package in the beginning:

```js
const softio = require( 'softio' );

void ( async function () {

	const name = await softio.input( 'Enter your name: ' );
	const age = await softio.readNumber( 'Enter your age: ' );

	if ( age < 18 ) {
		softio.write( `Sorry, your age is under 18 :(` );
		return;
	}

	softio.writeln( softio.center( `Welcome ${ name }.` ) );

} ) ();
```

This is a very simple program. Run it and see the result.
[Seeing Softio documentation](https://github.com/AryaFardmanesh/softio/blob/main/DOCS/api.md)

# Licence
Softio is licensed under the <a href="https://github.com/AryaFardmanesh/softio/blob/main/LICENSE">MIT</a>, allowing you to modify it safely.
