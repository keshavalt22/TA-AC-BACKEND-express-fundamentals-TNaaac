let express = require('express');

let app = express();

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})

app.get('/', (req, res) => {
    res.send('Welcome to AltCampus')
})

app.listen(4000, () => {
    console.log('server is listening on 4k')
})