import axios from 'axios'
import _get from 'lodash/get'
import { call, put, takeLatest } from 'redux-saga/effects'

import { LOAD_TODOS, ADD_TODO } from './constants'
import { todosLoaded, todosLoadingError, addTodoSuccess } from './actions'
import { storeServiceRequest, storeServiceRequested, storeServiceLoadingError } from '../App/action'

const appAxios = (options: Record<string, any>): any => {
  return axios(options)
}

export function* getTodos(action: any): any {
  const requestURL = 'https://api-nodejs-todolist.herokuapp.com/task'

  const { accessToken } = action.payload

  try {
    const responseJSON = yield call(appAxios, {
      method: 'get',
      url: requestURL,
      headers: {
        Authorization: accessToken,
        'Content-Type': 'application/json',
      },
    })

    const todos = _get(responseJSON, 'data.data', [])

    yield put(todosLoaded(todos))
  } catch (err) {
    yield put(todosLoadingError(err))
  }
}

export function* createTodo(action: any): any {
  const requestURL = 'https://api-nodejs-todolist.herokuapp.com/task'

  const { serviceName, accessToken, description } = action.payload

  try {
    yield put(storeServiceRequest(serviceName))

    const responseJSON = yield call(appAxios, {
      method: 'post',
      url: requestURL,
      headers: {
        Authorization: accessToken,
        'Content-Type': 'application/json',
      },
      data: {
        description,
      },
    })

    const todo = _get(responseJSON, 'data.data', null)

    yield put(storeServiceRequested())
    yield put(addTodoSuccess(todo))
  } catch (err) {
    yield put(storeServiceLoadingError(err))
  }
}

export default function* todoSaga(): any {
  yield takeLatest(LOAD_TODOS, getTodos)
  yield takeLatest(ADD_TODO, createTodo)
}
