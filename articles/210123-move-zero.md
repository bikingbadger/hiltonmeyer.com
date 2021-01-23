---
title: Move Zero
description: Solution to the Leetcode problem of moving zero's to the end of an array
date: 2021-01-23
updated: 2021-01-23
layout: layouts/article.njk
tags:
  - content
  - articles
  - javascript
  - leetcode
  - problems
navtitle: Move Zero
permalink: articles/move-zero.html
---
Another [Leet Code](https://leetcode.com/problems/move-zeroes/) problem walk through today. This was moving all zeros in an array to the end. Seemed simple enough yetI didn't want brute force. I came up with a solution of an index and another number counting the zero's removed that could then be added on at the end. This solution was accepted although I knew that it wasn't ideal with the two loops.

On the first loop, I check if the value is zero, if it is remove it from the array and then add it to the zero's counter. I did this with a while loop as the array size changes and didn't want anything funny happening with the index out of bounds issues. After that, I had a for loop for the number of zero's adding them to the end of the array

```
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {

    let i = 0;
    let zeros = 0;
    while (nums.length >= i) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            zeros++;
        } else {
            i++;
        }
    }
    for (let i = 0; i < zeros; i++) {
        nums.push(0)
    }
};
let arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr);
```

A more elegant solution that I saw afterward was keeping track of two indexes and swapping the value between them if zero. You loop through the array, if it is not zero then swap this value with the value at the anchor. The anchor keeps track of the non-zero's and moves along only when there is a non zero. So the zero's get moved on and the non-zeros are moved up. Very clever and yet again a solution that may come in handy. 

```
var moveZeroes2 = function (nums) {

    let anchor = 0;
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== 0) {
            let temp = nums[anchor];
            nums[anchor] = nums[i];
            nums[i] = temp;
            anchor++;
        }
    }
};
```