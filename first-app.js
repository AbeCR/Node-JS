///Variables and Functions

/*var name = "Max";
var age = 29;
var hashbobbie = true;

function summarizeUser(userName, userAge, userHasHobbies){
    return(
        'Name is ' +
        userName +
        ', Age iS ' +
        userAge +
        ', and the user has Hobbies ' +
        userHasHobbies
    );
};
console.log(summarizeUser(name, age, hashbobbie));*/

/// let(plan of changing) and const (will never change)
/*
const name = "Max";
let age = 29;
const hashbobbie = true;

age = 30;

function summarizeUser(userName, userAge, userHasHobbies){
    return(
        'Name is ' +
        userName +
        ', Age iS ' +
        userAge +
        ', and the user has Hobbies ' +
        userHasHobbies
    );
};
console.log(summarizeUser(name, age, hashbobbie));
*/

/// Arrow Functions 

const name = "Max";
let age = 29;
const hashbobbie = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobbies) => {
    return(
        'Name is ' +
        userName +
        ', Age iS ' +
        userAge +
        ', and the user has Hobbies ' +
        userHasHobbies
    );
};

//const add = (a,b) => a + b;
const addOne = a => a + 1;

//console.log(add(1,2))
console.log(addOne(3));

console.log(summarizeUser(name, age, hashbobbie));