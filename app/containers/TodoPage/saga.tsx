import axios from 'axios'
import _get from 'lodash/get'
import { call, put, takeLatest } from 'redux-saga/effects'

import { LOAD_TODOS } from './constants'
import { todosLoaded, todosLoadingError } from './actions'

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

export default function* todoData(): any {
  yield takeLatest(LOAD_TODOS, getTodos)
}
