/**
 * App-wide route constants for type-safe and consistent navigation.
 */

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  UPDATES: '/updates',
  TESTIMONIALS: '/testimonials',
  EDU_ADVENTURE: '/edu-adventure',
  ACADEMICS: '/academics',
  ADMISSIONS: '/admissions',
  ADMISSION_INQUIRY: '/admission-inquiry',
  EVENTS: '/events',
  EVENTS_CALENDAR: '/events-calendar',
  PORTALS: '/portals',
  FACULTY_PORTAL: '/faculty-portal',
  STUDENT_PORTAL: '/student-portal',
  PARENT_PORTAL: '/parent-portal',
  CURIOSITY_CORNER: '/curiosity-corner',
  RESOURCES: '/resources',
  EXTRACURRICULAR: '/extracurricular',
  ALUMNI: '/alumni',
  LIBRARY: '/library',
  FAQ: '/faq',
  
  // Portal Dashboard Routes
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

export type AppRoutes = typeof ROUTES[keyof typeof ROUTES];
