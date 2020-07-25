var express       = require('express'),
    app           = express(),
    mongoose      = require('mongoose'),
    methodOverride= require('method-override'),
    bodyParser    = require('body-parser'),
    flash         = require('connect-flash'),
    expressSession= require('express-session')


//========================
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.use(flash());
//=========================
app.use(require('express-session')({
    secret:"Anything you can use here.",
    resave:false,
    saveUninitialized:false
    }));

//=========modals===========
var User=require('./models/user');
app.use(bodyParser.urlencoded({extended:false}));
app.use(function(req,res,next)
{
res.locals.currentuser=req.user;
res.locals.error=req.flash("error");
res.locals.success=req.flash("success");
next();
});
//=======databaseconnect=====
mongoose.connect("mongodb://localhost/dbname",{useNewUrlParser:true,useUnifiedTopology:true });

//=====ROUTES================

app.get("/",function(req,res){
    res.render("landing");
})

app.get("/new",function(req,res){
res.render("index")
});

app.post("/new",function(req,res){

    var newdata={
        name:req.body.name,
        email:req.body.email,
        mobileno:req.body.mobileno,
        registerid:req.body.regid,
        registrationtype:req.body.regtype,
        nooftickets:req.body.tickets
    }

    User.create(newdata,function(err,newuser){
        if(err)
        console.log("Error while filling data");
        else{
            console.log(newuser);
            var id=newuser._id;
          var regtid=  JSON.stringify(id).substring(0,12);
            req.flash("success"," REGISTRATION ID = " + regtid ) ;
            res.redirect("/")
        }
    })
    
});
//========Server=================
app.listen(3000,function(){
console.log("server has started "+Date().substring(0,10));
});