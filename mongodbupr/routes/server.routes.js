"use strict";
const {Router} = require('express');
const items = [{id: 1, name: 'Marto'}];

const getServerRoutes = (app) =>{

    const router = new Router();

    router
        .get('/', (req, res) => {
            res.render('../views/all', { model: items });
        })
        .get('/:id', (req,res) =>{
            let id = parseInt(req.params.id, 10);
            let item = items.find((i) => i.id === id );
            if(!item){
                return res.redirect('/404');
            }
            return res.render('details', {model: item})
        });
    app.use('/', router);
}

module.exports = getServerRoutes;