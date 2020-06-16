# Les tableaux HTML et les listes

## Les tableaux

Une façon d'organiser ses informations sur une page peut être l'utilisation de tableaux. Ceux-ci sont composer de lignes et de cellules.

> :bangbang: On ne met pas en page le design de son site avec des tableaux!! Pour ce faire on utilisera le CSS qu'on verra dans la prochaine partie.

Voyons la marche à suivre pour créer ton premier tableau. 

> :bulb: De nouveau, ouvre VSCode et essaye les différents bout de code qui seront présentés ici pour voir leur fonctionnement.

### La balise \<table>

Alors non, ce n'est pas pour insérer un meuble pour poser votre assiette et votre verre, mais bien une balise qui va indiquer le début et la fin de votre tableau.

```html
<table>
  <!-- tout le contenu de mon tableau -->
</table>
```

### Les balises \<tr>, \<td>, \<th>

Remplissons notre tableau avec quelques lignes et cellules.

```html
<table>
  <tr>
    <th>En-tête colone 1</th>
    <th>En-tête colone 2</th>
    <th>En-tête colone 3</th>
  </tr>
  <tr>
    <td>ligne 1 colonne 1</td>
    <td>ligne 1 colonne 2</td>
    <td>ligne 1 colonne 3</td>
  </tr> 
  <tr>
    <td>ligne 2 colonne 2</td>
    <td>ligne 2 colonne 1</td>
    <td>ligne 2 colonne 3</td>
  </tr>
</table>
```

* **th:** Table Header = En-tête du tableau.
* **tr:** Table Row = Ligne du tableau
* **td:** Table Data = Cellule contenant toute sorte d'infos (texte, image,...)

> Il y a encore quelques balises intéressantes à connaître pour personnaliser vos tableaux, voici un lien pour en savoir plus.
>
> :book: https://www.w3schools.com/html/html_tables.asp
>
> Nous verrons un peu plus loin comment mettre un peu de couleur à ce pauvre tableau tout triste.

N'hésite pas à t'amuser un peu avec les tableaux et à bien comprendre comment ils sont construits.

## Les listes

Il existe 2 types de listes, celle qui sont triées et celle qui ne le sont pas. Leurs utilisation dépend du contexte. Si vous devez énumérer une liste d'étapes, il vous faudra la balise \<ol> et si c'est juste une liste de points à aborder, une balise \<ul> suffira.

### Les listes non ordonnées \<ul>

**ul:** Unordered List

```html
<ul>
  <!-- contenu de votre liste -->
</ul>
```

### Les listes ordonnées \<ol>

**ol:** Ordered List

```html
<ol>
  <!-- contenu de votre liste -->
</ol>
```

### La balise \<li>

C'est bien joli d'ouvrir une balise de liste, mais sans rien dedans ça fonctionne moins bien. Il faut maintenant rajouter une balise \<li> pour List Item. En fonction du type de liste, un point ou un chiffre va apparaître devant votre contenu. Essaye!

```html
<ol>
  <li>Moi j'aurai le chiffre 1 devant moi</li>
  <li>Et moi le chiffre 2.</li>
</ol>
<ul>
  <li>Moi, comme je suis dans une liste non ordonnée, j'aurai juste un point.</li>
</ul>
```

Phew! Ca en fait des nouvelles choses à assimiler. Tout va bien?? On va faire une petite pause avant d'attaquer la partie la plus amusante: [LE CSS!!](theorie-css.md)

## Pour allez plus loin

> :bulb: Si tout ce que tu viens de voir te semble clair, tu peux déjà commencer à rédiger ton C.V. en HTML et à le mettre en page. On le rendra plus beau par après.
