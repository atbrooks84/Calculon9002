const simpleInterest = document.querySelector('.simple-interest');
const button = document.querySelector('.button');
//const loading = document.querySelector('.loader');
const results = document.querySelector('.result');

//document.getElementById("calculate").addEventListener('click', calculateResults())

function calculateResults(e) {


    // ui elements
    const principal = Number(document.getElementById("principal").value);
    document.getElementById("initial").innerHTML = "$" + principal;
    const interest = Number(document.getElementById("interest").value);
    let years = Number(document.getElementById("years").value);
    let months = Number(document.getElementById("months").value);






    if (years && months) {
        showError("Please only use months or years")
    }
    else if (years > 0) {
        months = years * 12;
        let loanAmount = parseFloat(principal);
        let rate = parseFloat(interest);
        let monthlyPayment = (loanAmount) * (rate / 1200) / (1 - (1 + rate / 1200) ** (-months));
        document.getElementById("payment").innerHTML = monthlyPayment.toFixed(2);

    }
    else if (months > 0) {
        months = years * 12;
        let loanAmount = parseFloat(principal);
        let rate = parseFloat(interest);
        let monthlyPayment = (loanAmount) * (rate / 1200) / (1 - (1 + rate / 1200) ** (-months));
        document.getElementById("payment").innerHTML = monthlyPayment.toFixed(2);

    }
    else {
        showError("You didn't enter a time limit");
    }


    


    paymentsPrincipal = [];
    paymentsPrincipal.push[principal];
    for (let i = 0, paymentsInterest = []; i < months; i++) {

        let previousRemainingBalance = principal;
        let currentInterest = "";
        let interestPayment = ((previousRemainingBalance * rate) / 1200);
        let principalPayment = monthlyPayment - interestPayment
        let updateTotal = interestPayment + currentInterest;
        paymentsInterest.push[interestPayment];
        paymentsPrincipal.push[principalPayment];

        document.getElementById("testInterestPayments").innerHTML = paymentsInterest.join(", $");
        document.getElementById("testPricipalPayments").innerHTML = paymentsPrincipal.join(", $");
        document.getElementById("finalInterest").innerHTML = updateTotal;
        document.getElementById("total").innerHTML = (principal + updateTotal);
    }

   

}
    //let interestPayment = document.getElementById("interestPayment");
    //if (interestPayment) {
    //    interestPayment.onsubmit = function () {
    //        this.interest.value = calculateInterestPayment(this.previousRemainingBalance.value, this.rateAmount.value);
    //    }


    //}
    //    const monthlyPayment = document.getElementById("payment");
    //    const totalInterest = document.querySelector('#interest');
    //    const totalAmount = document.querySelector('#total');
    //    // formula variables
    //    const p = parseFloat(principal.value);
    //    const r = parseFloat(rate.value);
    //    if (years > 0) {
    //        const t = parseFloat(years.value);
    //    }
    //    else if (months > 0) {
    //        const t = parseFloat(months.value);
    //    }
    //    else {
    //        showError("You did not enter any time")
    //    }

    //    if (principal > 0) {
    //        document.getElementById("test").innerHTML = "test";
    //    }
    //    // calculate total interest
    //    const interest = (p * t * r / 100);
    //    // calculate monthly payment
    //    const payment = ((interest + p) / (t * 12)).toFixed(2);
    //    // calculate total amount paid
    //    const total = (interest + p).toFixed(2);

    //    if (isFinite(payment)) {
    //        totalInterest.innerHTML = '$' + (interest).toFixed(2);
    //        monthlyPayment.innerHTML = '$' + payment;
    //        totalAmount.innerHTML = '$' + total;
    //        // hide loader
    //        button.classList.remove('loading');
    //        // show results
    //        results.classList.remove('hide');
    //    } else {
    //        // show error
    //        showError('Please check your numbers and try again.');
    //        // hide loader
    //        button.classList.remove('loading');
    //    }
    //}

    function showError(error) {
        // create error
        const errorMessage = document.createElement('div');
        const calculate = document.querySelector('#calculate');

        errorMessage.className = 'error';
        errorMessage.appendChild(document.createTextNode(error));
        simpleInterest.insertBefore(errorMessage, calculate);
        // clear error
        setTimeout(clearError, 3000);
    }

    function clearError() {
        // remove error
        document.querySelector('.error').remove();
    }

    button.addEventListener('click', (e) => {
        console.log('Calculating...');
        // show loader
        button.classList.add('loading');

        // set timeout
        setTimeout(calculateResults, 2000);

        // prevent page from reloading on submit
        e.preventDefault();
    });