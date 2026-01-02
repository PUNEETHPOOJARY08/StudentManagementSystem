# Deployment Guide for Student Management System

This guide covers deploying your full-stack application to various platforms.

## 📋 Table of Contents
- [Option 1: Railway (Recommended - Easiest)](#option-1-railway-recommended---easiest)
- [Option 2: Render](#option-2-render)
- [Option 3: Heroku](#option-3-heroku)
- [Option 4: Vercel + Railway](#option-4-vercel--railway)
- [Frontend Deployment](#frontend-deployment)

---

## Option 1: Railway (Recommended - Easiest)

Railway is the easiest option as it supports both backend and database in one place.

### Backend + Database on Railway

1. **Sign up at [railway.app](https://railway.app)** (free tier available)

2. **Create New Project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your GitHub account
   - Select `PUNEETHPOOJARY08/StudentManagementSystem`

3. **Add MySQL Database:**
   - In your project, click "+ New"
   - Select "Database" → "MySQL"
   - Railway will create a MySQL instance automatically

4. **Deploy Backend:**
   - Click "+ New" → "GitHub Repo"
   - Select your repository
   - Railway will auto-detect it's a Spring Boot app
   - Set Root Directory: `backend`

5. **Configure Environment Variables:**
   - Go to your backend service → "Variables"
   - Add these variables (Railway provides MySQL connection details):
     ```
     SPRING_DATASOURCE_URL=jdbc:mysql://[HOST]:[PORT]/railway?allowPublicKeyRetrieval=true&useSSL=true&serverTimezone=UTC
     SPRING_DATASOURCE_USERNAME=[USERNAME]
     SPRING_DATASOURCE_PASSWORD=[PASSWORD]
     JAVA_OPTS=-Xmx512m
     PORT=8080
     ```
   - Railway provides these values in the MySQL service → "Variables" tab

6. **Update CORS:**
   - Add your frontend URL to CORS allowed origins
   - In backend service → "Variables":
     ```
     CORS_ALLOWED_ORIGINS=https://your-frontend-url.vercel.app,https://your-frontend-url.netlify.app
     ```

7. **Deploy:**
   - Railway will automatically build and deploy
   - Get your backend URL (e.g., `https://your-app.railway.app`)

### Frontend on Vercel/Netlify

See [Frontend Deployment](#frontend-deployment) section below.

---

## Option 2: Render

### Backend on Render

1. **Sign up at [render.com](https://render.com)** (free tier available)

2. **Create Web Service:**
   - Click "New +" → "Web Service"
   - Connect GitHub → Select your repo
   - Configure:
     - **Name:** `student-management-backend`
     - **Root Directory:** `backend`
     - **Environment:** `Java`
     - **Build Command:** `./mvnw clean install -DskipTests`
     - **Start Command:** `java -jar target/student-management-system-1.0.0.jar`

3. **Add PostgreSQL Database (Render doesn't support MySQL on free tier):**
   - Click "New +" → "PostgreSQL"
   - Note the connection details

4. **Update Backend for PostgreSQL:**
   - You'll need to add PostgreSQL dependency to `pom.xml`:
     ```xml
     <dependency>
         <groupId>org.postgresql</groupId>
         <artifactId>postgresql</artifactId>
         <scope>runtime</scope>
     </dependency>
     ```
   - Update `application.properties` to use PostgreSQL

5. **Set Environment Variables:**
   - In your web service → "Environment":
     ```
     SPRING_DATASOURCE_URL=jdbc:postgresql://[HOST]:[PORT]/[DATABASE]
     SPRING_DATASOURCE_USERNAME=[USERNAME]
     SPRING_DATASOURCE_PASSWORD=[PASSWORD]
     SPRING_JPA_HIBERNATE_DDL_AUTO=update
     SPRING_JPA_PROPERTIES_HIBERNATE_DIALECT=org.hibernate.dialect.PostgreSQLDialect
     ```

6. **Deploy:**
   - Render will build and deploy automatically
   - Get your backend URL

---

## Option 3: Heroku

### Backend on Heroku

1. **Install Heroku CLI:**
   ```bash
   # Windows
   winget install Heroku.HerokuCLI
   ```

2. **Login:**
   ```bash
   heroku login
   ```

3. **Create App:**
   ```bash
   cd backend
   heroku create student-management-backend
   ```

4. **Add MySQL Add-on (JawsDB):**
   ```bash
   heroku addons:create jawsdb:kitefree
   ```

5. **Configure Environment Variables:**
   ```bash
   heroku config:set SPRING_PROFILES_ACTIVE=prod
   heroku config:set JAVA_OPTS=-Xmx512m
   ```

6. **Deploy:**
   ```bash
   git add .
   git commit -m "Prepare for Heroku deployment"
   git push heroku main
   ```

7. **Get Database URL:**
   ```bash
   heroku config:get JAWSDB_URL
   ```
   - Update your `application.properties` or use environment variables

---

## Option 4: Vercel + Railway

### Backend: Railway (as in Option 1)
### Frontend: Vercel

---

## Frontend Deployment

### Option A: Vercel (Recommended)

1. **Sign up at [vercel.com](https://vercel.com)** (free)

2. **Import Project:**
   - Click "Add New" → "Project"
   - Import from GitHub → Select your repo
   - Configure:
     - **Root Directory:** `frontend`
     - **Framework Preset:** Create React App
     - **Build Command:** `npm run build`
     - **Output Directory:** `build`

3. **Environment Variables:**
   - Add: `REACT_APP_API_URL=https://your-backend-url.railway.app/api/students`
   - Update `studentService.js` to use: `process.env.REACT_APP_API_URL || 'http://localhost:8085/api/students'`

4. **Deploy:**
   - Vercel will build and deploy automatically
   - Get your frontend URL

### Option B: Netlify

1. **Sign up at [netlify.com](https://netlify.com)** (free)

2. **Import Project:**
   - "Add new site" → "Import an existing project"
   - Connect GitHub → Select repo
   - Configure:
     - **Base directory:** `frontend`
     - **Build command:** `npm run build`
     - **Publish directory:** `frontend/build`

3. **Environment Variables:**
   - Site settings → Environment variables
   - Add: `REACT_APP_API_URL=https://your-backend-url/api/students`

4. **Deploy:**
   - Netlify will build and deploy

---

## 🔧 Required Code Changes for Deployment

### 1. Update Frontend to Use Environment Variables

Update `frontend/src/services/studentService.js`:

```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8085/api/students';
```

### 2. Create Production Application Properties

Create `backend/src/main/resources/application-prod.properties`:

```properties
# Server Configuration
server.port=${PORT:8080}

# Database Configuration - Use Environment Variables
spring.datasource.url=${SPRING_DATASOURCE_URL}
spring.datasource.username=${SPRING_DATASOURCE_USERNAME}
spring.datasource.password=${SPRING_DATASOURCE_PASSWORD}
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# Hibernate Configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=false
spring.jpa.properties.hibernate.format_sql=false
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

# CORS Configuration - Update with your frontend URL
spring.web.cors.allowed-origins=${CORS_ALLOWED_ORIGINS:http://localhost:3000}
spring.web.cors.allowed-methods=GET,POST,PUT,DELETE,OPTIONS
spring.web.cors.allowed-headers=*

# Logging
logging.level.com.studentmanagement=INFO
logging.level.org.springframework.web=INFO
```

### 3. Update CORS in Controller

Update `backend/src/main/java/com/studentmanagement/controller/StudentController.java`:

```java
@CrossOrigin(origins = {
    "${cors.allowed.origins:http://localhost:3000}"
})
```

---

## 📝 Quick Deployment Checklist

- [ ] Backend deployed and running
- [ ] Database created and connected
- [ ] Environment variables configured
- [ ] CORS updated with frontend URL
- [ ] Frontend deployed
- [ ] Frontend API URL updated
- [ ] Test CRUD operations
- [ ] Test from different devices/networks

---

## 🐛 Troubleshooting

### Backend Issues

**Port binding error:**
- Use `server.port=${PORT:8080}` in properties
- Platform will inject PORT variable

**Database connection failed:**
- Verify connection string format
- Check SSL settings (use `useSSL=true` for production)
- Verify database credentials

**CORS errors:**
- Update CORS allowed origins with exact frontend URL
- Include protocol (https://)

### Frontend Issues

**API calls failing:**
- Verify `REACT_APP_API_URL` environment variable
- Check browser console for errors
- Verify backend is accessible

**Build fails:**
- Check Node.js version (use 14+)
- Clear `node_modules` and reinstall
- Check for TypeScript errors if any

---

## 🔗 Useful Links

- [Railway Documentation](https://docs.railway.app)
- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Heroku Java Guide](https://devcenter.heroku.com/articles/getting-started-with-java)

---

## 💡 Tips

1. **Start with Railway** - It's the easiest for beginners
2. **Use environment variables** - Never commit secrets
3. **Test locally first** - Use production-like settings
4. **Monitor logs** - Check platform logs for errors
5. **Update README** - Add deployment URLs to your README

---

Good luck with your deployment! 🚀
