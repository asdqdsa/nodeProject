// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
// "Input: test , Expected Output: grfg

function rot13(message){
	let map = new Map();
	let result = '';
	for (let i = 65, j = 1; i < 91; i++, j++) map.set(j, String.fromCharCode(i))
	let newMess = message.toUpperCase().split(' ').map((word) => {
		let  chars = word.split('');
		let newKeyI = 0;
		return chars.map((char) => {
			let notInDict = true;
			for (let key of map) {
				if (key[1] === char) {
					notInDict = true;
					newKeyI = key[0] + 13;
					if (newKeyI > 26) newKeyI -= 26;
					return map.get(newKeyI)
					break;
					notInDict = false;
				}
			}
			if (notInDict) return char
		}).join('');
	}).join(' ');
	for (let i = 0; i < message.length; i++) {
		if (message[i] === message[i].toLowerCase()) result += newMess[i].toLowerCase()
		else result += newMess[i];
	}
	return result;
}
rot13('t!Est');
