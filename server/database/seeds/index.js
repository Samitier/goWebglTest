module.exports = db => {
    require("./projects-seed")(db)
        .then( () => require("./articles-seed")(db) )
        .then( () => console.log("[seed] -> Seed finished successfully"))
        .catch( () => console.log("[seed] -> An error has occurred while seeding"))
}