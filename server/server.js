const express = require("express");
const app = express();
const cors = require("cors");

const port = 8000;

app.use(cors());
app.use("/bootstrap", express.static("bootstrap/dist"));
app.use("/music", express.static("music/dist"));
app.use("/welcome", express.static("welcome/dist"));

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
