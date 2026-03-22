export const parentProfile = {
  id: "KHS-PARENT-001",
  name: "Mohammad Rahman",
  email: "rahman.family@email.com",
  phone: "+880 17XX-XXXXXX",
  occupation: "Business",
  address: "Village: Kutumbpur, Upazila: Burichang, District: Cumilla",
};

export const children = [
  {
    id: 1,
    name: "Rahim Rahman",
    class: "Class 10",
    section: "A",
    roll_no: 12,
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    studentId: "KHS-2022-0012",
    dateOfBirth: "2006-05-20",
    bloodGroup: "A+",
    classTeacher: "Mr. Kamal Hossain",
    subjects: [
      { name: "Mathematics", teacher: "Mr. Islam", email: "islam@school.edu" },
      { name: "English", teacher: "Mrs. Akter", email: "akter@school.edu" },
      { name: "Bangla", teacher: "Mrs. Rahman", email: "rahman@school.edu" },
      {
        name: "General Science",
        teacher: "Mr. Haque",
        email: "haque@school.edu",
      },
      {
        name: "Social Studies",
        teacher: "Mrs. Begum",
        email: "begum@school.edu",
      },
    ],
    attendance: {
      totalDays: 90,
      present: 85,
      absent: 3,
      late: 2,
      percentage: 94.4,
      records: generateAttendanceRecords(90),
    },
    results: [
      { subject: "Mathematics", firstTerm: 88, secondTerm: 92 },
      { subject: "English", firstTerm: 82, secondTerm: 85 },
      { subject: "Bangla", firstTerm: 85, secondTerm: 88 },
      { subject: "General Science", firstTerm: 90, secondTerm: 91 },
      { subject: "Social Studies", firstTerm: 80, secondTerm: 83 },
    ],
  },
  {
    id: 2,
    name: "Fatema Rahman",
    class: "Class 6",
    section: "B",
    roll_no: 8,
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    studentId: "KHS-2025-0008",
    dateOfBirth: "2010-11-15",
    bloodGroup: "O+",
    classTeacher: "Mrs. Sultana",
    subjects: [
      { name: "Mathematics", teacher: "Mr. Islam", email: "islam@school.edu" },
      { name: "English", teacher: "Mrs. Akter", email: "akter@school.edu" },
      { name: "Bangla", teacher: "Mrs. Rahman", email: "rahman@school.edu" },
      {
        name: "General Science",
        teacher: "Mr. Haque",
        email: "haque@school.edu",
      },
      {
        name: "Social Studies",
        teacher: "Mrs. Begum",
        email: "begum@school.edu",
      },
    ],
    attendance: {
      totalDays: 90,
      present: 88,
      absent: 1,
      late: 1,
      percentage: 97.8,
      records: generateAttendanceRecords(90),
    },
    results: [
      { subject: "Mathematics", firstTerm: 92, secondTerm: 95 },
      { subject: "English", firstTerm: 88, secondTerm: 90 },
      { subject: "Bangla", firstTerm: 90, secondTerm: 92 },
      { subject: "General Science", firstTerm: 94, secondTerm: 93 },
      { subject: "Social Studies", firstTerm: 86, secondTerm: 88 },
    ],
  },
];

function generateAttendanceRecords(totalDays) {
  const records = [];
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - totalDays + 1);

  for (let i = 0; i < totalDays; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    const dayOfWeek = date.getDay();
    if (dayOfWeek === 5 || dayOfWeek === 6) continue;

    const random = Math.random();
    let status;
    if (random < 0.9) status = "Present";
    else if (random < 0.96) status = "Absent";
    else if (random < 0.98) status = "Late";
    else status = "Leave";

    records.push({
      date: formatDate(date),
      status,
    });
  }

  return records;
}

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

export const noticeBoard = [
  {
    id: 1,
    title: "SSC Examination Schedule 2026",
    date: "2026-03-20",
    priority: "high",
    content:
      "SSC examinations will begin from April 1, 2026. Students must carry their admit cards.",
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting",
    date: "2026-03-25",
    priority: "medium",
    content:
      "Quarterly PTM scheduled for March 25, 2026. All parents are requested to attend.",
  },
  {
    id: 3,
    title: "Fee Payment Deadline",
    date: "2026-03-28",
    priority: "high",
    content:
      "Last date for quarterly fee payment is March 31, 2026. Late fee will be applicable after deadline.",
  },
];
