function recSum(n) {
  if (n == 1) return 1
  return n + recSum(n - 1)
}

function sum(n) {
  let summ = 0
  for (let i = 1; i <= n; i++) summ += i
  return summ
}

function algSumm(n) {
  return n * (n + 1) / 2
}

function bench(func) {
  let n = 10000

  let start = Date.now()
  let res = func(n);
  for (let i = 0; i < 10000; i++) func(n)

  return [Date.now() - start, res]
}
console.log(bench(recSum), bench(sum), bench(algSumm))
list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};


arr = []
function showListVal(lis) {
  arr.push(lis.value)
  if (lis.next === null) return lis.value
	lis = lis.next;
  return showListVal(lis)
}

showListVal(list);
arr;




//////////////
function test(str2) {
  let arr = [];
  let set = new Set();
  for (let i = 0; i < str2.length; i++) {
    let str = str2.slice(-str2.length + i)
    console.log(str)
    for (let j = 0; j < str.length; j++) {
      console.log(set)
      set.add(str[j]);
      if (set.has(str[j]) && set.size != j + 1) {
      arr.push(set.size);
      set.clear()
      }
    }
  }

  return arr
}
