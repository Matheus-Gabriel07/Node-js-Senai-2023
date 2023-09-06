var http = require('http');
var data = require('./meuModulo');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("O dia e a hora atual é: " + data.diaEHora());
    res.end();
}).listen(8080);
