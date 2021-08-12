// Reducer types
import * as type from '../types'

interface dataTypes {
  name: string
  height: string
  mass: string
  gender: string
}

export interface initialStateExampleTypes {
  status: string | null
  isLoading: boolean
  data: dataTypes
}

export const initialStateExample = {
  status: null,
  isLoading: false,
  data: {
    name: '',
    height: '',
    mass: '',
    gender: ''
  }
}

interface ActionTypes {
  type: string
  payload?: any
  data?: any
}

const example = (
  state: initialStateExampleTypes = initialStateExample,
  action: ActionTypes
): initialStateExampleTypes => {
  switch (action.type) {
    case type.GET_EXAMPLE_REQUEST:
      return {
        ...state,
        status: 'loading',
        isLoading: true
      }

    case type.GET_EXAMPLE_SUCCESS:
      return {
        ...state,
        status: 'success',
        isLoading: false,
        data: action.data
      }

    case type.GET_EXAMPLE_FAILURE:
      return {
        ...state,
        status: 'failure',
        isLoading: false,
        data: action.data
      }

    default:
      return state
  }
}

export default example
