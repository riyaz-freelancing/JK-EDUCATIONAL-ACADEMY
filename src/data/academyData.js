import {
  BookOpen,
  GraduationCap,
  Award,
  Users,
  Briefcase,
  Code,
  CheckCircle,
  FileText,
  UserCheck,
  Compass,
  Cpu,
  Layers,
  Laptop,
  TrendingUp,
  MessageSquare,
  Sparkles,
  Target,
  ShieldCheck,
  BarChart,
  Calendar,
  Headphones
} from 'lucide-react';

export const academicCourses = [
  {
    id: 'inter-civics',
    category: 'Intermediate',
    title: 'Intermediate Civics',
    badge: 'JUNIOR COLLEGE',
    icon: BookOpen,
    description: 'Comprehensive coaching in political systems, governance, public administration, and constitution foundations.',
    highlights: ['Board Exam Preparation', 'Concept Mastery', 'Regular Practice Tests']
  },
  {
    id: 'inter-eco',
    category: 'Intermediate',
    title: 'Intermediate Economics',
    badge: 'JUNIOR COLLEGE',
    icon: BarChart,
    description: 'In-depth coverage of micro and macroeconomics, national income, market dynamics, and Indian economic development.',
    highlights: ['Graph & Numerical Training', 'Exam Revision Sessions', 'Individual Doubt Clearing']
  },
  {
    id: 'inter-com',
    category: 'Intermediate',
    title: 'Intermediate Commerce',
    badge: 'JUNIOR COLLEGE',
    icon: FileText,
    description: 'Strong foundation in double-entry bookkeeping, accountancy, business organization, and commercial concepts.',
    highlights: ['Practical Accountancy Labs', 'Model Question Papers', 'Experienced Faculty']
  },
  {
    id: 'bcom',
    category: 'Undergraduate',
    title: 'Bachelor of Commerce (B.Com)',
    badge: 'DEGREE PROGRAM',
    icon: GraduationCap,
    description: 'Comprehensive degree coaching covering financial accounting, corporate law, business economics, auditing, and taxation.',
    highlights: ['University Exam Focus', 'Tally & ERP Foundations', 'Corporate Project Guidance']
  },
  {
    id: 'bba',
    category: 'Undergraduate',
    title: 'Bachelor of Business Admin (BBA)',
    badge: 'MANAGEMENT DEGREE',
    icon: Briefcase,
    description: 'Core management education covering principles of management, marketing, human resources, and business communication.',
    highlights: ['Case Study Discussions', 'Presentation Skills', 'Industry Concepts']
  },
  {
    id: 'mcom',
    category: 'Postgraduate',
    title: 'Master of Commerce (M.Com)',
    badge: 'POSTGRADUATE',
    icon: Award,
    description: 'Advanced postgraduate coaching in managerial accounting, corporate finance, quantitative techniques, and research methodology.',
    highlights: ['Advanced Financial Modeling', 'Academic Mentorship', 'Flexible Schedule']
  },
  {
    id: 'mba',
    category: 'Postgraduate',
    title: 'Master of Business Admin (MBA)',
    badge: 'EXECUTIVE MANAGEMENT',
    icon: Compass,
    description: 'Specialized coaching for MBA subjects including strategic management, financial analysis, HR management, and operations.',
    highlights: ['Executive Case Analysis', 'Leadership Guidance', 'Career Support']
  }
];

export const whyChooseUsItems = [
  {
    icon: Users,
    title: '10+ Years Experienced Faculty',
    description: 'Learn from highly qualified educators with over a decade of proven teaching excellence.'
  },
  {
    icon: UserCheck,
    title: 'Individual Attention',
    description: 'Small batch sizes to ensure personalized guidance for every student’s unique learning speed.'
  },
  {
    icon: CheckCircle,
    title: '100% Passing Focus & Improvement',
    description: 'Structured revision strategies designed to ensure strong academic retention and grade boost.'
  },
  {
    icon: Sparkles,
    title: 'Advanced Teaching Methods',
    description: 'Modern conceptual techniques, visual aids, and practical problem-solving methodologies.'
  },
  {
    icon: BarChart,
    title: 'Regular Assessments & Feedback',
    description: 'Weekly evaluations and progress updates shared transparently to track continuous growth.'
  },
  {
    icon: Compass,
    title: 'Career Guidance & Mentorship',
    description: '1-on-1 career direction helping students transition from academics into professional roles.'
  }
];

export const corporateTraining = {
  it: [
    {
      id: 'fullstack',
      icon: Code,
      title: 'Full Stack Development',
      description: 'Hands-on training in HTML, CSS, JavaScript, React, Node.js, databases, and version control.',
      skills: ['React.js', 'Node.js', 'SQL / MongoDB', 'Git'],
      duration: '4 - 6 Months'
    },
    {
      id: 'qa-testing',
      icon: ShieldCheck,
      title: 'Software Testing',
      description: 'Comprehensive manual testing, test case design, Selenium automation, and API testing.',
      skills: ['Manual Testing', 'Selenium Automation', 'API Testing', 'Jira'],
      duration: '3 - 4 Months'
    }
  ],
  nonIt: [
    {
      id: 'business-process',
      icon: Briefcase,
      title: 'Business Process Training',
      description: 'Operations management, process workflow execution, customer domain training, and SLAs.',
      skills: ['Process Workflows', 'SLA Adherence', 'Quality Metrics'],
      duration: '2 Months'
    },
    {
      id: 'management-proc',
      icon: Users,
      title: 'Management Processes',
      description: 'Team coordination, supervisory skills, performance tracking, and enterprise reporting.',
      skills: ['Team Leadership', 'Reporting Tools', 'Operational Audits'],
      duration: '2 Months'
    },
    {
      id: 'interview-prep',
      icon: Target,
      title: 'Interview Preparation',
      description: 'Intensive mock interviews, HR round drills, aptitude technique, and confidence building.',
      skills: ['Mock Interviews', 'Aptitude Drills', 'HR Round Polish'],
      duration: '1 Month'
    },
    {
      id: 'pro-comm',
      icon: MessageSquare,
      title: 'Professional Communication',
      description: 'Corporate email writing, spoken English fluency, business etiquette, and presentation skills.',
      skills: ['Spoken English', 'Business Emails', 'Public Speaking'],
      duration: '1 Month'
    }
  ]
};

export const trainingToOpportunityProcess = [
  {
    step: '01',
    title: 'Training',
    description: 'Structured classroom and practical learning led by experienced domain instructors.'
  },
  {
    step: '02',
    title: 'Skill Development',
    description: 'Hands-on practical exercises, domain assignments, and real-world project scenarios.'
  },
  {
    step: '03',
    title: 'Interview Preparation',
    description: 'Resume optimization, mock interviews, aptitude drills, and soft-skill refinement.'
  },
  {
    step: '04',
    title: 'Placement Support',
    description: 'Career guidance, company drive notifications, and placement interview assistance.'
  }
];

export const counsellingFeatures = [
  {
    title: 'Career Assessment',
    description: 'Identify strengths, interests, and domain suitability through structured evaluation.'
  },
  {
    title: 'One-to-One Counselling',
    description: 'Personalized counseling sessions with experienced academic and career advisors.'
  },
  {
    title: 'Course Selection',
    description: 'Expert advice on selecting the right degree stream or specialized training program.'
  },
  {
    title: 'Interview Preparation',
    description: 'Targeted coaching for fresher & experienced job interviews across IT and non-IT sectors.'
  },
  {
    title: 'Resume Guidance',
    description: 'Professional resume crafting highlighting key academic projects, skills, and certifications.'
  },
  {
    title: 'Career Roadmap',
    description: 'Step-by-step career progression blueprint from education to professional hiring.'
  }
];

export const allServices = [
  {
    id: 1,
    icon: BookOpen,
    title: 'Academic Coaching',
    description: 'Structured tuition for Intermediate (Civics, Eco, Com), B.Com, BBA, M.Com, and MBA.'
  },
  {
    id: 2,
    icon: Laptop,
    title: 'Corporate Training',
    description: 'Industry-aligned corporate training for freshers, graduates, and working professionals.'
  },
  {
    id: 3,
    icon: Code,
    title: 'IT Training',
    description: 'Practical training in Full Stack Development and Software Testing (QA).'
  },
  {
    id: 4,
    icon: Briefcase,
    title: 'Non-IT Training',
    description: 'Business process training, management processes, and corporate communication.'
  },
  {
    id: 5,
    icon: Compass,
    title: 'Career Counselling',
    description: 'One-on-one personalized career assessment, stream selection, and goal alignment.'
  },
  {
    id: 6,
    icon: Target,
    title: 'Interview Preparation',
    description: 'Mock interview rounds, HR question practice, and confidence building drills.'
  },
  {
    id: 7,
    icon: UserCheck,
    title: 'Placement Assistance',
    description: 'Placement guidance connecting candidates to domestic and MNC career opportunities.'
  },
  {
    id: 8,
    icon: Sparkles,
    title: 'Professional Skill Development',
    description: 'Enhance workplace etiquette, spoken English fluency, and leadership habits.'
  },
  {
    id: 9,
    icon: FileText,
    title: 'Resume & Profile Guidance',
    description: 'Optimized resume formatting and professional profile structuring for job applications.'
  },
  {
    id: 10,
    icon: Users,
    title: 'Student Mentorship',
    description: 'Ongoing mentor support throughout your academic journey to monitor continuous progress.'
  }
];

export const placementHighlights = [
  {
    title: "Fresher's Interview Training",
    description: 'Comprehensive preparation for college pass-outs seeking entry-level corporate positions.'
  },
  {
    title: 'Experienced Non-IT Processes',
    description: 'Specialized training for professionals transitioning into non-IT corporate management roles.'
  },
  {
    title: 'IT Placement Support',
    description: 'Career support for software development, QA testing, and tech roles in domestic & MNC firms.'
  },
  {
    title: 'Management & Operations Roles',
    description: 'Opportunities in supervisory, process management, and business operations streams.'
  }
];

export const aboutStats = [
  { value: '10+', label: 'Years Experience' },
  { value: '7+', label: 'Academic Programs' },
  { value: '10+', label: 'Career & Training Services' },
  { value: '100%', label: 'Student-Focused Approach' }
];

export const testimonials = [
  {
    id: 1,
    name: 'Rahul',
    role: 'B.Com Graduate',
    content: 'JK Educational Academy provided exceptional academic support during my graduation. The faculty’s personal attention helped me improve my understanding and secure excellent marks.'
  },
  {
    id: 2,
    name: 'Priya',
    role: 'Full Stack Trainee',
    content: 'The Full Stack training program was practical and well-structured. The interview preparation sessions gave me the confidence needed during corporate placement drives.'
  },
  {
    id: 3,
    name: 'Arjun',
    role: 'Non-IT Process Trainee',
    content: 'The business process training and interview coaching at JK Educational Academy helped me transition smoothly into a professional corporate environment. Highly recommend their mentorship!'
  }
];

export const faqList = [
  {
    question: 'What courses does JK Educational Academy offer?',
    answer: 'We offer academic coaching for Intermediate (Civics, Economics, Commerce), B.Com, BBA, M.Com, and MBA. Additionally, we provide corporate IT training (Full Stack, Software Testing) and Non-IT training.'
  },
  {
    question: 'Do you provide career counselling?',
    answer: 'Yes, we offer dedicated one-to-one career counselling to help students and job seekers assess their strengths, choose the right academic/training path, and build a career roadmap.'
  },
  {
    question: 'Do you offer corporate training?',
    answer: 'Yes, we conduct industry-focused corporate training programs designed for freshers, graduates, and working professionals looking to upgrade their skills.'
  },
  {
    question: 'Do you provide interview preparation?',
    answer: 'Yes, our interview preparation includes mock interviews, HR round drills, aptitude guidance, resume optimization, and communication fluency coaching.'
  },
  {
    question: 'Do you provide placement assistance?',
    answer: 'Yes, we provide placement assistance and career support to connect candidates with opportunities across domestic companies and MNCs.'
  },
  {
    question: 'Do you provide IT training?',
    answer: 'Yes, we provide practical IT training in Full Stack Development and Software Testing (QA).'
  },
  {
    question: 'Do you provide online or offline classes?',
    answer: 'We offer flexible learning options including regular classroom training at our main center as well as interactive online guidance sessions.'
  }
];
