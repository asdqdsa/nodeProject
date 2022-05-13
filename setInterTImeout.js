/////////////////
"use strict"
function printNumbers(from, to) {
  let x = from;
  setTimeout(function run() {
    console.log(++x);
    let a = setTimeout(run, 1000);
    if (x >= to) clearTimeout(a);
  }, 0)


}

printNumbers(3, 6)

///
"use strict"

function printNumbers(from, to) {
  let x = from;
  setTimeout(function run() {
    console.log(x);
    if (++x < to) setTimeout(run, 1000);
  }, 0)
}

printNumbers(3, 6)


///////////////
