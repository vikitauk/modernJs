'use strict';

function multiplay(multiplier, ...theArgs){
    return theArgs.map( function (element) {
        return element*multiplier;
    })
}

var arr = multiplay(2,1,2,3)
console.log(arr);