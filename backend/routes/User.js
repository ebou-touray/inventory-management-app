const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/User');
const Item = require('../models/Item');

const signToken = userID => {
    return JWT.sign({
        iss : "Jalato",
        sub : userID
    }, "Jalato", {expiresIn : "1h"});
}

userRouter.post('/register', (req, res) => {
    const { username, password, role } = req.body;
    User.findOne({username}, (err, user) => {
        if(err)
            res.status(500).json({ message: {msgBody: "Error has occured", msgError: true}});
        if(user)
            res.status(400).json({ message: {msgBody: "Username already taken", msgError: true}})
        else{
            const newUser = new User({username, password, role});
            newUser.save(err => {
                if(err)
                res.status(500).json({ message: {msgBody: "Error has occured", msgError: true}});
                else
                 res.status(201).json({ message: {msgBody: "Account successfully created!", msgError: false}});
            });
        }
    });
});

userRouter.post('/login', passport.authenticate('local', {session : false}), (req, res) => {
      if(req.isAuthenticated()) {
          const { _id, username, role } = req.user;
          const token = signToken(_id);
          res.cookie('access_token', token, {httpOnly: true, sameSite:true});
          res.status(200).json({isAuthenticated : true, user : {username, role} })
      }
});


userRouter.get('/logout', passport.authenticate('jwt', {session : false}), (req, res) => {
    res.clearCookie('access_token');
    res.json({user:{username : "", role :""}, success : true});
      
});

userRouter.post('/item', passport.authenticate('jwt', {session : false}), (req, res) => {
    const item = new Item(req.body);
    item.save(err => {
        if(err)
             res.status(500).json({ message: {msgBody: "Error has occured", msgError: true}});
        else {
            req.user.items.push(item);
            req.user.save(err =>{
               if(err)
                res.status(500).json({ message: {msgBody: "Error has occured", msgError: true}});
                else
                res.status(200).json({ message: {msgBody: "Successfully added an item", msgError : false}});
            });
        }
    })
});

userRouter.get('/items', passport.authenticate('jwt', {session : false}), (req, res) => {
        User.findById({_id : req.user._id}).populate('items').exec((err, document) => {
            if(err)
                res.status(500).json({ message: {msgBody: "Error has occured", msgError: true}});
            else {
                res.status(200).json({items : document.items, authenticated : true});
            }
        });
});


userRouter.get('/admin', passport.authenticate('jwt', {session : false}), (req, res) => {
      if(req.user.role === "admin") {
          res.status(200).json({message : {msgBody : 'You are an admin', msgError : false}});
      }
      else 
        res.status(403).json({message: {msgBody : "You're  not an admin, please go away", msgError : true }});
});
module.exports = userRouter;