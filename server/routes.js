let pjson   = require('../package.json'),
    router  = require('express').Router(),
    httpResult = require('./utils/httpResult'),
    ctrl    = require('./controllers')

/* GET API info. */
router.get('/', (req, res) => httpResult.ok(res,'Welcome to the web API for WebglRocks v' + pjson.version))

/* Projects */
router.route('/projects')
      .get(ctrl.projects.getAll)
router.route('/projects/:id')
      .get(ctrl.projects.getSingle)

/* Articles */
router.route('/articles')
      .get(ctrl.articles.getAll)
router.route('/articles/:id')
      .get(ctrl.articles.getSingle)

/* Not found, for every other route */
router.all('*', (req, res) => httpResult.notFound(res))

module.exports = router