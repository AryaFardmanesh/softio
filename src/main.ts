import output from './output';
import input from './input';
import attributes from './attributes';
import helper from './helper';

const softio = {
	version: '@VERSION',
	...output,
	...input,
	...attributes,
	...helper
};

export { softio }
