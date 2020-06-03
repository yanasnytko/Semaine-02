# Les bases d'HTML

## Introduction

Voyons ensemble de quoi est constitué une page HTML typique. Ensuite on verra vos premières balises pour tout doucement façonner votre page. On terminera par l'utilisation des tableaux.

## Table des matières

1. [Le squelette d'une page HTML](#Le-squelette-d'une-page-HTML)
2. [Quelques balises pour mettre en forme](#Quelques-balises-pour-mettre-en-forme)
3. [Les tableaux HTML](#Les-tableaux-HTML)

## Fichiers

Aucun fichier requis

## Le squelette d'une page HTML

```html
<!doctype html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title> Coucou je suis une page html</title>
</head>
<body>
  <p> Salut je suis le contenu de la page</p>
</body>
</html>
```

> Voici un exemple de page HTML toute simple. Analysons un peu tout ça.

### Les balises

Ce sont tous ces mots étranges entre **< >**. Sans les balises HTML, une page ne serait qu'un simple bloc texte. Ce sont elles qui structurent le contenu de la page. Ces balises seront interprétées par le navigateur pour lui permettre d'afficher correctement votre page à l'utilisateur.

Elles peuvent être imbriquées l'une dans l'autre.

#### Principe d'une balise

On commence toujours par la balise entrante, puis le contenu, ensuite on referme la balise.

```html
<p> Salut </p>
```

> Le nom de la balise se met entre **< >**, ce nom est définit dans les spécifications HTML, on ne met pas ce que l'on veut.

#### Attributs et valeurs

Certaines balises peuvent se voir attribuer des attributs. Ils permettent de préciser certains paramètres (par exemple: l'adresse d'un lien, la source d'une image,...)

```html
<img src="mon lien"></img>
```

> Ici **src** est l'attribut et **mon lien** la valeur. Nous verrons des balises plus précisément un peu plus loin.

### La notion de Doctype

```html
<!doctype html>
```

* Indique au navigateur quel version d'HTML on utilise sur cette page.
* Obligatoire pour valider sa page (W3C)
* Si il n'est pas renseigné = risque de bug de rétro-compatibilité, surtout sur des navigateurs plus anciens.

### La balise \<html>

C'est elle qui ouvre et ferme tout votre code. Il est obligatoire d'ajouter les balises **\<head>** et **\<body>** entre votre balise **\<html>**.

```html
<html lang="fr">
```

Cette balise prend généralement l'attribut **lang** qui permet de définir la langue de votre page. Cela permet une meilleur indexation pour les moteurs de recherches, aide à la synthèse vocale et permet la vérification orthographique des formulaires.

### La balise \<head>

Elle détermine l'entête du document et contient les méta-informations (infos concernant la page).

### La balise \<title>

```html
<title>Le titre de ma super page HTML</title>
```

Elle est contenue dans la balise **\<head>** et permet de donner un titre à votre page.

### Les balises \<meta>

```html
<meta charset="UTF-8">
```

Il existe plusieurs type de balise meta. Elles servent notamment à définir quel set de caractères la page utilise, le nom de l'auteur de la page, des mots-clés, une description,... Tout cela aide la navigateur et les moteurs de recherches.

Quelques exemples de balises **\<meta>**:

```html
<meta name="description" content="Ma première page web">
<meta name="author" content="Jeremy Scala">
<meta name="keywords" content="html, css, tutorials">
```

### La balise \<body>

C'est elle qui contient le contenu de la page. On y met toutes les balises de textes, d'images, de liens,...

### Les commentaires en HTML

Les commentaires dans le code sont une bonne pratique à avoir. Ils permettent de donner des informations complémentaires à ceux qui retravaillerons dans votre code. Généralement pour l'HTML, vu que c'est la base, il y a peu d'intérêt de commenter. Mais cela peut-être une bonne manière de vous organiser, surtout au début.

```html
<p> Je suis un texte visible <!-- je suis un commentaire invisible --></p>
```

## Quelques balises pour mettre en forme

Maintenant qu'on en sait un peu plus sur comment est structuré une page web basique, voyons un peu comment mettre tous ça en page.

Il existe une multitude de balises à utiliser pour rédiger un document HTML, nous verrons les plus utiles. Surtout n'hésite pas à consulter la documentation officielle pour en savoir plus et en découvrir d'autre.

> :bulb: N'hésite pas à ouvrir VS code et à expérimenter les balises qu'on va voir à partir d'ici. Pas besoin de grand chose, juste un fichier .html avec ces balises suffiront.

### La balise \<div>

La **div**ision est un conteneur. Cette balise permet de structurer sa page en "bloc". On a généralement un bloc "header", "content", "sidebar" et "footer". Dans ces balises on insérera le contenu adéquat.

```html
<div id="header">
  <p>contenu du header</p>
</div>
```

### La balise \<p>

P pour paragraphe, c'est la balise la plus courante pour rédiger du texte. C'est un bloc qui est suivis d'un saut à la ligne. On peut mettre la balise \<p> dans un \<div> mais jamais de \<p> dans un autre.

```html
<p>Je suis un paragraphe</p>
```

### Les balises \<h1>, \<h2>, \<h3>, \<h4>, \<h5>, \<h6>

Ce sont les balises de titre. Il y en a 6 au total et pas plus. Chaque titre inclut un saut à la ligne. Le style de chaque titre est pré-défini par le navigateur mais peut être changé dans le style css.

```html
<h1>Je suis un titre de niveau 1, le plus important<h1>
<h2>Je suis un titre de niveau 2<h2>
<h3>Je suis un titre de niveau 3<h3>
<h4>Je suis un titre de niveau 4<h4>
<h5>Je suis un titre de niveau 5<h5>
<h6>Je suis un titre de niveau 6, le moins important<h6>
```

![Balise hn html](/Images/titres2.png)
![Balise hn rendu](/Images/titres1.png)

### La balise \<blockquote>

Cette balise sert à insérer une citation. Le bloc est suivi d'un retour à la ligne

```html
<blockquote>
  Célébrer le succès, c’est bien, mais il est plus important de tirer les leçons de l’échec. - Bill Gates
</blockquote>
```

### La balise \<strong>

Met le texte entre balise **en gras.**

```html
<p><strong>Je suis en gras</strong> et moi je ne le suis pas</p>
```

### La balise \<em>

Met le texte entre balise *en italique.*

```html
<p><em>Je suis en italique</em> et moi je ne le suis pas</p>
```

### La balise \<span>

Équivalent d'un div, en ligne. Permet de styliser une partie de texte dans un paragraphe.

```html
<h2>Je suis un titre normal <pan class="texte-rouge">mais moi je serai en couleur rouge.</span></h2>
```

## Les tableaux HTML

## Tips / Astuces / Liens

TODO: Liens vers la doc HTML

## Conclusion

Éventuellement une synthèse,  un schéma, un résumé du cours. 
