const express = require("express");
const app = express();
const cors = require("cors");
const BodyParser = require("body-parser");
// const bearerToken=require('express-bearer-token')

const PORT = 2020;

app.use(cors());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome to Backend</h1>");
});

const { authRouter } = require("./routers");

app.use("/auth", authRouter);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
