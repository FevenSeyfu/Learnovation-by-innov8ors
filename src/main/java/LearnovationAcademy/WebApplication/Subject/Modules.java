package LearnovationAcademy.WebApplication.Subject;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity
public class Modules {
	
	
	@Id
	Integer id ; 
	
	String tittle ; 
	
	
	@ManyToMany
	List<Courses> course ;
	
	

	@ManyToMany(mappedBy = "Module")
	List<Subtopic> subtopics ;
	
	
	
	
	
	
	

}
