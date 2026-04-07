import { Card } from "@/shared/ui";
import { booksData } from "@/shared/data/booksData";

const libraryHours = [
  { label: "Saturday - Thursday", value: "8:00 AM - 3:00 PM", isRed: false },
  { label: "Friday", value: "Closed", isRed: true },
  { label: "Exam Season (Extended)", value: "Until 5:00 PM", isRed: false },
];

const LibraryStats = () => {
  return (
    <Card
      className="mt-16 bg-linear-to-r from-primary-50 to-primary-100 p-12 border border-primary-200"
      shadow="none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Library Hours */}
        <div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-900 mb-4">
            Library Hours
          </h3>
          <div className="space-y-4">
            {libraryHours.map(({ label, value, isRed }, idx) => (
              <div
                key={label}
                className={`flex justify-between items-center py-3 ${idx < libraryHours.length - 1 ? "border-b border-primary-200" : ""}`}
              >
                <span className="text-slate-700 font-medium">{label}</span>
                <span className={`font-bold ${isRed ? "text-red-600" : "text-primary-800"}`}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Book Count Stat */}
        <div className="text-center lg:text-right">
          <Card className="inline-block bg-white p-8 shadow-lg text-left" shadow="lg" border={false}>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-primary-100 rounded-xl">
                <svg
                  className="w-8 h-8 text-primary-600"
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
              </div>
              <div>
                <p className="text-4xl font-bold text-primary-900">{booksData.length}+</p>
                <p className="text-slate-600">Books Available</p>
              </div>
            </div>
            <p className="text-sm text-slate-500">
              Visit us to explore our growing collection of academic and fiction books
            </p>
          </Card>
        </div>
      </div>
    </Card>
  );
};

export default LibraryStats;
