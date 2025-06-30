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
    id: 1,
    name: "Jayesh Pal",
    role: "Full-Stack Developer",
    skills: ["React", "Node.js", "AWS"],
    img: "/src/assets/images/jayesh.jpg",
    experience: 7,
    bio: "Passionate about building scalable web applications.",
    company: "Google",
    location: "New York, USA",
    rating: 4.9,
    students: 245
  },
  {
    id: 2,
    name: "Deepika Sen",
    role: "Frontend Developer",
    skills: ["React", "JavaScript", "CSS"],
    img: "/src/assets/images/Deepika.png",
    experience: 5,
    bio: "Specializing in responsive user interfaces.",
    company: "Amazon",
    location: "Seattle, USA",
    rating: 4.8,
    students: 189
  },
  {
    id: 3,
    name: "Taniya Pal",
    role: "Back-End Developer",
    skills: ["React", "Node.js", "AWS"],
    img: "/src/assets/images/taniya.png",
    experience: 5,
    bio: "Specializing in responsive user interfaces.",
    company: "Amazon",
    location: "Seattle, USA",
    rating: 4.8,
    students: 189
  },
  {
    id: 4,
    name: "Yash Sarvate",
    role: "Python Developer",
    skills: ["React", "Node.js", "AWS"],
    img: "/src/assets/images/yash.png",
    experience: 5,
    bio: "Specializing in responsive user interfaces.",
    company: "Amazon",
    location: "Seattle, USA",
    rating: 4.8,
    students: 189
  },
  
  // Add other mentors
];

export const TESTIMONIALS = [
    
    {
      id: 1,
    mentorId: 1,
      text: "The structured roadmaps gave me clear direction when I felt overwhelmed with learning resources.",
      author: "Jayesh Pal",
      role: "Full-Stack Developer @Google"
    },
    
    {
      id: 2,
    mentorId: 2,
      text: "Thanks to my mentor's guidance, I successfully transitioned from QA to DevOps engineering.",
      author: "Taniya Pal",
      role: "Back-End Developer @Amazon"
    },
    {
      id: 3,
      mentorId: 3,
        text: "This platform helped me land my first React developer position. The mentorship I received was invaluable!",
        author: "Deepika Sen",
        role: "Frontend Developer @Google"
      },
    {
      id: 4,
          mentorId: 4,
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
export const GUIDANCE_DATA = [
  {
    id: 1,
    title: "Explore Engineering & Campus Life",
    summary: "Get familiar with your college and explore various branches of engineering.",
    detailed_data: [
      "Explore different engineering branches to find your interest.",
      "Attend orientation and campus tours to know your college well.",
      "Make new friends and connect with seniors for guidance.",
      "Understand the basic structure of your degree program.",
      "Get familiar with college resources: library, labs, clubs, etc."
    ],
  },
  {
    id: 2,
    title: "Start Programming & Attend Tech Events",
    summary: "Begin your programming journey with C and explore CS subfields.",
    detailed_data: [
      "Start learning the C programming language with basic programs.",
      "Understand programming logic and dry run code regularly.",
      "Attend tech events, seminars, and workshops actively.",
      "Explore various sub-domains in Computer Science.",
      "Join a tech club or coding community in college."
    ],
  },
  {
    id: 3,
    title: "Dive into Core CS Subjects",
    summary: "Begin learning data structures, OS, and DBMS concepts.",
    detailed_data: [
      "Begin with Data Structures like arrays, stacks, and queues.",
      "Study core subjects like Operating Systems and DBMS.",
      "Understand memory management and database concepts.",
      "Practice coding problems on basic data structures.",
      "Participate in mini hackathons or coding challenges."
    ],
  },
  {
    id: 4,
    title: "Advance DSA & Coding Practice",
    summary: "Sharpen DSA skills and explore coding platforms like LeetCode.",
    detailed_data: [
      "Deep dive into Data Structures: trees, graphs, hashing.",
      "Start solving problems on LeetCode, GFG, HackerRank, etc.",
      "Participate in college or online coding contests.",
      "Join study groups and collaborate on concepts.",
      "Track your coding practice and build consistency."
    ],
  },
  {
    id: 5,
    title: "Explore Web Development",
    summary: "Learn full-stack development and build real projects.",
    detailed_data: [
      "Learn web development: HTML, CSS, JavaScript fundamentals.",
      "Explore frontend frameworks like React.",
      "Understand backend basics: Node.js, Express, MongoDB.",
      "Build 2–3 mini full-stack projects.",
      "Host your projects on GitHub and learn Git basics."
    ],
  },
  {
    id: 6,
    title: "Build Projects & Apply for Internships",
    summary: "Work on projects, core subjects, aptitude, and internship search.",
    detailed_data: [
      "Build more complete projects using what you’ve learned.",
      "Strengthen your grasp on core subjects and DSA.",
      "Practice aptitude and reasoning questions regularly.",
      "Look for internship opportunities (Internshala, LinkedIn, etc).",
      "Update your resume and build a LinkedIn profile."
    ],
  },
  {
    id: 7,
    title: "Prepare for Placements",
    summary: "Attend mock interviews, work on your major project, and get job-ready.",
    detailed_data: [
      "Attend walk-in drives and placement bootcamps.",
      "Give mock interviews with friends or mentors.",
      "Explore topics for your major project and start early.",
      "Work on your soft skills and communication.",
      "Contribute to open-source or collaborative projects."
    ],
  },
  {
    id: 8,
    title: "Finish Strong!",
    summary: "Complete your major project, give interviews, and graduate with confidence.",
    detailed_data: [
      "Complete and polish your major project for final evaluation.",
      "Prepare for final interviews and placements.",
      "Document your projects properly with readme and video demos.",
      "Reflect on your journey and help juniors.",
      "Enjoy the last moments of college and stay connected."
    ],
  },
];
export const initialQuestions = [
  {
    id: 1,
    text: "What's the best way to learn React in 2024?",
    author: "Beginner Dev",
    timestamp: "2 hours ago",
    answers: [
      {
        id: 101,
        text: "Start with the official React docs, then build small projects. The new React documentation is excellent!",
        author: "Senior React Dev",
        timestamp: "1 hour ago"
      }
    ]
  },
  {
    id: 2,
    text: "How do I optimize React performance?",
    author: "Mid-level Dev",
    timestamp: "4 hours ago",
    answers: []
  }
];