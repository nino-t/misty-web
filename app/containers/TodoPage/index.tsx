import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { createStructuredSelector } from 'reselect'
import { useDispatch, useSelector } from 'react-redux'

import { useInjectReducer, useInjectSaga } from '../../utils/redux-injectors'

import { loadTodos } from './actions'
import { ContainerState } from './types'
import { makeSelectTodos } from './selectors'
import { TodosServiceInterface } from './types/todo'

import saga from './saga'
import reducer from './reducer'

const key = 'todoContainer'

type DesiredSelection = {
  todos: TodosServiceInterface
}

const stateSelector = createStructuredSelector<ContainerState, DesiredSelection>({
  todos: makeSelectTodos(),
})

const TodoPage = (): JSX.Element => {
  const { todos } = useSelector(stateSelector)

  useInjectReducer({ key: key, reducer: reducer })
  useInjectSaga({ key: key, saga: saga })

  const dispatch = useDispatch()
  const [accessToken, setAccessToken] = useState('')

  const onSubmitForm = (evt?: any) => {
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault()
    }

    if (!accessToken) {
      return
    }

    dispatch(loadTodos(accessToken))
  }

  return (
    <>
      <Helmet>
        <title>Todo Page</title>
      </Helmet>
      <div className="h-screen w-full flex flex-col items-center bg-gray-100 font-sans py-10">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg text-gray-800">
          <form onSubmit={onSubmitForm}>
            <div className="mb-3">
              <label className="block mb-2">Access Token</label>
              <textarea
                className="h-40 w-full border-2 p-2"
                placeholder="Enter your token..."
                value={accessToken}
                onChange={(e) => setAccessToken(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="block w-full bg-green-600 text-white border-0 rounded p-2">
              Fetch
            </button>
          </form>
        </div>

        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-gray-800">Todo List</h1>
            <div className="flex mt-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-900"
                placeholder="Add Todo"
              />
              <button className="flex-no-shrink p-2 border-2 rounded text-white bg-blue-500 hover:bg-blue-600">
                Add
              </button>
            </div>
          </div>
          <div>
            {todos.results.length > 0 ? (
              <>
                {todos.results.map((todo, index) => (
                  <div className="flex mb-4 items-center" key={index}>
                    <p className="w-full text-gray-800">{todo.description}</p>
                    <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-green-500 hover:bg-green-600">
                      Done
                    </button>
                    <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-white bg-red-500 hover:bg-red-600">
                      Remove
                    </button>
                  </div>
                ))}
              </>
            ) : (
              <div className="py-2 px-3 border-2 text-center text-gray-800 text-base mt-7 block">
                <p>The data is not yet available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoPage
