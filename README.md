# Daryl's Portfolio Website

A modern, premium dark-themed portfolio website built with React and TailwindCSS, featuring smooth animations and responsive design.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop)

## ✨ Features

- **Modern Dark Theme** - Sleek dark design with electric blue (#1F77FF) and gold (#FFD700) accents
- **Smooth Animations** - Powered by Framer Motion for fade-ins, hover effects, and scroll-triggered animations
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Interactive Sections**:
  - Hero section with animated particles and gradient text
  - About section with profile image and stats
  - Skills showcase with hover effects
  - Project gallery with lightbox functionality
  - Animated timeline for experience
  - Education cards with achievements
  - Contact form with validation
- **SEO Optimized** - Proper meta tags and semantic HTML

## 🛠️ Technology Stack

- **React** - UI library
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Yet Another React Lightbox** - Image gallery/lightbox
- **Create React App** - Build tooling

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/daryl-portfolio.git
   cd daryl-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

   The site will open at [http://localhost:3000](http://localhost:3000)

## 🚀 Build for Production

Create an optimized production build:

```bash
npm run build
```

The build folder will contain the production-ready files.

## 📁 Project Structure

```
daryl-portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── SectionTitle.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Education.jsx
│   │   │   └── Contact.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── utils/
│   │   └── animations.js
│   ├── App.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: '#1F77FF',    // Electric blue
  secondary: '#FFD700',  // Gold
  dark: '#0F111A',       // Background
}
```

### Content

Update the content in each section component:
- **Hero**: Edit `src/components/sections/Hero.jsx`
- **About**: Edit `src/components/sections/About.jsx`
- **Skills**: Edit `src/components/sections/Skills.jsx`
- **Projects**: Edit `src/components/sections/Projects.jsx`
- **Experience**: Edit `src/components/sections/Experience.jsx`
- **Education**: Edit `src/components/sections/Education.jsx`
- **Contact**: Edit `src/components/sections/Contact.jsx`

### Images

Replace placeholder images with your own:
- Profile image in About section
- Project thumbnails in Projects section
- Update image URLs in respective component files

## 🌐 Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify Drop](https://app.netlify.com/drop)

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts

Or connect your GitHub repository to Vercel for automatic deployments.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- Lazy loading for images
- Optimized animations with Framer Motion
- Minimal bundle size with TailwindCSS purging
- Fast page load times

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Daryl**
- LinkedIn: [Your LinkedIn](https://linkedin.com)
- GitHub: [Your GitHub](https://github.com)
- Email: daryl@example.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Images from [Unsplash](https://unsplash.com)

---

Made with ❤️ by Daryl
