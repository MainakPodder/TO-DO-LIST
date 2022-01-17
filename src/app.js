const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const PORT = process.env.PORT || 8000;

const static_path = path.join(__dirname,"../public");
const views_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.set("view engine","hbs");
app.set("views",views_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));

app.get("/",(req,res) => {
    res.render("index");
});
app.get("*",(req,res) => {
    res.render("404");
});

app.listen(PORT,() => {
    console.log(`Server is listening at : http://localhost:${PORT}`);
});