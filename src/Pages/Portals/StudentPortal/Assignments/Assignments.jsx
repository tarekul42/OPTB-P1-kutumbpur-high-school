import { useState, useMemo } from "react";
import { format, isPast, isToday, isTomorrow, addDays } from "date-fns";
import { useStudent } from "../../../Context/StudentContext";

const Assignments = () => {
  const { assignments, submitAssignment } = useStudent();
  const [filter, setFilter] = useState("all");
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const filteredAssignments = useMemo(() => {
    let filtered = [...assignments];
    
    if (filter === "pending") {
      filtered = filtered.filter((a) => a.status === "Pending");
    } else if (filter === "submitted") {
      filtered = filtered.filter((a) => a.status === "Submitted");
    }
    
    return filtered.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  }, [assignments, filter]);

  const getDueDateStatus = (dueDate, status) => {
    if (status === "Submitted") return { text: "Submitted", color: "text-accent-600", bg: "bg-accent-100" };
    
    const date = new Date(dueDate);
    if (isPast(date) && !isToday(date)) {
      return { text: "Overdue", color: "text-red-600", bg: "bg-red-100" };
    }
    if (isToday(date)) {
      return { text: "Due Today", color: "text-amber-600", bg: "bg-amber-100" };
    }
    if (isTomorrow(date)) {
      return { text: "Due Tomorrow", color: "text-orange-600", bg: "bg-orange-100" };
    }
    if (addDays(new Date(), 3) >= date) {
      return { text: "Due Soon", color: "text-blue-600", bg: "bg-blue-100" };
    }
    return { text: format(date, "MMM d, yyyy"), color: "text-slate-600", bg: "bg-slate-100" };
  };

  const openUploadModal = (assignment) => {
    setSelectedAssignment(assignment);
    setSelectedFile(null);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedAssignment(null);
    setSelectedFile(null);
  };

  const handleFileChange = (e) => {
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-secondary-500">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary-100 rounded-lg">
              <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{pendingCount}</p>
              <p className="text-sm text-slate-500">Pending Assignments</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent-500">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent-100 rounded-lg">
              <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{submittedCount}</p>
              <p className="text-sm text-slate-500">Submitted</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary-500">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary-100 rounded-lg">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{assignments.length}</p>
              <p className="text-sm text-slate-500">Total Assignments</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-serif font-bold text-primary-900">Assignments</h2>
          <div className="flex gap-2">
            {["all", "pending", "submitted"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  filter === status
                    ? "bg-primary-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredAssignments.length > 0 ? (
            filteredAssignments.map((assignment) => {
              const dueStatus = getDueDateStatus(assignment.dueDate, assignment.status);
              return (
                <div
                  key={assignment.id}
                  className={`p-5 rounded-xl border-2 transition-all ${
                    assignment.status === "Submitted"
                      ? "bg-accent-50 border-accent-200"
                      : "bg-slate-50 border-transparent hover:border-slate-200"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                          {assignment.subject}
                        </span>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${dueStatus.bg} ${dueStatus.color}`}>
                          {dueStatus.text}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg text-slate-800">{assignment.title}</h3>
                      <p className="text-sm text-slate-500 mt-1">{assignment.description}</p>
                      {assignment.status === "Submitted" && assignment.submittedDate && (
                        <p className="text-xs text-accent-600 mt-2">
                          Submitted on: {format(new Date(assignment.submittedDate), "MMMM d, yyyy")}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      {assignment.status === "Pending" ? (
                        <>
                          <span className={`text-sm ${dueStatus.color}`}>
                            Due: {format(new Date(assignment.dueDate), "MMM d, yyyy")}
                          </span>
                          <button
                            onClick={() => openUploadModal(assignment)}
                            className="px-4 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-950 transition-colors font-medium text-sm flex items-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            Upload
                          </button>
                        </>
                      ) : (
                        <span className="flex items-center gap-2 text-accent-600 font-medium">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Completed
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-slate-500">
              <svg className="w-16 h-16 mx-auto mb-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-lg font-medium">
                {filter === "pending" ? "No pending assignments!" : filter === "submitted" ? "No submitted assignments yet!" : "No assignments found!"}
              </p>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-serif font-bold text-primary-900">Submit Assignment</h3>
              <button onClick={closeModal} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {selectedAssignment && (
              <div className="mb-6">
                <div className="p-4 bg-slate-50 rounded-lg mb-4">
                  <p className="text-xs text-slate-500 mb-1">Assignment</p>
                  <p className="font-bold text-slate-800">{selectedAssignment.title}</p>
                  <p className="text-sm text-slate-500">{selectedAssignment.subject}</p>
                </div>

                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <svg className="w-10 h-10 mx-auto mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    {selectedFile ? (
                      <div>
                        <p className="font-medium text-slate-800">{selectedFile.name}</p>
                        <p className="text-sm text-slate-500 mt-1">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="font-medium text-slate-600">Click to upload your assignment</p>
                        <p className="text-sm text-slate-400 mt-1">PDF, DOC, JPG, or PNG (max 10MB)</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={closeModal}
                className="flex-1 px-4 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={!selectedFile}
                className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                  selectedFile
                    ? "bg-primary-900 text-white hover:bg-primary-950"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                Submit Assignment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;
