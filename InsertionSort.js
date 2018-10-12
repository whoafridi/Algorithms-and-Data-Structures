## Insertion sort Js

function insertionSort(items) {
  for (var i = 0; i < items.length; i++) {
    let value = items[i]
    let j = i - 1
    while ( j > -1 && items[j] > value) {
    
      items[j + 1] = items[j]
      j--;
    }
  
    items[j + 1] = value
    
  }

  return list
}

const list = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.log(insertionSort(list))   // sorted [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]
