import App from './app'

import * as bodyParser from 'body-parser'
import loggerMiddleware from './middlewares/logger'
import DefaultController from './controllers/default.controller'

var webpack = require('webpack')
var webpackConfig = require(process.env.WEBPACK_CONFIG
  ? process.env.WEBPACK_CONFIG
  : '../webpack.config')
var compiler = webpack(webpackConfig)

const app = new App({
  port: 5000,
  controllers: [
    new DefaultController()
  ],
  middlewares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    loggerMiddleware,
    require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath
    }),
    require('webpack-hot-middleware')(compiler, {
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000
    })
  ]
})

app.listen()