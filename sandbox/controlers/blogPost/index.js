"use strict";
const BlogPost = require('../../models/blogPost');

const createPost = (req, res) => {
    let posts = new BlogPost(req.body);
    posts.save( (err, post) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.json(201, post);
        }
    });
};

const getPosts = (req, res) => {
    BlogPost.find( {}, (err, posts) => {
        if(err)
            res.send(500, err)
        res.json(200,posts);
    })
}


module.exports = {createPost, getPosts};