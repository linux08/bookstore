

module.exports = {
    create: (req, res) => {

        // req.file('avatar').upload({
        //     maxBytes: 10000000,
        //     dirname: sails.config.appPath + '/assets/images/avatar/'
        // }, function (err, uploadedFiles) {
        //     if (err) return res.negotiate(err);
        //     console.log(uploadedFiles.length + ' file(s) uploaded successfully!');
        //     console.log(uploadedFiles);
        //     req.body["avatar"] = uploadedFiles[0].fd;

        req.file('avatar').upload({
            // don't allow the total upload size to exceed ~10MB
            dirname: sails.config.appPath + '/assets/images/',
            maxBytes: 10000000
        }, function whenDone(err, uploadedFiles) {
            if (err) {
                return res.negotiate(err);
            }

            // If no files were uploaded, respond with an error.
            if (uploadedFiles.length === 0) {
                return res.badRequest('No file was uploaded');
            }


            // Save the "fd" and the url where the avatar for aBook can be accessed
            // Book.update(req.session.me, {

            // Generate a unique URL where the avatar can be downloaded.
            //avatarUrl = require('util').format('%s/book/avatar/%s', sails.config.appUrl, req.session.me);

            // Grab the first file and use it's `fd` (file descriptor)
            avatarFd = uploadedFiles[0].fd;
            // })
            //     .exec(function (err) {
            //         if (err) return res.negotiate(err);
            // return res.ok();
            var bookDetails = {
                name: req.body.name,
                description: req.body.description,
                language: req.body.language,
                price: req.body.price,
                avatar: avatarFd,

                publicationdate: req.body.publicationdate,
                bookavailability: req.body.bookavailability,
                category: req.body.category,
                orderId: req.body.orderId,
                stock: req.body.stock

            };

            Book.create(bookDetails).exec((err, book) => {
                if (err) {
                    console.log(err);
                }//throw (err);
                else {
                    console.log(book);
                    res.send(book);

                }
            });
            // });
        });

        // var bookDetails = {
        //     name: req.body.name,
        //     description: req.body.description,
        //     language: req.body.language,
        //     price: req.body.price,
        //     avatar: req.body.avatar,
        //     publicationdate: req.body.publicationdate,
        //     bookavailability: req.body.bookavailability,
        //     category: req.body.category,
        //     orderId: req.body.orderId,
        //     stock: req.body.stock

        // };

        // Book.create(bookDetails).exec((err, book) => {
        //     if (err) {
        //         console.log(err);
        //     }//throw (err);
        //     else {

        //         res.send(book);

        //     }
        // });
        //  });


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
      /*  Book.findOne({ bookavailability: true }).exec(function (err, book) {
            if (err) return res.negotiate(err);


            var SkipperDisk = require('skipper-disk');
            var fileAdapter = SkipperDisk(/* optional opts *///);

            // set the filename to the same file as the book uploaded
          //  res.set("Content-disposition", "attachment; filename='" + file.name + "'");
           /* fileAdapter.read(book.avatarFd)
                .on('error', function (err) {
                    return res.serverError(err);
                })
                .pipe(res);*/
               // res.send(book);

       // });*/
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

            if (book) {
                res.send(book);
                console.log(book);
            }

            if (!book) {
                console.log('book not found');
                res.send({ 'book': 'book not found' });
            }

        });
    }
};
