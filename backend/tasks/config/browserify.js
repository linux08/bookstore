module.exports = function(grunt) {

  grunt.config.set('browserify', {
    //dev: {
      options:      {
        transform:  [ require('grunt-react').browserify ],
        extension: 'jsx'
      },
      app:          {
        src:        'assets/jsx/app.jsx',
        dest:       '.tmp/public/js/app.js'
      }
    //}
  });

  grunt.loadNpmTasks('grunt-browserify');
};