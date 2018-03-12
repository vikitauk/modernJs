const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const BlogPost = new Schema({
    title: String,
    content: String,
    author: String,
    createDate: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('BlogPost', BlogPost);