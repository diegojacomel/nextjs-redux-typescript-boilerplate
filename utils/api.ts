// Modules
import axios, { AxiosPromise } from 'axios'

// Constants
import { BASE_URL } from '../utils/constants'

const instancePublic = axios.create({})

class ApiPublic {
  static get(uri: string): AxiosPromise {
    return instancePublic.get(`${uri}`)
  }

  static post(uri: string, data: Record<string, unknown>): AxiosPromise {
    return instancePublic.post(`${BASE_URL}${uri}`, data)
  }

  static put(uri: string, data: Record<string, unknown>): AxiosPromise {
    return instancePublic.put(`${BASE_URL}${uri}`, data)
  }

  static patch(uri: string, data: Record<string, unknown>): AxiosPromise {
    return instancePublic.patch(`${BASE_URL}${uri}`, data)
  }

  static delete(uri: string, data: Record<string, unknown>): AxiosPromise {
    return instancePublic.delete(`${BASE_URL}${uri}`, data)
  }

  static getPDF(uri: string): AxiosPromise {
    return instancePublic.get(uri, { responseType: 'blob' })
  }
}

export { ApiPublic }
