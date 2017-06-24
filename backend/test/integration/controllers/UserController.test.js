var request = require('supertest'),
    assert = require('assert'),
    should = require('should');



describe('#create', () => {


    it('register new user', (done) => {
        request(sails.hooks.http.app)
            .post('/user/create')
            .send({
                firstname: "linux",
                lastname: "sam",
                email: "BEAaboopy@yahoo.com",
                password: "simbi",
                phone: "09234",
                address: "lagos",
                order: "234",
                permission: "customer"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                res.body.should.have.property('user');
                done();
            });
    });

});

describe('#update', () => {


    it('update an existing user', (done) => {
        request(sails.hooks.http.app)
            .post('/user/update')
            .send({
                firstname: "linux",
                lastname: "sam",
                email: "BEAaboy@yahoo.com",
                password: "simbi",
                phone: "09234",
                address: "lagos",
                order: "234",
                permission: "customer"
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                res.body.message.should.be.equal('updated succesfully');
                done();
            });
    });

});

describe('#profile', () => {


    it('show a user profile', (done) => {
        request(sails.hooks.http.app)
            .get('/user/profile')
            .send({

                email: "BEAaboy@yahoo.com",

            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                res.body.message.should.be.equal('user not found');
                done();
            });
    });

});
describe('#list', () => {


    it('show registered users', (done) => {
        request(sails.hooks.http.app)
            .get('/user/list')
            .send({

            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);

                done();
            });
    });

});