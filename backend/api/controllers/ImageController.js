var jwt_decode = require("jwt-decode");


module.exports = {
    upload:(req,res) =>{
        console.log('image controller working');
        req.file('avatar')
            .upload({
                 maxBytes: 10000000,
                 adapter: require('skipper-disk')
            }, function whenDone(err,uploadedFiles){
                    if(err){
                         console.log(err);
                         return res.negotiate(err);
                    }
                    if(uploadedFiles.length ===0){
                        return res.badRequest('No file was uploaded');
                    }
                    Book.update(req.session.me,{

                        // Generate a unique URL where the avatar can be downloaded.
                        avatarUrl :require('util').format('%s/user/avatar/%s',sails.config.appUrl, req.session.me),

                        //  Grab the first file and use it's 'fd'(file descriptor)
                        avatarFd :uploadedFiles[0].fd
                     
                    }).exec(function(err){

                        if (err) {
                            console.log('how far');return res.negotiate(err)};
                        console.log(uploadedFiles);
                        return res.ok(uploadedFiles);
                    });
                });
    },
/**
 * Download avatar of the user with the specified id
 *
 * (GET /book/avatar/:id)
 */
    avatar: function (req, res){
      console.log('heeh');
      req.validate({
        id: 'string'
      });
      console.log(req.id);

     /* Book.findOne(req.param('id')).exec(function (err, book){
        if (err) return res.negotiate(err);
        console.log(err);
        if (!book) return res.notFound();
        console.log('book has no image');


        // User has no avatar image uploaded.
        // (should have never have hit this endpoint and used the default image)
        if (!book.avatarFd) {
          return res.notFound();
          console.log('book has no image');
        }

        var SkipperDisk = require('skipper-disk');
        var fileAdapter = SkipperDisk(/* optional opts *///);

        // set the filename to the same file as the user uploaded
        res.set("Content-disposition", "attachment; filename='" + file.name + "'");

        // Stream the file down
        /*
        fileAdapter.read(user.avatarFd)
        .on('error', function (err){
          return res.serverError(err);
        })
        .pipe(res);
      });  */
    }
}
 