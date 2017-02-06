(function () {
  'use strict';

  function zero (fn) {
    return (typeof fn === 'function') ? fn(0) : 0;
  }

  function one (fn) {
    return (typeof fn === 'function') ? fn(1) : 1;
  }

  function two (fn) {
    return (typeof fn === 'function') ? fn(2) : 2;
  }

  function three (fn) {
    return (typeof fn === 'function') ? fn(3) : 3;
  }

  function four (fn) {
    return (typeof fn === 'function') ? fn(4) : 4;
  }

  function five (fn) {
    return (typeof fn === 'function') ? fn(5) : 5;
  }

  function six (fn) {
    return (typeof fn === 'function') ? fn(6) : 6;
  }

  function seven (fn) {
    return (typeof fn === 'function') ? fn(7) : 7;
  }

  function eight (fn) {
    return (typeof fn === 'function') ? fn(8) : 8;
  }

  function nine (fn) {
    return (typeof fn === 'function') ? fn(9) : 9;
  }

  function plus (num) {
    return function () {
      return arguments[0] + num;
    };
  }

  function minus (num) {
    return function () {
      return arguments[0] - num;
    };
  }

  function times (num) {
    return function () {
      return arguments[0] * num;
    };
  }

  function dividedBy (num) {
    return function () {
      return arguments[0] / num;
    };
  }

  var Test = {};

  Test.assertEquals = function (equation, answer) {
    if (equation === answer) {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
  }

  Test.assertEquals(seven(times(five())), 35);
  Test.assertEquals(four(plus(nine())), 13);
  Test.assertEquals(eight(minus(three())), 5);
  Test.assertEquals(six(dividedBy(two())), 3);
  Test.assertEquals(one(plus(zero())), 1);
})();
