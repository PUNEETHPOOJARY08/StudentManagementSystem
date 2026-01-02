import axios from 'axios';

const API_BASE_URL = 'http://localhost:8085/api/students';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllStudents = async () => {
  const response = await api.get('');
  return response.data;
};

export const getStudentById = async (id) => {
  const response = await api.get(`/${id}`);
  return response.data;
};

export const createStudent = async (studentData) => {
  const response = await api.post('', studentData);
  return response.data;
};

export const updateStudent = async (id, studentData) => {
  const response = await api.put(`/${id}`, studentData);
  return response.data;
};

export const deleteStudent = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};

export const getStudentsByDepartment = async (department) => {
  const response = await api.get(`/department/${department}`);
  return response.data;
};

export const searchStudents = async (keyword) => {
  const response = await api.get(`/search?keyword=${encodeURIComponent(keyword)}`);
  return response.data;
};

export const getStudentsByStatus = async (status) => {
  const response = await api.get(`/status/${status}`);
  return response.data;
};

