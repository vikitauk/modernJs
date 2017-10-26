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