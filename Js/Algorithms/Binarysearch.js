// ## Binary search in JS

function Binry_search(l, key) {
  low = 0;
  high = l.length - 1;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (l[mid] == key) {
      return mid;
    } else if (l[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return "Not found";
}

let list = [2, 5, 8, 9, 13, 45, 67, 99];
key = 67;
console.log("Search key found in index", Binry_search(list, key)); // Found in index 6
