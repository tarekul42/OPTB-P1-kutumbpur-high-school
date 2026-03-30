import { useState } from "react";
import { faqs } from "../../shared/data/faq-data";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      <div className="relative bg-primary-900 overflow-hidden py-20">
        <div className="absolute inset-0 bg-linear-to-r from-primary-900 to-primary-800 animate-gradient"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-bold mb-6 drop-shadow-lg">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto font-medium drop-shadow-md">
              Find answers to common questions about admissions, academics, and
              student life at Kutumbpur High School.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border border-neutral-200"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0 text-accent-gold">{faq.icon}</div>
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {faq.question}
                    </h3>
                  </div>
                  <svg
                    className={`w-6 h-6 text-neutral-500 transform transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-neutral-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-neutral-600 mb-6">
            We're here to help! Contact our admission office for more
            information.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:info@kutumbpurhs.edu.bd"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-900 hover:bg-primary-950 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Us
            </a>
            <a
              href="tel:+8801234567890"
              className="inline-flex items-center px-6 py-3 border-slate-200 text-base font-medium rounded-md text-primary-900 bg-white hover:bg-slate-50 border transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
