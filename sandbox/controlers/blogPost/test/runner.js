"use strict";
const mongoose = require('mongoose');
const config = require('../../../config');
const blogPostController = require('../../blogPost');
const BlogPostModel = require('../../../models/blogPost');
const validationFunction = require('../../../test/tools/resposneValidation');
const should = require('should');

describe("Blog POST API test", () => {
    before((done) => {
        mongoose.connect(config.dbTest, {useMongoClient: true}, () => {
            console.log("Connect to mongo DB");
            done();
        });
        let dummyPost = new BlogPostModel({title: "dummy title"
            , content: "dummy content", author: "dummy author"});
        dummyPost.save((err, post) => {
            if(err)
                console.log(err);
        })
    });

    describe("Create blog post", () => {
        it("it should create blog post", ( done ) => {
            let req = {body: {title: "Test title", content: "Test post content", author: "Marto"}}

            let res = validationFunction(201, (res) => {
                res.should.have.property('title');
                res.title.should.equal('Test title');
                done();
            });

            blogPostController.createPost(req, res);
        })
    });
    describe("Get blog post", () => {
        it("Should get blog posts", (done) => {

            let res = validationFunction(200, (response) => {
                response.should.be.Array();
                response[0].should.have.property('title');
                response[0].title.should.equal('dummy title');
                done();
            });

            blogPostController.getPosts({}, res);
        });
    });

    after((done) => {
        BlogPostModel.remove({}, (err) => {
            if(err)
                console.log(err);
        });
        mongoose.disconnect(done);
    });
})
