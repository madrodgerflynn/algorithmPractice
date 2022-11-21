// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Return an array
function fizzbuzz(n) {
  let i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // for (var n = 1; n < 101; n++)
  if (i % 15 == 0) {
    return console.log("fizzBuzz");
  } else if (i % 3 == 0) {
    return console.log("Fizz");
  } else if (i % 5 == 0) {
    return console.log("Buzz");
  } else {
    return console.log(i);
  }
}
