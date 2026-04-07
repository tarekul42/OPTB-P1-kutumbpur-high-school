import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from "react-hot-toast";
import { admissionFormSchema } from "@/shared/lib/validationSchemas";
import { z } from "zod";
import AdmissionHero from "./components/AdmissionHero";
import AdmissionForm from "./components/AdmissionForm";
import AdmissionSidebar from "./components/AdmissionSidebar";

type AdmissionFormData = z.infer<typeof admissionFormSchema>;

const AdmissionInquiry: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } =
    useForm<AdmissionFormData>({
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
      <AdmissionHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <AdmissionForm
              register={register}
              errors={errors}
              isSubmitting={isSubmitting}
              onSubmit={handleSubmit(onSubmit)}
            />
          </div>
          <AdmissionSidebar />
        </div>
      </div>
    </div>
  );
};

export default AdmissionInquiry;
