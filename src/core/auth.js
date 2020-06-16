

class Auth {
    constructor(){
        this.isLoggedIn = localStorage.getItem('isLoggedIn') == 'true' || false;
    }
    login(response, cb){
        this.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('token', response.jwt);
        localStorage.setItem('user', JSON.stringify(response.user));
        return cb();
    }
    logout(cb){
        this.isLoggedIn = false;
        localStorage.setItem('isLoggedIn', false);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return cb();
    }
    checkLogin(){
        return this.isLoggedIn;
    }
}

export default new Auth()