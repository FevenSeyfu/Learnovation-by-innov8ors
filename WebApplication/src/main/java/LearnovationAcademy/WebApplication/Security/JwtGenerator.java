package LearnovationAcademy.WebApplication.Security;

import java.time.Duration;
import java.time.Instant;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;




	
	
	@RestController
	public class JwtGenerator {
		
		
		@GetMapping("webapplication/getcsrftoken")
		public String getCsrfToken(HttpServletRequest request)
		{
			
			
			return request.getAttribute("_csrf").toString();
			
			
		}
		
		//@PostMapping("webapplication/authenticate")
	     public  String AuthenticatorDetails(org.springframework.security.core.Authentication auth)
	     {
			
			
			 String jwt = new  JwtResponse(CreateString(auth)).toString();
			 
			 if( ! backlisttokens.isTokenBlacklisted(jwt))
			 {
				 return jwt ;
			 }
			 else
			 {
				 return " Invalid token " ;
			 }
			
	     }
		
		

		@Autowired
		JwtEncoder jwtEncoder ; 
		


		
		
		public String CreateString( org.springframework.security.core.Authentication auth)
		{
			var claim = JwtClaimsSet.builder().issuedAt(Instant.now()).issuer(auth.getName()).expiresAt(Instant.now().plus(Duration.ofMinutes(30)))
					
					
					.claim("roles", CreateClaims(auth)).build() ;
			
			
			JwtEncoderParameters parameters = JwtEncoderParameters.from(claim) ;
			
		return	jwtEncoder.encode(parameters).getTokenValue();
			
			
		}
		
		
		
		
		
		
		
		
		private String CreateClaims(org.springframework.security.core.Authentication auth) {
			
			return auth.getAuthorities().stream().map(a ->a.getAuthority()).collect(Collectors.joining(" ")) ;
			
		}
		
		
		@Autowired
	    private Backlisttokens backlisttokens ;
		
		
		 private String extractTokenFromHeader(String authHeader) {
		        if (authHeader != null && authHeader.startsWith("Bearer ")) {
		            return authHeader.substring(7); // Remove "Bearer " prefix
		        }
		        return null;
		    }

	   

	    @PostMapping("/webapplication/logout")
	    public ResponseEntity<String> logout(HttpServletRequest request) {
	        // Extract token from Authorization header
	        String token = extractTokenFromHeader(request.getHeader(org.springframework.http.HttpHeaders.AUTHORIZATION));

	        // Add token to blacklist
	        backlisttokens.addToBlacklist(token);

	        // Clear SecurityContext
	        SecurityContextHolder.clearContext();

	        // Respond with success message
	        return ResponseEntity.ok().body("Logged out successfully");
	    }









		record JwtResponse( String str) {

			public String str() {
				return str;
			}
			
			
		} ; 

}
	

