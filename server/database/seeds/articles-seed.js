module.exports = db => {
    return Promise.all(
        new Promise((resolve, reject) => {
             db.article.findOrCreate({
                where:    { slug: 'lorem-ipsum' },
                defaults: {
                    title: "Lorem ipsum",
                    summary: "Lorem ipsum",
                    body: "Lorem ipsum",
                    projectCode: "FA342B"
                }
            })
            .spread((obj, created) => {
                if (created) console.log(" * Category [" + obj.dataValues.name + "] seeded")
                resolve()
            })
        })
    ).then( () => console.log("--Articles seeded successfully--"))
}