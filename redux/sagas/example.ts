// Modules
import { call, put, takeEvery } from 'redux-saga/effects'

// Services
import { ExampleService } from '../../services'

function* fetchUser(action) {
  try {
    const response = yield call(ExampleService.fetchUser, action.payload.id)
    console.log(response)

    if (response.status === 200) {
      yield put({
        type: 'GET_EXAMPLE_SUCCESS',
        data: response.data
      })
    }
  } catch (e) {
    yield put({
      type: 'GET_EXAMPLE_FAILURE',
      data: []
    })
  }
}

export const exampleSaga = [takeEvery('GET_EXAMPLE_REQUEST', fetchUser)]
