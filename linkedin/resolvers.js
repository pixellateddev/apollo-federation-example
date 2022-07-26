const resolvers = {
    Query: {
        getUsers: (_, __, { dataSources }) => {
            return dataSources.linkedInAPI.getUsers()
        },

        getUser: (_, { userId }, { dataSources }) => {
            return dataSources.linkedInAPI.getUser(userId)
        }
    }
}

export default resolvers