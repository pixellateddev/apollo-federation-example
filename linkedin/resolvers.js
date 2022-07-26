const resolvers = {
    Query: {
        getUsers: (_, __, { dataSources }) => {
            return dataSources.linkedInAPI.getUsers()
        },

        getUser: (_, { userId }, { dataSources }) => {
            return dataSources.linkedInAPI.getUser(userId)
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
        }
    }
}

export default resolvers