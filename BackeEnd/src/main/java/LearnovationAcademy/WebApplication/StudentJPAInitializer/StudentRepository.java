package LearnovationAcademy.WebApplication.StudentJPAInitializer;

import org.springframework.data.jpa.repository.JpaRepository;

import LearnovationAcademy.WebApplication.Student.Student;

public interface StudentRepository  extends JpaRepository<Student, Integer>{
	
	
	
	Student findByUsername(String username) ; 
	Student findByEmail(String email) ; 

}
