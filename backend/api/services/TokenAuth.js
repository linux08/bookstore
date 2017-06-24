var jwt = require('jsonwebtoken'),
    tokensecret = 'linux';


module.exports.issue = function(payload) {
    return jwt.sign(
        payload,
        tokensecret, {
            expiresIn: 2000
        }
    );
};

module.exports.verify = function(token, next) {
    return jwt.verify(
        token,
        tokensecret, {},
        (err, decodedtoken)=> {
            if (err) throw (err);

            return next(null, decodedtoken)
        }
    );

};