# Les bases d'HTML

## Introduction

Voyons ensemble de quoi est constitué une page HTML typique. Ensuite on verra vos premières balises pour tout doucement façonner votre page. On terminera avec l'utilisation des tableaux et des listes.

## Table des matières

1. Le squelette d'une page HTML
2. [Quelques balises pour mettre en forme](/theorie-html-balises.md)
3. [Les tableaux et les listes](/theorie-html-tableaux.md)

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

## Les balises

Ce sont tous ces mots étranges entre **< >**. Sans les balises HTML, une page ne serait qu'un simple bloc texte. Ce sont elles qui structurent le contenu de la page. Ces balises seront interprétées par le navigateur pour lui permettre d'afficher correctement votre page à l'utilisateur.

Elles peuvent être imbriquées l'une dans l'autre.

### Principe d'une balise

On commence toujours par la balise entrante, puis le contenu, ensuite on referme la balise.

```html
<p>Salut</p>
```

> Le nom de la balise se met entre **< >**, ce nom est définit dans les spécifications HTML, on ne met pas ce que l'on veut.

### Attributs et valeurs

Certaines balises peuvent se voir attribuer des attributs. Ils permettent de préciser certains paramètres (par exemple: l'adresse d'un lien, la source d'une image, le style d'une div,...)

```html
<img src="mon lien"></img>
```

> Ici **src** est l'attribut et **mon lien** la valeur. Nous verrons des balises plus précisément un peu plus loin.

## La notion de Doctype

```html
<!doctype html>
```

* Indique au navigateur quel version d'HTML on utilise sur cette page.
* Obligatoire pour valider sa page (W3C)
* Si il n'est pas renseigné = risque de bug de rétro-compatibilité, surtout sur des navigateurs plus anciens.

## La balise \<html>

C'est elle qui ouvre et ferme tout votre code. Il est obligatoire d'ajouter les balises **\<head>** et **\<body>** entre votre balise **\<html>**.

```html
<html lang="fr">
```

Cette balise prend généralement l'attribut **lang** qui permet de définir la langue de votre page. Cela permet une meilleur indexation pour les moteurs de recherches, aide à la synthèse vocale et permet la vérification orthographique des formulaires.

## La balise \<head>

Elle détermine l'entête du document et contient les méta-informations (infos concernant la page). Ce sont des infos qui ne sont pas visibles des visiteurs de votre page mais qui servent aux moteurs de recherches notamment. On peut aussi y insérer des règles de styles pour votre page.

### La balise \<title>

```html
<title>Le titre de ma super page HTML</title>
```

Elle est contenue dans la balise **\<head>** et permet de donner un titre à votre page.

## Les balises \<meta>

```html
<meta charset="UTF-8">
```

Il existe plusieurs type de balise meta. Elles servent notamment à définir quel set de caractères la page utilise, le nom de l'auteur de la page, des mots-clés, une description,... Tout cela aide la navigateur et les moteurs de recherches.

Quelques exemples de balises **\<meta>**:

```html
<meta name="description" content="Ma première page web">
<meta name="author" content="Jeremy Scala">
<meta name="keywords" content="html, css, tutorials">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

> Leurs noms sont plutôt explicite.

## La balise \<body>

C'est elle qui contient le contenu de la page. On y met toutes les balises de textes, d'images, de liens,...

## Les commentaires en HTML

Les commentaires dans le code sont une bonne pratique à avoir. Ils permettent de donner des informations complémentaires à ceux qui retravaillerons dans votre code. Généralement pour l'HTML, vu que c'est la base, il y a peu d'intérêt de commenter. Mais cela peut-être une bonne manière de vous organiser, surtout au début.

```html
<p> Je suis un texte visible <!-- je suis un commentaire invisible --></p>
```

Faisons une toute petite pause théorique. 

Petit exercice: Ouvrez VSCode et essayer de recréer un squelette HTML simple sans regarder l'exemple tout au dessus.

Si tout s'est bien passé, [passons à la suite.](/theorie-html-balises.md)