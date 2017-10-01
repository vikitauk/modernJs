#Arrow functions:

### Call back example

function testFunction(){

    let digArr = [1,2,3,4,5];
    let doubles = digArr.map(function(x){
        return x*2;
    })
    console.log(doubles)

}
----------

// arrow function example

function testFunction(){

    let digArr = [1,2,3,4,5];
    let doubles = digArr.map((x, index) => x*2)
    console.log(doubles)

}

function testFunction(){

    let digArr = [1,2,3,4,5];
    let doubles = digArr.map( x => x*2 )
    console.log("Array with doubles: " + doubles)

}

function circleArea(r){
    const PI = 3.14;
    return PI*r*r;
}

let circleAreaTwo = (r) => {
    const PI = 3.14;
    return PI*r*r;
};

let circleAreaThree = r => 3.14*r*r;
console.log(circleArea(6));
console.log(circleAreaTwo(6));
console.log(circleAreaThree(6));

/// END ARROW functions



// String literals

let name = "Martin";
let age = "40";

let a = 10;
let b = 30;

console.log("My name is "+name+" i am "+age+ " years old");
console.log(`My name is ${name} i am ${age} years old`);
console.log(`My name is ${name} i am ${a+b} years old`);

// END String literals


// Destructing

let foo = ['one', 'two', 'three'];
let [one, two, three] = foo;

console.log(one);
console.log(two);
console.log(three);


swaping values;

var a = 1;
var b = 2;

console.log("a = "+a);
console.log("b = "+ b);

[a,b] = [b, a];

console.log("a = "+a);
console.log("b = "+b);

Ignoring some returned values:

let [a, , b] = [1,2,32];

console.log("a = "+a);
console.log("b = "+b);

Assigning the rest:

let [a,...b] = [1,2,32,3,5,7,8];
console.log(a);
console.log(b);

Object Destructing

let o = {d: 43, b: false};
let {d, b} = o;
console.log(d);
console.log(b);

default values
let {d:dd = 0, b:bb = true} = {d: 43};
console.log(dd);
console.log(bb);

Unpacking fields from objects passed as function parameter









