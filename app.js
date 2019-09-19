const app = require("express")();

app.get("/", (req, res) => {
  res.send("<br/><br/><center><H1>Hello from Appsody!</H1><br/><br/></center>");
});

module.exports.app = app;
