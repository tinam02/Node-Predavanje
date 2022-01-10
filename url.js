const url = require("url");
const testUrl = new URL(
  "http://testweb.com:3000/info/users.html?id=1000&status=active"
);
 
console.log(testurl.hostname)
console.log(testurl.port)
console.log(testurl.search)
