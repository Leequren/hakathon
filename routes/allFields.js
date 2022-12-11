const router = require('express').Router()
const Field = require('../models/Field')
const User = require('../models/User')
router.get('/fields', async (req, res) => {
    console.log(123)
    const fields = await Field.find({emailOwner: req.session.info.email})
    const user = await User.findOne({email: req.session.info.email})
    console.log(fields)
    res.render('allFields', {fields: fields, user: user})
})
router.get('/addField', (req, res) => {
    res.render('addNewField')
})

router.post('/addField', async (req, res) => {
    // console.log(req.body)
    // res.send(200)
    await Field.insertMany({
        emailOwner: req.session.info.email,
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        square: req.body.square,
        countCars: req.body.countCars,
        countFert: req.body.countFert
    })
    res.status(200).send('DataSaved')
})

router.get('/field/:idField', async (req, res) => {
    console.log(req.params.idField)
    // res.send(200)
    const info = await Field.findOne({_id: req.params.idField})
    res.render('infoAboutField', {field: info})
})

module.exports = router