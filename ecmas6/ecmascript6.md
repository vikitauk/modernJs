# Arrow functions

#### Call back example

    function testFunction(){
        let digArr = [1,2,3,4,5];
        let doubles = digArr.map(function(x){
            return x*2;
        })
        console.log(doubles)
    }

#### Arrow functions like callback example

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

#### Arrow function example

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

#### Introduction

    let o = {d: 43, b: false};
    let {d, b} = o;
    console.log(d); // 43
    console.log(b); // false

#### Assignment without declaration
    var a, b;
    ({a, b} = {a:1, b:2});
    console.log(a);
    console.log(b);

#### Assigning to new variable names
    let o = {p: 42, q: false}
    var {p:pp, q:qq} = o;

    console.log(pp);
    console.log(qq);

#### Default values:

    let {a = 0, b = 5} = {b: 43}; // could be something like this {a: 5}
    console.log(a);
    console.log(b);

#### Assigning to new variable names and providing default values:
    let {a: aa = 0, b: bb=0 } = {a: 99}
    console.log(aa);
    console.log(bb);

#### Unpacking fields from objects passed as function parameter

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









