package LearnovationAcademy.WebApplication.Subject;

import java.util.List;

import LearnovationAcademy.WebApplication.Student.Student;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;

@Entity
public class Courses {
	
	@jakarta.persistence.Id
	Integer Id ; 
	String title ;
	String description ;
	String duration ;
	String rating ;
	String level ;
	
	@ManyToMany
	List<Student> students ;
	
	@ManyToMany(mappedBy = "courses") 
	List<CourseMaterial> courseMaterials ;
	
	List<String> whatYouWillLearn; 
	
	@ManyToMany(mappedBy = "course")
	List<Modules> modules ; 
	
	
	public Courses() {} ;

	public Courses(Integer id, String title, String description, String duration, String rating, String level,
			List<Student> students, List<CourseMaterial> courseMaterials, List<String> whatYouWillLearn,
			List<Modules> modules, String language, String lastUpdated, String courseType, String isCompleted,
			String instructorName, String instructorRole) {
		super();
		Id = id;
		this.title = title;
		this.description = description;
		this.duration = duration;
		this.rating = rating;
		this.level = level;
		this.students = students;
		this.courseMaterials = courseMaterials;
		this.whatYouWillLearn = whatYouWillLearn;
		this.modules = modules;
		this.language = language;
		this.lastUpdated = lastUpdated;
		this.courseType = courseType;
		this.isCompleted = isCompleted;
		this.instructorName = instructorName;
		this.instructorRole = instructorRole;
	}

	String language ;
	 String lastUpdated ;
	String courseType ;
	 String isCompleted ;
	
	String instructorName ;
	
	String instructorRole ;

	public Integer getId() {
		return Id;
	}

	public void setId(Integer id) {
		Id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public List<Student> getStudents() {
		return students;
	}

	public void setStudents(List<Student> students) {
		this.students = students;
	}

	public List<CourseMaterial> getCourseMaterials() {
		return courseMaterials;
	}

	public void setCourseMaterials(List<CourseMaterial> courseMaterials) {
		this.courseMaterials = courseMaterials;
	}

	public List<String> getWhatYouWillLearn() {
		return whatYouWillLearn;
	}

	public void setWhatYouWillLearn(List<String> whatYouWillLearn) {
		this.whatYouWillLearn = whatYouWillLearn;
	}

	public List<Modules> getModules() {
		return modules;
	}

	public void setModules(List<Modules> modules) {
		this.modules = modules;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getLastUpdated() {
		return lastUpdated;
	}

	public void setLastUpdated(String lastUpdated) {
		this.lastUpdated = lastUpdated;
	}

	public String getCourseType() {
		return courseType;
	}

	public void setCourseType(String courseType) {
		this.courseType = courseType;
	}

	public String getIsCompleted() {
		return isCompleted;
	}

	public void setIsCompleted(String isCompleted) {
		this.isCompleted = isCompleted;
	}

	public String getInstructorName() {
		return instructorName;
	}

	public void setInstructorName(String instructorName) {
		this.instructorName = instructorName;
	}

	public String getInstructorRole() {
		return instructorRole;
	}

	public void setInstructorRole(String instructorRole) {
		this.instructorRole = instructorRole;
	}
	
	
	
	
	
   
}
