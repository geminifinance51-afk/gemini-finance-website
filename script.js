function calculateLoan() {
  const loanAmount = parseFloat(document.getElementById('loan-amount').value);
  const fortnights = parseInt(document.getElementById('fortnights').value);

  const interestRate = 0.45;
  const interest = loanAmount * interestRate;
  const totalAmount = loanAmount + interest;

  const fortnightlyRepayment = totalAmount / fortnights;

  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `Loan Amount: K${loanAmount.toFixed(2)}<br>
    Interest (45% flat): K${interest.toFixed(2)}<br>
    Total Repayment: K${totalAmount.toFixed(2)}<br>
    Fortnightly Repayment: K${fortnightlyRepayment.toFixed(2)} over ${fortnights} fortnights`;
}