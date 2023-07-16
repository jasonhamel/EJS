import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
let items = [];

app.get("/", function (req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleString("en-US", options);
  res.render("list", { dayOfWeek: day, todoList: items });
});

app.post("/", function (req, res) {
  let item = req.body.nextItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
