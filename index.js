const express = require("express");

const app = express();

const port = process.env.port || 3500;

//routes

app.get("/", (req, res) => {
    res.send("<h1>HELLO tout lefsf  </h1>");
})

app.listen(port, () => console.log(`listening on port ${port}`));