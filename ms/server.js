const express = require("express");
const cors = require("cors");

const dbConfig = require("./config/db.config");
const packagejson = require("./package.json");

const app = express();

const corsOption = {
  origin: "*",
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./src/models");

console.log(`connecting to database ${dbConfig.HOST}`);
db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("connection error");
    console.log(err);
  });

app.get("/", (req, res) => {
  res.json({
    message: "training service is OK !",
    version: packagejson.version,
  });
});

require("./src/routes/training.route")(app);
require("./src/routes/exercice.route")(app);

const port = process.env.PORT || 5002;

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
