var mongoose=require('mongoose')

var userSchema=new mongoose.Schema({
    name:String,
    email:String,
    mobileno:Number,
    registerid:Buffer,
    registrationtype:String,
    nooftickets:Number,
    created:{
        type:Date,
        default:Date.now
    }
  
});

module.exports=mongoose.model("User",userSchema);