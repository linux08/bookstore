/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

 '/': {
    view: 'homepage'
  }, 


  'POST    /admin/create':     { controller:'BookController',action:'create'},
  'POST    /admin/update':     { controller:'BookController',action:'update'},

  //'POST    /user/create':     { controller:'ImageController',action:'upload'},
  //'GET    /user/show':     { controller:'ImageController',action:'show'},
  
  'DELETE    /admin/remove':   { controller:'BookController',action:'delete'},
  
  'GET     /book/list':         { controller:'BookController',action:'list'},
  //'GET     /book/search/:name':     { controller:'BookController',action:'search'},
  'GET     /book/search':     { controller:'BookController',action:'search'},
  
  

  'POST       /user/create':    { controller:'UserController',action:'signup'},
  'POST      /user/update':     { controller:'UserController',action:'update'},
  'POST        /user/profile':   { controller:'UserController',action:'profile'},
  'GET        /user/list':      { controller:'UserController',action:'list'},

  'POST              /login':     { controller:'AuthController',action:'login'},
  'GET               /logout':    { controller:'AuthController',action:'logout'} ,

 
  'POST          /book/category/create':   { controller:'CategoryController',action:'create'},
 

 

  'POST          /book/create/order':   { controller:'OrderController',action:'create'}




  




  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
