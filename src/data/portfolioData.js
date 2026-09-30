/**
 * Central structured data configuration for Mohammed Khaleed Ahmed's portfolio.
 * Sourced directly from verified resume and user inputs.
 */

export const portfolioData = {
  personal: {
    fullName: "Mohammed Khaleed Ahmed",
    preferredName: "Khaleed Ahmed",
    location: "Warangal, Telangana, India",
    currentRole: "B.Tech Information Technology Student",
    roles: [
      "Software Engineer",
      "AI/ML Enthusiast",
      "Full-Stack Developer"
    ],
    careerTarget: "Software Engineering Intern / Full-Stack Developer",
    email: "khaleedahmed985@gmail.com",
    contactEmail: "khalidahmad1598@gmail.com",
    phone: "+91-8341303353",
    resumeFileName: "resume.pdf", // Users can drop resume.pdf into public/
    summary: [
      "Software Engineering candidate with strong foundations in Java, Data Structures & Algorithms, and Object-Oriented Programming, having solved 140+ problems in Java on LeetCode.",
      "Experienced in backend engineering using Node.js and Express.js, REST API architecture, JWT authentication, and database engineering with PostgreSQL and MongoDB. Focused on clean engineering practices, cloud containerization, and shipping full-stack systems end-to-end to production."
    ],
    social: {
      github: "https://github.com/KhalidAhmed007",
      githubUsername: "KhalidAhmed007",
      linkedin: "https://www.linkedin.com/in/mohammed-khaleed-ahmed-phd/",
      leetcode: "https://leetcode.com/u/khaleedahmed06/",
      leetcodeUsername: "khaleedahmed06"
    }
  },

  education: [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Kakatiya Institute of Technology and Science (KITSW)",
      location: "Warangal, Telangana",
      period: "Aug 2024 – May 2027",
      cgpa: "7.61",
      details: "Focusing on core computer science foundations, full-stack application development, data structures, and intelligent computing systems."
    },
    {
      degree: "Diploma in Computer Science Engineering",
      institution: "VMR Polytechnic",
      location: "Rampur, Telangana",
      period: "Aug 2021 – May 2024",
      cgpa: "8.2",
      details: "Built solid groundings in programming, relational database design, software engineering workflows, and computer architecture."
    }
  ],

  skills: {
    backend: [
      "Node.js",
      "Express.js",
      "REST API Design",
      "JWT Authentication",
      "Middleware",
      "Microservices Concepts",
      "Authentication & Authorization"
    ],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "SQL",
      "Prisma ORM",
      "MongoDB Atlas",
      "Database Design",
      "Schema Normalization"
    ],
    frontend: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Vite",
      "Responsive Web Design",
      "REST API Integration"
    ],
    languages: [
      "Java",
      "JavaScript",
      "Python",
      "SQL",
      "C++",
      "C#"
    ],
    cloudDevops: [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "AWS (EC2, S3, IAM)",
      "GitHub Actions",
      "Linux",
      "Shell Scripting (Basics)",
      "Vercel",
      "Render",
      "Cloudinary"
    ],
    coreCsTools: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Git & GitHub",
      "Postman",
      "VS Code"
    ]
  },

  featuredProjects: [
    {
      id: "rentease",
      title: "RentEase — Car Rental System",
      tagline: "Full-stack vehicle reservation platform with normalized relational schema, Dockerized microservices, and AWS EC2 deployment.",
      period: "Jul 2026 – Present",
      description: "A production-ready car rental system designed around vehicle discovery, real-time booking lifecycle, user authentication, and AWS EC2 cloud infrastructure behind an Nginx reverse proxy.",
      category: "Backend & Full-Stack",
      technologies: [
        "Next.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "Docker",
        "Docker Compose",
        "GitHub Actions",
        "AWS EC2",
        "Nginx"
      ],
      features: [
        "Designed a normalized PostgreSQL schema with foreign keys, constraints, and indexes across users, vehicles, bookings, and payments tables",
        "Developed REST APIs for vehicle availability, booking workflows, and user authentication, with request validation and centralized error handling",
        "Containerized the frontend, backend, and PostgreSQL services using Docker and Docker Compose, configuring service networking and persistent volumes",
        "Implemented a GitHub Actions CI pipeline to validate the application and build Docker images on code changes",
        "Deployed the containerized application to an AWS EC2 Linux environment using Nginx as a reverse proxy and configured cloud infrastructure for production access"
      ],
      liveUrl: "https://rentease.khaleedahmed.codes/",
      githubUrl: "https://github.com/KhalidAhmed007"
    },
    {
      id: "noteshub",
      title: "NotesHub — Full-Stack Notes Sharing Platform",
      tagline: "Academic resource management & peer sharing platform with 15+ REST APIs, JWT auth, and AWS S3 cloud storage.",
      period: "Jan 2026 – Mar 2026",
      description: "A comprehensive full-stack platform that enables students to upload, discover, manage, and share peer-reviewed academic notes. Engineered with a secure authentication system, role-based authorization, and AWS S3-backed document persistence.",
      category: "Full-Stack Web Application",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AWS S3",
        "JWT",
        "Tailwind CSS",
        "REST APIs",
        "Vercel",
        "Render"
      ],
      features: [
        "Designed and implemented 15+ REST APIs for authentication, note management, categorization, and search, with request validation and structured error handling",
        "Implemented JWT-based authentication and protected routes to secure CRUD operations against a MongoDB backend",
        "Migrated file storage from Cloudinary to AWS S3, integrating S3 into the upload and file-retrieval workflow using IAM-scoped access for persistent, secure cloud object storage",
        "Deployed and troubleshot the application on Vercel and Render, resolving S3 upload, object-access, and file-download issues across the production workflow",
        "Student rating system & administrative dashboard with responsive UI"
      ],
      liveUrl: "https://noteshub.khaleedahmed.codes",
      githubUrl: "https://github.com/KhalidAhmed007"
    },
    {
      id: "cervical-spine-ai",
      title: "Cervical Spine AI — MRI Analysis & Visualization",
      tagline: "Experimental deep learning & computer vision system for cervical spine MRI assessment.",
      description: "An academic computer vision research project combining clinical DICOM preprocessing, deep neural feature extraction via EfficientNet-B3, and spatial visualization to investigate automated stenosis grading.",
      category: "AI / Machine Learning / Computer Vision",
      isResearch: true,
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "EfficientNet-B3",
        "OpenCV",
        "NumPy",
        "pydicom",
        "nibabel",
        "Scikit-learn"
      ],
      datasets: [
        "Open-Duke-CSpineSeg",
        "MIDRC",
        "UChicago-ScopeMRI"
      ],
      features: [
        "Medical volumetric image preprocessing with pydicom and nibabel",
        "Slice normalization, contrast enhancement, and ROI extraction via OpenCV",
        "Deep convolutional classification leveraging EfficientNet-B3 architecture",
        "Multi-dataset alignment and ground-truth validation pipelines",
        "Clearly structured as an experimental research study without medical diagnosis claims"
      ],
      liveUrl: null,
      githubUrl: "https://github.com/KhalidAhmed007"
    }
  ],

  secondaryProjects: [
    {
      id: "urbankart",
      title: "UrbanKart — E-Commerce Web Application",
      description: "An e-commerce storefront with client-side state management, shopping cart workflows, dynamic price calculation, and LocalStorage data persistence.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "LocalStorage"],
      features: [
        "Product catalog browsing & category filtering",
        "Interactive cart additions, item quantity controls, and total computations",
        "Persistent cart state across browser sessions via LocalStorage",
        "Clean responsive user interface built without heavy UI frameworks"
      ],
      liveUrl: null,
      githubUrl: "https://github.com/KhalidAhmed007"
    },
    {
      id: "taskflow",
      title: "TaskFlow — Task Management Application",
      description: "A productivity web application focusing on direct DOM manipulation, clean task lifecycle state handling, filtering, and responsive interaction.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Dynamic task creation, inline status updates, and deletions",
        "Filter tasks by status (All, Active, Completed)",
        "Efficient vanilla JavaScript DOM updates and event delegation",
        "Responsive, mobile-first design layout"
      ],
      liveUrl: null,
      githubUrl: "https://github.com/KhalidAhmed007"
    },
    {
      id: "weather-app",
      title: "Weather App",
      description: "A real-time weather forecasting web application featuring external API integration, location search, and modular React component architecture.",
      technologies: ["React.js", "JavaScript", "Weather API", "CSS"],
      features: [
        "Asynchronous REST API consumption for live meteorological metrics",
        "City search with dynamic error handling and loading indicators",
        "Modular React component hierarchy managing state and props cleanly",
        "Mobile-adaptive weather condition layouts and iconography"
      ],
      liveUrl: null,
      githubUrl: "https://github.com/KhalidAhmed007"
    }
  ],

  dsa: {
    primaryLanguage: "Java",
    problemsSolved: "140+ Problems Solved",
    leetcodeProfile: "https://leetcode.com/u/khaleedahmed06/",
    leetcodeUsername: "khaleedahmed06",
    topics: [
      "Arrays",
      "Strings",
      "HashMap",
      "Sorting",
      "Binary Search",
      "Linked Lists",
      "Stacks",
      "Queues",
      "Java Collections",
      "Recursion",
      "Complexity Analysis"
    ]
  },

  certifications: [
    {
      title: "Kubernetes for the Absolute Beginners",
      issuer: "KodeKloud",
      period: "2026",
      description: "Hands-on Kubernetes fundamentals covering pods, deployments, services, namespaces, config maps, and orchestration of containerized applications on Kubernetes clusters.",
      verificationUrl: "https://learn.kodekloud.com/learn/certificate/16236d9b-e3d7-4926-86dd-7cb0dfdb8bcc"
    },
    {
      title: "Docker Foundations Professional Certificate",
      issuer: "LinkedIn Learning & Docker",
      period: "Sep 2026",
      description: "Hands-on containerization fundamentals, Dockerfiles, multi-stage builds, Docker Compose, container networking, and microservice container deployment.",
      verificationUrl: "https://www.linkedin.com/learning/certificates/161b3f9f5841884d9adcae17d50b4852238c558a1bdf35d318bf80f4d1609168"
    },
    {
      title: "Cisco Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      period: "Verified",
      description: "Foundational cybersecurity principles, threat detection, network defenses, cryptography, and security controls.",
      verificationUrl: ""
    },
    {
      title: "HackerRank Java (Basic) Skill Certificate",
      issuer: "HackerRank",
      period: "Verified",
      description: "Demonstrated fundamental Java programming competency, OOP constructs, collections, string manipulation, and algorithmic control flow.",
      verificationUrl: ""
    },
    {
      title: "AWS / AWS Builder Student Experience",
      issuer: "Amazon Web Services",
      period: "Verified",
      description: "Hands-on exposure to cloud architecture fundamentals, serverless computing, and AWS services (EC2, S3, IAM).",
      verificationUrl: ""
    }
  ]
};
