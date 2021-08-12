// Modules
import { all } from 'redux-saga/effects'

// Saga
import { exampleSaga } from './sagas/example'

function* rootSagas(): any {
  yield all([...exampleSaga])
}

export default rootSagas
