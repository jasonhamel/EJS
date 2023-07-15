import express from "express";
import bodyParser from "body-parser";
const app = express();

app.get("/", function (req, res) {
  let today = new Date();
  if (today.getDay() == 6 || today.getDay() == 0) {
    res.send("Keep if fun, its the weekend");
  } else {
    res.send("Keep it professional, its a weekday");
  }
  res.send("<h1>Hello, Jason</h1>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
