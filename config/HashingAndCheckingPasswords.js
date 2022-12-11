const bcrypt = require('bcrypt')
module.exports = {
    hashingPassword: function (password) {
        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds)
        return bcrypt.hashSync(password, salt)
    },
    comparePasswords: function (password, hashPassword) {
        return bcrypt.compareSync(password, hashPassword)
    }
}