# Student Management System

A full-stack Student Management System built with Spring Boot (Backend) and React.js (Frontend).

## Technologies Used

### Backend
- **Java 17**
- **Spring Boot 3.1.5**
- **Spring Data JPA / Hibernate**
- **MySQL Database**
- **RESTful APIs**

### Frontend
- **React.js 18**
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Axios** (for API calls)

## Features

- ✅ Create, Read, Update, Delete (CRUD) operations for students
- ✅ Search students by name or email
- ✅ Filter students by department
- ✅ Filter students by status
- ✅ Responsive design
- ✅ Form validation
- ✅ Modern UI with smooth animations

## Project Structure

```
StudentData/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/studentmanagement/
│   │   │   │   ├── entity/Student.java
│   │   │   │   ├── repository/StudentRepository.java
│   │   │   │   ├── service/StudentService.java
│   │   │   │   ├── controller/StudentController.java
│   │   │   │   └── StudentManagementSystemApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── StudentList.js
│   │   │   ├── StudentForm.js
│   │   │   └── SearchBar.js
│   │   ├── services/
│   │   │   └── studentService.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## Prerequisites

- Java 17 or higher
- Maven 3.6+
- Node.js 14+ and npm
- MySQL 8.0+ (or use H2 for development)

## Setup Instructions

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Configure Database:**
   - Open `src/main/resources/application.properties`
   - Update MySQL connection details:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/student_management
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     ```

3. **Create MySQL Database:**
   ```sql
   CREATE DATABASE student_management;
   ```

4. **Build and Run:**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

   The backend will start on `http://localhost:8080`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   The frontend will start on `http://localhost:3000`

## API Endpoints

### Base URL: `http://localhost:8080/api/students`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/students` | Get all students |
| GET | `/api/students/{id}` | Get student by ID |
| POST | `/api/students` | Create a new student |
| PUT | `/api/students/{id}` | Update a student |
| DELETE | `/api/students/{id}` | Delete a student |
| GET | `/api/students/department/{department}` | Get students by department |
| GET | `/api/students/search?keyword={keyword}` | Search students |
| GET | `/api/students/status/{status}` | Get students by status |

## Student Entity Fields

- `id` - Auto-generated unique identifier
- `firstName` - Student's first name (required)
- `lastName` - Student's last name (required)
- `email` - Email address (required, unique)
- `phone` - Phone number (required, 10 digits)
- `dateOfBirth` - Date of birth (required)
- `address` - Address (required)
- `department` - Department name (required)
- `enrollmentDate` - Auto-set enrollment date
- `status` - Student status (ACTIVE/INACTIVE)

## Development Notes

### Using H2 Database (Development)

If you want to use H2 in-memory database for development:

1. Update `application.properties` to use H2:
   ```properties
   spring.datasource.url=jdbc:h2:mem:studentdb
   spring.datasource.driver-class-name=org.h2.Driver
   spring.datasource.username=sa
   spring.datasource.password=
   spring.jpa.hibernate.ddl-auto=create-drop
   ```

2. Access H2 Console at: `http://localhost:8080/h2-console`

### CORS Configuration

CORS is configured to allow requests from `http://localhost:3000`. If you change the frontend port, update the CORS configuration in:
- `StudentController.java` - `@CrossOrigin` annotation
- `application.properties` - `spring.web.cors.allowed-origins`

## Troubleshooting

### Backend Issues

- **Port 8080 already in use:** Change the port in `application.properties`:
  ```properties
  server.port=8081
  ```

- **Database connection error:** Verify MySQL is running and credentials are correct.

- **Table not created:** Check `spring.jpa.hibernate.ddl-auto=update` in `application.properties`.

### Frontend Issues

- **API connection error:** Ensure backend is running on port 8080, or update `API_BASE_URL` in `studentService.js`.

- **CORS error:** Verify CORS configuration in backend allows your frontend origin.

## Future Enhancements

- [ ] Authentication and Authorization
- [ ] Pagination for student list
- [ ] Export to CSV/PDF
- [ ] Advanced filtering options
- [ ] Student photo upload
- [ ] Course enrollment management
- [ ] Grade management
- [ ] Email notifications

## License

This project is open source and available under the MIT License.

## Author

Student Management System - Full Stack Application


