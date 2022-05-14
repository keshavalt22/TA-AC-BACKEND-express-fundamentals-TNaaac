let express = require('express');

let app = express();
app.use(express.json());

app.use(express.urlencoded({extened: false}));

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({extened: false}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/new", (req, res) => {
    res.sendFile(__dirname + "/new.html");
})

app.post("/new", (req, res) => {
    res.json(req.body);
})

app.get("/users/:username", (req, res) => {
    let username = req.params.username;
    console.log(username);
})

app.listen(5000, () => {
    console.log('server is listening on 5k')
})