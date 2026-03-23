import { lazy, Suspense, type ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainUserLayout from "../Layouts/MainUserLayout/MainUserLayout";
import LoadingFallback from "../Components/LoadingFallback/LoadingFallback";
import SEO from "../Components/SEO/SEO";
import SearchModal from "../Components/SearchModal/SearchModal";

const Home = lazy(() => import("../Pages/Home/Home/Home"));
const AboutUs = lazy(() => import("../Pages/Home/AboutUs/AboutUs"));
const Contact = lazy(() => import("../Pages/Home/Contact/Contact"));
const Updates = lazy(() => import("../Pages/Home/Updates/Updates"));
const Testimonials = lazy(
  () => import("../Pages/Home/Testimonials/Testimonials")
);

const Faculty = lazy(() => import("../Pages/Portals/Faculty/Faculty"));
const Student = lazy(() => import("../Pages/Portals/Student/Student"));
const Parent = lazy(() => import("../Pages/Portals/Parent/Parent"));
const StudentPortal = lazy(
  () => import("../Pages/Portals/StudentPortal/StudentPortal")
);
const ParentPortal = lazy(
  () => import("../Pages/Portals/ParentPortal/ParentPortal")
);

const Resources = lazy(
  () => import("../Pages/CuriosityCorner/Resources/Resources")
);
const ExtracurricularActivities = lazy(
  () =>
    import("../Pages/CuriosityCorner/ExtracurricularActivities/ExtracurricularActivities")
);
const AlumniSection = lazy(
  () => import("../Pages/CuriosityCorner/AlumniSection/AlumniSection")
);
const Library = lazy(() => import("../Pages/CuriosityCorner/Library/Library"));
const EventsCalendar = lazy(
  () => import("../Pages/CuriosityCorner/EventsCalendar/EventsCalendar")
);

const FAQ = lazy(() => import("../Pages/FAQ/FAQ"));
const Academics = lazy(
  () => import("../Pages/EduAdventure/Academics/Academics")
);
const Admissions = lazy(
  () => import("../Pages/EduAdventure/Admissions/Admissions")
);
const AdmissionInquiry = lazy(
  () => import("../Pages/EduAdventure/Admissions/AdmissionInquiry")
);
const Events = lazy(() => import("../Pages/EduAdventure/Events/Events"));
const CuriosityCorner = lazy(
  () => import("../Pages/CuriosityCorner/CuriosityCorner/CuriosityCorner")
);
const EduAdventure = lazy(
  () => import("../Pages/EduAdventure/EduAdventure/EduAdventure")
);
const Portals = lazy(() => import("../Pages/Portals/Portals/Portals"));

const withSuspense = (Component: React.ComponentType): ReactNode => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
);

const LayoutWrapper = ({ children }: { children: ReactNode }): JSX.Element => (
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
    ],
  },
]);
