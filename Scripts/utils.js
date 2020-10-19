//document.getElementById('create_pdf').addEventListener('click', function () {
//    exportPDF();
//});

//function exportPDF() {

//    let doc = new jsPDF('p', 'pt', 'a4');
//    //A4 - 595x842 pts


//    //Html source
//    let source = document.getElementById('datatable').innerHTML;

//    let margins = {
//        top: 10,
//        bottom: 10,
//        left: 10,
//        width: 595
//    };

//    let specialElementHandlers = {
//        // element with id of "bypass" - jQuery style selector
//        '#bypassme': function (element, renderer) {
//            // true = "handled elsewhere, bypass text extraction"
//            return true
//        }
//    };

//    doc.fromHTML(
//        source, // HTML string or DOM elem ref.
//        margins.left,
//        margins.top, {
//        'width': margins.width,
//        'elementHandlers': specialElementHandlers
//    },

//        function (dispose) {
//            // dispose: object with X, Y of the last line add to the PDF 
//            //          this allow the insertion of new lines after html
//            pdf.save('Test.pdf');
//        }, margins);
//}

//function addData(chart, label, data) {
//    chart.data.labels.push(label);
//    chart.data.datasets.forEach((dataset) => {
//        dataset.data.push(data);
//    });
//    chart.update();
//}

//function removeData(chart) {
//    chart.data.labels.pop();
//    chart.data.datasets.forEach((dataset) => {
//        dataset.data.pop();
//    });
//    chart.update();
//}

//(function totalMonthlyPayment() {
//    function calculateTotalMonthlyPayment(loanAmount, rateAmount) {
//        loanAmount = parseFloat(loanAmount);
//        if (loanAmount > 0) {
//            let previousRemainingBalance = loanAmount;
//        }
//        rate = parseFloat(rateAmount);
//        return (loanAmount) * (rateAmount / 1200) / (1 - (1 + rateAmount / 1200) ** (-termMonths));

//    }

//    let monthlyPayment = document.getElementById("monthlyPayment");
//    if (monthlyPayment) {
//        monthlyPayment.onsubmit = function () {
//            this.payment.value = calculateTotalMonthlyPayment(this.loanAmount.value, this.rateAmount.value);
//        }
//    }
//})();

//(function () {
//    function calculateInterestPayment(previousRemainingBalance, rateAmount) {
//        remainingBalance = parseFloat(previousRemainingBalance);
//        rateAmount = parseFloat(rateAmount);
//        return (previousRemainingBalance * rate / 1200);
//    }

//    let interestPayment = document.getElementById("interestPayment");
//    if (interestPayment) {
//        interestPayment.onsubmit = function () {
//            this.interest.value = calculateInterestPayment(this.previousRemainingBalance.value, this.rateAmount.value);
//        }
//    }
//})();

//(function () {
//    function calculateTotalPrincipalPayment(monthlyPayment, interestPayment) {
//        monthlyPayment = parseFloat(monthlyPayment);
//        interestPayment = parseFloat(interestPayment);
//        return (monthlyPayment - interestPayment);

//    }

//    let principalPayment = document.getElementById("principalPayment");
//    if (principalPayment) {
//        principalPayment.onsubmit = function () {
//            this.principal.value = calculateTotalPrincipalPayment(this.monthlyPayment.value, this.interestPayment.value);
//        }
//    }
//})();

//(function () {
//    function calculateRemainingBalance(previousRemainingBalance, principalPayment) {
//        monthlyPayment = parseFloat(monthlyPayment);
//        interestPayment = parseFloat(interestPayment);
//        return (monthlyPayment - interestPayment);

//    }

//    let remainingBalance = document.getElementById("remainingBalance");
//    if (remainingBalance) {
//        remainingBalance.onsubmit = function () {
//            this.remaining.value = calculateRemainingBalance(this.previousRemainingBalance.value, this.principalPayment.value);
//        }
//    }
//})();
