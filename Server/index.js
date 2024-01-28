require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/questions", require("./controllers/questions"));
app.use('/users', require('./controllers/user'))

app.listen(process.env.PORT, console.log(`listening on port ${process.env.PORT}`));
