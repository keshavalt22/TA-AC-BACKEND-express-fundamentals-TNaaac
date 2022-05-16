//require
let express = require("express");

let logger = require("morgan");

let cookieParser = require("cookie-parser");

//instantiate the app
let app = express();

//middlewares

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use(express.static(__dirname + "/public"));

app.use(logger("dev"));

app.use(cookieParser());

app.use("/admin", (req, res, next) => {
    next("Unauthorized user");
})

app.use((req, res, next) => {
    let count = req.cookies.count;
    if(count) {
        res.cookie("count", Number(count) + 1);
    } else{
        res.cookie("count", 1);
    }
    next();
});

//routes

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/project", (req, res) => {
    res.sendFile(__dirname + "/project.html")
})

app.get("/", (req, res) => {
    res.send('<h1>Welcome To AltCampus</h1>');
})

app.get("/users", (req, res) => {
    res.send('<h2>You are a student of Altcampus</h2>')
})

//error handler middleware

app.use((req, res, next) => {
    res.status(404).send("Page Not Found")
})

app.use((err, req, res, next) => {
    res.status(500).send(err);
})

//listener

app.listen(4000, () => {
    console.log("server listening on 4k")
})