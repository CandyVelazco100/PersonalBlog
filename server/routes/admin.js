const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const bcrypt = require('bcrypt');  
const jwt = require('jsonwebtoken');

const adminLayout = '../views/layouts/admin'

router.get('/admin', async (req, res) => {
    try{
        const locals = {
            title: 'Admin',
            description: 'Simple blog with NodeJS, Express and MongoDB'
        }

        res.render('admin/index', { locals, layout: adminLayout });
    }catch(error){
        console.log(error);
    }
});

//Check Login
router.post('/admin', async (req, res) => {
    try{
        const { username, password } = req.body;
        if(req.body.username === 'admin' && req.body.password === 'password'){
            res.send('You are logged in');
        }else{
            res.send('Wrong username or password');
        }
    }catch(error){
        console.log(error);
    }
});

// Register
router.post('/register', async (req, res) => {
    try{
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const user = await User.create({ username, password:hashedPassword });
            res.status(201).json( {message: 'User Created', user});
        } catch (error) {
            if(error.code === 11000){
                res.status(409).json({message: 'Username already in use'});
            }
            res.status(500).json({message: 'Internal Server Error'});
        }
    }catch(error){
        console.log(error);
    }
});


module.exports = router;