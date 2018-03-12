"use strict";
const mongo = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


const getMongoDb = () =>{
    return mongo.connect('mongodb://localhost:27017/express-workshop')
            .then( (connection) => {
                return connection;
            })
        .catch(err => err);

}
const createItems = (items) => {
    return getMongoDb()
        .then( db => {
            const collection = db.collection('items');
            return collection.insert(items);
        }).catch( err => err )
}
const getItems = (collectionName) => {
    return getMongoDb()
        .then( db => {
            let items = db.collection(collectionName);
            return items.find({}).toArray();
        })
        .catch( err => err);
}
const getItemById = (collectionName, id) => {
    return getMongoDb()
        .then( db => {
            let items = db.collection(collectionName);
            return items.findOne({_id: new ObjectID(id)});
        })
        .catch( err => err);
}
module.exports = {createItems, getItems, getItemById};