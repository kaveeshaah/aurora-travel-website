@echo off
REM Aurora Luxe Travel - Setup Script for Windows
echo 🌟 Setting up Aurora Luxe Travel Website...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

echo ✅ Node.js detected
echo.

REM Setup Frontend
echo 📦 Setting up frontend...
cd aurora-luxe
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install frontend dependencies
    pause
    exit /b 1
)
echo ✅ Frontend dependencies installed
cd ..

REM Setup Backend
echo 📦 Setting up backend...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Failed to install backend dependencies
    pause
    exit /b 1
)
echo ✅ Backend dependencies installed
cd ..

REM Create environment files
echo ⚙️  Creating environment files...
if not exist backend\.env (
    copy backend\env.example backend\.env
    echo ✅ Backend .env file created (please update with your settings)
) else (
    echo ℹ️  Backend .env file already exists
)

if not exist aurora-luxe\.env.local (
    echo NEXT_PUBLIC_API_URL=http://localhost:5000/api > aurora-luxe\.env.local
    echo ✅ Frontend .env.local file created
) else (
    echo ℹ️  Frontend .env.local file already exists
)

echo.
echo 🎉 Setup complete!
echo.
echo To start the development servers:
echo.
echo Terminal 1 (Backend):
echo   cd backend
echo   npm run dev
echo.
echo Terminal 2 (Frontend):
echo   cd aurora-luxe
echo   npm run dev
echo.
echo Then open http://localhost:3000 in your browser
echo.
echo 🌟 Welcome to Aurora Luxe Travel!
pause
