import {
  studentProfile,
  attendanceData,
  noticeBoard,
} from "../data/studentData";
import { initialAssignments } from "../data/assignmentsData";
import { scheduleData } from "../data/scheduleData";

const DELAY = 800; // Simulate network latency

const mockDelay = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, DELAY);
  });
};

export const studentService = {
  getProfile: () => mockDelay(studentProfile),
  getAttendance: () => mockDelay(attendanceData),
  getNotices: () => mockDelay(noticeBoard),
  getAssignments: () => mockDelay(initialAssignments),
  getSchedule: () => mockDelay(scheduleData),

  // Simulate a write operation
  submitAssignment: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Assignment submitted successfully",
        });
      }, DELAY);
    });
  },
};
