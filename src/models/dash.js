import Httper from '../utils/httper'

class Dash {
  async getDash() {
    const url = '/dash'
    const res = await Httper.get(url)
    return res
  }
}

export default new Dash()
