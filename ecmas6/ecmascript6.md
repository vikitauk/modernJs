# Var, Let and Const
#### Introduction
    Variables declared with var are function scoped, can be redeclared and reassigned. Variables declared with let are block scope, can not be redeclared, but can be reassigned. Variables declared with const are block scope, can not be redeclared, or reassigned. Variables declared with let or const are not hoisted.

    function varTest() {
      var x = 1;
      if (true) {
        var x = 2;  // same variable!
        console.log(x);  // 2
      }
      console.log(x);  // 2
    }
----------
    function letTest() {
      let x = 1;
      if (true) {
        let x = 2;  // different variable
        console.log(x);  // 2
      }
      console.log(x);  // 1
    }
----------
#### Using let in async functions inside for loops
    for (var i = 0; i < 10; i++) {
      console.log(i);
      setTimeout(function() {
        console.log('The number is ' + i);
      }, 1000);
    }
----------
    for (let i = 0; i < 10; i++) {
      console.log(i);
      setTimeout(function() {
        console.log('The number is ' + i);
      }, 1000);
    }


# Arrow functions

#### Arrow function example

    function circleArea1(r){
        const PI = 3.14;
        return PI*r*r;
    }

    let circleArea2 = (r) => {
        const PI = 3.14;
        return PI*r*r;
    };

    let circleArea3 = r => 3.14*r*r;  // if you have one statement you don't need return

    console.log(circleArea1(6));
    console.log(circleArea2(6));
    console.log(circleArea3(6));

#### Arrow functions like callback example

    function testFunction(){

        let digArr = [1,2,3,4,5];
        let doubles = digArr.map( x => x*2 )
        console.log("Array with doubles: " + doubles)
    }

    testFunction();

----------

# String literals

    let name = "Martin";
    let age = "40";

    let a = 10;
    let b = 30;

    console.log("My name is "+name+" i am "+age+ " years old");
    console.log(`My name is ${name} i am ${age} years old`);
    console.log(`My name is ${name} i am ${a+b} years old`);

----------

# Destructing

    let foo = ['one', 'two', 'three'];
    let [one, two, three] = foo;

    console.log(one);
    console.log(two);
    console.log(three);


#### Swapping values;

    var a = 1;
    var b = 2;

    console.log("a = "+a);
    console.log("b = "+ b);

    [a,b] = [b, a];

    console.log("a = "+a);
    console.log("b = "+b);

#### Ignoring some returned values:

    let [a, , b] = [1,2,32];
    console.log("a = "+a);
    console.log("b = "+b);

#### Assigning the rest:

    let [a,...b] = [1,2,32,3,5,7,8];
    console.log(a);
    console.log(b);
----------

## Object Destructing

##### Introduction

    let o = {d: 43, b: false};
    let {d, b} = o;
    console.log(d); // 43
    console.log(b); // false

##### Assignment without declaration
    var a, b;
    ({a, b} = {a:1, b:2});
    console.log(a);
    console.log(b);

##### Assigning to new variable names
    let o = {p: 42, q: false}
    var {p:pp, q:qq} = o;

    console.log(pp);
    console.log(qq);

##### Default values:

    let {a = 0, b = 5} = {b: 43}; // could be something like this {a: 5}
    console.log(a);
    console.log(b);

##### Assigning to new variable names and providing default values:
    let {a: aa = 0, b: bb=0 } = {a: 99}
    console.log(aa);
    console.log(bb);

##### Unpacking fields from objects passed as function parameter

    let user = {
        id: 43,
        displayName: "GoshGosh",
        fullName: {
            firstName: "Gosho",
            lastName: "Petrov"
        }
    }

    function userId({id}){
        return id;
    }

    function whoIs({displayName, fullName: {firstName, lastName} }){
        return `${displayName} is ${firstName} ${lastName}`;
    }

    console.log( userId(user) );
    console.log( whoIs(user) );
----------

# Spread and Rest

## Spread

#### Replace aplly


    function myFunction(x,y,z){
        console.log("x: "+x);
        console.log("y: "+y);
        console.log("z: "+z);
    }

    var args = [0,1,2]

    myFunction(args[0], args[1], args[2]); // the old way

    myFunction.apply(null, args);

    myFunction(...args);


#### Apply for new

    var dateArr = [1970, 1, 12];
    var d = new Date(...dateArr);
    console.log(d)

#### More powerful array literal

    var arr1 = [4, 5];
    var arr2 = [1,2,3, ...arr1, 6, 7,8,9,10];
    console.log(arr2);

#### A better way to concatenate array

    var arr1 = [0,1,2];
    var arr2 = [3,4,5];
    arr1 = [...arr1, ...arr2];

    console.log(arr1);

#### Spread object literals

    var obj1 = {foo: 'bar', x: 42};
    var obj2 = {foo: 'baz', y: 13};
    var cloneObject = {...obj1};
    var mergeObj = {...obj1, ...obj2};

    console.log(cloneObject);
    console.log(mergeObj);

## Rest
    function add(...[a,b,c]){
        return a+b+c;
    }
    console.log(add(1));
    console.log(add(1,2,3));
    console.log(add(1,2,3,4,5,6,6,7));
----------
    function multiply(multiplier, ...theArgs){
        return theArgs.map( function (element) {
            return element*multiplier;
        })
    }

    var arr = multiply(2,1,2,3)
    console.log(arr);

#### Exercises

- Implement the convertCurrency function that accepts a rate, and a list of values to be converted.









