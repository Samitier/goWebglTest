require('fs')
.readdirSync(__dirname + '/')
.forEach( file => {
    if (file !== 'index.js') {
        let name = file.replace('.controller.js', '')
        exports[name] = require('./' + file)
    }
})