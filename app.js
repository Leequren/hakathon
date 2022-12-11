const express = require('express')
const session = require('express-session')
// const MongoStore = require('connect-mongodb-session')(session)
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const {db} = require('./config/dbINf')
const checkAuth = require('./middleware/variables')
const sessionExist = require('./middleware/sessionExist')

async function startMongo() {
    await mongoose.connect(db)
}

// const store = new MongoStore({
//     collection: 'sessions',
//     uri: db
// })

startMongo().catch(console.log);


const app = express()

app.use(cookieParser())

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
    // store: store
}))

app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');

app.use(express.json())

app.use('/register', sessionExist, require('./routes/register'))
app.use('/login', sessionExist, require('./routes/login'))
app.use('/personalArea', checkAuth, require('./routes/personalArea'))
app.use('/logout', require('./routes/logout'))
app.use('/api', checkAuth, require('./routes/api'))
app.use('/', require('./routes/indexPage'))
app.use('/personalArea', require('./routes/allFields'))
app.use('/personalArea', require('./routes/infoAboutCalls'))
const PORT = process.env.PORT || 4500

app.listen(PORT, () => console.log(`Сервер на работе :D ${PORT}`))