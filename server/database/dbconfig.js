let Sequelize = require('sequelize'),
    fs        = require('fs'),
    path      = require('path'),
    seed      = require("./seeds"),
    modelsDir = "../models",
    db        = {},
    sequelize;

try {
    if(process.env.ENV=="release") {
        sequelize = new Sequelize(process.env.DATABASE_URL, {
            dialect:  'postgres',
            protocol: 'postgres',
            logging:   process.env.DATABASE_LOGGING ? console.log : false,
            dialectOptions: { ssl: true }
        })
    }
    else sequelize = new Sequelize(process.env.DATABASE_URL, { logging: process.env.DATABASE_LOGGING=="true" })
}
catch (err) {
    console.log("Error connecting to the database. Invalid connection string.", err)
}

if (sequelize) {
    console.log("Connected to the database successfully.")

    //Loading models
    fs.readdirSync(path.join(__dirname, modelsDir))
    .filter( file => (file.indexOf('.') !== 0) && (file !== 'index.js') )
    .forEach( file => {
        console.log(' - Loading model ' + file.replace(".js", ""))
        let model = sequelize.import(path.join(modelsDir, file))
        db[model.name] = model
    })

    //Creating relationships
    Object.keys(db).forEach( modelName => {
        if (db[modelName].options.hasOwnProperty('associate')) {
            db[modelName].options.associate(db)
        }
    })

    //Clearing db & seeding
    sequelize.sync({ force: process.env.MIGRATIONS_ALLOW_DATA_LOSS === 'true' || false }).then( 
        () => {
            console.log(`Database ${ process.env.MIGRATIONS_ALLOW_DATA_LOSS === 'true' ? "CLEARED and " : "" } synchronized`)
            if (process.env.MIGRATIONS_ALLOW_DATA_LOSS === 'true') seed(db)
        }
    ).catch( err => console.log("An error occurred: ", err) )
}

module.exports = db