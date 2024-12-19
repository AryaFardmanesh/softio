import output from './output';
import input from './input';
import attributes from './attributes';
import helper from './helper';
import events from './events';

const softio = {
	version: '@VERSION',
	...output,
	...input,
	...attributes,
	...helper,
	...events
};

export { softio }
