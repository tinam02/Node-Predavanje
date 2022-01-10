const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //sadrzaj i tip fajla

  //kad korisnik ukuca sajt odmah ide na index
  let contentFile, contentType;
  contentFile = req.url; //dobija se ruta (sve posle npr 3000)

  //korisnik trazi contentfile a ja vracam contenttype

  if (req.url == "/") {
    contentFile = "index.html";
  }

  //ako contentfile nije kosa crta pisace sta zahteva klijent
  const ext = path.extname(contentFile);

  switch (ext) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".html":
      contentType = "text/html"; //default
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    default:
      contentType = "text/html";
  }

  const contentPath = path.join(__dirname, "public", contentFile); //putanja do bilo kog fajla

  //citanje fajla, ako postoji ucitaj a ako ne 404;
  fs.readFile(contentPath, (err, content) => {
    //prvo da li je greska da ne bi isao dalje
    if (err) {
      if (err.code == "ENOENT") {
        //no such file or directory
        const path404 = path.join(__dirname, "public", "404.html");
        fs.readFile(path404, (err, content) => {
          res.writeHead(400, { "Content-Type": "text/html" });
          res.write(content);
          res.end();
        });
      } else {
        res.writeHead(500, "Server error");
        res.end();
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });

      res.write(content);
      res.end();
    }
  });
});
server.listen(3000, () => {
  console.log(`OK`);
});
