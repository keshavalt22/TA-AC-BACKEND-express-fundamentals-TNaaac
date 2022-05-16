let express = require("express");

let app = express();

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})

app.listen(4000, () => {
    console.log("Server listening on 4k")
})