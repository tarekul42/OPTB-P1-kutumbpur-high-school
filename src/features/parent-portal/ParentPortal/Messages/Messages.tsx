import { useState } from "react";
import { useParent } from "@/app/providers/contexts/ParentContext";
import { Subject } from "@/shared/types/user";
import MessageHeader from "./components/MessageHeader";
import TeacherGrid from "./components/TeacherGrid";
import ClassTeacherCard from "./components/ClassTeacherCard";
import ImportantNotice from "./components/ImportantNotice";
import MessageModal from "./components/MessageModal";

interface TeacherItem extends Subject {
  name: string;
}

const Messages: React.FC = () => {
  const { selectedChild, sendMessage } = useParent();
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherItem | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [messageForm, setMessageForm] = useState({
    subject: "",
    message: "",
  });

  const openMessageModal = (teacher: TeacherItem) => {
    setSelectedTeacher(teacher);
    setMessageForm({ subject: "", message: "" });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTeacher(null);
    setMessageForm({ subject: "", message: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedTeacher && messageForm.subject && messageForm.message) {
      sendMessage(selectedTeacher.teacher);
      closeModal();
    }
  };

  return (
    <div className="space-y-6">
      <MessageHeader
        name={selectedChild.name}
        photo={selectedChild.photo}
        className={selectedChild.class}
        classTeacher={selectedChild.classTeacher}
      />

      <TeacherGrid
        subjects={selectedChild.subjects}
        onMessageTeacher={(t) => openMessageModal(t as TeacherItem)}
      />

      <ClassTeacherCard
        classTeacher={selectedChild.classTeacher}
        className={selectedChild.class}
        onContact={() =>
          openMessageModal({
            name: selectedChild.class,
            teacher: selectedChild.classTeacher,
            email: "classteacher@school.edu",
          })
        }
      />

      <ImportantNotice />

      {showModal && (
        <MessageModal
          teacherName={selectedTeacher?.teacher}
          messageForm={messageForm}
          onFormChange={setMessageForm}
          onSubmit={handleSubmit}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Messages;
