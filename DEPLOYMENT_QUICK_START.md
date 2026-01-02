# 🚀 Quick Deployment Guide

## Easiest Method: Railway (Backend) + Vercel (Frontend)

### Step 1: Deploy Backend on Railway (5 minutes)

1. Go to [railway.app](https://railway.app) and sign up (free)
2. Click **"New Project"** → **"Deploy from GitHub repo"**
3. Connect GitHub and select your repo: `PUNEETHPOOJARY08/StudentManagementSystem`
4. Click **"+ New"** → **"Database"** → **"MySQL"** (Railway creates it automatically)
5. Click **"+ New"** → **"GitHub Repo"** → Select your repo again
6. Set **Root Directory:** `backend`
7. Go to your backend service → **"Variables"** tab
8. Add these environment variables (get values from MySQL service → Variables):
   ```
   SPRING_DATASOURCE_URL=jdbc:mysql://[HOST]:[PORT]/railway?allowPublicKeyRetrieval=true&useSSL=true&serverTimezone=UTC
   SPRING_DATASOURCE_USERNAME=[USERNAME from MySQL service]
   SPRING_DATASOURCE_PASSWORD=[PASSWORD from MySQL service]
   SPRING_PROFILES_ACTIVE=prod
   PORT=8080
   ```
9. Railway will auto-deploy! Get your backend URL (e.g., `https://your-app.railway.app`)

### Step 2: Deploy Frontend on Vercel (3 minutes)

1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Click **"Add New"** → **"Project"**
3. Import from GitHub → Select your repo
4. Configure:
   - **Root Directory:** `frontend`
   - **Framework Preset:** Create React App
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
5. Click **"Environment Variables"** → Add:
   ```
   REACT_APP_API_URL=https://your-backend-url.railway.app/api/students
   ```
   (Replace with your actual Railway backend URL)
6. Click **"Deploy"**
7. Get your frontend URL (e.g., `https://your-app.vercel.app`)

### Step 3: Update CORS (2 minutes)

1. Go back to Railway → Your backend service → **"Variables"**
2. Add:
   ```
   CORS_ALLOWED_ORIGINS=https://your-frontend-url.vercel.app
   ```
3. Railway will redeploy automatically

### Step 4: Test! ✅

1. Visit your Vercel frontend URL
2. Try creating a student
3. Check if data appears in Railway MySQL database

---

## 🎯 That's it! Your app is live!

**Backend URL:** `https://your-app.railway.app`  
**Frontend URL:** `https://your-app.vercel.app`

---

## 📝 Important Notes

- **Free tiers available** on both platforms
- **Auto-deploys** on every GitHub push
- **Environment variables** are secure (not in code)
- **MySQL database** is managed by Railway

---

## 🐛 Troubleshooting

**Backend not starting?**
- Check Railway logs
- Verify database connection string
- Ensure `SPRING_PROFILES_ACTIVE=prod` is set

**Frontend can't connect?**
- Verify `REACT_APP_API_URL` matches your Railway backend URL
- Check CORS settings in Railway variables
- Open browser console for errors

**Need help?** Check the full [DEPLOYMENT.md](./DEPLOYMENT.md) guide!
