var assert = require('assert');

describe('User', function (done) {

    //test for new user
    it("should be able to create",  (done)=> {
        User.create({
            firstname: "linux",
            lastname: "sam",
            email: "BEAaboy@yahoo.com",
            password: "simbi",
            phone: "09234",
            address: "lagos",
            order:"234",
            permission: "customer"
        }, function (err, user) {

            assert.notEqual(user, undefined);
            done();
        });

    });

});
