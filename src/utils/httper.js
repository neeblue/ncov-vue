import axios from 'axios'
import baseUrl from '../config/setting'

class Httper {
  static instance
  static http

  constructor() {
    if (!this.http) {
      this.http = axios.create({
        baseURL: baseUrl
      })
    }
  }

  static initHttp() {}

  static getInstance() {
    if (!Httper.instance) {
      Httper.instance = new Httper()
    }
    return Httper.instance
  }

  async get(url = '', params = {}) {
    try {
      const resp = await this.http.get(url, params)
      return resp.data
    } catch (err) {
      // console.log(err)
    }
  }
}

export default Httper.getInstance()
