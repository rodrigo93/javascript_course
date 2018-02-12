// var name = 'Rodrigo';
// var lastName = 'Marques';
// var age = 24;

// // console.log(name);
// // console.log(lastName);
// // console.log(age);
 
// console.log(name + ': ' + age + ' anos.');

// var emprego, ehCasado;

// emprego = "Desenvolvedor back-end";
// ehCasado = false;

// console.log(emprego);
// console.log(ehCasado);
// console.log("Teste caracteres é ã à â õ ? ! ; / * - + ");

// var sobreNome = prompt("Qual é o seu último nome?");
// console.log(sobreNome);

// alert("O seu sobrenome é " + sobreNome + ". E isto é um teste."); 

// AULA OPERADORES

// AULA IF ELSE

// var nome = "Rodrigo";
// var idade = 24;
// var ehCasado = true;

// if (ehCasado) {
// 	console.log(nome + " é CASADO");
// } else {
// 	console.log(nome + " é SOLTEIRO");
// }

// console.clear();

// if (23 == "23") {
// 	console.log("Isso é conversão de tipo, permite o java converter o 23 para string.");
// }

// if (23 === "23") {
// 	console.log("Não permite o java converter o 23 para string.");
// }

// if (idade < "30") {
// 	console.log("JavaScript permite comparar número com String.")
// }

// var emprego = "Desenvolvedor";

// switch (emprego) {
// 	case 'Professor':
// 		console.log("A profissão do " + name + " é professor. ");
// 		break;
// 	case 'Desenvolvedor':
// 		console.log("A profissão do " + name + " é desenvolvedor. ");
// 		break;
// 	default:
// 		console.log(name + " é um coitado ");
// 		break;
// }


//////////////////////////////////
// Functions
//////////////////////////////////

/*

function calculateAge(yearOfBirth) {
	var age = getCurrentYear() - yearOfBirth;
	return age;
}

function getCurrentDay() {
	var currentTime = new Date();
	return currentTime.getDate();
}

function getCurrentMonth() {
	var currentTime = new Date();
	return currentTime.getMonth() + 1; // 0 to 11
}

function getCurrentYear() {
	var currentTime = new Date();
	// console.log(currentTime);
	return currentTime.getFullYear();
}

var ageRodrigo = calculateAge(1993);
console.log(ageRodrigo);

 */	


//////////////////////////////////
// Statements and expressions
//////////////////////////////////

/*

// Funcion statement: meant to do some action, to do something
function someFun(argument) {
	// body...
}

// Function expression: meant to produce a value
var someFun = function (parameter) {

}

 */

//////////////////////////////////
// Arrays
//////////////////////////////////

/*

var names = ['Rodrigo', 'Mariana', 'Natalia'];
var years = new Array(1993, 1991, 1987);

var rodrigo = ['Rodrigo', 'Marques', 1993, true];
rodrigo.push('White'); //add to the end
rodrigo.unshift('Mr.'); //add to the beginning
var lastOne = rodrigo.pop(); //removes the last element and returns it
console.log(lastOne);
var firstOne = rodrigo.shift(); //removes the first element and returns it
console.log(firstOne);
var indexOfElement = rodrigo.indexOf('Rodrigo'); // Returns the position of the given element, -1 otherwise
console.log(indexOfElement);
console.log(rodrigo);
 */


//////////////////////////////////
// Objects and Properties
//////////////////////////////////

/*

var rodrigo = {
	name: 'Rodrigo',
	lastName: 'Pedro Marques',
	yearOfBirth: 1993,
	job: 'programmer',
	isMarried: false
};

console.log(rodrigo.name);
console.log(rodrigo['lastName']);

rodrigo.lastName = 'Pedro Felipe Marques';
rodrigo['job'] = 'Backend Developer'
console.log(rodrigo.lastName);
console.log(rodrigo.job);

var mariana = new Object();
mariana.name = 'Mariana';
mariana.lastName = 'Felipe Marques';
console.log(mariana);
 */

//////////////////////////////////
// Objects and Properties
//////////////////////////////////

/*

function getCurrentYear() {
	var currentTime = new Date();
	return currentTime.getFullYear();
}

var rodrigo = {
	name: 'Rodrigo',
	lastName: 'Pedro Marques',
	yearOfBirth: 1993,
	job: 'programmer',
	isMarried: false,
	family: ['Mariana', 'Suzana', 'Priscilla'],
	getCurrentYear: function(){
		var date = new Date();
		return date.getFullYear();
	},
	calculateAge: function () {
		return this.age = this.getCurrentYear() - this.yearOfBirth;
	},
};

console.log(rodrigo.calculateAge());
console.log(rodrigo.age)
 */

//////////////////////////////////
// Loops and Iteration
//////////////////////////////////

/*

for (var i = 0; i < 10; i++) {
	console.log(i);
}

for (var i = 0; i < 6; i++) {
	if (i === 3) {
		continue; //jumps number 3 and go to the next iteration
	}
	console.log(i);
}

*/
