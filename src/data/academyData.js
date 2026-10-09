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

// 1. Tuitions For Intermediate (HYD Rates)
export const intermediateCourses = [
  {
    id: 'inter-mpc',
    category: 'Tuitions For Intermediate',
    title: 'M.P.C (Maths, Physics, Chemistry)',
    fee: '₹15,000',
    feePeriod: '/ Year',
    monthlyFee: '₹2,500/mo',
    originalFee: '₹18,000',
    discount: '16% OFF',
    duration: '1 Academic Year',
    mode: 'HYD Campus & Online',
    highlights: ['Specialist HYD Board Faculty', 'Weekly Chapter Tests', '1-on-1 Doubt Clearing'],
    icon: Calculator
  },
  {
    id: 'inter-bipc',
    category: 'Tuitions For Intermediate',
    title: 'BiPC (Botany, Zoology, Physics, Chemistry)',
    fee: '₹16,000',
    feePeriod: '/ Year',
    monthlyFee: '₹2,800/mo',
    originalFee: '₹19,500',
    discount: '18% OFF',
    duration: '1 Academic Year',
    mode: 'HYD Campus & Online',
    highlights: ['Diagram & Theory Specialization', 'NEET Base Foundation', 'Regular Performance Reports'],
    icon: Sparkles
  },
  {
    id: 'inter-mec',
    category: 'Tuitions For Intermediate',
    title: 'MEC (Maths, Economics, Commerce)',
    fee: '₹14,000',
    feePeriod: '/ Year',
    monthlyFee: '₹2,400/mo',
    originalFee: '₹16,500',
    discount: '15% OFF',
    duration: '1 Academic Year',
    mode: 'HYD Campus & Online',
    highlights: ['Commerce & Accountancy Focus', 'Maths Problem Solving', 'Model Exam Series'],
    icon: TrendingUp
  },
  {
    id: 'inter-cec',
    category: 'Tuitions For Intermediate',
    title: 'CEC (Civics, Economics, Commerce)',
    fee: '₹12,000',
    feePeriod: '/ Year',
    monthlyFee: '₹2,200/mo',
    originalFee: '₹15,000',
    discount: '20% OFF',
    duration: '1 Academic Year',
    mode: 'HYD Campus & Online',
    highlights: ['Concept Oriented Coaching', 'Commerce Practical Notes', 'Exam Score Booster'],
    icon: BarChart
  },
  {
    id: 'inter-aec',
    category: 'Tuitions For Intermediate',
    title: 'AEC (Accounts, Economics, Commerce)',
    fee: '₹12,500',
    feePeriod: '/ Year',
    monthlyFee: '₹2,200/mo',
    originalFee: '₹15,500',
    discount: '19% OFF',
    duration: '1 Academic Year',
    mode: 'HYD Campus & Online',
    highlights: ['Accounting Ledger Drills', 'Economics Micro/Macro Prep', 'Board Exam Guarantee'],
    icon: FileText
  }
];

// Tuitions For Graduation (B.Com, BBA)
export const bcomSubjects = [
  { id: 'fa1', title: 'Financial Accounting-1', fee: '₹1,500', icon: FileText },
  { id: 'be', title: 'Business Economics', fee: '₹1,500', icon: TrendingUp },
  { id: 'bom', title: 'Business Organization and Management', fee: '₹1,500', icon: Building },
  { id: 'fa2', title: 'Financial Accounting – 2', fee: '₹1,500', icon: FileText },
  { id: 'bl', title: 'Business Law', fee: '₹1,500', icon: ShieldCheck },
  { id: 'aa', title: 'Advanced Accounting', fee: '₹1,500', icon: Calculator },
  { id: 'bs1', title: 'Business Statistics - 1', fee: '₹1,500', icon: BarChart },
  { id: 'ca', title: 'Corporate Accounting', fee: '₹1,500', icon: Building },
  { id: 'bs2', title: 'Business Statistics - 2', fee: '₹1,500', icon: BarChart },
  { id: 'wt', title: 'Web Technologies', fee: '₹1,500', icon: Code },
  { id: 'costing', title: 'Cost Accounting', fee: '₹1,500', icon: DollarSign },
  { id: 'comp-acc', title: 'Computerized Accounting', fee: '₹1,500', icon: Laptop },
  { id: 'mac', title: 'Management Accounting and Control', fee: '₹1,500', icon: Award }
];

export const graduationCourses = [
  {
    id: 'grad-bcom',
    category: 'Tuitions For Graduation',
    title: 'B.Com (Bachelor of Commerce)',
    fee: '₹12,000',
    feePeriod: '/ Sem (Full Package)',
    perSubject: '₹1,500 / Per Subject',
    monthlyFee: '₹2,000/mo',
    originalFee: '₹15,000',
    discount: '20% OFF',
    duration: 'Semester Package (All 13 Subjects)',
    mode: 'HYD Campus & Online',
    description: 'Comprehensive coaching covering all 13 core subjects of B.Com with Osmania / Kakatiya University Syllabus.',
    highlights: ['All 13 Core Subjects Covered', 'Per-Subject Option @ ₹1,500', 'University Previous Papers Practice'],
    icon: GraduationCap,
    badge: 'GRADUATION'
  },
  {
    id: 'grad-bba',
    category: 'Tuitions For Graduation',
    title: 'BBA (Bachelor of Business Administration)',
    fee: '₹14,500',
    feePeriod: '/ Sem Package',
    monthlyFee: '₹2,500/mo',
    originalFee: '₹18,000',
    discount: '19% OFF',
    duration: 'Semester Package',
    mode: 'HYD Campus & Online',
    description: 'Structured tuitions for Business Management, Principles, Marketing & Financial Management.',
    highlights: ['Management Case Studies', 'Financial Ratios & Strategy', 'Exam & Assignment Support'],
    icon: Briefcase,
    badge: 'GRADUATION'
  }
];

// Tuitions For Masters (M.Com, MBA)
export const mastersCourses = [
  {
    id: 'masters-mcom',
    category: 'Tuitions For Masters',
    title: 'M.Com (Master of Commerce)',
    fee: '₹16,000',
    feePeriod: '/ Sem Package',
    monthlyFee: '₹3,000/mo',
    originalFee: '₹20,000',
    discount: '20% OFF',
    duration: 'Semester Package',
    mode: 'HYD Campus & Online',
    description: 'Advanced tuitions in Commerce, Corporate Finance, Portfolio Management & Advanced Accounting.',
    highlights: ['Corporate Finance Specialization', 'Research & Thesis Guidance', 'HYD Expert Lecturers'],
    icon: Award,
    badge: 'MASTERS'
  },
  {
    id: 'masters-mba',
    category: 'Tuitions For Masters',
    title: 'MBA (Master of Business Administration)',
    fee: '₹18,500',
    feePeriod: '/ Sem Package',
    monthlyFee: '₹3,500/mo',
    originalFee: '₹24,000',
    discount: '23% OFF',
    duration: 'Semester Package',
    mode: 'HYD Campus & Online',
    description: 'Specialised coaching for Finance, HR, Marketing, Operations & Strategic Management.',
    highlights: ['Finance & HR Electives Support', 'Practical Project Case Studies', 'Placement Counseling'],
    icon: Building,
    badge: 'MASTERS'
  }
];

export const academicCourses = [
  ...intermediateCourses.map(c => ({ ...c, badge: 'INTERMEDIATE', description: `In-depth coaching for ${c.title}.` })),
  ...graduationCourses,
  ...mastersCourses
];

// 2. Corporate Trainings (Non-IT)
export const corporateTrainingData = {
  // Finance Domain
  financeDomain: [
    { id: 'fin-basic', title: 'Basic accounting with real time exposure', fee: '₹8,500', originalFee: '₹11,000', duration: '45 Days', category: 'Finance Domain', icon: Calculator },
    { id: 'fin-r2r', title: 'Record to report process (R2R)', fee: '₹12,500', originalFee: '₹15,000', duration: '60 Days', category: 'Finance Domain', icon: FileText },
    { id: 'fin-p2p', title: 'Procure to pay process (P2P)', fee: '₹11,500', originalFee: '₹14,000', duration: '60 Days', category: 'Finance Domain', icon: DollarSign },
    { id: 'fin-o2c', title: 'Order to Cash process (O2C)', fee: '₹11,500', originalFee: '₹14,000', duration: '60 Days', category: 'Finance Domain', icon: TrendingUp },
    { id: 'fin-payroll-acc', title: 'Indian payroll accounting', fee: '₹9,500', originalFee: '₹12,000', duration: '30 Days', category: 'Finance Domain', icon: Briefcase },
    { id: 'fin-payroll-proc', title: 'Indian payroll processing', fee: '₹9,500', originalFee: '₹12,000', duration: '30 Days', category: 'Finance Domain', icon: Briefcase },
    { id: 'fin-saudi-acc', title: 'Saudi accounting', fee: '₹14,500', originalFee: '₹18,000', duration: '45 Days', category: 'Finance Domain', icon: Globe },
    { id: 'fin-saudi-payroll', title: 'Saudi payroll accounting', fee: '₹14,500', originalFee: '₹18,000', duration: '45 Days', category: 'Finance Domain', icon: Globe }
  ],

  // Human Resource Domain
  hrDomain: [
    { id: 'hr-talent', title: 'Talent Acquisition & Recruitment Excellence Program', fee: '₹9,999', originalFee: '₹13,000', duration: '45 Days', category: 'Human Resource Domain', icon: UserCheck },
    { id: 'hr-ops', title: 'HR Operations & Employee Lifecycle Excellence Program', fee: '₹10,500', originalFee: '₹14,000', duration: '45 Days', category: 'Human Resource Domain', icon: Users },
    { id: 'hr-admin', title: 'HR Administration & Workplace Management Program', fee: '₹9,500', originalFee: '₹12,500', duration: '30 Days', category: 'Human Resource Domain', icon: Building },
    { id: 'hr-pro', title: 'Professional Human Resource Management Program', fee: '₹14,999', originalFee: '₹19,000', duration: '90 Days', category: 'Human Resource Domain', icon: Award }
  ],

  // 3. IT Courses
  itDomain: [
    {
      id: 'it-fullstack',
      title: 'Full Stack Development',
      fee: '₹24,999',
      feePeriod: ' (Full Course)',
      monthlyFee: '₹8,999/mo',
      emi: '3 Easy EMIs of ₹8,999',
      originalFee: '₹35,000',
      discount: '28% OFF',
      duration: '6 Months (Includes Internship)',
      mode: 'Hybrid (HYD & Online)',
      category: '3. IT Courses',
      highlights: ['React, Node.js, Express & MongoDB', 'Real-world Capstone Projects', '100% HYD Placement Assistance'],
      icon: Code
    },
    {
      id: 'it-digital-marketing',
      title: 'Digital Marketing',
      fee: '₹14,999',
      feePeriod: ' (Full Course)',
      monthlyFee: '₹7,999/mo',
      emi: '2 Easy EMIs of ₹7,999',
      originalFee: '₹22,000',
      discount: '31% OFF',
      duration: '3 Months (Live Ad Budget)',
      mode: 'Hybrid (HYD & Online)',
      category: '3. IT Courses',
      highlights: ['SEO, Google Ads, Meta Ads & Analytics', 'Live Campaign Budgeting', 'Google & Meta Certification Prep'],
      icon: Globe
    }
  ],

  // 4. Other Domains (Non-IT)
  otherDomains: [
    { id: 'nonit-aml', title: 'Anti Money laundering (AML) & Know Your customer (KYC) Process', fee: '₹9,999', originalFee: '₹13,500', duration: '45 Days', category: '4. Other Domains (Non-IT)', icon: ShieldAlert },
    { id: 'nonit-email-chat', title: 'Email and chat support process', fee: '₹6,999', originalFee: '₹9,500', duration: '30 Days', category: '4. Other Domains (Non-IT)', icon: Headphones },
    { id: 'nonit-content-mod', title: 'Content moderation process', fee: '₹6,999', originalFee: '₹9,500', duration: '30 Days', category: '4. Other Domains (Non-IT)', icon: CheckSquare },
    { id: 'nonit-mapping', title: 'Mapping process', fee: '₹7,499', originalFee: '₹10,000', duration: '30 Days', category: '4. Other Domains (Non-IT)', icon: Compass }
  ],

  // 5. Basic Courses
  basicCourses: [
    { id: 'basic-msoffice', title: 'Ms. Office', fee: '₹2,999', originalFee: '₹4,500', duration: '30 Days', category: '5. Basic Courses', icon: Laptop },
    { id: 'basic-excel', title: 'Advanced Excel', fee: '₹3,999', originalFee: '₹6,000', duration: '30 Days', category: '5. Basic Courses', icon: FileSpreadsheet },
    { id: 'basic-tally', title: 'Tally ERP / Prime', fee: '₹4,999', originalFee: '₹7,500', duration: '45 Days', category: '5. Basic Courses', icon: Calculator },
    { id: 'basic-dca', title: 'DCA (Diploma in Computer Apps)', fee: '₹5,999', originalFee: '₹8,500', duration: '3 Months', category: '5. Basic Courses', icon: Cpu },
    { id: 'basic-adca', title: 'ADCA (Adv. Diploma in Computer Apps)', fee: '₹8,999', originalFee: '₹12,500', duration: '6 Months', category: '5. Basic Courses', icon: Layers },
    { id: 'basic-pgdca', title: 'PGDCA (Post Grad. Diploma)', fee: '₹11,999', originalFee: '₹16,000', duration: '1 Year', category: '5. Basic Courses', icon: GraduationCap },
    { id: 'basic-hardware', title: 'Hardware and Networking', fee: '₹7,999', originalFee: '₹11,000', duration: '3 Months', category: '5. Basic Courses', icon: HardDrive }
  ]
};

export const corporateTraining = {
  it: corporateTrainingData.itDomain,
  nonIt: [
    ...corporateTrainingData.financeDomain,
    ...corporateTrainingData.hrDomain
  ]
};

export const whyChooseUsItems = [
  { icon: Users, title: 'Experienced HYD Faculty', description: 'Qualified educators with 10+ years of teaching experience.' },
  { icon: UserCheck, title: '1-on-1 Personalized Attention', description: 'Small batch sizes & dedicated doubt clearing sessions.' },
  { icon: CheckCircle, title: 'Affordable Hyderabad Fees', description: 'Transparent pricing with flexible monthly & EMI options.' }
];

export const trainingToOpportunityProcess = [
  { step: '01', title: 'Select Course & Plan', description: 'Choose your stream and preferred tuition schedule.' },
  { step: '02', title: 'Interactive Learning', description: 'Attend live classroom or online interactive sessions.' },
  { step: '03', title: 'Exams & Certification', description: 'Regular assessments, mock tests, and completion certificates.' }
];

export const counsellingFeatures = [
  { title: 'Free Academic Guidance', description: 'Expert advice on selecting the right stream and career path.' },
  { title: 'Transparent Fee Breakdown', description: 'Clear pricing for monthly, annual, and per-subject plans.' }
];

export const allServices = [
  { id: 1, icon: BookOpen, title: 'Tuitions For Intermediate', fee: 'Starting ₹12,000/yr', description: 'M.P.C, BiPC, MEC, CEC, AEC' },
  { id: 2, icon: GraduationCap, title: 'Tuitions For Graduation', fee: 'Starting ₹12,000/sem', description: 'B.Com (All 13 subjects @ ₹1,500/sub), BBA' },
  { id: 3, icon: Award, title: 'Tuitions For Masters', fee: 'Starting ₹16,000/sem', description: 'M.Com, MBA' },
  { id: 4, icon: DollarSign, title: 'Corporate Trainings - Finance', fee: 'Starting ₹8,500', description: 'Basic accounting, R2R, P2P, O2C, Indian & Saudi payroll' },
  { id: 5, icon: Users, title: 'Corporate Trainings - HR', fee: 'Starting ₹9,500', description: 'Talent Acquisition, HR Operations, Professional HR' },
  { id: 6, icon: Code, title: '3. IT Courses', fee: 'Starting ₹14,999', description: 'Full Stack Development, Digital Marketing' },
  { id: 7, icon: ShieldAlert, title: '4. Other Domains (Non-IT)', fee: 'Starting ₹6,999', description: 'AML & KYC, Email/Chat Support, Content Moderation' },
  { id: 8, icon: Laptop, title: '5. Basic Courses', fee: 'Starting ₹2,999', description: 'MS Office, Advanced Excel, Tally ERP, DCA, ADCA, PGDCA' }
];

export const placementHighlights = [
  { title: 'Tuitions For Intermediate', description: 'M.P.C, BiPC, MEC, CEC, AEC — Fees starting at ₹12,000/yr' },
  { title: 'Tuitions For Graduation', description: 'B.Com (13 core subjects @ ₹1,500/sub), BBA — Fees starting at ₹12,000/sem' },
  { title: 'Tuitions For Masters', description: 'M.Com, MBA — Fees starting at ₹16,000/sem' },
  { title: 'Corporate & IT Courses', description: 'Finance, HR, Full Stack, Digital Marketing, Basic Courses' }
];

export const aboutStats = [
  { value: '5', label: 'Intermediate Streams' },
  { value: '2', label: 'Graduation Degrees (B.Com, BBA)' },
  { value: '2', label: 'Masters Programs (M.Com, MBA)' },
  { value: '7', label: 'Basic Computer Courses' }
];

export const testimonials = [
  { id: 1, name: 'Rahul Sharma', role: 'Intermediate MPC Student', content: 'The maths and physics tuitions helped me score 95% in my board exams! Transparent monthly fee structure was very helpful.' },
  { id: 2, name: 'Priya Reddy', role: 'B.Com 2nd Year Student', content: 'Studied Advanced Accounting and Costing here. Clear explanations and very affordable per-subject fees.' }
];

export const faqList = [
  {
    question: 'What are the tuition fees for Intermediate courses in Hyderabad?',
    answer: 'Intermediate tuition fees range from ₹12,000 to ₹16,000 per academic year (or ₹2,200 - ₹2,800 per month) depending on the stream (MPC, BiPC, MEC, CEC, AEC).'
  },
  {
    question: 'Can I pay per subject for B.Com tuitions?',
    answer: 'Yes! You can enroll per subject at ₹1,500 per subject or choose the full semester package for ₹12,000 covering all 13 core subjects.'
  },
  {
    question: 'Are installment or EMI options available for IT and Corporate courses?',
    answer: 'Yes, we offer easy 2 to 3 monthly installment plans for courses like Full Stack Development (₹8,999/mo) and Digital Marketing (₹7,999/mo).'
  },
  {
    question: 'What mode of classes are offered?',
    answer: 'We offer both in-person Hyderabad campus classroom sessions and interactive live online classes with recorded session access.'
  }
];
