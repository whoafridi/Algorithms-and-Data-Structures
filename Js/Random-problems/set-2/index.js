// 1. Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender.Write a function to filter out all females and then map the remaining people to an array of names.Print the final result.

// Ans. 1

const persons = [
  {
    name: "Karim",
    age: 34,
    gender: "male",
  },
  {
    name: "Rahim",
    age: 40,
    gender: "male",
  },
  {
    name: "Rahima",
    age: 34,
    gender: "female",
  },
];

const namesOfMen = (persons) => {
  const menArray = [];
  const onlyMen = persons.filter((person) => person.gender === "male");
  onlyMen.map((man) => {
    menArray.push(man.name);
  });
  return menArray;
};

const namesOfMenResult = namesOfMen(persons);
// console.log("namesOfMenResult", namesOfMenResult);

// 2. Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  {
    title: "Harry Potter",
    author: "JK Rowling",
    year: 1996,
  },
  {
    title: "Dark of Knight",
    author: "Andrew Mathew",
    year: 2000,
  },
  {
    title: "Soul of Darkness",
    author: "Robert Antony",
    year: 2002,
  },
];

const booksArray = (books) => {
  // console.log("books", books);
  const newBooks = [];
  books.map((book) => {
    newBooks.push(book.title);
  });
  return newBooks;
};
const resultBooks = booksArray(books);
// console.log("resultBooks", resultBooks);

// 3. Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const mainFunc = (num) => {
  const square = Math.pow(2, num);
  const double = square * 2;
  const addFive = double + 5;
  return addFive;
};

const resultSqrt = mainFunc(4);
// console.log('resultSqrt', resultSqrt);

// 4.  Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Camry", year: 2019 },
  { make: "Honda", model: "Civic", year: 2020 },
  { make: "Ford", model: "Mustang", year: 2018 },
  { make: "Chevrolet", model: "Malibu", year: 2022 },
];

// Function to sort the array of cars by year in ascending order
function sortByYearAscending(carArray) {
  return carArray.sort((a, b) => a.year - b.year);
}

const sortedCars = sortByYearAscending(cars);
console.log(sortedCars);

//   5. Task: Find and Modify
//   Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

// Ans. 5

const person = [
  {
    name: "Alif",
    age: 20,
  },
  {
    name: "Asif",
    age: 30,
  },
  {
    name: "Atik",
    age: 50,
  },
];
const updateAge = (name) => {
  const foundMan = person.map((man) => {
    if (man.name === name) {
      man.age = 100;
    }
  });
  return foundMan;
};
updateAge("Asif");
// console.log("person",person);
