const { Router } = require("express");
const {user: controller} = require("../controllers");
const { getAll } = controller


const user = Router();

user
    .get("/", getAll)
   

module.exports = user