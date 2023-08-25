//import express
const express = require ("express")

const dataService = require('./services/dataService')

//import jsonwebtoken

// const jwt = require('jsonwebtoken')

//import cors

const cors = require('cors')

//create an application
const app = express();

app.use(express.json())

//give command to share data 

app.use(cors({
    origin:['http://localhost:4200']
}))

//setup port number
app.listen(3000,()=>{
    console.log('listening to port 3000');
})

//Register request

app.post('/register',(req,res)=>{
    dataService.register(req.body.email,req.body.mobileno,req.body.password).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//login request
app.post('/login',(req,res)=>{
    dataService.login(req.body.email,req.body.password).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//API calls to get services
app.get('/services',(req,res)=>{
    dataService.getServices().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

app.post('/booking',(req,res)=>{
    dataService.postBooking(req.body.title,req.body.ownername,req.body.mobileno,req.body.vehiclename,req.body.modelname,req.body.regnumber,req.body.address).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})