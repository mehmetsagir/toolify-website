# Toolify Website

A modern, responsive landing page for Toolify - built with Next.js, Tailwind CSS, and Framer Motion.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.1-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## 🚀 Features

- **Modern UI**: Built with Tailwind CSS and Shadcn UI components
- **Smooth Animations**: Framer Motion for delightful interactions
- **3D Effects**: Interactive tilt and floating elements
- **Responsive Design**: Optimized for all screen sizes
- **Dark Mode Ready**: Full theme support with CSS variables
- **Docker Ready**: Multi-stage builds for production and development
- **TypeScript**: Fully typed codebase
- **Dokploy Configured**: One-click deployment ready

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

### Docker Development

Using Docker Compose (recommended for development):

```bash
# Start development mode with hot reload
docker-compose --profile dev up

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
```

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

# Or use the deploy script
./deploy.sh
```

Access your application at http://localhost:3000

### Multi-Stage Build

The Dockerfile uses a multi-stage build for optimization:
- **deps**: Installs production dependencies
- **builder**: Builds the Next.js application
- **runner**: Minimal production image with only necessary files

## ☁️ Cloud Deployment

### Dokploy Deployment (Recommended)

Dokploy configuration is included for easy one-click deployment:

**Step 1: Connect Repository**
```bash
1. Go to your Dokploy dashboard
2. Add a new application
3. Connect GitHub repository: mehmetsagir/toolify-website
```

**Step 2: Configure Deployment**

The `dokploy.config.js` file provides automatic configuration:

| Setting | Value |
|---------|--------|
| Build Type | Docker |
| Dockerfile | `Dockerfile` (root) |
| Port | 3000 |
| Memory | 512Mi |
| CPU | 0.5 |
| Health Check | `/` every 30s |

**Step 3: Deploy**
1. Click "Deploy" button
2. Dokploy will:
   - Clone the repository
   - Build Docker image using Dockerfile
   - Start container with health checks
   - Assign domain

**Environment Variables (Optional)**
Configure in Dokploy UI or `dokploy.config.js`:
```bash
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

**Custom Domain (Optional)**
Edit `dokploy.config.js`:
```javascript
domain: {
  domain: 'toolify.yourdomain.com',
},
```

**Manual Deployment via Dokploy CLI**
```bash
# Install Dokploy CLI (if needed)
npm install -g dokploy

# Deploy
dokploy deploy
```

### Dokploy Troubleshooting

**Build Issues:**
- Check Dockerfile syntax: `docker build -t test .`
- Ensure Node.js 20+ compatibility

**Runtime Issues:**
- Check logs: `dokploy logs`
- Verify port 3000 is exposed
- Health check endpoint: `curl http://your-domain.com/`

**Performance:**
- Increase memory if needed (edit `dokploy.config.js`)
- CPU scaling: 0.5 → 1.0 for heavier loads

### Vercel Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

### Other Platforms

This project can be deployed on any platform that supports Docker:
- Railway
- Render
- DigitalOcean App Platform
- AWS ECS
- Google Cloud Run
- Azure Container Apps

## 📁 Project Structure

```
toolify-website/
├── app/              # Next.js app directory
│   ├── layout.tsx   # Root layout
│   ├── page.tsx     # Hero page
│   └── globals.css  # Global styles
├── components.json   # Shadcn UI config
├── dokploy.config.js # Dokploy configuration
├── lib/            # Utility functions
├── public/          # Static assets
├── Dockerfile       # Production build
├── Dockerfile.dev   # Development build
├── docker-compose.yml # Orchestration
└── deploy.sh        # Deployment script
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

## 📞 Support

For issues and questions, please open an issue on GitHub.
