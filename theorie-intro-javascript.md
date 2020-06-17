# Vos premiers pas en Javascript

## Introduction

Le Javascript ça sert à quoi? 
Il fut un temps où l'utilisation du J.S. se résumait à l'animation de certains composants web. De nos jours la totalité d'un contenu web peut être codé en Javascript, autant du côté front-end que back-end, ce qui fait de lui un langage prédominant sur le marché, voir indispensable.
Les standards ECMAscript reprennent les bonnes pratiques actuelles. Avec les années le langage s'enrichi et s'étoffe de nouvelles fonctionnalités, parfois utiles, parfois performantes, parfois non. Les standards ECMAscript sont là pour indiquer au développeur ce qui est recommandé d'utilisation.

Comme nous venons de l'aborder, le Javascript est donc à la base des plus gros frameworks et librairies actuelles. 
React.JS, Vue.JS, Angular, Node.JS, Express.JS, Typescript, chacun de ces langages est soit une réécriture de Javascript, soit une librairie de fonctions pré-écrite par les développeur, soit un super-set (une version améliorée et boostée du langage officiel). Il est donc primordiale de maîtriser la base pour être capable de travailler avec ces langages plus avancés.

## Table des matières

- [Vos premiers pas en Javascript](#vos-premiers-pas-en-javascript)
  - [Introduction](#introduction)
  - [Table des matières](#table-des-matières)
  - [Fichiers](#fichiers)
  - [Chapitres](#chapitres)
    - [Les variables](#les-variables)
    - [Les types](#les-types)
    - [Les opérateurs](#les-opérateurs)
    - [Les fonctions](#les-fonctions)
    - [Les conditions](#les-conditions)
  - [Conclusion](#conclusion)

## Fichiers

L'introduction en Anglais de Codecademy (uniquement les exercices disponnibles en version gratuite): https://www.codecademy.com/learn/introduction-to-javascript
Le cours en français d'OpenClassRoom: https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript

## Chapitres

### Les variables

Une variable est un conteneur. Elle contient les informations dont nous avons besoin pour les fonctionnalités de notre application, notre site.
Une variable c'est par exemple:

```js
const firstname = "Julie";
```

const (pour constante) détermine la portée de la variable, en l'occurence elle ne peut être réassignée à une nouvelle valeur car c'est une valeur constante, en effet, mon prénom est Julie et sauf demande express' de ma part aux autorités communales, il en restera tel quel toute ma vie.

let défini une variable dont la valeur est réassignable, par exemple:

```js
let javascriptTeacher = "Julie";
```

Nous ne sommes à l'abris de rien, un évennement m'empechant de donner cours pourrait avoir lieu, un remplaçant serait donc désigné, cette variable doit donc pouvoir être réassignable si besoin.

Décortiquons un peu plus la synthaxe:

let ou const désignent la portée de la variable.
firstName est le nom donné à ma variable. Un nom de variable est unique. Un bon nom de variable est défini par la clareté de son utilité (il n'y a pas de doute possible quant à l'utilité de ma variable firstname, elle se réfère à un prénom). 
Un nom de variable débute toujours par une **lettre minuscule** si elle comporte plusieurs mots (tel que dans l'exemple "javascriptTeacher") la première lettre du second mot sera toujours écrite en majuscule. On appelle cette pratique le "camelCase" https://en.wikipedia.org/wiki/Camel_case il s'agit ici d'un cas de bonne pratique en matière de rédaction de code Javascript.

= pointe l'assignation de la variable à une valeur. 
"" défini le type de la variable sur "chaîne de caractère", nous verrons dans le chapitre suivant les différents types de variables, il peut s'agir d'un nombre, d'un texte, d'un booléen (vrai ou faux), d'un array (tableau de plusieurs éléments), etc;
Julie est l'information contenue dans la chaîne de caractère.
Le point virgule désigne la fin de la ligne, le navigateur comprend qu'il doit passer à la ligne suivante et continue la lecture du code. Si vous vous abstenez d'ajouter le point virgule il peut arriver des erreurs de lectures de votre navigateur. Il est donc indispensable de toujours l'ajouter quand vous passez à la ligne après avoir terminé une ligne de code .

Voici quelques exercices pour vous entraîner à utiliser les variables:
<!-- Insérez ici le lien vers les exos -->

### Les types

Javascript est langage dit "typé", la bonne pratique veut que pour chaque nouvelle variable, nous "déclarions"/ indiquions son type.
Par type on entend:
Est ce que ma variable est un nombre?
Est ce une chaine de caractère?
Est ce un booléen (vrai ou faux)?
Est ce que ma variable est un tableau?
Ou un objet?
Nous y reviendrons plus tard mais l'ensemble du langage est basé sur les objets, on dit de lui qu'il est orienté objet. Il s'agit d'une notion plus avancée que nous aborderons plus tard mais il est toujours utile pour vous de le mentionner.

**1. Chaine de caractères:** Une chaîne de caractère représente un texte, elle peut contenir l'ensemble des caractères reconnu de votre clavier DONT des chiffres. Les chiffres seront ici interprêté sous forme de caractère et ne pourront pas être utilisé comme une variable typée nombre. Pour ne pas être trop compliqué dans cette explication retenez que si vous essayés d'additionner "1" et "2" (les guillemets définissent une chaîne de caractère), le résultat sera "12" et non pas 3.
On dit alors qu'il s'agit non pas d'une addition mais d'une concaténation.
Pour toute opération sur des chiffres retenez qu'il faut que la variable soit donc typée "number" (nombre). Dans ce cadre une variable typée nombre s'écrira sans les guillemets et le résultat de 1 + 2 sera bien 3.

Voici un exemple de chaîne de caractère:

```js
const firstName= "Julie";
let age = "30 ans";
```

Comme nous l'avons vu précédement ma variable est préfixée `let` ou `const` en fonction de sa portée, son nom est le plus explicite possible (firstName), elle est attribuée grâce au signe `=` déclarée chaîne de caractère grâce aux guillemets `" "`, et pour terminé, comme à chaque fin de déclaration le `;` qui indique au navigateur de passer à la ligne suivante.

Imaginons que je souhaite afficher les valeurs de ces variables dans ma console:

```js
console.log(firstname + " " + age);
```

Le résultat affiché serait "Julie 30 ans". Cette opération s'appelle une concaténation. Le `+` est l'opérateur, il permet aux chaînes de caractères contenues par `firstname` et `age` d'être enchaînées. Si vous êtes attentifs vous aurez remarqué que j'ai ajouté des guillemets avec un espace vide, il permet aux deux chaînes d'être coupé par un espace, si je ne l'avais pas fais le résultat affiché serait "Julie30 ans".


**2. Nombres:**

Grâce aux nombres vous pourrez réaliser un tas d'opérations utiles à votre application, paginations, boucles de rendu, calculs... Pas de panique, il ne faut pas être bon en math pour réaliser ces opérations, Javascript le fait pour vous, du moment où vous utilisez la bonne synthaxe afin de lui indiquer le travail qu'il a à effectuer.

Exemple de variable typée **Numbers**:

```js
let firstNumber= 1;
let secondNumber = 2;
```

Imaginons que je souhaite afficher le résultat de l'addition de ces deux nombres:

```js
console.log(firstNumber + secondNumber);
```

Le résultat (output) de cette opération sera `3`

Observez bien la différence entre les deux types de variables, pour réaliser l'opération (une addition en l'occurence) j'ai du indiquer à ma variable qu'il s'agissait d'un chiffre, pour ce faire il suffit tout simplement d'écrire vos nombres dépourvu de guillemets. 

Lorsque ma variable est typée "number" je peux réaliser des opérations mathématiques et obtenir un résultat cohérent. Si ma variable chaîne de caractères contenant des nombres je ne pourrais pas réaliser d'opérations en dehors de la concaténation. Gardez cela à l'esprit quand vous créez une nouvelle variable.

**3. Booléens:**

L'objet **Booléen** en javascript est déclaré de cette façon:

```js
let isConnected = New Boolean([valeur]);
```

Décortiquons ce bout de code:

*New* représente l'instruction, *Boolean* l'objet devant être créé, on constate la présence du constructeur *()* il indique que l'objet devant être créé doit recevoir un *paramètre* pour être construit en l'occurence *[valeur]*, cette valeur peut recevoir ***true* ou *false* qui sont des valeurs booléennes**, il est possible d'y insérer d'autres valeurs, ces dernières seront alors converties en valeur booléennes.
Par exemple: **null**, **undefined**, **0**, **-0**, ou une **chaîne de caractère vide " "**, sera convertie en false. Si la valeur insérée est **valide**, par exemple une chaîne de caractère telle que **"Salut"** elle sera convertie en **true**.

Ma variable isConnected a pour but de vérifier si mon utilisateur est connecté ou non.
Si il est connecté, la valeur attritubée sera "true" (vrai), si pas elle sera "false" (faux). Un booléen ne reçoit que ces deux valeurs "vrai" ou "faux". Elle permet de performer des actions spécifique en vérifiant si l'état de cette variable est définie sur true, ou sur false. 

Par exemple, si mon utilisateur est connecté, je peux afficher son profil sur le client, si non, le client renvois vers la page de connexion ou d'enregistrement.
Les booléens sont particulièrement utiles lorsque vous utiliserez les méthodes de conditions telles que if/else ou switch case (que nous aborderons plus loin dans le cours).

**4. Tableaux:**

Les tableaux (ou **Arrays**) sont des conteneurs plus structurés que de simples variables. Une variable ne peut contenir qu'une information à la fois, un tableau peut en contenir plusieurs.
De ce fait pour chaque information contenue dans un tableau, il lui est attribué un indice. Afin de pouvoir facilement récupérer l'information spécifique dont nous avons besoin dans ce tableau.
Le premier élément d'un tableau est attribué à l'indice 0, le second à l'indice 1, le troisième à l'indice 2, etc.

**Veillez toujours à garder à l'esprit que le premier élément d'un tableau débute à 0.**

Le tableau est un élément essentiel du langage, il permet de récupérer, stocker et manipuler facilement les données.
Pour définir le type tableau il faut indiquer à javascript que vous souhaiter créer un nouveau tableau, il existe plusieurs façon de le faire:

```js
let studentArray = New Array;
```

Dans cet exemple nous déclarons la variable studentArray et l'attribuons à "New Array;" new représente une instruction (nouveau), et Array l'objet que nous voulons créé. Il s'agit ici d'un objet global de type Array (tableau). 

```js
let studentArray = [];
```

Dans celui-ci la variable est déclarée directement avec des crochets qui correspondent à la synthaxe décrivant un tableau vide.

```js
let siriusTeamArray = ["Jeremy","Christophe","Julie","Laetitia","David","Vincent"];
```

Pouvez vous me dire quel est l'indice de Laetitia dans ce tableau ?
Dans ce dernier cas le tableau est directement déclaré avec des données.
Si vous possédez déjà les données nécessaires vous pouvez pré-remplir votre tableau comme ci dessus avec la variable siriusTeamArray, sinon vous pouvez créer un tableau vide comme les deux exemples précédents, et utiliser une fonction spécifique de javascript (que nous verrons prochainement lors de la série d'exercice sur la manipulation des tableaux) pour le remplir une fois les informations acquises.

Nous utiliserons les tableaux à maintes et maintes reprises durant notre formation et vous continuerez à les utiliser chaque jour dans votre prochain boulot de web dev en herbe.
Il est donc primordiale que cette notion soit intégérée.

Pour accéder à l'information contenue dans mon tableau je peux soit:

- Faire un rendu complet de mon tableau -> ex: `console.log(siriusTeamArray);` qui imprimera: ["Jeremy","Christophe","Julie","Laetitia","David","Vincent"]
- Choisir l'élément spécifique je veux afficher: si je connais son index -> Je souhaite afficher Laetitia sur la console: `console.log(siriusTeamArray[3]);` la console imprimera alors "Laetitia"

*Propriétés et méthodes:*

Les tableaux possèdent de nombreuses méthodes et propriétés, comme la propriété **length** qui permet de calculer le nombre d'**éléments** présents dans le tableau. Grâce à cette propriété nous pourrons utiliser des **boucles** (il s'agit ici d'une méthode) permettant de créer des opérations sur chacun des éléments du tableau, ceci nous est permis grâce aux boucles for qui utilisent l'indice courant du tableau ainsi que sa longueur pour réaliser des opérations sur chacun des éléments du tableau jusqu'à sa fin grâce à la propriété length.
Nous verrons à quoi correspondent les boucles et leur intérêt plus tard.

Retenez que les tableaux sont des éléments essentiels à la création de sites et d'applications dynamiques.

**5. Objets**

Retenez que le Javascript est un langage orienté objet. Tout est construit à partir d'un objet (variables, méthodes, fonctions...). Les objets possèdent des propriétés, on peut les comparer aux objets de la vrai vie. Par exemple je peux créer un objet Chien qui possédera comme propriété une race, une taille, un poids, une couleur de pelage, un âge, un nom. À ces propriétés viennent se joindre les valeurs correspondante au chien.
Prenons comme exemple:

```js
const chien = {
        nom: "Tania",
        age: 9,
        race: "Cocker Anglais",
        taille: "50",
        poids: "20",
        couleur: "Roux"
};
```

Les objets possèdent des propriétés et des méthodes qui leur sont propres. Les objets sont une notion complexe mais indispensable, nous verrons plus tard dans le cours et en plus de détail une introduction à la programmation orienté objet.
Pour l'instant retenez simplement la manière dont un objet se présente (comme ci dessus, par exemple, chaque valeur peut correspondre à un type, on peut donc retrouver des chapines de caractères, des nombres, des tableaux ou d'autres objets au sein même des objets).
Pour accéder aux valeurs des propriétés des objets vous pouvez simplement procéder de cette façon -> `console.log(chien.nom);` la console imprimera "Tania".

### Les opérateurs

Les opérateurs permettent de manipuler les variables. Nous avons déjà vu dans les exemples plus haut qu'il était possible d'additionner des nombres et de concaténer (mettre à la suite) des chaînes de caractères, mais il existe une multitude d'autres opérateurs.

La MDN possède une liste de ces opérateurs, dont je vais vous donner quelques exemples, ils sont essentiels à connaître par coeur pour le bon fonctionnement des manipulations que vous souhaitez réaliser sur vos données.

- `+` -> Addition
- `-` -> Soustraction
- `*` -> Multiplication
- `/` -> Division
- `=` -> Affectation
- `%` -> Modulo (retourne le reste du nombre de gauche divisé par le nombre de droite par exemple 5/2 retournera 1, 4/2 retournera 0. Le modulo permet entre autre donc de vérifier si oui ou non le chiffre de gauche est divisible par 2)
- `<` -> Le nombre de gauche est plus petit que le nombre de droite
- `>` -> Le nombre de gauche est plus grand que le nombre de droite
- `>=` -> Le nombre de gauche est plus grand ou égal au nombre de droite
- `<=` -> Le nombre de droite est plus petit ou égal au nombre de droite
- `++` -> **Incrémentation** (on augmente le nombre de 1)
- `--` -> **Décrémentation** (on diminue le nombre de 1)
- `||` -> Opérateur de comparaison "ou"
- `&&` -> Opérateur de comparaison "et"
- `===` -> Opérateur de comparaison "strictement égal à"
- `==` -> Opérateur de comparaison "égal à"
- `!==` -> Opérateur de comparaison "strictement différent de"
- `!=` -> Opérateur de comparaison "différent de"
- `+=` -> Affectation après addition
- `-=` -> Affectation après soustraction
- 
### Les fonctions

Une fonction est un ensemble d'instructions menant à la réalisation d'une tâche.
Par exemple je souhaite afficher mon prénom dans la console avec un petit message de bienvenue adapté lors de ma connexion. On peut imaginer une fonction telle que celle-ci:

```js
function helloWhenConnected(name) {
    let name = name;
    console.log("Salut" + " " + name);
};

helloWhenConnected("Julie");`

// Output console: "Salut Julie"
```

Une fonction contient un constructeur () qui peut recevoir un ou plusieurs paramètres comme dans l'exemple ci dessus (name) et les instructions à executer englobées via {}, grâce à ces éléments on devine donc que la fonction est en fait de type objet.
On la défini sous plusieurs formes, elle est déclarée à l'aide du mot clé function. Nous verrons plus tard qu'il est également possible de la déclarer sous forme d'une variable à l'aide ce que l'on appelle "fat arrow function" qui est un standard ECMAscript6.

Une fonction peut retourner une valeur, on peut par exemple l'utiliser pour réaliser des opérations:

```js
function multiplication(a, b){
    return a * b;
};
multiplication(2, 4);`

// Output console: 8
```

Dans ce bout de code on appelle la fonction à l'aide de son nom suivit de son constructeur comprenant les deux paramètres que j'ai décidé de lui attribuer (2 et 4). Vous le comprendrez, les paramètres défini lors de la construction de la fonction sont en réalité une valeur abstraite destinée à être remplacée par une donnée. Cette donnée est intégré lors de l'appel à la fonction. Pour lancer une fonction il faut en effet faire appel à elle, pour ce faire vous l'avez constaté il suffit d'indiquer le nom de la fonction désirée suivie de son constructeur () et du point virgule.

Observez la fonction helloWhenConnected et la fonction multiplication, n'y-a-t-il pas une différence dans la synthaxe?
Le mot clé return apparaît dans la seconde fonction. Sans lui le résultat de l'opération ne serait tout simplement pas retourné à l'écran.


### Les conditions

L'explication est dans le titre. Parfois, vous serez amener à performer une fonction, une série d'instructions, uniquement si une condition est remplie (ou non). Les conditions utilisent les opérateurs de comparaison pour s'aider à prendre une décision en fonction des paramètres qui leur sont fournis.
Par exemple:
J'hésite à manger une barre de chocolat plutôt qu'une pomme. Mon médecin traitant m'a fait la remarque de diminuer sur le sucre, je me renseigne sur les taux de sucres de ma barre chocolatée et de ma pomme. Celui de ma pomme est inférieur à celui de ma barre chocolatée -> je décide de manger la pomme (dans le meilleur des cas, l'erreur est humaine, pas mathématique).

Nous allons voir deux types de conditions: if...else, et switch Case.

La première: if...else est littéralement traduite par "si...sinon...". Si ma condition est remplie, je performe mon opération. Sinon je ne fais rien ou je prévois une autre opération à réaliser dans ce cadre.

Par exemple:
```js
if(isConnected === true){
    helloWhenConnected("Julie");
} else {
    redirectTo("/login")
};
```

**Si** ma variable isConnected est vérifiée à true, je lance ma fonction helloWhenConnected("Julie") **sinon**, je redirige mon utilisateur vers la page de login.
Plutôt simple non? Il suffit de dire explicitement ce que vous désirez à votre ordinateur et il s'en occupe!

Pour ce qui est du switch Case, la synthaxe et le mode de fonctionnement est assez différent. Il permet en réalité d'évaluer un plus grand nombre de conditions que dans le cadre du if...else

```js
let siriusTeamArray = ["Jeremy","Christophe","Julie","Laetitia","David","Vincent"];

switch (siriusTeamArray[0]) {
  case "Jeremy":
    console.log("Salut Jeremy")
    break;

  case "Christophe":
    console.log("Salut Christophe")
    break;

  // incorporez autant de case que vous le souhaitez
```

```js
  default:
    redirectTo("/login");
    break;
}`
```

Switch, passe de cas en cas jusqu'à trouver une égalité avec le paramètre entré dans son constructeur. SI l'indice 0 de mon tableau siriusTeamArray est égal au cas (case) "Jeremy" alors la console print console.log("Jeremy") et la vérification des cas suivant se stop à l'aide du mot clé "break;" (indispensable sinon le code entre dans une boucle infinie, c'est à dire le meilleur moyen pour faire planter votre navigateur). Sinon il passe au cas suivant.

## Conclusion

Vous voici avec une première introduction au langage et à sa synthaxe. Nous allons maintenant pouvoir passer aux exercices. 
Pour réaliser ces exercices, aidez vous des ressources que je vous ai indiqué dans le dossier ressources. Gardez la théorie à portée de main. Réalisez l'ensemble des séries d'exercices, aucun n'est dispensatoire.

Bon travail!
