module.exports = db => {
    return Promise.all([
        new Promise((resolve, reject) => {
             db.article.findOrCreate({
                where:    { slug: 'lorem-ipsum' },
                defaults: {
                    title: "Lorem ipsum",
                    summary: "Lorem ipsum",
                    body: "Lorem ipsum",
                    projectCode: "FA342B"
                }
            }).spread((obj, created) => {
                if (created) console.log("[seed] -> Article [" + obj.dataValues.title + "] seeded")
                resolve()
            })
        })
    ])
    .then( () => console.log("[seed] -> Articles seeded successfully"))
    .catch( () => console.log("[seed] -> Error seeding articles"))
}