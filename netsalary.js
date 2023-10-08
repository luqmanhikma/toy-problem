function calculateNetSalary(basicSalary, benefits) {
  const TAX_THRESHOLD = 24000; // Tax-free threshold in Kenya shillings
  const TAX_RATE_1 = 0.1; // Tax rate for income up to 24000
  const TAX_RATE_2 = 0.25; // Tax rate for income above 24000

  const NHIF_RATE = 0.015; // NHIF contribution rate
  const NSSF_RATE = 0.06; // NSSF contribution rate

  // Calculate gross salary
  const grossSalary = basicSalary + benefits;

  // Calculate NHIF deduction
  const nhifDeduction = grossSalary * NHIF_RATE;

  // Calculate NSSF deduction
  const nssfDeduction = grossSalary * NSSF_RATE;

  // Calculate taxable income
  const taxableIncome = Math.max(0, grossSalary - TAX_THRESHOLD);

  // Calculate tax (payee) based on tax rates
  let tax = 0;
  if (taxableIncome > 0 && taxableIncome <= TAX_THRESHOLD) {
      tax = taxableIncome * TAX_RATE_1;
  } else if (taxableIncome > TAX_THRESHOLD) {
      tax = TAX_THRESHOLD * TAX_RATE_1 + (taxableIncome - TAX_THRESHOLD) * TAX_RATE_2;
  }

  // Calculate net salary after deductions and tax
  const netSalary = grossSalary - (tax + nhifDeduction + nssfDeduction);

  // Return the calculated values
  return {
      grossSalary: grossSalary,
      nhifDeduction: nhifDeduction,
      nssfDeduction: nssfDeduction,
      tax: tax,
      netSalary: netSalary
  };
}

// Example usage
const basicSalary = 30000; // Example basic salary in Kenya shillings
const benefits = 5000; // Example benefits in Kenya shillings

const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary: " + salaryDetails.grossSalary.toFixed(2));
console.log("NHIF Deduction: " + salaryDetails.nhifDeduction.toFixed(2));
console.log("NSSF Deduction: " + salaryDetails.nssfDeduction.toFixed(2));
console.log("Tax (PAYE): " + salaryDetails.tax.toFixed(2));
console.log("Net Salary: " + salaryDetails.netSalary.toFixed(2));