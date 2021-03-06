var jwt_decode = require("jwt-decode");

module.exports = function (req, res, next) {


    var token = req.param('token');
    var decoded = jwt_decode(token);

    User.findOne({ id: decoded.id }, function (err, user) {

        if (err) throw (err);
        if (user.permission === "author") {
            return next();

        }

        return res.send("You Must be an Author to upload a book");
    });

}; 
