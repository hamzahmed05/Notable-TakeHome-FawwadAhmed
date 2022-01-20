const express = require('express')
const router = express.Router()
const AllDoctors = require('../data/Doctors')

//  /doctors
router.get('/', (req,res)=>{
    res.json(AllDoctors)
})


module.exports = router