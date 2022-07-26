import db from './db.json' assert { type: "json" }

class LinkedInAPI {
    getUsers() {
        return db.users
    }

    getUser(userId) {
        return db.users.find(user => user.id === userId)
    }
}

export default LinkedInAPI