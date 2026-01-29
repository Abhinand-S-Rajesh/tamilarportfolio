# Tamil Startup Portfolio Website

A modern, responsive portfolio website built with React for Tamil Startup Company.

## Features

- 🎨 Modern and professional design
- 📱 Fully responsive (Mobile, Tablet, Desktop)
- ⚡ Fast and optimized performance
- 🎯 SEO-friendly structure
- 🚀 Easy to customize

## Sections

1. **Home/Hero** - Welcome section with call-to-action
2. **About Us** - Company story, mission, and values
3. **Services** - Showcase of services offered
4. **Portfolio** - Project showcase
5. **Founder & CEO** - Dedicated page for founder details
6. **Team** - Team members showcase
7. **Testimonials** - Client reviews
8. **Contact** - Contact form and information

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Update Content

1. **Company Information**: Edit component files in `src/components/`
2. **Founder Details**: Update `src/pages/Founder.jsx`
3. **Colors**: Modify CSS variables in `src/index.css`
4. **Images**: Replace placeholder divs with actual images

### Color Scheme

Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #f59e0b;
  /* ... */
}
```

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Header/
│   ├── Footer/
│   ├── Hero/
│   ├── About/
│   ├── Services/
│   ├── Portfolio/
│   ├── Team/
│   ├── Testimonials/
│   └── Contact/
├── pages/           # Page components
│   ├── Home.jsx
│   └── Founder.jsx
├── App.jsx          # Main app component
└── index.js         # Entry point
```

## Technologies Used

- React 18
- React Router DOM
- React Icons
- CSS3 (Flexbox & Grid)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Support

For questions or support, please contact the development team.
