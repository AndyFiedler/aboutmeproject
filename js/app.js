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
    alert('What was that!? Trying typing with your fingers next time');
}


// var answer =prompt('Mr. Fiedler is a people person. (T/F)');
// var sanatizedAnswer2 = answer .toUpperCase().trim()
// if (sanitizedAnswer2 === 'TRUE' || sanitizedAnswer2 ==='T') {
//     alert ('Yes. User is merely meeting low expectations');
// }




// var answer =prompt('Mr. Fiedler hates his dog more than anyone, or anything. (T/F)');
// var sanatizedAnswer3 = answer .toUpperCase().trim()
// if (sanitizedAnswer3 ===)

// var answer =prompt('Mr. Fiedler has no specific plans for his future.(T/F)');
// var sanatizedAnswer4 = answer .toUpperCase().trim()

// var answer =prompt('Mr. Fiedler cannot abide human younglings.(T/F)')
// var sanatizedAnswer5 = answer .toUpperCase().trim()