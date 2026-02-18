const { Router } = require("express");
const { getHomepage, newMessagePost, getMessage } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getHomepage);

indexRouter.post("/new", newMessagePost);

indexRouter.get("/message/:messageId", getMessage);

module.exports = indexRouter;
