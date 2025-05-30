import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Dr. Sarah Johnson",
            role: "Parent",
            content: "The school's commitment to academic excellence and holistic development has been remarkable. My children have grown not just academically, but as confident individuals.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            name: "Rajesh Kumar",
            role: "Alumni",
            content: "The foundation I received at Kutumbpur High School has been instrumental in my success. The teachers' dedication and the school's values continue to guide me.",
            image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            name: "Priya Sharma",
            role: "Current Student",
            content: "The school provides an amazing learning environment. The teachers are supportive, and there are numerous opportunities to explore our interests.",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
    ];

    const achievements = [
        {
            title: "Academic Excellence",
            description: "Consistently high board examination results with 95% pass rate",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            title: "Sports Achievements",
            description: "Multiple district and state level championships in various sports",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "Cultural Events",
            description: "Regular recognition in inter-school cultural competitions",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-6">Testimonials</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Hear from our students, parents, and alumni about their experiences at Kutumbpur High School.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105">
                            <div className="flex items-center mb-6">
                                <img
                                    className="h-12 w-12 rounded-full"
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                />
                                <div className="ml-4">
                                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                                    <p className="text-gray-600">{testimonial.role}</p>
                                </div>
                            </div>
                            <div className="relative">
                                <svg
                                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                                <p className="relative text-gray-600 pl-8">{testimonial.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Achievements Section */}
                <div className="bg-white rounded-xl shadow-lg p-12">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Achievements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center text-blue-600 mb-4">
                                    {achievement.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                                <p className="text-gray-600">{achievement.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Success Story</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Be a part of our community and experience the excellence of Kutumbpur High School.
                    </p>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials; 