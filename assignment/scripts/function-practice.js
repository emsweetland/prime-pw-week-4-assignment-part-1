console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return  'hello,' + ' ' + name;
}
// Remember to call the function to test
console.log(helloName('em'));
console.log(helloName('yoshi'));
console.log(helloName('diddy'));
console.log(helloName('guthrie'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;   // return firstNumber + secondNumber;
  return answer;
}
console.log('addNumbers with 5 and 9:', addNumbers(5,9) );
console.log('addNumbers with 22 and 3:', addNumbers(22,3) );
console.log('addNumbers with -6 and 7:', addNumbers(-6,7) );
console.log('addNumbers with 555 and 666:', addNumbers(555,666) );

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber){
    let answer = firstNumber * secondNumber * thirdNumber;
    return answer;
}
console.log('multiplyThree with 1, 2, 3:', multiplyThree(1,2,3));
console.log('multiplyThree with 12, 22, 23:', multiplyThree(12,22,23));
console.log('multiplyThree with -31, 42, 53:', multiplyThree(-31,42,53));
console.log('multiplyThree with 0.5, 8, 12:', multiplyThree(0.5,8,12));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number>0){
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive 3', isPositive(3) );
console.log( 'isPositive 0', isPositive(0) );
console.log( 'isPositive -3', isPositive(-3) );

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let laundry = ['socks','shirts','pants']
let dishes = []
function getLast( array ) {
  return array[array.length-1]
}
console.log(getLast(laundry));
console.log(getLast(dishes));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
    dishes = ['mug', 'knife', 'plate']
function find( value, array ) {
  if(array.includes(value)){
        return true;
      }
      else{
        return false;
      }
  }
console.log(find('pants',laundry));
console.log(find('blankets',laundry));
console.log(find('mug',dishes))
console.log(find('pants',dishes))

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let firstLetter = string.charAt(0)
  if(letter === firstLetter){
  return true}
  else{
    return false
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++)
  {sum += array[i];}
  return sum;
}

let anArray = [1, 22, 345, 1111]
console.log('sum of array',sumAll(anArray))
    anArray=  [-5, .02, 3, 7.5]
console.log('sum of array',sumAll(anArray))

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
