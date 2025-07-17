// Loan calculator function
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

// Optional: Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetID = link.getAttribute('href').substring(1);
    document.getElementById(targetID).scrollIntoView({ behavior: 'smooth' });
  });
});

// Optional: Highlight active nav link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    if(scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      const id = section.getAttribute('id');
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
});