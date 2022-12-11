module.exports = function (req, res, next) {
    if (!req.session.isAuth) {
        return res.status(403).json({message: "пользователь не авторизован"})
    }
    next()
}