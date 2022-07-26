import { ApolloServer, gql } from 'apollo-server'
import { readFileSync } from 'fs'

const typeDefs = gql(readFileSync('./schema.graphql', { encoding: 'utf-8' }))

const server = new ApolloServer({
    typeDefs,
    mocks: true
})

server.listen().then(({url}) => {
    console.log(`🚀 server running at ${url}`)
}).catch(err => {
    console.error(err)
})
