import { createBrowserRouter } from "react-router-dom";
import MainUserLayout from "../Layouts/MainUserLayout/MainUserLayout";
// import Test from "../Components/Test/Test";
import Home from "../Pages/Home/Home/Home";
import AboutUs from "../Pages/Home/AboutUs/AboutUs";
import Contact from "../Pages/Home/Contact/Contact";
import Updates from "../Pages/Home/Updates/Updates";
import Testimonials from "../Pages/Home/Testimonials/Testimonials";
import Faculty from "../Pages/Portals/Faculty/Faculty";
import Student from "../Pages/Portals/Student/Student";
import Parent from "../Pages/Portals/Parent/Parent";
import Resources from "../Pages/CuriosityCorner/Resources/Resources";
import ExtracurricularActivities from "../Pages/CuriosityCorner/ExtracurricularActivities/ExtracurricularActivities";
import AlumniSection from "../Pages/CuriosityCorner/AlumniSection/AlumniSection";
import Library from "../Pages/CuriosityCorner/Library/Library";
import EventsCalendar from "../Pages/CuriosityCorner/EventsCalendar/EventsCalendar";
import FAQ from "../Pages/FAQ/FAQ";
import Academics from "../Pages/EduAdventure/Academics/Academics";
import Admissions from "../Pages/EduAdventure/Admissions/Admissions";
import Events from "../Pages/EduAdventure/Events/Events";
import CuriosityCorner from "../Pages/CuriosityCorner/CuriosityCorner/CuriosityCorner";
import EduAdventure from "../Pages/EduAdventure/EduAdventure/EduAdventure";
import Portals from "../Pages/Portals/Portals/Portals";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainUserLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "updates",
        element: <Updates />,
      },
      {
        path: "testimonials",
        element: <Testimonials />,
      },
      {
        path: "edu-adventure",
        element: <EduAdventure />,
      },
      {
        path: "academics",
        element: <Academics />,
      },
      {
        path: "admissions",
        element: <Admissions />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "portals",
        element: <Portals />,
      },
      {
        path: "faculty-portal",
        element: <Faculty />,
      },
      {
        path: "student-portal",
        element: <Student />,
      },
      {
        path: "parent-portal",
        element: <Parent />,
      },
      {
        path: "curiosity-corner",
        element: <CuriosityCorner />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "extracurricular",
        element: <ExtracurricularActivities />,
      },
      {
        path: "alumni",
        element: <AlumniSection />,
      },
      {
        path: "library",
        element: <Library />,
      },
      {
        path: "events-calendar",
        element: <EventsCalendar />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
    ],
  },
]);
