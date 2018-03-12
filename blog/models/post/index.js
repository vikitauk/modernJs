const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const Post = new Schema({
    title: String,
    content: String,
    author: String,
    createDate: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Post', Post);

