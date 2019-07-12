const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cors = require("cors")
const Users = express.Router()


const user = require("../models/user")
Users.use(cors())

process.env.SECRET_KEY = 'secret' 
Users.post('/register', (req, res) => {
    const today = new Date()
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created: today,

    }

    user.findOne({
        email: req.body.email,
    })
    .then(user => {
        if(!user) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password= hash   
                user.create(userData)
                .then(user => {
                    res.json({status: user.email + "wash created "})
                    
               })
                .catch(err =>{
                    err.send('error: ' + err.message)
                }) 
           })

      } else {
            res.json({error: "user already exist "})
    }
  }).catch(err =>{
      res.send("error: "  + err )
  })
})

Users.post('/login', (req, res) => {
    user.findOne({
        email : req.body.email
    })
    .then(user => {
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                const payload = {
                    _id : user._id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email
                }
                var token = jwt.sign(payload, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.send(token)
            } else {
                res.json({error: + "User does not exist "})
            }
            
      }else {
            res.json({error: + "User does not exist "})
        } 
    })
    .catch(err => {
        res.send('error : ' + err)
    })
})


module.exports= Users