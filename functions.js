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
