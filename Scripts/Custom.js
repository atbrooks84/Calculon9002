Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.legend.display = false;

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
            type: 'line',
    data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Monthly Payments',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(225, 78, 202, 0.2)',
            borderColor: 'rgba(225, 78, 202, 1)',
            borderWidth: 1,
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

setTimeout(function () {
    console.log("Ran")
    myChart.data.datasets[0].data = [10, 30, 5, 6, 7, 7, 1, 23, 43, 32, 5, 5, 6, 54, 4, 4];
    myChart.data.datasets[0].labels = ["10", "30", "5", "6", "7", "7", "1", "23", "43", "32", "5", "5", "6", "54", "4", "4"];

    myChart.update();
}, 3000)

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

(function totalMonthlyPayment() {
    function calculateTotalMonthlyPayment(loanAmount, rateAmount) {
        loanAmount = parseFloat(loanAmount);
        if (loanAmount > 0) {
            let previousRemainingBalance = loanAmount;
        }
        rate = parseFloat(rateAmount);
        return (loanAmount) * (rateAmount / 1200) / (1 - (1 + rateAmount / 1200) ** (-termMonths));

    }

    let monthlyPayment = document.getElementById("monthlyPayment");
    if (monthlyPayment) {
        monthlyPayment.onsubmit = function () {
            this.payment.value = calculateTotalMonthlyPayment(this.loanAmount.value, this.rateAmount.value);
        }
    }
})();

(function () {
    function calculateInterestPayment(previousRemainingBalance, rateAmount) {
        remainingBalance = parseFloat(previousRemainingBalance);
        rateAmount = parseFloat(rateAmount);
        return (previousRemainingBalance * rate / 1200);
    }

    let interestPayment = document.getElementById("interestPayment");
    if (interestPayment) {
        interestPayment.onsubmit = function () {
            this.interest.value = calculateInterestPayment(this.previousRemainingBalance.value, this.rateAmount.value);
        }
    }
})();

(function () {
    function calculateTotalPrincipalPayment(monthlyPayment, interestPayment) {
        monthlyPayment = parseFloat(monthlyPayment);
        interestPayment = parseFloat(interestPayment);
        return (monthlyPayment - interestPayment);

    }

    let principalPayment = document.getElementById("principalPayment");
    if (principalPayment) {
        principalPayment.onsubmit = function () {
            this.principal.value = calculateTotalPrincipalPayment(this.monthlyPayment.value, this.interestPayment.value);
        }
    }
})();

(function () {
    function calculateRemainingBalance(previousRemainingBalance, principalPayment) {
        monthlyPayment = parseFloat(monthlyPayment);
        interestPayment = parseFloat(interestPayment);
        return (monthlyPayment - interestPayment);

    }

    let remainingBalance = document.getElementById("remainingBalance");
    if (remainingBalance) {
        remainingBalance.onsubmit = function () {
            this.remaining.value = calculateRemainingBalance(this.previousRemainingBalance.value, this.principalPayment.value);
        }
    }
})();
