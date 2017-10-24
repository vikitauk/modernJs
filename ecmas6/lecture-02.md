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


# Classes

#### Classes in ES5 

    function Dog(){
        this.name = name;
        this.breed = breed;
    }
    
    // prototype methond are shared protype method
    Dog.prototype.bark = function(){
        console.log(`Bark Bark! My name is ${this.name} `);
    }
    
    Dog.info = function() {
        console.log(`The dog is better then cat!`);
    }
    
    const snickers = new Dog('Snickers', 'King Charles');
    const sunny = new Dog('Sunny', 'German Shepart');
    
    
    snikers.bark();
    sunny.bark();
    Dog.info();

#### Classes in ES6 

    class Dog {
        constructor(name, breed){
            this.name = name;
            this.breed = breed;
        }
    
        bark(){
            console.log(`Bark Bark! My name is ${this.name}`);
        }
    
        static info(){
            console.log(`A dog is better then cat!`)
        }
    
        get description(){
            return `${this.name} is a ${this.breed} type of dog`;
        }
    
        set nicknames(value){
            this.nick = value.trim();
        }
    
        get nicknames(){
            return this.nick.toUpperCase();
        }
    }
    
    const snickers = new Dog('Snickers', 'King Charles');
    const sunny = new Dog('Sunny', 'German Shepherd');
    
    snickers.bark();
    sunny.bark();
    
    console.log(snickers)
    console.log(snickers.constructor)
    
    Dog.info();
    
    console.log(snickers.description);
    
    snickers.nicknames = ' snicky ';
    console.log(snickers.nicknames);
 
#### Extending classes with super()

    class Animal {
        constructor(name){
            this.name = name;
            this.thirst = 100;
            this.belly  = [];
        }
    
        drink(){
            this.thirst -= 10;
            return this.thirst;
        }
    
        eat(){
            this.belly.push(100);
            return this.belly;
        }
    }
    const rhino = new Animal('Rhiney');
    
    class Dog extends Animal {
        constructor(name, breed){
            super(name);
            this.breed = breed;
        }
    
        bark(){
            console.log(`Bark Bark! My name is ${this.name}`);
        }
    }
    
    const snickers = new Dog('Snickers', 'King Charles');
    snickers.eat();
    console.log(snickers.belly);
    snickers.bark();
 
#### Exercises

- implement a MovieCollection class, extending Array with the following methods: constructor, add - adds a new movie, remove - removes a movie, topRated(limit) - returns the first limit top rated movies

	    class MovieCollection extends Array {

	    }

	    const movies = new MovieCollection(
	      'Tom\s Favorite Movies',
	      {title: 'The Godfather', year: 1972, length: 180, stars: 9},
	      {title: 'Pulp Fiction', year: 1994, length: 165, stars: 8},
	      {title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2003, length: 190, stars: 10},
	      {title: 'Inception', year: 2004, length: 175, stars: 10},
	      {title: 'The Lord of the Rings: The Two Towers', year: 2002, length: 187, stars: 9},
	      {title: 'The Matrix', year: 1999, length: 188, stars: 9},
	      {title: 'The Usual Suspects', year: 1995, length: 160, stars: 7},
	      {title: 'Léon: The Professional', year: 1994, length: 165, stars: 9},
	      {title: 'Saving Private Ryan', year: 1998, length: 173, stars: 8},
	      {title: 'Interstellar', year: 2014, length: 195, stars: 9}
	    );

# Generators

#### Functions that we can start and stop.
    
    function* listDogs(){
        yield 'Snickers';
        yield 'Sunny';
        yield 'Cesar';
    }
    
    const dogs = listDogs();
    console.log(dogs);
    
    let dog = dogs.next();
    console.log(dog);
    
    dog = dogs.next();
    console.log(dog);
    
    dog = dogs.next();
    console.log(dog);
 
#### Infinity generator
    
    function* generateId(){
        let id = 0;
        while(true)
            yield id++;
    }
    
    const genId = generateId()
    console.log(genId.next().value); // 0
    console.log(genId.next().value); // 1
    console.log(genId.next().value); // 2
    console.log(genId.next().value); // 3
    console.log(genId.next().value); // 4

#### "For of" of object with generators and Symbol

##### Print object keys v.1 
    let person = {
        name: 'Ivan',
        gender: 'male',
        age: '25',
        address: {
            country: 'Bulgaria',
            city: 'Sofia',
            str: 'Rakovska',
        }
    }
    
    // attach Symbol.iterator
    person[Symbol.iterator] = function* (){
        for(const key in this){
    
            yield key; // key name
            //yield this[key]; // key value
            //yield `${key}: ${this[key]}`;// key value
        }
    }
    
##### Print object keys v.2
    
    let person = {
        name: 'Ivan',
        gender: 'male',
        age: '25',
        address: {
            country: 'Bulgaria',
            city: 'Sofia',
            str: 'Rakovska',
        },
        [Symbol.iterator]() {
            return iterate('', this)
        }
    }
    
    function* iterate(prefix, obj){
        for(const key in obj){
            if(typeof obj[key] === 'object'){
                yield* iterate(`${prefix}.${key}`, obj[key])
            } else {
                yield `${prefix}.${key}: ${obj[key]}`;
            }
        }
    }
    
    
    for(const x of person){
        console.log(x);
    }   