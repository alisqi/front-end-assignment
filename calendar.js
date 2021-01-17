import {html, render, useState} from './standalone.module.js'

const WEEK_DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const MONTHS = [
	'January', 'February', 'March',
	'April', 'May', 'June',
	'July', 'August', 'September',
	'October', 'November', 'December'
];
const ONE_SEVENTH = 100 / 7;



/**
 * Your code goes here!
 */



/**
 * 
 * @param {HTMLElement} container
 * @param {Function} callback
 * @param {Date} [date]
 */
export default (
	container,
	callback,
	date = new Date()
) => render(
	html`
		<${Calendar}
			date=${date}
			onDateSelect=${callback}
		/>
	`,
	container
);
