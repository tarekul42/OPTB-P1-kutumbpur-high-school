interface MessageModalProps {
  teacherName: string | undefined;
  messageForm: { subject: string; message: string };
  onFormChange: (form: { subject: string; message: string }) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
}

const MessageModal = ({
  teacherName,
  messageForm,
  onFormChange,
  onSubmit,
  onClose,
}: MessageModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-serif font-bold text-secondary-900">Send Message</h3>
            <p className="text-sm text-slate-500 mt-1">To: {teacherName}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Subject <span className="text-red-500">*</span>
            </label>
            <select
              value={messageForm.subject}
              onChange={(e) => onFormChange({ ...messageForm, subject: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
              required
            >
              <option value="">Select a subject</option>
              <option value="Academic Progress">Academic Progress</option>
              <option value="Attendance Concern">Attendance Concern</option>
              <option value="Homework/Assignments">Homework/Assignments</option>
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
              onChange={(e) => onFormChange({ ...messageForm, message: e.target.value })}
              rows={5}
              placeholder="Type your message here..."
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 resize-none"
              required
            ></textarea>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium cursor-pointer"
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
  );
};

export default MessageModal;
