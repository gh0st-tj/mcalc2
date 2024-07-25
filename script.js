document.getElementById('salaryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const profit = parseFloat(document.getElementById('profit').value);
    if (isNaN(profit) || profit < 0) {
        alert('Please enter a valid profit amount.');
        return;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    const structureOne = calculateSalaryStructureOne(profit);
    const structureOneNew = calculateSalaryStructureOneNew(profit);

    resultDiv.innerHTML += `
        <div class="result-card">
            <h2>Structure One</h2>
            <p class="salary">${structureOne.salary.toFixed(2)} AED</p>
            <p class="explanation">${structureOne.explanation}</p>
        </div>
        <div class="result-card">
            <h2>Structure One (New)</h2>
            <p class="salary">${structureOneNew.salary.toFixed(2)} AED</p>
            <p class="explanation">${structureOneNew.explanation}</p>
        </div>
    `;
});

function calculateSalaryStructureOne(profit_usd) {
    let bonus_usd, explanation;
    if (profit_usd <= 100000) {
        bonus_usd = 0.04 * profit_usd;
        explanation = `4% of ${profit_usd} USD`;
    } else if (profit_usd <= 150000) {
        bonus_usd = (0.04 * 100000) + (0.06 * (profit_usd - 100000));
        explanation = `4% of 100000 USD + 6% of ${profit_usd - 100000} USD`;
    } else if (profit_usd <= 200000) {
        bonus_usd = (0.04 * 100000) + (0.06 * 50000) + (0.1 * (profit_usd - 150000));
        explanation = `4% of 100000 USD + 6% of 50000 USD + 10% of ${profit_usd - 150000} USD`;
    } else if (profit_usd <= 250000) {
        bonus_usd = (0.04 * 100000) + (0.06 * 50000) + (0.1 * 50000) + (0.12 * (profit_usd - 200000));
        explanation = `4% of 100000 USD + 6% of 50000 USD + 10% of 50000 USD + 12% of ${profit_usd - 200000} USD`;
    } else {
        bonus_usd = (0.04 * 100000) + (0.06 * 50000) + (0.1 * 50000) + (0.12 * 50000) + (0.15 * (profit_usd - 250000));
        explanation = `4% of 100000 USD + 6% of 50000 USD + 10% of 50000 USD + 12% of 50000 USD + 15% of ${profit_usd - 250000} USD`;
    }
    const salary_aed = bonus_usd * 3.67;
    return { salary: salary_aed, explanation: explanation };
}

function calculateSalaryStructureOneNew(profit_usd) {
    let bonus_usd, explanation;
    if (profit_usd <= 100000) {
        bonus_usd = 0.045 * profit_usd;
        explanation = `4.5% of ${profit_usd} USD`;
    } else if (profit_usd <= 150000) {
        bonus_usd = (0.045 * 100000) + (0.065 * (profit_usd - 100000));
        explanation = `4.5% of 100000 USD + 6.5% of ${profit_usd - 100000} USD`;
    } else if (profit_usd <= 200000) {
        bonus_usd = (0.045 * 100000) + (0.065 * 50000) + (0.105 * (profit_usd - 150000));
        explanation = `4.5% of 100000 USD + 6.5% of 50000 USD + 10.5% of ${profit_usd - 150000} USD`;
    } else if (profit_usd <= 250000) {
        bonus_usd = (0.045 * 100000) + (0.065 * 50000) + (0.105 * 50000) + (0.125 * (profit_usd - 200000));
        explanation = `4.5% of 100000 USD + 6.5% of 50000 USD + 10.5% of 50000 USD + 12.5% of ${profit_usd - 200000} USD`;
    } else {
        bonus_usd = (0.045 * 100000) + (0.065 * 50000) + (0.105 * 50000) + (0.125 * 50000) + (0.155 * (profit_usd - 250000));
        explanation = `4.5% of 100000 USD + 6.5% of 50000 USD + 10.5% of 50000 USD + 12.5% of 50000 USD + 15.5% of ${profit_usd - 250000} USD`;
    }
    const salary_aed = bonus_usd * 3.67;
    return { salary: salary_aed, explanation: explanation };
}