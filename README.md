# Portfolio — Amirague Hounka

Portfolio personnel bilingue d’**Amirague Hounka**, étudiant en informatique et créateur web en apprentissage.

Le site présente mon profil, mes compétences, mon parcours, mes objectifs et les projets que je construis pour progresser vers le développement web junior et le freelance.

## Aperçu

- Design éditorial responsive, pensé pour mobile et ordinateur
- Interface française / anglaise
- Mode clair et sombre, mémorisé dans le navigateur
- Navigation mobile
- Animations de révélation respectueuses de `prefers-reduced-motion`
- Galerie de projets et parcours chronologique
- Formulaire de contact qui prépare un email

## Technologies

- HTML sémantique
- CSS moderne : variables, Grid, Flexbox, media queries
- JavaScript vanilla
- Git et GitHub

## Lancer le projet

Aucune dépendance n’est nécessaire. Avec Node.js installé :

```bash
node server.js
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

Sans Node.js, le fichier `index.html` peut aussi être ouvert directement dans un navigateur, mais le serveur local est recommandé pour reproduire l’expérience de développement.

## Personnalisation à faire

1. Remplacer `contact@amiraguehounka.dev` par une adresse professionnelle réelle dans `index.html` et `script.js`.
2. Ajouter le CV dans `assets/cv-amirague-hounka.pdf`.
3. Remplacer les projets « À venir » par les liens des dépôts et démonstrations.
4. Remplacer le CV brouillon dans `assets/cv-amirague-hounka.pdf` par une version complète et personnelle.
5. Ajouter une photo ou un avatar si souhaité.

## Structure

```text
.
├── index.html          # contenu et structure de la page
├── styles.css          # direction visuelle responsive
├── script.js           # thème, langue, menu et formulaire
├── server.js           # serveur local sans dépendance
├── assets/cv-amirague-hounka.pdf
├── manus-routes.json   # routes déclarées pour l’aperçu Manus
└── README.md
```

## Prochaines étapes

- Ajouter un vrai service de notification pour les messages de contact
- Publier le site avec GitHub Pages ou une plateforme de déploiement
- Construire `BudgetPilot`, puis `CampusConnect`

## Auteur

**Amirague Hounka** — [GitHub](https://github.com/amiraguehounka18-droid)
