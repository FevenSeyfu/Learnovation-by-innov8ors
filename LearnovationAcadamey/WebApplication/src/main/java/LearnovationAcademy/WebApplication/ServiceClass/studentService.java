package LearnovationAcademy.WebApplication.ServiceClass;

import java.net.http.HttpHeaders;

import javax.security.sasl.AuthenticationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.stereotype.Component;

import LearnovationAcademy.WebApplication.AuthenticationRequest.AuthenticationRequest;
import LearnovationAcademy.WebApplication.CustomException.UserNotFoundException;
import LearnovationAcademy.WebApplication.Student.Student;
import LearnovationAcademy.WebApplication.StudentJPAInitializer.StudentRepository;


@Component
public class studentService {
	
	
	
	@Autowired
	StudentRepository studentRepository ; 
	
	@Autowired
	 PasswordEncoder passwordEncoder ; 
	
	@Autowired
	UserDetailsService userDetailsService ;
	
	
	@Autowired
	LearnovationAcademy.WebApplication.Security.JwtGenerator  JwtGenerator ;
	
	
	@Autowired
	javax.sql.DataSource dataSource; 
	
	
	@Autowired
	BCryptPasswordEncoder passwordEncode ;
	
	
	
	
	

	 
	
	
	
	public ResponseEntity<String>  createStudent( AuthenticationRequest authenticationRequest)
	{
		
		String encodedPassword = passwordEncoder.encode(authenticationRequest.getPassword());
	    Student newStudent = new Student(authenticationRequest.getUsername(), encodedPassword);
	    
	    
	    
	    
	    studentRepository.save(newStudent);
	    
	    

		var user = 
	    		User.withUsername(authenticationRequest.getUsername()).password(authenticationRequest.getPassword()).passwordEncoder(str-> passwordEncode.encode(str)).roles("USER").build() ;
	    
	    JdbcUserDetailsManager jdbcUserDetailsManager = new JdbcUserDetailsManager(dataSource) ; 
	    
	   
	    
	    jdbcUserDetailsManager.createUser(user);
	   
	   
	    
	    
	    
	    return ResponseEntity.ok("Student created ") ; 
		
		
		
		
		
		
	}
	  
	
	

	public ResponseEntity<String> AuthenticateStudent( String userName , String password) throws AuthenticationException, org.springframework.security.core.AuthenticationException
	
	{
		
		  Student student = studentRepository.findByUsername(userName);

		    if (student == null) {
		        throw new UserNotFoundException("User cannot be found, please sign up");
		    }
		    
		    
		    

		    if (passwordEncoder.matches(password, student.getPassword())) {
		        // Authentication successful, generate JWT
		    	
		   
		    	Authentication authentication = new UsernamePasswordAuthenticationToken(student.getUserName(), student.getPassword());
		        

          String jwtToken =JwtGenerator.CreateString(authentication); 
          
          

      return ResponseEntity.ok()
				.header( org.springframework.http.HttpHeaders.AUTHORIZATION, "Bearer " + jwtToken)
				    .body("Authentication successful");
	    }
		    	
		    	  
		     else {
		        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
		    }
		}
}
