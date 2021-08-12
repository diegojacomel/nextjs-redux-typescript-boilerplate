import { AxiosPromise } from 'axios'
import { ApiPublic } from '../utils/api'

class ExampleService {
  static fetchUser(id: string): AxiosPromise {
    return ApiPublic.get(`https://swapi.dev/api/people/${id}`)
  }
}

export default ExampleService
