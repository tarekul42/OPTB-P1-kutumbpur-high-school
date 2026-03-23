import { Student, SubjectResult, AttendanceData, Notice, Assignment, Schedule } from '../types/user';

export const studentProfile: Student = {
  id: "KHS-2024-0042",
  name: "Fatema Akter",
  class: "Class 9",
  section: "A",
  roll_no: 15,
  photo:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  email: "fatema.akter@student.kutumbpur.edu.bd",
  phone: "+880 17XX-XXXXXX",
  fatherName: "Abul Kalam",
  motherName: "Rashida Begum",
  address: "Village: Kutumbpur, Upazila: Burichang, District: Cumilla",
  dateOfBirth: "2008-08-15",
  bloodGroup: "A+",
  admissionYear: 2022,
};

export const academicResults: SubjectResult[] = [
  { subject: "Bangla", firstTerm: 85, secondTerm: 88, final: null, total: 173 },
  { subject: "English", firstTerm: 78, secondTerm: 82, final: null, total: 160 },
  { subject: "Mathematics", firstTerm: 92, secondTerm: 89, final: null, total: 181 },
  { subject: "General Science", firstTerm: 88, secondTerm: 91, final: null, total: 179 },
  { subject: "Social Studies", firstTerm: 82, secondTerm: 85, final: null, total: 167 },
  { subject: "Religion", firstTerm: 90, secondTerm: 92, final: null, total: 182 },
  { subject: "ICT", firstTerm: 95, secondTerm: 94, final: null, total: 189 },
];

export const attendanceData: AttendanceData = {
  totalDays: 90,
  present: 87,
  absent: 3,
  late: 2,
  percentage: 96.7,
};

export const noticeBoard: Notice[] = [
  {
    id: 1,
    title: "SSC Model Test Schedule",
    date: "2026-03-20",
    priority: "high",
    content: "Model tests will begin from April 1st. Please prepare accordingly.",
  },
  {
    id: 2,
    title: "Science Fair Registration",
    date: "2026-03-22",
    priority: "medium",
    content: "Interested students can register for the annual science fair by March 25.",
  },
  {
    id: 3,
    title: "Book Fair Notice",
    date: "2026-03-18",
    priority: "low",
    content: "A book fair will be organized in the school premises on March 28-30.",
  },
];

export const initialAssignments: Assignment[] = [
  {
    id: 1,
    subject: "Mathematics",
    title: "Chapter 5 - Algebraic Expressions",
    description: "Solve problems 1-15 from Exercise 5.2",
    dueDate: "2026-03-25",
    status: "Pending",
    submittedDate: null,
  },
  {
    id: 2,
    subject: "English",
    title: "Essay Writing - My School",
    description: "Write a 500-word essay on 'My School' with proper formatting",
    dueDate: "2026-03-24",
    status: "Pending",
    submittedDate: null,
  },
  {
    id: 3,
    subject: "Bangla",
    title: "Grammar Exercise - Samas",
    description: "Complete the Samas worksheet provided in class",
    dueDate: "2026-03-26",
    status: "Submitted",
    submittedDate: "2026-03-23",
  },
  {
    id: 4,
    subject: "General Science",
    title: "Lab Report - Photosynthesis Experiment",
    description: "Submit the lab report for the photosynthesis experiment conducted on March 20",
    dueDate: "2026-03-28",
    status: "Pending",
    submittedDate: null,
  },
  {
    id: 5,
    subject: "Social Studies",
    title: "Map Work - Bangladesh Rivers",
    description: "Label all major rivers of Bangladesh on the provided map",
    dueDate: "2026-03-22",
    status: "Submitted",
    submittedDate: "2026-03-21",
  },
];

export const scheduleData: Schedule[] = [
  {
    day: "Saturday",
    classes: [
      { time: "8:00 - 9:00", subject: "Bangla", teacher: "Mrs. Rahman", room: "301" },
      { time: "9:00 - 10:00", subject: "Mathematics", teacher: "Mr. Islam", room: "302" },
      { time: "10:15 - 11:15", subject: "English", teacher: "Mrs. Akter", room: "303" },
      { time: "11:15 - 12:15", subject: "General Science", teacher: "Mr. Haque", room: "304" },
      { time: "1:00 - 2:00", subject: "Social Studies", teacher: "Mrs. Begum", room: "305" },
    ],
  },
  {
    day: "Sunday",
    classes: [
      { time: "8:00 - 9:00", subject: "Mathematics", teacher: "Mr. Islam", room: "302" },
      { time: "9:00 - 10:00", subject: "English", teacher: "Mrs. Akter", room: "303" },
      { time: "10:15 - 11:15", subject: "Bangla", teacher: "Mrs. Rahman", room: "301" },
      { time: "11:15 - 12:15", subject: "Religion", teacher: "Maulana Ahmed", room: "306" },
      { time: "1:00 - 2:00", subject: "Physical Education", teacher: "Mr. Khan", room: "Ground" },
    ],
  },
  {
    day: "Monday",
    classes: [
      { time: "8:00 - 9:00", subject: "English", teacher: "Mrs. Akter", room: "303" },
      { time: "9:00 - 10:00", subject: "General Science", teacher: "Mr. Haque", room: "304" },
      { time: "10:15 - 11:15", subject: "Mathematics", teacher: "Mr. Islam", room: "302" },
      { time: "11:15 - 12:15", subject: "Bangla", teacher: "Mrs. Rahman", room: "301" },
      { time: "1:00 - 2:00", subject: "Art & Craft", teacher: "Mrs. Sultana", room: "307" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "8:00 - 9:00", subject: "Social Studies", teacher: "Mrs. Begum", room: "305" },
      { time: "9:00 - 10:00", subject: "Bangla", teacher: "Mrs. Rahman", room: "301" },
      { time: "10:15 - 11:15", subject: "General Science", teacher: "Mr. Haque", room: "304" },
      { time: "11:15 - 12:15", subject: "English", teacher: "Mrs. Akter", room: "303" },
      { time: "1:00 - 2:00", subject: "Mathematics", teacher: "Mr. Islam", room: "302" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "8:00 - 9:00", subject: "General Science", teacher: "Mr. Haque", room: "304" },
      { time: "9:00 - 10:00", subject: "Religion", teacher: "Maulana Ahmed", room: "306" },
      { time: "10:15 - 11:15", subject: "Social Studies", teacher: "Mrs. Begum", room: "305" },
      { time: "11:15 - 12:15", subject: "Mathematics", teacher: "Mr. Islam", room: "302" },
      { time: "1:00 - 2:00", subject: "English", teacher: "Mrs. Akter", room: "303" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "8:00 - 9:00", subject: "Mathematics", teacher: "Mr. Islam", room: "302" },
      { time: "9:00 - 10:00", subject: "Bangla", teacher: "Mrs. Rahman", room: "301" },
      { time: "10:15 - 11:15", subject: "ICT", teacher: "Mr. Ali", room: "Lab 1" },
      { time: "11:15 - 12:15", subject: "General Science", teacher: "Mr. Haque", room: "304" },
      { time: "1:00 - 2:00", subject: "Social Studies", teacher: "Mrs. Begum", room: "305" },
    ],
  },
];

export const subjects: string[] = [
  "Bangla", "English", "Mathematics", "General Science",
  "Social Studies", "Religion", "ICT", "Physical Education", "Art & Craft",
];
