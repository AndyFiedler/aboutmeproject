'use strict'

var answer =prompt('Mr. Fiedler prefers his first name pronounced Andy. True/False, T/F');
var sanitizedAnswer1 = answer.toUpperCase().trim();
if (sanitizedAnswer1 === 'TRUE'|| sanitizedAnswer1 ==='T') {
    alert('Yes. Dont get cocky, kid. Only the first question.');
}
else if (sanitizedAnswer1 === 'F' || sanitizedAnswer1 ==='FALSE') {
    alert ('User please read more carefully. ');
}
else {
    alert('What was that!? Maybe give up now.');
}


var answer =prompt('Mr. Fiedler is a people person. (T/F)');
var sanitizedAnswer2 = answer.toUpperCase().trim()
if (sanitizedAnswer2 === 'TRUE'|| sanitizedAnswer2 ==='T') {
    alert('Yes. Whatever. Good job.');
}
else if (sanitizedAnswer2 === 'F' || sanitizedAnswer2 ==='FALSE') {
    alert ('User, do you know how to read?. ');
}
else {
    alert('What was that!? Try typing with your fingers next time');
}


var answer =prompt('Mr. Fiedler hates his dog more than anyone, or anything. (T/F)');
var sanitizedAnswer3 = answer.toUpperCase().trim()
if (sanitizedAnswer3 === 'TRUE'|| sanitizedAnswer3 ==='T') {
    alert('Yes. That dog is Satan');
}
else if (sanitizedAnswer3 === 'F' || sanitizedAnswer3 ==='FALSE') {
    alert ('User, TRY HARDER. ');
}
else {
    alert('What was that!? The average chimp can type at 36 wpm. Just sayin.');
}


var answer =prompt('Mr. Fiedler has no specific plans for his future.(T/F)');
var sanitizedAnswer4 = answer.toUpperCase().trim()
if (sanitizedAnswer4 === 'TRUE'|| sanitizedAnswer4 ==='T') {
    alert('Yes. Like really specific.');
}
else if (sanitizedAnswer4 === 'F' || sanitizedAnswer4 ==='FALSE') {
    alert ('User, your attempts are laughable. ');
}
else {
    alert('What was that!? You have a 50/50 chance at each of these questions and you got a Zero. Let that sink in');
}


var answer =prompt('Mr. Fiedler cannot abide human younglings.(T/F)')
var sanitizedAnswer5 = answer.toUpperCase().trim()
if (sanitizedAnswer4 === 'TRUE'|| sanitizedAnswer4 ==='T') {
    alert('No, user. Kids are awesome. Thanks for trying I guess...');
}
else if (sanitizedAnswer4 === 'F' || sanitizedAnswer4 ==='FALSE') {
    alert ('Yes. Obviously.');
}
else {
    alert('What was that!? Are you a cat and not a person?');
}




//number guess sample
var guess = prompt('What is my favorite number?');
console.log('Guess is: ' + guess);
var guessCount = 1;

while (guess !== '2') {

  if (guess === null) {
    console.log('Guess is null; breaking');

    // Escape the loop!
    break;
  }







  

  //array sample
  var names = ['ANDY', 'BEN', 'CLAIRE', 'RANDY','JANETTE', 'RONDO', 'SCOUT', 'BEAN'];
console.log(names.length);
var nameGuess = prompt('Name someone in Fiedler Family!');
var nameGuessTrimmedToUpper = nameGuess.toUpperCase().trim();

if (names.indexOf(nameGuessTrimmedToUpper) >= 0) {
  alert('Yes! Unfortunately' + nameGuess + ' is in our family!');
} else {
  alert('WRONG. We are very selective.');
}

alert('All Fiedler family members: ' + names.join(', '));