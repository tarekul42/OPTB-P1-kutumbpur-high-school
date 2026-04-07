import { Card } from "@/shared/ui";
import { digitalResources } from "@/shared/data/booksData";

const getFileIcon = (fileType: string) => {
  switch (fileType) {
    case "pdf":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      );
    case "mp4":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      );
    default:
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
  }
};

const fileTypeColors: Record<string, string> = {
  pdf: "text-red-500 bg-red-50",
  mp4: "text-blue-500 bg-blue-50",
  epub: "text-emerald-500 bg-emerald-50",
};

const DigitalResources = () => {
  return (
    <div className="border-t border-slate-200 pt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
          Digital Resources
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Access our collection of online tutorials, PDFs, and e-books to enhance
          your learning experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {digitalResources.map((resource) => (
          <a
            key={resource.id}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="p-6 border border-slate-200 hover:border-primary-300 shadow-sm transition-all duration-300 h-full">
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-xl ${fileTypeColors[resource.fileType] || "text-slate-500 bg-slate-50"} group-hover:scale-110 transition-transform`}
                >
                  {getFileIcon(resource.fileType)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 group-hover:text-primary-700 transition-colors truncate">
                      {resource.title}
                    </h3>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs font-medium rounded-full uppercase">
                      {resource.fileType}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mb-3 line-clamp-2">
                    {resource.description}
                  </p>
                  <div className="flex items-center text-primary-600 text-sm font-medium">
                    <span>Access Resource</span>
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DigitalResources;
