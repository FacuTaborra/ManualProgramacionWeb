
const port = 3000;
const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname, "../public");
const viewsPath = path.resolve(__dirname, "./views/pages");

//--------------RequireRouters-----------------------------

const mainRouter = require("./routes/main");

//--------------Setting------------------------------------

app.use(express.static(publicPath));
app.set("view engine", "ejs");
app.set("views", viewsPath);

app.listen(port, () => {
    console.log("Servidor corriendo correctamente en el puerto " + port);
})

app.use('/', mainRouter);