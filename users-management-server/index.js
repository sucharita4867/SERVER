const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (res, req) => {
  res.send("user server is available");
});

app.listen(port, () => {
  console.log(`user server started on port : ${port}`);
});
