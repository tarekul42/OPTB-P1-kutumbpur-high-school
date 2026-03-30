import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(3).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^01[1-9]\d{8}$/),
  subject: z.string().min(1),
  message: z.string().min(10).max(2000),
});

export const admissionFormSchema = z.object({
  studentName: z.string().min(3).max(100),
  guardianName: z.string().min(3).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^01[1-9]\d{8}$/),
  applyingForClass: z.string().min(1),
  previousSchool: z.string().min(3).max(200),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type AdmissionFormData = z.infer<typeof admissionFormSchema>;

export const subjectOptions = [
  { value: "", label: "Select a subject" },
  { value: "admission", label: "Admission Inquiry" },
  { value: "academics", label: "Academic Programs" },
  { value: "fees", label: "Fee Structure" },
  { value: "results", label: "Results & Grades" },
  { value: "attendance", label: "Attendance Issues" },
  { value: "facilities", label: "School Facilities" },
  { value: "transport", label: "Transportation" },
  { value: "events", label: "Events & Activities" },
  { value: "complaint", label: "Complaint/Feedback" },
  { value: "other", label: "Other" },
];

export const classOptions = [
  { value: "", label: "Select a class" },
  { value: "class-6", label: "Class 6" },
  { value: "class-7", label: "Class 7" },
  { value: "class-8", label: "Class 8" },
  { value: "class-9", label: "Class 9" },
  { value: "class-10", label: "Class 10" },
];
