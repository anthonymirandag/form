import * as path from 'path'

import { loadFilesSync, mergeTypeDefs } from 'graphql-tools'

const typesArray = loadFilesSync(path.join(__dirname,'./**/*.graphql'))
const typeDefs = mergeTypeDefs(typesArray,{ all:true })

export { typeDefs }
