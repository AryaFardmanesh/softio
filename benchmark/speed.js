const { performance } = require( 'node:perf_hooks' );
const Console = require( './../dist/main' );

console.log( '\n=========== Softio Benchmark ===========' );
const Styler = Console.Styler;
const text = 'Hello, benchmark!';

console.log( 'Styler methods:' );

bench( '  Console.Styler.color(name)', () => Styler.color( 'red' )( text ) );
bench( '  Console.Styler.color(hex)', () => Styler.color( '#ccc' )( text ) );
bench( '  Console.Styler.color(rgb)', () => Styler.color( [ 10, 20, 30 ] )( text ) );
bench( '  Console.Styler.color(ansi)', () => Styler.color( 18 )( text ) );
bench( '  Console.Styler.red', () => Styler.red( text ) );
bench( '  Console.Styler.blue', () => Styler.blue( text ) );

console.log();

bench( '  Console.Styler.background(name)', () => Styler.background( 'red' )( text ) );
bench( '  Console.Styler.background(hex)', () => Styler.background( '#ccc' )( text ) );
bench( '  Console.Styler.background(rgb)', () => Styler.background( [ 10, 20, 30 ] )( text ) );
bench( '  Console.Styler.background(ansi)', () => Styler.background( 18 )( text ) );
bench( '  Console.Styler.bgRed', () => Styler.bgRed( text ) );
bench( '  Console.Styler.bgBlue', () => Styler.bgBlue( text ) );

console.log();

bench( '  Console.Styler.bold(text)', () => Styler.bold( text ) );
bench( '  Console.Styler.dim(text)', () => Styler.dim( text ) );
bench( '  Console.Styler.italic(text)', () => Styler.italic( text ) );

console.log();

bench( '  Console.Styler.bold.italic(text)', () => Styler.bold.italic( text ) );
bench( '  Console.Styler.dim.italic.underline(text)', () => Styler.dim.italic.underline( text ) );
bench( '  Console.Styler.italic.bold.red.bgBlack(text)', () => Styler.italic.bold.red.bgBlack( text ) );

console.log( '========================================\n' );


/**
 * @description To test the speed of functions.
 * @param { string } name
 * @param { Function } fn
 * @param { number } iterations
 * @returns { number }
**/
function bench(name, fn, iterations = 100000) {
	const start = performance.now();
	for (let i = 0; i < iterations; i++) fn();
	const end = performance.now();
	const total = end - start;

	console.log( `${name.padEnd(20)}: ${total.toFixed(2)} ms` );
	return total;
}

/*
History of benchmarks

Version 4.0.0:
=========== Softio Benchmark ===========
Console.Styler.color(name): 91.75 ms
Console.Styler.color(hex): 132.24 ms
Console.Styler.color(rgb): 90.47 ms
Console.Styler.color(ansi): 78.59 ms

Console.Styler.background(name): 88.35 ms
Console.Styler.background(hex): 123.77 ms
Console.Styler.background(rgb): 89.87 ms
Console.Styler.background(ansi): 78.50 ms

Console.Styler.bold.red(text): 99.47 ms
Console.Styler.bold.red.bgBlue(text): 126.85 ms
========================================

Version 4.1.0:
=========== Softio Benchmark ===========
Console.Styler.color(name): 38.18 ms
Console.Styler.color(hex): 72.62 ms
Console.Styler.color(rgb): 40.99 ms
Console.Styler.color(ansi): 35.64 ms
Console.Styler.red: 22.23 ms
Console.Styler.blue: 27.21 ms

Console.Styler.background(name): 43.57 ms
Console.Styler.background(hex): 69.64 ms
Console.Styler.background(rgb): 41.21 ms
Console.Styler.background(ansi): 36.55 ms
Console.Styler.bgRed: 26.11 ms
Console.Styler.bgBlue: 25.95 ms

Console.Styler.bold(text): 29.06 ms
Console.Styler.dim(text): 27.77 ms
Console.Styler.italic(text): 27.13 ms

Console.Styler.bold.italic(text): 50.77 ms
Console.Styler.dim.italic.underline(text): 71.27 ms
Console.Styler.italic.bold.red.bgBlack(text): 163.95 ms
========================================
*/
