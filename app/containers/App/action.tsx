import { action } from 'typesafe-actions'
import { STORE_SERVICE_REQUEST, STORE_SERVICE_REQUEST_SUCCESS, STORE_SERVICE_REQUEST_ERROR } from './constants'

export const storeServiceRequest = (serviceName: string): any => action(STORE_SERVICE_REQUEST, { serviceName })
export const storeServiceRequested = (): any => action(STORE_SERVICE_REQUEST_SUCCESS)
export const storeServiceLoadingError = (errorMessage: string): any =>
  action(STORE_SERVICE_REQUEST_ERROR, { errorMessage })
