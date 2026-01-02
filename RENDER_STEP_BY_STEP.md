# 🚀 Render Deployment - Step by Step Guide

Follow these steps **one at a time**. Don't rush!

---

## PART A: Deploy Backend on Render

### Step 1: Sign Up / Login to Render

1. Go to: **https://render.com**
2. Click **"Get Started for Free"** or **"Sign Up"**
3. Choose **"Sign up with GitHub"** (easiest option)
4. Authorize Render to access your GitHub account
5. You'll be taken to your Render dashboard

**✅ Checkpoint:** You should see "Dashboard" or "New +" button

---

### Step 2: Create Backend Web Service

1. Click the **"New +"** button (top right)
2. Select **"Web Service"**
3. You'll see "Connect a repository"
4. Click **"Connect account"** if you haven't connected GitHub yet
5. Select your repository: **`PUNEETHPOOJARY08/StudentManagementSystem`**
6. Click **"Connect"**

**✅ Checkpoint:** You should see configuration form

---

### Step 3: Configure Backend Service

Fill in these fields **exactly**:

1. **Name:**
   - Type: `student-backend`
   - (This is just a name for your service)

2. **Region:**
   - Leave default (usually "Oregon (US West)")

3. **Branch:**
   - Leave default: `main`

4. **Root Directory:**
   - Click the field
   - Type: `backend`
   - **IMPORTANT:** This tells Render where your backend code is

5. **Runtime:**
   - Select: **"Java"**

6. **Build Command:**
   - Type: `mvn clean install -DskipTests`
   - (This builds your Spring Boot app)

7. **Start Command:**
   - Type: `java -jar target/student-management-system-1.0.0.jar`
   - (This runs your app)

8. **Instance Type:**
   - Select: **"Free"** (if available)

**✅ Checkpoint:** All fields filled, ready to add database

---

### Step 4: Add PostgreSQL Database

**IMPORTANT:** Render's free tier uses PostgreSQL, not MySQL. We'll configure it to work.

1. Scroll down to **"Add Database"** section
2. Click **"Add PostgreSQL"**
3. Select **"Free"** plan
4. Database will be created automatically
5. **Note:** Render will provide database connection details automatically

**✅ Checkpoint:** Database added, you'll see it in your services list

---

### Step 5: Configure Environment Variables

1. Scroll down to **"Environment Variables"** section
2. Click **"Add Environment Variable"** button

**Add these variables one by one:**

**Variable 1:**
- **Key:** `SPRING_PROFILES_ACTIVE`
- **Value:** `prod`
- Click **"Add"**

**Variable 2:**
- **Key:** `SPRING_DATASOURCE_URL`
- **Value:** Click **"Link Database"** next to the field
- Select your PostgreSQL database
- Render will auto-fill the connection string
- Click **"Add"**

**Variable 3:**
- **Key:** `SPRING_DATASOURCE_USERNAME`
- **Value:** (Render will auto-fill from database)
- Click **"Add"**

**Variable 4:**
- **Key:** `SPRING_DATASOURCE_PASSWORD`
- **Value:** (Render will auto-fill from database)
- Click **"Add"**

**Variable 5:**
- **Key:** `SPRING_JPA_HIBERNATE_DDL_AUTO`
- **Value:** `update`
- Click **"Add"**

**Variable 6:**
- **Key:** `SPRING_JPA_PROPERTIES_HIBERNATE_DIALECT`
- **Value:** `org.hibernate.dialect.PostgreSQLDialect`
- Click **"Add"**

**✅ Checkpoint:** All 6 environment variables added

---

### Step 6: Update Backend for PostgreSQL

**IMPORTANT:** Your backend uses MySQL, but Render free tier uses PostgreSQL. We need to add PostgreSQL dependency.

Let me check your pom.xml and update it:
<｜tool▁calls▁begin｜><｜tool▁call▁begin｜>
read_file