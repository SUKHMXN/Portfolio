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
    title: "CampusNav - AR Indoor Navigation",
    description:
      "A mobile application providing real-time, AR-guided indoor navigation by leveraging QR codes and phone sensor data to overcome GPS limitations.",
    image: indonavImg,
    codeLink: "https://github.com/SUKHMXN/WayFinder.git",
    // UPDATED: Added a new, more creative structure for this project's details
    details: {
      description: "Navigating large and complex indoor spaces like the TIET campus is a common challenge where traditional GPS fails. CampusNav addresses this by providing a seamless, real-time indoor navigation system that guides users with intuitive Augmented Reality (AR) arrows, bridging the gap left by outdoor GPS and static maps.",
      // A new 'methodology' section to create a step-by-step visual flow
      methodology: [
        {
          step: "1. Physical Mapping",
          detail: "The process begins by creating a precise physical map of the building, taking all necessary measurements to digitize the layout."
        },
        {
          step: "2. Coordinate System",
          detail: "Using a reference point on the map, we assign a unique coordinate to every traversable path, creating a digital graph of the environment."
        },
        {
          step: "3. QR Code Anchoring",
          detail: "A unique QR code is placed at the reference point of each floor. When a user scans the code, the app instantly loads the correct floor map and establishes the user's initial position."
        },
        {
          step: "4. Live Location Tracking",
          detail: "The app leverages the phone's IMU sensors (accelerometer and gyroscope) to track the user's movement, continuously calculating their current coordinates on the map."
        },
        {
          step: "5. Pathfinding",
          detail: "When a destination is selected, a shortest-path algorithm is applied to the digital graph, generating the most efficient route from the user's live location."
        },
        {
          step: "6. AR Guidance",
          detail: "The final step provides guidance by augmenting arrows in AR, where each arrow points the user toward the next coordinate on their path until they reach their destination."
        }
      ],
      techStack: ["Android", "Java", "ARCore", "IMU Sensors", "QR Code Scanning", "Pathfinding Algorithms"],
      myRole: "I was responsible for the core logic of the application, including the sensor data processing for live location tracking and the implementation of the shortest-path algorithm. I also designed the system architecture, from the physical mapping methodology to the final AR guidance."
    }
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
      "A native Android app using a multi-modal AI system to detect and manage user stress through personalized, real-time interventions.",
    image: wellbeingImg,
    codeLink: "https://github.com/SUKHMXN/GeminiStressDetectionApp.git",
    // UPDATED: Replaced 'methodology' with a new 'processFlow' object to represent the two branches.
    details: {
      description: "SafeSpace is a holistic well-being application built for Android that proactively detects user stress levels by combining computer vision with physical sensor data. Developed as part of a summer internship at TIET, the project moves beyond simple detection to offer a comprehensive management solution, including a conversational chatbot and a personalized recommendation engine to improve the user's mental state.",
      processFlow: {
        detection: [
          {
            title: "Emotion Detection",
            detail: "A hybrid CNN-ELM model analyzes facial expressions from images to classify emotions and make an initial determination of stress.",
          },
          {
            title: "Sensor Data Fusion",
            detail: "The visual analysis is merged with physiological data (blood oxygen, sleep rate, etc.) from wearables for higher accuracy.",
          },
          {
            title: "Stress Quantification",
            detail: "The combined data is processed to calculate a precise and reliable stress level for the user.",
          },
        ],
        management: [
          {
            title: "Conversational Support",
            detail: "An integrated chatbot allows users to discuss their feelings, gathering qualitative data via sentiment analysis.",
          },
          {
            title: "Personalized Recommendations",
            detail: "Based on the user's stress level and conversational input, a recommendation engine suggests personalized content like music or videos.",
          },
        ],
      },
      techStack: ["Kotlin", "Android", "Python", "Flask", "CNN", "Machine Learning", "Sentiment Analysis"],
      myRole: "I developed the full stack of this application, from the native Android front-end in Kotlin to the Python and Flask backend. My key responsibilities included designing and training the CNN-ELM model for emotion detection, implementing the logic for fusing sensor data, and building the recommendation system based on sentiment analysis from the chatbot.",
    }
  },
  {
    id: "drivesafe",
    title: "DriveSafe AI - Fatigue Detection",
    description:
      "A high-accuracy, real-time driver monitoring system that uses an ensemble of deep learning models to detect fatigue and prevent accidents.",
    image: drivesafeImg,
    codeLink: "#",
    // UPDATED: Replaced 'methodology' with a new 'pipeline' structure for a unique visualization.
    details: {
      description: "Driver fatigue is a leading cause of road accidents worldwide. DriveSafe AI is an intelligent system designed to mitigate this risk by continuously monitoring the driver for signs of fatigue and distraction. Using a sophisticated computer vision pipeline, the system analyzes video streams in real-time to classify driver behavior and issue timely alerts, enhancing overall road safety.",
      pipeline: [
        {
          stage: "Data Preprocessing",
          detail: "The process started with a video dataset of driver behavior. We employed Median Absolute Deviation (MAD) filtering to efficiently extract distinct frames from the videos, creating a high-quality image dataset for training."
        },
        {
          stage: "Multi-Model Training",
          detail: "The extracted frames were used to train three powerful deep learning architectures: ResNet, MobileNet, and DenseNet. Each model was trained to classify the driver's state into one of four classes: 'Attentive', 'Using Phone', 'Yawning', or 'Eyes Closed'."
        },
        {
          stage: "Ensemble Learning",
          detail: "To maximize performance and reliability, we implemented an ensemble learning approach. By combining the predictions of the three individual models, we significantly improved the system's overall classification accuracy."
        },
        {
          stage: "Result & Alerting",
          detail: "The final ensemble model achieved over 95% accuracy in detecting driver fatigue and distraction. When an unsafe state is detected, the system is designed to trigger an immediate alert to refocus the driver's attention on the road."
        }
      ],
      techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "ResNet", "MobileNet", "DenseNet", "Ensemble Learning"],
      myRole: "I was responsible for the complete machine learning pipeline. This included preprocessing the video dataset with MAD filtering, training and fine-tuning the ResNet, MobileNet, and DenseNet models, and implementing the ensemble learning technique that was key to achieving over 95% accuracy."
    }
  },
];

export default projectsData;

