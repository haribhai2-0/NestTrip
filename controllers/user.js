const User = require("../models/user.js");

module.exports.renderSignupform=(req, res) => {
  res.render("users/signup.ejs");
}

module.exports.signup=async (req, res,next) => {
    try{
       const { username, email, password } = req.body;

      const newUser = new User({ email, username });
      const registeredUser=await User.register(newUser, password);
      req.login(registeredUser,(err)=>{
        if(err){
           return next(err)
        }
         req.flash("success", "Welcome to Wanderlust");
     return res.redirect("/listings");

      })
    
    } catch(e){
      req.flash("error",e.message)
       return res.redirect("/signup")
    }
}
module.exports.renderLoginform=(req, res) => {
  res.render("users/login.ejs");
}

module.exports.login=(req, res,next) => {
    req.flash("success", "Welcome back!");
     return res.redirect(res.locals.redirectUrl ||"/listings" );
  }


  module.exports.logout=(req,res,next)=>{
  req.logout((err)=>{
    if(err){
      next(err);
    }
    req.flash("success","you are logged out! ")
     return res.redirect("/listings")


  })

}
