import {config} from 'dotenv'
config()
import { ApolloServer } from 'apollo-server'
import { ApolloGateway } from '@apollo/gateway'

const gateway = new ApolloGateway()

const server = new ApolloServer({
    gateway
})

const port = 4000

server.listen({port}).then(({url}) => {
    console.log(`🚀 Gateway running at ${url}`)
}).catch(err => {
    console.error(err)
})
