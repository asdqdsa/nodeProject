function showName(name) {
  return (name)
}

function delay(f, sDelay) {
	function wrapper(...args) {
			let wrapperThis = this;
			setTimeout(function() {
				f.apply(wrapperThis, args)
			}, sDelay);
		}
  return wrapper;
}

// f1000 = delay(showName, 1300);

delay(showName, 1300)('7777777')

// f1000('7777777')
