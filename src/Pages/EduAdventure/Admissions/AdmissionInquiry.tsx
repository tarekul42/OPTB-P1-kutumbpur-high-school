import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import FormInput from "../../../Components/FormInput/FormInput";
import {
  admissionFormSchema,
  classOptions,
} from "../../../utils/validationSchemas";

const AdmissionInquiry: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(admissionFormSchema),
    mode: "onBlur",
    defaultValues: {
      studentName: "",
      guardianName: "",
      email: "",
      phone: "",
      applyingForClass: "",
      previousSchool: "",
    },
  });

  const onSubmit = async (data: Record<string, string>) => {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success(
      `Thank you for your interest! We have received ${data.studentName}'s admission inquiry. Our team will contact you shortly.`,
      {
        duration: 5000,
        position: "top-center",
        style: {
          background: "#059669",
          color: "#fff",
          padding: "16px",
          borderRadius: "12px",
          fontWeight: "600",
        },
      },
    );

    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-surface">
      <Toaster />

      <div className="relative bg-linear-to-r from-primary-900 via-primary-800 to-secondary-800 overflow-hidden py-20">
        <div className="absolute inset-0 bg-grid-white/5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-gold/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent-gold/5 blur-[100px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/20 rounded-full text-accent-gold text-sm font-medium mb-6">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            Admissions Open 2026
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
            Admission Inquiry
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
            Take the first step towards your child's bright future. Fill out the
            form below and our admissions team will guide you through the
            process.
          </p>
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-900 rounded-lg font-bold hover:bg-slate-100 transition-colors"
          >
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
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            View Admission Requirements
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <div className="mb-8 pb-6 border-b border-slate-200">
                <h2 className="text-2xl font-serif font-bold text-primary-900 mb-2">
                  Student Information
                </h2>
                <p className="text-slate-500">
                  Please provide accurate details for the admission inquiry. All
                  fields marked with * are required.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label="Student's Full Name"
                    name="studentName"
                    register={register}
                    errors={errors}
                    placeholder="Enter student's full name"
                    required
                    disabled={isSubmitting}
                  />

                  <FormInput
                    label="Applying for Class"
                    name="applyingForClass"
                    type="select"
                    register={register}
                    errors={errors}
                    options={classOptions}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label="Guardian's Full Name"
                    name="guardianName"
                    register={register}
                    errors={errors}
                    placeholder="Enter guardian's full name"
                    required
                    disabled={isSubmitting}
                  />

                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    register={register}
                    errors={errors}
                    placeholder="guardian.email@example.com"
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
                    label="Previous School"
                    name="previousSchool"
                    register={register}
                    errors={errors}
                    placeholder="Name of current/previous school"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitting
                        ? "bg-slate-400 cursor-not-allowed"
                        : "bg-linear-to-r from-primary-900 to-primary-800 hover:from-primary-800 hover:to-primary-700 hover:shadow-xl"
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-6 w-6"
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
                        Submitting Inquiry...
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Submit Inquiry
                      </>
                    )}
                  </button>
                  <p className="text-center text-sm text-slate-500 mt-4">
                    By submitting this form, you agree to be contacted by our
                    admissions team.
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-linear-to-br from-primary-900 to-primary-800 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-accent-gold"
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
                Classes Available
              </h3>
              <div className="space-y-3">
                {["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"].map(
                  (cls) => (
                    <div
                      key={cls}
                      className="flex items-center gap-3 p-3 bg-white/10 rounded-lg"
                    >
                      <div className="w-8 h-8 bg-accent-gold/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-accent-gold"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>{cls}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
              <h3 className="text-lg font-serif font-bold text-primary-900 mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-accent-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Admission Process
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Submit Inquiry",
                    desc: "Fill out the form",
                  },
                  {
                    step: "2",
                    title: "Get Callback",
                    desc: "Our team contacts you",
                  },
                  {
                    step: "3",
                    title: "Visit School",
                    desc: "Schedule a visit",
                  },
                  {
                    step: "4",
                    title: "Complete Admission",
                    desc: "Submit required documents",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary-900">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">
                        {item.title}
                      </p>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
              <h3 className="text-lg font-bold text-accent-800 mb-3 flex items-center gap-2">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Need Immediate Help?
              </h3>
              <p className="text-sm text-accent-700 mb-4">
                Call our admissions hotline during office hours.
              </p>
              <a
                href="tel:+8801234567890"
                className="block w-full py-3 bg-accent-600 text-white text-center rounded-lg font-bold hover:bg-accent-700 transition-colors"
              >
                +880 1234 567890
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionInquiry;
