// 1. Create an array named numbers and store 5 number values in it
let numbers = [1, 2, 3, 4, 50];

// 2. Calculate the sum of array items and print it to the console using console.log()

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// 3. Calculate the average of array items and print it to the console using console.log()

const avg = sum / numbers.length;
console.log(avg);

// 4. Find the highest number in the array and print it to the console using console.log()

var max = numbers.reduce(function (a, b) {
  return Math.max(a, b);
}, 0);
console.log(max);

// or
console.log(Math.max(...numbers));

// 5. Find the lowest number in the array and print it to the console using console.log()

console.log(Math.min(...numbers));

// 6. Find the even numbers in the array and print them to the console using console.log()

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
// }

// 7. Find the odd numbers in the array and print them to the console using console.log()
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         console.log(numbers[i]);
// }
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 5 == 0) {
//         console.log(numbers[i]);
// }

// 9. Log all the element of the array one by one
console.log(numbers);

// 10. Find all the number in the array that is divisible by 3
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 3 == 0) {
//         console.log(numbers[i]);
// }
