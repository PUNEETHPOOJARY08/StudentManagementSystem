import React, { useState, useEffect } from 'react';
import './App.css';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import SearchBar from './components/SearchBar';
import { getAllStudents, createStudent, updateStudent, deleteStudent, searchStudents } from './services/studentService';

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    loadStudents();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    } else {
      loadStudents();
    }
  }, [searchTerm]);

  const loadStudents = async () => {
    setLoading(true);
    try {
      const data = await getAllStudents();
      setStudents(data);
    } catch (error) {
      showMessage('error', 'Error loading students');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (keyword) => {
    if (!keyword.trim()) {
      loadStudents();
      return;
    }
    setLoading(true);
    try {
      const data = await searchStudents(keyword);
      setStudents(data);
    } catch (error) {
      showMessage('error', 'Error searching students');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (studentData) => {
    try {
      await createStudent(studentData);
      showMessage('success', 'Student created successfully');
      setShowForm(false);
      loadStudents();
    } catch (error) {
      showMessage('error', error.response?.data || 'Error creating student');
    }
  };

  const handleUpdate = async (id, studentData) => {
    try {
      await updateStudent(id, studentData);
      showMessage('success', 'Student updated successfully');
      setEditingStudent(null);
      setShowForm(false);
      loadStudents();
    } catch (error) {
      showMessage('error', error.response?.data || 'Error updating student');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await deleteStudent(id);
        showMessage('success', 'Student deleted successfully');
        loadStudents();
      } catch (error) {
        showMessage('error', error.response?.data || 'Error deleting student');
      }
    }
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  const handleCancel = () => {
    setEditingStudent(null);
    setShowForm(false);
  };

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 3000);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>Student Management System</h1>
          <p>Manage your student records efficiently</p>
        </header>

        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        <div className="toolbar">
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm}
            onSearch={handleSearch}
          />
          <button 
            className="btn btn-primary" 
            onClick={() => {
              setEditingStudent(null);
              setShowForm(true);
            }}
          >
            + Add New Student
          </button>
        </div>

        {showForm && (
          <StudentForm
            student={editingStudent}
            onSubmit={editingStudent ? 
              (data) => handleUpdate(editingStudent.id, data) : 
              handleCreate
            }
            onCancel={handleCancel}
          />
        )}

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <StudentList
            students={students}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

export default App;


