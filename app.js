const express = require("express");
const app = express();
const path = require ("path")
const routes = require ("./routers/main")

const publicPath = path.resolve (__dirname, "./public");
app.use (express.static(publicPath))

app.listen(3000, () =>{
    console.log ("Server Run");
});

app.use ("/", routes );
