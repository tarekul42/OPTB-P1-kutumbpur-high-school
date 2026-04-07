import { useState, useMemo } from "react";
import { useStudent } from "@/app/providers/StudentContext";
import type { Assignment } from "@/shared/types/user";
import AssignmentStats from "./components/AssignmentStats";
import AssignmentFilters from "./components/AssignmentFilters";
import AssignmentCard from "./components/AssignmentCard";
import UploadModal from "./components/UploadModal";

const Assignments = () => {
  const { assignments, submitAssignment } = useStudent();
  const [filter, setFilter] = useState("all");
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const filteredAssignments = useMemo(() => {
    let filtered = [...assignments];

    if (filter === "pending") {
      filtered = filtered.filter((a) => a.status === "Pending");
    } else if (filter === "submitted") {
      filtered = filtered.filter((a) => a.status === "Submitted");
    }

    return filtered.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
  }, [assignments, filter]);

  const openUploadModal = (assignment: Assignment) => {
    setSelectedAssignment(assignment);
    setSelectedFile(null);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedAssignment(null);
    setSelectedFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (selectedAssignment && selectedFile) {
      submitAssignment(selectedAssignment.id);
      closeModal();
    }
  };

  const pendingCount = assignments.filter((a) => a.status === "Pending").length;
  const submittedCount = assignments.filter((a) => a.status === "Submitted").length;

  return (
    <div className="space-y-6">
      <AssignmentStats
        pendingCount={pendingCount}
        submittedCount={submittedCount}
        totalCount={assignments.length}
      />

      <div className="bg-white rounded-2xl p-6 shadow-md">
        <AssignmentFilters filter={filter} onFilterChange={setFilter} />

        <div className="space-y-4">
          {filteredAssignments.length > 0 ? (
            filteredAssignments.map((assignment) => (
              <AssignmentCard
                key={assignment.id}
                assignment={assignment}
                onUpload={openUploadModal}
              />
            ))
          ) : (
            <div className="text-center py-12 text-slate-500">
              <svg className="w-16 h-16 mx-auto mb-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-lg font-medium">
                {filter === "pending"
                  ? "No pending assignments!"
                  : filter === "submitted"
                    ? "No submitted assignments yet!"
                    : "No assignments found!"}
              </p>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <UploadModal
          assignment={selectedAssignment}
          selectedFile={selectedFile}
          onFileChange={handleFileChange}
          onSubmit={handleSubmit}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Assignments;
