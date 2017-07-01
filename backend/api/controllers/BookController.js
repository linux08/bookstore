

module.exports = {
    create: (req, res) => {
        var bookDetails = {
            name: req.body.name,
            description: req.body.description,
            language: req.body.language,
            price: req.body.price,
            //image: req.body.image,
            publicationdate: req.body.publicationdate,
            bookavailability: req.body.bookavailability,
            category: req.body.category,
            orderId: req.body.orderId,
            stock: req.body.stock



        };

        Book.create(bookDetails).exec((err, book) => {
            if (err) throw (err);
            else {

                res.send(book);

            }
        });
    },

    delete: (req, res) => {
        Book.destroy({
            name: req.body.name,

          //  permission: req.body.permission

        }, (err, book) => {
            if (err) throw err;

            else {
                res.send('book deleted');
            }
        }
        );

    },

    list: (req, res) => {
        Book.find({ bookavailability: true }, (err, book) => {
            if (err) throw (err)

            if (book) {
                res.send(book);
            }


        });

    },
    update: (req, res) => {
        var bookDetails = {
            name: req.body.name,
            description: req.body.description,
            language: req.body.language,
            price: req.body.price,
            publicationdate: req.body.publicationdate,
            bookavailability: req.body.bookavailability,
            category: req.body.category,
            orderId: req.body.orderId,
            stock: req.body.stock

        };
        Book.update({ name: req.body.name }, bookDetails, (err, book) => {
            if (err) throw (err);
            else {

                res.send('succesfully updated');
            }

        });

    },

    search: (req, res) => {
        
        Book.findOne({ name: req.param('name') }).exec((err, book) => {
            console.log(req.param('name'));
            if (err) { throw (err); }

            if(book){
            res.send(book);
            console.log(book);
            }
            
            if (!book) {
                console.log('book not found');
                res.send({'book':'book not found'});
            }
            
        });
    }
};
