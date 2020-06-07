import { datasources } from '../../../../datalayer/config'
import { RESTDataSource } from 'apollo-datasource-rest'

class ResponsablesAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = `${datasources.appUrlResponsables}/tasks`
  }
  test(notification) {
    try {
      return this.post('/cancelActivityKrowder', { notifications: notification })
    } catch (error) {
      throw error
    }
  }
}

export default ResponsablesAPI
