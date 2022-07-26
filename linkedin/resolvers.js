const resolvers = {
    Query: {
        getUsers: (_, __, { dataSources }) => {
            return dataSources.linkedInAPI.getUsers()
        },

        getUser: (_, { userId }, { dataSources }) => {
            return dataSources.linkedInAPI.getUser(userId)
        },

        getConnections: (_, { userId }, { dataSources }) => {
            return dataSources.linkedInAPI.getConnections(userId)
        }
    },

    Mutation: {
        incrementViews: (_, { userId }, { dataSources }) => {
            let user
            try {
                user = dataSources.linkedInAPI.incrementViews(userId)
            } catch(err) {
                return {
                    message: err.message,
                    code: 'NOT_OK',
                    success: false
                }
            }
            return {
                message: 'Profile Successfully updated',
                code: 'OK',
                success: true,
                user
            }
        },
    },

    User: {
        numberOfViews: (user) => {
            return user.views
        },
        numberOfConnections: (user, _, { dataSources }) => {
            return dataSources.linkedInAPI.getNumberOfConnections(user.id)
        }   
    }
}

export default resolvers