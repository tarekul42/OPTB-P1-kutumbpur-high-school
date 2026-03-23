export interface Book {
  id: number;
  title: string;
  author: string;
  subject: string;
  classLevel: string;
  coverImage: string;
  status: string;
  description: string;
  isbn: string;
}

export interface DigitalResource {
  id: number;
  title: string;
  type: string;
  fileType: string;
  link: string;
  description: string;
}

export const subjects: string[] = ["All", "Science", "Mathematics", "History", "Literature", "Geography", "ICT"];
export const classLevels: string[] = ["All", "Class 6-8", "Class 9-10", "All Classes"];
export const availabilityOptions: string[] = ["All", "Available", "Issued"];

export const booksData: Book[] = [
  { id: 1, title: "Higher Mathematics", author: "Dr. Shahidul Islam", subject: "Mathematics", classLevel: "Class 9-10", coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=600&fit=crop", status: "Available", description: "Comprehensive mathematics textbook for SSC students.", isbn: "978-984-123-456-7" },
  { id: 2, title: "General Science", author: "Prof. Rahim Chowdhury", subject: "Science", classLevel: "Class 6-8", coverImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=600&fit=crop", status: "Available", description: "Introduction to physics, chemistry, and biology.", isbn: "978-984-123-456-8" },
  { id: 3, title: "Bangladesh History", author: "Dr. Kamal Hossain", subject: "History", classLevel: "All Classes", coverImage: "https://images.unsplash.com/photo-1461360370896-922624d12a74?w=400&h=600&fit=crop", status: "Issued", description: "Complete history of Bangladesh.", isbn: "978-984-123-456-9" },
  { id: 4, title: "English Literature", author: "Ms. Fatima Rahman", subject: "Literature", classLevel: "Class 9-10", coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop", status: "Available", description: "Collection of classic English literature.", isbn: "978-984-123-457-0" },
  { id: 5, title: "Physical Geography", author: "Dr. Abdul Momen", subject: "Geography", classLevel: "Class 9-10", coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop", status: "Issued", description: "Study of Earth's physical features.", isbn: "978-984-123-457-1" },
  { id: 6, title: "Introduction to ICT", author: "Mr. Zahid Hasan", subject: "ICT", classLevel: "All Classes", coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=600&fit=crop", status: "Available", description: "Fundamentals of information technology.", isbn: "978-984-123-457-2" },
];

export const digitalResources: DigitalResource[] = [
  { id: 1, title: "Mathematics Video Tutorials", type: "Video", fileType: "mp4", link: "https://example.com/math-videos", description: "Complete video lecture series" },
  { id: 2, title: "Science Lab Manual", type: "PDF", fileType: "pdf", link: "https://example.com/science-lab", description: "Practical experiments" },
  { id: 3, title: "English Grammar Guide", type: "PDF", fileType: "pdf", link: "https://example.com/english-grammar", description: "Comprehensive grammar rules" },
];
