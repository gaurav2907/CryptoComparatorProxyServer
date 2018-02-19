let express = require('express');
let app = express();

//local file imports
let requestBoss = require('./getpuller/RequestBoss.js');

app.get('/crypto/:key', (req, res) => {
    var checkKey = req.params.id;
    console.log(checkKey);
    requestBoss.getHandler().then((response) => {
        console.log("===========things are inside==========");
        JSON.stringify(response);
        res.status(200).send(response);
    }, (error) => {
        res.status(500).send("things are invalid");
    }
    );
})

app.listen(3000);



