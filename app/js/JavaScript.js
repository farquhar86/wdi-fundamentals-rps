JavaScript

NOT(!), OR (||), and AND (&&)

NOT (!) will reverse the value of any boolean. !true // false
OR (||) takes in two boolean arguments; if at least one is true, then it will evaluate to true, but if both are false it will evaluate as false.
AND (&&) also takes in two boolean arguments; however, it will only evaluate as true if both of the arguments are true; otherwise, it will evaluate to false.

NOT: If the input is "truthy", return false; if the input is "falsey", return true.
OR: Return the first "truthy" value; if both values are "falsey", return the last "falsey" value.
AND: Return the first "falsey" value; if both values are "truthy", return the last "truthy" value.

Long-Hand Syntax	Short-Hand Syntax
x = x + 1			x += 1
x = x - 5			x -= 5
x = x * 2			x *= 2
x = x / 10			x /= 10
x = x % 10			x %= 10
x = x + 1			x = x++


Array:
Arrays use [] brackets
var funtimes = [
'highschool'
'university'
'skydiving'
]

Adding things to array:
funtimes.push('flying');   or
funtimes[3] = 'flying';    or
funtimes[funtimes.length] = 'flying'

Deleting things from array:
funtimes.splice(2, 1);    /* 2 is the position of the content and 1 is the amount of items */

Comment out // or /* */

equal === not equal !==

if statments:
Version 1

var something = window.prompt('Write YES, No, or maybe and then click ok.');
if (something === "yes") {
	console.log('you said yes');
} else if (something === 'no') {
	console.log('you said no');
} else if (something === 'maybe') {
	console.log('you said maybe, i dont know what to do');
} else {
	console.log('you rebel, you!');
}

Version 2  (switch statments)
var something = window.prompt('Write YES, No, or maybe and then click ok.');

switch (something) { 
	case "yes" :
		console.log('you said yes');
		break;

	case 'no' :
		console.log('you said no');
		break;

	case 'maybe' :
		console.log('you said maybe, i dont know what to do');
		break;
	default :
		console.log('you rebel, you!');
		break;

Version 3 (Terse if statments)

var animal = 'cat'

animal === 'cat' ? console.log('you will be a cat herder') : console.log('you will be a dog catcher')



LOOPS:
while Loops

while loops can run indefinitely, so long as the condition remains true.
The loops condition is re-evaluated each time the block finishes running.
for Loops

Example 1:
var secret = prompt("What is the secret password?");

while (secret !== "sesame") {
  secret = prompt("What is the secret password?");
}
document.write("You know the secret password. Welcome.");

Exaple 2: writen as a do while loop 

var secret = (null);

do {
secret = prompt("What is the secret password?");
}
while (secret !== "sesame") 
document.write("You know the secret password. Welcome.");



for Loops
A 'for' loop will generally run a fixed number of times, not indefinitely.
The three paramters for a for loop, in order, are (1) an initialization, (2) a condition, and (3) a final expression.

for (initialization; condition; finalExpression) {
  // A block of code.
}


Eample 1:

var x = 10;
for (var i = 0; i < x; i += 1) {
  console.log('HELLO'); // This is a command to our console, telling it to display the text 'HELLO' and advance to a new line.
}

OR

var pageNames = ['Home', 'About Us', 'Contact Us', 'JavaScript Playground', 'News', 'Blog']

for (i=0; 1 < pageNames.length; i += 1) {
	if (document.title == pageNames [i]) {
		console.log('We Are here: ' + pageNames[i]);
	} else {
		console.log('We are not here: ' + pageNames[i]);
	}
}




FUNCTIONS: 
function speak() {
	console.log('arf'):
	console.log('woof'):
	console.log('moooooo'):
}

to call it:
speak():

example 2 Fuddify:

function fuddify(speech) {
	// if it's not a string, return an error message
	if (typeof speech !== 'string') return "nice twy, wabbit!";

	// otherwise, make it sound like Elmer Fudd
	speech = speech.replace(/r/g, 'w');
	speech = speech.replace(/R/g, 'W');
	return speech;
}
to call it:
speech(come here rabbit):

Example 3 Adding Machine: (this will add up a bunch of numbers)

function addingMachine() {
	// initialize the total we'll be returning
	var total = 0;

	for (var i = 0; i < argument.length; i += 1) {
		//grab the next number
		var number = arguments[i];

		// check if the argument is a number.
		// if so, add it to the running total
		if (typeof number === 'number') {
			total += number;
		}
	}
	// done - return the toal
	return total;
}
to call this function:
addingMachine(1,2,2,34,4)

Example 4:
var max = 5
for (var result = 1; result <= max; result += 1) {
if ((result % 3 === 0) && (result % 5 === 0)){
    console.log('fizzbuzz')
} else if (result % 3 === 0) {
    console.log('fizz')
} else if (result % 5 === 0) {
    console.log('buzz')
} else console.log(result)
}

gives you:
1
2
fizz
4
buzz

Example 2:
areBothEven, which accepts two parameters, a and b; it should return true if a and b are both even, but false otherwise.
function areBothEven(a, b) {
 if ((a % 2 === 0) && (b % 2 === 0)) {
 return true;
}
return false 
}
areBothEven(10, 87)


