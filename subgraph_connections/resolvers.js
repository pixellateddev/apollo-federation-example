const resolvers = {
    Query: {
        getConnections: (_, { userId }, { dataSources }) => {
            return dataSources.connectionsAPI.getConnections(userId)
        }
    },

    User: {
        __resolveReference: (user) => {
            console.log(user)
            return user
        },
        numberOfConnections: (user, _, { dataSources }) => {
            return dataSources.connectionsAPI.getNumberOfConnections(user.id)
        }
    }
}

export default resolvers