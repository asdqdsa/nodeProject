//5318f00b31b30925fd0001f8  Formatting a number as price
//The function should return a string like this:Your objective is to add formatting to a plain number to display it as price.
// var price = numberToPrice(13253.5123);
// console.log(price); // 13,253.51
110.11
10.12
9.01
2,123,123.99
321,321,12

var numberToPrice = function(number) {

  if (!Number.isFinite(number)) return 'NaN';

  let resultA = String(number)
	.split('.')[0]
	.split('')
	.reverse()
	.filter(e => ![...',.-$'].includes(e))
	.map((e, i) => ((i) % 3 == 0) && i != 0 ? e + ',' : e)
	.reverse()
	.join('');
  if (number < 0) resultA = '-' + resultA;

  let resultB = '';
  if (String(number).split('.').length > 1) resultB = String(number).split('.')[1].toString().slice(0,2);
	console.log(resultA + '.' + resultB.padEnd(2, '0'));
  return resultA + '.' + resultB.padEnd(2, '0');
}

const number = '1000000.5';
numberToPrice(number);
//  let qqq = numberToPrice(number);
