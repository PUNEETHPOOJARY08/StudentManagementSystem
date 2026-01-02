# How to Run the Student Management System

## Prerequisites

Before running, make sure you have:
- ✅ Java 17 or higher installed
- ✅ Maven installed
- ✅ MySQL running with database `studentdatabase` created
- ✅ Node.js 14+ and npm installed

## Step 1: Verify Database Configuration

1. Open `backend/src/main/resources/application.properties`
2. Verify these settings match your MySQL setup:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/studentdatabase
   spring.datasource.username=root          # Change if different
   spring.datasource.password=root          # Change if different
   ```

## Step 2: Run the Backend (Spring Boot)

### Option A: Using Maven (Recommended)

1. Open a terminal/command prompt
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Build the project:
   ```bash
   mvn clean install
   ```
4. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

### Option B: Using Eclipse/IDE

1. Import the project into Eclipse:
   - File → Import → Existing Maven Projects
   - Select the `backend` folder
   - Click Finish

2. Right-click on `StudentManagementSystemApplication.java`
   - Run As → Java Application

### Verify Backend is Running

- You should see: "Started StudentManagementSystemApplication"
- Backend will be available at: `http://localhost:8080`
- Test API: Open browser and go to `http://localhost:8080/api/students`

## Step 3: Run the Frontend (React)

1. Open a **NEW** terminal/command prompt (keep backend running)
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies (first time only):
   ```bash
   npm install
   ```
4. Start the React development server:
   ```bash
   npm start
   ```

### Verify Frontend is Running

- Browser should automatically open to `http://localhost:3000`
- If not, manually open: `http://localhost:3000`
- You should see the Student Management System interface

## Step 4: Use the Application

1. Click "Add New Student" button
2. Fill in the student form
3. Click "Create Student"
4. View, edit, or delete students from the list
5. Use the search bar to find students

## Troubleshooting

### Backend Issues

**Port 8080 already in use:**
- Change port in `application.properties`: `server.port=8081`
- Update frontend `studentService.js`: Change `API_BASE_URL` to `http://localhost:8081`

**Database connection error:**
- Verify MySQL is running
- Check database name is `studentdatabase`
- Verify username and password in `application.properties`
- Test connection: `mysql -u root -p` then `USE studentdatabase;`

**Maven not found:**
- Install Maven or use IDE's built-in Maven
- Or use: `./mvnw spring-boot:run` (if mvnw exists)

### Frontend Issues

**npm install fails:**
- Try: `npm install --legacy-peer-deps`
- Or: `npm cache clean --force` then `npm install`

**Port 3000 already in use:**
- React will ask to use a different port (usually 3001)
- Or stop the process using port 3000

**Cannot connect to backend:**
- Verify backend is running on port 8080
- Check browser console for CORS errors
- Verify `API_BASE_URL` in `frontend/src/services/studentService.js`

**Module not found errors:**
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again

## Quick Commands Summary

### Backend:
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

### Frontend:
```bash
cd frontend
npm install
npm start
```

## Stopping the Application

- **Backend**: Press `Ctrl+C` in the backend terminal
- **Frontend**: Press `Ctrl+C` in the frontend terminal

## Next Steps

Once both are running:
- ✅ Backend API: `http://localhost:8080/api/students`
- ✅ Frontend UI: `http://localhost:3000`
- ✅ Start adding students!



