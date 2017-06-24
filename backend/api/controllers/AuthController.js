var TokenAuth = require('../services/TokenAuth');

module.exports = {
    login: function (req, res) {
        

        console.log('i am here');
        var email = req.param('email');
        var password = req.param('password');


        if (!email || !password) {
            return res.send({message:'email and password required'});
        }
        User.findOne({ email: email }, function (err, user) {
            if (!user) {
                return res.send({message:'email or password required'});
            }
            User.comparePassword(password, user, function (err, valid) {
                if (err) {
                      res.send({message:err});
                }
                if (!valid) {
                    return res.send('wrong password');
                }
                else {
                    res.send(200, { user: user, token: TokenAuth.issue({ id: user.id }) });
                }
            });
        });

    },

    logout: function (req,res)  {
        req.session.destroy();
        res.json(200, true);

    }
};