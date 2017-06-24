var assert = require('assert')
should = require('should');

describe('Book',  (done)=> {

    //test for new book
    it("should be able to create new book", (done)=> {
        Book.create({
            
            
            name: "BEAaboy@yahoo.com",
            description: "simbi",
            language: "lagos",
            price: 1000,
            publicationdate: "03/25/2015",
            bookavailability: true,
            categoryname: "09234",
            categorys:"",
            stock:1
        }, (err, book)=> {
            assert.notEqual(book, undefined);
            done();
        });

    });


    it("test for wrong dataformat",  (done)=> {
        Book.create({
            name: "BEAaboy@yahoo.com",
            description: "simbi",
            language: "lagos",
            price: 1000,
            publicationdate: 03 / 25 / 2015,
            bookavailability: true,
            categoryname: "09234",
            categorys:"",
            stock:1
           
           
        },  (err, book)=> {

            assert.equal(book, undefined);
            done();
        });

    });

    // test for no description
    it("test for no description ", (done) =>{
        Book.create({
             name: "BEAaboy@yahoo.com",
            description: "",
            language: "lagos",
            price: 1000,
            publicationdate: 03 / 25 / 2015,
            bookavailability: true,
            categoryname: "09234",
            categorys:"",
            stock:1
        },  (book, err)=> {

            assert.notEqual(book, undefined);
            done();

        });

    });


});