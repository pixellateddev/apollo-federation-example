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

    getConnections(userId) {
        let connections = []
        db.connections.filter(conn => conn['user-1'] === userId).forEach(conn => connections.push(this.getUser(conn['user-2'])))
        db.connections.filter(conn => conn['user-2'] === userId).forEach(conn => connections.push(this.getUser(conn['user-1'])))
        return connections

    }

    getNumberOfConnections(userId) {
        return db.connections.filter(conn => conn['user-1'] === userId || conn['user-2'] === userId).length 
    }
}

export default LinkedInAPI