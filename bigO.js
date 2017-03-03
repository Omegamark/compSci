//1. Fibonacci Sequence Iteratively:

function fibbonacciIterative(n) {
  if (n <= 1) {
      return 1;
  }

  var fibNumber;
  var numberOne = 1;
  var numberTwo = 1;

  for (var i = 1; i < n; i++) {
      fibNumber = numberOne + numberTwo;
      numberOne = numberTwo;
      numberTwo = fibNumber;
  }

  return fibNumber;

}

//Answer: n

//2. Counting all the characters in a string:

function countCharacters(input) {

  var characterCounts = {};

  for (var i = 0; i < input.length; i++) {
      var c = input[i];

      if (characterCounts[c] === undefined) {
          characterCounts[c] = 1;
      }

      else {
          characterCounts[c] += 1;
      }
  }

  return characterCounts;
}

//Anser: n

//3. Using countCharacters, report if all the characters are unique.
  //hint: Use the formula for countCharacters to determine the cost of calling that function.

  function allUnique(input) {
    var characterCounts = countCharacters(input);

    for (character in characterCounts) {
        if (characterCounts[character] !== 1) {
            return false;
        }
    }

    return true;
  }

//Answer: n^2

//4. Longest Palindromic Substring.

function longestPalindrome(str) {
  var longest = '';

  if (typeof str !== 'string') return longest;

  for (var start = 0; start < str.length; start++) {
      for (var end = start + 1; end < str.length + 1; end++) {
          var curSubString = str.substring(start, end)
          if (curSubString.length > longest.length && _isPalindrome(curSubString)) {
              longest = curSubString;
          }
      }
  }

  return longest;
}

function _isPalindrome(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed === str;
}

//Answer: Either n^3 or n^2 * m (this is due to us not knowing the length of the 'curSubString' input, therefore this becomes another variable I've called 'm')... Since the second function "_isPalindrome" is separated from the longestPalindrome function, are these 2 separate functions with 2 separate n's?

//Bonus: How do you determine the big O for recursive algorithms? Try the same process for this:
  //1. Recursive Fibbonacci.

  function fibbonacciRecursive(n) {

    if (n <= 1) {
        return 1;
    }

     return fibbonacciRecursive(n - 1) + fibbonacciRecursive(n - 2);
  }

  //Answer: n^3, since the function is being called twice within the initial call, meaning that the input needs to be operated on 3 times.
