import { Link } from "react-router-dom";

const CTASection: React.FC = () => {
  return (
    <div className="py-20 bg-linear-to-r from-primary-900 to-primary-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Join Our Community?
        </h2>
        <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
          Take the first step towards a bright future for your child
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/admissions"
            className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            Apply Now
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
