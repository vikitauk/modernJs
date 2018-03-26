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
person[Symbol.iterator] = function (){
    for(const key in this){

        return key; // key name
        //yield this[key]; // key value
        //yield `${key}: ${this[key]}`;// key value
    }
}


//console.log(person.next())
for(let x of person){
  console.log(x)
}