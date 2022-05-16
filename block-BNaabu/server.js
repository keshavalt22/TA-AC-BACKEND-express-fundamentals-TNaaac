let express = require('express');

let app = express();

app.use("/admin",(req, res, next) => {
    next("Unauthorized")
})

app.get("/", (req, res) => {
    res.send("Welcome");
})

app.get("/about", (req, res) => {
    res.send("About Page");
})

app.use((req, res, next) => {
    res.send("page not found!");
})

app.use((err, req, res, next) => {
    res.send(err);
}) 

app.listen(5000, () => {
    console.log('server is listening on 5k')
})