# Promises

#### Introduction

If you ever did an async call to a server, you already worked with promises.

**A Promise is in one of these states:**

* pending: initial state, neither fulfilled nor rejected.
* fulfilled: meaning that the operation completed successfully.
* rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value, or rejected with a reason (error).

####Methods

     Promise.all()
     Promise.race()
     Promise.resolve(value)
     Promise.reject(reason)

#### Building your own promise
    const promise = new Promise((resolve, reject) => {
    
        setTimeout(() => {
            resolve("Promise resolved");
        }, 1000);
    
    });
    
    promise.then((data) => {
    
        console.log("Data: "+ data);
    }).catch((error) => {
        console.log(error);
    })
    
#### Waiting for multiple Promise
    const weather = new Promise((resolve, reject) => {
    
        setTimeout(() => {
            console.log("First promise");
            resolve({temp: 24, conditions: "sunny with clouds"});
        }, 1000);
    
    });
    
    const tweets = new Promise((resolve, reject) => {
    
        setTimeout(() => {
            console.log("Second promise");
            resolve('I love cakes, BBQ is good too!');
        }, 1000);
    });
    
    Promise.all([weather, tweets]).then( response => {
        const [weatherInfo, tweetsInfo] = response;
    
        console.log("Result:");
        console.log(weatherInfo, tweetsInfo);
    });

#### Racing promises examples with setTimeout

    var p1 = new Promise(function(resolve, reject) { 
        setTimeout(resolve, 500, 'one'); 
    });
    var p2 = new Promise(function(resolve, reject) { 
        setTimeout(resolve, 100, 'two'); 
    });
    
    Promise.race([p1, p2]).then(function(value) {
      console.log(value); // "two"
      // Both resolve, but p2 is faster
    });
    
    var p3 = new Promise(function(resolve, reject) { 
        setTimeout(resolve, 100, 'three');
    });
    var p4 = new Promise(function(resolve, reject) { 
        setTimeout(reject, 500, 'four'); 
    });
    
    Promise.race([p3, p4]).then(function(value) {
      console.log(value); // "three"
      // p3 is faster, so it resolves
    }, function(reason) {
      // Not called
    });
    
    var p5 = new Promise(function(resolve, reject) { 
        setTimeout(resolve, 500, 'five'); 
    });
    var p6 = new Promise(function(resolve, reject) { 
        setTimeout(reject, 100, 'six');
    });
    
    Promise.race([p5, p6]).then(function(value) {
      // Not called
    }, function(reason) {
      console.log(reason); // "six"
      // p6 is faster, so it rejects
    });
    


# Symbol

#### Introduction
    const dog = Symbol('Caesar'); // Caesar is not the value of the symbol, it's just a descriptor
    console.log(dog);

#### Symbols are always unique

    const dog1 = Symbol('Caesar');
    const dog2 = Symbol('Caesar');
    console.log(dog1 == dog2); // false

#### Where to use Symbols

    var classRoom = {
      Mark: {grade: 50, gender: 'male'},
      Olivia: {grade: 80, gender: 'female'},
      Olivia: {grade: 40, gender: 'female'} // We can not have two elements with the same name
    };

    var classRoom = {
      [Symbol('Mark')]: {grade: 50, gender: 'male'},
      [Symbol('Olivia')]: {grade: 80, gender: 'female'},
      [Symbol('Olivia')]: {grade: 40, gender: 'female'} // We can not have two elements with the same name
    };

    console.log(classRoom);

    for (let person in classRoom) {
      console.log(person);
    } // logs nothing, since symbol properties are not enumerable

    const symbols = Object.getOwnPropertySymbols(classRoom);

    const data = symbols.map(symbol => classRoom[symbol]);
    console.log(data);

#### Benefits:

- avoiding naming collisions

#### Exercises

1. Write a promise that loads the list of movies from https://s3.amazonaws.com/workshop-sample-data/movies.json, and returns the *limit* top rated movie.

    function toRatedMovies(limit) {

    }

    topRatedMovies(10).then(movies => {
      console.log(movies);
    });

How to sort arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
How to slice an array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

2. Write a function that checks whether an email address was already registered, using the following endpoint: https://s3.amazonaws.com/workshop-sample-data/is-email-registered.json


