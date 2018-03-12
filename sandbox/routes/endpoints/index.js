const router = require('express').Router();
const posts = require('../../controlers/blogPost/');

router.post('/blogPosts/create', posts.createPost);
router.get('/blogPosts', posts.getPosts);

module.exports = router;
