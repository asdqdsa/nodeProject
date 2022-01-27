// Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1piece of land. Some examples for better visualization:
// https://www.codewars.com/kata/5839c48f0cf94640a20001d3/train/javascript
// ['XOOXO',
//  'XOOXO',
//  'OOOXO',
//  'XXOXO',
//  'OXOOO']


function landPerimeter(arr) {
  let convertArr = arr.map(el => el.split('').map(element => element === 'X' ? element = 4 : element = 0));

  function getNeighborCount(row) {
    return row.map((val, i, a) => {
      if (val === 0) return val;
      if ((a[i + 1] > 0) && (a[i - 1] > 0)) return val - 2;
      else if ((a[i + 1] > 0) || (a[i - 1] > 0)) return val - 1;
      else return val;
    });
  }
  convertArr = convertArr.map(row => getNeighborCount(row));
  let transArr = [];
  for (let i = 0; i < convertArr.length; i++) {
    for (let j = convertArr[i].length - 1; j > -1; j--) {
      transArr.push(Array.from(convertArr[i].length - 1));
      transArr[convertArr[i].length - 1 - j].push(convertArr[i][j])
    }
  }
  console.log('hi')
  return 'Total land perimeter: ' + transArr.map(row => getNeighborCount(row))
		.slice(0, convertArr[0].length).reverse().map(e => e.reverse())
		.map(e => e.reduce((curr, next) => +curr + +next))
		.reduce((curr, next) => curr + next);
}

landPerimeter(['XOOO',
'XOXO',
'XOXO',
'OOXX',
'OOOO'])
