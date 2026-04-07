export interface MenuItem {
  label: string;
  link: string;
}

export interface MenuConfig {
  title: string;
  key: string;
  items: MenuItem[];
}

export const NAV_MENU_CONFIG: MenuConfig[] = [
  {
    title: "Home",
    key: "home",
    items: [
      { label: "About Us", link: "/about" },
      { label: "Contact", link: "/contact" },
      { label: "Updates", link: "/updates" },
      { label: "Testimonials", link: "/testimonials" },
    ],
  },
  {
    title: "Edu Adventure",
    key: "edu",
    items: [
      { label: "Academics", link: "/academics" },
      { label: "Admissions", link: "/admissions" },
      { label: "Admission Inquiry", link: "/admission-inquiry" },
      { label: "Events", link: "/events" },
    ],
  },
  {
    title: "Portals",
    key: "portals",
    items: [
      { label: "Faculty Portal", link: "/faculty-portal" },
      { label: "Student Portal", link: "/student-portal" },
      { label: "Parent Portal", link: "/parent-portal" },
    ],
  },
  {
    title: "Curiosity Corner",
    key: "curiosity",
    items: [
      { label: "Resources", link: "/resources" },
      { label: "Extracurricular Activities", link: "/extracurricular" },
      { label: "Alumni Section", link: "/alumni" },
      { label: "Library", link: "/library" },
      { label: "Events Calendar", link: "/events-calendar" },
    ],
  },
];
