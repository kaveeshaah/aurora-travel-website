#!/bin/bash

# Aurora Luxe Travel - Setup Script
echo "🌟 Setting up Aurora Luxe Travel Website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Setup Frontend
echo "📦 Setting up frontend..."
cd aurora-luxe
npm install
echo "✅ Frontend dependencies installed"

# Setup Backend
echo "📦 Setting up backend..."
cd ../backend
npm install
echo "✅ Backend dependencies installed"

# Create environment files
echo "⚙️  Creating environment files..."
if [ ! -f .env ]; then
    cp env.example .env
    echo "✅ Backend .env file created (please update with your settings)"
else
    echo "ℹ️  Backend .env file already exists"
fi

cd ../aurora-luxe
if [ ! -f .env.local ]; then
    echo "NEXT_PUBLIC_API_URL=http://localhost:5000/api" > .env.local
    echo "✅ Frontend .env.local file created"
else
    echo "ℹ️  Frontend .env.local file already exists"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "To start the development servers:"
echo ""
echo "Terminal 1 (Backend):"
echo "  cd backend"
echo "  npm run dev"
echo ""
echo "Terminal 2 (Frontend):"
echo "  cd aurora-luxe"
echo "  npm run dev"
echo ""
echo "Then open http://localhost:3000 in your browser"
echo ""
echo "🌟 Welcome to Aurora Luxe Travel!"
