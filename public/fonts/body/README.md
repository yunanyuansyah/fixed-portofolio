# 📝 Body Fonts

Folder ini untuk font yang digunakan pada teks body, paragraf, dan konten utama.

## 📁 Font yang Direkomendasikan

### 1. **Inter** (Modern/Clean)

- **Style**: Modern, clean, highly readable
- **Best for**: Body text, UI elements, modern websites
- **Weights**: 100 (Thin), 200 (ExtraLight), 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold), 900 (Black)
- **Download**: [Google Fonts](https://fonts.google.com/specimen/Inter)

### 2. **Roboto** (Google System)

- **Style**: Clean, friendly, versatile
- **Best for**: General purpose, Android-style interfaces
- **Weights**: 100 (Thin), 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold), 900 (Black)
- **Download**: [Google Fonts](https://fonts.google.com/specimen/Roboto)

### 3. **Open Sans** (Friendly/Accessible)

- **Style**: Friendly, accessible, humanist
- **Best for**: Content-heavy websites, accessibility-focused designs
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
- **Download**: [Google Fonts](https://fonts.google.com/specimen/Open+Sans)

### 4. **Poppins** (Modern/Geometric)

- **Style**: Modern, geometric, friendly
- **Best for**: Modern designs, creative portfolios
- **Weights**: 100 (Thin), 200 (ExtraLight), 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold), 900 (Black)
- **Download**: [Google Fonts](https://fonts.google.com/specimen/Poppins)

## 📂 Struktur File

```
body/
├── Inter/
│   ├── Inter-Thin.woff2
│   ├── Inter-Light.woff2
│   ├── Inter-Regular.woff2
│   ├── Inter-Medium.woff2
│   ├── Inter-SemiBold.woff2
│   ├── Inter-Bold.woff2
│   └── Inter-Black.woff2
├── Roboto/
│   ├── Roboto-Light.woff2
│   ├── Roboto-Regular.woff2
│   ├── Roboto-Medium.woff2
│   └── Roboto-Bold.woff2
├── Open-Sans/
│   ├── OpenSans-Light.woff2
│   ├── OpenSans-Regular.woff2
│   ├── OpenSans-Medium.woff2
│   └── OpenSans-Bold.woff2
└── Poppins/
    ├── Poppins-Light.woff2
    ├── Poppins-Regular.woff2
    ├── Poppins-Medium.woff2
    └── Poppins-Bold.woff2
```

## 🔧 Cara Menggunakan

### Di `app/globals.css`:

```css
@font-face {
  font-family: "Inter";
  src: url("/fonts/body/Inter/Inter-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/body/Inter/Inter-Medium.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/body/Inter/Inter-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### Di `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

### Di Komponen:

```jsx
<p className="font-sans text-lg">Teks body utama</p>
<p className="font-sans font-medium">Teks dengan weight medium</p>
<p className="font-sans font-bold">Teks dengan weight bold</p>
```

## 🎨 Contoh Penggunaan

### Paragraf:

```jsx
<motion.p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
  Crafting digital experiences that blend creativity with cutting-edge
  technology. Transforming ideas into immersive, futuristic solutions that push
  the boundaries of what's possible.
</motion.p>
```

### Deskripsi Project:

```jsx
<p className="text-gray-400 text-sm mb-4 leading-relaxed">
  A modern e-commerce platform built with Next.js, featuring real-time
  inventory, payment processing, and admin dashboard.
</p>
```

### Button Text:

```jsx
<button className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg">
  Download CV
</button>
```

### Navigation:

```jsx
<span className="text-gray-300 font-medium">About</span>
```

## 📱 Responsive Typography

### Base Font Sizes:

```css
/* Mobile */
body {
  font-size: 16px;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.5rem;
}
p {
  font-size: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.125rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  body {
    font-size: 20px;
  }
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.25rem;
  }
}
```

## ⚠️ Tips

1. **Readability**: Pilih font yang mudah dibaca di berbagai ukuran
2. **Line Height**: Gunakan line-height 1.5-1.7 untuk paragraf
3. **Font Size**: Minimal 16px untuk body text
4. **Contrast**: Pastikan kontras yang cukup dengan background
5. **Loading**: Gunakan font-display: swap untuk performa
