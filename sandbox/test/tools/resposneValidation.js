"use strict";


const responseValidation = (expectedCode, validationFunction ) => {
    return {
        json: (statusCode, data) => {
                statusCode.should.equal(expectedCode);
                validationFunction(data);
        },
        send: (statusCode, data) => {
            statusCode.should.equal(expectedCode);
            validationFunction(data);
        }
    }
};

module.exports = responseValidation;