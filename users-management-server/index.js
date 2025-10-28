const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("user server is available");
});
const users = [
  { id: 1, name: "farish", email: "farish@gmail.com" },
  { id: 2, name: "racho", email: "racho@gmail.com" },
  { id: 3, name: "sucho", email: "sucho@gmail.com" },
  { id: 4, name: "anu", email: "anu@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`user server started on port : ${port}`);
});
