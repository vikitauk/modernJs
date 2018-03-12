"use strict";

const mongo = require('mongodb').MongoClient;
let db;
const url = 'mongodb://localhost:27017/express-workshop';
const collection = 'items';

mongo.connect(url)
    .then( (connection) => {
            db = connection;
            console.log('Connect successfully to server');
        })
    // CREATE
    /*.then( () => {
        const items = db.collection(collection);
        return items.insert([{name: 'Marto', age: 40}, {name: 'Pesho', age: 44}]);
    })
    .then( result => {
        console.log('Items created', result);
    })*/
     // UPDATE
    /*.then( () => {
        const items = db.collection(collection);
        return items.updateOne({name: 'Marto'}, {$set: {age: 25}});
    })
    .then( result => {
        console.log('items is updated', result);
    })*/

    //  DELETE
    /*.then( () => {
        const items = db.collection(collection);
        return items.deleteOne({name: 'Marto'});
    })
    .then( result => {
        console.log('Items deleted', result);
    })*/

    //FIND
    /*.then( () => {
        const items = db.collection(collection);
        return items.find({name: 'Pesho'}).toArray();
    })
    .then( result => {
        console.log('Result:', result);
    })*/
    .catch( err => console.log(err));

