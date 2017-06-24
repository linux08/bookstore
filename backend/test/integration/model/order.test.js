var assert = require('assert');

describe('Order',  (done)=> {

    //test for new Order
    it("should be able to create new Order",  (done)=> {
        Order.create({
            user: "customer",
            book: "understanding jquery",
            quantity:3,
            payment: 300,
            comment: "good"
        }, (err, Order)=> {

            assert.notEqual(Order, undefined);
            done();

        });

    });

});