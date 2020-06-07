const datasources = {

}

const connections = {
  mongo: {
    uri     : process.env.CONNECTION_DATABASE_MONGO_FORM,
    sharding: true
  }
}


const apollo = {
  origin     : process.env.GRAPHQL_APOLLO_ORIGIN,
  credentials: process.env.GRAPHQL_APOLLO_CREDENTIALS,
  hostdomain : process.env.GRAPHQL_APOLLO_HOSTDOMAIN,
  port       : process.env.GRAPHQL_APOLLO_PORT,
  tracing: process.env.GRAPHQL_APOlLO_TRACING
}

export {
  apollo,
  datasources,
  connections,
}

