// 1. You have to print out it in the same format
// “Recently I heard that you’ve achieved 95% marks in your exam.
// This is brilliant!
// I wish you’ll shine in your life!	Good luck with all the barriers(/\) in your life.”

// Ans.1
const str =
  "Recently I heard that you’ve achieved 95 % marks in your exam.\nThis is brilliant! \nI wish you’ll shine in our life!Good luck with all the barriers(/\\) in your life.";
// console.log(str);

// 2. You have to take two integer value and need to show addition,substraction,division,multiplication of them

// Ans. 2
const twoNums = (num1, num2) => {
  const addition = num1 + num2;
  const substraction = num1 - num2;
  const multiplication = num1 * num2;
  const division = num1 / num2;
  return {
    addition,
    substraction,
    multiplication,
    division,
  };
};
const resultOfTwoNums = twoNums(5, 10);
// console.log("resultOfTwoNums", resultOfTwoNums);

// 3. You have to take a non-negative number and write a function to define is that an even or odd

// Ans. 3
const isEvenOrOdd = (num) => {
  if (num < 0) {
    return `Please give a number equal or greater than 0`;
  } else if (num % 2 === 0) {
    return `${num} is an even number`;
  } else if (num % 2 === 1) {
    return `${num} is an odd number`;
  }
};
const isEvenOrOddResult = isEvenOrOdd(2);
// console.log("isEvenOrOddResult", isEvenOrOddResult);

// 4. You have to take a number and find out is it positive, negative or zero

// Ans. 4

const isPosNegOrZero = (num) => {
  if (num < 0) {
    return `${num} is a negative number`;
  } else if (num === 0) {
    return `${num} is zero`;
  } else {
    return `${num} is a positive number`;
  }
};
const isPosNegOrZeroResult = isPosNegOrZero(0);
// console.log("isPosNegOrZeroResult", isPosNegOrZeroResult);

// 5. Supose, Your friend will buy a Gucci Bag if he has 10000tk or more , he will buy a Levis Bag if he has 5000tk or more, otherwise he will buy something from New Market. He also told you if he can buy Gucci Bag and has more than 20000tk , then he will also buy a Gucci Belt. You know the amount of money of your friend . How write a function to count which things he can buy.

// Ans. 5

const boughtProduct = (money) => {
  if (money > 20000) {
    return `Can buy Gucci Bag & Gucci Belt`;
  } else if (money >= 10000) {
    return `Can buy Gucci Bag`;
  } else if (money >= 5000) {
    return `Can buy Levis Bag`;
  } else {
    return `Buy something from New Market`;
  }
};
const boughtProductResult = boughtProduct(22000);
console.log("boughtProductResult", boughtProductResult);
