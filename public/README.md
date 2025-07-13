# 📁 Public Assets Folder

Folder ini berisi semua asset statis untuk website portofolio Anda.

## 📂 Struktur Folder

```
public/
├── images/
│   ├── profile/          # Foto profil dan gambar pribadi
│   │   ├── avatar.jpg    # Foto profil utama
│   │   ├── hero-bg.jpg   # Background hero section
│   │   └── about.jpg     # Foto untuk about section
│   └── projects/         # Screenshot dan gambar project
│       ├── project1.jpg  # Screenshot project 1
│       ├── project2.jpg  # Screenshot project 2
│       └── project3.jpg  # Screenshot project 3
├── favicon.ico           # Icon website
└── README.md            # File ini
```

## 🖼️ Cara Menambahkan Foto

### 1. Foto Profil

- Letakkan foto profil Anda di `public/images/profile/`
- Format yang didukung: JPG, PNG, WebP
- Ukuran yang direkomendasikan: 400x400px untuk avatar

### 2. Screenshot Project

- Letakkan screenshot project di `public/images/projects/`
- Format yang didukung: JPG, PNG, WebP
- Ukuran yang direkomendasikan: 600x400px

### 3. Background Images

- Letakkan gambar background di `public/images/`
- Format yang didukung: JPG, PNG, WebP
- Ukuran yang direkomendasikan: 1920x1080px

## 🔗 Cara Menggunakan di Kode

### Menggunakan Next.js Image Component (Direkomendasikan)

```jsx
import Image from 'next/image'

// Foto profil
<Image
  src="/images/profile/avatar.jpg"
  alt="Profile Picture"
  width={400}
  height={400}
/>

// Screenshot project
<Image
  src="/images/projects/project1.jpg"
  alt="Project Screenshot"
  width={600}
  height={400}
/>
```

### Menggunakan Tag HTML biasa

```jsx
// Foto profil
<img src="/images/profile/avatar.jpg" alt="Profile Picture" />

// Screenshot project
<img src="/images/projects/project1.jpg" alt="Project Screenshot" />
```

## 📝 Contoh Penggunaan di Komponen

### Menambahkan Foto Profil di Hero Section

```jsx
// Di components/Hero.tsx
<div className="flex items-center space-x-8">
  <Image
    src="/images/profile/avatar.jpg"
    alt="Your Name"
    width={200}
    height={200}
    className="rounded-full border-4 border-neon-blue"
  />
  <div>
    <h1>Your Name</h1>
    <p>Creative Developer</p>
  </div>
</div>
```

### Menambahkan Screenshot Project

```jsx
// Di components/Projects.tsx
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: "/images/projects/ecommerce.jpg", // Ganti dengan path foto Anda
    description: "...",
    // ...
  },
];
```

## ⚠️ Tips Penting

1. **Optimasi Gambar**: Gunakan format WebP untuk performa terbaik
2. **Ukuran File**: Usahakan file gambar tidak lebih dari 500KB
3. **Nama File**: Gunakan nama file yang deskriptif dan tanpa spasi
4. **Alt Text**: Selalu tambahkan alt text untuk accessibility
5. **Responsive**: Gunakan Next.js Image component untuk optimasi otomatis

## 🎨 Format yang Didukung

- **JPG/JPEG**: Untuk foto dengan banyak warna
- **PNG**: Untuk gambar dengan transparansi
- **WebP**: Format modern dengan kompresi terbaik
- **SVG**: Untuk ikon dan ilustrasi sederhana

## 📱 Responsive Images

Next.js Image component akan otomatis mengoptimasi gambar untuk berbagai ukuran layar:

```jsx
<Image
  src="/images/projects/project1.jpg"
  alt="Project Screenshot"
  width={600}
  height={400}
  className="w-full h-auto"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```
