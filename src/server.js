let express = require("express");
let path = require("path");
let engine = require("ejs-mate");
let fileUpload = require("express-fileupload");
const getterRouter = require("./routers/allGetRouter");
let htmlRouter = require("./routers/htmlRouter");
const cardsRouter = require("./routers/cardsRouter");
let PORT = 3000;
let app = express();

app.use(express.json());
app.use(fileUpload());

app.use("/images", express.static(path.resolve("src", "fileUpload")));
app.use(express.static(path.resolve("src", "static")));

app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

app.use(getterRouter);
app.use(htmlRouter);
app.use("/api", cardsRouter);

app.listen(PORT, () => console.log("listen to " + PORT));
