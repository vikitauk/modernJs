'use strict';


var classRoom = {};
    classRoom[Symbol('Mark')]= {grade: 50, gender: 'male'};
    classRoom[Symbol('Olivia')] = {grade: 80, gender: 'female'};
    classRoom[Symbol('Olivia')] = {grade: 40, gender: 'female'}
    classRoom.test = "";


// We can not have two elements with the same name


let symbols = Object.getOwnPropertySymbols(classRoom);

    console.log(symbols)
    console.log(classRoom[symbols[1]])