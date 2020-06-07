import { amazon } from '../../backing/services/aws'

class Signature {
  event(type) {
    amazon.s3.getSignedUrl(type)
  }
  insert() {
    return this.event('insert')
  }
  get() {
    return this.event('get')
  }
}

export {
  Signature
}
