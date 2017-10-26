# Proxies

#### Introduction 
Proxies allow you to overwrite the default behavior of objects.

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

#### Syntax
    var p = new Proxy(target, handler);
#### Parameters 
##### target
A target object (can be any sort of object, including a native array, a function or even another proxy) to wrap with Proxy.

##### handler
An object whose properties are functions which define the behavior of the proxy when an operation is performed on it.
The handler object is a placeholder object which contains traps for Proxy.
All traps are optional. If a trap has not been defined, the default behavior is to forward the operation to the target.

#### Examples
##### Basic usage
    const person = {name: ' Sarah ', age: 100};
    
    const personProxy = new Proxy(person, {
        get(target, name) {
            console.log('someone is asking for ', target, name);
            return target[name].toUpperCase();
        },
    
        set(target, name, value) {
            if (typeof value === 'string') {
                target[name] = value.trim();
            }
        }
    });
    
    let name = personProxy.name;
    console.log(name);
    
##### Validation
   With a Proxy, you can easily validate the passed value for an object. This example uses the set handler.   
    
    let validator = {
      set: function(obj, prop, value) {
        if (prop === 'age') {
          if (!Number.isInteger(value)) {
            throw new TypeError('The age is not an integer');
          }
          if (value > 200) {
            throw new RangeError('The age seems invalid');
          }
        }
    
        // The default behavior to store the value
        obj[prop] = value;
    
        // Indicate success
        return true;
      }
    };
    
    let person = new Proxy({}, validator);
    
    person.age = 100;
    console.log(person.age); // 100
    person.age = 'young'; // Throws an exception
    person.age = 300; // Throws an exception
    
# Sets and WeakSets
#### Introduction
A set is like a unique array, where you can add the same item once, having a nice API.

#### Set
    const people = new Set();
    
    // Add items
    people.add('John');
    people.add('Peter');
    people.add('Paul');
    console.log(people.size);
    
    // Remove items
    people.delete('Peter');
    console.log(people.size);
    
    // Check if item exists
    console.log(people.has('Paul'));
    
    // Use it like a generator
    const generator = people.values();
    console.log(people.values());
    
    console.log(generator.next());
    console.log(generator.next());
    console.log(generator.next());
    
    // Use it in a for..of loop
    for (const person of people) {
      console.log(person);
    }
    
    // You can not add the same item twice
    // Note how John appears only once
    people.add('John');
    for (const person of people) {
      console.log(person);
    }
##### Brunch example
    const brunch = new Set();
    
    // as people start coming in
    brunch.add('Peter');
    brunch.add('Sarah');
    brunch.add('Simone');
    
    // ready to open
    const line = brunch.values();
    console.log(line.next().value);
    console.log(line.next().value);
    brunch.add('Josh'); // Note that we can add new items even after console.log(line.next().value);
    brunch.add('Snickers');
    console.log(line.next().value);
    console.log(line.next().value);
    console.log(line.next().value);

#### WeakSet

    var dogs = new WeakSet();
    var snickers = {name: 'Snickers', breed: 'King Charles'};
    var sunny = {name: 'Sunny', breed: 'German Shepherd'};
    
    //dogs.add('Hugo'); // Fails. Only objects can be added to weak sets
    
    dogs.add(snickers);
    dogs.add(sunny);
    
    console.log(dogs.has(snickers)); // true
    snickers = null;
    console.log(dogs.has(snickers)); // false, since it was automatically removed from the WeakSet

# Maps and WeakMaps
#### Introduction
Sets are for arrays, Maps are for objects.
    
    var dogs = new WeakSet();
    var snickers = {name: 'Snickers', breed: 'King Charles'};
    var sunny = {name: 'Sunny', breed: 'German Shepherd'};
    
    //dogs.add('Hugo'); // Fails. Only objects can be added to weak sets
    
    dogs.add(snickers);
    dogs.add(sunny);
    
    console.log(dogs.has(snickers)); // true
    snickers = null;
    console.log(dogs.has(snickers)); // false, since it was automatically removed from the WeakSet

#### Working with WeakMaps

    let snickers = {name: 'Snickers'};
    let sunny = {name: 'Sunny'};
    
    const map = new Map();
    const weakMap = new WeakMap();
    
    map.set(snickers, 'Snickers is the best!');
    weakMap.set(sunny, 'Sunny is the best!');
    
    console.log(map.size);
    console.log(weakMap.size); // undefined
    
    snickers = null;
    sunny = null;
    
    // Wait a couple of seconds for garbage collection...
    
    console.log(map); // note how the set still has the original snickers object
    console.log(weakMap); // note how the original sunny object was garbage collected and removed

# Async and Await