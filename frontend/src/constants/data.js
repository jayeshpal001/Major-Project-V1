export const WORDS = ["Accelerate", "Boost", "Level-Up", "Fast-Track"];

export const STEPS = [
  {
    icon: 'FiUsers',
    title: "Find Your Mentor",
    text: "Browse verified experts by tech stack or experience"
  },
  {
    icon: 'FiMessageSquare',
    title: "Get Answers",
    text: "Ask questions in public forums or private chats"
  },
  {
    icon: 'FiMap',
    title: "Follow Roadmaps",
    text: "Step-by-step guides for each semester of your journey"
  }
];

export const MENTORS = [
  {
    name: "Jayesh Pal",
    role: "Full-Stack Developer",
    skills: ["React", "Node.js", "AWS"],
    img: "/src/assets/images/jayesh.jpg"
  },
  {
    name: "Deepika Sen",
    role: "Front-End Developer",
    skills: ["React", "Node.js", "AWS"],
    img: "/src/assets/images/Deepika.png"
  },
  {
    name: "Taniya Pal",
    role: "Back-End Developer",
    skills: ["React", "Node.js", "AWS"],
    img: "/src/assets/images/taniya.png"
  },
  {
    name: "Yash Sarvate",
    role: "Python Developer",
    skills: ["React", "Node.js", "AWS"],
    img: "/src/assets/images/yash.png"
  },
  // Add other mentors
];

export const TESTIMONIALS = [
    
    {
      text: "The structured roadmaps gave me clear direction when I felt overwhelmed with learning resources.",
      author: "Jayesh Pal",
      role: "Full-Stack Developer @Google"
    },
    
    {
      text: "Thanks to my mentor's guidance, I successfully transitioned from QA to DevOps engineering.",
      author: "Taniya Pal",
      role: "Back-End Developer @Amazon"
    },
    {
        text: "This platform helped me land my first React developer position. The mentorship I received was invaluable!",
        author: "Deepika Sen",
        role: "Frontend Developer @Google"
      },
    {
      text: "The community support helped me stay motivated during my job search. Highly recommend!",
      author: "Yash Sarwate",
      role: "Python Developer @Spotify"
    }
  ];

export const FOUNDATIONS = [
    "Programming Basics",
    "Data Structures",
    "Web Fundamentals",
    "Version Control"
  ];
  
  export const SPECIALIZATIONS = [
    "Advanced Frameworks",
    "Cloud Computing",
    "System Design",
    "Interview Prep"
  ];
  

export const questionsData = [
  {
    id: 1,
    question: "How to center a div in CSS?",
    author: "Junior Dev",
    timestamp: "2 hours ago",
    answers: [
      {
        id: 1,
        text: "Use flexbox: display: flex; justify-content: center; align-items: center;",
        author: "CSS Expert",
        timestamp: "1 hour ago"
      }
    ]
  },
  {
    id: 2,
    question: "Best resources to learn React?",
    author: "Beginner",
    timestamp: "3 hours ago",
    answers: []
  }
];
// data.js

export const resources_data = [
  {
    category: "YouTube Playlists",
    description: "Best playlists for learning various tech stacks.",
    items: [
      {
        name: "CodeWithHarry - Web Development",
        link: "https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9",
      },
      {
        name: "Apna College - DSA",
        link: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ",
      },
      {
        name: "FreeCodeCamp - Full Courses",
        link: "https://www.youtube.com/c/Freecodecamp",
      },
    ],
  },
  {
    category: "Coding Platforms",
    description: "Practice coding and prepare for interviews.",
    items: [
      { name: "LeetCode", link: "https://leetcode.com/" },
      { name: "HackerRank", link: "https://www.hackerrank.com/" },
      { name: "CodeChef", link: "https://www.codechef.com/" },
      { name: "GeeksForGeeks", link: "https://practice.geeksforgeeks.org/" },
    ],
  },
  {
    category: "Job & Internship Platforms",
    description: "Find tech jobs and internships.",
    items: [
      { name: "LinkedIn Jobs", link: "https://www.linkedin.com/jobs/" },
      { name: "Internshala", link: "https://internshala.com/" },
      { name: "Hirect", link: "https://hirect.in/" },
      { name: "Wellfound (AngelList)", link: "https://wellfound.com/" },
    ],
  },
  {
    category: "Documentation & References",
    description: "Official docs for learning and debugging.",
    items: [
      { name: "MDN Web Docs", link: "https://developer.mozilla.org/" },
      { name: "React Docs", link: "https://reactjs.org/docs/getting-started.html" },
      { name: "Node.js Docs", link: "https://nodejs.org/en/docs" },
      { name: "W3Schools", link: "https://www.w3schools.com/" },
    ],
  },
  {
    category: "Error Solving Sites",
    description: "Communities and platforms to solve programming issues.",
    items: [
      { name: "Stack Overflow", link: "https://stackoverflow.com/" },
      { name: "Reddit - r/learnprogramming", link: "https://www.reddit.com/r/learnprogramming/" },
      { name: "Dev.to", link: "https://dev.to/" },
      { name: "Hashnode", link: "https://hashnode.com/" },
    ],
  },
  {
    category: "Roadmaps",
    description: "Structured learning paths for technologies.",
    items: [
      { name: "Roadmap.sh", link: "https://roadmap.sh/" },
      { name: "Frontend Developer Roadmap", link: "https://github.com/thedaviddias/Front-End-Checklist" },
      { name: "Developer Roadmaps GitHub", link: "https://github.com/kamranahmedse/developer-roadmap" },
    ],
  },
  {
    category: "Social Platforms",
    description: "Grow your professional network.",
    items: [
      { name: "LinkedIn", link: "https://www.linkedin.com/" },
      { name: "GitHub", link: "https://github.com/" },
      { name: "Twitter (Tech)", link: "https://twitter.com/" },
    ],
  },
  {
    category: "Tech Installation & Tools",
    description: "Download necessary development tools.",
    items: [
      { name: "Node.js", link: "https://nodejs.org/" },
      { name: "VS Code", link: "https://code.visualstudio.com/" },
      { name: "Postman", link: "https://www.postman.com/" },
      { name: "MongoDB Compass", link: "https://www.mongodb.com/products/compass" },
    ],
  },
  {
    category: "Resume Builders",
    description: "Create professional resumes.",
    items: [
      { name: "Novoresume", link: "https://novoresume.com/" },
      { name: "Zety", link: "https://zety.com/resume-builder" },
      { name: "Canva Resume", link: "https://www.canva.com/resumes/" },
    ],
  },
  {
    category: "Project Inspiration & Showcases",
    description: "Find and showcase project ideas.",
    items: [
      { name: "DevProjects", link: "https://www.codementor.io/projects" },
      { name: "Frontend Mentor", link: "https://www.frontendmentor.io/" },
      { name: "Showwcase", link: "https://www.showwcase.com/" },
    ],
  },
];
