//Insérez ici les exercices 2.1 à 2.4

// Exercice 2.1 (compliqué)
function square(n) {
  console.log(n ** 2);
}

square(2);
square(4);
square(8);
square(16);

// Exercice 2.2
/*function modulo(n) {
  let parDeux = 2;
  console.log(n % parDeux);
}

modulo(3);
modulo(178);
modulo(65);
modulo(98);
modulo(123);*/

function modulo(n) {
  let calcul = n % 2;
  if (calcul === 0) {
    console.log(`Le nombre ${n} est divisible par deux !`);
  } else {
    console.log(`Le nombre ${n} n'est pas divisible par deux !`);
  }
}

modulo(3);
modulo(178);
modulo(65);
modulo(98);
modulo(123);

// Exercice 2.3
function cout(prix, remise) {
  let percent = 100 - remise;
  let calcul = percent / 100;
  return prix * calcul;
}
console.log(cout(79.99, 19));

// Insérez ici les exercices 2.4 à 2.8 en utilisant les variables déjà créées à votre disposition
let firstNumber = 9;
let secondNumber = 8;
let thirdNumber = 4;
let fourthNumber = 12;

// Exercice 2.4
console.log((firstNumber = firstNumber / 3));

// Exercice 2.5
console.log((secondNumber = firstNumber + secondNumber));

// Exercice 2.6
console.log((thirdNumber = firstNumber * thirdNumber));

// Exercice 2.7
console.log((fourthNumber = fourthNumber - firstNumber));

// Exercice 2.8 Incrémentation
// BASE
/* function incrementOnClick() {
  document.getElementById("increment").addEventListener("click", function decrement() {
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice sur la décrémentation, nous verrons plus tard à quoi ces lignes pré-existantes correspondent
      let incrementCounter = 0;
      console.log("Incrémentez")
})};
*/

// Test simple
/* function incrementOnClick() {
  document
    .getElementById('increment')
    .addEventListener('click', function increment() {
      let incrementCounter = 0;
      console.log('Incrémentez ' + ++incrementCounter);
    });
}
 */

// Test compliqué
/* let incrementCounter = 0;
function incrementOnClick() {
  document
    .getElementById('increment')
    .addEventListener('click', function increment() {
      if (incrementCounter <= 100) {
        console.log(++incrementCounter + ' Incrémentez encore !');
      } else {
        console.log('On est arrivé tout en haut !');
      }
    });
} */

// sans conflit avec HTML
let counter = 0;
let incrementOnClick = () => {
  counter = ++counter;
  console.log(counter);
};

// Exercice 2.9 Décrémentation

// BASE
/* function decrementOnClick() {
    document.getElementById("decrement").addEventListener("click", function increment() {
        // Insérez ici le bout de code nécessaire à la réalisation de l'exercice sur la décrémentation, nous verrons plus tard à quoi ces lignes pré-existantes correspondent
        let decrementCounter = 100;
        console.log("Décrémentez");
})};
*/

// Test simple
/* function decrementOnClick() {
  document
    .getElementById('decrement')
    .addEventListener('click', function increment() {
      let decrementCounter = 100;
      console.log('Décrémentez ' + --decrementCounter);
    });
}
*/

// Test compliqué
/* let decrementCounter = 100;
function decrementOnClick() {
  document
    .getElementById('decrement')
    .addEventListener('click', function decrement() {
      if (decrementCounter >= 1) {
        console.log(--decrementCounter + ' Décrementez encore !');
      } else {
        console.log('On est arrivé à la fin !');
      }
    });
} */

// sans conflit avec HTML
let decrementOnClick = () => {
  counter = --counter;
  console.log(counter);
};
