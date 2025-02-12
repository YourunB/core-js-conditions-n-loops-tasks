/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  let res = true;
  if (number < 0) res = false;
  return res;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let res = false;
  if (a >= b && a >= c) res = a;
  if (b >= a && b >= c) res = b;
  if (c >= a && c >= b) res = c;
  return res;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let res = false;
  if (queen.x === king.x || queen.y === king.y) res = true;
  if (queen.x + queen.y === king.x + king.y) res = true;
  if (queen.x === queen.y && king.x === king.y) res = true;
  return res;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let res = false;
  if (a > 0 && b > 0 && c > 0 && a + b > c) {
    if (a === b || a === c) res = true;
    if (b === a || b === c) res = true;
    if (c === a || c === b) res = true;
  }
  return res;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let romanNumber = '';
  let inputNumber = num;
  const chars = [
    { number: 10, romanChar: `X` },
    { number: 9, romanChar: `IX` },
    { number: 5, romanChar: `V` },
    { number: 4, romanChar: `IV` },
    { number: 1, romanChar: `I` },
  ];
  for (let pos = 0; pos < chars.length; pos += 1) {
    while (chars[pos].number <= inputNumber) {
      inputNumber -= chars[pos].number;
      romanNumber += chars[pos].romanChar;
    }
  }
  return romanNumber;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case `0`:
        res += `zero`;
        if (i !== numberStr.length - 1) res += ` `;
        break;
      case `1`:
        res += `one`;
        if (i !== numberStr.length - 1) res += ` `;
        break;
      case `2`:
        res += `two`;
        if (i !== numberStr.length - 1) res += ` `;
        break;
      case `3`:
        res += `three`;
        if (i !== numberStr.length - 1) res += ` `;
        break;
      case `4`:
        res += `four`;
        if (i !== numberStr.length - 1) res += ` `;
        break;
      case `5`:
        res += `five`;
        if (i !== numberStr.length - 1) res += ` `;
        break;
      case `6`:
        res += `six`;
        if (i !== numberStr.length - 1) res += ` `;
        break;
      case `7`:
        res += `seven`;
        if (i !== numberStr.length - 1) res += ` `;
        break;
      case `8`:
        res += `eight`;
        if (i !== numberStr.length - 1) res += ` `;
        break;
      case `9`:
        res += `nine`;
        if (i !== numberStr.length - 1) res += ` `;
        break;
      case `,`:
        res += `point`;
        if (i !== numberStr.length - 1) res += ` `;
        break;
      case `.`:
        res += `point`;
        if (i !== numberStr.length - 1) res += ` `;
        break;
      case `-`:
        res += `minus`;
        if (i !== numberStr.length - 1) res += ` `;
        break;
      default:
        res += ``;
    }
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let res = false;
  let strRev = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    strRev += str[i];
  }
  if (str === strRev) res = true;
  return res;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let res = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      res = i;
      break;
    }
  }
  return res;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = '';
  const strNum = str + num;
  let res = false;
  for (let i = 0; i < strNum.length; i += 1) {
    if (Number(strNum[i]) === digit) res = true;
  }
  return res;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let res = -1;
  for (let i = 1; i < arr.length - 1; i += 1) {
    let leftArr = arr[0];
    let rightArr = arr[arr.length - 1];
    for (let l = 1; l < i; l += 1) leftArr += arr[l];
    for (let l = i + 1; l < arr.length - 1; l += 1) rightArr += arr[l];
    if (rightArr === leftArr) {
      res = i;
      break;
    }
  }
  return res;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  let value = 1;
  let rowStart = 0;
  let columnStart = 0;

  for (let i = 0; i < size; i += 1) {
    let count = 0;
    arr[i] = [];
    for (let j = 0; j < size; j += 1) {
      count += 1;
      arr[i][j] = count;
    }
  }

  let rowEnd = arr.length;
  let columnEnd = arr[0].length;

  while (rowEnd > rowStart && columnEnd > columnStart) {
    for (let i = columnStart; i < columnEnd; i += 1) {
      arr[rowStart][i] = value;
      value += 1;
    }
    rowStart += 1;

    for (let i = rowStart; i < rowEnd; i += 1) {
      arr[i][columnEnd - 1] = value;
      value += 1;
    }
    columnEnd -= 1;

    if (rowEnd > rowStart) {
      for (let i = columnEnd - 1; i >= columnStart; i -= 1) {
        arr[rowEnd - 1][i] = value;
        value += 1;
      }
      rowEnd -= 1;
    }

    if (columnEnd > columnStart) {
      for (let i = rowEnd - 1; i >= rowStart; i -= 1) {
        arr[i][columnStart] = value;
        value += 1;
      }
      columnStart += 1;
    }
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const matrixReverse = matrix;
  const size = matrixReverse.length;
  let matrixStorage;
  let position;
  for (let i = 0; i < size / 2; i += 1) {
    position = i;
    for (let j = position; j < size - position - 1; j += 1) {
      matrixStorage = matrixReverse[position][j];
      matrixReverse[position][j] = matrixReverse[size - j - 1][position];
      matrixReverse[size - j - 1][position] =
        matrixReverse[size - position - 1][size - j - 1];

      matrixReverse[size - position - 1][size - j - 1] =
        matrixReverse[j][size - position - 1];
      matrixReverse[j][size - position - 1] = matrixStorage;
    }
  }
  return matrixReverse;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const arrCopy = arr;
  function partArr(left, right, array) {
    let leftArr = left;
    let rightArr = right;
    const arrayFlat = array;
    const centerArray = Math.floor((left + right) / 2);
    const rodArray = arrayFlat[centerArray];
    while (rightArr >= leftArr) {
      while (rodArray > arrayFlat[leftArr]) leftArr += 1;
      while (rodArray < arrayFlat[rightArr]) rightArr -= 1;
      if (leftArr <= rightArr)
        [arrayFlat[rightArr], arrayFlat[leftArr]] = [
          arrayFlat[leftArr],
          arrayFlat[rightArr],
        ];
      if (leftArr <= rightArr) leftArr += 1;
      rightArr -= 1;
    }
    return leftArr;
  }
  function sortArr(array, left = 0, right = array.length - 1) {
    if (array.length !== 0) {
      const position = partArr(left, right, array);
      if (right > position) sortArr(array, position, right);
      if (left < position - 1) sortArr(array, left, position - 1);
    }
    return array;
  }
  return sortArr(arrCopy);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let chars = str;
  let odd = '';
  let even = '';
  const charsArr = [chars];
  for (let i = 1; i <= iterations; i += 1) {
    for (let j = 0; j < chars.length; j += 1) {
      if (j % 2) odd += chars[j];
      else even += chars[j];
    }
    chars = even + odd;
    if (str !== chars) {
      charsArr[i] = chars;
      odd = '';
      even = '';
    } else return charsArr[iterations % i];
  }
  return chars;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let arrNumber = Array.from(`${number}`);
  for (let i = arrNumber.length - 1; i >= 0; i -= 1) {
    if (arrNumber[i + 1] !== undefined && arrNumber[i + 1] > arrNumber[i]) {
      for (let i2 = arrNumber.length - 1; i2 > i; i2 -= 1) {
        if (arrNumber[i] < arrNumber[i2]) {
          const num1 = arrNumber[i];
          const num2 = arrNumber[i2];

          arrNumber[i2] = num1;
          arrNumber[i] = num2;
          i2 = i;
          i += 1;

          const left = arrNumber.splice(0, i);
          const right = arrNumber.reverse();
          arrNumber = [...left, ...right];
        }
      }
      break;
    }
  }
  let res = '';
  for (let i = 0; i < arrNumber.length; i += 1) res += arrNumber[i];
  return +res;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
