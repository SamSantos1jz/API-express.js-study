const {user: model} = require('../models');
// const { param } = require('../routes/user.route');

const service = {
    getAll: async () => {
        const result = await model.getAll()
        if(!result) return {status: 404, pass: false, msg: "Users not found"}
        return {status: 200, pass: true, msg: result}
    }  
}

module.exports = service