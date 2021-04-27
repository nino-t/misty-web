/* --- STATE --- */

interface AppState {
  readonly isLoading: boolean
  readonly errorMessage: string
}

/* --- EXPORTS --- */

type ContainerState = AppState

export type { ContainerState }
