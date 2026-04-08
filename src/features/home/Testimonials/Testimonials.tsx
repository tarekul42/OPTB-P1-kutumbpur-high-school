import React from "react";
import { Hero, SectionHeader, Card, Button } from "@/shared/ui";
import { toast } from "react-hot-toast";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Class XII Student",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      quote:
        "The teachers at Kutumbpur High School have been incredibly supportive throughout my academic journey. Their dedication to excellence has helped me achieve my goals.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Parent",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      quote:
        "As a parent, I'm impressed by the school's commitment to holistic development. The balance of academics and extracurricular activities is perfect.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      role: "Alumni",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      quote:
        "The foundation I received at Kutumbpur High School has been instrumental in my success. The values and skills I learned here continue to guide me.",
      rating: 5,
    },
    {
      name: "Sneha Gupta",
      role: "Class X Student",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      quote:
        "The school's focus on practical learning and modern teaching methods has made education enjoyable and effective. I love being a part of this institution.",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      <Hero
        title="Testimonials"
        description="Hear what our students, parents, and alumni have to say about their experience at Kutumbpur High School."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              hoverable
              className="p-8 border border-neutral-200"
            >
              <div className="flex items-center mb-6">
                <img
                  className="h-16 w-16 rounded-full object-cover ring-4 ring-primary-100"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-neutral-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-neutral-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
              <p className="text-neutral-600 italic">"{testimonial.quote}"</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <SectionHeader
            title="Share Your Experience"
            description="We'd love to hear about your experience at Kutumbpur High School. Share your story and inspire others."
          />
          <Button size="lg" onClick={() => toast.success('Testimonial submission form coming soon!')}>
            Submit Your Testimonial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
