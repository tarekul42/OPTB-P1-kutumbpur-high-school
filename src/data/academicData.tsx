import { Program } from '../types/common';

export interface ExtracurricularActivity {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const extracurricularActivities: ExtracurricularActivity[] = [
  {
    title: "Sports & Athletics",
    description: "Cricket, football, basketball, volleyball, athletics, and indoor games for physical fitness and team spirit.",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: "Music & Dance",
    description: "Classical and modern music, dance forms, and cultural performances for artistic expression.",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>,
  },
  {
    title: "Science Club",
    description: "Experiments, robotics, astronomy, and innovative projects for curious minds.",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  },
  {
    title: "Literary Club",
    description: "Debate, elocution, creative writing, poetry, and drama for language skills.",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  },
  {
    title: "Art & Craft",
    description: "Painting, sketching, pottery, and手工艺术 for creative development.",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
  },
  {
    title: "Community Service",
    description: "Social welfare activities, environmental initiatives, and volunteering programs.",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  },
];

export interface StudyMaterial {
  title: string;
  description: string;
  icon: React.ReactNode;
  resources: string[];
}

export const studyMaterials: StudyMaterial[] = [
  {
    title: "Bangla",
    description: "Comprehensive Bangla language and literature materials for PSC, JSC, and SSC preparation.",
    icon: <span className="text-2xl">📖</span>,
    resources: ["Grammar Guide", "Literature Notes", "Board Questions"],
  },
  {
    title: "English",
    description: "English language skills, grammar, and literature resources for all boards.",
    icon: <span className="text-2xl">📚</span>,
    resources: ["Grammar Handbook", "Comprehension Practice", "Writing Tips"],
  },
  {
    title: "Mathematics",
    description: "Mathematics concepts, formulas, and problem-solving techniques for board exams.",
    icon: <span className="text-2xl">📐</span>,
    resources: ["Formula Sheet", "Solved Examples", "Practice Papers"],
  },
];

export interface AdmissionStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const admissionSteps: AdmissionStep[] = [
  { title: "Online Inquiry", description: "Fill out the online interest form or visit our campus office.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
  { title: "Admission Test", description: "Scheduled assessment for class placement and eligibility.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg> },
  { title: "Interview", description: "Personal interaction with the student and parents.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
  { title: "Final Registration", description: "Submission of documents and fee payment to secure the seat.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
];

export const admissionsRequiredDocuments: string[] = [
  "Birth Certificate",
  "Previous School Transfer Certificate (TC)",
  "Academic transcripts from previous school",
  "Character Certificate",
  "4 Passport-size photographs",
  "Guardian's NID copy",
  "Medical fitness certificate",
];

export const academicPrograms: Program[] = [
  {
    title: "Junior Secondary (Class 6-8)",
    description: "A strong foundation focusing on core subjects like Bangla, English, Mathematics, and General Science.",
    features: ["Digital classroom integration", "Focused Bangla and English literacy", "Conceptual Mathematics & Science"],
    icon: "📖", color: "from-primary-700 to-primary-900",
  },
  {
    title: "Secondary (Class 9-10)",
    description: "Specialized education in Science, Humanities, and Commerce streams.",
    features: ["Stream-based specialized subjects", "Intensive SSC board exam preparation", "Practical Laboratory experiments"],
    icon: "🎓", color: "from-primary-800 to-primary-950",
  },
  {
    title: "SSC Board Excellence",
    description: "Dedicated monitoring and extra support for Class 10 students.",
    features: ["Board question paper analysis", "Subject-wise specialized coaching", "Mock board examinations"],
    icon: "🏆", color: "from-accent-gold to-primary-900",
  },
];
