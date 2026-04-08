# COMPLETE PROJECT IMPLEMENTATION PROMPT

## FOR: OPTB-P1 — Kutumbpur High School

> **This prompt is fully self-contained.** The AI agent needs NOTHING else to implement all remaining features. Every component API, type definition, data pattern, and code convention is included below.

---

# PART 1: ROLE & PROJECT CONTEXT

You are a Senior Frontend Engineer tasked with implementing all remaining features for a frontend-only school management system called "OPTB-P1 — Kutumbpur High School" located in Chandina, Cumilla, Bangladesh.

## Repository
https://github.com/tarekul42/OPTB-P1-kutumbpur-high-school

Clone it, install dependencies with `bun`, run `bun dev` to start. Understand every file before writing code.

## Tech Stack
- **Runtime:** Bun
- **Framework:** React 19.2.4
- **Language:** TypeScript 6.0.2
- **Build:** Vite 7.3.2
- **Styling:** Tailwind CSS 4.2.2 (with `clsx` + `tailwind-merge`)
- **Routing:** React Router DOM 7.14.0 (lazy loading via `React.lazy`)
- **Charts:** Recharts 3.8.1
- **Forms:** React Hook Form 7.72.1 + Zod 4.3.6
- **Calendar:** react-calendar 6.0.0
- **PDF:** jsPDF 4.2.1
- **Date:** date-fns 4.1.0
- **Toast:** react-hot-toast 2.6.0
- **Icons:** Custom SVG components (no icon library)

## Current Progress: ~82% Complete
- ✅ Public website (14 pages) — 95% done
- ✅ Student Portal (5 pages) — 100% done
- ✅ Parent Portal (5 pages) — ~95% done (one typo bug)
- ❌ Faculty Portal — 5% done (login stub only, no dashboard/sub-pages)
- ✅ Design system (23 shared UI components) — 100% done
- ✅ Data layer (9 data files, 51 TypeScript interfaces) — 100% done

## What This Prompt Covers
Everything needed to build the remaining ~18%:
1. Faculty Portal (Dashboard, My Classes, Grade Entry, Attendance, Assignments)
2. Public Notice Board page
3. Staff Directory page
4. Photo Gallery page
5. Public Exam Results page
6. Notification UI (bell dropdown + notifications page)
7. Testimonial submission form
8. Bug fixes (3 existing bugs)
9. Portals hub page fix

---

# PART 2: BUGS TO FIX FIRST

Before building anything new, fix these 3 bugs in the existing codebase:

## Bug 1: Messages.tsx Typo
**File:** `src/features/parent-portal/ParentPortal/Messages/Messages.tsx`
**Issue:** `const essageForm` — missing 'm' prefix. The setter `setMessageForm` won't match.
**Fix:** Change `const essageForm` to `const messageForm`

## Bug 2: Portals Hub Dead Buttons
**File:** `src/features/portals/Portals/Portals.tsx`
**Issue:** The three "Enter Portal" buttons have no `onClick` or `to` routing — they're non-functional.
**Fix:** Wrap each button in `<Link to="...">` from react-router-dom:
- Student → `/student-portal`
- Faculty → `/faculty-portal`
- Parent → `/parent-portal`

## Bug 3: Testimonials window.alert
**File:** `src/features/home/Testimonials/Testimonials.tsx`
**Issue:** "Submit Your Testimonial" button triggers `window.alert('coming soon!')`
**Fix:** Replace with toast: `toast.success('Testimonial submission form coming soon!')` using `react-hot-toast`

---

# PART 3: COMPLETE DESIGN SYSTEM REFERENCE

All shared components are imported from `@/shared/ui`:
```tsx
import { Button, Badge, Card, SectionHeader, Hero, InfoBanner, StatCard, Navbar, Footer, MainLayout, PlaceholderPage, PortalEntryTemplate, PortalLandingTemplate, SearchBar, SearchModal, ScrollToTop, LoadingFallback, SEO, Dropdown, FormInput, ListItem, UpdateCard } from '@/shared/ui';
import { CheckCircleIcon, ClipboardListIcon, ClockIcon, CalendarClockIcon, CalendarCheckIcon, DocumentTextIcon, SpeakerphoneIcon, UserCircleIcon, ChartBarIcon } from '@/shared/ui';
import { PageSkeleton } from '@/shared/ui';
```

## 3.1 Button
```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}
// Usage:
<Button variant="primary" size="md" onClick={handleClick}>Submit</Button>
<Button variant="outline" size="sm" isLoading={saving}>Saving...</Button>
```

## 3.2 Badge
```tsx
type BadgeVariant = "primary" | "secondary" | "gold" | "slate" | "accent" | "accent-gold" | "dark" | "light" | "warning" | "neutral";
interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
  style?: CSSProperties;
}
// Usage:
<Badge variant="warning">High Priority</Badge>
<Badge variant="primary">Academic</Badge>
```

## 3.3 Card
```tsx
interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;       // adds hover scale + shadow effect
  border?: boolean;          // default: true
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';  // default: 'lg'
  onClick?: () => void;
}
// Usage:
<Card hoverable shadow="lg" className="p-6">
  <h3>Content</h3>
</Card>
```

## 3.4 FormInput
```tsx
export interface SelectOption { value: string; label: string; }
interface FormInputProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "select" | "textarea" | "password" | "number";
  register?: any;            // from react-hook-form's register()
  errors?: any;              // from react-hook-form's formState.errors
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  options?: SelectOption[];  // for type="select"
  rows?: number;             // for type="textarea", default: 4
  className?: string;
}
// Usage:
<FormInput label="Full Name" name="fullName" type="text" register={register} errors={errors} required placeholder="Enter name" />
<FormInput label="Class" name="class" type="select" register={register} errors={errors} options={classOptions} />
<FormInput label="Message" name="message" type="textarea" register={register} errors={errors} rows={5} />
```

## 3.5 SectionHeader
```tsx
interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';  // default: 'center'
  titleClassName?: string;
  descriptionClassName?: string;
}
// Usage:
<SectionHeader title="Our Programs" description="Choose from our comprehensive academic offerings" align="center" />
```

## 3.6 Hero
```tsx
interface HeroProps {
  title: string;
  description?: string;
  className?: string;
  accentColor?: string;  // default: 'primary-900'. Must be a static Tailwind color key.
  center?: boolean;      // default: true
  children?: ReactNode;  // content below description
}
// Usage:
<Hero title="Notice Board" description="Stay updated with school announcements" />
<Hero title="Faculty Portal" description="Manage classes, grades, and attendance" accentColor="amber-600" />
```
**⚠️ IMPORTANT:** Do NOT use dynamic Tailwind classes like `from-${color}`. Always pass full static color strings.

## 3.7 InfoBanner
```tsx
interface InfoBannerProps {
  type?: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  children: ReactNode;
  className?: string;
  onClose?: () => void;
}
// Usage:
<InfoBanner type="info" title="Heads Up">
  <p>Model tests will begin from April 1st.</p>
</InfoBanner>
```

## 3.8 StatCard
```tsx
interface StatCardProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  trend?: { value: number; isUp: boolean };  // shows % up/down indicator
  className?: string;
}
// Usage:
<StatCard label="Total Students" value={1200} icon={<UserCircleIcon className="w-7 h-7" />} />
<StatCard label="Attendance" value="96.7%" trend={{ value: 2.3, isUp: true }} />
```

## 3.9 UpdateCard
```tsx
interface UpdateCardProps {
  title: string;
  description: string;
  date?: string;
  category?: string;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}
```

## 3.10 ListItem
```tsx
interface ListItemProps {
  children: ReactNode;
  icon?: ReactNode;         // defaults to checkmark SVG
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}
// Usage:
<ListItem icon={<CheckCircleIcon className="w-5 h-5" />}>Feature description here</ListItem>
```

## 3.11 Dropdown (Navigation)
```tsx
interface MenuItem { label: string; link: string; }
interface DropdownProps {
  title: string;
  items: MenuItem[];
  isOpen: boolean;
  toggle: () => void;
}
```

## 3.12 PortalEntryTemplate
```tsx
interface PortalEntryTemplateProps {
  title: string;
  subtitle: string;
  role: 'student' | 'parent' | 'faculty';
  illustration?: ReactNode;
  children: ReactNode;
  accentColor?: string;  // default: 'primary'
}
// Creates a split-screen login page: left side has gradient + role info, right side has form (children).
// role determines gradient colors: student=blue, parent=emerald, faculty=amber
// Usage:
<PortalEntryTemplate title="Faculty Portal" subtitle="Enter your credentials" role="faculty">
  <form>...</form>
</PortalEntryTemplate>
```

## 3.13 PortalLandingTemplate
```tsx
interface PortalLandingTemplateProps {
  sidebar: ReactNode;
  header: ReactNode;
  children: ReactNode;
  isSidebarOpen?: boolean;  // default: true
}
// Creates a portal dashboard layout: collapsible sidebar (left) + header (top) + scrollable content area.
// Desktop: sidebar always visible. The sidebar width is w-72 (288px).
// Header height is h-20 (80px).
// Content area has `overflow-y-auto p-4 md:p-8` with `max-w-7xl mx-auto space-y-8`.
// Usage:
<PortalLandingTemplate sidebar={<Sidebar />} header={<Header />}>
  <Dashboard />
</PortalLandingTemplate>
```

## 3.14 PlaceholderPage
```tsx
interface PlaceholderPageProps {
  title: string;
  description?: string;       // default: "We are currently building this page..."
  showHomeButton?: boolean;   // default: true
}
```

## 3.15 Other Utilities
```tsx
// ScrollToTop — no props, place in layout, auto-scrolls on route change
// LoadingFallback — no props, shows spinner
// PageSkeleton — no props, named export, shows animated pulse skeleton
// SEO — no props, auto-sets document title/meta based on current route
// SearchModal — no props, pulls state from useApp() context
```

## 3.16 Custom Icons (all accept SVGProps<SVGSVGElement>)
```tsx
CheckCircleIcon, ClipboardListIcon, ClockIcon, CalendarClockIcon,
CalendarCheckIcon, DocumentTextIcon, SpeakerphoneIcon, UserCircleIcon, ChartBarIcon
// Usage:
<CheckCircleIcon className="w-5 h-5 text-primary-600" />
<ChartBarIcon className="w-7 h-7" />
```

## 3.17 Utility Functions
```tsx
// cn() — Tailwind class merging (from @/shared/lib/cn)
import { cn } from '@/shared/lib/cn';
cn('px-4 py-2', isActive && 'bg-primary-600', className)

// formatDate() — date-fns wrapper (from @/shared/lib/format)
import { formatDate, formatCurrency, formatOrdinal } from '@/shared/lib/format';
formatDate('2026-03-15', 'PPP')        // "March 15th, 2026"
formatCurrency(1500)                    // "৳1,500"
formatOrdinal(1)                        // "1st"
```

## 3.18 Zod Validation Pattern
```tsx
// from @/shared/lib/validationSchemas.ts
import { z } from "zod";
// existing schemas: contactFormSchema, admissionFormSchema
// existing select options: subjectOptions, classOptions (as SelectOption[])
// Pattern for new schemas:
const myFormSchema = z.object({
  fieldName: z.string().min(3).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^01[1-9]\d{8}$/),  // Bangladesh phone
});
type MyFormData = z.infer<typeof myFormSchema>;
```

## 3.19 Form Pattern (React Hook Form + Zod)
```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const MyComponent = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<MyFormData>({
    resolver: zodResolver(myFormSchema),
  });

  const onSubmit = (data: MyFormData) => {
    toast.success('Submitted successfully!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormInput label="Name" name="name" register={register} errors={errors} required />
      <Button type="submit" isLoading={false}>Submit</Button>
    </form>
  );
};
```

---

# PART 4: COMPLETE TYPE DEFINITIONS

All types are imported from `@/shared/types`:
```tsx
import type { Student, SubjectResult, AttendanceData, Notice, Assignment, Schedule, ClassSchedule, Subject, Child, AttendanceRecord, ParentProfile, QuarterlyFee, MonthlyFee, FeeSummary, ChildFees } from '@/shared/types/user';
import type { NewsItem, Testimonial, Stat, Program, Feature, FeatureItem, MenuItem, MenuConfig, SearchResult } from '@/shared/types/common';
import type { Holiday, SchoolEvent, Event, EventType, CalendarDay } from '@/shared/types/api';
```

## 4.1 Existing Types from `@/shared/types/user.ts`
```tsx
interface Student {
  id: string; name: string; class: string; section: string; roll_no: number;
  photo: string; email: string; phone: string; fatherName: string; motherName: string;
  address: string; dateOfBirth: string; bloodGroup: string; admissionYear: number;
}
interface SubjectResult { subject: string; firstTerm: number; secondTerm: number; final: number | null; total: number; }
interface AttendanceData { totalDays: number; present: number; absent: number; late: number; percentage: number; }
interface Notice { id: number; title: string; date: string; priority: 'high' | 'medium' | 'low'; content: string; }
interface Assignment { id: number; subject: string; title: string; description: string; dueDate: string; status: 'Pending' | 'Submitted'; submittedDate: string | null; }
interface Schedule { day: string; classes: ClassSchedule[]; }
interface ClassSchedule { time: string; subject: string; teacher: string; room: string; }
interface Subject { name: string; teacher: string; email: string; }
interface Child { id: number; name: string; class: string; section: string; roll_no: number; photo: string; studentId: string; dateOfBirth: string; bloodGroup: string; classTeacher: string; subjects: Subject[]; attendance: { totalDays: number; present: number; absent: number; late: number; percentage: number; records: AttendanceRecord[]; }; results: { subject: string; firstTerm: number; secondTerm: number }[]; }
interface AttendanceRecord { date: string; status: 'Present' | 'Absent' | 'Late' | 'Leave'; }
interface ParentProfile { id: string; name: string; email: string; phone: string; occupation: string; address: string; }
```

## 4.2 Existing Types from `@/shared/types/common.ts`
```tsx
interface NewsItem { id: number; title: string; date: string; category: string; tag: string; image: string; description: string; content?: string; }
interface Testimonial { name: string; role: string; image: string; quote?: string; content?: string; }
interface Stat { number: string; label: string; suffix?: string; }
interface Program { title: string; description: string; image?: string; icon?: string; color?: string; features?: string[]; }
interface Feature { title: string; description: string; icon: React.ReactNode; }
interface FeatureItem { title: string; description: string; icon: React.ReactNode; }
interface MenuItem { label: string; link: string; }
interface SearchResult { id?: number; title: string; description?: string; category?: string; type: string; path: string; author?: string; }
```

## 4.3 NEW Types to Create

Add these to a NEW file `src/shared/types/faculty.ts`:
```tsx
// ========== FACULTY TYPES ==========
export interface FacultyProfile {
  id: string;
  name: string;
  photo: string;
  designation: string;        // "Assistant Teacher", "Senior Teacher", etc.
  department: string;         // "Science", "Arts", "Commerce", etc.
  email: string;
  phone: string;
  joinDate: string;
  qualification: string;
  bio?: string;
  classesAssigned: string[];  // ["Class 9-A", "Class 10-B"]
  subjects: string[];         // ["Mathematics", "General Science"]
}

export interface FacultyClassInfo {
  id: string;
  name: string;               // "Class 9"
  section: string;            // "A"
  totalStudents: number;
  classTeacher: string;
  subjects: FacultySubjectInfo[];
  averageAttendance: number;  // percentage
  schedule?: string;          // "Sat-Thu, 8:00 AM - 2:00 PM"
}

export interface FacultySubjectInfo {
  name: string;
  classId: string;
  totalClasses: number;
  classesCompleted: number;
}

export interface FacultyStudentListItem {
  roll: number;
  name: string;
  class: string;
  section: string;
  attendance: { present: number; total: number; percentage: number };
}

export interface GradeMappingEntry {
  minMark: number;
  maxMark: number;
  grade: string;       // "A+", "A", "A-", etc.
  point: number;       // 5.00, 4.00, 3.50, etc.
  description: string;
}

export interface GradeEntryRow {
  roll: number;
  name: string;
  marks: number;
  grade: string;
  point: number;
  remarks?: string;
}

export interface FacultyAssignment {
  id: number;
  title: string;
  description: string;
  className: string;
  section: string;
  subject: string;
  dueDate: string;
  totalMarks: number;
  submissionCount: number;
  totalStudents: number;
  status: 'open' | 'closed';
  submissions: AssignmentSubmission[];
}

export interface AssignmentSubmission {
  studentName: string;
  studentRoll: number;
  submittedDate: string;
  fileName: string;
  status: 'submitted' | 'late' | 'not_submitted';
  grade?: number;
  feedback?: string;
}

export interface AttendanceEntryRow {
  roll: number;
  name: string;
  status: 'Present' | 'Absent' | 'Late';
}
```

Add these to a NEW file `src/shared/types/public.ts`:
```tsx
// ========== PUBLIC PAGE TYPES ==========
export interface NoticeItem {
  id: number;
  title: string;
  body: string;
  date: string;
  category: 'exam' | 'academic' | 'event' | 'holiday' | 'general';
  priority: 'high' | 'medium' | 'low';
  isPinned: boolean;
  author: string;
  excerpt?: string;
}

export interface StaffProfile {
  id: number;
  name: string;
  photo: string;
  designation: string;
  department: string;
  subjects: string[];
  qualification: string;
  email: string;
  phone: string;
  joinYear: number;
  bio?: string;
}

export interface GalleryAlbum {
  id: number;
  title: string;
  date: string;
  coverImage: string;
  photos: GalleryPhoto[];
  category: 'sports' | 'cultural' | 'academic' | 'campus' | 'events';
  description: string;
  photoCount: number;
}

export interface GalleryPhoto {
  id: number;
  url: string;
  caption: string;
  date: string;
}

export interface ExamResult {
  id: number;
  studentName: string;
  rollNumber: string;
  class: string;
  section: string;
  year: number;
  examType: string;
  gpa: number;
  subjects: ExamSubjectResult[];
}

export interface ExamSubjectResult {
  subjectName: string;
  marks: number;
  grade: string;
  gradePoint: number;
}

export interface StarRatingProps {
  value: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export interface TestimonialFormData {
  name: string;
  role: 'Student' | 'Parent' | 'Alumni' | 'Teacher';
  batchOrClass: string;
  rating: number;
  content: string;
}
```

Update `src/shared/types/index.ts` to:
```ts
export * from './common';
export * from './user';
export * from './api';
export * from './faculty';
export * from './public';
```

---

# PART 5: ROUTE CONSTANTS & CONFIGURATION

## 5.1 Existing Route Constants (`src/shared/constants/routes.ts`)
```tsx
export const ROUTES = {
  HOME: '/', ABOUT: '/about', CONTACT: '/contact', UPDATES: '/updates',
  TESTIMONIALS: '/testimonials', EDU_ADVENTURE: '/edu-adventure',
  ACADEMICS: '/academics', ADMISSIONS: '/admissions',
  ADMISSION_INQUIRY: '/admission-inquiry', EVENTS: '/events',
  EVENTS_CALENDAR: '/events-calendar', PORTALS: '/portals',
  FACULTY_PORTAL: '/faculty-portal', STUDENT_PORTAL: '/student-portal',
  PARENT_PORTAL: '/parent-portal', CURIOSITY_CORNER: '/curiosity-corner',
  RESOURCES: '/resources', EXTRACURRICULAR: '/extracurricular',
  ALUMNI: '/alumni', LIBRARY: '/library', FAQ: '/faq',
  PORTAL_STUDENT: '/portal/student/*',
  PORTAL_STUDENT_DASHBOARD: '/portal/student/dashboard',
  PORTAL_STUDENT_SCHEDULE: '/portal/student/schedule',
  PORTAL_STUDENT_ASSIGNMENTS: '/portal/student/assignments',
  PORTAL_STUDENT_RESULTS: '/portal/student/results',
  PORTAL_PARENT: '/portal/parent/*',
  PORTAL_PARENT_DASHBOARD: '/portal/parent/dashboard',
  PORTAL_PARENT_ATTENDANCE: '/portal/parent/attendance',
  PORTAL_PARENT_FEES: '/portal/parent/fees',
  PORTAL_PARENT_MESSAGES: '/portal/parent/messages',
} as const;
```

## 5.2 NEW Route Constants to Add
Add these to the existing `ROUTES` object:
```tsx
// Faculty Portal Routes
PORTAL_FACULTY: '/portal/faculty/*',
PORTAL_FACULTY_DASHBOARD: '/portal/faculty/dashboard',
PORTAL_FACULTY_CLASSES: '/portal/faculty/classes',
PORTAL_FACULTY_GRADES: '/portal/faculty/grades',
PORTAL_FACULTY_ATTENDANCE: '/portal/faculty/attendance',
PORTAL_FACULTY_ASSIGNMENTS: '/portal/faculty/assignments',

// New Public Pages
NOTICES: '/notices',
STAFF: '/staff',
GALLERY: '/gallery',
EXAM_RESULTS: '/results',
```

---

# PART 6: ROUTING PATTERN (How Routes Are Registered)

The router is in `src/app/router/Routes.tsx` using `createBrowserRouter`:

```tsx
// Lazy loading pattern:
const ComponentName = lazy(() => import("../../features/feature-folder").then(m => ({ default: m.ExportName })));

// Suspense wrapper:
const withSuspense = (Component: React.ComponentType): React.JSX.Element => (
  <Suspense fallback={<LoadingFallback />}><Component /></Suspense>
);

// Layout wrapper for public pages:
const LayoutWrapper = (): React.JSX.Element => (
  <><SEO /><MainLayout /><SearchModal /></>
);

// Public routes are children of the LayoutWrapper:
{ path: "notices", element: withSuspense(Notices as React.ComponentType) },
{ path: "staff", element: withSuspense(Staff as React.ComponentType) },

// Portal routes are NESTED routes with their own layout:
{ path: "portal/student/*", element: withSuspense(StudentPortal as React.ComponentType) },
{ path: "portal/parent/*", element: withSuspense(ParentPortal as React.ComponentType) },

// NEW — Faculty portal route (same pattern as student/parent):
{ path: "portal/faculty/*", element: withSuspense(FacultyPortal as React.ComponentType) },
```

---

# PART 7: CONTEXT PROVIDER PATTERN

## 7.1 AppProvider Composition (`src/app/providers/AppProvider.tsx`)
```tsx
const AppProvider: FC<AppProviderProps> = ({ children }) => (
  <ThemeProvider>
    <NotificationProvider>
      <GlobalAppProvider>
        <StudentProvider>
          <ParentProvider>
            {children}
          </ParentProvider>
        </StudentProvider>
      </GlobalAppProvider>
    </NotificationProvider>
  </ThemeProvider>
);
```
**Add `<FacultyProvider>` inside `<ParentProvider>`** when you create FacultyContext.

## 7.2 useApp() Hook (`src/app/providers/contexts/AppContext.tsx`)
Available everywhere via `useApp()`:
```tsx
interface AppContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  searchResults: SearchResult[];
  theme: "light" | "dark";
  toggleTheme: () => void;
  notifications: Notification[];
  isNotificationOpen: boolean;
  toggleNotification: () => void;
  closeNotification: () => void;
  markAsRead: (id: number) => void;
  markAllAsRead: () => void;
  unreadCount: number;
}
```

## 7.3 StudentContext Pattern (Reference for FacultyContext)
Study this carefully — FacultyContext should follow the same pattern:
```tsx
interface StudentContextType {
  student: Student | null;
  assignments: Assignment[];
  scheduleData: Schedule[];
  attendanceData: AttendanceData | null;
  noticeBoard: Notice[];
  isLoading: boolean;
  error: string | null;
  isLoggedIn: boolean;
  pendingAssignments: Assignment[];
  submittedAssignments: Assignment[];
  notifications: StudentNotification[];
  submitAssignment: (assignmentId: number) => Promise<void>;
  addNotification: (notification: StudentNotification) => void;
  logout: () => void;
}

// Uses mock API from @/shared/api/api:
import { studentService } from "@/shared/api/api";
// Fetches data in useEffect on mount when isLoggedIn is true
// Uses useCallback for mutations (submitAssignment, logout)
// Uses useMemo for derived state (pendingAssignments, submittedAssignments)
// addNotification auto-removes notification after 5000ms timeout
```

---

# PART 8: REFERENCE IMPLEMENTATIONS (How Existing Portals Work)

## 8.1 Faculty Landing Page (Current — Login Stub)
File: `src/features/faculty-portal/Faculty.tsx`
This uses `PortalEntryTemplate` with `role="faculty"`:
```tsx
import { useNavigate } from 'react-router-dom';
import { PortalEntryTemplate, Button, FormInput } from '@/shared/ui';
import { facultyFeatures } from '@/shared/data/portalData';

const Faculty = () => {
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/portal/faculty/dashboard');  // Currently just does nothing
  };

  return (
    <PortalEntryTemplate title="Faculty Portal" subtitle="Access your dashboard, manage grades and attendance" role="faculty">
      <form onSubmit={handleLogin} className="space-y-6">
        <FormInput label="Employee ID" name="employeeId" type="text" placeholder="Enter your Employee ID" />
        <FormInput label="Password" name="password" type="password" placeholder="Enter your password" />
        <Button type="submit" className="w-full">Enter Portal</Button>
      </form>
    </PortalEntryTemplate>
  );
};
export default Faculty;
```
**KEEP this as-is.** Just ensure the navigate() call works.

## 8.2 StudentPortal — Sidebar Layout Pattern (MUST REPLICATE)
This is the pattern you MUST follow for FacultyPortal:
```tsx
import { useState } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { PortalLandingTemplate } from '@/shared/ui';
import { useStudent } from '@/app/providers/contexts/StudentContext';
import { cn } from '@/shared/lib/cn';
import { ROUTES } from '@/shared/constants/routes';
import { StudentProvider } from '@/app/providers/contexts/StudentContext';

// Lazy imports for sub-pages
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'));
const Schedule = lazy(() => import('./components/Schedule/Schedule'));
// ... etc

const StudentPortal = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { student, logout } = useStudent();
  const navigate = useNavigate();

  // Sidebar navigation items
  const navItems = [
    { label: 'Dashboard', path: '/portal/student/dashboard', icon: <svg>...</svg> },
    { label: 'Schedule', path: '/portal/student/schedule', icon: <svg>...</svg> },
    // ...
  ];

  const Sidebar = () => (
    <div className="flex flex-col h-full">
      {/* Profile section at top */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <img src={student?.photo} className="w-12 h-12 rounded-full" />
          <div>
            <h3 className="font-bold text-slate-900">{student?.name}</h3>
            <p className="text-sm text-slate-500">{student?.class} - {student?.section}</p>
          </div>
        </div>
      </div>
      {/* Navigation links */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all',
              isActive ? 'bg-primary-50 text-primary-700 font-bold' : 'text-slate-600 hover:bg-slate-50'
            )}
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>
      {/* Logout button at bottom */}
      <div className="p-4 border-t border-slate-200">
        <button onClick={() => { logout(); navigate('/student-portal'); }} className="...">
          Logout
        </button>
      </div>
    </div>
  );

  const Header = () => (
    <div className="flex items-center justify-between w-full">
      {/* Mobile sidebar toggle */}
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden ...">
        <svg><!-- hamburger --></svg>
      </button>
      <h1 className="text-xl font-bold text-slate-900">Student Portal</h1>
      {/* Mobile sidebar overlay */}
    </div>
  );

  return (
    <StudentProvider>
      <PortalLandingTemplate sidebar={<Sidebar />} header={<Header />} isSidebarOpen={isSidebarOpen}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="schedule" element={<Schedule />} />
            {/* ... */}
          </Routes>
        </Suspense>
      </PortalLandingTemplate>
    </StudentProvider>
  );
};
```

**KEY TAKEAWAYS:**
- `PortalLandingTemplate` wraps everything: sidebar (ReactNode) + header (ReactNode) + children (Outlet/Routes)
- Sidebar has: profile section → nav links (using `NavLink` from react-router-dom) → logout button
- Header has: sidebar toggle button + page title
- Sub-pages are lazy-loaded via `Routes`/`Route`
- The Context Provider (`StudentProvider`) wraps the content inside the template
- Uses `cn()` for conditional NavLink styling (`isActive`)
- Uses `useNavigate()` for logout redirect

---

# PART 9: MOCK DATA PATTERNS

## 9.1 Data File Convention
All mock data files are in `src/shared/data/`. They:
- Use **named exports** (never default exports)
- Use proper **TypeScript interfaces** from `@/shared/types/`
- Use **realistic Bangladesh school data** (Bangla names, Taka currency, real subjects)
- Use **placeholder images** from Unsplash (for photos) or gradient divs

## 9.2 Existing Data Files (for reference)
- `studentData.ts` — exports: `studentProfile`, `academicResults`, `attendanceData`, `noticeBoard`, `initialAssignments`, `scheduleData`, `subjects`
- `parentData.ts` — exports: `parentProfile`, `children`, `noticeBoard`
- `homeData.tsx` — exports: `homeFeatures`, `homePrograms`, `homeStats`, `homeTestimonials`, `homeNews`, `newsCategories`, `aboutUsFeatures`, `aboutUsStats`, `updatesNewsItems`, `updatesAnnouncements`
- `feesData.ts` — exports: `feesStructure`, `generateFeesForChild()`, `child1Fees`, `child2Fees`
- `booksData.ts` — exports: `booksData`, `digitalResources`, `subjects`, `classLevels`, `availabilityOptions`
- `faq-data.tsx` — exports: `faqs`
- `academicData.tsx` — exports: `extracurricularActivities`, `studyMaterials`, `admissionSteps`, `admissionsRequiredDocuments`, `academicPrograms`
- `portalData.tsx` — exports: `facultyFeatures`, `facultyPortalFeatures`, `parentalFeatures`, `parentalPortalFeatures`, `studentFeatures`, `studentPortalFeatures`
- `bangladeshHolidays.ts` — exports: `bangladeshHolidays`, `schoolEvents`, `allEvents`, `isHoliday()`, `formatDate()`, `generateGoogleCalendarLink()`, `bengaliMonths`, `bengaliDays`

## 9.3 Example: How to Write New Data
```tsx
// src/shared/data/facultyData.ts
import type { FacultyProfile, FacultyClassInfo, GradeMappingEntry, FacultyAssignment } from '@/shared/types/faculty';

export const facultyProfile: FacultyProfile = {
  id: "KHS-FAC-001",
  name: "Md. Kamal Hossain",
  photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  designation: "Senior Assistant Teacher",
  department: "Science",
  email: "kamal.hossain@kutumbpur.edu.bd",
  phone: "+880 17XX-XXXXXX",
  joinDate: "2010-01-15",
  qualification: "M.Sc. in Physics, B.Ed.",
  bio: "Experienced physics teacher with 15+ years of teaching experience...",
  classesAssigned: ["Class 9-A", "Class 10-A", "Class 10-B"],
  subjects: ["Physics", "General Science"],
};

export const facultyClasses: FacultyClassInfo[] = [
  {
    id: "class-9-a",
    name: "Class 9",
    section: "A",
    totalStudents: 45,
    classTeacher: "Md. Kamal Hossain",
    subjects: [
      { name: "Physics", classId: "class-9-a", totalClasses: 120, classesCompleted: 85 },
      { name: "General Science", classId: "class-9-a", totalClasses: 80, classesCompleted: 58 },
    ],
    averageAttendance: 94.2,
    schedule: "Saturday-Thursday, 8:00 AM - 2:00 PM",
  },
  // ... more classes
];

export const gradeMapping: GradeMappingEntry[] = [
  { minMark: 80, maxMark: 100, grade: "A+", point: 5.00, description: "Outstanding" },
  { minMark: 70, maxMark: 79, grade: "A", point: 4.00, description: "Excellent" },
  { minMark: 60, maxMark: 69, grade: "A-", point: 3.50, description: "Very Good" },
  { minMark: 50, maxMark: 59, grade: "B", point: 3.00, description: "Good" },
  { minMark: 40, maxMark: 49, grade: "C", point: 2.50, description: "Above Average" },
  { minMark: 33, maxMark: 39, grade: "D", point: 2.00, description: "Average" },
  { minMark: 0, maxMark: 32, grade: "F", point: 0.00, description: "Fail" },
];

export const examTypes = [
  { value: "", label: "Select Exam Type" },
  { value: "1st-terminal", label: "1st Terminal Exam" },
  { value: "2nd-terminal", label: "2nd Terminal Exam" },
  { value: "annual", label: "Annual Exam" },
  { value: "model-test", label: "Model Test" },
];

export const sampleFacultyAssignments: FacultyAssignment[] = [
  // ... assignments with submissions
];
```

---

# PART 10: FEATURE IMPLEMENTATION SPECS

## 10.1 Faculty Portal (PRIORITY 1 — Biggest Gap)

### File Structure to Create:
```
src/features/faculty-portal/
  index.ts                          (barrel export)
  Faculty.tsx                       (EXISTS — keep as-is, just fix navigate)
  FacultyPortal.tsx                 (NEW — sidebar layout)
  components/
    Dashboard/
      Dashboard.tsx
      FacultyHeader.tsx
      TodaySchedule.tsx
      QuickStats.tsx
      PendingTasks.tsx
    MyClasses/
      MyClasses.tsx
      ClassCard.tsx
    GradeEntry/
      GradeEntry.tsx
      GradeTable.tsx
    Attendance/
      Attendance.tsx
      AttendanceTable.tsx
    Assignments/
      Assignments.tsx
      AssignmentCard.tsx
      CreateAssignmentModal.tsx
      SubmissionViewer.tsx
```

### New Data File: `src/shared/data/facultyData.ts`
Create with: `facultyProfile`, `facultyClasses` (3-4 classes), `facultyStudents` (student lists per class, 10-15 students each), `gradeMapping` (Bangladesh SSC grading scale), `examTypes`, `sampleFacultyAssignments` (3-4 assignments with mock submissions).

### New Context: `src/app/providers/contexts/FacultyContext.tsx`
Follow StudentContext pattern exactly. Provide: `faculty`, `classes`, `students`, `assignments`, `notifications`, `isLoading`, `isLoggedIn`, `logout`, `saveGrades()`, `saveAttendance()`, `createAssignment()`, `gradeSubmission()`.

### New Types: `src/shared/types/faculty.ts`
(Already defined in Part 4.3 above)

### FacultyPortal.tsx (Sidebar Layout):
Follow the StudentPortal pattern exactly:
- Sidebar: FacultyProfile photo + name + designation at top
- Nav items: Dashboard, My Classes, Grade Entry, Attendance, Assignments
- Each nav item has an SVG icon
- Logout button at bottom → navigates to `/faculty-portal`
- Wrap content in `<FacultyProvider>`
- Use lazy-loaded `Routes` for sub-pages

### Dashboard:
```
Layout:
┌─────────────────────────────────────────────┐
│ FacultyHeader (photo, name, designation)    │
├──────────┬──────────┬──────────┬────────────┤
│ StatCard │ StatCard │ StatCard │ StatCard  │
│ Students │ Pending  │ Due Today│ Attendance│
├──────────┴──────────┴──────────┴────────────┤
│ Today's Schedule (list of today's classes)   │
├─────────────────────────────────────────────┤
│ Pending Tasks (cards needing action)         │
└─────────────────────────────────────────────┘
```
- FacultyHeader: `Card` with photo, name, designation, department, and classes count
- QuickStats: 4x `StatCard` — Total Students, Pending Grades, Attendance Due, Assignments to Review
- TodaySchedule: List of today's classes (time, subject, room) from scheduleData. Use `Badge` for subject colors.
- PendingTasks: Array of `Card` items — "Grade Entry pending for Class 9-A Physics", "Attendance not recorded for Class 10-B", etc. Each card has a Button to navigate to the relevant page.

### My Classes:
- Grid of `ClassCard` components (3 columns on desktop, 1 on mobile)
- Each `ClassCard` is a `Card hoverable` showing: class name, section, total students, average attendance (with trend), teacher name
- Filter bar at top: search by class name
- Click a card → navigate to `/portal/faculty/grades?class={classId}`

### Grade Entry:
- Step-based flow:
  1. Selectors row: Class dropdown + Subject dropdown + Exam type dropdown (all from facultyData)
  2. Grade table: columns = Roll, Name, Marks (number input 0-100), Grade (auto-calculated), Remarks (text input)
  3. Grade auto-calculation: use `gradeMapping` from facultyData to convert marks to grade/point
  4. "Mark All" row at bottom: average marks, total passed/failed
  5. Save button → `toast.success("Grades saved successfully!")`
- Use `FormInput type="select"` for dropdowns
- Use Zod for marks validation (number, 0-100)
- Style the table with Tailwind: sticky header, zebra striping, hover rows

### Attendance Recording:
- Same step-based flow as Grade Entry:
  1. Date picker (simple `<input type="date">`) + Class dropdown
  2. Attendance table: Roll, Name, Status (Present/Absent/Late radio buttons per row)
  3. "Mark All Present" button at top
  4. Summary row: total present, total absent, total late
  5. Submit button → `toast.success("Attendance submitted!")`
- Radio button styling: green circle for Present, red for Absent, amber for Late
- Use `useState` to manage the attendance state array

### Assignment Management:
- Tab view: "My Assignments" | "Create New"
- My Assignments tab: Grid of `AssignmentCard` components
  - Each card shows: title, class/section, subject, due date, submission count "28/45 submitted", status badge
  - Click card → opens SubmissionViewer (see below)
- Create New tab: Form using `FormInput` components + Zod validation
  - Fields: Title, Description (textarea), Class (select), Subject (select), Due Date (date input), Total Marks (number)
  - Submit → `toast.success("Assignment created!")`
- SubmissionViewer (modal or sub-page):
  - Table: Student Name, Roll, Submitted Date, Status badge, Grade input (number), Feedback input
  - "Save Grades" button
  - Bulk action: "Grade All" placeholder

---

## 10.2 Public Notice Board (`/notices`)

### File Structure:
```
src/features/curiosity-corner/Notices/
  Notices.tsx
```

### New Data File: `src/shared/data/noticesData.ts`
Create 12-15 notices spanning categories: exam, academic, event, holiday, general.
Each notice: `{ id, title, body (200+ chars), date, category, priority, isPinned, author, excerpt }`.

### Page Design:
```
┌─────────────────────────────────────────────┐
│ Hero: "School Notice Board"                  │
├─────────────────────────────────────────────┤
│ Filter tabs: All | Exam | Academic | Event   │
│   | Holiday | General                        │
├─────────────────────────────────────────────┤
│ Search bar (text input)                     │
├─────────────────────────────────────────────┤
│ Pinned notices (if any, sticky at top)      │
├─────────────────────────────────────────────┤
│ Notice cards (grid/list view)               │
│ Each: title, date, category badge, excerpt   │
│ Click → expand to show full body             │
├─────────────────────────────────────────────┤
│ "Load More" button (if > 6 visible)         │
└─────────────────────────────────────────────┘
```
- Use `Hero`, `Badge`, `Card`, `SectionHeader`
- Category filter: useState with filter state, filter notices array
- Search: text input that filters by title/body
- Pinned notices: show at top with a pin icon, regardless of date
- Expand: useState to track expanded notice, show full body in the card
- Dates: sort newest first

### Routes:
- Add to Routes.tsx: `{ path: "notices", element: withSuspense(Notices) }`
- Add to ROUTES constants: `NOTICES: '/notices'`
- Update barrel export: `src/features/curiosity-corner/index.ts`

---

## 10.3 Staff Directory (`/staff`)

### File Structure:
```
src/features/curiosity-corner/StaffDirectory/
  StaffDirectory.tsx
```

### New Data File: `src/shared/data/staffData.ts`
Create 15-20 teacher profiles:
```tsx
import type { StaffProfile } from '@/shared/types/public';
export const staffProfiles: StaffProfile[] = [
  {
    id: 1, name: "Md. Kamal Hossain",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    designation: "Senior Assistant Teacher",
    department: "Science",
    subjects: ["Physics", "General Science"],
    qualification: "M.Sc. Physics, B.Ed.",
    email: "kamal@kutumbpur.edu.bd", phone: "+880 1711-XXXXXX",
    joinYear: 2010,
    bio: "15+ years experience in physics education..."
  },
  // ... 14-19 more profiles with diverse departments
];

export const departments = [
  { value: "all", label: "All Departments" },
  { value: "science", label: "Science" },
  { value: "arts", label: "Arts/Humanities" },
  { value: "commerce", label: "Commerce" },
  { value: "bengali", label: "Bengali" },
  { value: "english", label: "English" },
  { value: "math", label: "Mathematics" },
  { value: "ict", label: "ICT" },
];
```

### Page Design:
- Hero: "Our Teachers" with description
- Filter bar: department dropdown + search input
- Grid: 3 columns desktop, 2 tablet, 1 mobile of teacher cards
- Each card: photo (rounded), name, designation (bold), department badge, subjects list, email icon, phone icon
- Click card → expand to show full bio + contact info (or modal)

---

## 10.4 Photo Gallery (`/gallery`)

### File Structure:
```
src/features/curiosity-corner/Gallery/
  Gallery.tsx
```

### New Data File: `src/shared/data/galleryData.ts`
Create 4-6 albums with 8-12 photos each. Since you don't have real photos, use gradient placeholder divs:
```tsx
// For placeholder photos, use gradient backgrounds:
// https://images.unsplash.com/photo-...?w=400&h=300&fit=crop
// Or generate CSS gradients as placeholder images

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 1, title: "Annual Sports Day 2025", date: "2025-12-15",
    coverImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    category: "sports",
    description: "Annual sports competition featuring cricket, football, athletics...",
    photos: [
      { id: 1, url: "...", caption: "Cricket final match", date: "2025-12-15" },
      // ... more photos
    ],
  },
  // ... more albums
];

export const galleryCategories = [
  { value: "all", label: "All" },
  { value: "sports", label: "Sports" },
  { value: "cultural", label: "Cultural" },
  { value: "academic", label: "Academic" },
  { value: "campus", label: "Campus" },
  { value: "events", label: "Events" },
];
```

### Page Design:
- Hero: "Photo Gallery"
- View toggle: Albums view | All Photos view
- Albums view: Grid of album cards (cover image, title, date, photo count badge)
- Click album → shows photos in grid
- Each photo: thumbnail with hover overlay showing caption
- Click photo → lightbox (full screen overlay with prev/next navigation, close button)
- Lightbox: use fixed positioning, black overlay, center image, arrow buttons, Escape to close

---

## 10.5 Public Exam Results (`/results`)

### File Structure:
```
src/features/edu-adventure/ExamResults/
  ExamResults.tsx
```

### New Data File: `src/shared/data/examResultsData.ts`
Create 20-30 sample results:
```tsx
import type { ExamResult } from '@/shared/types/public';

export const examResults: ExamResult[] = [
  {
    id: 1, studentName: "Rahim Uddin", rollNumber: "2026-042",
    class: "SSC", section: "Science", year: 2026, examType: "SSC",
    gpa: 4.75,
    subjects: [
      { subjectName: "Bangla", marks: 82, grade: "A+", gradePoint: 5.00 },
      { subjectName: "English", marks: 75, grade: "A", gradePoint: 4.00 },
      // ... 8-10 subjects following Bangladesh SSC curriculum
    ],
  },
  // ... more results
];

export const examResultOptions = [
  { value: "", label: "Select Exam" },
  { value: "ssc-2026", label: "SSC 2026" },
  { value: "ssc-2025", label: "SSC 2025" },
  { value: "jsc-2026", label: "JSC 2026" },
];
```

### Page Design:
- Hero: "Exam Results"
- Search form: Exam dropdown + Roll Number input + Search button
- Result card (shown after search): student name, roll, class, GPA (big), subject table
- Subject table: Subject, Marks, Grade, Grade Point columns
- Print button: `window.print()` with `@media print` CSS to hide nav/footer
- "No results found" state when roll doesn't match

---

## 10.6 Notification UI (Bell Dropdown)

### Modify: `src/shared/ui/organisms/Navbar/NotificationBell.tsx`
The NotificationBell already exists but may not show a dropdown. Make sure it:
- Shows unread count badge (from `useApp().unreadCount`)
- On click, shows dropdown with latest 5 notifications
- Each notification: icon, title, message excerpt, time ago, read/unread dot
- "Mark all as read" button
- Click notification → navigate to relevant page

### The `useApp()` context already provides:
```tsx
notifications: Notification[];
isNotificationOpen: boolean;
toggleNotification: () => void;
closeNotification: () => void;
markAsRead: (id: number) => void;
markAllAsRead: () => void;
unreadCount: number;
```

---

## 10.7 Testimonial Submission Form

### Modify: `src/features/home/Testimonials/Testimonials.tsx`
Replace `window.alert('coming soon!')` with:
- useState to control a modal
- Modal contains a form:
  - Name (text, required, min 2 chars)
  - Role (select: Student, Parent, Alumni, Teacher)
  - Batch/Class (text)
  - Rating (custom StarRating component — 5 clickable stars)
  - Testimonial (textarea, required, min 20 chars, max 500 chars)
- Zod validation schema
- On submit: `toast.success("Thank you for your testimonial!")`, close modal

### New Component: `src/shared/ui/atoms/StarRating.tsx`
```tsx
interface StarRatingProps {
  value: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
// Renders 5 star SVGs. If onChange is provided, stars are clickable.
// If readonly, stars are just displayed.
// Sizes: sm=16px, md=24px, lg=32px
// Full star = text-yellow-400, empty star = text-gray-300
```

---

# PART 11: FILE CREATION CHECKLIST

Create these files in this order:

## Phase 1: Foundation (types, data, context)
- [ ] `src/shared/types/faculty.ts` — Faculty type definitions
- [ ] `src/shared/types/public.ts` — Public page type definitions
- [ ] `src/shared/types/index.ts` — UPDATE: add new type re-exports
- [ ] `src/shared/data/facultyData.ts` — All faculty mock data
- [ ] `src/shared/data/noticesData.ts` — Notice board mock data
- [ ] `src/shared/data/staffData.ts` — Staff directory mock data
- [ ] `src/shared/data/galleryData.ts` — Photo gallery mock data
- [ ] `src/shared/data/examResultsData.ts` — Exam results mock data
- [ ] `src/shared/constants/routes.ts` — UPDATE: add new route constants
- [ ] `src/app/providers/contexts/FacultyContext.tsx` — Faculty context provider
- [ ] `src/app/providers/AppProvider.tsx` — UPDATE: add FacultyProvider
- [ ] `src/shared/lib/validationSchemas.ts` — UPDATE: add new Zod schemas

## Phase 2: Faculty Portal
- [ ] `src/features/faculty-portal/FacultyPortal.tsx` — Sidebar layout
- [ ] `src/features/faculty-portal/index.ts` — UPDATE barrel export
- [ ] `src/features/faculty-portal/components/Dashboard/Dashboard.tsx`
- [ ] `src/features/faculty-portal/components/Dashboard/FacultyHeader.tsx`
- [ ] `src/features/faculty-portal/components/Dashboard/TodaySchedule.tsx`
- [ ] `src/features/faculty-portal/components/Dashboard/QuickStats.tsx`
- [ ] `src/features/faculty-portal/components/Dashboard/PendingTasks.tsx`
- [ ] `src/features/faculty-portal/components/MyClasses/MyClasses.tsx`
- [ ] `src/features/faculty-portal/components/MyClasses/ClassCard.tsx`
- [ ] `src/features/faculty-portal/components/GradeEntry/GradeEntry.tsx`
- [ ] `src/features/faculty-portal/components/GradeEntry/GradeTable.tsx`
- [ ] `src/features/faculty-portal/components/Attendance/Attendance.tsx`
- [ ] `src/features/faculty-portal/components/Attendance/AttendanceTable.tsx`
- [ ] `src/features/faculty-portal/components/Assignments/Assignments.tsx`
- [ ] `src/features/faculty-portal/components/Assignments/AssignmentCard.tsx`
- [ ] `src/features/faculty-portal/components/Assignments/CreateAssignmentModal.tsx`
- [ ] `src/features/faculty-portal/components/Assignments/SubmissionViewer.tsx`

## Phase 3: Public Pages
- [ ] `src/features/curiosity-corner/Notices/Notices.tsx`
- [ ] `src/features/curiosity-corner/index.ts` — UPDATE barrel export
- [ ] `src/features/curiosity-corner/StaffDirectory/StaffDirectory.tsx`
- [ ] `src/features/curiosity-corner/Gallery/Gallery.tsx`
- [ ] `src/features/edu-adventure/ExamResults/ExamResults.tsx`
- [ ] `src/features/edu-adventure/index.ts` — UPDATE barrel export

## Phase 4: Enhancements
- [ ] `src/shared/ui/atoms/StarRating.tsx` — New component
- [ ] `src/shared/ui/index.ts` — UPDATE: export StarRating
- [ ] Modify Testimonials.tsx — add submission form modal
- [ ] Fix Messages.tsx typo bug
- [ ] Fix Portals.tsx dead buttons
- [ ] Fix Testimonials.tsx window.alert

## Phase 5: Routes
- [ ] `src/app/router/Routes.tsx` — UPDATE: add all new routes
- [ ] `src/shared/ui/utilities/SEO.tsx` — UPDATE: add SEO entries for new pages

---

# PART 12: RULES & CONSTRAINTS

## DO:
- ✅ Use ONLY existing shared UI components (Button, Card, Badge, FormInput, Hero, SectionHeader, StatCard, InfoBanner, etc.)
- ✅ Use Tailwind CSS classes exclusively for styling (no CSS modules, no inline styles)
- ✅ Use `cn()` from `@/shared/lib/cn` for conditional/merged classes
- ✅ Use `formatDate()`, `formatCurrency()` from `@/shared/lib/format`
- ✅ Use Zod + React Hook Form for all form validation
- ✅ Use `react-hot-toast` for success/error notifications
- ✅ Use `@/shared/constants/routes` for all route paths (never hardcode strings)
- ✅ Use lazy loading (`React.lazy`) for all page components
- ✅ Use proper TypeScript interfaces for all props and state
- ✅ Use barrel exports (`index.ts`) for every feature module
- ✅ Follow the exact same patterns as Student Portal and Parent Portal
- ✅ Create mock data that is realistic for a Bangladesh school (Bangla names, real subjects, Taka)

## DO NOT:
- ❌ Create new UI components unless absolutely necessary (use existing ones)
- ❌ Use `any` type anywhere
- ❌ Use `window.alert()`, `window.confirm()`, or `window.prompt()`
- ❌ Hardcode route strings (use ROUTES constants)
- ❌ Import from one feature module into another (use shared/)
- ❌ Use dynamic Tailwind classes (e.g., `from-${color}` — use full static strings)
- ❌ Use `useState` for side effects (use `useEffect`)
- ❌ Change any existing working component's API or behavior
- ❌ Remove or modify any existing routes
- ❌ Add new npm dependencies (everything you need is already installed)

## VISUAL CONSISTENCY:
- All pages use `Hero` at the top (except portal interior pages)
- All sections use `SectionHeader` for titles
- All interactive elements use `Card hoverable` for clickable items
- All stats use `StatCard`
- All form inputs use `FormInput`
- All alerts/banners use `InfoBanner`
- All badges use `Badge`
- Dark mode must work on all new components (use `dark:` Tailwind prefix)

---

# PART 13: QUALITY VERIFICATION

After implementing everything, verify:

1. `bun run build` completes with ZERO errors
2. `bun run dev` starts successfully
3. All 30+ routes render without console errors
4. Dark mode toggle works on all new pages
5. All forms validate correctly with Zod
6. Toast notifications appear on all form submissions
7. No `any` types in the codebase
8. Faculty Portal sidebar collapses/expands correctly
9. Faculty Portal sub-pages navigate correctly
10. All new public pages render with proper Hero + content
11. Mobile responsive on all new pages
12. Search functionality works (Cmd+K)

---

# PART 14: FINAL NOTES

- This is mock-first development. All data is static/localStorage. When backend is ready, replace mock data with API calls — no structural changes needed.
- The Faculty Portal is the most critical deliverable. It makes the system feel complete.
- Every new page should feel like it belongs to the same application. Use the same fonts, colors, spacing, and component patterns.
- Take it one file at a time. Complete each component fully before moving to the next.
- Quality over speed. A well-built Faculty Portal with 5 working pages is better than 10 half-built pages.

**Start with Phase 1 (types + data + context), then Phase 2 (Faculty Portal), then Phase 3 (public pages).**
