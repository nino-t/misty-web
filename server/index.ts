import App from './app'

import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import loggerMiddleware from './middlewares/logger'
import DefaultController from './controllers/default.controller'
require('dotenv').config()

const nodeENV = process.env.APP_ENV || 'development'
const isProductionMode = ['staging', 'production'].indexOf(nodeENV) >= 0

let devMiddlewares: any = []
if (isProductionMode === false) {
  const webpack = require('webpack')
  const webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : '../webpack.config')
  const compiler = webpack(webpackConfig)

  devMiddlewares = [
    ...devMiddlewares,
    require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
    }),
    require('webpack-hot-middleware')(compiler, {
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000,
    }),
  ]
}

const appPORT = parseInt(process.env.APP_PORT || '5000')
const app = new App({
  port: appPORT,
  controllers: [new DefaultController()],
  middlewares: [
    cors(),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    loggerMiddleware,
    ...devMiddlewares,
  ],
})

app.listen()
