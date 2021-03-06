function sayHello(name) {
	console.log('Hi ' + name);
}

sayHello();

//Task 1

const sayHelloArrowFunction = (name) => {
	console.log('Hi ' + name);
}

sayHelloArrowFunction('Test');

//Task 2

function sayHelloWithArg(hi, name) {
	console.log(hi + name + ' 1');
}

sayHelloWithArg('Hi ', 'Test');

function sayHelloWithoutArg() {
	console.log('Hi ' + 'Test' + ' 2');
}

sayHelloWithoutArg();

function returnSayHello(name) {
	return ('Hi ' + name + ' 3');
}

console.log(returnSayHello('Test'));

//Task 3

function sayHelloWithDefaultArg(name = "Test 4") {
	console.log('Hi ' + name);
}

sayHelloWithDefaultArg();

//Task 4

const checkInput = (callback, ...argument) => {
	let i = 0;
	
	argument.map(function(argument) {
		if (argument === '') {
			i = 1;
		}
	});

	if (i !== 1) {
		callback();
	}
}

checkInput(() => {console.log('Without empty string')}, '1', '2', '3', 4);
checkInput(() => {console.log('Empty string')}, '1', '', '2', '3');
