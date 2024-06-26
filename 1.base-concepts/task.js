"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = (b ** 2 - 4 * a * c);
	if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	} else if (d == 0) {
		let x1 = -b / (2 * a);
		arr.push(x1);
	}
	console.log(arr);
	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	percent = percent / 100 / 12;

	let body = amount - contribution;
	let mounthPay = body * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
	let totalPay = (mounthPay * countMonths).toFixed(2);

	return +totalPay;
}