import type { Assignment } from "@/shared/types/user";

interface UploadModalProps {
  assignment: Assignment | null;
  selectedFile: File | null;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onClose: () => void;
}

const UploadModal = ({
  assignment,
  selectedFile,
  onFileChange,
  onSubmit,
  onClose,
}: UploadModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-serif font-bold text-primary-900">Submit Assignment</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
            <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {assignment && (
          <div className="mb-6">
            <div className="p-4 bg-slate-50 rounded-lg mb-4">
              <p className="text-xs text-slate-500 mb-1">Assignment</p>
              <p className="font-bold text-slate-800">{assignment.title}</p>
              <p className="text-sm text-slate-500">{assignment.subject}</p>
            </div>

            <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={onFileChange}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <svg
                  className="w-10 h-10 mx-auto mb-3 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
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
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            disabled={!selectedFile}
            className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors cursor-pointer ${
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
  );
};

export default UploadModal;
