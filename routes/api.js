const router = require('express').Router()
const User = require('../models/User')
router.get('/user', async (req, res) => {
    const info = await User.findOne({email: req.session.info.email})
    console.log(info)
    res.status(200).json({status: "success", user: info})

})

module.exports = router