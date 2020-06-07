class Auth {
  constructor(token) {
    this.token = token
  }

  parseToken(accessToken) {
    try {
      if(!accessToken) throw new SyntaxError(`AccessToken has invalid data: [${authorization}]`)
      if(accessToken.substring(0, 7) === 'Bearer ')
        return accessToken
      else
        return `Bearer ${accessToken}`
    } catch (error) {
      throw error
    }
  }

  async getScope(process) {
    try {
      let scope, keyAccess
      keyAccess = this.parseToken(this.token)
      switch (process) {
        case 'information':
          scope = await this.getUserInformation(keyAccess)
          break
        case 'detail':
          scope = await this.getUserDetail(keyAccess)
          break
        case 'permissions':
          scope = await this.getUserPermissions(keyAccess)
          break
        case 'verify':
          scope = await this.verifyUser(keyAccess)
          break
      }

      return scope
    } catch (error) {
      return error
    }
  }

  async getUserInformation() {
    try {

    } catch (error) {
      throw error
    }
  }
  async getUserDetail() {
    try {

    } catch (error) {
      throw error
    }
  }
  async getUserPermissions() {
    try {

    } catch (error) {
      throw error
    }
  }
  async verifyUser() {
    try {
      return {}
    } catch (error) {
      throw error
    }
  }
}

export {
  Auth
}
