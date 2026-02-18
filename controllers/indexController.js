const messages = require("../db/messages");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getHomepage = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

const newMessagePost = (req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  messages.push({ text: messageText, user: messageUser, added: new Date() });

  res.redirect("/");
};

const getMessage = (req, res) => {
  const { messageId } = req.params;

  if (messageId >= messages.length) {
    throw new CustomNotFoundError("Message not found");
  }

  res.render("messages/message", { message: messages[messageId] });
};

module.exports = { getHomepage, newMessagePost, getMessage };