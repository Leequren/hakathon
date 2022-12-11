const User = require("../models/User");
const router = require('express').Router()

router.get('/', async (req, res) => {
    console.log(req.session)
    const info = await User.findOne({email: req.session.info.email})
    res.render('pageOwner', {user: info})
})

module.exports = router