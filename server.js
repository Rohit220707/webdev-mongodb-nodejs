const express = require("express");
require("dotenv").config();
require("./database/conn");
const bodyParser = require("body-parser");
const user_model = require("./model/user_model");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 5000 || process.env.PORT;
app.use(bodyParser.json());

//starting route to check health of server
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from express server" });
});

app.use("/", require("./controller/auth"));
app.use("/", require("./controller/product"));
app.use("/", require("./controller/user"));

//Not found
app.use((req, res) => {
  res.status(404).json({
    error: "Not found",
    message: "The requested route does not exist",
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("server failed to start", err);
    return;
  }
  console.log(`Server is running on port ${PORT} `);
});
