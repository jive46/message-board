const { Router } = require("express");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];


indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});
indexRouter.post("/new", (req, res) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;

  messages.push({ text: messageText, user: messageUser, added: new Date() });

  res.redirect("/");
});

indexRouter.get("/message/:messageId", (req, res) => {
    const { messageId } = req.params;

    if(messageId >= messages.length) {
        throw new CustomNotFoundError("Message not found");
    };
    
    res.render("messages/message", { message: messages[messageId] });
});

module.exports = indexRouter;
