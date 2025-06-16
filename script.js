function firstWord(s) {
  // your code here
	let str = s.trim();
	if(str.length===0 || str === undefined) {
		return ``;
	}

	let ans = str.split(" ");
	return `${ans[0]}`;
}

// Do not change the code below


const s = prompt("Enter String:");
alert(firstWord(s));

