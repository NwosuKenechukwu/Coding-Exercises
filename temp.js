"use strict";

const temperatures1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const temperatures2 = [1, 34, 54, 12, "error", 22, 33];

const tempAmp = function (arr1, arr2) {
  const mergedArray = arr1.concat(arr2);
  for (let i = 0; i < mergedArray.length; i++) {
    if (mergedArray[i] === "error") {
      mergedArray.splice(mergedArray.indexOf(mergedArray[i]), 1);
    }
  }
  console.log(mergedArray);
  return `The temperature amplitude is: ${
    Math.max(...mergedArray) - Math.min(...mergedArray)
  }`;
};

console.log(tempAmp(temperatures1, temperatures2));
