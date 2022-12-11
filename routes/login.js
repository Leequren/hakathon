const router = require('express').Router()
const {comparePasswords} = require('../config/HashingAndCheckingPasswords')
const check = require('../middleware/variables')
const User = require('../models/User')

router.get('/', (req, res) => {
    res.render('login')
})

router.post('/', async (req, res) => {
    console.log(req.body)
    const {data} = req.body
    const curUser = await User.findOne({email: data.email})
    const comparison = comparePasswords(data.password, curUser.password)
    if (comparison) {
        req.session.isAuth = true
        req.session.info = {
            email: curUser.email,
            name: curUser.name,
            surname: curUser.surname,
            lastName: curUser.lastName,
            role: curUser.role
        }
        req.session.save(err => {
            if (err) {
                throw err
            }
        })
        console.log(req.session)
        res.send("AccessIsOpen")
    } else {
        res.send('PasswordsNotCompare')
    }

})

module.exports = router