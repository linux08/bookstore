
var TokenAuth = require('../services/TokenAuth');

module.exports = {

    signup: (req, res) => {
        
        var UserDetails = {
            firstname: req.body.firstName,
            lastname: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            address: req.body.address,
            order: req.body.order,
            permission: req.body.permission
        };
        
        User.create(UserDetails).exec((err, user) => {
            if (err) {
                console.log('err');
                res.send({message:err});
                console.log(err);
            }
            if (user) {
                console.log(user);
                res.send(200, { user: user, token: TokenAuth.issue({ id: user.id }) });
            }

        });
    },

    update: (req, res) => {
        var UserDetails = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            address: req.body.address,
            permission: req.body.permission,
        };
        User.update({ id: req.body.id }, UserDetails).exec((err, user) => {
            if (err) throw (err);

            return res.send('updated succesfully');

        });


    },

    profile: (req, res) => {
        
        User.find({email: req.body.email }).exec((err, user) => {
            if (err) throw (err);
            if (user) {
               res.send(user);
            }

            else {
                res.send("user found");
            }

        });

    },

    list: function (req, res) {
        User.find({}).exec((err, book) => {
            if (err) throw (err)

            if (book) {
                res.send(book);
            }


        });

    }
};
