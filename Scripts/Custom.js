Chart.defaults.global.defaultFontColor = 'white';
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