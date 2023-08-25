//import jsonwebtoken

// const jwt = require('jsonwebtoken')

//import db.js



const db=require('./db')

const register=(email,mobileno,password)=>{
    return db.User.findOne({email}).then( //asynchronous call
      user=>{
        if(user){
          return {
            status:false,
            statusCode:404,
            message:"User already exist"
          }
        }
        else{
          const newUser=new db.User({
            email:email,
            mobileno:mobileno,
            password:password
          })
          newUser.save()  //to save new data to mongodb
          return {
            status:true,
            statusCode:200,
            message:"Register successful"
          }
        }
      }
    )
}

const login=(email,password)=>{
    return db.User.findOne({email,password}).then(
      user=>{
        if(user){
          return {
          status:true,
          statusCode:200,
          message:"Login successful",
          }
        }
        else{
          return {
              status:false,
              statusCode:404,
              message:"User not found"
            }
        }
      }
    )
}


//get all services from db

const getServices=()=>{
  return db.Service.find().then(
      (result)=>{
          if(result){
              return{
                  status:true,
                  statusCode:200,
                  services:result
              }
          }
          else{
              return{
                  status:false,
                  statusCode:404,
                  message:"Service not found"
              }
          }
      }
  )
}

const postBooking=(ownername,mobileno,vehiclename,modelname,regnumber,address)=>{
    return db.User.find({mobileno}).then(
      user=>{
        if(user){
          const newBooking=new db.Booking({
            ownername:ownername,
            mobilenumber:mobileno,
            vehiclename:vehiclename,
            modelname:modelname,
            regnumber:regnumber,
            address:address
          })
          newBooking.save();
          return{
            status:true,
            statusCode:200,
            message:'successfully booked your appointment'
          }
        }
        else{
          return {
            status:false,
            statusCode:404,
            message:"invalid details"
          }
        }
        
      }
    )
}

module.exports={
    register,
    login,
    getServices,
    postBooking
}