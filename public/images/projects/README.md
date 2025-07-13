# 🎭 Project Images

Folder ini untuk menyimpan screenshot dan gambar project Anda.

## 📁 File yang Direkomendasikan

Berdasarkan project yang sudah didefinisikan di `components/Projects.tsx`:

- `ecommerce.jpg` - Screenshot E-Commerce Platform
- `ai-chat.jpg` - Screenshot AI Chat Application
- `portfolio.jpg` - Screenshot Portfolio Website
- `task-manager.jpg` - Screenshot Task Management App
- `weather.jpg` - Screenshot Weather Dashboard
- `nft-marketplace.jpg` - Screenshot NFT Marketplace

## 🎯 Cara Menggunakan

1. **Ganti Screenshot Project**:

   - Letakkan screenshot project Anda dengan nama yang sesuai
   - Atau ubah nama file di `components/Projects.tsx`

2. **Tambahkan Project Baru**:
   - Tambahkan screenshot baru
   - Update array `projects` di `components/Projects.tsx`

## 📏 Ukuran yang Direkomendasikan

- **Project Screenshot**: 600x400px (landscape)
- **Mobile Screenshot**: 400x800px (portrait)
- **Desktop Screenshot**: 1200x800px (landscape)

## 🔧 Format yang Didukung

- JPG/JPEG (direkomendasikan untuk screenshot)
- PNG (untuk screenshot dengan detail yang lebih baik)
- WebP (format modern dengan kompresi terbaik)

## 📝 Contoh Penggunaan

```jsx
// Di components/Projects.tsx
const projects = [
  {
    id: 1,
    title: "My Project",
    image: "/images/projects/my-project.jpg", // Path ke screenshot Anda
    description: "Description of your project",
    // ...
  },
];
```

## ⚠️ Tips

1. **Kualitas**: Gunakan screenshot berkualitas tinggi
2. **Konsistensi**: Usahakan semua screenshot memiliki ukuran yang sama
3. **Nama File**: Gunakan nama file yang deskriptif dan tanpa spasi
4. **Optimasi**: Kompres gambar untuk performa website yang lebih baik
