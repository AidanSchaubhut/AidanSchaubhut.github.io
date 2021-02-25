const http = require("http");
let port = process.argv[2];

http.createServer(function(req,res){
  // handle response
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('It is way ');
  res.end('too cold right now');
}).listen(port);

console.log(process.argv)