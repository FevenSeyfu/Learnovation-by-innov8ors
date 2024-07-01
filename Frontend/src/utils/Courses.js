const crypto = require("crypto");

function generateUUID() {
  return crypto.randomUUID();
}

const courses = {
  courses: [
    {
      id: generateUUID(),
      title: "Graphic Design",
      description:
        "This intermediate-level course builds on fundamental graphic design principles, delving deeper into advanced techniques, sophisticated design concepts, and the use of industry-standard software. Students will enhance their design skills and work on complex projects, preparing them for professional design challenges.",
      duration: "30 hours",
      rating: 4.9,
      level: "Intermediate",
      learnersEnrolled: "400+",
      language: "English",
      lastUpdated: "2024-09-03",
      courseType: "Self Pace",
      isCompleted: false,
      img: "url_to_course_image",
      instructorName: "Emily Parker",
      instructorImg: "url_to_instructor_image",
      instructorRole: "Design director",
      whatYouWillLearn: [
        "Understand the fundamental principles of graphic design",
        "Master the use of typography and color theory",
        "Develop proficiency in industry-standard design software (e.g., Adobe Photoshop, Illustrator)",
        "Create and evaluate designs for print and digital media",
        "Build a professional design portfolio",
      ],
      courseMaterials: {
        assignments: "Weekly assignments to practice advanced design skills",
        projects: "Three major projects to apply learned concepts",
        portfolio: "Enhancement of a professional design portfolio",
        finalExam: "A comprehensive exam covering all course material",
        certification:
          "Upon successful completion, students will receive an Intermediate Graphic Design certificate",
      },
      modules: [
        {
          id: generateUUID(),
          title: "Getting Started with Programming",
          subtopics: [
            {
              title: "Introduction to Programming Concepts",
              video: "30 minutes",
              project: "1 hour",
              interactiveTutorial: "45 minutes",
              assignment: "2 hours",
            },
            {
              title: "Your First Program",
              video: "45 minutes",
              project: "2 hours",
              interactiveTutorial: "1 hour",
              assignment: "3 hours",
            },
          ],
        },
      ],
    },
  ],
};
