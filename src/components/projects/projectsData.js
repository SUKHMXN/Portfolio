import placeverseImg from "../../assets/placeverseImg.svg";
import indonavImg from "../../assets/indonavImg.svg";
import chexnetImg from "../../assets/chexnetImg.svg";
import wellbeingImg from "../../assets/wellbeingImg.svg";
import drivesafeImg from "../../assets/drivesafeImg.svg";

const projectsData = [
  {
    id: "placeverse",
    title: "PlaceVerse - A College Placement Portal",
    description:
      "A comprehensive, role-based web portal designed to digitize and streamline the entire campus recruitment lifecycle...",
    image: placeverseImg,
    liveLink: "https://place-verse.vercel.app/",
    codeLink: "https://github.com/SUKHMXN/PlaceVerse.git",
    details: {
      description: "PlaceVerse is a full-stack web application designed to solve the inefficiencies of traditional college placement by creating a single, cohesive platform for students, recruiters, and administrators. It replaces manual tracking and fragmented communication with a centralized system featuring role-based dashboards, secure job postings, and an integrated Applicant Tracking System (ATS). The core mission is to bring transparency, efficiency, and structure to the entire recruitment lifecycle, from a student's first application to a recruiter's final hiring decision.",
      features: [
        {
          role: "👑 Admin Portal",
          points: [
            "Full control over user management (students & recruiters).",
            "Admin approval workflow for all job postings and notifications.",
            "Central dashboard to manage platform analytics and statistics.",
          ],
        },
        {
          role: "👨‍💼 Recruiter Portal",
          points: [
            "Integrated Applicant Tracking System (ATS) to manage candidates.",
            "Advanced filters for efficient shortlisting of applicants.",
            "Custom hiring pipeline management to track candidates through stages.",
          ],
        },
        {
          role: "🎓 Student Portal",
          points: [
            "Interactive dashboard with visualized placement statistics.",
            "One-click job applications and a feature to save listings.",
            "Real-time tracking of application status and hiring timelines.",
          ],
        },
      ],
      techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
      myRole: "As the sole full-stack developer, I was responsible for the end-to-end design and implementation of the platform. This included architecting the backend API, designing the database schema, and building the complete user interface with React.",
    },
  },
  {
    id: "campusnav",
    title: "CampusNav - Campus Navigation App",
    description:
      "A mobile application providing efficient indoor navigation, leveraging sensor data and optimized pathfinding algorithms...",
    image: indonavImg,
    codeLink: "https://github.com/SUKHMXN/WayFinder.git",
  },
  {
    id: "chexnet",
    title: "CheX-Net - Chest X-Ray Diagnostics",
    description:
      "Deep learning model analyzing chest X-rays to detect multiple thoracic diseases, providing diagnostic insights...",
    image: chexnetImg,
    codeLink: "https://github.com/SUKHMXN/CHEX-NET.git",
  },
  {
    id: "safespace",
    title: "SafeSpace AI - Stress Detection & Management",
    description:
      "AI-powered system detecting stress from facial expressions and sensor data, offering personalized recommendations...",
    image: wellbeingImg,
    codeLink: "https://github.com/SUKHMXN/GeminiStressDetectionApp.git",
  },
  {
    id: "drivesafe",
    title: "DriveSafe AI - Fatigue Detection",
    description:
      "Intelligent system monitoring driver behavior and alerting for unsafe practices using computer vision and sensor integration...",
    image: drivesafeImg,
    codeLink: "#",
  },
];

export default projectsData;

