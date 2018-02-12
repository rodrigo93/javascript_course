/*
	1. Create an array with some year where persons were born.
	2. Create an empty array
	3. User a loop to fill the array with the ages of the persons
	4. User another loop to log into the console whether each person is of full age (18 or older),
		as well as their age.
	5. Finally, create a function  called printFullAge which receives the vector of year as an 
		argument, executes the steps 2, 3 and 4 and returns a vector of true/false boolean
		values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
	6. Call the function with two different vectors and stroe the results in two variables: full_1
		and full_2
 */

var years = [1962, 1955, 1993, 1991, 1988, 1997, 2002, 2003, 2015];
var arr = new Array();
var date = new Date()
var actualYear = date.getFullYear();

for (var i = 0; i < years.length; i++) {
	arr[i] = actualYear - years[i];
}

for (var i = 0; i < arr.length; i++) {
	if (arr[i] >= 18) {
		console.log('arr['+i+']'+ ' is full of age.' );
	} else {
		console.log('arr['+i+']'+ ' is not full of age.' );
	}
}

