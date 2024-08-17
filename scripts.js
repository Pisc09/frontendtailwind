function myfunc() {
  console.log(myfunc);
}
myfunc();

const myfuncEx = function () {
  console.log(myfuncEx);
  console.log("anonyme");
};
myfuncEx();

const myfuncNo = function Nomm() {
  console.log(myfuncNo);
  console.log("nommée");
};
myfuncNo();

const funFlc = () => {
  console.log(funFlc);
  console.log("fléchéé");
};
funFlc();

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ PROTÉGER LA FONCTION PAR DES CONDITIONS ***SI ON EXÉCUTE PAS LA FONCTION AVEC UN ARGUMENT*** ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

function Param(para = "default") {
  if (para) {
    console.log(para.toLocaleUpperCase()); // Affiche "DEFAULT" dans la console si aucun argument n'est passé
  }
}
Param(); // Appel de la fonction sans argument

// *********************************************************************************

function Param2(para) {
  if (para) {
    console.log(para.toLocaleUpperCase()); // Affiche "ARGU" dans la console si un argument est passé
  }
}
Param2("argu"); // Appel de la fonction avec l'argument "argu"

// *********************************************************************************

function Param3(para) {
  console.log(para); // Affiche 'undefined' dans la console si aucun argument n'est passé
}
Param3(); // Appel de la fonction sans argument

// *********************************************************************************

function Param4(para) {
  para = para || "Default4";
  console.log(para); // Affiche "Default4" dans la console si aucun argument n'est passé
}
Param4(); // Appel de la fonction sans argument

// *********************************************************************************

function Param5(para) {
  if (!para) {
    para = "default";
  }
  console.log(para.toLocaleUpperCase()); // Affiche "ARGU5" dans la console si un argument est passé
}
Param5("argu5"); // Appel de la fonction avec l'argument "argu5"
