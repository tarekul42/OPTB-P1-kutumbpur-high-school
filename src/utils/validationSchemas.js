import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^01[1-9]\d{8}$/,
      "Please enter a valid Bangladeshi mobile number (e.g., 01712345678)",
    ),
  subject: z.string().min(1, "Please select a subject"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

export const admissionFormSchema = z.object({
  studentName: z
    .string()
    .min(3, "Student name must be at least 3 characters")
    .max(100, "Student name must be less than 100 characters"),
  guardianName: z
    .string()
    .min(3, "Guardian name must be at least 3 characters")
    .max(100, "Guardian name must be less than 100 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^01[1-9]\d{8}$/,
      "Please enter a valid Bangladeshi mobile number (e.g., 01712345678)",
    ),
  applyingForClass: z.string().min(1, "Please select a class"),
  previousSchool: z
    .string()
    .min(3, "Previous school name must be at least 3 characters")
    .max(200, "Previous school name must be less than 200 characters"),
});

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
