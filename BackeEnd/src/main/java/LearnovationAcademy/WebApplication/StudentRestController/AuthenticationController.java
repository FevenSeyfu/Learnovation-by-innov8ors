package LearnovationAcademy.WebApplication.StudentRestController;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

	 @GetMapping("/login/oauth2/code/google")
	    public ResponseEntity<String> handleGoogleLoginCallback1(Authentication authentication) {
	        // Handle successful Google login here
	        
	        return ResponseEntity.ok("Authenticated successfully with Google! User ID: ");
	    }
    
    
    @GetMapping("/login/oauth2/code/google/failed")
    public ResponseEntity<String> handleGoogleLoginCallback(Authentication authentication) {
        // Handle successful Google login here
        return ResponseEntity.ok("Authenticated not successfulll with Google!");
    }
    
    
    
}