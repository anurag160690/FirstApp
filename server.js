var express = require("express");
var app = express();

app.get('/', function (req, res) {
    res.send("Hello Express");
});

app.listen(8081, function() {
    console.log('server is running at 8081 port');
});