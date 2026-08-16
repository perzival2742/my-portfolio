export const profileData = {
  name: "Avin Saji",
  title: "Software Engineer | Backend & Cloud Specialist",
  roles: [
    "Software Engineer",
    "Backend Engineer",
    "Cloud & DevOps Engineer",
    "Full-Stack Engineer"
  ],
  tagline: "I take full end-to-end ownership of products — from initial discovery and database design to writing clean reactive Vert.x code and scaling on AWS.",
  location: "Bengaluru, India",
  email: "avinsaji.199@gmail.com",
  phone: "+91 6238549453",
  avatar: "/avatar.jpg",
  linkedin: "https://linkedin.com/in/avinsaji",
  github: "https://github.com/perzival2742",
  resumeUrl: "/Avin_Saji_Resume.pdf",

  // Authentic 1st-person narrative
  summary: "I'm a software engineer who loves taking complete end-to-end ownership of products. Instead of just writing code to specs, I jump right into discovery, sit with stakeholders to understand their actual pain points, architect the system and database schemas from scratch, and deliver polished software into production. When designing the KJUSYS ERP database, I worked directly with university teams to create an intuitive user experience — all while maintaining clean code practices, zero tech debt, and 99.9% uptime on AWS.",

  superpowers: [
    {
      title: "End-to-End Ownership",
      description: "I own features from problem discovery and system design all the way to cloud deployment and monitoring."
    },
    {
      title: "Stakeholder Collaboration",
      description: "I talk to real users, understand their workflows, and translate business needs into robust technical requirements."
    },
    {
      title: "Database Architecture",
      description: "I designed the complete KJUSYS ERP database schema, migrating legacy SQL structures into high-performance MongoDB & Redis models."
    },
    {
      title: "Clean Code & UX",
      description: "I refuse to compromise on code quality. I write clean, maintainable Vert.x & Spring Boot code while ensuring a smooth user experience."
    }
  ],

  stats: [
    { label: "Production Uptime Lead", value: "99.9%", detail: "KJUSYS ERP AWS Cloud Setup", icon: "ShieldCheck" },
    { label: "Report Query Boost", value: "30%", detail: "Redis Caching Integration", icon: "Zap" },
    { label: "Core Backend Stack", value: "Vert.x & Spring", detail: "Reactive Java & Microservices", icon: "Code" },
    { label: "Degree & Rating", value: "MCA Distinction", detail: "80% aggregate score", icon: "GraduationCap" },
  ],

  skills: {
    languages: ["Java", "TypeScript", "JavaScript", "C#", "SQL"],
    frontend: ["Angular", "Ionic Framework", "RxJS", "Tailwind CSS"],
    backend: ["Eclipse Vert.x", "Spring Boot", "REST APIs", "Microservices", "MongoDB", "Redis", "Firebase", "DynamoDB", "Kafka", "RabbitMQ", "Node.js"],
    cloudDevOps: ["AWS EC2", "AWS ECS", "AWS Lambda", "AWS API Gateway", "AWS S3", "AWS SES", "AWS Amplify", "Docker", "CI/CD"],
    tools: ["Git", "Bitbucket", "Postman", "Agile / Scrum", "Unit Testing", "Code Reviews"]
  },

  experience: [
    {
      period: "July 2024 – Present",
      role: "Software Development Engineer",
      company: "Kristu Jayanti Software Development Center",
      location: "Bengaluru, India",
      highlights: [
        "Production Deployment Lead: I manage and deploy the entire KJUSYS ERP cloud stack on AWS, keeping systems running smoothly at 99.9% uptime.",
        "Database Design & Migration: I personally architected the complete database schema for core ERP modules, migrating legacy SQL data to optimized MongoDB structures.",
        "Vert.x Reactive Backends: Built asynchronous reactive microservices using Eclipse Vert.x (Java) and Spring Boot for Fee Structures and Payslip engines.",
        "Performance Optimization: Integrated Redis caching for heavily accessed endpoints, cutting report generation times by 30%.",
        "AWS Containerization: Built a Job Portal microservice in Spring Boot, containerized it with Docker, and deployed it on AWS ECS."
      ],
      tags: ["Java Vert.x", "Spring Boot", "Angular", "MongoDB", "Redis", "AWS EC2", "Docker", "ECS"]
    },
    {
      period: "January 2024 – June 2024",
      role: "Software Development Engineer Intern",
      company: "Kristu Jayanti Software Development Center",
      location: "Bengaluru, India",
      highlights: [
        "Payment Integrations: Integrated Razorpay and Easebuzz payment gateway APIs for seamless, error-free automated fee collection.",
        "System Modernization: Worked with the team to migrate legacy college modules to a modern microservices tech stack, boosting overall project success rate by 10%."
      ],
      tags: ["Java", "REST APIs", "Payment Gateways", "Razorpay", "Easebuzz", "System Migration"]
    },
    {
      period: "April 2023 – June 2023",
      role: "Remote Web Development Intern",
      company: "Rats Technologies",
      location: "Bengaluru, India",
      highlights: [
        "Mobile App Development: Built a hybrid mobile application using the Ionic Framework and Angular to give users smooth access on any device."
      ],
      tags: ["Ionic Framework", "Angular", "TypeScript", "Mobile App"]
    }
  ],

  projects: [
    {
      id: "kjusys-erp",
      title: "KJUSYS ERP Platform",
      category: "Enterprise & Cloud",
      tech: ["Java Vert.x", "Spring Boot", "Angular", "MongoDB", "Redis", "AWS"],
      description: "A complete education management ERP I helped build from the ground up. I designed the database schemas, collaborated with faculty/staff on requirements, and wrote Vert.x microservices for fee processing and automated payslips.",
      impact: "Reduced report loading time by 30% via Redis caching. Powers real-time payment sync with AWS Lambda and Amazon SES email dispatch.",
      github: null,
      featured: true,
      badge: "Vert.x & AWS ERP"
    },
    {
      id: "job-portal",
      title: "Job Portal Microservices Application",
      category: "Enterprise & Cloud",
      tech: ["Java", "Spring Boot", "Angular", "Docker", "AWS ECS"],
      description: "An end-to-end recruitment portal I built using Spring Boot microservices and Angular, fully containerized for seamless cloud deployment.",
      impact: "Containerized with Docker and deployed on AWS ECS with scalable API Gateway routing.",
      github: null,
      featured: true,
      badge: "Containerized Microservices"
    },
    {
      id: "skill-tree-lms",
      title: "Skill-Tree LMS",
      category: "Mobile & LMS",
      tech: ["Ionic Framework", "Angular", "TypeScript", "Firebase"],
      description: "A cross-platform Learning Management System I built so students and instructors can track course progress, access modules, and sync data in real time across mobile and web.",
      impact: "Live Firebase Firestore state sync across student devices.",
      github: "https://github.com/perzival2742/Skill-Tree",
      featured: true,
      badge: "LMS Project"
    },
    {
      id: "payroll-system",
      title: "Payroll Management System",
      category: "Financial Engine",
      tech: ["C#", ".NET Framework", "Database Architecture"],
      description: "A desktop application I engineered in C# to calculate employee salaries, tax deductions, leave allowances, and generate detailed pay slips.",
      impact: "Accurate net salary processing and structured report exports.",
      github: "https://github.com/perzival2742/Payroll-Management-System",
      featured: true,
      badge: "Financial Processing"
    },
    {
      id: "smart-interview",
      title: "Smart Interview Management System",
      category: "Concurrency & Dynamic UI",
      tech: ["Java", "Angular", "MongoDB", "Concurrency Control"],
      description: "A multi-panelist interview portal where I engineered concurrent state locking so multiple interviewers can evaluate candidates simultaneously without data conflicts.",
      impact: "Zero conflict candidate evaluation across simultaneous panel interviews.",
      github: null,
      featured: true,
      badge: "Concurrency Engine"
    },
    {
      id: "admission-form-builder",
      title: "Low-Code Admission Form Builder",
      category: "Concurrency & Dynamic UI",
      tech: ["Java", "Angular", "Dynamic UI Generation"],
      description: "A low-code dynamic form builder I engineered so non-technical admission staff can build and launch complex admission forms without asking developers for code changes.",
      impact: "Automated schema rendering for nested form structures and validation rules.",
      github: null,
      featured: false,
      badge: "Low-Code Tool"
    },
    {
      id: "alumni-portal",
      title: "Alumni Portal",
      category: "Enterprise & Cloud",
      tech: ["Angular", "AWS DynamoDB", "TypeScript"],
      description: "An institution alumni engagement platform where I designed Amazon DynamoDB partition keys for lightning-fast queries and activity streams.",
      impact: "Optimized serverless DynamoDB queries for alumni records.",
      github: null,
      featured: false,
      badge: "AWS Serverless Data"
    }
  ],

  publication: {
    title: "Enhancing Customer Retention in Telecom: A Churn Analysis Approach",
    event: "National Student Research Symposium",
    description: "My research paper analyzing customer churn patterns in telecom datasets using machine learning and data mining techniques to predict and prevent user churn."
  },

  certifications: [
    {
      name: "NPTEL Online Certification — Fundamentals of Artificial Intelligence",
      issuer: "NPTEL (Funded by MoE, Govt. of India / IIT Guwahati)",
      score: "75% Consolidated Score (12-Week Course)",
      details: "Completed NPTEL AI certification covering search algorithms, logic reasoning, and knowledge representation (Online Assignments: 23.97/25 | Proctored Exam: 51.5/75)."
    }
  ],

  virtualExperience: [
    {
      organization: "JPMorgan Chase & Co.",
      program: "Software Engineering Virtual Experience",
      skills: ["Agile Development", "Version Control (Git)", "Financial Data Streams"]
    },
    {
      organization: "Electronic Arts (EA)",
      program: "Software Engineering Virtual Experience",
      skills: ["Object-Oriented Design Patterns", "Game Development Architecture"]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Bangalore North University",
      period: "June 2022 – June 2024",
      grade: "80% | Distinction"
    },
    {
      degree: "Bachelor of Commerce (B.Com ACCA)",
      institution: "Symbiosis College of Arts and Commerce",
      period: "July 2019 – May 2022",
      grade: "77% | Distinction"
    }
  ]
};
