import * as path from 'path'
import { loadFilesSync ,mergeResolvers } from 'graphql-tools'
const resolversArray = loadFilesSync(path.join(__dirname, './**/*.resolvers.*'))
const resolvers = mergeResolvers(resolversArray)

export { resolvers }