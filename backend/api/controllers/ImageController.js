var jwt_decode = require("jwt-decode");


module.exports = {
    upload:(req,res) =>{
      
        req.file('avatar')
            .upload({
                 maxBytes: 10000000,
                 adapter: require('skipper-disk')
            }, function whenDone(err,uploadedFiles){
                    if(err){
                        
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
                            return res.negotiate(err)};
                       
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
     
      req.validate({
        id: 'string'
      });


     /* Book.findOne(req.param('id')).exec(function (err, book){
        if (err) return res.negotiate(err);

        if (!book) return res.notFound();
       


        // User has no avatar image uploaded.
        // (should have never have hit this endpoint and used the default image)
        if (!book.avatarFd) {
          return res.notFound();
        
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
 