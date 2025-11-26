# Weather App

A modern, responsive weather application built with React, Vite, and Tailwind CSS. Get current weather conditions and 5-day forecasts for any location worldwide.

![Weather App Demo](https://img.shields.io/badge/Status-Active-brightgreen) ![React](https://img.shields.io/badge/React-19.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-7.2.4-purple) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-cyan)

## 🌟 Features

- **Current Weather**: Real-time weather conditions for any location
- **5-Day Forecast**: Extended weather predictions with daily highs and lows
- **Location Search**: Search for weather by city name
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Modern UI**: Clean interface using shadcn/ui components
- **Error Handling**: User-friendly error messages for invalid locations
- **Loading States**: Smooth loading indicators during API calls

## 🚀 Live Demo

*Add your deployed app URL here*

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 18 or higher)
- **pnpm** (recommended package manager) or npm
- **Visual Crossing Weather API Key** (free tier available)

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.17
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **Linting**: ESLint 9.39.1

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_WEATHER_API_KEY=your_visual_crossing_api_key_here
   VITE_GIPHY_API_KEY=your_giphy_api_key_here
   ```

4. **Get Visual Crossing API Key**
   - Visit [Visual Crossing Weather API](https://www.visualcrossing.com/resources/documentation/weather-api/)
   - Sign up for a free account
   - Copy your API key to the `.env` file

## 🚀 Getting Started

1. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

2. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

3. **Search for weather**
   - The app will automatically load weather for Nairobi by default
   - Use the search bar to find weather for any other city
   - View current conditions and 5-day forecast

## 📦 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
weather-app/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   └── ui/            # shadcn/ui components
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── input.jsx
│   │       └── spinner.jsx
│   ├── lib/
│   │   └── utils.js       # Utility functions
│   ├── assets/            # Images and icons
│   ├── App.jsx            # Main application component
│   ├── App.css            # Component-specific styles
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
├── .env                   # Environment variables (not tracked)
├── .gitignore             # Git ignore rules
├── components.json        # shadcn/ui configuration
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── jsconfig.json          # JavaScript configuration
├── package.json           # Dependencies and scripts
├── pnpm-lock.yaml         # pnpm lock file
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🎨 Design System

### Mobile-First Approach
This project follows a mobile-first design philosophy:
- **Mobile**: Base styles (no prefix)
- **Medium screens**: `md:` prefix (tablet and desktop)
- **Large screens**: `lg:` prefix (desktop)

### UI Components
Built with shadcn/ui for consistent, accessible components:
- **Card**: Container for weather information
- **Button**: Search submission
- **Input**: Location search field
- **Spinner**: Loading states

### Color Scheme
- Uses Tailwind's slate color palette
- CSS custom properties for theming
- Responsive design with proper contrast ratios

## 🌤️ Weather API Integration

### Visual Crossing Weather API
- **Endpoint**: Visual Crossing Timeline API
- **Features**: Current weather, 5-day forecast, conditions
- **Data**: Temperature, conditions, daily highs/lows
- **Error Handling**: Graceful degradation with user feedback

### API Response Structure
```json
{
  "days": [
    {
      "datetime": "2025-11-26",
      "temp": 25.4,
      "tempmax": 28.2,
      "tempmin": 22.1,
      "conditions": "Partly cloudy"
    }
  ]
}
```

## 🔒 Security & Environment Variables

- API keys stored in `.env` file (excluded from version control)
- Client-side API calls using environment variables
- No sensitive data exposed in the frontend
- Proper error handling for API failures

## 🧪 Code Quality

### ESLint Configuration
- React-specific linting rules
- Hooks and refresh plugin support
- Modern JavaScript standards

### Component Architecture
- Functional components with hooks
- Separation of concerns
- Reusable UI components
- Clean code principles

## 📱 Responsive Design

### Breakpoints
- **Mobile**: Default styles
- **md:**: Medium screens and up (768px+)
- **lg:**: Large screens and up (1024px+)

### Layout Features
- Flexible grid systems
- Adaptive component sizing
- Touch-friendly mobile interface
- Desktop optimization

## 🚀 Deployment

### Build for Production
```bash
pnpm build
```

### Deploy Options
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Custom Server**: Upload the `dist` folder to your web server

### Environment Variables in Production
Make sure to set your API keys in your hosting platform's environment variables section.

## 🐛 Troubleshooting

### Common Issues

**API Key Error**
```
Location not found. Please enter a valid city.
```
- Check your Visual Crossing API key
- Ensure the key is valid and has quota remaining

**Build Errors**
```bash
# Clear node modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Port Already in Use**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and patterns
- Add proper error handling
- Test on multiple screen sizes
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Visual Crossing](https://www.visualcrossing.com/) for the weather API
- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the icon library
- [Vite](https://vitejs.dev/) for the blazing fast build tool

## 📞 Support

If you encounter any issues or have questions:

1. Check the [troubleshooting section](#-troubleshooting)
2. Search existing [issues](https://github.com/your-repo/issues)
3. Create a new issue with detailed information
4. Contact the development team

---

Made with ❤️ using React, Vite, and Tailwind CSS