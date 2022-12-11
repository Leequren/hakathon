const router = require('express').Router()
const Call = require('../models/Call')
router.get('/calls', async (req, res) => {
    if (req.session.info.role === 'Владелец') {
        const calls = await Call.find({})
        console.log(calls)
        // const user = {
        //     name: req.session.info.name,
        //     surname: req.session.info.surname,
        //     lastName: req.session.info.lastName
        // }
        // console.log(user)
        console.log(req.session.info.surname)
        res.render('infoAboutCalls', {
            user: {
                role: req.session.info.role,
                surname: req.session.info.surname,
                name: req.session.info.name,
                lastName: req.session.info.lastName
            },
            calls: calls
        })
    } else {
        const calls = await Call.find({emailWorker: req.session.info.email})
        console.log(calls)
        res.render('infoAboutCalls', {
            user: {
                role: req.session.info.role,
                surname: req.session.info.surname,
                name: req.session.info.name,
                lastName: req.session.info.lastName
            },
            calls: calls
        })
    }

})

router.get('/addCall', async (req, res) => {

    res.render('addCall')
})

router.post('/addCall', async (req, res) => {
    // console.log(req.body)
    Call.insertMany({
        emailOwner: req.session.info.email,
        emailWorker: req.body.emailWorker,
        date: req.body.date,
        description: req.body.description
    })
    res.status(200).send('CallInserted')
})

module.exports = router