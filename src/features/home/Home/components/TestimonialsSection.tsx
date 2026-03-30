import { homeTestimonials } from "@/shared/data/homeData";
import TestimonialCarousel from "@/features/home/components/TestimonialCarousel";

const TestimonialsSection: React.FC = () => {
  return (
    <div className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            What Parents Say
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Hear from our community about their experiences
          </p>
        </div>
        <TestimonialCarousel testimonials={homeTestimonials} />
      </div>
    </div>
  );
};

export default TestimonialsSection;
