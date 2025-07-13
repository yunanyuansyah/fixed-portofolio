# 🚀 Futuristic Portfolio Website

A stunning, responsive portfolio website inspired by Patrick David's design, built with Next.js, Tailwind CSS, and modern web technologies. Features a futuristic, artsy design with smooth animations and interactive elements.

## ✨ Features

- **🎨 Futuristic Design**: Cyberpunk-inspired design with neon colors and glass morphism effects
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Smooth Animations**: Powered by Framer Motion for fluid, engaging interactions
- **🎯 Interactive Elements**: Custom cursor, particle effects, and hover animations
- **📊 Skills Visualization**: Animated progress bars and tech stack showcase
- **🎭 Project Showcase**: Filterable project gallery with interactive cards
- **📧 Contact Form**: Functional contact form with toast notifications
- **🌐 Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Type Animation**: React Type Animation
- **3D Graphics**: Three.js (ready for future enhancements)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd myPorto
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
myPorto/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Hero.tsx             # Hero section with animated text
│   ├── About.tsx            # About section with timeline
│   ├── Skills.tsx           # Skills and tech stack
│   ├── Projects.tsx         # Project showcase with filters
│   ├── Contact.tsx          # Contact form and info
│   ├── Navigation.tsx       # Navigation bar
│   └── Cursor.tsx           # Custom cursor component
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Customization

### Colors and Theme

The color scheme is defined in `tailwind.config.js`. You can customize:

```javascript
colors: {
  neon: {
    blue: '#00d4ff',
    purple: '#8b5cf6',
    pink: '#ec4899',
    green: '#10b981',
    yellow: '#f59e0b',
  }
}
```

### Personal Information

Update the following files with your information:

1. **Hero Section** (`components/Hero.tsx`):

   - Change "Your Name" to your actual name
   - Update the animated text sequence
   - Modify the description

2. **About Section** (`components/About.tsx`):

   - Update the personal description
   - Modify the timeline with your experience
   - Adjust the statistics

3. **Skills Section** (`components/Skills.tsx`):

   - Update the tech stack icons and names
   - Modify skill levels and categories
   - Add/remove skills as needed

4. **Projects Section** (`components/Projects.tsx`):

   - Replace project data with your actual projects
   - Update images, descriptions, and links
   - Modify categories and filters

5. **Contact Section** (`components/Contact.tsx`):
   - Update contact information
   - Modify social media links
   - Customize the contact form

### Images and Assets

1. **Project Images**: Replace the Unsplash URLs in `components/Projects.tsx` with your project screenshots
2. **Profile Picture**: Add your profile picture to the public folder and reference it
3. **Favicon**: Replace the default favicon with your own

### Animations

Customize animations in `tailwind.config.js`:

```javascript
animation: {
  'gradient': 'gradient 8s linear infinite',
  'float': 'float 6s ease-in-out infinite',
  'glow': 'glow 2s ease-in-out infinite alternate',
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🎯 Performance Optimization

- **Image Optimization**: Uses Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Lazy Loading**: Components load as needed
- **Minification**: Automatic CSS and JS minification

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding New Sections

1. Create a new component in the `components/` folder
2. Import and add it to `app/page.tsx`
3. Add navigation link in `components/Navigation.tsx`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by [Patrick David's Portfolio](https://bepatrickdavid.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Made with ❤️ and Next.js**
