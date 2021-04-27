interface Todo {
  _id: string
  __v: number
  owner: string
  description: string
  completed: boolean
  createdAt: string
  updatedAt: string
}

interface TodosService {
  meta: TodosServiceMeta
  results: Todo[]
}

interface TodosServiceMeta {
  isLoading: boolean
  errorMessage: string
}

type TodoInterface = Todo
type TodosServiceInterface = TodosService

export type { TodoInterface, TodosServiceInterface }
