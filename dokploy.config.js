/**
 * Dokploy Configuration for Toolify Website
 * This file tells Dokploy how to build and deploy the application
 */

module.exports = {
  // Build configuration
  build: {
    // Use Dockerfile for building
    docker: {
      dockerfilePath: './Dockerfile',
      context: './',
    },

    // Alternative: npm build (not used with Dockerfile)
    // npm: {
    //   installCommand: 'npm install',
    //   buildCommand: 'npm run build',
    //   outputDirectory: '.next',
    // },

    // Environment variables for build
    env: {
      NODE_ENV: 'production',
      NEXT_TELEMETRY_DISABLED: '1',
    },
  },

  // Application runtime configuration
  app: {
    name: 'toolify-website',
    port: 3000,
    healthCheck: {
      path: '/',
      interval: 30000,
      timeout: 10000,
      retries: 3,
    },
  },

  // Resource limits (optional)
  resources: {
    memory: '512Mi',
    cpu: '0.5',
  },

  // Domain configuration
  domain: {
    // Set your domain here or configure in Dokploy UI
    // domain: 'toolify.yourdomain.com',
  },
};
