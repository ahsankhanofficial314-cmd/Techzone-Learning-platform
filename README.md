# TechZone Learning Platform 🚀

Premium Institutional-Grade Educational Portal (MERN Stack).

## 📂 Project Structure
- `frontend/`: React + Vite (Tailwind 4)
- `backend/`: Node.js + Express + Mongoose

## 🛠️ Local Development

1. **Install Dependencies**:
   ```bash
   npm run install-all
   ```

2. **Run Both Servers**:
   ```bash
   npm run dev
   ```
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:5000`

## 🚀 Deployment Instructions

### 1. Vercel (Frontend & Backend Monorepo)
The project is pre-configured with `vercel.json` at the root.
- Connect this repository to **Vercel**.
- Vercel will automatically detect the configuration and set up:
  - Frontend static hosting from `frontend/dist`.
  - Backend API functions from `backend/index.js`.
- **Environment Variables**: Add `MONGODB_URI` and `JWT_SECRET` in Vercel settings.

### 2. Render (Backend Only)
The project includes `render.yaml`.
- Connect to **Render** and select "Blueprint".
- It will automatically create the Backend Web Service.

## ⚠️ Important Notes
- **Environment Variables**: Ensure you update `.env` files in both folders with your actual credentials.
- **Auto Seeding**: The backend automatically seeds the database with demo courses on startup if the database is empty.

---
*Created and stabilized for TechZone.*
