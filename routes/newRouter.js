const { Router } = require("express");
const { getNewMessagePage } = require("../controllers/newController")

const newRouter = Router();

newRouter.get("/", getNewMessagePage);

module.exports = newRouter;
