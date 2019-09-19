const app = require("express")();

app.get("/", (req, res) => {
  res.send("<br/><br/><center><H1>Hello from Appsody test!</H1><br/></center>");
});

module.exports.app = app;
