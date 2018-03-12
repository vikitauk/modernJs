"use strict";
const {Router} = require('express');
const items = [{id: 1, name: 'Marto'}];
const repo = require('../repo/repo');

const getApiRoutes = (app) => {
    const router = new Router();

    router
            .get('/', (req, res) => {

                repo.getItems('items')
                    .then( collection => {
                        res.send(collection);
                    })
                    .catch(err => {
                        res.status(404).send(err);
                    })

            })
            .get('/:id', (req, res) => {

                const id = req.params.id;
                repo.getItemById('items', id)
                    .then( result => {
                        res.send(result);
                    })
                    .catch(err => {
                        res.status(404).send(err);
                    })

            })
            .post('/', (req, res) => {
                const items = req.body;

                repo.createItems(items)
                    .then( result => {
                        res.status(201).send(result);
                    })
                    .catch(err => {
                        res.send(err);
                    })
          });


    app.use('/api/items', router);
};

module.exports = getApiRoutes;