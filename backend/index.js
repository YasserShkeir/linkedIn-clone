const express = require("express");
require("dotenv").config();
require("./config/db.config");
const app = express();
app.use(express.json());

app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running in Port: ${process.env.PORT}`);
});