function capitalizeFirstLetter(string) {
  return string.replace(/^\w/, (c) => c.toUpperCase());
}

function func(para = "default") {
  console.log(para.toUpperCase());
}
func();

function fun2(para) {
  if (para) {
    console.log(capitalizeFirstLetter(para));
  }
}
fun2();

// const fs = require("fs");

// fs.readFile("example.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

class MyEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (typeof listener !== "function") {
      throw new Error("Listener must be a function");
    }
    this.events[event] = this.events[event] || [];
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(...args));
    }
  }
}

const emitter = new MyEmitter();

emitter.on("FILE_READ", () => {
  console.log("file was read");
});

emitter.on("FILE_READ", () => {
  console.log("file was save");
});

emitter.emit("FILE_READ");

const fs = require("fs");

// fs.mkdir("./mondossier", (err) => {
//   console.log(err);
// });

// const http = require("server"); ← mes erreurs
// let server = http.((req, res), err => {throw (err)}) ← mes erreurs

// après correction ↓
// const http = require("http");
// const server = http.createServer();

// server.on("request", (req, res) => {
//   console.log("go to request");
//   res.end();
// });

// server.listen(9001);

// ↓ La version copilot, plus complet pour le client
const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  // console.log(req);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const obj = {
    key: "value",
  };
  res.end(JSON.stringify(obj));
});

server.listen(9001, () => {
  console.log("Le serveur écoute sur le port 9001");
});

// const http = require("http");
// const server = http.createServer();

// server.on("request", (req, res) => {
//   console.log(res);
//   res.end();
// });

// server.listen(9001);

// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log("got a request");
//   res.end();
// });

// server.listen(9001);

let lettre = [];
let alphabet = lettre;

for (let i = 0; i < 26; i++) {
  alphabet.push(String.fromCharCode(65 + i));
}
console.log(alphabet);

const lettAlphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i),
);
console.log(lettAlphabet);

const n = 3;
const digitNumb = Array.from({ length: 10 }, (_, i) => i);
digitNumb.sort((a, b) => a - b);

const a = "mots";
const b = new String("mots");
const c = String("mots");
const d = String(55);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
