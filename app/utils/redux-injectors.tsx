import { useInjectReducer as useReducer, useInjectSaga as useSaga } from 'redux-injectors'
import { InjectReducerParams, InjectSagaParams } from '../types'

const useInjectReducer = ({ key, reducer }: InjectReducerParams): any => useReducer({ key, reducer })

export { useInjectReducer }

const useInjectSaga = ({ key, saga, mode }: InjectSagaParams): any => useSaga({ key, saga, mode })

export { useInjectSaga }
