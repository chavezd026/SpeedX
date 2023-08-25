//server - mongodb integration

// //1 import mongoose
const {default:mongoose, Schema}=require ("mongoose");
// const mongoose=require('mongoose')

//2 state connection string via mongoose

mongoose.connect('mongodb://localhost:27017/UserData',{
    useNewUrlParser:true //avoid unwanted warnings
})

const User=mongoose.model('User',{
    email:String,
    mobileno:String,
    password:String
})

const Service=mongoose.model('Service',{

    id:Number,
    title:String,
    description:String,
    time:String,
    category:String,
    cost:Number,
    image:String
})

const Booking=mongoose.model('Booking',{
    title:String,
    ownername:String,
    mobilenumber:String,
    vehiclename:String,
    modelname:String,
    regnumber:String,
    address:String
})

module.exports={
    User,
    Service,
    Booking
}