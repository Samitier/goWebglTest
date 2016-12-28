module.exports = db => {
    require("./projects-seed")(db)
        //.then( () => require("./articles-seed")(db) )
}