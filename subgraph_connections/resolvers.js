const resolvers = {
    Query: {
        getConnections: (_, { userId }, { dataSources }) => {
            return dataSources.connectionsAPI.getConnections(userId)
        }
    },

    User: {
        numberOfConnections: (user, _, { dataSources }) => {
            return dataSources.connectionsAPI.getNumberOfConnections(user.id)
        }
    }
}

export default resolvers