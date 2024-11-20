# Softio.js
**Welcome to Softio project. 🔥**
<p align="center">
  <img src="https://github.com/AryaFardmanesh/softio/blob/main/logo/logo-300x300.png" alt="The softio logo." />
  <br />
  <a href="https://www.designevo.com/" title="Free Online Logo Maker"><b>&copy; Logo Copyright By DesignEvo 🙏</b></a>
</p>

Softio is a JavaScript/TypeScript library that allows you to work more easily with the terminal.
Using Softio you can easily write and read in the terminal.
In addition, it allows you to easily change the properties of the terminal such as background color, text color, etc.
Softio helps you write easier console programs.

# Get Started

To get started, first run the following command in your project path in the terminal to install the `softio` package in your project.
```sh
npm install softio
```
Then you can use Softio in your project as follows.
```js
const softio = require( 'softio' );

void ( async function () {

  const name = await softio.input( 'Enter your name:  );
  softio.writeln( `Welcome ${ name }.` );

} ) ();
```
To view Softio's documentation, simply visit this link to read <a href="https://github.com/AryaFardmanesh/softio/blob/main/DOCS/api.md">all available APIs</a>. We try to always keep our documentation up to date so that you can easily use our package.

# Licence
Softio is licensed under the MIT, allowing you to modify it safely.
