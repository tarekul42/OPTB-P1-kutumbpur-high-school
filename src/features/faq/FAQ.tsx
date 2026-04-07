import { useState } from "react";
import { faqs } from "../../shared/data/faq-data";
import { Hero, SectionHeader, Card, Button } from "@/shared/ui";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      <Hero
        title="Frequently Asked Questions"
        description="Find answers to common questions about admissions, academics, and student life at Kutumbpur High School."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              hoverable
              className="overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none cursor-pointer"
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
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <SectionHeader
            title="Still have questions?"
            description="We're here to help! Contact our admission office for more information."
          />
          <div className="flex justify-center space-x-4">
            <Button
              className="flex items-center"
              onClick={() => window.location.href = "mailto:info@kutumbpurhs.edu.bd"}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </Button>
            <Button
              variant="outline"
              className="flex items-center"
              onClick={() => window.location.href = "tel:+8801234567890"}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
