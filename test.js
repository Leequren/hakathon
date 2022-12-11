const mongoose = require('mongoose')
const {db} = require('./config/dbInf')
const User = require('./models/User')
const Field = require('./models/Field')
const Call = require('./models/Call')

async function main() {
    await mongoose.connect(db);
    console.log(await User.find({}))

    // console.log(DB.)
}

main()


// const bcrypt = require('bcrypt')
// const saltRounds = 10
// const plainPassword = 'qwe'
// const otherPlainPassword = 'rty'
//
// const salt = bcrypt.genSaltSync(saltRounds)
// console.log(salt)
// const hash = bcrypt.hashSync(plainPassword, salt)
// console.log(hash)
//
// console.log(bcrypt.compareSync(plainPassword, hash))
// console.log(bcrypt.compareSync(otherPlainPassword, hash))

