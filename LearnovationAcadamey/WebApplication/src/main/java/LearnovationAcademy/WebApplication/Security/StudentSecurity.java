package LearnovationAcademy.WebApplication.Security;

import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.interfaces.RSAPublicKey;
import java.util.List;
import java.util.UUID;

import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.jdbc.JdbcDaoImpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.stereotype.Component;
import org.springframework.security.authentication.AuthenticationManager;

import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.KeySourceException;
import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSelector;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;


@Component
public class StudentSecurity {
	
	
	

	@Bean
	public SecurityFilterChain security(HttpSecurity http) throws Exception
	{
		
		
		
		
			
			http.authorizeHttpRequests(
							auth -> {
								auth.requestMatchers("webapplication/signup").permitAll() ;
								auth.anyRequest().authenticated() ;
								
							});
			
			http.sessionManagement(
							session -> 
								session.sessionCreationPolicy(
										SessionCreationPolicy.STATELESS)
							);
			
			http.httpBasic(Customizer.withDefaults());

			http.csrf(csrf -> csrf.disable());

			http.headers(headers -> headers.frameOptions(frameOptionsConfig-> frameOptionsConfig.disable()));
			
			http.oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()));
			
			
			return http.build();
		
		




//http.authorizeHttpRequests(auth-> auth.anyRequest().authenticated());

			
//		
//		http.headers(headers->headers.frameOptions(frames->frames.sameOrigin())) ;
//		
//		http.formLogin(Customizer.withDefaults()) ;
//		
//		http.csrf(csrf->csrf.disable()) ;
//		
//		
//	
//     	http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) ;
//		
//		http.oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults())) ;
//			
//		
//		return http.build();
		
		

//		http.authorizeHttpRequests(auth -> auth.anyRequest().authenticated()) ; 
//		http.formLogin(Customizer.withDefaults()) ;
//		
//	
//		
//		http.headers(headers->headers.frameOptions(frames->frames.sameOrigin())) ;
//		
//		
//		
//		http.csrf(csrf->csrf.disable()) ;
//		
//		http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) ;
//		
//		
//		
//		
//		http.oauth2ResourceServer(auth->auth.jwt(Customizer.withDefaults()));
//		
//		
//		
//		return http.build() ;
		
		
		
		

		
		
	}
 
    @Bean
     public UserDetailsService  userDetials(javax.sql.DataSource dataSource)
     {
    	
    
    
    var admin = 
    		User.withUsername("Admin").password("password").passwordEncoder(str->PasswordEncoder().encode(str)).roles("ADMIN").build() ;
    
    JdbcUserDetailsManager jdbcUserDetailsManager = new JdbcUserDetailsManager(dataSource) ; 
    
   
    
    jdbcUserDetailsManager.createUser(admin);
    
    
   // InMemoryUserDetailsManager(user , admin) ;
    
   return jdbcUserDetailsManager; 
    	
     }
    
    
   

    
  
	@Bean 
    public javax.sql.DataSource dataSource()
	{
		
		
	return new EmbeddedDatabaseBuilder().setType(EmbeddedDatabaseType.H2).addScript(JdbcDaoImpl.DEFAULT_USER_SCHEMA_DDL_LOCATION).build() ;
			
		
		
		
	

	}
	
	
	
	
	
	@Bean
	public KeyPair keyPairGenerator() throws NoSuchAlgorithmException
	{
		
		
	KeyPairGenerator keyPairGenerator = 	KeyPairGenerator.getInstance("RSA") ;
	
	
	 keyPairGenerator.initialize(2048 ) ;
	 
	return  keyPairGenerator.generateKeyPair(); 
	 
	}
	
	@Bean
	public BCryptPasswordEncoder PasswordEncoder()
	{
		
		return new BCryptPasswordEncoder() ; 
	}
	
	
	@Bean
	public RSAKey rsaKeyPair( KeyPair keyPair)
	{
		
		
		return new RSAKey.Builder((RSAPublicKey) keyPair.getPublic()).privateKey(keyPair.getPrivate()).keyID(UUID.randomUUID().toString()).build() ;
	}

	 @Bean
	 public JWKSource<SecurityContext> JWKSource( RSAKey rsaKey)
	 {
		 
		 
		 JWKSet jwkSet =  new JWKSet(rsaKey) ;
		 

		 com.nimbusds.jose.jwk.source.JWKSource<SecurityContext > jwkSource =  new JWKSource<SecurityContext>() 
				 {

					@Override
					public List<JWK> get(JWKSelector jwkSelector, SecurityContext context) throws KeySourceException {
				
						return  jwkSelector.select(jwkSet);
					}
			 
			 
				 } ;
		 
		 
		 return jwkSource ;
		 
		 
	  
		 

		 
	 }
	 
	 
	 @Bean
	 public JwtDecoder Decoder(RSAKey rsaKeyPair) throws JOSEException
	 
	 {
		 
	return 	 NimbusJwtDecoder .withPublicKey(rsaKeyPair.toRSAPublicKey()).build() ;
		 
		 
		 
	 }
	 
	 
	 @Bean
	 
	 public JwtEncoder Encoder(JWKSource<SecurityContext> jwkSource)
	 {
		 
		 
		 return new NimbusJwtEncoder(jwkSource);
	
	 }
	
	

}
