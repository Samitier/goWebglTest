module.exports = db => {
    return Promise.all(
        new Promise((resolve, reject) => {
             db.project.findOrCreate({
                where:    { code: 'FA342B' },
                defaults: {
                    title: "Lorem ipsum",
                    description: "Lorem ipsum",
                    link: "www.google.com"
                }
            })
            .spread((obj, created) => {
                if (created) console.log(" * Category [" + obj.dataValues.name + "] seeded")
                resolve()
            })
        })
    ).then( () => console.log("-- Projects seeded successfully --"))
}