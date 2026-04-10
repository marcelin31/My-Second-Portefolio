# 🚀 Portfolio KOTCHE Kodjo Marcelin

Un portfolio moderne et interactif développé avec React, TypeScript et Vite.

## ✨ Fonctionnalités

### 🎨 Design & Interface
- **Design responsive** adapté à tous les écrans
- **Thème personnalisé** : Jaune (#ffcc29) et Bleu foncé (#2a3f54)
- **Animations fluides** avec Framer Motion
- **Mode sombre/clair** automatique

### 📱 Sections
- **Hero** : Présentation avec avatar et badges
- **À propos** : Biographie et compétences clés
- **Compétences** : Outils et skills avec animations
- **Parcours** : Timeline des expériences professionnelles
- **Projets** : Galerie des réalisations
- **Diplômes & Certifications** : Carousel avec PDFs
- **Références & Collaborateurs** : Réseau professionnel

### 🎯 Interactions
- **Carousels bidirectionnels** (RTL/LTR)
- **Pause au survol** pour une meilleure lisibilité
- **Boutons PDF** pour consulter les certifications
- **Liens LinkedIn** pour le réseau professionnel
- **Support multilingue** (Français/Anglais)

## 🛠️ Technologies utilisées

- **React 18** avec hooks
- **TypeScript** pour la sécurité des types
- **Vite** pour le développement rapide
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **React Icons** pour les icônes
- **i18n** pour l'internationalisation

## 🚀 Démarrage rapide

```bash
# Installation des dépendances
pnpm install

# Démarrage du serveur de développement
pnpm run dev

# Build pour la production
pnpm run build
```

## 📁 Structure du projet

```
portfolio/
├── public/
│   ├── certifications/     # PDFs et images des diplômes
│   └── references/         # Photos des références
├── src/
│   ├── components/
│   │   ├── sections/       # Sections du portfolio
│   │   └── ui/            # Composants réutilisables
│   ├── lib/
│   │   ├── i18n.tsx       # Traductions
│   │   └── theme.tsx      # Configuration du thème
│   └── pages/
│       └── Portfolio.tsx  # Page principale
└── package.json
```

## 🎨 Personnalisation

### Couleurs du thème
Modifiez les variables dans `tailwind.config.js` :
```js
colors: {
  primary: '#ffcc29',    // Jaune
  secondary: '#2a3f54',  // Bleu foncé
}
```

### Contenu
- **Certifications** : Ajoutez vos PDFs dans `public/certifications/`
- **Références** : Placez les photos dans `public/references/`
- **Textes** : Modifiez les traductions dans `src/lib/i18n.tsx`

## 📄 Licence

Tous droits réservés - KOTCHE Kodjo Marcelin

---

⭐ **N'hésitez pas à me contacter pour collaborations !**</content>
<parameter name="filePath">C:\Users\HP\My_Second_Portefolio\portfolio\README.md