package LearnovationAcademy.WebApplication.Subject;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;

@Entity
public class CourseMaterial {
	
	@jakarta.persistence.Id
	private Integer Id ; 
	
     
	String assignments ;
	String projects ;
	String portfolio ;
	String finalExam ;
	String certification ;
	
	@ManyToMany
	List<Courses> courses ;
	
}
