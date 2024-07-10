package LearnovationAcademy.WebApplication.Subject;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
@Entity
public class Subtopic {
	
	
	    @jakarta.persistence.Id
        Integer Id ; 
    	
    	String title ; 
	    String  video ; 
	    String  project ; 
	    String interactiveTutorial ;
	    
	    String assignment ;
	   
	    
	    @ManyToMany
	    List<Modules> Module ; 
	    
}
