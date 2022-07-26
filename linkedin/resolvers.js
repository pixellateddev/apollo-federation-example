const resolvers = {
    Query: {
        getUsers: (_, __, { dataSources }) => {
            return dataSources.linkedInAPI.getUsers()
        },
    }
}

export default resolvers