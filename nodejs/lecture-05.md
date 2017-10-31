# Build in modules

#### OS
    const os = require('os');
    // const os {} = require('')
    // const os {} from '';
    // /* .globals.__dirname. */
    // const fs = require('fs')
    // fs.readdirSync(__dirname).forEach( file => console.log(file))
    
    console.log('Host:', os.hostname());
    console.log('Platform:', os.platform());
    console.log('CPU architecture:', os.arch());
    console.log('Total memory:', toGB(os.totalmem()), 'GB');
    console.log('Uptime:', toHours(os.uptime()), 'hours');
    
    function toGB(bytes) {
      return (bytes / (1024 * 1024 * 1024)).toPrecision(2);
    }
    
    function toHours(seconds) {
      return (seconds / 3600).toPrecision(2);
    }

#### DNS
    const dns = require('dns');
    
    dns.lookup('nodejs.org', (err, address, family) => {
        console.log('address: %j family: IPv%s', address, family);
    });
    
# Created modules

#### Animal

    class Animal {
      constructor(name) {
        this.name = name;
        this.thirst = 100;
        this.belly = [];
      }
      
      drink() {
        this.thirst -= 10;
        return this.thirst;
      }
      
      eat(food) {
        this.belly.push(food);
        return this.belly;
      }
    }
    
    module.exports = Animal;
    
    // module.exports = {
    //      Animal
    // };
    
    // exports.Animal = Animal;
    
    // global.print = print;

#### Dogo

    const Animal = require('./animal');
    
    class Dog extends Animal {
      constructor(name, breed) {
        super(name);
        this.name = name;
        this.breed = breed;
      }
      
      bark() {
        console.log(`Bark Bark! My name is ${this.name}.`);
      }
    }
    
    module.exports = Dog;

#### Zoo

    const Dog = require('./dog');
    
    const snickers = new Dog('Snickers', 'King Charles');
    const sunny = new Dog('Sunny', 'German Shepherd');
    
    snickers.bark();
    sunny.bark();
    