// let selectedColors = ['red', 'blue'];
// selectedColors[2] = '3';
// console.log(selectedColors);

// x = 10;
// y = 5;
// console.log(x+=y); 

// function myFunction() {
//     document.getElementById("demo").innerHTML = "Hello";
//   }
    
// function greet(firstName, lastName) {
//     return ('Hello ' + firstName +" "+ lastName);
// }

// console.log(greet('Jhon', 'Martinez'));

// function square(number) {
//     return number * number;
// }

// console.log(square(6));

// let highIncome = false;
// let goodCreditScore = false;
// let elegibleForLoan = highIncome || goodCreditScore;

// let aplicationRefused = !elegibleForLoan;

// console.log(elegibleForLoan);
// console.log(aplicationRefused);


// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;

// console.log(currentColor);

// let x = (2 + 3) * 4;

// let a = 'red';
// let b = 'blue';
// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

// let hour = 22;

// if (hour >= 6 && hour < 12) 
//     console.log('Good Monring');
// else if (hour >= 12 && hour < 18)
//     console.log('Good Afternoon');
// else 
//     console.log('Good Night');

// let role;

// switch (role){
//     case 'Guest':
//         console.log('Guest User');
//         break;
//     case 'Moderator':
//         console.log('Moderator User');
//         break;
//     default:
//         console.log('Unknown User');
// }

// if (role === 'Guest') console.log('Guest User');
// else if (role === 'Moderator') console.log('Moderator User');
// else console.log('Unknonw User');

// for (let i = 0; i <= 5; i++){
//     if (i % 2 != 0) console.log(i);
// }

// for (let i = 5; i >= 0; i--){
//     if (i % 2 != 0) console.log(i);
// }

// const person = {
//     name: 'Mosh',
//     age: 30
// };

// for (let key in person)
    // console.log(key, person[key]);

// const colors = ['red', 'blue', 'greem'];

// for (let color of colors)
//     console.log(color);

//condition ? a : b;

// function maxNumbers(firstNumber, secondNumber){
//     return (firstNumber > secondNumber) ? firstNumber : secondNumber;
// }
// console.log(maxNumbers(11,20));

// function isLandScape(width, height){
//     return (width > height);
// }
// console.log(isLandScape(800, 600));

const output = fizzBuzz("ss");
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number') return NaN;
    if ((input % 5 === 0) && (input % 3 === 0)) return "FizzBuzz";
    if (input % 3 === 0) return "Fizz";
    if (input % 5 === 0) return "Buzz";
    return input;
}