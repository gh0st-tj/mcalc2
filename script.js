document.getElementById('salaryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const profit = parseFloat(document.getElementById('profit').value);
    if (isNaN(profit) || profit < 0) {
        alert('Please enter a valid profit amount.');
        return;
    }
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    const structureFive = calculateSalaryStructureFive(profit);
    const structureSix = calculateSalaryStructureSix(profit);
    resultDiv.innerHTML += `
        <div class="result-card">
            <h2>Structure One</h2>
            <p class="salary">${structureFive.salary.toFixed(2)} AED</p>
            <p class="explanation">${structureFive.explanation}</p>
        </div>
        <div class="result-card">
            <h2>Structure Two</h2>
            <p class="salary">${structureSix.salary.toFixed(2)} AED</p>
            <p class="explanation">${structureSix.explanation}</p>
        </div>
    `;
});
function calculateSalaryStructureFive(profit_usd) {
    let bonus_usd, explanation;
    if (profit_usd <= 100000) {
        bonus_usd = 0.045 * profit_usd;
        explanation = `4.5% of ${profit_usd} USD`;
    } else if (profit_usd <= 150000) {
        bonus_usd = (0.045 * 100000) + (0.065 * (profit_usd - 100000));
        explanation = `4.5% of 100000 USD + 6.5% of ${profit_usd - 100000} USD`;
    } else {
        bonus_usd = (0.045 * 100000) + (0.065 * 50000) + (0.105 * (profit_usd - 150000));
        explanation = `4.5% of 100000 USD + 6.5% of 50000 USD + 10.5% of ${profit_usd - 150000} USD`;
    }
    const salary_aed = bonus_usd * 3.67;
    return { salary: salary_aed, explanation: explanation };
}

function calculateSalaryStructureSix(profit_usd) {
    const bonus_usd = 0.055 * profit_usd;
    const explanation = `5.5% of ${profit_usd} USD`;
    const salary_aed = bonus_usd * 3.67;
    return { salary: salary_aed, explanation: explanation };
}
