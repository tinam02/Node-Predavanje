const fs = require("fs");
fs.readFile("fss.txt", "utf-8", (err, data) => {
  //bez utf-8 pise bitove
  //err ispali ako postoji greska
  if (err) {
    throw err;
  }
  console.log("Sadrzaj: " + data);
});
//upisivanje u radovan.txt
var content = "Zdravo";
fs.writeFile("radovan.txt", content, (err) => {
  //err ispali ako postoji greska
  if (err) {
    throw err;
  }
});
