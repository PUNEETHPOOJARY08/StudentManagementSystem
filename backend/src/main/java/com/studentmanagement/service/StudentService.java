package com.studentmanagement.service;

import com.studentmanagement.entity.Student;
import com.studentmanagement.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Optional<Student> getStudentById(Long id) {
        return studentRepository.findById(id);
    }

    public Student createStudent(Student student) {
        // Check if email already exists
        if (studentRepository.findByEmail(student.getEmail()).isPresent()) {
            throw new RuntimeException("Student with email " + student.getEmail() + " already exists");
        }
        return studentRepository.save(student);
    }

    public Student updateStudent(Long id, Student studentDetails) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));

        // Check if email is being changed and if new email already exists
        if (!student.getEmail().equals(studentDetails.getEmail())) {
            if (studentRepository.findByEmail(studentDetails.getEmail()).isPresent()) {
                throw new RuntimeException("Student with email " + studentDetails.getEmail() + " already exists");
            }
        }

        student.setFirstName(studentDetails.getFirstName());
        student.setLastName(studentDetails.getLastName());
        student.setEmail(studentDetails.getEmail());
        student.setPhone(studentDetails.getPhone());
        student.setDateOfBirth(studentDetails.getDateOfBirth());
        student.setAddress(studentDetails.getAddress());
        student.setDepartment(studentDetails.getDepartment());
        student.setStatus(studentDetails.getStatus());

        return studentRepository.save(student);
    }

    public void deleteStudent(Long id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
        studentRepository.delete(student);
    }

    public List<Student> getStudentsByDepartment(String department) {
        return studentRepository.findByDepartment(department);
    }

    public List<Student> searchStudents(String keyword) {
        return studentRepository.searchStudents(keyword);
    }

    public List<Student> getStudentsByStatus(String status) {
        return studentRepository.findByStatus(status);
    }
}


