# Quelques balises pour mettre en forme

Maintenant qu'on en sait un peu plus sur comment est structuré une page web basique, voyons un peu comment mettre tous ça en page.

Il existe une multitude de balises à utiliser pour rédiger un document HTML, nous verrons les plus utiles. Surtout n'hésite pas à consulter la documentation officielle pour en savoir plus et en découvrir d'autre.

> :bulb: Ouvrez VS code et expérimentez les balises qu'on va voir à partir d'ici. Pas besoin de grand chose, juste un fichier .html avec ces balises suffiront ou tu peux reprendre le squelette créer précédemment.

## La balise \<div>

La **div**ision est un conteneur. Cette balise permet de structurer sa page en "bloc". On a généralement un bloc "header", "content", "sidebar" et "footer". Dans ces balises on insérera le contenu adéquat.

```html
<div id="header">
  <p>contenu du header</p>
</div>
```

## La balise \<p>

P pour paragraphe, c'est la balise la plus courante pour rédiger du texte. C'est un bloc qui est suivis d'un saut à la ligne. On peut mettre la balise \<p> dans un \<div> mais jamais de \<p> dans un autre.

```html
<p>Je suis un paragraphe</p>
```

## Les balises \<h1>, \<h2>, \<h3>, \<h4>, \<h5>, \<h6>

Ce sont les balises de titre. Il y en a 6 au total et pas plus. Chaque titre inclut un saut à la ligne. Le style de chaque titre est pré-défini par le navigateur mais peut être changé dans le style css.

```html
<h1>Je suis un titre de niveau 1, le plus important<h1>
<h2>Je suis un titre de niveau 2<h2>
<h3>Je suis un titre de niveau 3<h3>
<h4>Je suis un titre de niveau 4<h4>
<h5>Je suis un titre de niveau 5<h5>
<h6>Je suis un titre de niveau 6, le moins important<h6>
```

![Balise hn rendu](/Images/titres2.png)

## La balise \<blockquote>

Cette balise sert à insérer une citation. Le bloc est suivi d'un retour à la ligne

```html
<blockquote>
  Célébrer le succès, c’est bien, mais il est plus important de tirer les leçons de l’échec. - Bill Gates
</blockquote>
```

## La balise \<strong>

Met le texte entre balise **en gras.**

```html
<p><strong>Je suis en gras</strong> et moi je ne le suis pas</p>
```

## La balise \<em>

Met le texte entre balise *en italique.*

```html
<p><em>Je suis en italique</em> et moi je ne le suis pas</p>
```

## La balise \<span>

Équivalent d'un div, en ligne. Permet de styliser une partie de texte dans un paragraphe.

```html
<h2>Je suis un titre normal <span style="color:red">mais moi je serai en couleur rouge.</span></h2>
```

## Encore quelques balises

Il existe encore pleins de balises, mais le but de ce premier cours n'est pas de toutes les voir, ni de toutes les retenir. Un des principes du coding, c'est de connaître suffisamment de concepts que pour pouvoir accomplir son travail, savoir que certaines choses existes et d'allez relire la documentation si besoin ou de faire des recherches sur le net.

> :wrench: [Tags HTML sur W3School](https://www.w3schools.com/tags/)

> :wrench: [Tags HTML sur MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element)