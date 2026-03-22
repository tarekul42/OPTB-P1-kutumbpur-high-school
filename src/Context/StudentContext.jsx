import { createContext, useContext, useState, useCallback } from "react";
import { studentProfile } from "../../data/studentData";
import { initialAssignments } from "../../data/assignmentsData";

const StudentContext = createContext();

let notificationIdCounter = 0;

export const StudentProvider = ({ children }) => {
  const [student] = useState(studentProfile);
  const [assignments, setAssignments] = useState(initialAssignments);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((notification) => {
    setNotifications((prev) => [...prev, notification]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== notification.id));
    }, 5000);
  }, []);

  const submitAssignment = useCallback((assignmentId) => {
    setAssignments((prev) =>
      prev.map((assignment) =>
        assignment.id === assignmentId
          ? {
              ...assignment,
              status: "Submitted",
              submittedDate: new Date().toISOString().split("T")[0],
            }
          : assignment
      )
    );
    notificationIdCounter += 1;
    addNotification({
      id: notificationIdCounter,
      type: "success",
      message: "Assignment submitted successfully!",
    });
  }, [addNotification]);

  const pendingAssignments = assignments.filter((a) => a.status === "Pending");
  const submittedAssignments = assignments.filter((a) => a.status === "Submitted");

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <StudentContext.Provider
      value={{
        student,
        assignments,
        isLoggedIn,
        pendingAssignments,
        submittedAssignments,
        notifications,
        submitAssignment,
        addNotification,
        logout,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudent must be used within a StudentProvider");
  }
  return context;
};
