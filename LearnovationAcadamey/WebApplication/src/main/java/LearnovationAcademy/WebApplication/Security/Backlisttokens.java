package LearnovationAcademy.WebApplication.Security;

import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Component;


@Component
public class Backlisttokens {
	
	private Set<String> blacklist = ConcurrentHashMap.newKeySet();

    public void addToBlacklist(String token) {
        blacklist.add(token);
    }

    public boolean isTokenBlacklisted(String token) {
        return blacklist.contains(token);
    }
	
	
	

}
