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
  Headphones,
  DollarSign,
  Globe,
  ShieldAlert,
  FileSpreadsheet,
  HardDrive,
  Calculator,
  Search,
  Building,
  CheckSquare
} from 'lucide-react';

// Intermediate Streams (MPC, BiPC, CEC, MEC, AEC & CBSE English)
export const intermediateCourses = [
  {
    id: 'inter-mpc',
    category: 'Intermediate',
    title: 'MPC Stream (Maths, Physics, Chemistry)',
    badge: '1st & 2nd YEAR',
    board: 'CBSE & State Board',
    icon: Calculator,
    description: 'Comprehensive tuition for Mathematics, Physics, and Chemistry for Class 11 & 12 / Intermediate 1st & 2nd Year.',
    subjects: ['Mathematics (1A, 1B, 2A, 2B)', 'Physics (Theory & Practical)', 'Chemistry (Organic & Inorganic)'],
    highlights: ['Board Exam Focused', 'Problem Solving & Derivations', 'Weekly Mock Tests']
  },
  {
    id: 'inter-bipc',
    category: 'Intermediate',
    title: 'BiPC Stream (Botany, Zoology, Physics, Chemistry)',
    badge: '1st & 2nd YEAR',
    board: 'CBSE & State Board',
    icon: Sparkles,
    description: 'Specialized biology science stream tuition covering Botany, Zoology, Physics, and Chemistry with diagram mastery.',
    subjects: ['Botany & Plant Anatomy', 'Zoology & Human Physiology', 'Physics & Chemistry'],
    highlights: ['Diagram & Theory Mastery', 'NCERT/State Syllabus', 'Regular Revision Rounds']
  },
  {
    id: 'inter-cec',
    category: 'Intermediate',
    title: 'CEC Stream (Civics, Economics, Commerce)',
    badge: '1st & 2nd YEAR',
    board: 'CBSE & State Board',
    icon: BarChart,
    description: 'In-depth coaching in political systems, micro/macro economics, accountancy, and commercial principles.',
    subjects: ['Civics & Political Science', 'Economics & National Income', 'Commerce & Accountancy'],
    highlights: ['Concept & Graph Mastery', 'Step-by-Step Ledger Practice', 'Past Paper Analysis']
  },
  {
    id: 'inter-mec',
    category: 'Intermediate',
    title: 'MEC Stream (Maths, Economics, Commerce)',
    badge: '1st & 2nd YEAR',
    board: 'CBSE & State Board',
    icon: TrendingUp,
    description: 'Quantitative & commercial stream coaching combining Advanced Mathematics, Economics, and Accountancy.',
    subjects: ['Mathematics (Pure & Applied)', 'Economics & Market Analysis', 'Commerce & Bookkeeping'],
    highlights: ['Maths & Stats drills', 'Commercial Accounting', 'Individual Doubt Sessions']
  },
  {
    id: 'inter-aec',
    category: 'Intermediate',
    title: 'AEC Stream (Accounts, Economics, Commerce)',
    badge: '1st & 2nd YEAR',
    board: 'CBSE & State Board',
    icon: FileText,
    description: 'Core accounting and financial foundation stream tuition for junior college students.',
    subjects: ['Financial Accounting', 'Economics & Indian Economy', 'Business Commerce'],
    highlights: ['Practical Accountancy Drills', 'Exam Scoring Techniques', 'Structured Notes']
  },
  {
    id: 'inter-english',
    category: 'Intermediate',
    title: '1st & 2nd Year English (CBSE & State Board)',
    badge: 'ENGLISH LANGUAGE',
    board: 'CBSE & State Board',
    icon: BookOpen,
    description: 'Dedicated English language, prose, poetry, grammar, comprehension, and corporate communication tuition for Class 11 & 12.',
    subjects: ['1st Year English (Grammar & Prose)', '2nd Year English (Poetry & Essay Writing)', 'CBSE Core & Elective English'],
    highlights: ['Grammar & Composition Drills', 'Spoken & Written English Fluency', 'Board Exam Scoring Support']
  }
];

// B.Com Subjects (All 13 specific subjects from PDF)
export const bcomSubjects = [
  { id: 'fa1', title: 'Financial Accounting - 1', level: 'B.Com 1st Year', icon: FileText, desc: 'Single & double entry bookkeeping, trial balance, final accounts, and depreciation.' },
  { id: 'be', title: 'Business Economics', level: 'B.Com 1st Year', icon: TrendingUp, desc: 'Demand analysis, production functions, cost concepts, and market structures.' },
  { id: 'bom', title: 'Business Organization & Management', level: 'B.Com 1st Year', icon: Building, desc: 'Principles of management, business ownership forms, planning, and organizational behavior.' },
  { id: 'fa2', title: 'Financial Accounting – 2', level: 'B.Com 1st Year', icon: FileText, desc: 'Consignment, joint ventures, branch accounts, hire purchase, and partnership accounting.' },
  { id: 'bl', title: 'Business Law', level: 'B.Com 2nd Year', icon: ShieldCheck, desc: 'Indian Contract Act, Sale of Goods Act, Consumer Protection, and Negotiable Instruments.' },
  { id: 'aa', title: 'Advanced Accounting', level: 'B.Com 2nd Year', icon: Calculator, desc: 'Company accounts, valuation of goodwill and shares, amalgamation, and liquidation.' },
  { id: 'bs1', title: 'Business Statistics - 1', level: 'B.Com 2nd Year', icon: BarChart, desc: 'Data collection, measures of central tendency, dispersion, and skewness.' },
  { id: 'ca', title: 'Corporate Accounting', level: 'B.Com 3rd Year', icon: Building, desc: 'Issue of shares & debentures, final accounts of companies, banking & insurance accounting.' },
  { id: 'bs2', title: 'Business Statistics - 2', level: 'B.Com 2nd Year', icon: BarChart, desc: 'Correlation, regression analysis, time series forecasting, and index numbers.' },
  { id: 'wt', title: 'Web Technologies', level: 'B.Com 3rd Year', icon: Code, desc: 'HTML, CSS, JavaScript, e-commerce web applications, and web page design fundamentals.' },
  { id: 'costing', title: 'Cost Accounting', level: 'B.Com 3rd Year', icon: DollarSign, desc: 'Material cost, labor cost, overheads, unit costing, job costing, and marginal costing.' },
  { id: 'tally-comp', title: 'Computerized Accounting', level: 'B.Com 3rd Year', icon: Laptop, desc: 'Tally ERP/Prime software hands-on, GST filing, vouchers, inventory, and payroll accounting.' },
  { id: 'mac', title: 'Management Accounting & Control', level: 'B.Com 3rd Year', icon: Award, desc: 'Financial statement analysis, ratio analysis, cash flow statements, and budgetary control.' }
];

// Combine all academic courses for generic lists
export const academicCourses = [
  ...intermediateCourses,
  {
    id: 'bcom-degree',
    category: 'Undergraduate',
    title: 'Bachelor of Commerce (B.Com)',
    badge: 'DEGREE PROGRAM',
    board: 'Osmania / Telangana / University Syllabus',
    icon: GraduationCap,
    description: 'Comprehensive degree coaching for all 13 subjects including Financial Accounting, Corporate Accounting, Business Law, Stats, and Web Tech.',
    subjects: ['Financial Accounting 1 & 2', 'Corporate & Advanced Accounting', 'Business Statistics 1 & 2', 'Cost & Management Accounting'],
    highlights: ['All 13 B.Com Subjects Covered', 'Tally & Computerized Accounting Labs', 'University Exam Focus']
  },
  {
    id: 'bba-degree',
    category: 'Undergraduate',
    title: 'Bachelor of Business Admin (BBA)',
    badge: 'MANAGEMENT DEGREE',
    board: 'University Standard',
    icon: Briefcase,
    description: 'Core management education covering principles of management, marketing, human resources, and business communication.',
    subjects: ['Principles of Management', 'Marketing Management', 'HR & Organizational Behavior', 'Financial Management'],
    highlights: ['Case Study Discussions', 'Presentation Skills', 'Industry Concepts']
  },
  {
    id: 'mcom-postgrad',
    category: 'Postgraduate',
    title: 'Master of Commerce (M.Com)',
    badge: 'POSTGRADUATE',
    board: 'University Standard',
    icon: Award,
    description: 'Advanced postgraduate coaching in managerial accounting, corporate finance, quantitative techniques, and research methodology.',
    subjects: ['Managerial Accounting', 'Advanced Corporate Finance', 'Quantitative Techniques', 'Research Methodology'],
    highlights: ['Advanced Financial Analysis', 'Academic Mentorship', 'Flexible Batches']
  },
  {
    id: 'mba-postgrad',
    category: 'Postgraduate',
    title: 'Master of Business Admin (MBA)',
    badge: 'EXECUTIVE MANAGEMENT',
    board: 'University Standard',
    icon: Compass,
    description: 'Specialized coaching for MBA subjects including strategic management, financial analysis, HR management, and operations.',
    subjects: ['Strategic Management', 'Corporate Financial Management', 'HR & Operations Management', 'Business Analytics'],
    highlights: ['Executive Case Analysis', 'Leadership Guidance', 'Career Support']
  }
];

// Why Choose Us Items
export const whyChooseUsItems = [
  {
    icon: Users,
    title: '10+ Years Experienced Faculty',
    description: 'Learn from highly qualified educators with over a decade of proven teaching excellence in intermediate and degree streams.'
  },
  {
    icon: UserCheck,
    title: 'Individual Attention',
    description: 'Small batch sizes to ensure personalized guidance for every student’s unique learning speed.'
  },
  {
    icon: CheckCircle,
    title: '100% Passing Focus & Grade Boost',
    description: 'Structured revision strategies designed to ensure strong academic retention, 100% pass rates, and top grades.'
  },
  {
    icon: Sparkles,
    title: 'Advanced Teaching Methods',
    description: 'Modern conceptual techniques, practical accounting labs, visual aids, and problem-solving methodologies.'
  },
  {
    icon: BarChart,
    title: 'Regular Assessments & Feedback',
    description: 'Weekly evaluations and progress updates shared transparently to track continuous growth.'
  },
  {
    icon: Compass,
    title: 'Career Guidance & Mentorship',
    description: '1-on-1 career direction helping students transition from academics into corporate and professional roles.'
  }
];

// Corporate Training Categorized as per PDF Document
export const corporateTrainingData = {
  // 1. Finance Domain (Non-IT)
  financeDomain: [
    {
      id: 'fin-basic',
      title: 'Basic Accounting with Real Time Exposure',
      category: 'Finance Domain',
      icon: Calculator,
      description: 'Hands-on practical accounting foundation with real-world invoice processing, journal entries, ledgers, and financial reports.',
      highlights: ['Real Time Invoices & Ledgers', 'Journal & Trial Balance Drills', 'Corporate Accounting Norms']
    },
    {
      id: 'fin-r2r',
      title: 'Record to Report Process (R2R)',
      category: 'Finance Domain',
      icon: FileText,
      description: 'Comprehensive corporate training on R2R workflow, general ledger management, month-end closing, bank reconciliation, and financial reporting.',
      highlights: ['General Ledger Posting', 'Month-End Closing Drills', 'Financial Statement Preparation']
    },
    {
      id: 'fin-p2p',
      title: 'Procure to Pay Process (P2P)',
      category: 'Finance Domain',
      icon: DollarSign,
      description: 'End-to-end P2P process training covering vendor master management, purchase order verification, invoice matching (3-way match), and payment processing.',
      highlights: ['Purchase Orders & GRN', '3-Way Invoice Matching', 'Vendor Account Reconciliation']
    },
    {
      id: 'fin-o2c',
      title: 'Order to Cash Process (O2C)',
      category: 'Finance Domain',
      icon: TrendingUp,
      description: 'Complete O2C workflow training covering customer order management, credit check, billing, accounts receivable, cash application, and collections.',
      highlights: ['Customer Master & Credit Checks', 'Accounts Receivable (AR)', 'Cash Application & Dispute Resolution']
    },
    {
      id: 'fin-payroll-in',
      title: 'Indian Payroll Accounting & Processing',
      category: 'Finance Domain',
      icon: Briefcase,
      description: 'In-depth training on Indian salary structuring, PF (Provident Fund), ESI, Professional Tax, TDS deductions, CTC computation, and payroll software generation.',
      highlights: ['PF, ESI & PT Statutory Rules', 'TDS & Form 16 Computation', 'Payroll Sheet & Payslip Processing']
    },
    {
      id: 'fin-payroll-saudi',
      title: 'Saudi Accounting & Saudi Payroll Accounting',
      category: 'Finance Domain',
      icon: Globe,
      description: 'Specialized Gulf/Saudi Arabia corporate accounting, GOSI (General Organization for Social Insurance), End of Service Benefits (EOSB), VAT compliance, and Saudi payroll rules.',
      highlights: ['GOSI & Saudi Labor Law Norms', 'Saudi EOSB Calculation', 'Gulf VAT & Saudi Accounting Exposure']
    }
  ],

  // 2. Human Resource Domain (Non-IT)
  hrDomain: [
    {
      id: 'hr-talent',
      title: 'Talent Acquisition & Recruitment Excellence Program',
      category: 'Human Resource',
      icon: UserCheck,
      description: 'End-to-end recruitment process training covering job descriptions, candidate sourcing on job portals/LinkedIn, screening, interview scheduling, and offer negotiations.',
      highlights: ['Portal Sourcing (Naukri, LinkedIn)', 'Boolean Search Technique', 'Salary Negotiation & Offer letters']
    },
    {
      id: 'hr-ops',
      title: 'HR Operations & Employee Lifecycle Excellence Program',
      category: 'Human Resource',
      icon: Users,
      description: 'Practical training on onboarding procedures, background verification (BGV), employee database management, attendance, leave policy, and offboarding exit formalities.',
      highlights: ['Employee Onboarding & BGV', 'Attendance & Leave Tracking', 'Exit Interviews & Clearance']
    },
    {
      id: 'hr-admin',
      title: 'HR Administration & Workplace Management Program',
      category: 'Human Resource',
      icon: Building,
      description: 'Facilities management, office administration, vendor management, workplace compliance, health & safety policies, and HR documentation.',
      highlights: ['HR Documentation & Letters', 'Vendor & Facility Management', 'Office Compliance Protocols']
    },
    {
      id: 'hr-pro-mgmt',
      title: 'Professional Human Resource Management Program',
      category: 'Human Resource',
      icon: Award,
      description: 'Strategic HR management, performance management systems (PMS), KPI/KRA frameworks, employee engagement, and labor law compliance overview.',
      highlights: ['KRA & KPI Design', 'Performance Appraisal Systems', 'Strategic HR Leadership']
    }
  ],

  // 3. IT Courses
  itDomain: [
    {
      id: 'it-fullstack',
      title: 'Full Stack Development',
      category: 'IT Courses',
      icon: Code,
      description: 'Hands-on practical full stack Web development training covering HTML5, CSS3, JavaScript ES6+, React.js, Node.js, Express, databases (SQL/MongoDB), and Git.',
      skills: ['HTML5 & CSS3', 'JavaScript ES6+', 'React.js', 'Node.js & Express', 'MongoDB / SQL', 'Git & GitHub'],
      highlights: ['Live Projects', 'Frontend & Backend Mastery', 'Code Reviews & GitHub Portfolio']
    },
    {
      id: 'it-digital-marketing',
      title: 'Digital Marketing',
      category: 'IT Courses',
      icon: Globe,
      description: 'Complete digital marketing certification program covering Search Engine Optimization (SEO), Social Media Marketing (SMM), Google Ads (PPC), Content Marketing, and Analytics.',
      skills: ['SEO & Keyword Research', 'Google Ads & PPC', 'Meta / Social Media Marketing', 'Content & Email Marketing', 'Google Analytics'],
      highlights: ['Live Ad Campaigns', 'SEO Audit Tools', 'Certifications Guidance']
    }
  ],

  // 4. Other Domains (Non-IT)
  otherDomains: [
    {
      id: 'nonit-aml-kyc',
      title: 'Anti Money Laundering (AML) & Know Your Customer (KYC) Process',
      category: 'Other Domains',
      icon: ShieldAlert,
      description: 'Banking & financial compliance process training covering customer due diligence (CDD), enhanced due diligence (EDD), PEP screening, and suspicious transaction monitoring.',
      highlights: ['CDD & EDD Procedures', 'PEP & Sanction Screening', 'AML Regulatory Framework']
    },
    {
      id: 'nonit-chat-support',
      title: 'Email & Chat Support Process',
      category: 'Other Domains',
      icon: Headphones,
      description: 'Customer experience training focusing on written communication, professional email etiquette, ticketing systems, live chat resolution, and SLA adherence.',
      highlights: ['Written Business English', 'Ticketing Systems (Zendesk style)', 'SLA & Customer Satisfaction']
    },
    {
      id: 'nonit-content-mod',
      title: 'Content Moderation Process',
      category: 'Other Domains',
      icon: CheckSquare,
      description: 'Training for trust, safety, and social media moderation teams, reviewing user-generated content against community guidelines and safety standards.',
      highlights: ['Policy Enforcement', 'Accuracy & Speed Metrics', 'Digital Safety Protocols']
    },
    {
      id: 'nonit-mapping',
      title: 'Mapping Process',
      category: 'Other Domains',
      icon: Compass,
      description: 'Geospatial and GIS data mapping process training, data annotation, spatial verification, and quality checking for navigation and mapping projects.',
      highlights: ['Spatial Data Verification', 'Attribute Mapping', 'Quality Audits']
    }
  ],

  // 5. Basic Courses
  basicCourses: [
    {
      id: 'basic-msoffice',
      title: 'MS Office Suite (Word, Excel, PowerPoint)',
      category: 'Basic Computer Courses',
      icon: Laptop,
      description: 'Essential computer literacy covering Word document formatting, Excel calculations, tables, and PowerPoint presentation design.',
      duration: '1 Month'
    },
    {
      id: 'basic-excel',
      title: 'Advanced Excel',
      category: 'Basic Computer Courses',
      icon: FileSpreadsheet,
      description: 'Master VLOOKUP, XLOOKUP, INDEX-MATCH, Pivot Tables, Data Validation, Conditional Formatting, Charts, and Financial Functions.',
      duration: '1 Month'
    },
    {
      id: 'basic-tally',
      title: 'Tally ERP & Tally Prime',
      category: 'Basic Computer Courses',
      icon: Calculator,
      description: 'Complete computerized accounting with Tally ERP 9 / Tally Prime, GST filing, journal vouchers, inventory management, and profit & loss statements.',
      duration: '1.5 Months'
    },
    {
      id: 'basic-dca',
      title: 'DCA (Diploma in Computer Applications)',
      category: 'Basic Computer Courses',
      icon: Cpu,
      description: 'Foundation diploma covering computer fundamentals, MS Office, internet tools, database basics, and typing skills.',
      duration: '6 Months'
    },
    {
      id: 'basic-adca',
      title: 'ADCA (Advanced Diploma in Computer Applications)',
      category: 'Basic Computer Courses',
      icon: Layers,
      description: 'Advanced computer application diploma including MS Office, Advanced Excel, Tally ERP with GST, web design basics, and hardware orientation.',
      duration: '1 Year'
    },
    {
      id: 'basic-pgdca',
      title: 'PGDCA (Post Graduate Diploma in Computer Applications)',
      category: 'Basic Computer Courses',
      icon: GraduationCap,
      description: 'Postgraduate computer application program covering software programming concepts, database management systems, web applications, and office automation.',
      duration: '1 Year'
    },
    {
      id: 'basic-hardware',
      title: 'Hardware & Networking',
      category: 'Basic Computer Courses',
      icon: HardDrive,
      description: 'PC assembly, troubleshooting, OS installation, LAN/WAN networking fundamentals, IP configuration, and router setup.',
      duration: '3 Months'
    }
  ]
};

// Simplified export for backward compatibility where corporateTraining object was referenced
export const corporateTraining = {
  it: corporateTrainingData.itDomain,
  nonIt: [
    ...corporateTrainingData.financeDomain.slice(0, 2),
    ...corporateTrainingData.hrDomain.slice(0, 2),
    ...corporateTrainingData.otherDomains.slice(0, 2)
  ]
};

export const trainingToOpportunityProcess = [
  {
    step: '01',
    title: 'Structured Training',
    description: 'Classroom and practical learning led by experienced domain instructors and industry professionals.'
  },
  {
    step: '02',
    title: 'Practical Exposure',
    description: 'Hands-on live project scenarios, real invoice drills, software labs, and process workflows.'
  },
  {
    step: '03',
    title: 'Interview Preparation',
    description: 'Resume building, mock technical/HR interviews, aptitude training, and confidence drills.'
  },
  {
    step: '04',
    title: 'Placement Support',
    description: 'Career counselling, company referral notifications, and placement interview scheduling.'
  }
];

export const counsellingFeatures = [
  {
    title: 'Academic & Career Assessment',
    description: 'Identify strengths, subject preferences, and domain suitability through evaluation.'
  },
  {
    title: 'One-to-One Personal Counselling',
    description: 'Dedicated individual sessions with experienced academic and corporate advisors.'
  },
  {
    title: 'Stream & Course Selection',
    description: 'Expert advice on selecting the right Intermediate stream (MPC, BiPC, CEC, MEC, AEC) or degree path.'
  },
  {
    title: 'Interview & Skill Training',
    description: 'Targeted coaching for fresher & experienced job interviews across IT, Finance, HR, and Non-IT.'
  },
  {
    title: 'Professional Resume Building',
    description: 'Professional resume crafting highlighting key academic marks, practical projects, and skills.'
  },
  {
    title: 'Career Roadmap & Mentorship',
    description: 'Step-by-step progression blueprint guiding students from school to corporate hiring.'
  }
];

export const allServices = [
  {
    id: 1,
    icon: BookOpen,
    title: 'Intermediate Tuitions',
    description: 'MPC, BiPC, CEC, MEC, AEC, and 1st & 2nd Year CBSE/State Board English coaching.'
  },
  {
    id: 2,
    icon: GraduationCap,
    title: 'Degree & PG Tuitions',
    description: 'All 13 subjects of B.Com (Financial Accounting, Stats, Advanced Accounting, Web Tech), BBA, M.Com, and MBA.'
  },
  {
    id: 3,
    icon: DollarSign,
    title: 'Finance Corporate Training',
    description: 'R2R, P2P, O2C, Indian Payroll, Saudi Payroll, Saudi Accounting, and Real-Time Basic Accounting.'
  },
  {
    id: 4,
    icon: Users,
    title: 'HR Corporate Training',
    description: 'Talent Acquisition, HR Operations, Employee Lifecycle, Workplace Management, and HR Management.'
  },
  {
    id: 5,
    icon: Code,
    title: 'IT & Digital Courses',
    description: 'Practical training in Full Stack Development (React/Node) and Digital Marketing (SEO/Ads).'
  },
  {
    id: 6,
    icon: ShieldAlert,
    title: 'Non-IT Domain Processes',
    description: 'Anti Money Laundering (AML/KYC), Email & Chat Support, Content Moderation, and Mapping Process.'
  },
  {
    id: 7,
    icon: Laptop,
    title: 'Basic Computer Courses',
    description: 'MS Office, Advanced Excel, Tally ERP/Prime, DCA, ADCA, PGDCA, and Hardware & Networking.'
  },
  {
    id: 8,
    icon: Compass,
    title: 'Career Counselling',
    description: 'One-on-one career guidance, stream selection, and corporate career roadmap planning.'
  },
  {
    id: 9,
    icon: Target,
    title: 'Interview Preparation',
    description: 'Mock interviews, HR round drills, resume formatting, and spoken English fluency.'
  },
  {
    id: 10,
    icon: UserCheck,
    title: 'Placement Assistance',
    description: 'Connecting candidates to domestic companies and MNC job placement opportunities.'
  }
];

export const placementHighlights = [
  {
    title: "Fresher's Corporate Placement",
    description: 'Targeted preparation for college pass-outs seeking entry-level IT, Finance, HR, or Non-IT positions.'
  },
  {
    title: 'Finance & HR Domain Jobs',
    description: 'Specialized corporate training for R2R, P2P, O2C, Indian & Saudi Payroll, and Talent Acquisition roles.'
  },
  {
    title: 'IT & Software Development',
    description: 'Career support for Full Stack Web Developers, Digital Marketing specialists, and Tech roles.'
  },
  {
    title: 'Non-IT Process Opportunities',
    description: 'Hiring track for AML/KYC Analysts, Email/Chat Support Executives, and Content Moderators.'
  }
];

export const aboutStats = [
  { value: '10+', label: 'Years Experience' },
  { value: '30+', label: 'Courses Offered' },
  { value: '100%', label: 'Pass & Skill Focus' },
  { value: '1000+', label: 'Students Guided' }
];

export const testimonials = [
  {
    id: 1,
    name: 'Rahul V.',
    role: 'CEC Student - 98% in Board Exams',
    content: 'JK Educational Academy helped me master Commerce, Civics, and Economics. The faculty clear every single concept with individual focus.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'B.Com Graduate - Corporate Finance Trainee',
    content: 'Studying B.Com Financial Accounting and Statistics here was the best decision. I also joined their Record to Report (R2R) Finance training and got placed easily!'
  },
  {
    id: 3,
    name: 'Mohammed Ali',
    role: 'Saudi Payroll & Accounting Trainee',
    content: 'The Saudi Accounting and Saudi Payroll training gave me real exposure to GOSI and EOSB calculations. Highly recommended for finance career aspirants!'
  }
];

export const faqList = [
  {
    question: 'What Intermediate tuition streams do you offer?',
    answer: 'We provide comprehensive tuition for Intermediate 1st & 2nd Year (CBSE and State Board) across MPC (Maths, Physics, Chemistry), BiPC (Botany, Zoology, Physics, Chemistry), CEC (Civics, Economics, Commerce), MEC (Maths, Economics, Commerce), AEC (Accounts, Economics, Commerce), as well as 1st & 2nd Year English.'
  },
  {
    question: 'What B.Com subjects do you cover in your degree coaching?',
    answer: 'We cover all 13 core B.Com subjects including Financial Accounting 1 & 2, Business Economics, Business Organization & Management, Business Law, Advanced Accounting, Business Statistics 1 & 2, Corporate Accounting, Web Technologies, Cost Accounting, Computerized Accounting (Tally), and Management Accounting & Control.'
  },
  {
    question: 'What Corporate Finance and HR Non-IT training programs do you conduct?',
    answer: 'Our Non-IT Corporate Finance domain includes Basic Accounting with Real-Time Exposure, Record to Report (R2R), Procure to Pay (P2P), Order to Cash (O2C), Indian Payroll Accounting & Processing, and Saudi Accounting & Saudi Payroll. In HR domain, we offer Talent Acquisition, HR Operations, HR Administration, and Professional HR Management.'
  },
  {
    question: 'What Basic Computer and IT courses do you offer?',
    answer: 'In IT, we offer Full Stack Development and Digital Marketing. In Basic Computer Courses, we offer MS Office, Advanced Excel, Tally ERP / Tally Prime, DCA, ADCA, PGDCA, and Hardware & Networking.'
  },
  {
    question: 'What other Non-IT corporate domain processes are available?',
    answer: 'We provide specialized process training in Anti Money Laundering (AML) & KYC, Email & Chat Support Process, Content Moderation Process, and Mapping Process.'
  },
  {
    question: 'Do you provide career counselling and placement assistance?',
    answer: 'Yes! We provide 1-on-1 personalized career counselling, stream selection advice, professional resume building, interview preparation drills, and placement assistance across corporate MNCs and domestic firms.'
  }
];

