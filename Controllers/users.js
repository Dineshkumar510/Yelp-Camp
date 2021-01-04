const User = require('../models/user');

module.exports.renderRegister = (req,res) => {
    return res.render('users/register')
}


module.exports.register = async(req,res,next)=> {
    try{
        const {email, username, password, confirmpassword } = req.body;
        const user = new User({ username, email, confirmpassword });
        const registerUser = await User.register(user,password);
        req.login(registerUser, err => {
          if(err) return next(err);
          req.flash('success', 'Welcome to Yelp Camp!');
          return res.redirect('/campgrounds');
        });
    } catch (e) {
        req.flash('error', e.message);
        return res.redirect('/register');
    }
}

module.exports.renderLogin = (req,res) => {
    return res.render('users/login');
}

module.exports.login = (req,res) => {     
    req.flash('success', 'Welcome back!');
    const redirectUrl = req.session.returnTo || '/campgrounds';
    delete req.session.returnTo;
    return res.redirect(redirectUrl);
}

module.exports.logout = (req,res) => {
    req.logout();
    req.flash('success', 'Good-Bye!');
    res.redirect('/campgrounds');
}