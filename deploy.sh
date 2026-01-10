#!/bin/bash

# Toolify Website Docker Deployment Script

set -e

echo "🚀 Starting Toolify Website deployment..."

# Build and start production container
docker-compose up -d --build

echo "✅ Deployment completed!"
echo "🌐 Access the application at: http://localhost:3000"
echo ""
echo "📋 Useful commands:"
echo "   View logs:    docker-compose logs -f"
echo "   Stop:         docker-compose down"
echo "   Restart:      docker-compose restart"
echo "   Development:   docker-compose --profile dev up"
