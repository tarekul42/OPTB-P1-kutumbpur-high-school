import React, { lazy, Suspense, type ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoadingFallback, SEO, SearchModal } from "../../shared/ui";
import MainUserLayout from "../../shared/ui/layouts/MainUserLayout/MainUserLayout";

const Home = lazy(() => import("../../features/home").then(m => ({ default: m.Home })));
const AboutUs = lazy(() => import("../../features/home").then(m => ({ default: m.AboutUs })));
const Contact = lazy(() => import("../../features/home").then(m => ({ default: m.Contact })));
const Updates = lazy(() => import("../../features/home").then(m => ({ default: m.Updates })));
const Testimonials = lazy(() => import("../../features/home").then(m => ({ default: m.Testimonials })));

const Faculty = lazy(() => import("../../features/faculty-portal").then(m => ({ default: m.Faculty })));
const Student = lazy(() => import("../../features/student-portal").then(m => ({ default: m.Student })));
const Parent = lazy(() => import("../../features/parent-portal").then(m => ({ default: m.Parent })));
const StudentPortal = lazy(() => import("../../features/student-portal").then(m => ({ default: m.StudentPortal })));
const ParentPortal = lazy(() => import("../../features/parent-portal").then(m => ({ default: m.ParentPortal })));

const Resources = lazy(() => import("../../features/curiosity-corner").then(m => ({ default: m.Resources })));
const ExtracurricularActivities = lazy(() => import("../../features/curiosity-corner").then(m => ({ default: m.ExtracurricularActivities })));
const AlumniSection = lazy(() => import("../../features/curiosity-corner").then(m => ({ default: m.AlumniSection })));
const Library = lazy(() => import("../../features/curiosity-corner").then(m => ({ default: m.Library })));
const EventsCalendar = lazy(() => import("../../features/events").then(m => ({ default: m.EventsCalendar })));

const FAQ = lazy(() => import("../../features/faq").then(m => ({ default: m.FAQ })));
const Academics = lazy(() => import("../../features/edu-adventure").then(m => ({ default: m.Academics })));
const Admissions = lazy(() => import("../../features/edu-adventure").then(m => ({ default: m.Admissions })));
const AdmissionInquiry = lazy(() => import("../../features/edu-adventure").then(m => ({ default: m.AdmissionInquiry })));
const Events = lazy(() => import("../../features/events").then(m => ({ default: m.Events })));
const CuriosityCorner = lazy(() => import("../../features/curiosity-corner").then(m => ({ default: m.CuriosityCorner })));
const EduAdventure = lazy(() => import("../../features/edu-adventure").then(m => ({ default: m.EduAdventure })));
const Portals = lazy(() => import("../../features/portals").then(m => ({ default: m.Portals })));
const NotFound = lazy(() => import("../router/NotFound"));

const withSuspense = (Component: React.ComponentType): React.JSX.Element => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
);

const LayoutWrapper = ({ children }: { children: ReactNode }): React.JSX.Element => (
  <>
    <SEO />
    <MainUserLayout />
    <SearchModal />
    {children}
  </>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWrapper><></></LayoutWrapper>,
    children: [
      {
        path: "/",
        element: withSuspense(Home as React.ComponentType),
      },
      {
        path: "about",
        element: withSuspense(AboutUs as React.ComponentType),
      },
      {
        path: "contact",
        element: withSuspense(Contact as React.ComponentType),
      },
      {
        path: "updates",
        element: withSuspense(Updates as React.ComponentType),
      },
      {
        path: "testimonials",
        element: withSuspense(Testimonials as React.ComponentType),
      },
      {
        path: "edu-adventure",
        element: withSuspense(EduAdventure as React.ComponentType),
      },
      {
        path: "academics",
        element: withSuspense(Academics as React.ComponentType),
      },
      {
        path: "admissions",
        element: withSuspense(Admissions as React.ComponentType),
      },
      {
        path: "admission-inquiry",
        element: withSuspense(AdmissionInquiry as React.ComponentType),
      },
      {
        path: "events",
        element: withSuspense(Events as React.ComponentType),
      },
      {
        path: "portals",
        element: withSuspense(Portals as React.ComponentType),
      },
      {
        path: "faculty-portal",
        element: withSuspense(Faculty as React.ComponentType),
      },
      {
        path: "student-portal",
        element: withSuspense(Student as React.ComponentType),
      },
      {
        path: "portal/student/*",
        element: withSuspense(StudentPortal as React.ComponentType),
      },
      {
        path: "parent-portal",
        element: withSuspense(Parent as React.ComponentType),
      },
      {
        path: "portal/parent/*",
        element: withSuspense(ParentPortal as React.ComponentType),
      },
      {
        path: "curiosity-corner",
        element: withSuspense(CuriosityCorner as React.ComponentType),
      },
      {
        path: "resources",
        element: withSuspense(Resources as React.ComponentType),
      },
      {
        path: "extracurricular",
        element: withSuspense(ExtracurricularActivities as React.ComponentType),
      },
      {
        path: "alumni",
        element: withSuspense(AlumniSection as React.ComponentType),
      },
      {
        path: "library",
        element: withSuspense(Library as React.ComponentType),
      },
      {
        path: "events-calendar",
        element: withSuspense(EventsCalendar as React.ComponentType),
      },
      {
        path: "faq",
        element: withSuspense(FAQ as React.ComponentType),
      },
      {
        path: "*",
        element: withSuspense(NotFound as React.ComponentType),
      },
    ],
  },
]);
