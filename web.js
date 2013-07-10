var express = require('express');
fs = require('fs')

var app = express.createServer(express.logger());



fs.readFile('index.html', function (err,data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
    var fileContents = new Buffer(data, "utf-8");
    app.get('/', function(request, response) {
        response.send(fileContents.toString("utf-8"));
    });
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
