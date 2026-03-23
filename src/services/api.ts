import { studentProfile, attendanceData, noticeBoard, initialAssignments, scheduleData } from "../data/studentData";
import { Student, AttendanceData, Notice, Assignment, Schedule } from "../types/user";

const DELAY = 800;

const mockDelay = <T,>(data: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), DELAY);
  });
};

export const studentService = {
  getProfile: (): Promise<Student> => mockDelay(studentProfile),
  getAttendance: (): Promise<AttendanceData> => mockDelay(attendanceData),
  getNotices: (): Promise<Notice[]> => mockDelay(noticeBoard),
  getAssignments: (): Promise<Assignment[]> => mockDelay(initialAssignments),
  getSchedule: (): Promise<Schedule[]> => mockDelay(scheduleData),
  submitAssignment: (): Promise<{ success: boolean; message: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true, message: "Assignment submitted successfully" }), DELAY);
    });
  },
};
