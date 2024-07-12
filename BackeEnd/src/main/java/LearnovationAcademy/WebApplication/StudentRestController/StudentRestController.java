package LearnovationAcademy.WebApplication.StudentRestController;

import javax.security.sasl.AuthenticationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import LearnovationAcademy.WebApplication.AuthenticationRequest.AuthenticationRequest;
import LearnovationAcademy.WebApplication.AuthenticationRequest.AuthenticationRequestGoogle;
import LearnovationAcademy.WebApplication.ServiceClass.studentService;
import LearnovationAcademy.WebApplication.Student.Student;

@RestController
public class StudentRestController {
	
	
	@Autowired
	studentService studentService ; 
	

	
	
	
@PostMapping("webapplication/signup")
private ResponseEntity<String> createStudent(@RequestBody AuthenticationRequest authenticationRequest )
{
	
	
    
 
	
	return studentService.createStudent(authenticationRequest) ;
	
	
	
}









@PostMapping("webapplication/authenticateuser")
private ResponseEntity<String> Authenticate(@RequestBody AuthenticationRequest authenticationRequest) throws AuthenticationException
{
	
	return studentService.AuthenticateStudent(authenticationRequest.getEmail() ,authenticationRequest.getPassword() ) ; 
	
}



@PostMapping("webapplication/authenticateuser/google")
private ResponseEntity<String> AuthenticateGoogle(@RequestBody AuthenticationRequestGoogle authenticationRequest) throws AuthenticationException
{
	
	return studentService.AuthenticateStudentGoogle(authenticationRequest.getEmail()) ; 
	
}




@PostMapping("webapplication/deleteuser")
private ResponseEntity<String> DeleteUser(@RequestBody AuthenticationRequestGoogle authenticationRequest) throws AuthenticationException
{
	
	return studentService.DeleteUser(authenticationRequest.getEmail()) ; 
	
}













@GetMapping("test")
private String TEsting()
{
	return "i am working " ; 
}
	
	
	
	
	
	
	

}
