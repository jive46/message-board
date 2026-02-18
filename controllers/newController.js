const getNewMessagePage = (req, res) => {
  res.render("form", { title: "New Message" });
};

module.exports = { getNewMessagePage };