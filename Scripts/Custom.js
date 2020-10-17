Chart.defaults.global.defaultFontColor = 'white';
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
            type: 'line',
    data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Monthly Payments',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(225, 78, 202, 0.2)',
                //'rgba(54, 162, 235, 0.2)',
                //'rgba(255, 206, 86, 0.2)',
                //'rgba(75, 192, 192, 0.2)',
                //'rgba(153, 102, 255, 0.2)',
                //'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(225, 78, 202, 1)',
                //'rgba(54, 162, 235, 1)',
                //'rgba(255, 206, 86, 1)',
                //'rgba(75, 192, 192, 1)',
                //'rgba(153, 102, 255, 1)',
                //'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
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