Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.legend.display = false;

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

//var doughnutChart = document.getElementById('doughnutChart').getContext('2d');
//// And for a doughnut chart
//var myDoughnutChart = new Chart(doughnutChart, {
//    type: 'doughnut',
//    data: {
//        datasets: [{
//            data: [10, 20, 30]
//        }],

//        // These labels appear in the legend and in the tooltips when hovering different arcs
//        labels: [
//            'Red',
//            'Yellow',
//            'Blue'
//        ]
//    },
//    options: {
//        animation: {
//            animateRotate: true
//        }   
//    }
//});



//function updateChart() {
//    labelMaker = []
//    chartMaker = []
//    for (let i = 0; i < 300; i++) {
//        labelMaker.push(i + 1);
//        chartMaker.push(randomNumber(3, 9));
//    }

//    myChart.data = {
//        labels: labelMaker,
//        datasets: [{
//            label: 'Monthly Payments',
//            data: chartMaker,
//            backgroundColor: 'rgba(225, 78, 202, 0.2)',
//            borderColor: 'rgba(225, 78, 202, 1)',
//            borderWidth: 3,
//            pointHitRadius: 20
//        }]
//    }

//    myChart.update();
//}

//setInterval(function () {
//    updateChart();
//}, 5000)

//setTimeout(function () {
//    console.log("Ran")
//    myChart.data.datasets[0].data = [10, 30, 5, 6, 7, 7, 1, 23, 43, 32, 5, 5, 6, 54, 4, 4];
//    myChart.data.datasets[0].labels = ["10", "30", "5", "6", "7", "7", "1", "23", "43", "32", "5", "5", "6", "54", "4", "4"];

//    myChart.update();
//}, 3000)

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
