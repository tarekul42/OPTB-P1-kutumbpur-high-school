import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { studentService } from "../../services/api";

const StudentContext = createContext();

let notificationIdCounter = 0;

export const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState(null);
  const [assignments, setAssignments] = useState([]);
  const [scheduleData, setScheduleData] = useState([]);
  const [attendanceData, setAttendanceData] = useState(null);
  const [noticeBoard, setNoticeBoard] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [
          profileRes,
          assignmentsRes,
          scheduleRes,
          attendanceRes,
          noticesRes,
        ] = await Promise.all([
          studentService.getProfile(),
          studentService.getAssignments(),
          studentService.getSchedule(),
          studentService.getAttendance(),
          studentService.getNotices(),
        ]);

        setStudent(profileRes);
        setAssignments(assignmentsRes);
        setScheduleData(scheduleRes);
        setAttendanceData(attendanceRes);
        setNoticeBoard(noticesRes);
      } catch (err) {
        console.error("Failed to fetch student data:", err);
        setError("Failed to load student dashboard. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn]);

  const addNotification = useCallback((notification) => {
    setNotifications((prev) => [...prev, notification]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== notification.id));
    }, 5000);
  }, []);

  const submitAssignment = useCallback(
    async (assignmentId) => {
      // Store previous state for rollback
      const previousAssignments = [...assignments];

      // Optimistic update
      setAssignments((prev) =>
        prev.map((assignment) =>
          assignment.id === assignmentId
            ? {
                ...assignment,
                status: "Submitted",
                submittedDate: new Date().toISOString().split("T")[0],
              }
            : assignment,
        ),
      );

      try {
        await studentService.submitAssignment(assignmentId);
        notificationIdCounter += 1;
        addNotification({
          id: notificationIdCounter,
          type: "success",
          message: "Assignment submitted successfully!",
        });
      } catch (err) {
        // Revert optimistic update on error
        console.error("Submission failed:", err);
        setAssignments(previousAssignments);

        notificationIdCounter += 1;
        addNotification({
          id: notificationIdCounter,
          type: "error",
          message: "Failed to submit assignment. Please try again.",
        });
      }
    },
    [assignments, addNotification],
  );

  const pendingAssignments = useMemo(
    () => assignments.filter((a) => a.status === "Pending"),
    [assignments],
  );
  const submittedAssignments = useMemo(
    () => assignments.filter((a) => a.status === "Submitted"),
    [assignments],
  );

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setStudent(null);
    setAssignments([]);
  }, []);

  const value = useMemo(
    () => ({
      student,
      assignments,
      scheduleData,
      attendanceData,
      noticeBoard,
      isLoading,
      error,
      isLoggedIn,
      pendingAssignments,
      submittedAssignments,
      notifications,
      submitAssignment,
      addNotification,
      logout,
    }),
    [
      student,
      assignments,
      scheduleData,
      attendanceData,
      noticeBoard,
      isLoading,
      error,
      isLoggedIn,
      pendingAssignments,
      submittedAssignments,
      notifications,
      submitAssignment,
      addNotification,
      logout,
    ],
  );

  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  );
};

export const useStudent = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudent must be used within a StudentProvider");
  }
  return context;
};
