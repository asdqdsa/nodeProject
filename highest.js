const highest = [1,2,3,0,9,8,6,5,4,11,10];

highest.sort().slice(-3);


var maxSequence = function(arr){
  let summArr = [];
  let acc = 0
  for (let i = 0; i < arr.length; i++) {
    acc += arr[i]
		summArr.push(acc)
		if (acc <= 0) {
      result = acc
      acc = 0
    }
  }
  return summArr.length == 0 || summArr.sort((a,b) => b - a)[0] < 0 ? 0 :summArr.sort((a,b) => b - a)[0]
}
