package LearnovationAcademy.WebApplication.AuthenticationRequest;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class AuthenticationRequestGoogle {

	 @Id
	  private String email ; 

	    // Default constructor for JSON Parsing
	    public AuthenticationRequestGoogle() {}

	    public AuthenticationRequestGoogle( String email) {
	        
	        this.email = email; 
	        
	    }

	    public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		
	
	
	
	
	
}
