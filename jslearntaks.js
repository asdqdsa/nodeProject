
//аккамулятор
function Acc(startVal) {
	this.startVal = startVal;
  this.read = function() {
    this.startVal += +prompt('what are we adding?');
        return this.startVal;
  };
}
Acc.toString()

test3.read()


//калькулятор
function Calc(n) {
  this.read = function() {
    let operands = [];
    for (let i = 1; i <= n; i++) {
      operands.push(prompt(`val?${i}`));
    }
    this.oper = operands;
  };
  this.sum = function() {
    return this.oper.reduce((a,e) => +a + +e)
  };
  this.mul = function() {
    return this.oper.reduce((a,e) => +a * +e)
  };
};

/////////////////////////////////////////////////////////////////////////////////////////////
// мой шафл
arr = [1, 2, 3];
function shuffle(arr) {
  let res = [];
  let clone = [...arr]
  for (let i = 0; i < arr.length; i++) {
    let random = Math.floor(Math.random() * (clone.length));
    res.push(clone[random])
    clone.splice(random, 1)
  }
  return res
}

shuffle(arr)

count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 10000000; i++) {
  let array = [1, 2, 3];
  let test = shuffle(array);
  count[test.join('')]++;
}

for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}

count

// Fisher-Yates shuffle
arr = [1, 2, 3];
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * (i+1));
    console.log(random);
		[arr[i], arr[random]] = [arr[random], arr[i]];
  }
}

shuffle(arr)

count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}
count
/////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////
// mine w/ for of
function groupById(users, obj = {}) {
	for (let val of users) obj[val.id] = val;
	return obj;
}
//jslearn w/ reduce
function groupById(array) {
	return array.reduce((obj, value) => {
		obj[value.id] = value;
		return obj;
	}, {})
}

// users array of objects
users = [{id: 'john',	name: "John Smith",	age: 20},
{	id: 'ann',	name: "Ann Smith",	age: 24},
{	id: 'pete',	name: "Pete Peterson",	age: 31},];
///////////////////////////////


/////////////powecalc/////

function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  };
  this.calculate = str => {
    str = str.split(' ');
    let [a, op, b] = [+str[0], str[1], +str[2]];
    return this.methods[op](a, b);
  };
  this.addMethods = (name, func) => this.methods[name] = func;
};


calc = new Calculator()
calc.addMethods('*', (a, b) => a * b)
calc.calculate('3 * 7')

// class Calculator {
// 	constructor() {
// 		this.methods = {
// 			'+': (a, b) => a + b,
// 			'-': (a, b) => a - b
// 		};
// 		this.calculate = str => {
// 			str = str.split(' ');
// 			let [a, op, b] = [+str[0], str[1], +str[2]];
// 			return this.methods[op](a, b);
// 		};
// 		this.addMethods = (name, func) => this.methods[name] = func;
// 	}
// };

calculator = {
  methods: {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  },
  calculate : str => {
    str = str.split(' ');
    let [a, op, b] = [+str[0], str[1], +str[2]];
    return isNaN(a) || isNaN(b) || !calculator.methods[str[1]]
    ? console.error('!error')
    : calculator.methods[op](a, b);
  },
  addMethods: (name, func) => this.methods[name] = func,
};
calculator.calculate('2 - 2')
/////////////////////
