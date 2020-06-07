import aws from 'aws-sdk'

import { services } from '../../config'

const { amazonwebservices } = services

aws.config.update({
  accessKeyId    : amazonwebservices.identifier,
  region         : amazonwebservices.secret,
  secretAccessKey: amazonwebservices.secret
})

const s3 = new aws.S3({ signatureVersion: 'v4' })
const sns = new aws.SNS()
const ec2 = new aws.EC2()
const ses = new aws.SES()

const amazon = {
  s3,
  sns,
  ses,
  ec2
}

export { amazon }
