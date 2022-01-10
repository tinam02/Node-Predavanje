//poenta servera je da prima zahtev,obradjuje ga i salje odgovor
//to se nalazi u http modulu

const http = require("http");
const datum = require("./modul");

//kreiranje servera
http
  .createServer(function (req, res) {
    //mora prvo request pa response;

    //vrati danasnji datum korisniku koji pozove server
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`Danas je ${datum.myDate()}`);
    res.end();
  })
  .listen(3000);
