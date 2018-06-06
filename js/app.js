'use strict'
var correctCount = 0;
var answer =prompt('Mr. Fiedler prefers his first name pronounced Andy. True/False, T/F');
var sanitizedAnswer1 = answer.toUpperCase().trim();
if (sanitizedAnswer1 === 'TRUE'|| sanitizedAnswer1 ==='T') {
    alert('Yes. Dont get cocky, kid. Only the first question.');
        correctCount++;
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
    correctCount++;
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
    correctCount++;
}
else if (sanitizedAnswer3 === 'F' || sanitizedAnswer3 ==='FALSE') {
    alert ('User, TRY HARDER. ');
}
else {
    alert('What was that!? The average chimp can type at 36 wpm. Just sayin.');
}


var answer =prompt('Mr. Fiedler has specific plans for his future.(T/F)');
var sanitizedAnswer4 = answer.toUpperCase().trim()
if (sanitizedAnswer4 === 'TRUE'|| sanitizedAnswer4 ==='T') {
    alert('Yes. Like really specific.');
    correctCount;
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
    correctCount++;
}
else if (sanitizedAnswer4 === 'F' || sanitizedAnswer4 ==='FALSE') {
    alert ('Yes. Obviously.');
}
else {
    alert('What was that!? Are you a cat and not a person?');
}




//number guess looop
var guess = prompt('What is my favorite number? (Under 10)');
console.log('Guess is: ' + guess);
var guessCount = 1;

while (guess !== '9') {

  if (guess === null) {
    console.log('Guess is null; breaking');

    // Escape the loop!
    break;
  }
  var promptWarning = 'Wrong!';
  if (guess > 2) {
    promptWarning = 'Too high!';
  } else if (guess < 0) {
    promptWarning = 'No negative numbers. Positive people like positive numbers!';
  } else {
    promptWarning = 'Too low!';
  }
  console.log(promptWarning);

  guess = prompt(promptWarning + ' Try again: what is my favorite number?');

  console.log('Guess is: ' + guess);

  guessCount = guessCount + 1;

  console.log('guessCount is ' + guessCount);
  console.log('about to return to top of while loop');
}

console.log('done guessing (while loop is finished)');

// If they cancelled the prompt...
if (guess === null) {

  alert('Rude! My favorite number is 9, if you even care.');

} else {
  // They must have gotten the answer right
  console.log('not rude');

  if (guessCount === 1) {
    alert('Right on the first try!');
  } else {
    alert('It took ' + guessCount + ' guesses to get it right!');
  }


{
//array sample
var names = ['ANDY', 'BEN', 'CLAIRE', 'RANDY','JANETTE', 'RONDO', 'SCOUT', 'BEAN'];
console.log(names.length);
var nameGuess = prompt('Name someone in Fiedler Family!');
var nameGuessTrimmedToUpper = nameGuess.toUpperCase().trim();

if (names.indexOf(nameGuessTrimmedToUpper) >= 0) {
  alert('Yes! Unfortunately ' + nameGuess + ' is in our family!');
} else {
  alert('WRONG. We are very selective.');
  correctCount++;
}

alert('All Fiedler family members: ' + names.join(', '));
alert('You got ' + correctCount + 'out of 7 questions right');