﻿function calculateResults(e) {


    // ui elements

    //const principal = Number(document.getElementById("principal").value);
    //document.getElementById("initial").innerHTML = "$" + principal;
    //const interest = Number(document.getElementById("interest").value);
    //let years = Number(document.getElementById("years").value);
    //let months = Number(document.getElementById("months").value);




    const loanAmount = 5000;
    const interest = 5;
    const months = 120;

    //if (years && months) {
    //    showError("Please only use months or years")
    //}
    //else if (years > 0) {
    //    months = years * 12;
    //    let loanAmount = parseFloat(principal);
    //    let rate = parseFloat(interest);
    //    var monthlyPayment = (loanAmount) * (rate / 1200) / (1 - (1 + rate / 1200) ** (-months));
    //    document.getElementById("payment").innerHTML = monthlyPayment.toFixed(2);

    //}
    //else if (months > 0) {
        
    //    let loanAmount = parseFloat(principal);
    //    let rate = parseFloat(interest);
    //    var monthlyPayment = (loanAmount) * (rate / 1200) / (1 - (1 + rate / 1200) ** (-months));
    //    document.getElementById("payment").innerHTML = monthlyPayment.toFixed(2);

    //}
    //else {
    //    showError("You didn't enter a time limit");
    //    return;
    //}




    let monthlyPayment = (loanAmount) * (interest / 1200) / (1 - (1 + interest / 1200) ** (-months));
    let remainingBalance = loanAmount;
    let amortizationSchedule = []

    for (let i = 0; i < months; i++) {
        interestPayment = remainingBalance * (interest / 1200);
        principalPayment = monthlyPayment - interestPayment

        remainingBalance = remainingBalance - principalPayment;

        amortizationSchedule.push([i + 1, monthlyPayment, principalPayment, interestPayment, remainingBalance])
        console.log(...amortizationSchedule[i])
    }





    //let paymentsPrincipal = [];
    //let paymentsInterest = [];
    paymentsPrincipal = [];    
    //let previousRemainingBalance = principal;
    //let currentInterest = 0;
    //paymentsPrincipal.push(parseFloat(principal));
    ////let previousRemainingBalance = principal;
    ////let currentInterest = 0;
    //for (let i = 0; i < months; i++) {

    //    //let previousRemainingBalance = principal;

    //    //let currentInterest = 0;
    //    let rate = interest;
    //    let interestPayment = ((previousRemainingBalance * rate) / 1200);        
    //    let principalPayment = monthlyPayment - interestPayment;
    //    let updateTotal = interestPayment + currentInterest;
    //    currentInterest = updateTotal;
    //    previousRemainingBalance = previousRemainingBalance - monthlyPayment;
    //    paymentsInterest.push(interestPayment);
    //    paymentsPrincipal.push(principalPayment);
    //    let finalTotal = principal + updateTotal;

    //    document.getElementById("testInterestPayments").innerHTML = paymentsInterest.join(", $");
    //    document.getElementById("testPrincipalPayments").innerHTML = paymentsPrincipal.join(", $");
    //    document.getElementById("finalInterest").innerHTML = parseFloat(updateTotal).toFixed(2);
    //    document.getElementById("total").innerHTML = finalTotal;
    //}

        //let currentInterest = 0;
        let rate = parseFloat(interest);
        let interestPayment = ((previousRemainingBalance * (rate / 1200)));        
        let principalPayment = parseFloat(monthlyPayment) - parseFloat(interestPayment);
        let updateTotal = parseFloat(interestPayment) + parseFloat(currentInterest);
        currentInterest = parseFloat(updateTotal);
        previousRemainingBalance = previousRemainingBalance - monthlyPayment;
        paymentsInterest.push(parseFloat(interestPayment));
        paymentsPrincipal.push(parseFloat(principalPayment));
        let finalTotal = parseFloat(principal) + parseFloat(updateTotal);

        document.getElementById("testInterestPayments").innerHTML = paymentsInterest.join(", $");
        document.getElementById("testPrincipalPayments").innerHTML = paymentsPrincipal.join(", $");
        document.getElementById("finalInterest").innerHTML = parseFloat(updateTotal).toFixed(2);
        document.getElementById("total").innerHTML = finalTotal;
    }


   

}

calculateResults("");


    //function showError(error) {
    //    // create error
    //    const errorMessage = document.createElement('div');
    //    const calculate = document.querySelector('#calculate');

    //    errorMessage.className = 'error';
    //    errorMessage.appendChild(document.createTextNode(error));
    //    simpleInterest.insertBefore(errorMessage, calculate);
    //    // clear error
    //    setTimeout(clearError, 3000);
    //}

    //function clearError() {
    //    // remove error
    //    document.querySelector('.error').remove();
    //}

    //button.addEventListener('click', (e) => {
    //    console.log('Calculating...');
    //    // show loader
    //    button.classList.add('loading');

    //    // set timeout
    //    setTimeout(calculateResults, 2000);

    //    // prevent page from reloading on submit
    //    e.preventDefault();
    //});