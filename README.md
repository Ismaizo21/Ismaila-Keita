# Portfolio — Ismaila Keita

Portfolio statique Dark Premium de **Ismaila Keita**, Développeur Full Stack (Rufisque – Dakar, Sénégal).

## Coordonnées & Identité

- **Nom :** ISMAILA KEITA
- **Titre :** Développeur Full Stack
- **Localisation :** Rufisque – Dakar, Sénégal
- **Téléphone :** +221 77 230 92 46
- **Email :** ismaizo234@gmail.com
- **GitHub :** [github.com/Ismaizo21](https://github.com/Ismaizo21)
- **Portfolio :** [portfolio-ismaila-keita.netlify.app](https://portfolio-ismaila-keita.netlify.app/)
- **LinkedIn :** [linkedin.com/in/ismaila-keita-b0405525a/](https://www.linkedin.com/in/ismaila-keita-b0405525a/)

## Structure du projet

- `index.html` — Page unique du portfolio (HTML5, CSS3 et JavaScript vanilla inline, bilingue FR/EN, sans dépendance de build)
- `public/`
  - `Ismaila Keita.pdf` — CV officiel du candidat
  - `portrait-ismaila-keita.jpg` — Photo de profil
  - `favicon.svg` — Favicon SVG
  - `og-image.png` — Image Open Graph / Twitter Card (1200x630)
  - `projects/code-snippets.png` — Capture d'écran réelle de l'application Code Snippets
- `robots.txt` — Directives d'indexation
- `sitemap.xml` — Plan de site XML
- `netlify.toml` — Configuration de déploiement Netlify et en-têtes de sécurité HTTP

## Prévisualisation locale

```bash
# Avec npx serve
npx serve .

# Ou avec Python
python -m http.server 4173
```

Ouvrir ensuite `http://localhost:4173` dans le navigateur.

## Déploiement Netlify

- Le site est configuré pour un déploiement statique avec `publish = "."` dans `netlify.toml`.
- Aucun build server-side n'est requis.
