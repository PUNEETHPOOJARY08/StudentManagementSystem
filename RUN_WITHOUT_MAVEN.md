# Running Without Maven Command Line

Since Maven is not installed, here are alternative ways to run the application:

## Option 1: Using Eclipse (Easiest - Recommended)

### Step 1: Import Project into Eclipse

1. Open Eclipse
2. **File → Import**
3. Select **Maven → Existing Maven Projects**
4. Click **Next**
5. Browse and select the `backend` folder
6. Click **Finish**

### Step 2: Let Eclipse Download Maven Dependencies

1. Eclipse will automatically detect `pom.xml`
2. Right-click on the project → **Maven → Update Project**
3. Check "Force Update of Snapshots/Releases"
4. Click **OK**
5. Wait for dependencies to download (check Progress view)

### Step 3: Run the Application

1. Navigate to: `src/main/java/com/studentmanagement/StudentManagementSystemApplication.java`
2. Right-click on the file
3. **Run As → Java Application**
4. Check the Console for: "Started StudentManagementSystemApplication"

## Option 2: Install Maven

### Windows Installation:

1. Download Maven from: https://maven.apache.org/download.cgi
   - Download: `apache-maven-3.9.x-bin.zip`

2. Extract to: `C:\Program Files\Apache\maven`

3. Add to System PATH:
   - Right-click **This PC → Properties**
   - **Advanced system settings → Environment Variables**
   - Under **System Variables**, find **Path**, click **Edit**
   - Click **New**, add: `C:\Program Files\Apache\maven\bin`
   - Click **OK** on all dialogs

4. Verify installation:
   ```bash
   mvn --version
   ```

5. Then run:
   ```bash
   cd backend
   mvn clean install
   mvn spring-boot:run
   ```

## Option 3: Use Maven Wrapper (I'll create it for you)

If you want, I can add Maven wrapper files so you can use `./mvnw` instead of `mvn`.

## Option 4: Build JAR and Run

1. In Eclipse, right-click project → **Run As → Maven build...**
2. Goals: `clean package`
3. Click **Run**
4. Find the JAR in: `target/student-management-system-1.0.0.jar`
5. Run it:
   ```bash
   java -jar target/student-management-system-1.0.0.jar
   ```

## For Frontend (React)

The frontend doesn't need Maven, just Node.js:

```bash
cd frontend
npm install
npm start
```

## Quick Eclipse Setup Summary

1. **Import**: File → Import → Maven → Existing Maven Projects → Select `backend` folder
2. **Update**: Right-click project → Maven → Update Project
3. **Run**: Right-click `StudentManagementSystemApplication.java` → Run As → Java Application

That's it! Eclipse will handle Maven automatically.


