let Sequelize = require('sequelize'),
    fs        = require('fs'),
    path      = require('path'),
    seed      = require("./seeds"),
    modelsDir = "../models",
    db        = {},
    sequelize;

try {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect:  'postgres',
        protocol: 'postgres',
        logging:   process.env.DATABASE_LOGGING ? (msg) => console.log(`[DBlog] -> ${msg}\n`) : false,
        dialectOptions: { ssl: process.env.DATABASE_SSL || true }
    })
}
catch (err) {
    console.log("[DB] -> Error connecting to the database. Invalid connection string.", err)
}

if (sequelize) {
    console.log("[DB] -> Connected to the database successfully.")

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
            console.log(`[DB] -> Database ${ process.env.MIGRATIONS_ALLOW_DATA_LOSS === 'true' ? "CLEARED and " : "" } synchronized`)
            if (process.env.MIGRATIONS_ALLOW_DATA_LOSS === 'true') seed(db)
        }
    ).catch( err => console.log("[DB] -> An error occurred: ", err) )
}

module.exports = db