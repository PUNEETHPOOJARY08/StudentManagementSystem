import React from 'react';
import './StudentList.css';

const StudentList = ({ students, onEdit, onDelete }) => {
  if (students.length === 0) {
    return (
      <div className="no-students">
        <p>No students found. Add a new student to get started!</p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="student-list-container">
      <div className="student-grid">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <div className="student-header">
              <h3>{student.firstName} {student.lastName}</h3>
              <span className={`status-badge ${student.status?.toLowerCase()}`}>
                {student.status || 'ACTIVE'}
              </span>
            </div>
            
            <div className="student-info">
              <div className="info-item">
                <span className="label">Email:</span>
                <span className="value">{student.email}</span>
              </div>
              
              <div className="info-item">
                <span className="label">Phone:</span>
                <span className="value">{student.phone}</span>
              </div>
              
              <div className="info-item">
                <span className="label">Department:</span>
                <span className="value">{student.department}</span>
              </div>
              
              <div className="info-item">
                <span className="label">Date of Birth:</span>
                <span className="value">{formatDate(student.dateOfBirth)}</span>
              </div>
              
              <div className="info-item">
                <span className="label">Enrollment Date:</span>
                <span className="value">{formatDate(student.enrollmentDate)}</span>
              </div>
              
              <div className="info-item">
                <span className="label">Address:</span>
                <span className="value">{student.address}</span>
              </div>
            </div>
            
            <div className="student-actions">
              <button 
                className="btn btn-edit"
                onClick={() => onEdit(student)}
              >
                Edit
              </button>
              <button 
                className="btn btn-danger"
                onClick={() => onDelete(student.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;



