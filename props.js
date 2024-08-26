// function funProp(prop) {
//   console.log(prop.message);
// }

// funProp({ message: "message de pisco" });

function funProp(prop) {
  console.log(prop.message);
  anotherFunction(prop.message);
}

function anotherFunction(message) {
  console.log("Message from another function: " + message);
}

let prop = { message: "Hello, world!" };
funProp(prop);

// <!-- ↓ Autres ↓ -->

function fun(para = "default") {
  console.log(para.toLowerCase());
}
fun("message de pisco");
