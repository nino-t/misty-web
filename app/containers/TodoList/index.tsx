import React from 'react'
import styled from 'styled-components'
import { TodoInterface as TodoProps, TodosServiceInterface as TodoListProps } from '../TodoPage/types/todo'

const Block = styled.div.attrs({ className: 'py-2 px-3 border-2 text-center text-gray-800 text-base mt-7 block' })``
const TodoButton = styled.button.attrs((props) => ({
  type: 'button',
  className: `flex-no-shrink p-2 ml-2 border-2 rounded text-white ${props.color}`,
}))`
  font-size: 1rem;
`

const TodoItem = (props: TodoProps): JSX.Element => {
  const { description } = props

  return (
    <div className="flex mb-4 items-center">
      <p className="w-full text-gray-800">{description}</p>
      <TodoButton color="bg-green-500 hover:bg-green-600">Done</TodoButton>
      <TodoButton color="bg-red-500 hover:bg-red-600">Remove</TodoButton>
    </div>
  )
}

const TodoList = (props: TodoListProps): JSX.Element => {
  const { meta, results } = props
  return (
    <div className="todo-list__container">
      {meta.isLoading === true ? (
        <Block>
          <p>Loading...</p>
        </Block>
      ) : (
        <>
          {results.length > 0 ? (
            <div className="todo-list__wrap">
              {results.map((todo, index) => (
                <TodoItem key={index} {...todo} />
              ))}
            </div>
          ) : (
            <Block>
              <p>The data is not yet available</p>
            </Block>
          )}
        </>
      )}
    </div>
  )
}

export default TodoList
