// ÉNONCÉ 1 : Écrire un algorithme pour convertir des degrés Celsuis
// en degrés Farenheit. Le résultat doit être un nombre entier (sans décimales).
// Si l'argument fourni n'est pas un nombre, l'algorithme doit retourner
// "Entréé non valide".

function converDeg(deg) {
  if (typeof deg != "number") {
    return "Entrée non valide";
  } else {
    return Math.trunc(deg * (9 / 5) + 32);
  }
}
console.log(converDeg("25"));

const degCel = (deg) =>
  typeof deg != "number" ? "Entréé non valide" : Math.trunc(deg * (9 / 5) + 32);
console.log(degCel(15));

// ÉNONCÉ 2 : Écrire un algorithme qui prend une chaîne de caractères en argument
// et retourne cette chaîne inversée.

function reverseText(str) {
  return str.split("").reverse().join("");
}
console.log(reverseText("bonjour à tous"));

const textReverse = (str) => str.split("").reverse().join("");
console.log(textReverse("salut tout le monde"));

// ÉNONCÉ 3 : trouver le nombre compris entre 1 et 100.
const tabNumber = Array.from({ length: 100 }, (_, i) => i + 1);
const numberToGuess = Math.floor(Math.random() * tabNumber.length) + 1;

function sampleSearch(tabNumber, numberToGuess) {
  return tabNumber.indexOf(numberToGuess);
}

const index = sampleSearch(tabNumber, numberToGuess);
console.log(
  `Le nombre à deviner est ${numberToGuess} et son index est ${index}`,
);

class MyArray {
  constructor() {
    this.elem = new Array(0);
  }

  addItemAtBeginning(item) {
    const arr = new Array(this.elem.length + 1);
    arr[0] = item;
    for (let i = 0; i < this.elem.length; i++) {
      arr[i + 1] = this.elem[i];
    }
    this.elem = arr;
  }

  addItemAtEnd(item) {
    const arr = new Array(this.elem.length + 1);
    // Ici c'est avec la boucle for
    for (let i = 0; i < this.elem.length; i++) {
      arr[i] = this.elem[i];
    }
    arr[this.elem.length] = item;
    this.elem = arr;
  }

  addItemAtEndV2(item) {
    const arr = new Array(this.elem.length + 1);
    // Ici c'est avec la boucle while
    let i = 0;
    while (i < this.elem.length) {
      arr[i] = this.elem[i];
      i++;
    }
    arr[i] = item;
    this.elem = arr;
  }

  addItemAtPosition(item, position) {
    if (position < 0 || position > this.elem.length) {
      throw new Error("The position " + position + " in the array is invalid.");
    } else {
      const arr = new Array(this.elem.length + 1);
      for (let i = 0; i < this.elem.length + 1; i++) {
        if (i === position) {
          arr[i] = item;
        } else if (i < position) {
          arr[i] = this.elem[i];
        } else {
          arr[i] = this.elem[i - 1];
        }
      }
      this.elem = arr;
    }
  }

  removeItemAtBeginning() {
    if (this.elem.length === 0) {
      return;
    } else {
      const arr = new Array(this.elem.length - 1);
      for (let i = 1; i < this.elem.length; i++) {
        arr[i - 1] = this.elem[i];
      }
      this.elem = arr;
    }
  }

  removeItemAtEnd() {
    if (this.elem.length === 0) {
      return;
    } else {
      const arr = new Array(this.elem.length - 1);
      for (let i = 0; i < this.elem.length - 1; i++) {
        arr[i] = this.elem[i];
      }
      this.elem = arr;
    }
  }

  removeItemAtPosition(position) {
    if (!this.elem[position]) {
      return;
    } else {
      const arr = new Array(this.elem.length - 1);
      for (let i = 0; i < this.elem.length; i++) {
        if (i < position) {
          arr[i] = this.elem[i];
        } else if (i > position) {
          arr[i - 1] = this.elem[i];
        }
      }
      this.elem = arr;
    }
  }
}

const myArr = new MyArray();
myArr.addItemAtBeginning("a");
myArr.addItemAtEnd("r");
myArr.addItemAtEndV2("a");
console.log(myArr.elem);

myArr.addItemAtPosition("f", 0);
myArr.addItemAtPosition("b", 3);
console.log(myArr.elem);

myArr.removeItemAtBeginning();
console.log(myArr.elem);

myArr.removeItemAtEnd();
console.log(myArr.elem);

myArr.removeItemAtPosition(2);
console.log(myArr.elem);
myArr.removeItemAtPosition(1);
console.log(myArr.elem);

function moveMaxNumberToFront(tab) {
  let maxNumber = tab[0];
  for (let i = 1; i < tab.length; i++) {
    if (tab[i] > maxNumber) {
      maxNumber = tab[i];
    }
  }
  return maxNumber;
}

const numbs = [9, 7, 15, 13, 21];
console.log(moveMaxNumberToFront(numbs));

const arra = [9, 83, 77, 53];

arra.sort((a, b) => a - b);
console.log(arra);

let nombres = [3.14, 1, 2.65, 5, 10, 1.59];
let numbrs = nombres.toSorted((a, b) => a - b);

// Tri des nombres en utilisant une fonction de comparaison

console.log(nombres); // Affichera [3.14, 1, 2.65, 5, 10, 1.59]

console.log(numbrs); // Affichera [1, 1.59, 2.65, 3.14, 5, 10]

function converDegCelFar(degCel) {
  if (typeof degCel !== "number") {
    throw new Error("Données entrées non valides");
  }
  let degFar = Math.trunc(degCel * (9 / 5) + 32);
  return degFar;
}

console.log(converDegCelFar(7)); // Affiche 44

// CODE ERRONÉ
function smallNumber(numb) {
  let smallestNumber = [0]; // ici c'est le tableau numb que je dois initialisé sur 0, Pas juste mettre un 0 seul
  for (let i = 1; i < numb.length; i++) {
    if (i > smallestNumber) {
      // c'est le symbole "<" et non pas ">"
      // ici pareil, c'est le tableau "numb" à l'index 0, qque je dois vérifier si il est bien toujoursle plus petit
      [i] = smallestNumber; // ici pareil c'est le index du tableau numb que j'envoi dans ma variable, qui affiche le plus petit nombre
    }
  }
  return smallestNumber;
}

// CORRECTION DU CODE
function smallNumber(numb) {
  let smallestNumber = numb[0];
  for (let i = 1; i < numb.length; i++) {
    if (numb[i] < smallestNumber) {
      smallestNumber = numb[i];
    }
  }
  return smallestNumber;
}

const nombrs = [3, 7, 2, 9, 5];
console.log(smallNumber(nombrs)); // Affiche 2

console.log("5" - 1);

// Listes Chainées

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addFirst(value) {
    let current = this.head; // ← Au moment où cette ligne est exécutée, "current" pointe vers le premier nœud.
    if (!current) {
      // ↑ Veut dire : "S'il n'y a pas de premier nœud"
      this.head = new Node(value);
    } else {
      this.head = new Node(value, current);
    }
    this.size++;
  }

  addLast(value) {
    let current = this.head; // ← Au moment où cette ligne est exécutée, "current" pointe vers le premier nœud.
    if (!current) {
      // ↑ Veut dire : "S'il n'y a pas de premier nœud"
      this.head = new Node(value);
    } else {
      while (current.next) {
        // Cette ↑ expression veut dire : tant qu’il y a un nœud suivant à afficher ou à accéder.
        current = current.next; // Veut dire : current est le **nœud suivant** - current est maintenant assigné au **nœud suivant** dans la liste
      }
      // Ici, current devient un nouveau nœud, isolé de la liste existante
      current.next = new Node(value);
    }
    this.size++;
  }

  add(value, position) {
    if (position < 0 || position > this.size) {
      throw new Error("Position out of bounds"); // Position hors limites.
    } else if (position === 0) {
      this.head = new Node(value, this.head);
    } else {
      let current = this.head;
      while (position - 1) {
        current = current.next;
        position--;
      }
      current.next = new Node(value, current.next);
    }
    this.size++;
  }

  printList() {
    let current = this.head;
    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }
    console.log("null");
  }
}

const linkedList = new LinkedList();
linkedList.addFirst("b");
linkedList.addFirst("a");
linkedList.addLast("c");
linkedList.add("e", 3);
linkedList.printList();
