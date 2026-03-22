import jsPDF from "jspdf";

export const generateReceiptPDF = (fee, student, parent) => {
  const doc = new jsPDF();

  const primaryColor = [16, 42, 67];
  const accentColor = [212, 175, 55];

  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, 210, 45, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("KUTUMBPUR HIGH SCHOOL", 105, 18, { align: "center" });

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Village: Kutumbpur, Upazila: Burichang, District: Cumilla", 105, 26, { align: "center" });
  doc.text("Phone: +880 1XXX-XXXXXX | Email: info@kutumbpur.edu.bd", 105, 33, { align: "center" });

  doc.setDrawColor(...accentColor);
  doc.setLineWidth(2);
  doc.line(20, 48, 190, 48);

  doc.setTextColor(...primaryColor);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("OFFICIAL FEE RECEIPT", 105, 60, { align: "center" });

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100, 100, 100);
  doc.text(`Receipt No: ${fee.receiptId}`, 105, 70, { align: "center" });
  doc.text(`Date: ${fee.paidDate ? new Date(fee.paidDate).toLocaleDateString("en-GB") : "N/A"}`, 105, 76, { align: "center" });

  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.5);
  doc.line(20, 85, 190, 85);

  doc.setFillColor(245, 245, 245);
  doc.rect(20, 90, 170, 35, "F");

  doc.setTextColor(60, 60, 60);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Student Details", 25, 98);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Name: ${student.name}`, 25, 106);
  doc.text(`Class: ${student.class} | Section: ${student.section}`, 25, 113);
  doc.text(`Roll No: ${student.roll_no}`, 25, 120);
  doc.text(`Student ID: ${student.studentId}`, 120, 106);

  doc.setFillColor(245, 245, 245);
  doc.rect(20, 130, 170, 35, "F");

  doc.setTextColor(60, 60, 60);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Parent/Guardian Details", 25, 138);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Name: ${parent.name}`, 25, 146);
  doc.text(`Phone: ${parent.phone}`, 25, 153);
  doc.text(`Email: ${parent.email}`, 120, 146);

  doc.setFillColor(245, 245, 245);
  doc.rect(20, 170, 170, 25, "F");

  doc.setTextColor(60, 60, 60);
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.text("Payment Details", 25, 178);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Period: ${fee.quarter} - ${fee.months}`, 25, 186);
  doc.text(`Due Amount: ৳${fee.dueAmount.toLocaleString()}`, 120, 186);

  doc.setFillColor(240, 240, 240);
  doc.rect(20, 200, 170, 20, "F");

  doc.setTextColor(...primaryColor);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("TOTAL PAID:", 25, 214);
  doc.setTextColor(0, 128, 0);
  doc.text(`৳${fee.paidAmount.toLocaleString()}`, 130, 214);

  doc.setTextColor(60, 60, 60);
  doc.setFontSize(8);
  doc.setFont("helvetica", "italic");
  doc.text("Taka (In Words): " + numberToWords(fee.paidAmount), 25, 222);

  doc.setDrawColor(...accentColor);
  doc.setLineWidth(1);
  doc.line(20, 230, 190, 230);

  doc.setTextColor(100, 100, 100);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("Terms & Conditions:", 20, 238);
  doc.setFontSize(8);
  doc.text("1. This receipt is valid only with official seal and signature.", 20, 245);
  doc.text("2. Fee once paid is non-refundable unless specified by school policy.", 20, 251);
  doc.text("3. Please retain this receipt for future reference.", 20, 257);

  doc.setFillColor(...primaryColor);
  doc.rect(0, 275, 210, 22, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.text("Kutumbpur High School | Established 1985", 105, 282, { align: "center" });
  doc.text("This is a computer-generated receipt. No signature required.", 105, 289, { align: "center" });

  doc.save(`Receipt_${fee.receiptId}.pdf`);
};

function numberToWords(num) {
  const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  if (num === 0) return "Zero Taka Only";
  if (num < 20) return units[num] + " Taka Only";
  if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 ? " " + units[num % 10] : "") + " Taka Only";
  if (num < 1000) return units[Math.floor(num / 100)] + " Hundred" + (num % 100 ? " " + numberToWords(num % 100) : "") + " Taka Only";
  if (num < 100000) return numberToWords(Math.floor(num / 1000)) + " Thousand" + (num % 1000 ? " " + numberToWords(num % 1000) : "") + " Taka Only";
  if (num < 10000000) return numberToWords(Math.floor(num / 100000)) + " Lakh" + (num % 100000 ? " " + numberToWords(num % 100000) : "") + " Taka Only";
  return numberToWords(Math.floor(num / 10000000)) + " Crore" + (num % 10000000 ? " " + numberToWords(num % 10000000) : "") + " Taka Only";
}
