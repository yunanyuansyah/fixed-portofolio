# 🎯 Display Fonts

Folder ini untuk font yang digunakan pada heading, judul, dan elemen display lainnya.

## 📁 Font yang Direkomendasikan

### 1. **Orbitron** (Futuristic/Tech)

- **Style**: Futuristic, tech-inspired, geometric
- **Best for**: Hero titles, section headings, tech portfolios
- **Weights**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold), 900 (Black)
- **Download**: [Google Fonts](https://fonts.google.com/specimen/Orbitron)

### 2. **Audiowide** (Modern/Bold)

- **Style**: Modern, bold, impactful
- **Best for**: Creative portfolios, modern designs
- **Weights**: 400 (Regular)
- **Download**: [Google Fonts](https://fonts.google.com/specimen/Audiowide)

### 3. **Russo One** (Strong/Impactful)

- **Style**: Strong, impactful, industrial
- **Best for**: Bold statements, strong branding
- **Weights**: 400 (Regular)
- **Download**: [Google Fonts](https://fonts.google.com/specimen/Russo+One)

### 4. **Chakra Petch** (Cyberpunk)

- **Style**: Cyberpunk, futuristic, tech
- **Best for**: Gaming portfolios, tech projects
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Download**: [Google Fonts](https://fonts.google.com/specimen/Chakra+Petch)

## 📂 Struktur File

```
display/
├── Orbitron/
│   ├── Orbitron-Regular.woff2
│   ├── Orbitron-Medium.woff2
│   ├── Orbitron-Bold.woff2
│   └── Orbitron-Black.woff2
├── Audiowide/
│   └── Audiowide-Regular.woff2
├── Russo-One/
│   └── RussoOne-Regular.woff2
└── Chakra-Petch/
    ├── ChakraPetch-Regular.woff2
    ├── ChakraPetch-Medium.woff2
    └── ChakraPetch-Bold.woff2
```

## 🔧 Cara Menggunakan

### Di `app/globals.css`:

```css
@font-face {
  font-family: "Orbitron";
  src: url("/fonts/display/Orbitron/Orbitron-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Orbitron";
  src: url("/fonts/display/Orbitron/Orbitron-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### Di `tailwind.config.js`:

```javascript
fontFamily: {
  display: ['Orbitron', 'monospace'],
}
```

### Di Komponen:

```jsx
<h1 className="font-display text-6xl font-bold">Your Name</h1>
<h2 className="font-display text-4xl font-medium">Creative Developer</h2>
```

## 🎨 Contoh Penggunaan

### Hero Section:

```jsx
<motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
  <span className="gradient-text">Your Name</span>
</motion.h1>
```

### Section Headings:

```jsx
<h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
  <span className="gradient-text">About Me</span>
</h2>
```

### Navigation:

```jsx
<span className="text-xl font-display font-bold gradient-text">Portfolio</span>
```

## ⚠️ Tips

1. **Jangan gunakan terlalu banyak**: Display font hanya untuk heading utama
2. **Kontras**: Pastikan kontras yang baik dengan background
3. **Responsive**: Sesuaikan ukuran font untuk mobile
4. **Performance**: Gunakan font-display: swap untuk loading yang cepat
