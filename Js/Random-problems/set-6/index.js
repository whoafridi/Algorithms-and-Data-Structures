/* Given a string s, find the length of the longest 
substring
 without repeating characters. */

const findLongestSubstring = (str) => {
  let maxLength = 0;
  let charSet = new Set();
  let left = 0;

  for (let right = 0; right < str.length; right++) {
    while (charSet.has(str[right])) {
      charSet.delete(str[left]);
      left++;
    }

    charSet.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

const str = "abcabcbb";
const resultLongSub = findLongestSubstring(str);
console.log(resultLongSub);

const intToRoman = (num) => {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romans = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += romans[i];
      num -= values[i];
    }
  }

  return result;
};

const example1 = intToRoman(3);

const romanToInt = (s) => {
  const romanMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanMap.get(s[i]);
    const next = romanMap.get(s[i + 1]);

    if (next && current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }

  return result;
};

const example2 = romanToInt("LVIII");

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (
      j < prefix.length &&
      j < strs[i].length &&
      prefix[j] === strs[i][j]
    ) {
      j++;
    }

    prefix = prefix.slice(0, j);
  }

  return prefix;
};

const example3 = longestCommonPrefix(["flower", "flow", "flight"]);

const buildArray = (nums) => {
  const n = nums.length;
  const result = new Array(n);

  for (let i = 0; i < n; i++) {
    result[i] = nums[nums[i]];
  }

  return result;
};

const example4 = buildArray([0, 2, 1, 5, 3, 4]);

const getConcatenation = (nums) => {
  return [...nums, ...nums];
};

const example5 = getConcatenation([1, 2, 1]);
