var jwt_decode = require("jwt-decode");


module.exports = {

  /*  upload :(req,res) =>{
        req.file('nameOfRequestFieldHoldingTheFile').upload((err, uploadedFiles) => {
            if (err)  return err;
            let imageName = uploadedFiles[0].fileName;
            imageName += req.user.username //append username to the url to be stored in the DB
        //Image.create({url: imageName, ...otherParameters})
    });
    }
    // uploadedFiles contain all files uploaded
    //let imageName = uploadedFiles[0].fileName;
    //imageName += req.user.username //append username to the url to be stored in the DB
    //Image.create({url: imageName, ...otherParameters})
    //});   */
}

    /*upload: (req, res) => {
        const image = req.file('avatar')
        image.upload({
            adapter: require('skipper-gridfs'),
            uri: 'mongodb://127.0.0.1/27017/sailsimages'
        }, function (err, filesUploaded) {
            if (err) return res.negotiate(err);
            console.log('images uploadedsuccesfully');
            return res.ok();
           
        });
    },
    show: (req, res) => {

    } */
