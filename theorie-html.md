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

> Le nom de la balise se met entre **< >**, quant au nom de cette balise, il est définit dans les spécifications HTML, on ne met pas ce que l'on veut.

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
* Si il n'est  renseigné = risque de bug de rétro-compatibilité, surtout sur des navigateurs plus anciens.

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

*wip...*

## Quelques balises pour mettre en forme

## Les tableaux HTML

## Tips / Astuces

Optionnel, renseigner les bonnes pratiques, des astuces de développeurs avancés, des méthodes de travail

## Conclusion

Éventuellement une synthèse,  un schéma, un résumé du cours. 
