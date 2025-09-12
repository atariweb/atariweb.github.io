import type { Ref } from 'vue'

export interface LoadingState {
  isLoading: boolean
  type: 'page' | 'language' | 'theme' | 'general'
  message?: string
  operations: Set<string>
}

export function useGlobalLoading() {
  const loadingState = useState<LoadingState>('globalLoading', () => ({
    isLoading: true, // Start with loading active
    type: 'page',
    message: 'در حال بارگذاری...',
    operations: new Set(['initial-loading'])
  }))

  const addOperation = (operationId: string) => {
    loadingState.value.operations.add(operationId)
    loadingState.value.isLoading = true
  }

  const removeOperation = (operationId: string) => {
    loadingState.value.operations.delete(operationId)
    // Only hide loading if no operations are running
    if (loadingState.value.operations.size === 0) {
      loadingState.value.isLoading = false
    }
  }

  const setLoading = (isLoading: boolean, type: LoadingState['type'] = 'general', message?: string) => {
    if (isLoading) {
      loadingState.value.type = type
      loadingState.value.message = message
      loadingState.value.isLoading = true
    } else {
      // Only hide if no operations are running
      if (loadingState.value.operations.size === 0) {
        loadingState.value.isLoading = false
      }
    }
  }

  const setPageLoading = (isLoading: boolean, message?: string) => {
    const operationId = 'page-loading'
    if (isLoading) {
      addOperation(operationId)
      loadingState.value.type = 'page'
      loadingState.value.message = message
    } else {
      removeOperation(operationId)
    }
  }

  const setLanguageLoading = (isLoading: boolean, message?: string) => {
    const operationId = 'language-loading'
    if (isLoading) {
      addOperation(operationId)
      loadingState.value.type = 'language'
      loadingState.value.message = message
    } else {
      removeOperation(operationId)
    }
  }

  const setThemeLoading = (isLoading: boolean, message?: string) => {
    const operationId = 'theme-loading'
    if (isLoading) {
      addOperation(operationId)
      loadingState.value.type = 'theme'
      loadingState.value.message = message
    } else {
      removeOperation(operationId)
    }
  }

  const isLoading = computed(() => loadingState.value.isLoading)
  const loadingType = computed(() => loadingState.value.type)
  const loadingMessage = computed(() => loadingState.value.message)
  const activeOperations = computed(() => loadingState.value.operations.size)

  return {
    loadingState: readonly(loadingState),
    isLoading,
    loadingType,
    loadingMessage,
    activeOperations,
    setLoading,
    setPageLoading,
    setLanguageLoading,
    setThemeLoading,
    addOperation,
    removeOperation
  }
}


