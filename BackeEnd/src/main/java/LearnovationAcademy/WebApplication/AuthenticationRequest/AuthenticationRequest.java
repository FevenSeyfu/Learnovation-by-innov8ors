package LearnovationAcademy.WebApplication.AuthenticationRequest;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class AuthenticationRequest {

	 @Id
	 private String username;
	    private String password;
	    
	    private String email ; 

	    // Default constructor for JSON Parsing
	    public AuthenticationRequest() {}

	    public AuthenticationRequest(String username, String password , String email) {
	        this.username = username;
	        this.password = password;
	        this.email = email; 
	        
	    }

	    public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getUsername() {
	        return username;
	    }

	    public void setUsername(String username) {
	        this.username = username;
	    }

	    public String getPassword() {
	        return password;
	    }

	    public void setPassword(String password) {
	        this.password = password;
	    }
	
	
	
	
	
}
