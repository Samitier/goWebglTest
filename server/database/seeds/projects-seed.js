module.exports = db => {
    return Promise.all([
        new Promise((resolve, reject) => {
             db.project.findOrCreate({
                where:    { slug: 'cubic-portfolio' },
                defaults: {
                    title: "A Cubic Portfolio",
                    description: 
                        `This site was one of my first experiments with webGl. 
                        It's a site that holds my personal portfolio and it's made to resemble a cube, 
                        where each face has some information about myself. 
                        To navigate the cube, you can rotate it to change the showing face and the background, 
                        creating a very interesting experience. 
                        Maybe not the most intuitive one, but I decided to keep it that way to make it more entretaining.`,
                    repositoryLink: "https://github.com/Samitier/samitier.github.io",
                    resultLink: "http://samitier.me"
                }
            }).spread((obj, created) => {
                if (created) console.log("[seed] -> Project [" + obj.dataValues.title + "] seeded")
                resolve()
            })
        }),
        new Promise((resolve, reject) => {
             db.project.findOrCreate({
                where:    { slug: 'angular2-netcore-message-board' },
                defaults: {
                    title: "A Message Board",
                    description: 
                        `This project was an experiment to test good practices in .NET Core and Angular2. 
                        It ended up being a short but very entretaining experience, and I think the results were very cool too.
                        I learnt a lot of advanced tricks in Angular2 as well as my first steps in .NET Core.
                        The idea was to make a public post-it wall, but it ended up being the guestbook for this blog.
                        Check it out (and leave me a nice message now that you are at it).`,
                    repositoryLink: "https://github.com/Samitier/netCoreAngular2MessageBoard",
                    resultLink: "http://samitier.azurewebsites.net/"
                }
            }).spread((obj, created) => {
                if (created) console.log("[seed] -> Project [" + obj.dataValues.title + "] seeded")
                resolve()
            })
        }),
        new Promise((resolve, reject) => {
             db.project.findOrCreate({
                where:    { slug: 'isometric-map' },
                defaults: {
                    title: "An Isometric Map Creator",
                    description: 
                        `.`,
                    repositoryLink: "https://github.com/Samitier/webgl-rocks/tree/master/client/pages/isometric-map",
                    resultLink: ""
                }
            }).spread((obj, created) => {
                if (created) console.log("[seed] -> Project [" + obj.dataValues.title + "] seeded")
                resolve()
            })
        }),
        new Promise((resolve, reject) => {
             db.project.findOrCreate({
                where:    { slug: 'shader-sketchbook' },
                defaults: {
                    title: "Shader Sketchbook",
                    description: 
                        `I like to experiment on shaders. I am very far from being an expert, but I like to create visually 
                        appealing shaders and shader combinations. I like being able to control how something is
                        rendered, and take advantage of it to set my imagination free. Here, only my imagination 
                        (and my limited knowledge of maths) is the limit!`,
                    repositoryLink: "https://github.com/Samitier/webgl-rocks/tree/master/client/pages/isometric-map",
                    resultLink: ""
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