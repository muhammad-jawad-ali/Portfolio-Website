// Portfolio Data Configuration
// Edit this file to update your portfolio content

const portfolioData = {
  // Personal Information
  personal: {
    name: "Muhammad Jawad Ali",
    title: "BS-CS FAST '27 | DevOps & AI Automation Engineer",
    subtitle: "Computer Science Student",
    university: "FAST NUCES Islamabad",
    batch: "23rd Batch",
    heroImages: [
      { src: "assets/hero/img1.jpeg", caption: "" }, // Add caption if desired
      { src: "assets/hero/img2.jpeg", caption: "" },
      { src: "assets/hero/img3.jpeg", caption: "" }
    ],
    objective: "To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills. My goal is to crack Google in 5 years. If you share the same ambition, let's connect!",
    summary: "I'm a dedicated Computer Science student at FAST NUCES Islamabad with expertise in DevOps, AI Automation, and Full-Stack Development. Recently completed an intensive DevOps & Automation Engineering internship at Zigron, mastering n8n workflows, Docker, Git, and Nginx. Achieved 21st place at ICPC Asia Topi Regional 2024 and earned Dean's List recognition (Fall 2024). Led a community service initiative empowering small businesses through digital transformation, reaching 40,000+ views on Google Maps. Experience spanning AI/ML, web development, game development, GPU computing, and low-level programming."
  },

  // Education
  education: [
    {
      degree: "Bachelors of Computer Science",
      institution: "FAST NUCES Islamabad",
      duration: "2023 - 2027",
      details: ""
    },
    {
      degree: "A-Levels",
      institution: "The Science School, DHA 2 Campus",
      duration: "2021 - 2023",
      details: "Computer Science, Physics, and Maths",
      grade: "2A* 1A"
    },
    {
      degree: "O-Levels",
      institution: "The Science School, DHA 2 Campus",
      duration: "2018 - 2021",
      details: "Sciences",
      grade: "6A* 2A 1B"
    }
  ],

  // Work Experience & Achievements
  experience: [
    {
      title: "DevOps & Automation Engineer Intern",
      company: "Zigron",
      duration: "Summer 2024",
      responsibilities: [
        "Implemented n8n workflows including AI agents, RAG, LLMs, MCP, APIs, and webhooks",
        "Mastered Git operations: push/pull, merge, clone, fork, SSH configuration",
        "Deployed Docker containers with virtualization, images, networks, volumes, layers, and compose",
        "Configured Nginx as reverse proxy, load balancer, URL redirect, self-signed SSL, and DNS records",
        "Gained hands-on experience in DevOps practices and cloud infrastructure"
      ],
      media: {
        images: [
          "assets/experience/zigron/img1.jpeg",
          "assets/experience/zigron/img2.jpeg",
          "assets/experience/zigron/img3.png"
        ],
        videos: []
      }
    },
    {
      title: "ICPC Asia Topi Regional 2024 - Team 'Fikr-e-Code'",
      company: "Competitive Programming Achievement",
      duration: "2024",
      responsibilities: [
        "Secured 21st Place (26th Rank) out of 102 teams at GIK Institute",
        "Solved 2 problems (only 39 teams solved any problem)",
        "Improved from 56th rank in preliminaries to 21st in regionals",
        "Achieved 1st Rank in batch and 3rd Place (5th Rank) in FAST NUCES Islamabad",
        "Represented FAST NUCES in Pakistan's premier competitive programming contest"
      ],
      media: {
        images: [
          "assets/experience/icpc-2024/img1.jpeg",
          "assets/experience/icpc-2024/img2.jpeg",
          "assets/experience/icpc-2024/img3.jpeg"
        ],
        videos: []
      }
    },
    {
      title: "Community Service Leader - Digital Transformation Project",
      company: "FAST NUCES Islamabad",
      duration: "2024",
      responsibilities: [
        "Led team of 4 to empower small local businesses with digital tools",
        "Listed businesses on Google Maps, created websites and social media profiles",
        "Trained business owners to manage their digital presence independently",
        "Achieved 40,000+ views on Google Maps and 10,000+ Instagram views",
        "Aligned with SDG 8 (inclusive growth) and SDG 10 (reducing inequality)"
      ],
      media: {
        images: [],
        videos: ["assets/experience/community-service/demo.mp4"]
      }
    }
  ],

  // Academic Achievements
  achievements: [
    {
      title: "Dean's List - Fall 2024",
      description: "Recognized for academic excellence in 3rd semester at FAST NUCES Islamabad",
      date: "Fall 2024"
    }
  ],

  // Projects (Organized by Priority/Significance)
  // To add a new project, copy the template below and add it to this array
  projects: [
    {
      title: "RetailEase - Point of Sale System",
      duration: "2024",
      association: "FAST NUCES Islamabad - Semester Project",
      description: "Comprehensive POS system designed for a mattress and furniture store in Islamabad with full inventory and sales management.",
      features: [
        "Complete inventory management system",
        "Sales tracking and invoice generation",
        "Database integration with MySQL",
        "JavaFX-based user interface",
        "Team project with 4 students"
      ],
      technologies: ["Java", "JavaFX", "MySQL", "SQL", "Maven"],
      githubUrl: "https://github.com/muhammad-jawad-ali/RetailEase-POS",
      liveUrl: null,
      media: {
        images: [], // Add screenshots: "assets/projects/retailease-pos/screenshot1.png"
        videos: []  // Add demo videos: "assets/projects/retailease-pos/demo.mp4"
      }
    },
    {
      title: "KLT Feature Tracker - GPU Acceleration",
      duration: "2024",
      association: "FAST NUCES Islamabad - Complex Computing Problem",
      description: "GPU acceleration implementation of the well-known KLT (Kanade-Lucas-Tomasi) feature tracker for high-performance computer vision.",
      features: [
        "Parallelized KLT algorithm using GPU computing",
        "Significant performance improvements over CPU implementation",
        "Real-time feature tracking capabilities",
        "Demonstrates expertise in parallel computing and optimization"
      ],
      technologies: ["CUDA", "C++", "GPU Computing", "Parallel Processing", "Computer Vision"],
      githubUrl: "https://github.com/muhammad-jawad-ali/KLT-Feature-Tracker-Acceleration-on-GPUs",
      liveUrl: null,
      media: {
        images: [],
        videos: ["assets/projects/klt-gpu-tracker/demo.mp4"]
      }
    },
    {
      title: "Digital Transformation for Small Businesses",
      duration: "2024",
      association: "Community Service Leadership - FAST NUCES",
      description: "Led initiative to empower small local businesses with digital tools, achieving 40,000+ Google Maps views and 10,000+ Instagram views.",
      features: [
        "Listed businesses on Google Maps with optimized profiles",
        "Created professional websites and social media presence",
        "Trained business owners in digital marketing",
        "40,000+ views on Google Maps content",
        "10,000+ combined Instagram views",
        "Aligned with UN SDG 8 and SDG 10"
      ],
      technologies: ["Digital Marketing", "Web Development", "Social Media", "Google Maps API"],
      githubUrl: "https://github.com/muhammad-jawad-ali/Ecommerce-Website---Garden-And-Birds-Care",
      liveUrl: "https://younisbhatti217shop.github.io/Ecommerce-Website---Garden-And-Birds-Care/",
      media: {
        images: [], // Add impact photos: "assets/projects/digital-transformation/business1.jpg"
        videos: []  // Add testimonials: "assets/projects/digital-transformation/impact.mp4"
      }
    },
    {
      title: "GitLite - Simplified Version Control System",
      duration: "2024",
      association: "FAST NUCES Islamabad - Data Structures Project",
      description: "Custom implementation of a simplified version control system similar to Git, built from scratch in C++.",
      features: [
        "Core version control functionality (commit, branch, merge)",
        "File tracking and change detection",
        "Tree-based data structure implementation",
        "Understanding of Git internals and version control concepts"
      ],
      technologies: ["C++", "Data Structures", "Algorithms", "File Systems"],
      githubUrl: "https://github.com/muhammad-jawad-ali/GitLite-A-Simplified-Version-Control-System",
      liveUrl: null,
      media: {
        images: [], // Add diagrams: "assets/projects/gitlite/architecture.png"
        videos: []  // Add demo: "assets/projects/gitlite/demo.mp4"
      }
    },
    {
      title: "Garden & Birds Care E-commerce Website",
      duration: "2024",
      association: "FAST NUCES Islamabad",
      description: "Static website showcasing products from a local Garden & Birds Care shop with over 500 product photographs.",
      features: [
        "Visited local shop and captured 500+ high-quality product images",
        "Responsive design for mobile and desktop",
        "Product categorization for easy navigation",
        "User-friendly interface with clean sections"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/muhammad-jawad-ali/Ecommerce-Website---Garden-And-Birds-Care",
      liveUrl: "https://younisbhatti217shop.github.io/Ecommerce-Website---Garden-And-Birds-Care/",
      media: {
        images: [],
        videos: ["assets/projects/garden-birds-care/demo.mp4"]
      }
    },
    {
      title: "Plant vs. Zombie Game",
      duration: "May 2024",
      association: "FAST NUCES Islamabad",
      description: "Redesigned the famous Plants Vs Zombies Game using SFML library in C++.",
      features: [
        "Comprehensive end-to-end development including UML diagram design and graphic creation",
        "Features three levels with increasing difficulty",
        "In-game currency system where players collect suns to purchase plants for defense",
        "Includes a leaderboard to track high scores and kill counts"
      ],
      technologies: ["C++", "SFML", "Game Development", "OOP"],
      githubUrl: "https://github.com/talhashafi-04/Plants-Vs-Zombies_GOTY",
      liveUrl: null,
      media: {
        images: [],
        videos: ["assets/projects/plant-vs-zombies/demo.mp4"]
      }
    },
    {
      title: "Plagiarism Checker",
      duration: "Fall 2024",
      association: "FAST NUCES Islamabad",
      description: "C++ tool that detects plagiarism by calculating textual similarity using Cosine Similarity algorithm.",
      features: [
        "Text preprocessing: removes punctuation, converts to lowercase, eliminates stop words",
        "Word frequency analysis with vector generation",
        "Cosine Similarity calculation returning percentage scores",
        "Processes multiple documents and compares them efficiently"
      ],
      technologies: ["C++", "Algorithms", "Data Structures", "Text Processing"],
      githubUrl: "https://github.com/muhammad-jawad-ali/Plagiarism-Checker",
      liveUrl: null,
      media: {
        images: [], // Add results: "assets/projects/plagiarism-checker/results.png"
        videos: []  // Add demo: "assets/projects/plagiarism-checker/demo.mp4"
      }
    },
    {
      title: "Zuma Game - Assembly Language",
      duration: "2024",
      association: "FAST NUCES Islamabad",
      description: "Classic Zuma game implemented in Assembly Language demonstrating low-level programming skills.",
      features: [
        "Complete game mechanics in Assembly",
        "Graphics rendering and game loop",
        "Collision detection and scoring system",
        "Demonstrates mastery of low-level programming"
      ],
      technologies: ["Assembly Language", "x86", "Low-Level Programming"],
      githubUrl: "https://github.com/muhammad-jawad-ali/Zuma-Game-Assembly-Language",
      liveUrl: null,
      media: {
        images: [],
        videos: ["assets/projects/zuma-assembly/demo.mp4"]
      }
    },
    {
      title: "Gtask-Sync",
      duration: "2024",
      association: "Personal Project",
      description: "Task synchronization application for managing and organizing tasks efficiently.",
      features: [
        "Task management and organization",
        "Synchronization capabilities",
        "User-friendly interface",
        "Productivity enhancement tool"
      ],
      technologies: ["Python", "Task Management", "API Integration"],
      githubUrl: "https://github.com/muhammad-jawad-ali/Gtask-Sync",
      liveUrl: null,
      media: {
        images: [],
        videos: ["assets/projects/gtask-sync/demo.mp4"]
      }
    },
    {
      title: "Identifying Matches From A Dataset",
      duration: "Fall 2024",
      association: "FAST NUCES Islamabad - Discrete Mathematics Project",
      description: "Data analysis project for identifying matching patterns within large datasets using discrete mathematics concepts.",
      features: [
        "Pattern matching algorithms",
        "Dataset analysis and processing",
        "Discrete mathematics implementation",
        "Efficient data structure utilization"
      ],
      technologies: ["Python", "Data Analysis", "Algorithms", "Discrete Math"],
      githubUrl: "https://github.com/muhammad-jawad-ali/Identifying-Matches-From-A-Dataset",
      liveUrl: null,
      media: {
        images: [],
        videos: ["assets/projects/dataset-matching/demo.mp4"]
      }
    }
  ],

  // Skills
  skills: [
    // Programming Languages
    { name: "C++", level: 90 },
    { name: "Python", level: 88 },
    { name: "Java", level: 80 },
    { name: "Assembly Language", level: 78 },

    // DevOps & Cloud
    { name: "Docker", level: 85 },
    { name: "Git & GitHub", level: 90 },
    { name: "Nginx", level: 75 },
    { name: "n8n Workflows", level: 80 },

    // Web Development
    { name: "HTML/CSS", level: 90 },
    { name: "Web Development", level: 85 },

    // Data & Algorithms
    { name: "Data Structures & Algorithms", level: 90 },

    // Specialized
    { name: "Game Development", level: 85 },
    { name: "SFML", level: 85 },
    { name: "GPU Computing (CUDA)", level: 72 },
    { name: "MySQL/SQL", level: 78 },
    { name: "Problem Solving", level: 92 }
  ],

  // Hobbies
  hobbies: [
    {
      title: "Gardening & Organic Vegetables",
      description: "I have a passion for gardening and growing organic vegetables. I enjoy cultivating a variety of organic vegetables and maintaining a garden, which allows me to connect with nature and explore sustainable living practices.",
      link: {
        text: "Instagram page",
        url: "https://www.instagram.com/jawadsgarden/"
      }
    }
  ],

  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/muhammad-jawad-ali/",
    github: "https://github.com/muhammad-jawad-ali",
    twitter: "https://x.com/jim_jawad",
    leetcode: "https://leetcode.com/u/FASTNUCES23BATCH/",
    instagram: "https://www.instagram.com/jim_jawad/",
    facebook: "https://www.facebook.com/profile.php?id=100075024500565"
  },

  // Contact
  contact: {
    email: "muhammad.jawad.ali@example.com",
    resumeUrl: "https://drive.google.com/file/d/1vrJWhEHSbglwHqSKXUVAyfxxMxXs8eZL/view?usp=sharing"
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}
