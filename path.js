const path = require("path"),
  test = "home/user/public/dir/plans.txt";

const name = path.basename(test),
  eks = path.extname(test),
  parent = path.dirname(test),
  info = path.parse(test);

console.log("ime je " + name);
console.log("eks je " + eks);
console.log("roditelj je " + parent);

const spoji = path.join(parent, "programiranje", "rasa.txt");
console.log(spoji);
