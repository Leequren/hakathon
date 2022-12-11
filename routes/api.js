const router = require('express').Router()
const User = require('../models/User')
const Field = require('../models/Field')

router.get('/user', async (req, res) => {
    const info = await User.findOne({email: req.session.info.email})
    console.log(info)
    res.status(200).json({status: "success", user: info})

})

router.get('/:idField', async (req, res) => {
    const field = await Field.findOne({_id: req.params.idField})
    res.status(200).json({lat: field.latitude, lon: field.longitude})
})

module.exports = router