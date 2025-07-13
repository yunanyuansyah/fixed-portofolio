# 💻 Monospace Fonts

Folder ini untuk font monospace yang digunakan pada kode, terminal, dan elemen teknis.

## 📁 Font yang Direkomendasikan

### 1. **JetBrains Mono** (Developer-Friendly)

- **Style**: Modern, developer-friendly, programming ligatures
- **Best for**: Code snippets, terminal text, developer portfolios
- **Weights**: 100 (Thin), 200 (ExtraLight), 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
- **Download**: [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

### 2. **Fira Code** (Programming Ligatures)

- **Style**: Clean, programming ligatures, Mozilla design
- **Best for**: Code editors, programming content
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Download**: [Google Fonts](https://fonts.google.com/specimen/Fira+Code)

### 3. **Source Code Pro** (Adobe)

- **Style**: Clean, professional, Adobe design
- **Best for**: Professional code display, technical documentation
- **Weights**: 200 (ExtraLight), 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 900 (Black)
- **Download**: [Google Fonts](https://fonts.google.com/specimen/Source+Code+Pro)

### 4. **Cascadia Code** (Microsoft)

- **Style**: Modern, Microsoft design, programming ligatures
- **Best for**: Windows development, modern code editors
- **Weights**: 200 (ExtraLight), 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Download**: [GitHub](https://github.com/microsoft/cascadia-code)

## 📂 Struktur File

```
mono/
├── JetBrains-Mono/
│   ├── JetBrainsMono-Thin.woff2
│   ├── JetBrainsMono-Light.woff2
│   ├── JetBrainsMono-Regular.woff2
│   ├── JetBrainsMono-Medium.woff2
│   ├── JetBrainsMono-SemiBold.woff2
│   ├── JetBrainsMono-Bold.woff2
│   └── JetBrainsMono-ExtraBold.woff2
├── Fira-Code/
│   ├── FiraCode-Light.woff2
│   ├── FiraCode-Regular.woff2
│   ├── FiraCode-Medium.woff2
│   └── FiraCode-Bold.woff2
├── Source-Code-Pro/
│   ├── SourceCodePro-ExtraLight.woff2
│   ├── SourceCodePro-Light.woff2
│   ├── SourceCodePro-Regular.woff2
│   ├── SourceCodePro-Medium.woff2
│   ├── SourceCodePro-SemiBold.woff2
│   ├── SourceCodePro-Bold.woff2
│   └── SourceCodePro-Black.woff2
└── Cascadia-Code/
    ├── CascadiaCode-ExtraLight.woff2
    ├── CascadiaCode-Light.woff2
    ├── CascadiaCode-Regular.woff2
    ├── CascadiaCode-Medium.woff2
    ├── CascadiaCode-SemiBold.woff2
    └── CascadiaCode-Bold.woff2
```

## 🔧 Cara Menggunakan

### Di `app/globals.css`:

```css
@font-face {
  font-family: "JetBrains Mono";
  src: url("/fonts/mono/JetBrains-Mono/JetBrainsMono-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "JetBrains Mono";
  src: url("/fonts/mono/JetBrains-Mono/JetBrainsMono-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### Di `tailwind.config.js`:

```javascript
fontFamily: {
  mono: ['JetBrains Mono', 'monospace'],
}
```

### Di Komponen:

```jsx
<code className="font-mono text-sm">console.log('Hello World')</code>
<pre className="font-mono text-xs">npm install next</pre>
<span className="font-mono">const name = 'John'</span>
```

## 🎨 Contoh Penggunaan

### Code Snippets:

```jsx
<code className="font-mono text-sm bg-dark-800 px-2 py-1 rounded">
  npm run dev
</code>
```

### Technology Tags:

```jsx
<span className="px-3 py-1 bg-dark-700 text-neon-blue text-xs rounded-full font-mono">
  Next.js
</span>
```

### Terminal-like Text:

```jsx
<p className="text-neon-blue font-mono text-sm">> Initializing portfolio...</p>
```

### Code Blocks:

```jsx
<pre className="font-mono text-sm bg-dark-800 p-4 rounded-lg overflow-x-auto">
  {`function greet(name) {
  return \`Hello, \${name}!\`;
}`}
</pre>
```

### File Paths:

```jsx
<span className="font-mono text-gray-400 text-sm">/components/Hero.tsx</span>
```

### Version Numbers:

```jsx
<span className="font-mono text-neon-green">v1.0.0</span>
```

## 🔤 Programming Ligatures

Beberapa font monospace mendukung programming ligatures:

### JetBrains Mono:

```jsx
// Ligatures akan otomatis muncul
<code className="font-mono">
  => <= >= != === !== && || ++ --
</code>
```

### Fira Code:

```jsx
<code className="font-mono">
  // Ligatures untuk operator
  const result = a => b;
  if (x <= y && z >= w) {
    return true;
  }
</code>
```

## ⚠️ Tips

1. **Size**: Gunakan ukuran font yang cukup besar untuk kode (minimal 14px)
2. **Background**: Berikan background yang kontras untuk code blocks
3. **Line Height**: Gunakan line-height 1.4-1.6 untuk kode
4. **Ligatures**: Aktifkan ligatures untuk font yang mendukungnya
5. **Syntax Highlighting**: Kombinasikan dengan syntax highlighting untuk hasil terbaik

## 🎯 Use Cases

### Portfolio Sections:

- Technology stack tags
- Code snippets
- Terminal commands
- File paths
- Version numbers
- Configuration examples

### Developer Content:

- Code tutorials
- API documentation
- Command line examples
- Configuration files
- Error messages
