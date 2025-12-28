# 💍 Loventia - Wedding Cinematography & Photography

> La vitrine numérique dédiée à l'offre Mariage Premium de Nuit Blanche Production. Émotion, Storytelling et Esthétique Cinématographique.

Ce dépôt contient le code source du site officiel de **Loventia**. L'objectif est de présenter l'offre unique "Photo + Vidéo" (Hybrid Shooting), de rassurer les futurs mariés sur la qualité haut de gamme et de verrouiller des contrats à haute valeur ajoutée (Ticket moyen ~3k€).

## ⚡️ Tech Stack (Performance & SEO)

Architecture clonée et optimisée depuis le core Nuit Blanche / Chantier Film. Basée sur la performance (SSR) et l'expérience utilisateur fluide (UX) :

* **Core:** [Next.js 14](https://nextjs.org/) (App Router)
* **Langage:** TypeScript
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Composants UI:** [Shadcn UI](https://ui.shadcn.com/) (Radix Primitives)
* **Icônes:** Lucide React
* **Animation:** Framer Motion (Transitions douces & Élégantes)
* **Déploiement:** Vercel

## 🎯 Objectifs du Site (Business First)

1. **Branding High-Ticket :** Le design doit immédiatement justifier le tarif premium (2990€). L'esthétique doit être irréprochable pour filtrer les clients "cheap" et attirer ceux qui cherchent une "expérience".
2. **Conversion Émotionnelle :** Contrairement au BTP (technique), ici on vend du rêve. Le site met en avant le storytelling, le "Teaser J+6" et l'approche hybride sans friction.
3. **Scalability Ready :** La structure du site vend un "Résultat Loventia" et non "Denis ou Maxime". Cela prépare le terrain pour envoyer des équipes de freelances qualifiés sans décevoir le client.

## 🛠 Structure du Projet

```text
/
  ├── /app           # Pages et Layouts (App Router)
  │    ├── layout.tsx    # Squelette global (Navbar épurée, Footer, SEO Wedding)
  │    ├── page.tsx      # Landing Page (Showreel Vidéo, Portfolio Photo, Offre Unique)
  │    └── globals.css   # Styles globaux (Palette "Soft & Elegant", Typo Serif)
  ├── /components    # Blocs UI réutilisables
  │    ├── /ui           # Composants primitifs Shadcn
  │    ├── HeroWedding.tsx # Fullscreen Video Header
  │    ├── Portfolio.tsx # Grille Masonry Photo/Vidéo
  │    ├── Pricing.tsx   # Présentation de l'offre unique (2990€) + Options
  │    └── ...           # Sections (FAQ Mariés, Contact/Dispo)
  ├── /public        # Assets (Photos Best-of, Showreel compressé)
  ├── /lib           # Utilitaires
  └── /hooks         # Custom React Hooks
```

  🌍 Déploiement
Le déploiement est automatisé via Vercel.

Production : main branch.

Note : Ce projet est une filiale "B2C / Luxe" de Nuit Blanche Production. L'infrastructure technique est partagée pour maximiser la rentabilité de maintenance.

© Nuit Blanche Production - Division Loventia
