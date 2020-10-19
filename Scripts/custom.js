Chart.defaults.global.defaultFontColor = 'white';

/*formats any given number to a valid USD currency (i.e. "120000.849284" to "$120,000.85")*/
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

/* error functions */
function showError(text) {
    errorZone = document.getElementById('errorZone');
    errorZone.style.display = "block";
    errorZone.innerHTML = text;
}

function clearError() {
    errorZone = document.getElementById('errorZone');
    errorZone.style.display = "none";
}

/*initial chart setup*/
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
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'index',
            intersect: false
        },
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

/*generates a grid from the amortization schedule array*/
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

/*updates the chart from an amortization schedule*/
function updateChart(amortizationSchedule) {
    newLabels = []
    interestData = []
    principalData = []
    
    for (let i = 0; i < amortizationSchedule.length; i++) {
        newLabels.push(amortizationSchedule[i][0])
        interestData.push(amortizationSchedule[i][3].toFixed(2))
        principalData.push(amortizationSchedule[i][2].toFixed(2))
    }

    myChart.data = {
        labels: newLabels,
        datasets: [{
            label: 'Interest',
            data: interestData,
            backgroundColor: 'rgba(225, 78, 202, 0.2)',
            borderColor: 'rgba(225, 78, 202, 1)',
            borderWidth: 3,
            pointHitRadius: 10
        },{
            label: 'Principal',
            data: principalData,
            backgroundColor: 'rgba(29, 140, 248, 0.2)',
            borderColor: 'rgba(29, 140, 248, 1)',
            borderWidth: 3,
            pointHitRadius: 10
        }]
    }
    myChart.update();
}

/*main function, runs all the calculations to produce the amortization schedule*/
function calculateResults(e) {
    clearError()

    let principal = Number(document.getElementById("principal").value);
    let interest = Number(document.getElementById("interest").value);
    let time = Number(document.getElementById("time").value);
    let extraPayment = Number(document.getElementById('extra-payments').value);
    let deposit = Number(document.getElementById('deposit').value)
    

    if (!principal || !interest || !time) {
        showError("Please fill out all fields.");
        return;
    }

    if (document.getElementById('years').classList.contains('active')) {
        time = time * 12;
    }

    if (time > 600) {
        showError("Please enter a value less than 50 years (600 months)")
        return
    }

    


    //generate amortization schedule

    principal = principal - deposit;
    let totalInterest = 0;
    const constantMonthlyPayment = (principal) * (interest / 1200) / (1 - (1 + interest / 1200) ** (-time)) + extraPayment;
    let monthlyPayment = constantMonthlyPayment;
    let remainingBalance = principal;
    let amortizationSchedule = [];

    for (let i = 0; remainingBalance > 0; i++) {
        let interestPayment = remainingBalance * (interest / 1200);
        let principalPayment = monthlyPayment - interestPayment

        totalInterest += interestPayment;

        if (principalPayment + interestPayment > remainingBalance) {
            principalPayment = remainingBalance;
            monthlyPayment = principalPayment + interestPayment;
        }

        remainingBalance = remainingBalance - principalPayment;

        amortizationSchedule.push([i + 1, monthlyPayment, principalPayment, interestPayment, totalInterest, remainingBalance])
    }

    //update summary fields

    let totalCost = totalInterest + principal;

    document.getElementById('totalPrincipal').innerHTML = formatter.format(principal);
    document.getElementById("totalInterest").innerHTML = formatter.format(totalInterest);
    document.getElementById("totalCost").innerHTML = formatter.format(totalCost);
    document.getElementById("totalMonthlyPayment").innerHTML = formatter.format(constantMonthlyPayment);

    showResults()

    generateGrid(amortizationSchedule);
    updateChart(amortizationSchedule);

}

//display the results, this is only necessary after the first calculation
function showResults() {
    document.getElementById("hidden-on-page-load").style.display = "block";
}

