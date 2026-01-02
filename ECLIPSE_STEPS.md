# Eclipse Setup - Step by Step

## Step 1: Import the Project

1. Open Eclipse
2. Go to **File → Import**
3. Expand **Maven** folder
4. Select **Existing Maven Projects**
5. Click **Next**
6. Click **Browse** button
7. Navigate to: `C:\Users\HP\OneDrive\Desktop\StudentData\backend`
8. Select the `backend` folder
9. Make sure `pom.xml` is checked in the list
10. Click **Finish**

## Step 2: Wait for Maven to Download Dependencies

- Eclipse will automatically start downloading Maven dependencies
- Watch the **Progress** view at the bottom right
- This may take 2-5 minutes (first time only)
- Wait until you see "Building workspace" completes

## Step 3: Update Maven Project (If Needed)

1. Right-click on the project in **Package Explorer** (left side)
2. Select **Maven → Update Project...**
3. Check **"Force Update of Snapshots/Releases"**
4. Click **OK**
5. Wait for it to finish

## Step 4: Check Database Configuration

1. In Package Explorer, expand: `src/main/resources`
2. Double-click `application.properties` to open it
3. Verify these lines (update if your MySQL password is different):
   ```
   spring.datasource.username=root
   spring.datasource.password=root
   ```
4. Save the file (Ctrl+S)

## Step 5: Run the Application

1. In Package Explorer, expand: `src/main/java/com/studentmanagement`
2. Find and double-click: `StudentManagementSystemApplication.java`
3. Right-click on the file
4. Select **Run As → Java Application**
5. Watch the **Console** tab at the bottom

## Step 6: Check for Success

Look in the Console for:
```
Started StudentManagementSystemApplication in X.XXX seconds
```

✅ **If you see this** = Backend is running successfully!

❌ **If you see errors:**
- Database connection error → Check MySQL is running and credentials are correct
- Port 8080 in use → Close other applications using port 8080

## Step 7: Test the Backend

1. Open your web browser
2. Go to: `http://localhost:8080/api/students`
3. You should see: `[]` (empty array - this is correct!)

## Step 8: Connect Frontend

Your React frontend (already running) will now automatically connect to the backend!

Go to: `http://localhost:3000` and start adding students!

---

## Quick Troubleshooting

### Project shows errors (red X)
- Right-click project → **Maven → Update Project**
- Wait for dependencies to download

### "Port 8080 already in use"
- Close other applications
- Or change port in `application.properties`: `server.port=8081`

### Database connection error
- Make sure MySQL is running
- Check username/password in `application.properties`
- Verify database `studentdatabase` exists

### Can't find StudentManagementSystemApplication.java
- Make sure you imported the `backend` folder (not the root folder)
- Check Package Explorer shows: `student-management-system` project

---

## You're Done When:

✅ Backend shows "Started StudentManagementSystemApplication" in Console
✅ Browser shows `[]` at `http://localhost:8080/api/students`
✅ Frontend at `http://localhost:3000` can add students
✅ Data saves to MySQL database

**That's it! Your full-stack application is now running!** 🎉



