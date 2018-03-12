"use strict";

process.env.NODE_ENV = 'test'

const config    = require('../../../config')
    ,mongoose   = require('mongoose')
    ,posts      = require('../../../controlers/post')
    ,Post       = require('../../../models/post')
    ,should     = require('should');

describe('Blog Posts API', () => {
    let dummyPost;

    before((done) => {
        mongoose.connect(config.testDb, () => {
            console.log("Connect to:", config.testDb)
            done();
        });
        dummyPost = new Post({
            title: "test post title",
            content: "Lorem ipsum ....",
            author: "Martin M."
        });
        dummyPost.save((err, post) => {
            if(err){
                res.send(err);
            }
        })
    });
    describe("Create Blog Post", () => {
        it("should create new post", ( done ) => {

            let req = { body: { title: "Test title", content: "test content", author: "Martin M."}};

            let resValidation = (expectedCode, validationFunction) => {
                return {
                     json: (statusCode, data) =>{
                        statusCode.should.equal(expectedCode);
                        validationFunction(data);
                     }
                    ,send: (statusCode, data) => {
                        statusCode.should.equal(expectedCode);
                        validationFunction(data);
                    }
                }
            };

            let res = resValidation(200, ( post ) => {
                post.should.have.property('title');
                post.title.should.equal('Test title');
                done();
            });

            posts.createPost(req, res);
        })
    });

    after((done) => {
       Post.remove({}, error => {
           if(error){
               console.log(error);
           }
       });
       mongoose.disconnect(done);
    });

})

