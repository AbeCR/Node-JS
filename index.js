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

// const output = fizzBuzz("ss");
// console.log(output);

// function fizzBuzz(input) {
//     if (typeof input !== 'number') return NaN;
//     if ((input % 5 === 0) && (input % 3 === 0)) return "FizzBuzz";
//     if (input % 3 === 0) return "Fizz";
//     if (input % 5 === 0) return "Buzz";
//     return input;
// }

//Speed Limit = 70
// 5 -> 1 point
// // 12 points -> License Suspended
// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed < speedLimit + kmPerPoint) {
//         console.log('OK');
//         return;
//     }
//     const points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= 12) console.log('License suspended'); 
//     else console.log(points, 'Points');

// }

// checkSpeed(73);

// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++)
//         if (i % 2 != 0) console.log(i, "ODD");
//         else console.log(i,"EVEN");
// }

// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++){
//         const message = (i % 2 != 0) ? 'ODD' : 'EVEN'
//         console.log(i, message);
//     }
// }
// showNumbers(10);

// const array = [0, null, undefined, '', 2, 3];

// function countTruthy(array){
//     let count = 0;
//     for (let value of array){
//         if (value)
//             count++;
//     return count;
//     }
// }

// console.log(countTruthy(array));

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// function showProperties(obj){  
//     for (let key in obj){
//         if (typeof obj[key] === 'string')
//         console.log(key, obj[key]);
//     }
// }

// showProperties(movie);

// console.log(sum(10));

// function sum(limit) {
//     let sum = 0;

//     for (let i = 0; i <= limit; i++)
//         if (i % 3 === 0 || i % 5 === 0)
//             sum += i;

//     return sum;
// }

// showStars(10);

// function showStars(rows){
//     for (let row = 0; row <= rows; row++) {
//         let pattern = '';
//         for (let i = 0; i <= row; i++)
//             pattern += "*";
//         console.log(pattern);
//     }
// }

// showPrimes(20);

// function showPrimes (limit) {
//     for (let number = 2; number <= limit; number++){
//         if (showFactor(number)) console.log(number);
//     }
// }

// function showFactor(number){
//     for (let factor = 2; factor < number; factor++)
//         if (number % factor === 0)
//             return false;
//     return true;
// }

// function showAddress(address) {
//     for (key in address){
//         console.log(key, address[key]);
//     }
// }

// showAddress(address);



// function createAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     };
// }

// let address1 = new CreateAddress ('a', 'b', 'c');
// let address2 = new CreateAddress ('a', 'b', 'c');

// function CreateAddress(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode
// }

// function areEqual (address1, address2) {
//     return (address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode);
// }

// function areSame (address1, address2) {
//     return (address1 === address2);
// }
// console.log(areEqual(address1,address2));
// console.log(areSame(address1,address2));


// let post = new BlogEngine('a','b','c');

// console.log(post);

// function BlogEngine(title, body, author) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false
// }


// const numbers = [3,4];

// numbers.push(5,6);
// numbers.unshift(1,2);
// numbers.splice(2,0, 'A', 'b');

// console.log(numbers.indexOf('A'));
// console.log(numbers.includes(1));


// const numbers = arrayFromRange(5,10);

// console.log(numbers);

// function arrayFromRange(min,max){
//     const output = [];
//     for (let i = min; i <= max; i++)
//         output.push(i);
//     return output;
// }


// const number = [1,2,3,4];

// console.log(includes(number, 2));

// function includes(array, searchElement){
//     for (let key of array) 
//         if (searchElement === key) 
//             return true;
//     return false;
// }

// const numbers = [1,2,3,4];

// const output = except(numbers, [1,2]);
// console.log(output);

// function except(array, excluded) {
//     const output = [];
//     for (let key of array)
//         if (!excluded.includes(key))
//             output.push(key);
//     return output;   
// }

// const numbers =  [1,2,3,4,5];

// const output = move (numbers, 0, 3);

// console.log(output);

// function move (array, index, offset) {
//     const position = index + offset;
//     if (position >= array.lenght || position < 0) {
//         console.error('Invalid Offset.');
//         return;
//     }
//     const output = [...array];
//     const element = output.splice(index, 1)[0];
//     output.splice(position, 0, element);
//     return output;
// }

// const numbers = [1,2,3,4,5,1,2,1,1,1,1];

// const count = countOcurrences(numbers, 1);
// console.log(count);

// function countOcurrences(array, searchElement){
//     // let count = 0;
//     // for (let key of array)
//     //     if (searchElement === key)
//     //         count++;
//     // return count;
// }


// const numbers = [25,35,16,47,52];

// const max = getMax([1,2,3,4,5,87,56]);
// console.log(max);

// function getMax(array){
//     let max = array[0];
//     for (let i = 1; i < array.length; i++)
//         if (array[i]>max)
//             max = array[i];
//     return max;
// }

// const max = getMax([1,2,3,4,5,87,56]);
// console.log(max);

// function getMax(array){
//     return array.reduce((a,b) => (a>b) ? a : b);
// }

// const movies = [
//     {title: 'a', year: 2018, rating: 4.5 },
//     {title: 'b', year: 2018, rating: 4.5 },
//     {title: 'c', year: 2018, rating: 3 },
//     {title: 'd', year: 2017, rating: 4.5 },
// ];

// const titles = movies
//     .filter(m => m.year === 2018 && m.rating >=4)
//     .sort((a, b) => a.rating - b.rating)
//     .reverse()
//     .map(m => m.title)
// console.log(titles);

/* Functions */

// function walk() {
//     console.log('walk');
// }

// let run = function(){
//     console.log('run');
// };

// let move = run;
// if (run===move){
//     run();
//     move();
// }

// function sum (discount, ...prices){

//     const total = prices.reduce((a,b) => a + b);
//     return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30));




// TypeScript 0.0 Class

