import FacultyHero from "./components/FacultyHero";
import FacultyLoginForm from "./components/FacultyLoginForm";
import FacultyPortalSidebar from "./components/FacultyPortalSidebar";

const Faculty = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      <FacultyHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FacultyLoginForm />
          <FacultyPortalSidebar />
        </div>
      </div>
    </div>
  );
};

export default Faculty;
