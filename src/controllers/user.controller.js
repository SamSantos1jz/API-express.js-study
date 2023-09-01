const {user: service} = require('../services');

const controller = {
    getAll: async (_req, res, _next) => {
        const {pass, msg, status} = await service.getAll()
        if(!pass) return res.status(status).send({msg})
        return res.status(status).json(msg)
    }
}

module.exports = controller