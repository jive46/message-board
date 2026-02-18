const messages = require("../db/messages");

const newMessagePost = (req, res) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;

  messages.push({ text: messageText, user: messageUser, added: new Date() });

  res.redirect("/");
};

module.exports = { newMessagePost };