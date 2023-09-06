var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile("demo.html", function (e, dados) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(dados);
      return res.end();
    });
  })
  .listen(8080);
