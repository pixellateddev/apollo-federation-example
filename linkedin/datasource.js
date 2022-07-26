import db from './db.json' assert { type: "json" }

class LinkedInAPI {
    getUsers() {
        return db.users
    }

    getUser(userId) {
        return db.users.find(user => user.id === userId)
    }

    incrementViews(userId) {
        const user = this.getUser(userId)
        if (!user) {
            throw new Error("user not found")
        }
        user.views += 1
        return user
    }
    
}

export default LinkedInAPI