import { ApolloServer, gql } from 'apollo-server'
import { readFileSync } from 'fs'
import LinkedInAPI from './datasource.js'
import resolvers from './resolvers.js'


const typeDefs = gql(readFileSync('./schema.graphql', { encoding: 'utf-8' }))

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        linkedInAPI: new LinkedInAPI()
    })
})

server.listen().then(({url}) => {
    console.log(`🚀 server running at ${url}`)
}).catch(err => {
    console.error(err)
})
