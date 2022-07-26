import { ApolloServer, gql } from 'apollo-server'
import { buildSubgraphSchema } from '@apollo/subgraph'
import { readFileSync } from 'fs'
import AccountsAPI from './dataSource.js'
import resolvers from './resolvers.js'

const typeDefs = gql(readFileSync('./subgraph_accounts/schema.graphql', { encoding: 'utf-8' }))

const server = new ApolloServer({
    schema: buildSubgraphSchema({typeDefs, resolvers}),
    dataSources: () => ({
        accountsAPI: new AccountsAPI()
    })
})

const port = 4001;
const subgraphName = 'accounts';

server.listen({port}).then(({url}) => {
    console.log(`🚀 Subgraph ${subgraphName} running at ${url}`)
}).catch(err => {
    console.error(err)
})
