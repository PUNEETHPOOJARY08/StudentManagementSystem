# 🚀 Render Deployment - Quick Start Guide

## ⚠️ IMPORTANT: Before You Start

I've updated your code to support PostgreSQL (needed for Render). 

**You need to push these changes to GitHub first:**

```bash
cd C:\Users\HP\OneDrive\Desktop\StudentData
git add backend/pom.xml backend/src/main/resources/application-prod.properties
git commit -m "Add PostgreSQL support for Render deployment"
git push origin main
```

**Wait 1-2 minutes** for GitHub to update, then continue!

---

## PART A: Deploy Backend (10 minutes)

### Step 1: Go to Render
1. Open: **https://render.com**
2. Sign up/Login with **GitHub**

### Step 2: Create Web Service
1. Click **"New +"** → **"Web Service"**
2. Connect GitHub → Select: **`PUNEETHPOOJARY08/StudentManagementSystem`**
3. Click **"Connect"**

### Step 3: Fill Configuration

**Basic Settings:**
- **Name:** `student-backend`
- **Root Directory:** `backend` ⚠️ IMPORTANT!
- **Environment:** `Java`
- **Build Command:** `mvn clean install -DskipTests`
- **Start Command:** `java -jar target/student-management-system-1.0.0.jar`
- **Instance Type:** `Free`

**Add Database:**
- Scroll down → Click **"Add PostgreSQL"** → Select **"Free"**

**Environment Variables:**
Click "Add Environment Variable" and add:

1. **Key:** `SPRING_PROFILES_ACTIVE`  
   **Value:** `prod`

2. **Key:** `SPRING_DATASOURCE_URL`  
   **Value:** Click **"Link Database"** → Select your PostgreSQL database  
   (Render auto-fills this!)

3. **Key:** `SPRING_DATASOURCE_USERNAME`  
   **Value:** (Auto-filled from database)

4. **Key:** `SPRING_DATASOURCE_PASSWORD`  
   **Value:** (Auto-filled from database)

5. **Key:** `SPRING_JPA_HIBERNATE_DDL_AUTO`  
   **Value:** `update`

6. **Key:** `SPRING_JPA_PROPERTIES_HIBERNATE_DIALECT`  
   **Value:** `org.hibernate.dialect.PostgreSQLDialect`

### Step 4: Deploy
1. Click **"Create Web Service"**
2. Wait 5-10 minutes for deployment
3. **Copy your backend URL** (e.g., `https://student-backend.onrender.com`)

### Step 5: Test Backend
1. Open: `https://your-backend-url.onrender.com/api/students`
2. Should see: `[]` (empty array = working!)

---

## PART B: Deploy Frontend (5 minutes)

### Step 1: Create Static Site
1. In Render dashboard, click **"New +"** → **"Static Site"**
2. Connect GitHub → Select same repo

### Step 2: Configure
- **Name:** `student-frontend`
- **Root Directory:** `frontend` ⚠️ IMPORTANT!
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `build`

### Step 3: Add Environment Variable
- **Key:** `REACT_APP_API_URL`
- **Value:** `https://your-backend-url.onrender.com/api/students`
  (Use your backend URL from Part A!)

### Step 4: Deploy
1. Click **"Create Static Site"**
2. Wait 2-3 minutes
3. **Copy your frontend URL** (e.g., `https://student-frontend.onrender.com`)

---

## PART C: Update CORS (2 minutes)

1. Go back to your **backend service** in Render
2. Go to **"Environment"** tab
3. Add variable:
   - **Key:** `CORS_ALLOWED_ORIGINS`
   - **Value:** `https://your-frontend-url.onrender.com`
4. Click **"Save Changes"**
5. Render will auto-redeploy

---

## ✅ Test Everything!

1. Open your frontend URL
2. Try creating a student
3. Should work! 🎉

---

## 🐛 Troubleshooting

**Backend not starting?**
- Check Render logs: Click service → "Logs" tab
- Make sure Root Directory is `backend`

**Frontend 404?**
- Check Root Directory is `frontend`
- Check Build Command: `npm install && npm run build`

**Database errors?**
- Make sure all 6 environment variables are set
- Check PostgreSQL is running (green status)

---

**Need help?** Tell me which step you're on and what error you see!
