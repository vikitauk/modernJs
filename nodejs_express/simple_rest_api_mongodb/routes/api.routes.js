"use strict";
const {Router} = require('express');
const repository = require('../repo/mongodb');

const getApiRoutes = (app) => {
    const router = new Router();

    router
            .get('/', (req, res) => {

                let {q, page, size} = req.query;
                page = parseInt(page, 10) || 1;
                size = parseInt(size, 10) || 10;

                repository.getItems('items')
                    .then( result => {
                         if(q){
                             q = q.toLowerCase();
                             result = result.filter( (i)=>{
                                 return i.name.toLowerCase().includes(q);
                             });
                         }
                        result = result.slice((page-1)*size, page*size);
                        res.send(result);
                    })
                    .catch(err => res.send(err) );

            })
            .get('/:id', (req, res) => {
                const id = req.params.id;
                repository.getItemById(id, 'items')
                    .then( item => {
                        res.send(item);
                    })
                    .catch( err => res.status(404).send(err));
            })
            .post('/', (req, res) => {
                const item = req.body;
                repository.createItems(item, 'items')
                    .then( items => {
                        res.status(201).send(items);
                    })
                    .catch( err => {
                        res.send(err);
                    })
            });

    app.use('/api/items', router);
};

module.exports = getApiRoutes;