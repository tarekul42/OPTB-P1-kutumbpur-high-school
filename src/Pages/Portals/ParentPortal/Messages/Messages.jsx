import { useState } from "react";
import { useParent } from "../../../context/ParentContext";
import Badge from "../../../Components/UI/Badge";

const Messages = () => {
  const { selectedChild, sendMessage } = useParent();
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [messageForm, setMessageForm] = useState({
    subject: "",
    message: "",
  });

  const openMessageModal = (teacher) => {
    setSelectedTeacher(teacher);
    setMessageForm({ subject: "", message: "" });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTeacher(null);
    setMessageForm({ subject: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTeacher && messageForm.subject && messageForm.message) {
      sendMessage(
        selectedTeacher.teacher,
        messageForm.subject,
        messageForm.message,
      );
      closeModal();
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-linear-to-r from-secondary-800 to-secondary-700 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-center gap-4">
          <img
            src={selectedChild.photo}
            alt={selectedChild.name}
            className="w-16 h-16 rounded-full object-cover border-4 border-accent-gold"
          />
          <div>
            <p className="text-secondary-200 text-sm">Messaging about</p>
            <h2 className="text-xl font-serif font-bold">
              {selectedChild.name}
            </h2>
            <p className="text-secondary-200 text-sm">
              {selectedChild.class} | Class Teacher:{" "}
              {selectedChild.classTeacher}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-serif font-bold text-secondary-900">
              Subject Teachers
            </h2>
            <p className="text-slate-500 mt-1">
              Contact your child&apos;s subject teachers directly
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedChild.subjects.map((subject, index) => (
            <div
              key={index}
              className="p-5 bg-slate-50 rounded-xl border border-slate-200 hover:border-secondary-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 bg-secondary-100 rounded-lg">
                  <svg
                    className="w-5 h-5 text-secondary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <Badge>{subject.name}</Badge>
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">
                {subject.teacher}
              </h3>
              <p className="text-sm text-slate-500 mb-4">{subject.email}</p>
              <button
                onClick={() => openMessageModal(subject)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-secondary-800 text-white rounded-lg hover:bg-secondary-900 transition-colors text-sm font-medium"
              >
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
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                Send Message
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="font-serif font-bold text-lg text-secondary-900 mb-4">
          Contact Class Teacher
        </h3>
        <div className="p-4 bg-accent-50 rounded-xl border border-accent-200">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent-100 rounded-lg">
              <svg
                className="w-6 h-6 text-accent-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-bold text-slate-800">
                {selectedChild.classTeacher}
              </p>
              <p className="text-sm text-slate-500">
                Class Teacher - {selectedChild.class}
              </p>
            </div>
            <button
              onClick={() =>
                openMessageModal({
                  name: selectedChild.class,
                  teacher: selectedChild.classTeacher,
                  email: "classteacher@school.edu",
                })
              }
              className="px-4 py-2 bg-secondary-800 text-white rounded-lg hover:bg-secondary-900 transition-colors text-sm font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-amber-100 rounded-lg">
            <svg
              className="w-6 h-6 text-amber-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-amber-900">Important Notice</h4>
            <p className="text-sm text-amber-700 mt-1">
              For urgent matters or emergencies, please contact the school
              office directly at +880 1XXX-XXXXXX. Messages through this portal
              are typically responded to within 24-48 hours during school days.
            </p>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-secondary-900">
                  Send Message
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  To: {selectedTeacher?.teacher}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  value={messageForm.subject}
                  onChange={(e) =>
                    setMessageForm({ ...messageForm, subject: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="Academic Progress">Academic Progress</option>
                  <option value="Attendance Concern">Attendance Concern</option>
                  <option value="Homework/Assignments">
                    Homework/Assignments
                  </option>
                  <option value="Exam Results">Exam Results</option>
                  <option value="Class Behavior">Class Behavior</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={messageForm.message}
                  onChange={(e) =>
                    setMessageForm({ ...messageForm, message: e.target.value })
                  }
                  rows={5}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 resize-none"
                  required
                ></textarea>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!messageForm.subject || !messageForm.message}
                  className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
                    messageForm.subject && messageForm.message
                      ? "bg-secondary-800 text-white hover:bg-secondary-900"
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
