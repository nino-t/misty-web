/* --- STATE --- */

interface AppState {
  readonly loading: boolean
  readonly error?: Record<string, any> | boolean
}

/* --- EXPORTS --- */

type ContainerState = AppState

export type { ContainerState }
