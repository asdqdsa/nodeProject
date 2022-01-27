// https://www.codewars.com/kata/55f89832ac9a66518f000118/train/javascript
// Simplifying multilinear polynomials... 3x-yx+2xy-x" ---> ("2x+xy").

// All possible sums and subtraction of equivalent monomials ("xy==yx") has been done, e.g.:
// "cb+cba" -> "bc+abc", "2xy-yx" -> "xy", "-a+5ab+3a-c-2a" -> "-c+5ab"


// All monomials appears in order of increasing number of variables, e.g.:
// "-abc+3a+2ac" -> "3a+2ac-abc", "xyz-xz" -> "-xz+xyz"

// If two monomials have the same number of variables, they appears in lexicographic order, e.g.:
// "a+ca-ab" -> "a-ab+ac", "xzy+zby" ->"byz+xyz"

// There is no leading + sign if the first coefficient is positive, e.g.:
// "-y+x" -> "x-y", but no restrictions for -: "y-x" ->"-x+y"


// function simplify(poly){
// 	let opers = poly.split('+').map((operand) => {
// 		return operand.split('-')
// 	});
// 	opers.map((val) => {
// 		for (let value of poly) {

// 		}
// 	})

// 	let message;
// 	message = 'Hello!';

// }

// const poly = 'a+5ab-3a+c-2a';
// simplify(poly);

let obj = {}

function te(obj) {
	for (prop in obj) {
    if (!prop in obj) return true;
		else return false;
  }
}

  te(obj)
