import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from "react-hot-toast";
import FormInput from "../../../Components/FormInput/FormInput";
import {
  contactFormSchema,
  subjectOptions,
} from "../../../utils/validationSchemas";
import type { InferType } from "zod";

type ContactFormData = InferType<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Message sent successfully! We will contact you soon.", {
      duration: 4000,
      position: "top-center",
      style: {
        background: "#059669",
        color: "#fff",
        padding: "16px",
        borderRadius: "12px",
        fontWeight: "600",
      },
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-surface">
      <Toaster />

      <div className="relative bg-primary-900 overflow-hidden py-20">
        <div className="absolute inset-0 bg-linear-to-r from-primary-900 to-primary-800 animate-gradient"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-gold/5 blur-[120px] rounded-full"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-bold mb-4 drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto font-medium drop-shadow-md">
              Get in touch with us. We're here to help and answer any questions
              you may have.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary-900 mb-2">
                Send us a Message
              </h2>
              <p className="text-slate-500">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Full Name"
                  name="fullName"
                  register={register}
                  errors={errors}
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                />

                <FormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  register={register}
                  errors={errors}
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  register={register}
                  errors={errors}
                  placeholder="01XXXXXXXXX"
                  required
                  disabled={isSubmitting}
                />

                <FormInput
                  label="Subject"
                  name="subject"
                  type="select"
                  register={register}
                  errors={errors}
                  options={subjectOptions}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <FormInput
                label="Message"
                name="message"
                type="textarea"
                register={register}
                errors={errors}
                placeholder="Tell us how we can help you..."
                rows={5}
                required
                disabled={isSubmitting}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? "bg-slate-400 cursor-not-allowed"
                    : "bg-primary-900 hover:bg-primary-950 hover:shadow-lg"
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="shrink-0 p-3 bg-accent-gold/10 rounded-lg">
                    <svg
                      className="h-6 w-6 text-accent-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-primary-900 mb-1">Address</p>
                    <p className="text-slate-600">
                      Kutumbpur High School
                      <br />
                      Chandina, Cumilla, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="shrink-0 p-3 bg-accent-gold/10 rounded-lg">
                    <svg
                      className="h-6 w-6 text-accent-gold"
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
                  </div>
                  <div>
                    <p className="font-bold text-primary-900 mb-1">Phone</p>
                    <p className="text-slate-600">+880 1234 567890</p>
                    <p className="text-slate-500 text-sm mt-1">
                      Office Hours: 10AM - 4PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="shrink-0 p-3 bg-accent-gold/10 rounded-lg">
                    <svg
                      className="h-6 w-6 text-accent-gold"
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
                  </div>
                  <div>
                    <p className="font-bold text-primary-900 mb-1">Email</p>
                    <p className="text-slate-600">
                      info@kutumbpurhighschool.edu.bd
                    </p>
                    <p className="text-slate-500 text-sm mt-1">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-primary-900 to-primary-800 rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-xl font-serif font-bold mb-4">
                Office Hours
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-slate-200">Sunday - Thursday</span>
                  <span className="font-bold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <span className="text-slate-200">Friday & Saturday</span>
                  <span className="font-bold text-accent-gold">
                    Weekly Holiday
                  </span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-accent-gold/20 rounded-xl border border-accent-gold/30">
                <p className="text-sm text-slate-200">
                  <strong className="text-accent-gold">Note:</strong> For urgent
                  matters, please call our office directly during working hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14631.831575886072!2d91.02542575!3d23.48902585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754719f9bb6c4db%3A0xe5a3c9f280a9163b!2sKutumbapur%2C%20Chandina%2C%20Cumilla!5e0!3m2!1sen!2sbd!4v1709340000000!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
