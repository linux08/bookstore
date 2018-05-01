var jwt_decode = require("jwt-decode");
const async = require('async');


module.exports = {


    create: (req, res) => {
        async.waterfall([
            function getBook(next) {
                Book.findOne({ name: req.body.name }).exec((err, book) => {
                    if (err) return next(err);

                    if (!book) {
                        res.send('book is not available');
                    }
                    return next(null);
                });
            },
            function checkQuantity(next) {
                Book.count({ bookavailability: true }).exec((err, num) => {
                    return next(null);
                });
            },
            function checkPrice(next) {
                Book.findOne({ name: req.body.name }).exec((err, book) => {
                    if (err) return next(err);

                    if (req.body.payment <= (book.price * req.body.quantity)) {

                        return res.send({ message: 'invalid payment' });
                    }
                    return next(null);
                });
            },
            function updateStock(next) {
                Book.findOne({ name: req.body.name }).exec((err, book) => {
                    if (err) return next(err);

                    if (req.body.quantity >= book.stock) {

                        return res.send({ message: 'THE QUANTITY YOU REQUESTED FOR IS NOT AVAILABLE' });

                    }
                    const newStock = book.stock - req.body.quantity;
                    Book.update({ stock: newStock }).exec((err, book) => {

                    });
                    return next(null);

                });
            },
            function checkUser(next) {
                var orderInfo = {
                    quantity: req.body.quantity,
                    payment: req.body.payment,
                    comment: req.body.comment,
                };
                const token = req.param('token');
                const decoded = jwt_decode(token);
                User.findOne({ id: decoded.id }).exec((err, user) => {
                    if (err) throw (err);
                    if (!user) {
                        return res.send({ message: 'User not found' });
                    }
                    Book.findOne({ name: req.body.name }).exec((err, book) => {
                        if (err) return next(err);

                        if (!book) {
                            return res.send('book is not available');
                        }

                        orderInfo.user = user.id;
                        orderInfo.book = book.name;
                        Order.create(orderInfo).exec((err, order) => {
                            User.findOne({ id: decoded.id }).populate('order').exec((err, orderl) => {
                            });
                        });
                        return next(null);
                    });
                });
            }
        ], function (err) {
            if (err) return res.serverError(err);
            res.send({ message: 'order created succesfully' });

        });

    }
}