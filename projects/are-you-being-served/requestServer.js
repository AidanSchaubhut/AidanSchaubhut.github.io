// requestServer.js file
const http = require("http");
const request = require("request");
var args = process.argv.slice(2);
var port = 8686;

var server = http.createServer(function(req, res){
    var url = args[0] ? args[0] : "https://github.com/";
    request(url, function(error, response, body){
        if(!error && response.statusCode === 200){
            res.writeHead(200, {"Content-Type": 'text/html'})
            res.write(body);
            console.log("running");
            res.end();
        } else{
            res.writeHead(response.statusCode, {"Content-Type": "text/plain"})
            res.write(error.toString());
            res.end();
        }

    });
});
server.listen(port);