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
    img: "/src/assets/images/deepika.jpg"
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