const router = require('express').Router()
const {hashingPassword} = require('../config/HashingAndCheckingPasswords')
const User = require('../models/User')
router.get('/', (req, res) => {
    res.render('register')
})

router.post('/', async (req, res) => {
    // console.log(req.body)
    const {data} = req.body
    // console.log(data)
    // res.sendStatus(200)
    const checkUserInDB = await User.findOne({email: data.email})
    const hashedPassword = hashingPassword(data.password)
    if (!checkUserInDB) {
        await User.insertMany({
            name: data.firstName,
            surname: data.secondName,
            lastName: data.lastName,
            phone: data.phone,
            email: data.email,
            password: hashedPassword,
            role: data.type
        })

        req.session.isAuth = true
        req.session.info = {
            email: data.email,
            name: data.firstName,
            surname: data.secondName,
            role: data.type
        }
        req.session.save(err => {
            if (err) {
                throw err
            }
        })
        console.log(req.session)
        res.status(200).json({message: 'RegisterWasSuccess'})
        // console.log(1)
    } else {
        res.status(200).json({message: 'UserInDBAlready'})
        // console.log(2)
    }
    // console.log(Boolean(checkUserInDB), checkUserInDB)
})

module.exports = router