require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const methodOverride = require("method-override");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cors({ origin: "http://localhost:3000" }));
app.use("/questions", require("./controllers/questions"));

app.listen(process.env.PORT);
