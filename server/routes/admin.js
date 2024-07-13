const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/admin', async (req, res) => {
    try{
        const locals = {
            title: 'Admin',
            description: 'Simple blog with NodeJS, Express and MongoDB'
        }

        res.render('admin/index', { locals });
    }catch(error){
        console.log(error);
    }
});


module.exports = router;