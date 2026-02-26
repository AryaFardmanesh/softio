const { performance } = require( 'node:perf_hooks' );
const Console = require( './../dist/main' );

console.log( '\n=========== Softio Benchmark ===========' );
const text = 'Hello, benchmark!';

const Styler = Console.Styler;

bench( 'Console.Styler.color(name)', () => Styler.color( 'red' )( text ) );
bench( 'Console.Styler.color(hex)', () => Styler.color( '#ccc' )( text ) );
bench( 'Console.Styler.color(rgb)', () => Styler.color( [ 10, 20, 30 ] )( text ) );
bench( 'Console.Styler.color(ansi)', () => Styler.color( 18 )( text ) );
bench( 'Console.Styler.blue', () => Styler.blue( text ) );

console.log();

bench( 'Console.Styler.background(name)', () => Styler.background( 'red' )( text ) );
bench( 'Console.Styler.background(hex)', () => Styler.background( '#ccc' )( text ) );
bench( 'Console.Styler.background(rgb)', () => Styler.background( [ 10, 20, 30 ] )( text ) );
bench( 'Console.Styler.background(ansi)', () => Styler.background( 18 )( text ) );
bench( 'Console.Styler.bgBlue', () => Styler.bgBlue( text ) );

console.log();

bench( 'Console.Styler.bold.red(text)', () => Styler.bold.red( text ) );
bench( 'Console.Styler.bold.red.bgBlue(text)', () => Styler.bold.red.bgBlue( text ) );

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
Console.Styler.color(name): 41.17 ms
Console.Styler.color(hex): 75.43 ms
Console.Styler.color(rgb): 41.97 ms
Console.Styler.color(ansi): 40.21 ms
Console.Styler.blue : 24.90 ms

Console.Styler.background(name): 40.97 ms
Console.Styler.background(hex): 75.72 ms
Console.Styler.background(rgb): 81.94 ms
Console.Styler.background(ansi): 47.46 ms
Console.Styler.bgBlue: 28.07 ms

Console.Styler.bold.red(text): 52.65 ms
Console.Styler.bold.red.bgBlue(text): 75.04 ms
========================================
*/
