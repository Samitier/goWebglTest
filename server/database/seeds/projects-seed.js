module.exports = db => {
    return Promise.all([
        new Promise((resolve, reject) => {
             db.project.findOrCreate({
                where:    { code: 'FA342B' },
                defaults: {
                    title: "Lorem ipsum",
                    description: "Lorem ipsum",
                    link: "www.google.com"
                }
            }).spread((obj, created) => {
                if (created) console.log("[seed] -> Project [" + obj.dataValues.title + "] seeded")
                resolve()
            })
        })
    ])
    .then( values => console.log("[seed] -> Projects seeded successfully") )
    .catch( () => console.log("[seed] -> Error seeding projects") )
}