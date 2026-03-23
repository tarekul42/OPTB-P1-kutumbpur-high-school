export interface Student {
  id: string;
  name: string;
  class: string;
  section: string;
  roll_no: number;
  photo: string;
  email: string;
  phone: string;
  fatherName: string;
  motherName: string;
  address: string;
  dateOfBirth: string;
  bloodGroup: string;
  admissionYear: number;
}

export interface SubjectResult {
  subject: string;
  firstTerm: number;
  secondTerm: number;
  final: number | null;
  total: number;
}

export interface AttendanceData {
  totalDays: number;
  present: number;
  absent: number;
  late: number;
  percentage: number;
}

export interface Notice {
  id: number;
  title: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
  content: string;
}

export interface Assignment {
  id: number;
  subject: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'Pending' | 'Submitted';
  submittedDate: string | null;
}

export interface Schedule {
  day: string;
  classes: ClassSchedule[];
}

export interface ClassSchedule {
  time: string;
  subject: string;
  teacher: string;
  room: string;
}

export interface Subject {
  name: string;
  teacher: string;
  email: string;
}

export interface Child {
  id: number;
  name: string;
  class: string;
  section: string;
  roll_no: number;
  photo: string;
  studentId: string;
  dateOfBirth: string;
  bloodGroup: string;
  classTeacher: string;
  subjects: Subject[];
  attendance: {
    totalDays: number;
    present: number;
    absent: number;
    late: number;
    percentage: number;
    records: AttendanceRecord[];
  };
  results: { subject: string; firstTerm: number; secondTerm: number }[];
}

export interface AttendanceRecord {
  date: string;
  status: 'Present' | 'Absent' | 'Late' | 'Leave';
}

export interface ParentProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  occupation: string;
  address: string;
}

export interface QuarterlyFee {
  id: string;
  childId: number;
  year: number;
  quarter: string;
  months: string;
  dueDate: string;
  dueAmount: number;
  paidAmount: number;
  status: 'Paid' | 'Overdue' | 'Due';
  paidDate: string | null;
  receiptId: string | null;
}

export interface MonthlyFee {
  id: string;
  childId: number;
  year: number;
  month: number;
  monthName: string;
  dueDate: string;
  amount: number;
  status: 'Paid' | 'Due' | 'Overdue';
  paidDate: string | null;
}

export interface FeeSummary {
  totalAnnual: number;
  paid: number;
  pending: number;
}

export interface ChildFees {
  quarterly: QuarterlyFee[];
  monthly: MonthlyFee[];
  summary: FeeSummary;
}
