import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/IControllerBase.interface'

class DefaultController implements IControllerBase {
  public path = '*'
  public router = express.Router()

  constructor () {
    this.initRoutes()
  }

  public initRoutes() {
    this.router.get(this.path, this.index)
  }

  index = (req: Request, res: Response) => {
    res.render('../dist/index')
  }
}

export default DefaultController
