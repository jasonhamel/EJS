import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let numberOfCharacters = 0;

app.get("/", (req, res) => {
  if (numberOfCharacters == 0) {
    res.render("index", { numberOfCharacters: "Enter your name below" });
  } else {
    res.render("index", {
      numberOfCharacters:
        "There are " + numberOfCharacters + " characters in your name!",
    });
  }
});

app.post("/submit", (req, res) => {
  numberOfCharacters = req.body.fName.length + req.body.lName.length;
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
