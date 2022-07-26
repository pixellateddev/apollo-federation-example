import { ApolloServer, gql } from 'apollo-server'
import { buildSubgraphSchema } from '@apollo/subgraph'
import { readFileSync } from 'fs'
import ConnectionsAPI from './dataSource.js'
import resolvers from './resolvers.js'

const typeDefs = gql(readFileSync('./subgraph_connections/schema.graphql', { encoding: 'utf-8' }))

const server = new ApolloServer({
    schema: buildSubgraphSchema({typeDefs, resolvers}),
    dataSources: () => ({
        connectionsAPI: new ConnectionsAPI()
    })
})

const port = 4002;
const subgraphName = 'connections';

server.listen({port}).then(({url}) => {
    console.log(`🚀 Subgraph ${subgraphName} running at ${url}`)
}).catch(err => {
    console.error(err)
})
