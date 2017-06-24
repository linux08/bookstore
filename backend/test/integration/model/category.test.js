var assert = require('assert');

describe('Category', function (done) {

    //test for new Category
    it("should be able to create new Category", function (done) {
        Category.create({

            categoryName: "mechanics",
            belongs: "arithmetic"
        }, function (err, category) {

            assert.notEqual(category, undefined);
            done();

        });

    });
    //test for no categoryName
    it("test for no categoryName", function (done) {
        Category.create({
            categoryName: "mechanics",
            belongs: "arithmetic"
        }, function (err, category) {

            assert.notEqual(category, undefined);
            done();

        });

    });


});