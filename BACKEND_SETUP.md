# Backend Setup & Data Storage Guide

## How Data Storage Works

### Database: MySQL
- **Database Name**: `studentdatabase` (you already created this)
- **Table Name**: `students` (will be created automatically)
- **ORM**: Hibernate/JPA (handles all database operations)

### Automatic Table Creation

When you run the backend, Hibernate will:
1. ✅ Connect to your MySQL database
2. ✅ Check if `students` table exists
3. ✅ Create the table automatically if it doesn't exist
4. ✅ Update the table structure if the entity changes

**No manual SQL needed!** The `@Entity` annotation in `Student.java` tells Hibernate what table to create.

## Step-by-Step: Run Backend in Eclipse

### Step 1: Import Project into Eclipse

1. Open Eclipse
2. **File → Import**
3. Select **Maven → Existing Maven Projects**
4. Click **Next**
5. Browse to: `C:\Users\HP\OneDrive\Desktop\StudentData\backend`
6. Make sure `pom.xml` is checked
7. Click **Finish**

### Step 2: Update Maven Dependencies

1. Right-click on the project in Package Explorer
2. Select **Maven → Update Project...**
3. Check **"Force Update of Snapshots/Releases"**
4. Click **OK**
5. Wait for dependencies to download (check Progress view)

### Step 3: Verify Database Configuration

1. Open: `src/main/resources/application.properties`
2. Verify these settings match your MySQL:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/studentdatabase
   spring.datasource.username=root          # Change if different
   spring.datasource.password=root           # Change if different
   ```
3. **Important**: Update username/password if yours are different!

### Step 4: Ensure MySQL is Running

- Make sure MySQL Server is running
- Verify database `studentdatabase` exists
- Test connection if needed

### Step 5: Run the Application

1. Navigate to: `src/main/java/com/studentmanagement/StudentManagementSystemApplication.java`
2. Right-click on the file
3. Select **Run As → Java Application**
4. Watch the Console for output

### Step 6: Verify Backend is Running

Look for these messages in the Console:
```
Started StudentManagementSystemApplication in X.XXX seconds
Hibernate: create table students ...
```

**Success indicators:**
- ✅ "Started StudentManagementSystemApplication"
- ✅ No database connection errors
- ✅ Table creation messages (if first run)

### Step 7: Test the API

Open your browser and go to:
```
http://localhost:8080/api/students
```

You should see: `[]` (empty array - no students yet)

## Database Table Structure

The `students` table will have these columns:

| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT | Auto-increment primary key |
| first_name | VARCHAR(100) | Student's first name |
| last_name | VARCHAR(100) | Student's last name |
| email | VARCHAR(255) | Unique email address |
| phone | VARCHAR(10) | Phone number |
| date_of_birth | DATE | Date of birth |
| address | TEXT | Student address |
| department | VARCHAR(100) | Department name |
| enrollment_date | DATE | Enrollment date |
| status | VARCHAR(20) | ACTIVE/INACTIVE |

## How Data Flows

```
Frontend (React) 
    ↓ HTTP Request
REST API (Spring Boot Controller)
    ↓
Service Layer (Business Logic)
    ↓
Repository Layer (JPA/Hibernate)
    ↓
MySQL Database (studentdatabase.students table)
```

## Troubleshooting

### Error: "Access denied for user"
- **Solution**: Check username/password in `application.properties`
- Verify MySQL credentials

### Error: "Unknown database 'studentdatabase'"
- **Solution**: Create the database:
  ```sql
  CREATE DATABASE studentdatabase;
  ```

### Error: "Table 'students' doesn't exist"
- **Solution**: This is normal on first run
- Hibernate will create it automatically
- Check that `spring.jpa.hibernate.ddl-auto=update` is set

### Error: "Port 8080 already in use"
- **Solution**: Change port in `application.properties`:
  ```properties
  server.port=8081
  ```
- Then update frontend: `frontend/src/services/studentService.js`
- Change: `http://localhost:8080` to `http://localhost:8081`

### Backend starts but frontend can't connect
- **Solution**: Check CORS configuration
- Verify backend is running on port 8080
- Check browser console for errors

## Verify Everything Works

1. **Backend Running**: `http://localhost:8080/api/students` returns `[]`
2. **Frontend Running**: `http://localhost:3000` shows the UI
3. **Add a Student**: Fill form and submit
4. **Check Database**: 
   - Open MySQL Workbench or command line
   - Run: `SELECT * FROM studentdatabase.students;`
   - You should see your student data!

## Quick Checklist

- [ ] MySQL Server is running
- [ ] Database `studentdatabase` exists
- [ ] Username/password correct in `application.properties`
- [ ] Project imported in Eclipse
- [ ] Maven dependencies downloaded
- [ ] Backend application started successfully
- [ ] Can access `http://localhost:8080/api/students`
- [ ] Frontend can connect to backend

## Next Steps

Once backend is running:
1. ✅ Frontend will automatically connect
2. ✅ You can add students through the UI
3. ✅ Data will be saved to MySQL database
4. ✅ All CRUD operations will work

Your data is now being stored permanently in MySQL! 🎉



