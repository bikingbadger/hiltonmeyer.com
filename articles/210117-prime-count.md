---
title: Prime Count
description: Solution to the Leetcode problem of counting the number of prime numbers less than a given non-negative number
date: 2021-01-17
updated: 2021-01-17
layout: layouts/article.njk
tags:
  - content
  - articles
  - javascript
  - leetcode
  - problems
navtitle: Prime Count
permalink: articles/prime-count.html
---
## The problem

This is another simple problem that I over complicated to the nth degree. Although I got there and learnt something along the way which I guess is the point. Firstly what is a prime number? A prime number is a whole number greater than 1, which is only divisible by 1 and itself. So that's the definition. Now how to go about calculating a prime number given without breaking the cpu bank. I came across a cool algorithm called the Sieve of Eratosthenes, which is old, very old. It first shows up around 200 CE although could be as old as 300 BCE. So let's just say that a modern day machine should be able to handle the mathematics. You can read more about it [here](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) if you want

My first attempt was a brute force approach and used arrays that I would then remove from the array if it is not a prime number. This worked for lower numbers but as I got to higher numbers it wasn't acceptable and I got an *Time Limit Exceeded* result from the check on [Leetcode](https://leetcode.com/problems/count-primes/). 

```
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n === 0 || n === 1) return 0;

  const primeArray = [];
  for (let i = 2; i <= n - 1; i++) {
    primeArray.push(i);
  }
  const sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i++) {
    for (let j = 0; j <= primeArray.length; j++) {
      if (primeArray[j] % i === 0 && primeArray[j] !== i) {
        primeArray.splice(j, 1);
      }
    }
  }

  return primeArray.length;
};
```

Back to the drawing board and I remembered my last [challenge using a map](/articles/first-unique-char.html) and I could just add the number of times a number was not a prime and return the counts where the number was still zero. This ran much fast and i even got a result on my local machine quickly but again I was thwarted by processing time.

```
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n === 0 || n === 1) return 0;

  const primeMap = {};
  // for (let i = 2; i <= n - 1; i++) {
  //   primeArray.push(i);
  // }
  //console.log(primeArray);
  const sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i++) {
    for (let j = 2; j < n; j++) {
      if (primeMap[j] === undefined) {
        primeMap[j] = 0;
      }
      if (j % i === 0 && i!==j) {
        primeMap[j]++;
      }
    }
  }
  let result = 0;
  for(let i = 0; i<= n;i++){
    if(primeMap[i]===0) result++;
  }

  return result;
};
```

The eventual solution dawned on me. Why was I complicating things so much. If I had a helper function to check if a number was a prime number I could simply loop through the list of numbers and add to a counter if it was a prime or not. And that was accepted. 

```
const isPrime = (n) => {
  // Check if number is less than
  // equal to 1
  if (n <= 1) return false;
  // Check if number is 2
  else if (n == 2) return true;
  // Check if n is a multiple of 2
  else if (n % 2 == 0) return false;

  // If not, then just check the odds
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i == 0) return false;
  }
  return true;
};

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let result = 0;
  for (let i = 1; i < n; i++) {
    if (isPrime(i)) {
      result++;
    }
  }
  return result;
};
```

## What I learnt

1. Simplify the solution
2. Use helper functions