const router = require('express').Router()

router.get('/', (req, res) => {
    res.redirect('/main')
})

router.get('/main', (req, res) => {
    res.render('indexPage')
})

module.exports = router