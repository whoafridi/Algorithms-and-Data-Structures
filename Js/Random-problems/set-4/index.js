// 1. Task: Object Transformation
// Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.

const customers = [
  {
    name: "Afif",
    purchases: 7,
    loyaltyPoints: 4,
  },
  {
    name: "Sakib",
    purchases: 4,
    loyaltyPoints: 3,
  },
  {
    name: "Rakib",
    purchases: 8,
    loyaltyPoints: 5,
  },
];

const doublePoints = () => {
  customers.map((cus) => {
    if (cus.purchases > 5) {
      cus.loyaltyPoints = cus.loyaltyPoints * 2;
    }
  });
};
doublePoints();
// console.log("customers", customers);

// 3. Task: Object Sorting with Multiple Criteria
// Create an array of objects representing products with 'name', 'price', and 'category' properties. Write a function to sort the array first by 'category' in ascending order and then by 'price' in descending order within each category.

const products = [
  { name: "Product A", price: 20, category: "Electronics" },
  { name: "Product B", price: 15, category: "Clothing" },
  { name: "Product C", price: 30, category: "Electronics" },
  { name: "Product D", price: 25, category: "Clothing" },
  { name: "Product E", price: 10, category: "Accessories" },
];

function sortProducts(products) {
  // Sort by category in ascending order and then by price in descending order within each category
  return products.sort((a, b) => {
    if (a.category === b.category) {
      return b.price - a.price;
    }
    return a.category.localeCompare(b.category);
  });
}

const sortedProducts = sortProducts(products);

// console.log(sortedProducts);

//4. Task:
// Demonstrate the workflow of the function being used here to find out unique from 2 array

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const findUniqueElements = (arr1, arr2) => {
  const uniqueArr1 = arr1.filter((num) => !arr2.includes(num));
  const uniqueArr2 = arr2.filter((num) => !arr1.includes(num));
  return [...uniqueArr1, ...uniqueArr2];
};
// console.log(findUniqueElements(array1, array2)); // Output: [1, 2, 6, 7]

//5. Task: Review this JavaScript code . The function mysteryFunctionX takes a number as input and creates an array representing a mysterious sequence up to that number. Can you decipher what this function does? Additionally, what would be the output for the provided example (mysteriousNumberX)?
function mysteryFunctionX(limitX) {
  const sequenceX = [1];
  for (let x = 1; x <= limitX; x++) {
    sequenceX[x] = x * sequenceX[x - 1];
  }
  return sequenceX;
}

// Example usage:
const mysteriousNumberX = 5;
console.log(mysteryFunctionX(mysteriousNumberX));
// Output: [1, 1, 2, 6, 24, 120]
