import { StoreServiceInterface } from './service'

/* --- STATE --- */

interface AppState {
  readonly isLoading: boolean
  readonly errorMessage: string
  readonly storeService: StoreServiceInterface
}

/* --- EXPORTS --- */

type ContainerState = AppState

export type { ContainerState }
