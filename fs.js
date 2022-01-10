const fs = require("fs");
// fs.readFile("fss.txt", "utf-8", (err, data) => {
//   //bez utf-8 pise bitove
//   //err ispali ako postoji greska
//   if (err) {
//     throw err;
//   }
//   console.log("Sadrzaj: " + data);
// });
// //upisivanje u radovan.txt
// var content = "Zdravo";
// fs.writeFile("radovan.txt", content, (err) => {
//   //err ispali ako postoji greska
//   if (err) {
//     throw err;
//   }
// });

//!Stream;
var reader = fs.createReadStream("fss.txt");
reader.setEncoding("utf-8");
var ispis = "";
// *Citanje
reader.on("data", function (string) {
  //on je listener u nodejsu
  console.log(`Data:`);
  ispis += string;
});
//*Zavrsetak citanja
reader.on("end", function () {
  console.log(ispis);
});
// *Hendlovanje greske
reader.on("error", function (err) {
  console.log(err.message); //message ili stack
});

