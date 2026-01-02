package com.studentmanagement.repository;

import com.studentmanagement.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    Optional<Student> findByEmail(String email);

    List<Student> findByDepartment(String department);

    List<Student> findByStatus(String status);

    @Query("SELECT s FROM Student s WHERE s.firstName LIKE %:keyword% OR s.lastName LIKE %:keyword% OR s.email LIKE %:keyword%")
    List<Student> searchStudents(@Param("keyword") String keyword);
}



