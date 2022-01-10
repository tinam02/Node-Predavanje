const events = require("events");
const EventEmitter = require("events");
// kreiranje emitera
// postoji klasa koja se zove event emitter, pravi se klasa koja je nasledjuje;
class MathEmitter extends EventEmitter {}
const mathEmitter = new MathEmitter();

//listener ceka saberi
// mathEmitter.on("saberi", function (a, b) {
//   console.log(a + b);
// });

 //jednom
mathEmitter.once("saberi", function (a, b) {
 
  setImmediate(() => {
    console.log(a + b);
  });
});

//emitovanje dogadjaja
mathEmitter.emit("saberi", 5, 6);
mathEmitter.emit("saberi", 5, 5);
