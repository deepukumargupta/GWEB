const {User} = require('../models/user')
const express = require('express');
const router = express.Router();

// Initialize route
router.get(`/`, async(req,res) => {
    const userList = await User.find();
    
    if(!userList) {
        res.status(500).json({success: false})
    }
    res.send(userList);
})

// export router module
module.exports = router;