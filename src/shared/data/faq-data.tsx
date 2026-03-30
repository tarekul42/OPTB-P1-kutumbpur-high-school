import type { ReactNode } from "react";

export interface FAQ {
  question: string;
  answer: string;
  icon: string | ReactNode;
}

export const faqs: FAQ[] = [
  {
    question: "What are the school timings?",
    answer: "The school is open from Sunday to Thursday, 10:00 AM to 4:00 PM. Friday and Saturday are weekly holidays.",
    icon: "⏰",
  },
  {
    question: "What is the admission procedure?",
    answer: "Admissions are open for Classes 6 to 9. The process involves an admission test and an interview. Required documents include the Birth Certificate, previous school Transfer Certificate (TC), and academic transcripts.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  },
  {
    question: "What facilities are provided?",
    answer: "Kutumbpur High School offers modern facilities including multi-media classrooms, computer labs, a science lab, a library, and a large playground for sports and extracurricular activities.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  },
  {
    question: "What is the fee structure?",
    answer: "The fee structure varies by class level. It includes tuition fees, development fees, and other charges. We offer various payment options and scholarships for meritorious students.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    question: "What extracurricular activities are available?",
    answer: "We offer a wide range of extracurricular activities including sports (cricket, football, basketball, athletics), arts (music, dance, drama), clubs (science, math, literature), and community service programs.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /></svg>,
  },
  {
    question: "How does the school ensure student safety?",
    answer: "Student safety is our top priority. We have CCTV surveillance, security personnel, strict entry/exit protocols, and regular safety drills. Our transportation system is GPS-enabled with trained drivers.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
];
