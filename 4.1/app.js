import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let items = [];
let workItems = [];

app.get("/", function (req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleString("en-US", options);
  res.render("list", { listTitle: day, todoList: items });
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work", todoList: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.post("/", function (req, res) {
  let item = req.body.nextItem;
  console.log(req.body);
  items.push(item);
  res.redirect("/");
});

app.post("/work", function (req, res) {
  let item = req.body.nextItem;
  console.log(req.body);
  workItems.push(item);
  res.render("list", { listTitle: "Work", todoList: workItems });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
