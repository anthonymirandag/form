/* import * as Sentry from '@sentry/node'

Sentry.init({
  dsn: process.env.SENTRY_DSN
})

const apolloServerSentryPlugin = {
  // For plugin definition see the docs: https://www.apollographql.com/docs/apollo-server/integrations/plugins/
  requestDidStart() {
    return {
      didEncounterErrors(rc) {
        Sentry.withScope((scope) => {
          scope.addEventProcessor((event) =>
            Sentry.Handlers.parseRequest(event, (rc.context).req)
          )

          scope.setTags({
            graphql    : rc.operation?.operation || 'parse_err',
            graphqlName: (rc.operationName) || (rc.request.operationName)
          })

          rc.errors.forEach((error) => {
            if(error.path || error.name !== 'GraphQLError') {
              scope.setExtras({
                path: error.path
              })
              Sentry.captureException(error)
            } else {
              scope.setExtras({})
              Sentry.captureMessage(`GraphQLWrongQuery: ${error.message}`)
            }
          })
        })
      }
    }
  }
}

export default apolloServerSentryPlugin
 */