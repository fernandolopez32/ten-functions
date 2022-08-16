"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(input){
    return input === true;
}
function isFalse(input){
    return input === false;
}
function not(input){
    return !Boolean(input);
}
function addOne(input){
    return Number(input) +1;
}
function isEven(number){
    if (number != false);
    return number % 2 === 0;
}
function isIdentical(argument1, argument2){
    return argument1 === argument2;
}
function isEqual(input , input2){
    return
}