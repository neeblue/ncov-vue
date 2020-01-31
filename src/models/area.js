import Httper from '../utils/httper'

class Area {
  async getList() {
    const url = '/area'
    const res = await Httper.get(url)
    return res
  }
}

export default new Area()
