const { Router } = require("express");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const messages = require("../db/messages");
const { newMessagePost } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.post("/new", newMessagePost);

indexRouter.get("/message/:messageId", (req, res) => {
    const { messageId } = req.params;

    if(messageId >= messages.length) {
        throw new CustomNotFoundError("Message not found");
    };
    
    res.render("messages/message", { message: messages[messageId] });
});

module.exports = indexRouter;
