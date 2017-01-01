let db         = require("../database/dbconfig"),
    httpResult = require("../utils/httpResult")

module.exports = {
    getAll(req, res) {
        db.article.findAll().then(
            data => httpResult.ok(res, data), 
            error => httpResult.error(res, error)
        )
    },
    getSingle (req, res) {
        db.article.findById(req.params.id).then(
            data => httpResult.ok(res, data), 
            error => httpResult.error(res, error)
        )
    }
}