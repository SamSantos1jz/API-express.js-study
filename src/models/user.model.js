const db = require('./db');

const model = {
    getAll: async () => {
        const sql = "SELECT * FROM db.users" 
        const [result] = await db.query(sql)
        return result
    }
 
}

module.exports = model