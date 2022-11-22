const jwt = require('jsonwebtoken')

const authenticateAdmin = (req, res, next) => {
    const user = req.user;
    if (user.role !== 'admin') next({
        statusCode: 403,
        message: "You aren\'t admin"
    })
    next()
}

module.exports = authenticateAdmin