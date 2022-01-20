const express = require('express')
const router = express.Router()
const Appointments = require('../data/Appointments')

// /appointments
router.get('/', (req,res)=>{
    res.json(Appointments)
})

// appointments/{doctorId}

router.get('/:id', (req,res,next)=>{
    let data =  Appointments.filter( app => app.DoctorId === req.params.id)
    res.json(data)
})

//appointments/:id/:date
router.get('/:id/:date', (req,res,next)=>{
    let data =  Appointments.filter( app => app.DoctorId === req.params.id).filter(app => app.date === req.params.date)
    res.json(data)
})
// appointments/delete/:id
router.delete("/delete/:Appid"), (req, res, next) => {
    let data = Appointments.filter(app => app.AppId != req.params.Appid)
    console.log(data)
    res.json(data)
}

module.exports = router