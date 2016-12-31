let db         = require("../database/dbconfig"),
    httpResult = require("../utils/httpResult")

module.exports = {
    getAll(req, res) {
        db.project.findAll().then(
            data => httpResult.ok(res, data), 
            error => httpResult.error(res, error)
        )
    },
    getSingle (req, res) {
        db.project.findById(req.params.id).then(
            data => httpResult.ok(res, data), 
            error => httpResult.error(res, error)
        )
    },
    put(req, res) {
        httpResult.ok(res, "PUT")
    },
    post(req, res) {
        httpResult.ok(res, "POST")
    },
    delete(req, res) {
        httpResult.ok(res, "DELETE")
    }
}