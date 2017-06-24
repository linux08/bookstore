import decode from 'jwt-decode';


class Auth{

    /*
        authenticate a user .save a token string in local storage
    */
    static authenticateUser(token){
        localStorage.setItem('token',token);
        let toks = this.decodeToken(token);
        return toks;
    }
    /***
     * check if a user is authenticated-
     * check if a token is saved in local storage
     */
    static isUserAuthenticated(){
        return localStorage.getItem('token')!==null;
    }
    /**
     * deauthenticate a user.Remove a token in local storage
     */
    static deauthenticateUser(){
        localStorage.removeItem('token');
    }

    /**
     * get a token value
     * @return a string
     */
    static getToken(){
        return localStorage.getItem('token');
    }
    /**
     *  return a decoded token value
     */
    static decodeToken(token){
      
       const decodedToken = decode(token);
       console.log(decodedToken);
       return decodedToken;
    }
}
export default Auth;