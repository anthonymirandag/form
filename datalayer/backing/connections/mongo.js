import mongoose from 'mongoose'

import { connections } from '../../config'

const connectionMongo = () => mongoose.connect(
  connections.mongo.uri,
  {
    autoReconnect    : true,
    mongos           : true,
    reconnectTries   : 5,
    reconnectInterval: 2000,
    useCreateIndex   : true,
    useFindAndModify : false,
    useNewUrlParser  : true
  }
)
  .then(()=>{
    console.log('[DATABASE] Established Connection: MONGO')
  })
  .catch(async mongoError=>{
    try {
      const date = new Date()
      const formatDate = date.toISOString().slice(0, 19)
      console.log()
      console.log(`MAINTAINER: [soporte@krowdy.com] - DATE: [${formatDate}] - ERROR: [${mongoError.message}]`)
      setTimeout(connectionMongo, 10000)
    } catch (error) {
      console.log(error)
    }
  })

connectionMongo()

// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ')
})

// If the connection throws an error
mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err)
})

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected')
})
