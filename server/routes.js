let pjson   = require('../package.json'),
    router  = require('express').Router(),
    httpResult = require('./utils/httpResult'),
    ctrl    = require('./controllers')

/* GET API info. */
router.get('/', (req, res) => httpResult.ok(res,'Welcome to the web API for WebglRocks v' + pjson.version))

/*Auth */
router.post('/login', ctrl.auth.login)

/* Projects */
router.route('/projects')
      .get(ctrl.projects.getAll)
      .post(ctrl.auth.authenticate, ctrl.projects.post)
router.route('/projects/:id')
      .get(ctrl.projects.getSingle)
      .put(ctrl.auth.authenticate, ctrl.projects.put)
      .delete(ctrl.auth.authenticate, ctrl.projects.delete)

/* Articles */
router.route('/articles')
      .get(ctrl.articles.getAll)
router.route('/articles/:id')
      .get(ctrl.articles.getSingle)

/* Not found, for every other route */
router.all('*', (req, res) => httpResult.notFound(res))

module.exports = router