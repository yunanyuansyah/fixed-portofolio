# 🔤 Custom Fonts

Folder ini untuk menyimpan font kustom yang akan digunakan di website portofolio.

## 📁 Struktur Folder

```
public/fonts/
├── display/          # Font untuk heading dan judul
│   ├── Orbitron/     # Font display utama
│   └── README.md     # Panduan font display
├── body/             # Font untuk teks body
│   ├── Inter/        # Font body utama
│   └── README.md     # Panduan font body
├── mono/             # Font monospace
│   ├── JetBrains/    # Font monospace utama
│   └── README.md     # Panduan font mono
└── README.md         # File ini
```

## 🎯 Cara Menambahkan Font

### 1. **Font Display (Heading/Judul)**

- Letakkan di: `public/fonts/display/[nama-font]/`
- Format: `.woff2`, `.woff`, `.ttf`
- Contoh: `public/fonts/display/Orbitron/Orbitron-Bold.woff2`

### 2. **Font Body (Teks Utama)**

- Letakkan di: `public/fonts/body/[nama-font]/`
- Format: `.woff2`, `.woff`, `.ttf`
- Contoh: `public/fonts/body/Inter/Inter-Regular.woff2`

### 3. **Font Monospace (Kode)**

- Letakkan di: `public/fonts/mono/[nama-font]/`
- Format: `.woff2`, `.woff`, `.ttf`
- Contoh: `public/fonts/mono/JetBrains/JetBrainsMono-Regular.woff2`

## 🔧 Cara Menggunakan Font

### Method 1: Menggunakan @font-face di CSS

Tambahkan di `app/globals.css`:

```css
/* Font Display */
@font-face {
  font-family: "Orbitron";
  src: url("/fonts/display/Orbitron/Orbitron-Bold.woff2") format("woff2"), url("/fonts/display/Orbitron/Orbitron-Bold.woff")
      format("woff");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Font Body */
@font-face {
  font-family: "Inter";
  src: url("/fonts/body/Inter/Inter-Regular.woff2") format("woff2"), url("/fonts/body/Inter/Inter-Regular.woff")
      format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Font Mono */
@font-face {
  font-family: "JetBrains Mono";
  src: url("/fonts/mono/JetBrains/JetBrainsMono-Regular.woff2") format("woff2"),
    url("/fonts/mono/JetBrains/JetBrainsMono-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

### Method 2: Menggunakan next/font/local

Buat file `app/fonts.ts`:

```typescript
import localFont from "next/font/local";

export const orbitron = localFont({
  src: [
    {
      path: "../public/fonts/display/Orbitron/Orbitron-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/display/Orbitron/Orbitron-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-orbitron",
  display: "swap",
});

export const inter = localFont({
  src: [
    {
      path: "../public/fonts/body/Inter/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/body/Inter/Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/body/Inter/Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const jetbrainsMono = localFont({
  src: [
    {
      path: "../public/fonts/mono/JetBrains/JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/mono/JetBrains/JetBrainsMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
```

Kemudian gunakan di `app/layout.tsx`:

```typescript
import { orbitron, inter, jetbrainsMono } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
```

Update `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        display: ["var(--font-orbitron)", "monospace"],
      },
    },
  },
};
```

## 📝 Contoh Penggunaan

### Di Komponen React:

```jsx
// Menggunakan class Tailwind
<h1 className="font-display text-4xl font-bold">Judul Utama</h1>
<p className="font-sans text-lg">Teks body</p>
<code className="font-mono text-sm">console.log('Hello World')</code>

// Menggunakan CSS custom
<h1 style={{ fontFamily: 'Orbitron, monospace' }}>Judul Utama</h1>
```

## 🎨 Font yang Direkomendasikan

### Display Fonts (Heading):

- **Orbitron** - Futuristic, tech-inspired
- **Audiowide** - Modern, bold
- **Russo One** - Strong, impactful
- **Chakra Petch** - Cyberpunk style

### Body Fonts (Text):

- **Inter** - Clean, readable
- **Roboto** - Google's system font
- **Open Sans** - Friendly, accessible
- **Poppins** - Modern, geometric

### Monospace Fonts (Code):

- **JetBrains Mono** - Developer-friendly
- **Fira Code** - Programming ligatures
- **Source Code Pro** - Adobe's coding font
- **Cascadia Code** - Microsoft's coding font

## ⚠️ Tips Penting

1. **Format Font**: Gunakan `.woff2` untuk performa terbaik
2. **Font Display**: Gunakan `font-display: swap` untuk loading yang lebih cepat
3. **Fallback**: Selalu sertakan font fallback
4. **Licensing**: Pastikan font yang digunakan memiliki lisensi yang sesuai
5. **File Size**: Kompres font untuk mengurangi ukuran file

## 🔗 Sumber Font Gratis

- **Google Fonts**: fonts.google.com
- **Font Squirrel**: fontsquirrel.com
- **DaFont**: dafont.com
- **1001 Fonts**: 1001fonts.com

## 📱 Responsive Font Loading

```css
/* Font loading optimization */
@font-face {
  font-family: "MyFont";
  src: url("/fonts/myfont.woff2") format("woff2");
  font-display: swap; /* Tampilkan fallback font dulu */
  font-weight: 400;
  font-style: normal;
}
```

## 🚀 Performance Tips

1. **Preload Fonts**: Tambahkan di `app/layout.tsx`

```html
<link
  rel="preload"
  href="/fonts/display/Orbitron-Bold.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous"
/>
```

2. **Subset Fonts**: Gunakan font subset untuk mengurangi ukuran
3. **CDN**: Pertimbangkan menggunakan CDN untuk font populer
4. **Caching**: Atur cache yang tepat untuk font files
