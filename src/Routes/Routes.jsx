import { lazy, Suspense } from "react";
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
  () => import("../Pages/Home/Testimonials/Testimonials"),
);

const Faculty = lazy(() => import("../Pages/Portals/Faculty/Faculty"));
const Student = lazy(() => import("../Pages/Portals/Student/Student"));
const Parent = lazy(() => import("../Pages/Portals/Parent/Parent"));
const StudentPortal = lazy(
  () => import("../Pages/Portals/StudentPortal/StudentPortal"),
);
const ParentPortal = lazy(
  () => import("../Pages/Portals/ParentPortal/ParentPortal"),
);

const Resources = lazy(
  () => import("../Pages/CuriosityCorner/Resources/Resources"),
);
const ExtracurricularActivities = lazy(
  () =>
    import("../Pages/CuriosityCorner/ExtracurricularActivities/ExtracurricularActivities"),
);
const AlumniSection = lazy(
  () => import("../Pages/CuriosityCorner/AlumniSection/AlumniSection"),
);
const Library = lazy(() => import("../Pages/CuriosityCorner/Library/Library"));
const EventsCalendar = lazy(
  () => import("../Pages/CuriosityCorner/EventsCalendar/EventsCalendar"),
);

const FAQ = lazy(() => import("../Pages/FAQ/FAQ"));
const Academics = lazy(
  () => import("../Pages/EduAdventure/Academics/Academics"),
);
const Admissions = lazy(
  () => import("../Pages/EduAdventure/Admissions/Admissions"),
);
const AdmissionInquiry = lazy(
  () => import("../Pages/EduAdventure/Admissions/AdmissionInquiry"),
);
const Events = lazy(() => import("../Pages/EduAdventure/Events/Events"));
const CuriosityCorner = lazy(
  () => import("../Pages/CuriosityCorner/CuriosityCorner/CuriosityCorner"),
);
const EduAdventure = lazy(
  () => import("../Pages/EduAdventure/EduAdventure/EduAdventure"),
);
const Portals = lazy(() => import("../Pages/Portals/Portals/Portals"));

const withSuspense = (Component) => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <SEO />
        <MainUserLayout />
        <SearchModal />
      </>
    ),
    children: [
      {
        path: "/",
        element: withSuspense(Home),
      },
      {
        path: "about",
        element: withSuspense(AboutUs),
      },
      {
        path: "contact",
        element: withSuspense(Contact),
      },
      {
        path: "updates",
        element: withSuspense(Updates),
      },
      {
        path: "testimonials",
        element: withSuspense(Testimonials),
      },
      {
        path: "edu-adventure",
        element: withSuspense(EduAdventure),
      },
      {
        path: "academics",
        element: withSuspense(Academics),
      },
      {
        path: "admissions",
        element: withSuspense(Admissions),
      },
      {
        path: "admission-inquiry",
        element: withSuspense(AdmissionInquiry),
      },
      {
        path: "events",
        element: withSuspense(Events),
      },
      {
        path: "portals",
        element: withSuspense(Portals),
      },
      {
        path: "faculty-portal",
        element: withSuspense(Faculty),
      },
      {
        path: "student-portal",
        element: withSuspense(Student),
      },
      {
        path: "portal/student/*",
        element: withSuspense(StudentPortal),
      },
      {
        path: "parent-portal",
        element: withSuspense(Parent),
      },
      {
        path: "portal/parent/*",
        element: withSuspense(ParentPortal),
      },
      {
        path: "curiosity-corner",
        element: withSuspense(CuriosityCorner),
      },
      {
        path: "resources",
        element: withSuspense(Resources),
      },
      {
        path: "extracurricular",
        element: withSuspense(ExtracurricularActivities),
      },
      {
        path: "alumni",
        element: withSuspense(AlumniSection),
      },
      {
        path: "library",
        element: withSuspense(Library),
      },
      {
        path: "events-calendar",
        element: withSuspense(EventsCalendar),
      },
      {
        path: "faq",
        element: withSuspense(FAQ),
      },
    ],
  },
]);
