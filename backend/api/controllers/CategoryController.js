var jwt_decode = require("jwt-decode");
const async = require('async');


module.exports = {
    create: (req, res) => {
        var details = {
            categoryName: req.body.categoryName,
        };


        Book.findOne({ name: req.body.name }).exec((err, book) => {

            details.book = book.id;

            Category.create(details).exec((err, category) => {

                if (err) throw (err);
                else {
                    var rlId = book.id;
                    Book.findOne({ name: req.body.name }).populate('categorys').exec((err, info) => {

                        res.send(info);

                    });
                }
            });
        });



    }
};