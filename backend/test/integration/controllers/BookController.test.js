var request = require('supertest'),
    assert = require('assert'),
    should = require('should');



describe('#create', () => {


    it('should create a new book', (done) => {
        request(sails.hooks.http.app)
            .post('/admin/create')
            .send({
                name: "BEAaboy@yahoo.com",
                description: "simbi",
                language: "lagos",
                price: 1000,
                publicationdate: "03/25/2015",
                bookavailability: true,
                categoryname: "09234",
                categorys: "A",
                stock: 1
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                res.text.should.have.equal('book successfully created');
                done();
            });

    });


});
describe('#delete', () => {
    it('should delete a  book', (done) => {
        request(sails.hooks.http.app)
            .delete('/admin/remove')
            .send({
                name: "mechanics",

            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                res.text.should.have.equal('book deleted');
                should.exist(res.body);

                done();
            });


    });
});
describe('#list', () => {
    it('should list  book', (done) => {
        request(sails.hooks.http.app)
            .post('/book/list')
            .send({
                name: "mechanics",


            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);

                should.exist(res.body);

                done();
            });

    });




});
describe('#update', () => {
    it('should update a  book', (done) => {
        request(sails.hooks.http.app)
            .post('/admin/update')
            .send({
                name: "BEy@yahoo.com",
                description: "simbi",
                language: "lagos",
                price: 1000,
                publicationdate: "03/25/2015",
                bookavailability: true,
                categoryname: "09234",
                categorys: "mm",
                stock: 8

            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);

                should.exist(res.body);
                done();
            });


    });

});
describe('#search', () => {
    it('should search a  book', (done) => {
        request(sails.hooks.http.app)
            .post('/book/search')
            .send({
                name: "mechanics",

            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);

                should.exist(res.body);
                done();
            });


    });



});

describe('#list and check datatype', () => {
    it('should list  book and test datatype', (done) => {
        request(sails.hooks.http.app)
            .get('/book/list')

            .expect(200)
            .end((err, res) => {

                assert.equal(typeof (res.body[0].name), 'string');

                done();
            });

    });






    it('check datatype description', (done) => {
        request(sails.hooks.http.app)
            .get('/book/list')

            .expect(200)
            .end((err, res) => {

                assert.equal(typeof (res.body[0].description), 'string');

                done();
            });

    });
    it('check datatype language', (done) => {
        request(sails.hooks.http.app)
            .get('/book/list')

            .expect(200)
            .end((err, res) => {

                assert.equal(typeof (res.body[0].language), 'string');

                done();
            });

    });
    it('check datatype price', (done) => {
        request(sails.hooks.http.app)
            .get('/book/list')

            .expect(200)
            .end((err, res) => {

                assert.equal(typeof (res.body[0].price), 'number');

                done();
            });

    });
    it('check datatype publicationdate', (done) => {
        request(sails.hooks.http.app)
            .get('/book/list')

            .expect(200)
            .end((err, res) => {

                assert.equal(typeof (res.body[0].publicationdate), 'string');

                done();
            });

    });
});