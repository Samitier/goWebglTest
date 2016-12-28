require('fs')
.readdirSync(__dirname + '/')
.forEach( file => {
    if (file !== 'index.js') {
        let name = file.replace('.js', '')
        exports[name] = require('./' + file)
    }
})