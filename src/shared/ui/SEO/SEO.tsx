import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOData {
  title: string;
  description: string;
  keywords: string;
}

const SEO_DATA: Record<string, SEOData> = {
  "/": {
    title: "Kutumbpur High School | Excellence in Education",
    description:
      "Official digital portal of Kutumbpur High School, Chandina, Cumilla. Empowering students with knowledge, values, and excellence in education since 1985.",
    keywords:
      "Kutumbpur High School, Kutumbpur, Chandina, Cumilla, school, education, SSC, Bangladesh school",
  },
  "/about": {
    title: "About Us | Kutumbpur High School",
    description:
      "Learn about Kutumbpur High School's mission, vision, and commitment to academic excellence. Discover our history, facilities, and dedicated faculty.",
    keywords:
      "about school, Kutumbpur school history, school mission, education excellence",
  },
  "/contact": {
    title: "Contact Us | Kutumbpur High School",
    description:
      "Get in touch with Kutumbpur High School. Find our address, phone number, email, and office hours. We're here to help with any inquiries.",
    keywords: "contact school, school address, school phone, school email",
  },
  "/updates": {
    title: "News & Updates | Kutumbpur High School",
    description:
      "Stay updated with the latest news, events, and announcements from Kutumbpur High School.",
    keywords: "school news, school events, announcements, latest updates",
  },
  "/testimonials": {
    title: "Testimonials | Kutumbpur High School",
    description:
      "Read what parents, alumni, and students say about their experience at Kutumbpur High School.",
    keywords: "parent reviews, alumni stories, school testimonials",
  },
  "/edu-adventure": {
    title: "Edu Adventure | Kutumbpur High School",
    description:
      "Explore the educational journey at Kutumbpur High School. Discover our academic programs, admission process, and upcoming events.",
    keywords: "edu adventure, academic programs, school events",
  },
  "/academics": {
    title: "Academics | Kutumbpur High School",
    description:
      "Learn about our comprehensive academic curriculum for Classes 6-10, including Science, Humanities, and Commerce streams.",
    keywords: "academic programs, class 6-10, SSC preparation, science stream",
  },
  "/admissions": {
    title: "Admissions | Kutumbpur High School",
    description:
      "Apply for admission to Kutumbpur High School. Learn about eligibility, requirements, and the admission process for the 2026 academic year.",
    keywords: "admission, apply, enrollment, school admission 2026",
  },
  "/admission-inquiry": {
    title: "Admission Inquiry | Kutumbpur High School",
    description:
      "Submit an inquiry for admission to Kutumbpur High School. Our team will guide you through the process.",
    keywords: "admission inquiry, enrollment, school admission",
  },
  "/events": {
    title: "Events | Kutumbpur High School",
    description:
      "Discover upcoming and past events at Kutumbpur High School. Cultural festivals, sports, science fairs, and more.",
    keywords: "school events, cultural festival, sports, science fair",
  },
  "/portals": {
    title: "Portals | Kutumbpur High School",
    description:
      "Access the student and parent portals for Kutumbpur High School. View results, attendance, and communicate with teachers.",
    keywords: "student portal, parent portal, online result, attendance",
  },
  "/faculty-portal": {
    title: "Faculty Portal | Kutumbpur High School",
    description:
      "Faculty members can access teaching resources, manage attendance, and track student progress.",
    keywords: "teacher portal, faculty resources, attendance management",
  },
  "/student-portal": {
    title: "Student Portal | Kutumbpur High School",
    description:
      "Students can access their academic schedule, assignments, results, and more through the Kutumbpur High School student portal.",
    keywords: "student dashboard, class schedule, assignments, student results",
  },
  "/parent-portal": {
    title: "Parent Portal | Kutumbpur High School",
    description:
      "Parents can monitor their child's attendance, view results, manage fees, and communicate with teachers.",
    keywords:
      "parent dashboard, child attendance, school fees, parent communication",
  },
  "/curiosity-corner": {
    title: "Curiosity Corner | Kutumbpur High School",
    description:
      "Explore our curiosity corner with digital resources, library, extracurricular activities, and alumni stories.",
    keywords: "digital resources, library, extracurricular, alumni",
  },
  "/resources": {
    title: "Digital Resources | Kutumbpur High School",
    description:
      "Access digital learning resources, study materials, and educational content at Kutumbpur High School.",
    keywords: "digital resources, study materials, learning content",
  },
  "/extracurricular": {
    title: "Extracurricular Activities | Kutumbpur High School",
    description:
      "Discover the diverse extracurricular activities at Kutumbpur High School including sports, arts, and clubs.",
    keywords: "sports, arts, clubs, extracurricular activities",
  },
  "/alumni": {
    title: "Alumni | Kutumbpur High School",
    description:
      "Connect with Kutumbpur High School alumni. Share your success stories and stay connected with your alma mater.",
    keywords: "alumni, alumni stories, school alumni network",
  },
  "/library": {
    title: "Library | Kutumbpur High School",
    description:
      "Browse our extensive collection of books and digital resources at the Kutumbpur High School Library.",
    keywords: "library, books, digital resources, reading",
  },
  "/events-calendar": {
    title: "Events Calendar | Kutumbpur High School",
    description:
      "View the school calendar with important dates, holidays, and events at Kutumbpur High School.",
    keywords: "school calendar, holidays, important dates, Bangladesh holidays",
  },
  "/faq": {
    title: "FAQ | Kutumbpur High School",
    description:
      "Find answers to frequently asked questions about Kutumbpur High School, admissions, and academic programs.",
    keywords: "faq, frequently asked questions, school information",
  },
};

const DEFAULT_SEO: SEOData = {
  title: "Kutumbpur High School | Excellence in Education",
  description:
    "Official digital portal of Kutumbpur High School, Chandina, Cumilla. Empowering students with knowledge, values, and excellence.",
  keywords:
    "Kutumbpur High School, Chandina, Cumilla, school, education, Bangladesh",
};

const SEO = (): null => {
  const location = useLocation();
  const pathKey = Object.keys(SEO_DATA).find(
    (path) =>
      location.pathname === path || location.pathname.startsWith(path + "/"),
  );
  const seoData = SEO_DATA[pathKey as keyof typeof SEO_DATA] || DEFAULT_SEO;

  useEffect(() => {
    document.title = seoData.title;

    const updateMetaTag = (name: string, content: string): void => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateMetaTag("description", seoData.description);
    updateMetaTag("keywords", seoData.keywords);

    updateMetaTag("og:title", seoData.title);
    updateMetaTag("og:description", seoData.description);
    updateMetaTag("og:url", window.location.href);
    updateMetaTag("og:type", "website");

    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", seoData.title);
    updateMetaTag("twitter:description", seoData.description);
  }, [seoData, location.pathname]);

  return null;
};

export default SEO;
