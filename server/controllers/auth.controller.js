let jwt        = require('jsonwebtoken'),
    httpResult = require("../utils/httpResult")

module.exports = {

    login(req, res) {
        if (!req.body.password) return httpResult.badRequest(res)

        if (process.env.BACKEND_PWD === req.body.password) {
            res.json({
                success: true,
                message: 'Authentication completed.',
                token:   generateToken()
            })
        }
        else return httpResult.unauthorized(res)
    },
    
    authenticate(req, res, next) {
        let token = req.body.token || req.query.wglAccessToken || req.headers['wgl-access-token']
        if (token) {
            jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
                if (!err && decoded) next()
                else httpResult.unauthorized(res)
            })
        }
        else httpResult.forbidden(res)
    }
}

let generateToken = function () {
    let expiresIn = process.env.TOKENEXPIRATION || "14d"
    return jwt.sign({}, process.env.APP_SECRET, { expiresIn })
}