// React
import { useMemo } from 'react'

// Redux
import { createStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// Redux Saga
import createSagaMiddleware from 'redux-saga'

// Root
import rootReducers from './rootReducers'
import rootSagas from './rootSagas'

// Reducers
import {
  initialStateExample,
  initialStateExampleTypes
} from './reducers/example'

const sagaMiddleware = createSagaMiddleware()

let store

interface initialStateTypes {
  example: initialStateExampleTypes
}

const initialState = {
  example: initialStateExample
}

function initStore(preloadedState = initialState) {
  const store = createStore(
    rootReducers,
    preloadedState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSagas)

  return store
}

export const initializeStore = (preloadedState: initialStateTypes): Store => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState: initialStateTypes): Store {
  const store = useMemo(() => initializeStore(initialState), [initialState])

  return store
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
