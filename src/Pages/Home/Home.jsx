import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const features = [
        {
            title: "Academic Excellence",
            description: "Comprehensive curriculum designed to nurture intellectual growth and critical thinking",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            title: "Holistic Development",
            description: "Focus on physical, emotional, and social growth through diverse activities",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Modern Facilities",
            description: "State-of-the-art infrastructure supporting innovative learning experiences",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        }
    ];

    const programs = [
        {
            title: "Primary School",
            description: "Foundation years focusing on basic skills and character development",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            title: "Middle School",
            description: "Developing critical thinking and subject expertise",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            title: "High School",
            description: "Preparing for higher education and future careers",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        }
    ];

    const stats = [
        { number: "1000+", label: "Students" },
        { number: "50+", label: "Expert Teachers" },
        { number: "25+", label: "Years of Excellence" },
        { number: "95%", label: "Success Rate" }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Parent",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            quote: "The school's commitment to excellence and personalized attention has helped my child thrive academically and personally."
        },
        {
            name: "Michael Chen",
            role: "Alumni",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            quote: "The foundation I received here has been instrumental in my professional success. The teachers truly care about student development."
        }
    ];

    const news = [
        {
            title: "Annual Science Fair 2024",
            date: "March 15, 2024",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            excerpt: "Students showcase innovative projects at our annual science fair."
        },
        {
            title: "Sports Championship",
            date: "March 10, 2024",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            excerpt: "Our school team wins the regional sports championship."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section with Background Image */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
                    }}
                ></div>
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
                        Nurturing Minds,<br />
                        Building Futures
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
                        Empowering students with knowledge, skills, and values for a successful future
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-delay-2">
                        <Link to="/admissions" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 transform hover:scale-105">
                            Apply Now
                        </Link>
                        <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 transform hover:scale-105">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features Section with Animation */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover what makes our school the perfect place for your child's education
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition duration-300 hover:shadow-2xl">
                                <div className="text-blue-600 mb-6 transform hover:scale-110 transition duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Programs Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive education programs for every stage of learning
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                                    <div className="absolute bottom-0 p-6 text-white">
                                        <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                                        <p className="text-gray-200">{program.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Section with Animation */}
            <div className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center transform hover:scale-105 transition duration-300">
                                <div className="text-4xl md:text-6xl font-bold mb-2">{stat.number}</div>
                                <div className="text-blue-100 text-lg">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* News Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Stay updated with our latest events and achievements
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {news.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition duration-300">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <div className="text-blue-600 mb-2">{item.date}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.excerpt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section with Improved Design */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Parents Say</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Hear from our community about their experiences
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 transform hover:-translate-y-2 transition duration-300 hover:shadow-xl">
                                <div className="flex items-center mb-6">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100"
                                    />
                                    <div className="ml-4">
                                        <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-blue-600">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                        Take the first step towards a bright future for your child
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to="/admissions" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 transform hover:scale-105">
                            Apply Now
                        </Link>
                        <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 transform hover:scale-105">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home; 