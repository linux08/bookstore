var bcrypt = require('bcrypt');
module.exports = {
    attributes: {


        firstname: {
            type: 'string',
        },
        lastname: {
            type: 'string',
        },

        email: {
            type: 'email',
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            required: true
        },
        phone: {
            type: 'integer'
        },
        address: {
            type: 'string'
        },
        order: {
            collection: 'Order',
            via: 'user'
        },
        permission: {
            type: 'string',
            enum: ['admin', 'customer', 'author'],
            defaultsTo: 'customer'
        },
        toJSON: function () {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },

    beforeCreate: function (values, next) {
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(values.password, salt, function (err, hash) {
                if (err) { return next(err); }

                values.password = hash;
                next();

            });
        });
    },
    comparePassword: function (password, user, cb) {
        bcrypt.compare(password, user.password, function (err, match) {
            if (err) cb(err);
            if (match) {
                cb(null, true);
            }
            else {
                cb(err);
            }
        });


    }
};