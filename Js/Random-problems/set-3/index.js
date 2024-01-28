// 1.  Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

// Ans. 1

const sumOfEvenNums = (arr) => {
  const sum = arr.reduce((pre, cur) => {
    return cur % 2 === 0 ? pre + cur : pre;
  }, 0);

  return sum;
};
const arr = [3, 5, 6, 8, 10, 17, 7];
const sumOfEvenNumsResult = sumOfEvenNums(arr);
// console.log("sumOfEvenNumsResult ", sumOfEvenNumsResult);

// 2. Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.

// Ans. 2

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

if (isLeapYear(2024)) {
  console.log("It's a leap year");
} else {
  console.log("It's not a leap year");
}

// 3.Count Vowels:
// Write a function that counts the number of vowels in a given string.

// Ans. 3

const countVowels = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const lowerWord = word.toLowerCase();
  // console.log(lowerWord);
  return lowerWord.split("").reduce((count, char) => {
    if (vowels.includes(char)) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
};
const word = "Happy new year";
const countedVowel = countVowels(word);
// console.log(countedVowel);

// 4 Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

// Ans. 4

const nums = [3, 5, 3, 7, 9, 2, 5, 7];
const uniqueArray = [];
nums.filter((n) => {
  // console.log(n);
  if (!uniqueArray.includes(n)) {
    uniqueArray.push(n);
  }
});
// console.log(uniqueArray);

// 5: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

// Ans. 5
const maxNum = (nums) => {
  // console.log(nums);
  return Math.max(...nums);
};
const resultMax = maxNum(nums);
// console.log('resultMax', resultMax);

// 6. Advanced Sorting
// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

// Function to calculate the average grade of a student
const calculateAverageGrade = (grades) => {
  if (grades.length === 0) {
    return 0;
  }
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  return sum / grades.length;
};

// Function to sort students by average grade in descending order
const sortStudentsByAverageGrade = (students) => {
  return students.sort((a, b) => {
    const averageGradeA = calculateAverageGrade(a.grades);
    const averageGradeB = calculateAverageGrade(b.grades);
    return averageGradeB - averageGradeA; // Sort in descending order
  });
};

// Example usage:
const student = [
  { name: "Alice", grades: [90, 85, 92] },
  { name: "Bob", grades: [88, 95, 89] },
  { name: "Charlie", grades: [78, 82, 80] },
];

// const sortedStudents = sortStudentsByAverageGrade(student);
// console.log("Students sorted by average grade (descending):", sortedStudents);

// 7.  Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.

// Ans. 7

// Function to calculate the total value using reduce
function calculateTotalValue(items) {
  // Use the reduce method to accumulate the total value
  const totalValue = items.reduce((accumulator, currentItem) => {
    // Calculate the value of the current item (quantity * price)
    const itemValue = currentItem.quantity * currentItem.price;

    // Add the value of the current item to the accumulator
    return accumulator + itemValue;
  }, 0); // Initialize the accumulator with 0

  return totalValue;
}

// Example usage:
const itemsArray = [
  { quantity: 3, price: 10 },
  { quantity: 2, price: 15 },
  { quantity: 5, price: 8 },
];

const resultTotal = calculateTotalValue(itemsArray);
// console.log("Total value:", resultTotal);

//8. Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.

// Ans. 8

const arrayInsert = (arr1, arr2) => {
  // console.log(arr1, arr2);
  const matched = [];
  arr1.map((item) => {
    if (arr2.includes(item)) {
      matched.push(item);
    }
  });
  return matched;
};
const arr1 = [3, 7, 9, 5, 19];
const arr2 = [2, 5, 19];

const matchedRes = arrayInsert(arr1, arr2);
// console.log("matchedRes", matchedRes);
