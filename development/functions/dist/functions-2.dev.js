"use strict";

var numbersArr = [1, 0.5, 0.7, 0.25];

var createPercentageList = function createPercentageList(numbersArr) {
  var percentageList = numbersArr.map(function (number) {
    return "".concat(number * 100, "%");
  });
  return percentageList;
};

console.log(percentageList);