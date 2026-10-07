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

// 1. Tuitions For Intermediate
export const intermediateCourses = [
  {
    id: 'inter-mpc',
    category: 'Tuitions For Intermediate',
    title: 'MPC (Maths Physics, Chemistry)',
    icon: Calculator
  },
  {
    id: 'inter-bipc',
    category: 'Tuitions For Intermediate',
    title: 'BiPC (Botany, Zoology, Physics, Chemistry)',
    icon: Sparkles
  },
  {
    id: 'inter-cec',
    category: 'Tuitions For Intermediate',
    title: 'CEC (Civics, Economics, Commerce)',
    icon: BarChart
  },
  {
    id: 'inter-mec',
    category: 'Tuitions For Intermediate',
    title: 'MEC (Maths, Economics, Commerce)',
    icon: TrendingUp
  },
  {
    id: 'inter-aec',
    category: 'Tuitions For Intermediate',
    title: 'AEC (Accounts, Economics, Commerce)',
    icon: FileText
  }
];

// Tuitions For B. Com
export const bcomSubjects = [
  { id: 'fa1', title: 'Financial Accounting-1', icon: FileText },
  { id: 'be', title: 'Business Economics', icon: TrendingUp },
  { id: 'bom', title: 'Business Organization and Management', icon: Building },
  { id: 'fa2', title: 'Financial Accounting – 2', icon: FileText },
  { id: 'bl', title: 'Business Law', icon: ShieldCheck },
  { id: 'aa', title: 'Advanced Accounting', icon: Calculator },
  { id: 'bs1', title: 'Business Statistics - 1', icon: BarChart },
  { id: 'ca', title: 'Corporate Accounting', icon: Building },
  { id: 'bs2', title: 'Business Statistics - 2', icon: BarChart },
  { id: 'wt', title: 'Web Technologies', icon: Code },
  { id: 'costing', title: 'Cost Accounting', icon: DollarSign },
  { id: 'comp-acc', title: 'Computerized Accounting', icon: Laptop },
  { id: 'mac', title: 'Management Accounting and Control', icon: Award }
];

export const academicCourses = [
  ...intermediateCourses,
  ...bcomSubjects
];

// 2. Corporate Trainings (Non-IT)
export const corporateTrainingData = {
  // Finance Domain
  financeDomain: [
    { id: 'fin-basic', title: 'Basic accounting with real time exposure', category: 'Finance Domain', icon: Calculator },
    { id: 'fin-r2r', title: 'Record to report process (R2R)', category: 'Finance Domain', icon: FileText },
    { id: 'fin-p2p', title: 'Procure to pay process (P2P)', category: 'Finance Domain', icon: DollarSign },
    { id: 'fin-o2c', title: 'Order to Cash process (O2C)', category: 'Finance Domain', icon: TrendingUp },
    { id: 'fin-payroll-acc', title: 'Indian payroll accounting', category: 'Finance Domain', icon: Briefcase },
    { id: 'fin-payroll-proc', title: 'Indian payroll processing', category: 'Finance Domain', icon: Briefcase },
    { id: 'fin-saudi-acc', title: 'Saudi accounting', category: 'Finance Domain', icon: Globe },
    { id: 'fin-saudi-payroll', title: 'Saudi payroll accounting', category: 'Finance Domain', icon: Globe }
  ],

  // Human Resource Domain
  hrDomain: [
    { id: 'hr-talent', title: 'Talent Acquisition & Recruitment Excellence Program', category: 'Human Resource Domain', icon: UserCheck },
    { id: 'hr-ops', title: 'HR Operations & Employee Lifecycle Excellence Program', category: 'Human Resource Domain', icon: Users },
    { id: 'hr-admin', title: 'HR Administration & Workplace Management Program', category: 'Human Resource Domain', icon: Building },
    { id: 'hr-pro', title: 'Professional Human Resource Management Program', category: 'Human Resource Domain', icon: Award }
  ],

  // 3. IT Courses
  itDomain: [
    { id: 'it-fullstack', title: 'Full Stack Development', category: '3. IT Courses', icon: Code },
    { id: 'it-digital-marketing', title: 'Digital Marketing', category: '3. IT Courses', icon: Globe }
  ],

  // 4. Other Domains (Non-IT)
  otherDomains: [
    { id: 'nonit-aml', title: 'Anti Money laundering (AML) & Know Your customer (KYC) Process', category: '4. Other Domains (Non-IT)', icon: ShieldAlert },
    { id: 'nonit-email-chat', title: 'Email and chat support process', category: '4. Other Domains (Non-IT)', icon: Headphones },
    { id: 'nonit-content-mod', title: 'Content moderation process', category: '4. Other Domains (Non-IT)', icon: CheckSquare },
    { id: 'nonit-mapping', title: 'Mapping process', category: '4. Other Domains (Non-IT)', icon: Compass }
  ],

  // 5. Basic Courses
  basicCourses: [
    { id: 'basic-msoffice', title: 'Ms. Office', category: '5. Basic Courses', icon: Laptop },
    { id: 'basic-excel', title: 'Advanced Excel', category: '5. Basic Courses', icon: FileSpreadsheet },
    { id: 'basic-tally', title: 'Tally ERP', category: '5. Basic Courses', icon: Calculator },
    { id: 'basic-dca', title: 'DCA', category: '5. Basic Courses', icon: Cpu },
    { id: 'basic-adca', title: 'ADCA', category: '5. Basic Courses', icon: Layers },
    { id: 'basic-pgdca', title: 'PGDCA', category: '5. Basic Courses', icon: GraduationCap },
    { id: 'basic-hardware', title: 'Hardware and Networking', category: '5. Basic Courses', icon: HardDrive }
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
  { icon: Users, title: 'Experienced Faculty', description: 'Qualified educators dedicated to student success.' },
  { icon: UserCheck, title: 'Individual Attention', description: 'Focused learning environment for every student.' },
  { icon: CheckCircle, title: 'Quality Coaching', description: 'Structured teaching methodology aligned with curriculum.' }
];

export const trainingToOpportunityProcess = [
  { step: '01', title: 'Structured Coaching', description: 'Comprehensive subject and domain coaching.' },
  { step: '02', title: 'Practical Understanding', description: 'Clear understanding of core concepts and topics.' },
  { step: '03', title: 'Assessment & Feedback', description: 'Regular evaluation to monitor progress.' }
];

export const counsellingFeatures = [
  { title: 'Academic Guidance', description: 'Help in selecting appropriate course streams.' },
  { title: 'Course Information', description: 'Detailed guidance on course offerings.' }
];

export const allServices = [
  { id: 1, icon: BookOpen, title: 'Tuitions For Intermediate', description: 'MPC, BiPC, CEC, MEC, AEC' },
  { id: 2, icon: GraduationCap, title: 'Tuitions For B. Com', description: 'All 13 subjects of B.Com' },
  { id: 3, icon: DollarSign, title: 'Corporate Trainings (Non-IT) - Finance Domain', description: 'Basic accounting, R2R, P2P, O2C, Indian & Saudi payroll, Saudi accounting' },
  { id: 4, icon: Users, title: 'Corporate Trainings (Non-IT) - Human Resource Domain', description: 'Talent Acquisition, HR Operations, HR Administration, Professional HR Management' },
  { id: 5, icon: Code, title: '3. IT Courses', description: 'Full Stack Development, Digital Marketing' },
  { id: 6, icon: ShieldAlert, title: '4. Other Domains (Non-IT)', description: 'AML & KYC Process, Email and chat support process, Content moderation process, Mapping process' },
  { id: 7, icon: Laptop, title: '5. Basic Courses', description: 'Ms. Office, Advanced Excel, Tally ERP, DCA, ADCA, PGDCA, Hardware and Networking' }
];

export const placementHighlights = [
  { title: 'Tuitions For Intermediate', description: 'MPC, BiPC, CEC, MEC, AEC' },
  { title: 'Tuitions For B. Com', description: '13 core B.Com subjects' },
  { title: '2. Corporate Trainings (Non-IT)', description: 'Finance Domain & Human Resource Domain' },
  { title: '3. IT Courses', description: 'Full Stack Development, Digital Marketing' },
  { title: '4. Other Domains (Non-IT)', description: 'AML & KYC, Email & Chat Support, Content Moderation, Mapping' },
  { title: '5. Basic Courses', description: 'Ms. Office, Advanced Excel, Tally ERP, DCA, ADCA, PGDCA, Hardware and Networking' }
];

export const aboutStats = [
  { value: '5', label: 'Intermediate Streams' },
  { value: '13', label: 'B.Com Subjects' },
  { value: '2', label: 'Corporate Domains (Non-IT)' },
  { value: '7', label: 'Basic Courses' }
];

export const testimonials = [
  { id: 1, name: 'Student Feedback', role: 'Intermediate Student', content: 'Excellent tuition for MPC, BiPC, CEC, MEC, and AEC subjects.' },
  { id: 2, name: 'Degree Student', role: 'B.Com Student', content: 'Thorough coverage of all 13 B.Com subjects.' }
];

export const faqList = [
  {
    question: 'What courses are offered for Intermediate?',
    answer: 'Tuitions For Intermediate includes: MPC (Maths Physics, Chemistry), BiPC (Botany, Zoology, Physics, Chemistry), CEC (Civics, Economics, Commerce), MEC (Maths, Economics, Commerce), and AEC (Accounts, Economics, Commerce).'
  },
  {
    question: 'What subjects are included in Tuitions For B. Com?',
    answer: 'Tuitions For B. Com covers: Financial Accounting-1, Business Economics, Business Organization and Management, Financial Accounting – 2, Business Law, Advanced Accounting, Business Statistics - 1, Corporate Accounting, Business Statistics - 2, Web Technologies, Cost Accounting, Computerized Accounting, and Management Accounting and Control.'
  },
  {
    question: 'What programs are under 2. Corporate Trainings (Non-IT)?',
    answer: 'Finance Domain: Basic accounting with real time exposure, Record to report process (R2R), Procure to pay process (P2P), Order to Cash process (O2C), Indian payroll accounting, Indian payroll processing, Saudi accounting, Saudi payroll accounting. Human Resource Domain: Talent Acquisition & Recruitment Excellence Program, HR Operations & Employee Lifecycle Excellence Program, HR Administration & Workplace Management Program, Professional Human Resource Management Program.'
  },
  {
    question: 'What courses are offered under 3. IT Courses?',
    answer: '3. IT Courses includes: Full Stack Development and Digital Marketing.'
  },
  {
    question: 'What processes are covered under 4. Other Domains (Non-IT)?',
    answer: '4. Other Domains (Non-IT) includes: Anti Money laundering (AML) & Know Your customer (KYC) Process, Email and chat support process, Content moderation process, and Mapping process.'
  },
  {
    question: 'What courses are included in 5. Basic Courses?',
    answer: '5. Basic Courses includes: Ms. Office, Advanced Excel, Tally ERP, DCA, ADCA, PGDCA, and Hardware and Networking.'
  }
];
