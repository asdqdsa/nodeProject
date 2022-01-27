
		// prime
		function prime(n) {
			// let arr = [2];
			// for (let i = 3; i <= n; i++) {
			// 	if (i % 2 !== 0) arr.push(i)
			// }
			let arr = [...Array(n-1).keys()].map((e) => e + 2)
			let newarr = arr.filter((e) => {
				let count = 0;
				for (let i = 2; i <= e-1; i++) { //	for (let i = 3; i <= e-1; i++) {
					if (e % i === 0) count++;
				}
				if (!count) return true;
			});

		}
		prime(400);
