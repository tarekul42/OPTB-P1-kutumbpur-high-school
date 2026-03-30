import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
  type ReactNode,
} from "react";
import { studentService } from "@/shared/api/api";
import { Student, Assignment, Schedule, AttendanceData, Notice } from "@/shared/types/user";

interface StudentNotification {
  id: number;
  type: "success" | "error";
  message: string;
}

interface StudentContextType {
  student: Student | null;
  assignments: Assignment[];
  scheduleData: Schedule[];
  attendanceData: AttendanceData | null;
  noticeBoard: Notice[];
  isLoading: boolean;
  error: string | null;
  isLoggedIn: boolean;
  pendingAssignments: Assignment[];
  submittedAssignments: Assignment[];
  notifications: StudentNotification[];
  submitAssignment: (assignmentId: number) => Promise<void>;
  addNotification: (notification: StudentNotification) => void;
  logout: () => void;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

let notificationIdCounter = 0;

interface StudentProviderProps {
  children: ReactNode;
}

export const StudentProvider = ({
  children,
}: StudentProviderProps): React.JSX.Element => {
  const [student, setStudent] = useState<Student | null>(null);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [scheduleData, setScheduleData] = useState<Schedule[]>([]);
  const [attendanceData, setAttendanceData] = useState<AttendanceData | null>(null);
  const [noticeBoard, setNoticeBoard] = useState<Notice[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [notifications, setNotifications] = useState<StudentNotification[]>([]);

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

  const addNotification = useCallback(
    (notification: StudentNotification) => {
      setNotifications((prev) => [...prev, notification]);
      setTimeout(() => {
        setNotifications((prev) =>
          prev.filter((n) => n.id !== notification.id)
        );
      }, 5000);
    },
    []
  );

  const submitAssignment = useCallback(
    async (assignmentId: number) => {
      const previousAssignments = [...assignments];

      setAssignments((prev) =>
        prev.map((assignment) =>
          assignment.id === assignmentId
            ? {
                ...assignment,
                status: "Submitted" as const,
                submittedDate: new Date().toISOString().split("T")[0],
              } as Assignment
            : assignment
        )
      );

      try {
        await studentService.submitAssignment();
        notificationIdCounter += 1;
        addNotification({
          id: notificationIdCounter,
          type: "success",
          message: "Assignment submitted successfully!",
        });
      } catch (err) {
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
    [assignments, addNotification]
  );

  const pendingAssignments = useMemo(
    () => assignments.filter((a) => a.status === "Pending"),
    [assignments]
  );
  const submittedAssignments = useMemo(
    () => assignments.filter((a) => a.status === "Submitted"),
    [assignments]
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
    ]
  );

  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  );
};

export const useStudent = (): StudentContextType => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudent must be used within a StudentProvider");
  }
  return context;
};
