import { FormInput } from "@/shared/ui";
import { classOptions } from "@/shared/lib/validationSchemas";
import type { UseFormRegister, FieldErrors } from "react-hook-form";

interface AdmissionFormData {
  studentName: string;
  guardianName: string;
  email: string;
  phone: string;
  applyingForClass: string;
  previousSchool: string;
}

interface AdmissionFormProps {
  register: UseFormRegister<AdmissionFormData>;
  errors: FieldErrors<AdmissionFormData>;
  isSubmitting: boolean;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const AdmissionForm = ({ register, errors, isSubmitting, onSubmit }: AdmissionFormProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
      <div className="mb-8 pb-6 border-b border-slate-200">
        <h2 className="text-2xl font-serif font-bold text-primary-900 mb-2">
          Student Information
        </h2>
        <p className="text-slate-500">
          Please provide accurate details for the admission inquiry. All fields marked with * are
          required.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            By submitting this form, you agree to be contacted by our admissions team.
          </p>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
