"use strict";
const router = require('express').Router();
const posts = require('../../controlers/post/index');

router.post('/post/create',  posts.createPost);

module.exports = {router};