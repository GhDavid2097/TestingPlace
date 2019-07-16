const myList = document.getElementsByTagName('li');

for ( let i = 0; i < myList.length; i++ ) {
	myList[i].style.color = 'purple';
}

const inputStuff = document.getElementsByClassName('test1');
const buttonStuff = document.getElementsByClassName('test2');

const errorPurple = document.getElementsByClassName('not-purple');

console.log(errorPurple.length);	

for ( let i = 0; i < errorPurple.length; i++ ) {
	let solution = errorPurple[i];
	solution.addEventListener('click', () => {
		solution.style.color = inputStuff.value;
	});
}