///////////////////////////////////////
// Lecture: Hoisting

/*
var retirement = function (year) {
    console.log(65 - (2018 - year));
}

retirement(1993);
 */

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

console.log(this);

calculateAge(1993);

function calculateAge(year) {
    console.log('called calculateAge('+year+')');
    console.log(2018 - year);
    console.log(this); //global object, Window
}

var rodrigo = {
    name: 'Rodrigo',
    yearOfBirth: 1993,
    calculateAge: function(){
        console.log(this); // this object, rodrigo

        function inner() {
            console.log(this); // this object = Window because it`s a regular function
        }
        inner();
    }
};

rodrigo.calculateAge();


var mariana = {
    name: 'Mariana',
    yearOfBirth: 1991,
};

mariana.calculateAge = rodrigo.calculateAge; // borrowing functions