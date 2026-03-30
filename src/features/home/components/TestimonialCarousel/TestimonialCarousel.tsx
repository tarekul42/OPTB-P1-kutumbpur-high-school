import { useState } from "react";
import { Testimonial } from "@/shared/types/common";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-accent-gold"
                  />
                  <p className="text-lg md:text-xl text-slate-600 italic mb-6 leading-relaxed">
                    "{testimonial.quote || testimonial.content}"
                  </p>
                  <h4 className="text-xl font-bold text-neutral-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-accent-gold font-semibold">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-slate-50 transition-colors cursor-pointer"
        aria-label="Previous testimonial"
      >
        <svg
          className="w-6 h-6 text-primary-900"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-slate-50 transition-colors cursor-pointer"
        aria-label="Next testimonial"
      >
        <svg
          className="w-6 h-6 text-primary-900"
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
      </button>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
              currentIndex === index
                ? "bg-accent-gold w-8"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
