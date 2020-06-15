let leftNumber = 22;
let rightNumber = 27;

// Exercice 3.1
function check(leftNumber, rightNumber) {
  if (leftNumber > rightNumber) {
    console.log('true');
  } else {
    console.log('false');
  }
}
check(leftNumber, rightNumber);

// Exercice 3.2 une fonction qui vérifie si la variable leftNumber est plus grande que 10, si oui, retournez true, sinon, retournez false.
function check10(leftNumber) {
  if (leftNumber > 10) {
    console.log('true');
  } else {
    console.log('false');
  }
}
check10(leftNumber);

// Exercice 3.3 fonction qui vérifie si les variables leftNumber et rightNumber sont divisibles par deux, si oui, renvoyez "true", sinon, renvoyez "false"
function check2(leftNumber, rightNumber) {
  function modulo(n) {
    let parDeux = 2;
    let calcul = n % parDeux;
    if (calcul === 0) {
      return 0;
    } else {
      return 1;
    }
  }
  if ((modulo(leftNumber) == 0, modulo(rightNumber) == 0)) {
    console.log('true');
  } else {
    console.log('false');
  }
}
check2(leftNumber, rightNumber);

// Exercice 3.4
let studentArray = [
  'Lionel',
  'Aliyou',
  'Sarra',
  'Regine',
  'Marie Solange',
  'Nathalie',
  'Edouard',
  'Samantha',
  'Yana',
  'Thierry',
  'Jeremie',
];
console.log(studentArray[6]);

// Exercice 3.5
console.log(studentArray[8]);

// Exercice 3.6
let student = { name: 'Snytko', firstname: 'Yana', age: 22 };
console.log(student);

// Exercice 3.7
console.log(student.firstname);
