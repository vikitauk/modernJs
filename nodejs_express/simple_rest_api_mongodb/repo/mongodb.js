"use strict";
const mongo = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const getDataBase = () => {
    return mongo.connect('mongodb://localhost:27017/express-workshop')
        .then( (connection) => {
            return connection;
        })
        .catch(err => console.log(err)) ;
}

const getItems = ( collectionName ) => {
    return getDataBase()
            .then( db => {
                let items = db.collection(collectionName);
                return items.find({}).toArray();
            })
            .catch( err => err );
}
const getItemById = (id, collectionName) => {
    return getDataBase()
        .then( db => {
            return db.collection(collectionName)
                .findOne( {_id: new ObjectID(id)} );
        })
        .catch( err => err);
}
const createItems = (itemsArray, collection) => {
    return getDataBase()
            .then( db => {
                const items = db.collection(collection);
                return items.insert(itemsArray);
            })
            .catch(err => err);
}
const updateItems = (filter, value) => {

}
const findItems = () => {

}

module.exports = {getItems, getItemById, createItems, updateItems, findItems};