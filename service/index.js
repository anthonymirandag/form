
import signale from 'signale'

import { ApolloServer } from 'apollo-server'
import { ApolloError } from 'apollo-server-errors'

import { resolvers } from './resolvers'
import { typeDefs } from './types'

import { Auth } from '../datalayer/backing/auth'
import { apollo } from '../datalayer/config'


require('../datalayer/backing/connections/mongo') // Import mongo connection to inherit connection on all project

signale.star('[SERVICE] GRAPHQL SERVICE INIT PROCESS')

const server = new ApolloServer({
  context: async ({ req }) => { // https://www.apollographql.com/docs/apollo-server/security/authentication/#putting-user-info-on-the-context
    const { headers: { authorization } } = req
    try {
      let authScope = new Auth(authorization)
      let user = await authScope.getScope("verify")

      return {
        user,
        authScope
      }
    } catch (error) {
      if(error.name == 'SyntaxError') throw new ApolloError(error.message)
      throw new ApolloError(`Service generate this error: [${error.message}]`)
    }
  },
  cors: {
    credentials: apollo.credentials,
    origin     : apollo.origin
  },
  dataSources: () => ({
    // responsablesAPI: new datasources.ResponsablesAPI() // https://www.apollographql.com/docs/apollo-server/data/data-sources
  }),
  debug        : apollo.debug, // Boolean - https://www.apollographql.com/docs/apollo-server/api/apollo-server/
  introspection: apollo.introspection, // Boolean - https://www.apollographql.com/docs/tutorial/schema/#explore-your-schema
  onHealthCheck: () => { // https://www.apollographql.com/docs/apollo-server/monitoring/health-checks
    return new Promise((resolve, reject) => {
      if(true)
        resolve()
      else
        reject()
    })
  },
  resolvers, // https://www.apollographql.com/docs/apollo-server/data/resolvers
  tracing: apollo.tracing, // Boolean - https://www.apollographql.com/docs/apollo-server/data/resolvers/#monitoring-resolver-performance
  typeDefs // https://www.apollographql.com/docs/apollo-server/federation/value-types
})

server.listen({ host: apollo.hostdomain, port: apollo.port }).then(({ url }) => {
  signale.success(`[Krowdy] Server ready at ${url}`)
  signale.info(`[KROWDY] SERVER RUN WITH ${process.env.NODE_OPTIONS}`)
  signale.info(`Try your health check at: ${url}.well-known/apollo/server-health`)
}).catch(error => {
  signale.fatal(`[Krowdy] Error: ${error.message}`)
})


/*  import { typeDefs } from './types'
 import { resolvers } from './resolvers'
 import { ApolloServer } from 'apollo-server'

 const server = new ApolloServer({
  typeDefs,
  resolvers
 })

 server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
 }).catch(error => {
  console.log(`[Krowdy] Error: ${error.message}`)
})
 */