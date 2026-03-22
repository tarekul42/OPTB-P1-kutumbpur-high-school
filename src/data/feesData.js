export const feesStructure = {
  tuition: 1500,
  admission: 2000,
  library: 200,
  laboratory: 300,
  sports: 150,
  examination: 500,
  development: 1000,
};

export const generateFeesForChild = (childId, year = 2026) => {
  const baseMonthlyFee = feesStructure.tuition + 
    feesStructure.library + 
    feesStructure.laboratory + 
    feesStructure.sports;

  const quarters = [
    { quarter: "Q1", months: ["January", "February", "March"], monthsNum: [1, 2, 3] },
    { quarter: "Q2", months: ["April", "May", "June"], monthsNum: [4, 5, 6] },
    { quarter: "Q3", months: ["July", "August", "September"], monthsNum: [7, 8, 9] },
    { quarter: "Q4", months: ["October", "November", "December"], monthsNum: [10, 11, 12] },
  ];

  const fees = [];

  quarters.forEach((q, quarterIndex) => {
    const isPaid = quarterIndex < 2 || (quarterIndex === 2 && Math.random() > 0.5);
    const isOverdue = quarterIndex === 0 && !isPaid;
    
    const dueDate = new Date(year, q.monthsNum[0] - 1, 15);
    const paidDate = isPaid ? new Date(year, q.monthsNum[0] + Math.floor(Math.random() * 2), Math.floor(Math.random() * 15) + 1) : null;

    fees.push({
      id: `${childId}-${year}-Q${quarterIndex + 1}`,
      childId,
      year,
      quarter: q.quarter,
      months: q.months.join(", "),
      dueDate: dueDate.toISOString().split("T")[0],
      dueAmount: baseMonthlyFee * 3 + feesStructure.examination,
      paidAmount: isPaid ? baseMonthlyFee * 3 + feesStructure.examination : 0,
      status: isPaid ? "Paid" : isOverdue ? "Overdue" : "Due",
      paidDate: paidDate ? paidDate.toISOString().split("T")[0] : null,
      receiptId: isPaid ? `RCP-${childId}-${year}-Q${quarterIndex + 1}` : null,
    });
  });

  const monthlyFees = [];
  for (let month = 1; month <= 12; month++) {
    const isPaid = month <= 8;
    monthlyFees.push({
      id: `${childId}-${year}-M${month}`,
      childId,
      year,
      month,
      monthName: new Date(year, month - 1).toLocaleString("en", { month: "long" }),
      dueDate: new Date(year, month - 1, 10).toISOString().split("T")[0],
      amount: baseMonthlyFee,
      status: isPaid ? "Paid" : month <= 10 ? "Due" : "Overdue",
      paidDate: isPaid ? new Date(year, month - 1, Math.floor(Math.random() * 10) + 1).toISOString().split("T")[0] : null,
    });
  }

  return {
    quarterly: fees,
    monthly: monthlyFees,
    summary: {
      totalAnnual: (baseMonthlyFee * 12) + (feesStructure.examination * 4) + feesStructure.development,
      paid: fees.filter(f => f.status === "Paid").reduce((sum, f) => sum + f.paidAmount, 0),
      pending: fees.filter(f => f.status !== "Paid").reduce((sum, f) => sum + f.dueAmount, 0),
    },
  };
};

export const child1Fees = generateFeesForChild(1);
export const child2Fees = generateFeesForChild(2);
