"use strict";

const Post = require('../../models/post');

let createPost = (req, res) => {

    let post = new Post(req.body);
    post.save((err, post) => {
        if(err)
            res.status(500).send(err);
        res.json(200, post);
    });
};


const getPosts = (req, res) =>{
    res.send("ok");
};

module.exports = {createPost, getPosts};