const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

function generateGrid(amortizationSchedule) {
    html = "";
    for (let row = 0; row < amortizationSchedule.length; row++) {
        html += "<tr>";
        html += `<th scope="row">${amortizationSchedule[row][0]}</th>`
        for (let cell = 1; cell < amortizationSchedule[row].length; cell++) {
            html += `<td>${formatter.format(amortizationSchedule[row][cell].toFixed(2))}</td>`
        }

        html += "</tr>";
    }

    document.getElementById("generated").innerHTML = html;
}


function calculateResults(e) {
    const principal = Number(document.getElementById("principal").value);
    document.getElementById("initial").innerHTML = "$" + principal;
    const interest = Number(document.getElementById("interest").value);
    let years = Number(document.getElementById("years").value);
    let months = Number(document.getElementById("months").value);

    if (!years && !months) {
        showError("Please enter a time limit");
        return;
    }

    if (years) {
        months = years * 12;
    }

    if (months > 600) {
        showError("Too many years. Please enter 50 or less.")
    }

    let totalInterest = 0;
    let monthlyPayment = (principal) * (interest / 1200) / (1 - (1 + interest / 1200) ** (-months));
    let remainingBalance = principal;
    let amortizationSchedule = [];

    document.getElementById("payment").innerHTML = monthlyPayment.toFixed(2);

    for (let i = 0; i < months; i++) {
        let interestPayment = remainingBalance * (interest / 1200);
        let principalPayment = monthlyPayment - interestPayment

        totalInterest += interestPayment;
        remainingBalance = remainingBalance - principalPayment;

        amortizationSchedule.push([i + 1, monthlyPayment, principalPayment, interestPayment, totalInterest, remainingBalance])
    }

    
    generateGrid(amortizationSchedule);

    paymentsPrincipal = [];    
}


function showError(error) {
    // create error
    document.getElementById("error").innerHTML = error;
}