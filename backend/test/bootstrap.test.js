var sails = require('sails');
//var barrels = require ('barrels');

before(function(done) {

  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(5000);

  sails.lift({
    log:{
      level:'error'
    },
    
    adapters:{
      mongo:{
        module:'sails-mongo',
        host:'localhost',
        database :'test_database',
        user:'',
        password:''

      },
    }
  }, function(err,sails) {
    if (err) return done(err);
    // here you can load fixtures, etc.
    done(err, sails);
  });
});

after(function(done) {
  // here you can clear fixtures, etc.
  sails.lower(done);
});