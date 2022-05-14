let express = require('express');

let logger = require('morgan');

let cookieParser = require('cookie-parser');

let app = express();

app.use(cookieParser());

app.use("/about", (req, res, next) => {
    res.cookie("username", "keshav");
    next();
})

app.use((req, res, next) => {
    console.log(req.cookies);
    next();
})

app.use(logger('dev'));

app.listen(2000, () => {
    console.log('server is listening on 2k')
})
