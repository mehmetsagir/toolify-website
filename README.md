# Toolify Website

Official landing page for [Toolify](https://github.com/mehmetsagir/toolify) - an open-source voice-to-text productivity app for macOS.

> **About Toolify**: A powerful macOS application that converts your voice to text instantly. Use local Whisper models offline or connect to OpenAI API. Perfect for creators, writers, and anyone who thinks faster than they type. [Try Toolify →](https://github.com/mehmetsagir/toolify)

Built with Next.js, Tailwind CSS, and Framer Motion.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.1-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red.svg)

## 🎙️ About Toolify

**Toolify** is an open-source macOS application that transforms your voice into text at the speed of thought:
- ⚡ **Instant Capture**: Hit a keyboard shortcut, speak, and your words appear
- 🔐 **Privacy-First**: Use local Whisper models completely offline
- ☁️ **Flexible**: Or connect to OpenAI API for cloud processing
- 📋 **Auto-Copy**: Text automatically copied to clipboard
- 🎯 **Global Shortcut**: Access from anywhere on your Mac

👉 **[Download Toolify](https://github.com/mehmetsagir/toolify/releases)** | **[View Source Code](https://github.com/mehmetsagir/toolify)**

---

This repository contains the **official landing page** for Toolify. Both the website and the app are open-source projects.

## 🚀 Features

- **Modern UI**: Built with Tailwind CSS and Shadcn UI components
- **Smooth Animations**: Framer Motion for delightful interactions
- **3D Effects**: Interactive tilt and floating elements
- **Responsive Design**: Optimized for all screen sizes
- **Mobile-First**: Fully responsive from mobile to desktop
- **Docker Ready**: Multi-stage builds for production
- **TypeScript**: Fully typed codebase
- **Fast & Optimized**: Built with Next.js 16 and Turbopack

## 📋 Prerequisites

- Node.js 20+ or Docker
- npm, yarn, pnpm, or bun

## 🛠️ Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/mehmetsagir/toolify-website.git
cd toolify-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🐳 Docker Deployment

### Production Build

```bash
# Build the Docker image
docker build -t toolify-website .

# Run the container
docker run -p 3000:3000 toolify-website
```

### Using Docker Compose

```bash
# Build and start production container
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
```

Access your application at http://localhost:3000

### Multi-Stage Build

The Dockerfile uses a multi-stage build for optimization:
- **deps**: Installs production dependencies
- **builder**: Builds the Next.js application
- **runner**: Minimal production image with only necessary files

## 📁 Project Structure

```
toolify-website/
├── app/              # Next.js app directory
│   ├── layout.tsx   # Root layout
│   ├── page.tsx     # Landing page
│   └── globals.css  # Global styles
├── config/           # Configuration files
│   └── constants.ts # External URLs and constants
├── components.json   # Shadcn UI config
├── lib/             # Utility functions
├── public/          # Static assets
├── Dockerfile       # Production multi-stage build
└── docker-compose.yml # Container orchestration
```

## 🎨 Customization

### Branding

Edit `app/layout.tsx` to update:
- Page title
- Meta description
- Favicon

### Styling

Modify `app/globals.css` to customize:
- Color scheme
- Font families
- CSS variables

### Content

Update `app/page.tsx` to change:
- Hero section text
- Feature highlights
- Call-to-action buttons

## 🧪 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🔧 Environment Variables

Optional environment variables:

```bash
NODE_ENV=production  # Set environment
PORT=3000            # Server port
NEXT_TELEMETRY_DISABLED=1  # Disable Next.js telemetry
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### Contributing to This Project (Website)
1. Fork this repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Contributing to Toolify (App)
Want to contribute to the Toolify app itself? Visit the [Toolify repository](https://github.com/mehmetsagir/toolify) to contribute to the macOS application.

## 📞 Support

**For Website Issues**: Open an issue in this repository

**For Toolify App Issues**: Open an issue in the [Toolify repository](https://github.com/mehmetsagir/toolify/issues)

## 🔗 Related Projects

- **[Toolify App](https://github.com/mehmetsagir/toolify)** - The main macOS application (open-source)
- **[Toolify Website](https://github.com/mehmetsagir/toolify-website)** - This landing page (open-source)

## ⭐ Show Your Support

If you find Toolify useful, please consider:
- ⭐ [Star the Toolify app](https://github.com/mehmetsagir/toolify)
- ⭐ [Star this website](https://github.com/mehmetsagir/toolify-website)
- 📥 [Download and try Toolify](https://github.com/mehmetsagir/toolify/releases)
- 📢 Share with others who might benefit from voice-to-text productivity tools

---

**Made with ❤️ by the open-source community**
