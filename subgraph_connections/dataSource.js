import db from '../db.json' assert { type: "json" }


class ConnectionsAPI {
    getConnections(userId) {
        let connections = []
        db.connections.filter(conn => conn['user-1'] === userId).forEach(conn => connections.push({id: conn['user-2']}))
        db.connections.filter(conn => conn['user-2'] === userId).forEach(conn => connections.push({id: conn['user-1']}))
        return connections

    }

    getNumberOfConnections(userId) {
        return db.connections.filter(conn => conn['user-1'] === userId || conn['user-2'] === userId).length 
    }
}

export default ConnectionsAPI