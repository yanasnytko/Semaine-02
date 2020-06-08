# Les différents sélecteurs

## Le sélecteur d'HTML

Vous pouvez sélectionner n'importe quel élement HTML et lui appliquer un style, tous les élements de la page seront impacté.

```css
p{
  color: green; /* Tous vos paragraphes seront écrit en vert */
}
```

Prenez en compte le bout de code suivant pour les explications qui vont suivre:

```html
<div>
  <h1>Mes compétences</h1>
  <p>Je possède de nombreuses compétences en développement web.
    <a href="#">Mon portfolio</a>
  </p>
</div>
```

### Enfant et descendance

\<h1> et \<p> sont des enfants de \<div>.
\<a> est un descendant de \<p>

### Parent et ancêtre

\<div> est parent de \<h1> et \<p>
\<p> est parent de \<a>
\<div> est l'ancêtre de \<a>

Ces notions de parentés vont permettre de faire de sélection plus précise dans notre CSS.

### Sélecteur de hiérarchie

Pour sélectionner \<a> descendant de \<p> nous allons indiquer le chemin en séparant les élements par un espace:

```css
p a { ... }
```

### Sélecteur de groupe

Pour sélectionner plusieurs éléments qui possèdent les mêmes valeurs, on les sépares par une virgule:

```css
h1, p { ... }
```

### Sélecteur de classe

Si vous avez besoin que tous vos paragraphes soit écris en jaune mais un seul doit être rouge. Il est possible de créer une classe spécifique.

```html
<p>Moi je serai jaune</p>
<p class="important">Mais moi je suis plus important du coup je serai en rouge</p>
```

```css
p{color: yellow}
.important{color: red}
```

On insère un attribut **class** dont la **valeur** peut-être ce que vous voulez, soyez cohérent avec l'effet recherché.

Il est également possible d'utiliser plusieurs classes, on les sépare par des espaces tout simplement.

```html
<p class="important info">
```

> Ici c'est 
