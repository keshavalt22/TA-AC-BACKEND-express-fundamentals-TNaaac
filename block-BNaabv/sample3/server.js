let express = require("express");

let logger = require("morgan");

let cookieParser = require("cookie-parser");

let app = express();

app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use(cookieParser());

app.use("/admin", (req, res, next) => {
    next("Unauthorized user")
})

app.use((req, res, next) => {
    res.cookie("count", 1);
    next();
})

app.post("/form", (req, res) => {
    res.json(req.body);
})

app.post("/json", (req, res) => {
    res.send(req.body);
})

app.get("/", (req,res) => {
    res.send(`<h2>Welcome to express</h2>`)
})

app.get("/about", (req, res) => {
    res.send('My name is qwerty')
})

app.get("/users/:username", (req, res) => {
    var username = req.params.username;
    res.send(`<h2>${username}</h2>`);
})

app.use((req, res, next) => {
    res.status(404).send("Page Not Found!");
})

app.use((err, req, res, next) => {
    res.status(500).send(err);
})

app.listen(3000, () => {
    console.log('server is listening on 3k')
})