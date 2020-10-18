Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.legend.display = false;

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["","","","",""],
        datasets: [{
            label: 'Monthly Payments',
            data: [5,5,5,5,5],
            backgroundColor: 'rgba(225, 78, 202, 0.2)',
            borderColor: 'rgba(225, 78, 202, 1)',
            borderWidth: 3,
            pointHitRadius: 20
        }]
    },
    options: {
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    color: "#383838"
                },
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: "#383838"
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

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
            html += `<td>${formatter.format(Math.abs(amortizationSchedule[row][cell].toFixed(2)))}</td>`
        }

        html += "</tr>";
    }

    document.getElementById("generated").innerHTML = html;
}

function updateChart(amortizationSchedule) {
    newLabels = []
    newData = []
    
    for (let i = 0; i < amortizationSchedule.length; i++) {
        newLabels.push(amortizationSchedule[i][0])
        newData.push(amortizationSchedule[i][3].toFixed(2))
    }

    myChart.data = {
        labels: newLabels,
        datasets: [{
            label: 'Interest',
            data: newData,
            backgroundColor: 'rgba(225, 78, 202, 0.2)',
            borderColor: 'rgba(225, 78, 202, 1)',
            borderWidth: 3,
            pointHitRadius: 20
        }]
    }
    myChart.update();
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
    else if (years && months) {
        let addMonths = months;
        let addYears = years * 12;
        months = addMonths + addYears;
    }

    else if (years) {
        months = years * 12;
    }

    else if (months > 600) {
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

    let finalElement = amortizationSchedule[amortizationSchedule.length - 1]
    let finalInterest = finalElement[4].toFixed(2);
    let finalCost = Number(finalInterest) + Number(principal);
    document.getElementById("finalInterest").innerHTML = finalInterest;
    document.getElementById("total").innerHTML = finalCost;

    generateGrid(amortizationSchedule);
    updateChart(amortizationSchedule);

    paymentsPrincipal = [];
}

function showError(error) {
    // create error
    document.getElementById("error").innerHTML = error;
}