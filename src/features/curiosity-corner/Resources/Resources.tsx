import { studyMaterials } from "@/shared/data/academicData";
import { digitalResources } from "@/shared/data/booksData";
import { Hero, Card, SectionHeader, ListItem } from "@/shared/ui";

const Resources = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      <Hero
        title="Digital Resources"
        description="Empowering students with 21st-century learning tools. Access PSC, JSC, and SSC board preparation materials."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-20">
          <SectionHeader
            title="Board Preparation Materials"
            align="center"
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studyMaterials.map((subject, index) => (
              <Card
                key={index}
                hoverable
                className="p-8 group"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-accent-gold/20 transition-colors">
                  {subject.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">
                  {subject.title}
                </h3>
                <p className="text-slate-600 mb-6">{subject.description}</p>
                <ul className="space-y-2">
                  {subject.resources.map((resource, idx) => (
                    <ListItem key={idx}>
                      {resource}
                    </ListItem>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <SectionHeader
            title="Digital Resources"
            align="left"
            className="mb-8"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {digitalResources.map((resource, index) => (
              <Card
                key={index}
                hoverable
                className="p-8 group"
              >
                <div className="text-accent-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-primary-900 mb-4">
                  {resource.title}
                </h3>
                <p className="text-neutral-600">{resource.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-12 border border-slate-200">
          <SectionHeader
            title="Quick Portal Access"
            align="center"
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["E-Books", "Video Lectures", "Practice Tests", "Study Schedule"].map((item) => (
              <a
                key={item}
                href="#"
                className="flex items-center p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md border border-slate-100 transition duration-300 group"
              >
                <svg
                  className="w-6 h-6 text-accent-gold mr-3 transform group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <span className="text-primary-900 font-semibold italic">
                  {item}
                </span>
              </a>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Resources;
