module.exports = {
    ok (res, data) {
        return res.json(data)
    },
    error(res, error) {
        res.status(error.status || 500).send({
            message: error.message,
            error:   (process.env.ENV === 'development') ? error : {}
        })
    },
    badRequest (res) {
        res.status(400).json({
            message: "Bad request. You did not enter the requred parameters for this request."
        })
    },
    unauthorized (res) {
        res.status(401).json({
            message: "Unauthorized. You failed to provide valid credentials."
        })
    },
    forbidden(res) {
        res.status(403).json({
            message: "Forbidden. This resource needs authentication."
        })
    },
    notFound(res) {
        res.status(404).json({
            message: "Resource not found"
        })
    }
}